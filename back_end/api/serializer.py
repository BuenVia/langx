from .models import GrammarConcept
from rest_framework import serializers # type: ignore

class GrammarConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarConcept
        fields = ["id", "name"]