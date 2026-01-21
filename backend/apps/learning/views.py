from rest_framework import viewsets, permissions
from apps.core.views import BaseTenantMixin
from .models import Course, Lesson, Enrollment, Progress
from .serializers import CourseSerializer, LessonSerializer, EnrollmentSerializer, ProgressSerializer

class CourseViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'slug'

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
