from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('api/blogs/', views.GrammarBlogsViewSet.as_view()),
    path('api/blogs/<id>', views.GrammarBlogViewSet.as_view()),

    path('api/tests/', views.GrammarTestSectionViewSet.as_view()),
    path('api/tests/<id>', views.GrammarTestViewSet.as_view())
]
