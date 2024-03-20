from django.db import models
class Category(models.Model):
    class Meta:
        app_label = 'menu'
from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=255)
def _str_(self):
    return self.name
class ingredient(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name