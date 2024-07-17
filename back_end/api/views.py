from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView #type: ignore
from rest_framework.response import Response #type: ignore

from .models import GrammarConcept
from .serializer import GrammarConceptSerializer

# Create your views here.
def index(request):
    return HttpResponse("Hello World!")

class GrammarConceptsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        gcs = GrammarConcept.objects.all()
        serializer = GrammarConceptSerializer(gcs, many=True)
        return Response(serializer.data, )