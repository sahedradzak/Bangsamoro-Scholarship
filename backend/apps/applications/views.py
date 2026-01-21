from rest_framework import viewsets, permissions
from apps.core.views import BaseTenantMixin
from .models import Application, ApplicationDocument
from .serializers import ApplicationSerializer, ApplicationDocumentSerializer

class ApplicationViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing scholarship applications.
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = super().get_queryset()
        # Applicants only see their own applications
        if self.request.user.role == 'applicant':
            return queryset.filter(user=self.request.user)
        return queryset

class ApplicationDocumentViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing application documents.
    """
    queryset = ApplicationDocument.objects.all()
    serializer_class = ApplicationDocumentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if self.request.user.role == 'applicant':
            return queryset.filter(application__user=self.request.user)
        return queryset
