from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    description = models.TextField()


    def __self__(self):
        return self.name

