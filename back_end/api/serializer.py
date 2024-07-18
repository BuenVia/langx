from .models import GrammarConcept, GrammarBlog, GrammarTest, GrammarTestSection
from rest_framework import serializers # type: ignore

class GrammarConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarConcept
        fields = ["id", "name"]

class GrammarBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarBlog
        fields = ["id", "name", "author", "body", "date_created", "concept"]

class GrammarTestSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarTestSection
        fields = ['id', 'name']

class GrammarTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarTest
        fields = [
            'id',
            'test_type',
            'instruction',
            'question',
            'answer',
            'option_one',
            'option_two',
            'option_three',
            'feedback',
            'concept',
            'test_section'
        ]
