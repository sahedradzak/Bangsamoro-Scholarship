from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EvaluationViewSet, ScorecardViewSet

router = DefaultRouter()
router.register(r'evaluations', EvaluationViewSet)
router.register(r'scorecards', ScorecardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
