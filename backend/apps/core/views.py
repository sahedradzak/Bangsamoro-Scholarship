from rest_framework import viewsets, permissions
from .models import Tenant
from .serializers import TenantSerializer

class BaseTenantMixin:
    """
    Mixin to filter querysets by the current tenant.
    Assumes the model has a 'tenant' field.
    """
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # If user is a super_admin, they see everything
        if getattr(self.request.user, 'role', None) == 'super_admin':
            return queryset
            
        # Get tenant from user or headers
        tenant_id = None
        if hasattr(self.request.user, 'tenant') and self.request.user.tenant:
            tenant_id = self.request.user.tenant.id
        else:
            # Fallback to header for guest access on public pages
            tenant_id = self.request.headers.get('X-Tenant-ID')

        if tenant_id:
            return queryset.filter(tenant_id=tenant_id)
        
        # If no tenant context, return empty or default behavior
        return queryset.none()

class TenantViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing Tenants.
    """
    queryset = Tenant.objects.all()
    serializer_class = TenantSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
