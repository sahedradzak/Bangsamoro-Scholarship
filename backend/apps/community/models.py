from django.db import models
from django.conf import settings
from apps.core.models import BaseModel

class Group(BaseModel):
    """
    A community group based on interest, course, or scholarship program.
    """
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='community/groups/', null=True, blank=True)
    
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='joined_groups', blank=True)
    
    is_private = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Post(BaseModel):
    """
    A post in the community feed.
    """
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='posts')
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, blank=True, related_name='posts')
    
    content = models.TextField()
    image = models.ImageField(upload_to='community/posts/', null=True, blank=True)
    
    # Simple likes count for now
    likes_count = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Post by {self.author.email} at {self.created_at}"

class Comment(BaseModel):
    """
    A comment on a post.
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"Comment by {self.author.email} on {self.post}"

class Connection(models.Model):
    """
    A bidirectional connection between two users (LinkedIn-style).
    """
    user1 = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='connections_1')
    user2 = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='connections_2')
    
    is_accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user1', 'user2')

    def __str__(self):
        status = "Connected" if self.is_accepted else "Pending"
        return f"{self.user1.email} <-> {self.user2.email} ({status})"
