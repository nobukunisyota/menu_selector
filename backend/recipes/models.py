from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.TextField()
    directions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
