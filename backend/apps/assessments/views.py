from rest_framework import viewsets, permissions
from apps.core.views import BaseTenantMixin
from .models import Evaluation, Scorecard
from .serializers import EvaluationSerializer, ScorecardSerializer

class EvaluationViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing application evaluations.
    """
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(evaluator=self.request.user)

class ScorecardViewSet(BaseTenantMixin, viewsets.ModelViewSet):
    """
    ViewSet for managing scholarship scorecards.
    """
    queryset = Scorecard.objects.all()
    serializer_class = ScorecardSerializer
    permission_classes = [permissions.IsAuthenticated]
