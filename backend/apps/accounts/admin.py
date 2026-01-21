from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, ScholarProfile


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """Custom admin for User model with email-based authentication."""

    list_display = ('email', 'first_name', 'last_name', 'role', 'tenant', 'is_active', 'created_at')
    list_filter = ('role', 'is_active', 'is_staff', 'tenant', 'created_at')
    search_fields = ('email', 'first_name', 'last_name', 'phone_number')
    ordering = ('-created_at',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'phone_number', 'date_of_birth')}),
        ('Role & Tenant', {'fields': ('role', 'tenant')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Timestamps', {'fields': ('created_at', 'updated_at', 'last_login')}),
    )

    readonly_fields = ('created_at', 'updated_at', 'last_login')

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'role', 'tenant'),
        }),
    )

@admin.register(ScholarProfile)
class ScholarProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'current_school', 'course', 'year_level', 'gwa')
    search_fields = ('user__email', 'current_school', 'course')
