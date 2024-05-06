from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("learn/<int:group_id>", views.learn, name="learn"),
    path("practice/<int:group_id>", views.practice, name="practice"),
    path("api/levels", views.LevelListCreate.as_view(), name="level"),
    path("api/groups", views.GroupListCreate.as_view(), name="group"),
    path("api/practice/<group_id>", views.SentenceListCreate.as_view(), name="sentences")
]
