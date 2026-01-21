from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    """Custom user manager supporting both email and username."""

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        # Generate username from email if not provided
        if 'username' not in extra_fields or not extra_fields['username']:
            extra_fields['username'] = email.split('@')[0]
            # Ensure uniqueness by appending numbers if needed
            base_username = extra_fields['username']
            counter = 1
            while self.model.objects.filter(username=extra_fields['username']).exists():
                extra_fields['username'] = f"{base_username}{counter}"
                counter += 1
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Custom user model supporting both email and username login."""

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField('email address', unique=True)

    # Profile fields
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=20, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)

    # Role fields
    ROLE_CHOICES = [
        ('applicant', 'Scholarship Applicant'),
        ('entity_admin', 'Entity Administrator'),
        ('entity_evaluator', 'Entity Evaluator'),
        ('entity_finance', 'Entity Finance'),
        ('entity_viewer', 'Entity Viewer'),
        ('verification_partner', 'Verification Partner'),
        ('content_moderator', 'Content Moderator'),
        ('support_staff', 'Support Staff'),
        ('super_admin', 'Super Administrator'),
    ]
    role = models.CharField(max_length=30, choices=ROLE_CHOICES, default='applicant')

    # Tenant reference (nullable for platform-wide users)
    tenant = models.ForeignKey('core.Tenant', on_delete=models.SET_NULL, null=True, blank=True, related_name='users')

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = UserManager()

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
        ordering = ['-created_at']

    def __str__(self):
        return self.email

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

    def get_short_name(self):
        return self.first_name

    @property
    def is_platform_admin(self):
        """Check if user is a platform-level administrator."""
        return self.role in ['super_admin', 'content_moderator', 'support_staff']

    @property
    def is_entity_staff(self):
        """Check if user is an entity staff member."""
        return self.role in ['entity_admin', 'entity_evaluator', 'entity_finance', 'entity_viewer']


class ScholarProfile(models.Model):
    """
    Extended profile information for applicants/scholars.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    
    # Academic Info
    current_school = models.CharField(max_length=255, blank=True)
    course = models.CharField(max_length=255, blank=True)
    year_level = models.PositiveSmallIntegerField(null=True, blank=True)
    gwa = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)
    
    # Professional/Skills
    bio = models.TextField(blank=True)
    skills = models.JSONField(default=list, blank=True) # List of skills
    achievements = models.JSONField(default=list, blank=True) # List of achievement dicts
    
    # Portfolio & Social
    portfolio_url = models.URLField(max_length=500, blank=True)
    linkedin_url = models.URLField(max_length=500, blank=True)
    github_url = models.URLField(max_length=500, blank=True)
    
    # Extra Data
    metadata = models.JSONField(default=dict, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Profile of {self.user.email}"
