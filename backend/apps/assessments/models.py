from django.db import models
from django.conf import settings
from apps.core.models import BaseModel

class Evaluation(BaseModel):
    """
    Reviewer's assessment of an application.
    """
    application = models.ForeignKey('applications.Application', on_delete=models.CASCADE, related_name='evaluations')
    evaluator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='evaluations_performed')
    
    # Grading
    score = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    remarks = models.TextField(blank=True)
    
    # Status
    is_final = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Eval of {self.application} by {self.evaluator}"

class Scorecard(BaseModel):
    """
    Configurable scoring criteria per scholarship program.
    """
    program = models.OneToOneField('scholarships.ScholarshipProgram', on_delete=models.CASCADE, related_name='scorecard')
    criteria_json = models.JSONField(default=dict, help_text="Configurable weights and criteria names")

    def __str__(self):
        return f"Scorecard for {self.program.title}"
