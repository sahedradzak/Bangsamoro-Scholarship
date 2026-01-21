from rest_framework import serializers
from .models import Course, Lesson, Enrollment, Progress

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'course', 'title', 'order', 'content', 'video_url']

class CourseSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)
    instructor_name = serializers.CharField(source='instructor.get_full_name', read_only=True)
    
    class Meta:
        model = Course
        fields = ['id', 'tenant', 'title', 'slug', 'description', 'thumbnail', 'instructor', 'instructor_name', 'is_published', 'lessons']

class EnrollmentSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source='course.title', read_only=True)
    
    class Meta:
        model = Enrollment
        fields = ['id', 'user', 'course', 'course_title', 'enrolled_at', 'completed_at']
        read_only_fields = ['user', 'enrolled_at']

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ['id', 'user', 'lesson', 'is_completed', 'last_accessed']
        read_only_fields = ['user', 'last_accessed']
