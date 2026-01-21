import uuid
from django.db import models

class Tenant(models.Model):
    """
    Scholarship-granting entity (e.g., MBHTE, MOST, MOH).
    Used for multi-tenant data isolation.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    logo = models.ImageField(upload_to='tenants/logos/', null=True, blank=True)
    description = models.TextField(blank=True)
    
    # Branding
    primary_color = models.CharField(max_length=7, default='#1B5E20') # Forest Green
    secondary_color = models.CharField(max_length=7, default='#D4A017') # Gold
    
    # Settings
    is_active = models.BooleanField(default=True)
    settings = models.JSONField(default=dict, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class BaseModel(models.Model):
    """
    Abstract base model for all tenant-aware models.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, blank=True, related_name="%(class)s_records")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
