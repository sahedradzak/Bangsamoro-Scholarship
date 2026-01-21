from django.contrib import admin
from .models import ScholarshipProgram, Criterion

class CriterionInline(admin.TabularInline):
    model = Criterion
    extra = 1

@admin.register(ScholarshipProgram)
class ScholarshipProgramAdmin(admin.ModelAdmin):
    list_display = ('title', 'tenant', 'status', 'level', 'application_deadline')
    list_filter = ('status', 'level', 'tenant')
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [CriterionInline]

@admin.register(Criterion)
class CriterionAdmin(admin.ModelAdmin):
    list_display = ('name', 'program', 'field_name', 'operator', 'value')
    list_filter = ('program__tenant', 'program')
