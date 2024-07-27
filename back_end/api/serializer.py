from .models import GrammarBlog, GrammarTest, GrammarTestSection, GrammarAssessment
from rest_framework import serializers # type: ignore


class GrammarBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarBlog
        fields = ["id", "name", "author", "body", "date_created"]

class GrammarAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarAssessment
        fields = ['id', 'question', 'answer', 'blog']

class GrammarTestSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarTestSection
        fields = ['id', 'name', 'blog', 'instruction']

class GrammarTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarTest
        fields = [
            'id',
            'test_type',
            'question',
            'answer',
            'option_one',
            'option_two',
            'option_three',
            'feedback',
            'test_section'
        ]
