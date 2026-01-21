from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScholarshipProgramViewSet, CriterionViewSet

router = DefaultRouter()
router.register(r'programs', ScholarshipProgramViewSet)
router.register(r'criteria', CriterionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
