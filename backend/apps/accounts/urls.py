from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ScholarProfileViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ScholarProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
