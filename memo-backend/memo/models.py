from django.db import models

# Create your models here.

class Memo(models.Model):
    title = models.CharField(max_length=100, verbose_name="タイトル")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

