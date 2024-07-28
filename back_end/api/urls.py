from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('api/category/', views.GrammarCategoryViewSet.as_view()),
    # Categories
    path('api/category/<id>', views.GrammarSubCategoryViewSet.as_view()),
    path('api/category', views.GrammarCategoryViewSet.as_view()),
    # Tests
    path('api/tests/<id>', views.GrammarTestSectionsViewSet.as_view()),
    path('api/section/questions/<id>', views.GrammarTestSectionViewSet.as_view()),
    path('api/questions/<id>', views.GrammarTestViewSet.as_view()),
    # Blogs
    path('api/blogs/', views.GrammarBlogsViewSet.as_view()),
    path('api/blogs/<id>', views.GrammarBlogViewSet.as_view()),
    path('api/blogs/assess/<id>', views.GrammarAssessmentViewSet.as_view()),
    
    
]
