from django.shortcuts import render #type: ignore
from django.http import HttpResponse #type: ignore
from rest_framework import status #type: ignore
from rest_framework.views import APIView #type: ignore
from rest_framework.response import Response #type: ignore

from .models import GrammarConcept, GrammarBlog
from .serializer import GrammarConceptSerializer, GrammarBlogSerializer

# Create your views here.
def index(request):
    return HttpResponse("Hello World!")

class GrammarConceptsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        gcs = GrammarConcept.objects.all()
        serializer = GrammarConceptSerializer(gcs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GrammarBlogsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        gbs = GrammarBlog.objects.all()
        serializer = GrammarBlogSerializer(gbs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GrammarBlogViewSet(APIView):
    def get(self, request, id, *args, **kwargs):
        gbs = GrammarBlog.objects.filter(id=id)
        serializer = GrammarBlogSerializer(gbs, many=True)
        # print(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)
        return HttpResponse(args)