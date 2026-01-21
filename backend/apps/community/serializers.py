from rest_framework import serializers
from .models import Group, Post, Comment, Connection
from apps.accounts.serializers import UserSerializer

class GroupSerializer(serializers.ModelSerializer):
    member_count = serializers.IntegerField(source='members.count', read_only=True)
    
    class Meta:
        model = Group
        fields = ['id', 'tenant', 'name', 'slug', 'description', 'cover_image', 'is_private', 'member_count']

class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'post', 'author', 'author_name', 'content', 'created_at']
        read_only_fields = ['author', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'tenant', 'author', 'author_name', 'group', 'content', 'image', 'likes_count', 'comments', 'created_at']
        read_only_fields = ['author', 'likes_count', 'created_at']

class ConnectionSerializer(serializers.ModelSerializer):
    user1_email = serializers.EmailField(source='user1.email', read_only=True)
    user2_email = serializers.EmailField(source='user2.email', read_only=True)
    
    class Meta:
        model = Connection
        fields = ['id', 'user1', 'user1_email', 'user2', 'user2_email', 'is_accepted', 'created_at']
        read_only_fields = ['created_at']
