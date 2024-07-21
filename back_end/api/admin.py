from django.contrib import admin
from .models import GrammarBlog, GrammarTest, GrammarTestSection, GrammarAssessment

# Register your models here.
admin.site.register(GrammarBlog)
admin.site.register(GrammarAssessment)
admin.site.register(GrammarTestSection)
admin.site.register(GrammarTest)