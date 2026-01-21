from django.contrib import admin
from .models import Group, Post, Comment, Connection

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'is_private', 'tenant')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('author', 'group', 'likes_count', 'created_at', 'tenant')
    list_filter = ('tenant', 'group')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('author', 'post', 'created_at')

@admin.register(Connection)
class ConnectionAdmin(admin.ModelAdmin):
    list_display = ('user1', 'user2', 'is_accepted', 'created_at')
