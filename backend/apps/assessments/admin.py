from django.contrib import admin
from .models import Evaluation, Scorecard

@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = ('application', 'evaluator', 'score', 'is_final', 'tenant')
    list_filter = ('is_final', 'tenant', 'evaluator')

@admin.register(Scorecard)
class ScorecardAdmin(admin.ModelAdmin):
    list_display = ('program', 'tenant')
