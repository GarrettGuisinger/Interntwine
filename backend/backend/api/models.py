from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    cerated_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
    
class employers(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    locations = models.CharField(max_length=255)
    software = models.BooleanField()
    hardware = models.BooleanField()
    business = models.BooleanField()
    research = models.BooleanField()
    engineering = models.BooleanField()
    sales = models.BooleanField()
    description = models.CharField(max_length=255)
    