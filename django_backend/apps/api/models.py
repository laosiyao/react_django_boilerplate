from django.db import models

# Create your models here.
from django.db import models


class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)


class Role(models.Model):
    server = models.CharField(max_length=50)
    role_name = models.CharField(max_length=100)
    role_id = models.CharField(max_length=100)


class Email(models.Model):
    file_type = models.CharField(max_length=50)
    item_id = models.CharField(max_length=50)
    item_count = models.PositiveIntegerField()
    email_title = models.CharField(max_length=200)
    email_content = models.TextField()
