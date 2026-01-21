from django.db import models
from apps.core.models import BaseModel

class ScholarshipProgram(BaseModel):
    """
    A scholarship program offered by a tenant.
    """
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    benefits = models.TextField()
    
    # Financials
    total_slots = models.PositiveIntegerField(null=True, blank=True)
    amount_per_semester = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    
    # Deadlines
    application_start = models.DateTimeField()
    application_deadline = models.DateTimeField()
    
    # Status
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('active', 'Active'),
        ('closed', 'Closed'),
        ('archived', 'Archived'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    # Matching Tags/Categories
    level_choices = [
        ('shs', 'Senior High School'),
        ('undergrad', 'Undergraduate'),
        ('graduate', 'Graduate'),
        ('vocational', 'Vocational'),
    ]
    level = models.CharField(max_length=20, choices=level_choices)
    tags = models.JSONField(default=list, blank=True)
    
    # Embedded Vector for similarity search (Future Phase 5)
    embedding = models.JSONField(null=True, blank=True) # Placeholder for vector

    class Meta:
        ordering = ['-application_deadline']

    def __str__(self):
        return f"{self.title} ({self.tenant.name if self.tenant else 'Platform'})"

class Criterion(BaseModel):
    """
    Eligibility criteria for a scholarship program.
    """
    program = models.ForeignKey(ScholarshipProgram, on_delete=models.CASCADE, related_name='criteria')
    name = models.CharField(max_length=255) # e.g., "Minimum GWA", "Residency"
    description = models.TextField()
    
    # Data-driven requirements
    field_name = models.CharField(max_length=100, help_text="Field name in profile to validate against")
    operator = models.CharField(max_length=20, default='>=') # >=, <=, ==, in
    value = models.CharField(max_length=255) # Value to Compare

    def __str__(self):
        return f"{self.name} for {self.program.title}"
