from django.contrib import admin
from .models import Application, ApplicationDocument

class ApplicationDocumentInline(admin.TabularInline):
    model = ApplicationDocument
    extra = 0

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('user', 'program', 'status', 'submission_date', 'tenant')
    list_filter = ('status', 'tenant', 'program')
    search_fields = ('user__email', 'program__title')
    inlines = [ApplicationDocumentInline]

@admin.register(ApplicationDocument)
class ApplicationDocumentAdmin(admin.ModelAdmin):
    list_display = ('name', 'application', 'verification_status')
    list_filter = ('verification_status', 'application__program__tenant')
