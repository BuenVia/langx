from rest_framework import serializers
from .models import Level, Group, Sentence

class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = ["sentence_eng", "sentence_spa", "date_create", "group"]