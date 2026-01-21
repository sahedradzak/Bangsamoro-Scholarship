from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from apps.core.views import BaseTenantMixin
from .models import User, ScholarProfile
from .serializers import UserSerializer, ScholarProfileSerializer, RegisterSerializer

class UserViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get', 'put', 'patch'], url_path='me')
    def me(self, request):
        """
        Endpoint to get or update the current user's profile.
        """
        user = request.user
        if request.method == 'GET':
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        
        serializer = self.get_serializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class ScholarProfileViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing scholar profiles.
    """
    queryset = ScholarProfile.objects.all()
    serializer_class = ScholarProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        # Additional filtering: Users only see their own profile, admins see tenant profiles
        queryset = super().get_queryset()
        if self.request.user.role == 'applicant':
            return queryset.filter(user=self.request.user)
        return queryset
