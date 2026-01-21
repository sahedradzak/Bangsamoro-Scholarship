from django.db import models
from django.conf import settings
from apps.core.models import BaseModel

class Course(BaseModel):
    """
    An LMS course for scholars.
    """
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='learning/courses/', null=True, blank=True)
    
    instructor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='courses_taught')
    
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Lesson(BaseModel):
    """
    A specific lesson within a course.
    """
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)
    
    content = models.TextField(help_text="Markdown or HTML content")
    video_url = models.URLField(blank=True)
    
    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.course.title} - {self.title}"

class Enrollment(BaseModel):
    """
    User enrollment in a course.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrollments')
    
    enrolled_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        unique_together = ('user', 'course')

    def __str__(self):
        return f"{self.user.email} enrolled in {self.course.title}"

class Progress(models.Model):
    """
    Tracking user progress in a specific lesson.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    
    is_completed = models.BooleanField(default=False)
    last_accessed = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'lesson')

    def __str__(self):
        return f"{self.user.email} progress on {self.lesson.title}"
