from rest_framework import serializers
from .models import Evaluation, Scorecard

class EvaluationSerializer(serializers.ModelSerializer):
    evaluator_name = serializers.CharField(source='evaluator.get_full_name', read_only=True)
    
    class Meta:
        model = Evaluation
        fields = [
            'id', 'tenant', 'application', 'evaluator', 'evaluator_name',
            'score', 'remarks', 'is_final', 'created_at'
        ]
        read_only_fields = ['id', 'evaluator', 'created_at']

class ScorecardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scorecard
        fields = ['id', 'tenant', 'program', 'criteria_json']
