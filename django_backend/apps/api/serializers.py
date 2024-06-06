from rest_framework import serializers
from .models import User, Role, Email


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['server', 'role_name', 'role_id']


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = ['file_type', 'item_id', 'item_count', 'email_title', 'email_content']
