from django.db import models


class Recipe(models.Model):
    class Meta:
        db_table = 'recipes'

    name = models.CharField(max_length=255)
    description = models.TextField()
    images = models.ImageField(upload_to='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
