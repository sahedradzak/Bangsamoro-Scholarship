from rest_framework import serializers
from .models import ScholarshipProgram, Criterion

class CriterionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criterion
        fields = ['id', 'name', 'description', 'field_name', 'operator', 'value']

class ScholarshipProgramSerializer(serializers.ModelSerializer):
    criteria = CriterionSerializer(many=True, read_only=True)
    tenant_name = serializers.CharField(source='tenant.name', read_only=True)
    
    class Meta:
        model = ScholarshipProgram
        fields = [
            'id', 'tenant', 'tenant_name', 'title', 'slug', 'description', 
            'benefits', 'total_slots', 'amount_per_semester', 
            'application_start', 'application_deadline', 
            'status', 'level', 'tags', 'criteria'
        ]
        read_only_fields = ['id', 'tenant_name']
