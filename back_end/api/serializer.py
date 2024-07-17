from .models import GrammarConcept, GrammarBlog
from rest_framework import serializers # type: ignore

class GrammarConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarConcept
        fields = ["id", "name"]

class GrammarBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarBlog
        fields = ["id", "name", "author", "body", "date_created", "concept"]
