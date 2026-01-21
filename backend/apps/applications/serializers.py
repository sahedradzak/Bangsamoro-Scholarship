from rest_framework import serializers
from .models import Application, ApplicationDocument

class ApplicationDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationDocument
        fields = ['id', 'name', 'file', 'verification_status', 'verification_remarks']
        read_only_fields = ['id', 'verification_status', 'verification_remarks']

class ApplicationSerializer(serializers.ModelSerializer):
    documents = ApplicationDocumentSerializer(many=True, read_only=True)
    program_title = serializers.CharField(source='program.title', read_only=True)
    user_email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = Application
        fields = [
            'id', 'tenant', 'user', 'user_email', 'program', 'program_title',
            'status', 'submission_date', 'last_status_update', 
            'internal_remarks', 'documents'
        ]
        read_only_fields = ['id', 'user', 'submission_date', 'last_status_update', 'internal_remarks']
        
    def create(self, validated_data):
        # Automatically assign current user to application
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
