from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import SentenceSerializer

from .models import Level, Group, Sentence

# Create your views here.
def index(request):
    groups = Group.objects.all().order_by('level')
    return render(request, "subjunctive/index.html", {"groups": groups})


def learn(request, group_id):
    return render(request, "subjunctive/learn.html", {"group_id": group_id})


def practice(request, group_id):
    group = Group.objects.filter(id=group_id).first()
    sentences = Sentence.objects.filter(group=group_id)
    return render(request, "subjunctive/practice.html", {"group": group, "sentences": sentences})

class SentenceListCreate(generics.ListCreateAPIView):
    serializer_class = SentenceSerializer

    def get_queryset(self):
        group_id = self.request.query_params.get('group')
        return Sentence.objects.filter(group=group_id)