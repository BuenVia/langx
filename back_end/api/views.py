from django.shortcuts import render, redirect #type: ignore
from django.contrib import messages
from django.http import HttpResponse #type: ignore
from rest_framework import status #type: ignore
from rest_framework.views import APIView #type: ignore
from rest_framework.response import Response #type: ignore
import csv

from .models import GrammarBlog, GrammarTestSection, GrammarTest, GrammarAssessment
from .serializer import GrammarBlogSerializer, GrammarTestSectionSerializer, GrammarTestSerializer, GrammarAssessmentSerializer
from .forms import CSVImportForm

# Create your views here.
def index(request):
    return HttpResponse("Hello World!")

def bulk_import_view(request):
    if request.method == 'POST':
        form = CSVImportForm(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES['csv_file']
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            reader = csv.DictReader(decoded_file)
            for row in reader:
                GrammarTest.objects.create(
                    test_type=row['test_type'],
                    instruction=row['instruction'],
                    question=row['question'],
                    answer=row['answer'],
                    option_one=row['option_one'],
                    option_two=row['option_two'],
                    option_three=row['option_three'],
                    feedback=row['feedback'],
                    test_section_id=row['test_section']
                )
            messages.success(request, "Bulk import successful.")
            return redirect('admin:myapp_grammartest_changelist')
    else:
        form = CSVImportForm()
    
    context = {
        'form': form
    }
    return render(request, 'admin/bulk_import.html', context)

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
class GrammarAssessmentViewSet(APIView):
    def get(self, request, id, *args, **kwargs):
        gas = GrammarAssessment.objects.filter(blog=id)
        print(gas)
        serializer = GrammarAssessmentSerializer(gas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GrammarTestSectionViewSet(APIView):
    def get(self, request, id, *args, **kwargs):
        gts = GrammarTestSection.objects.filter(blog=id)
        print(gts)
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