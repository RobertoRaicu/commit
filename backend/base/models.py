from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=64, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    archived = models.BooleanField(default=False)

    def __str__(self):
        return self.name


