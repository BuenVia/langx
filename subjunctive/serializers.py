from rest_framework import serializers
from .models import Level, Group, Sentence


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ["id", "level", "date_created"]
        
        
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["id", "group", "level", "date_created"]
        
        
class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = ["id", "sentence_eng", "sentence_spa", "date_created", "group"]
        