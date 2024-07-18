from django.shortcuts import render #type: ignore
from django.http import HttpResponse #type: ignore
from rest_framework import status #type: ignore
from rest_framework.views import APIView #type: ignore
from rest_framework.response import Response #type: ignore

from .models import GrammarBlog, GrammarTestSection, GrammarTest
from .serializer import GrammarBlogSerializer, GrammarTestSectionSerializer, GrammarTestSerializer

# Create your views here.
def index(request):
    return HttpResponse("Hello World!")

### BLOGS

class GrammarBlogsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        gbs = GrammarBlog.objects.all()
        serializer = GrammarBlogSerializer(gbs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GrammarBlogViewSet(APIView):
    def get(self, request, id, *args, **kwargs):
        gbs = GrammarBlog.objects.filter(id=id)
        serializer = GrammarBlogSerializer(gbs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
### TESTS
    
class GrammarTestSectionViewSet(APIView):
    def get(self, request, *args, **kwargs):
        gts = GrammarTestSection.objects.all()
        serializer = GrammarTestSectionSerializer(gts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class GrammarTestsViewSet(APIView):
    def get(self, request, id, *args, **kwargs):
        gt = GrammarTest.objects.all()
        serializer = GrammarTestSerializer(gt, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class GrammarTestViewSet(APIView):
    def get(self, request, id, *args, **kwargs):
        gt = GrammarTest.objects.filter(test_section=id)
        serializer = GrammarTestSerializer(gt, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)