from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicationViewSet, ApplicationDocumentViewSet

router = DefaultRouter()
router.register(r'submissions', ApplicationViewSet)
router.register(r'documents', ApplicationDocumentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
