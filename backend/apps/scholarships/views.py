from rest_framework import viewsets, permissions
from apps.core.views import BaseTenantMixin
from .models import ScholarshipProgram, Criterion
from .serializers import ScholarshipProgramSerializer, CriterionSerializer

class ScholarshipProgramViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing scholarship programs.
    """
    queryset = ScholarshipProgram.objects.all()
    serializer_class = ScholarshipProgramSerializer
    lookup_field = 'slug'

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

class CriterionViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing scholarship criteria.
    """
    queryset = Criterion.objects.all()
    serializer_class = CriterionSerializer
    permission_classes = [permissions.IsAuthenticated]
