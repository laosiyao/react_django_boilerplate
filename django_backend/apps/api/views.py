from django.shortcuts import render

# Create your views here.

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Role, Email
from .serializers import UserSerializer, RoleSerializer, EmailSerializer
import random
import string


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = User.objects.filter(username=username, password=password).first()
        if user:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)


class CaptchaView(APIView):
    def get(self, request):
        captcha_text = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        # For simplicity, just return the text; in a real app, you would generate an image.
        return Response({'captcha': captcha_text})


class RoleSearchView(generics.ListAPIView):
    serializer_class = RoleSerializer

    def get_queryset(self):
        server = self.request.query_params.get('server')
        role_name = self.request.query_params.get('role_name')
        role_id = self.request.query_params.get('role_id')
        queryset = Role.objects.all()
        if server:
            queryset = queryset.filter(server=server)
        if role_name:
            queryset = queryset.filter(role_name=role_name)
        if role_id:
            queryset = queryset.filter(role_id=role_id)
        return queryset


class EmailSenderView(APIView):
    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
