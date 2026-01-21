from rest_framework import viewsets, permissions
from apps.core.views import BaseTenantMixin
from .models import Group, Post, Comment, Connection
from .serializers import GroupSerializer, PostSerializer, CommentSerializer, ConnectionSerializer

class GroupViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = 'slug'

class PostViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ConnectionViewSet(viewsets.ModelViewSet):
    queryset = Connection.objects.all()
    serializer_class = ConnectionSerializer
    
    def get_queryset(self):
        # Connections are user-specific, not tenant-bound in the same way
        return Connection.objects.filter(user1=self.request.user) | Connection.objects.filter(user2=self.request.user)
