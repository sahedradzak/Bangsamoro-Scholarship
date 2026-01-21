from django.db import models
from django.conf import settings
from apps.core.models import BaseModel

class Application(BaseModel):
    """
    An application submitted by a user for a scholarship program.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='applications')
    program = models.ForeignKey('scholarships.ScholarshipProgram', on_delete=models.CASCADE, related_name='applications')
    
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('submitted', 'Submitted'),
        ('under_review', 'Under Review'),
        ('shortlisted', 'Shortlisted'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='submitted')
    
    # Submission Data
    submission_date = models.DateTimeField(auto_now_add=True)
    last_status_update = models.DateTimeField(auto_now=True)
    
    # Internal Notes for Evaluators
    internal_remarks = models.TextField(blank=True)

    class Meta:
        unique_together = ('user', 'program')
        ordering = ['-submission_date']

    def __str__(self):
        return f"{self.user.email} -> {self.program.title}"

class ApplicationDocument(BaseModel):
    """
    Supporting documents for an application (e.g., TOR, Certificate of Residency).
    """
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name='documents')
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='applications/documents/')
    
    # Verification Status
    VERIFY_CHOICES = [
        ('pending', 'Pending Verification'),
        ('verified', 'Verified'),
        ('rejected', 'Rejected/Invalid'),
    ]
    verification_status = models.CharField(max_length=20, choices=VERIFY_CHOICES, default='pending')
    verification_remarks = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} for {self.application}"
