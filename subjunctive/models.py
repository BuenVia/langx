from django.db import models

# Create your models here.
class Level(models.Model):
    level = models.CharField(max_length=10, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.level
    
    class Meta:
        managed = True
        db_table = 'learn_level'


class Group(models.Model):
    group = models.CharField(max_length=255, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)
    level = models.ForeignKey(Level, on_delete=models.CASCADE)

    def __str__(self):
        return self.group
    
    class Meta:
        managed = True
        db_table = 'learn_group'


class Sentence(models.Model):
    sentence_eng = models.CharField(max_length=255, unique=True)
    sentence_spa = models.CharField(max_length=255, unique=True)
    date_create = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)

    def __str__(self):
        return self.sentence_eng
    
    class Meta:
        managed = True
        db_table = 'learn_sentence'