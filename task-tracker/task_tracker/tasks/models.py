from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Task(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("In progress", "In Progress"),
        ("Completed", "Completed"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    title = models.CharField(max_length=200)
    status = models.CharField(max_length=20,choices=STATUS_CHOICES,default='Pending')

    def __str__(self):
        return self.title
