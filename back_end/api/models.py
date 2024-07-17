from django.db import models

# Create your models here.
class GrammarConcept(models.Model):
    name = models.CharField(max_length=90)

    class Meta:
        db_table = "GrammarConcepts"

    def __str__(self) -> str:
        return self.name

class GrammarBlog(models.Model):
    name = models.CharField(max_length=90)
    author = models.CharField(max_length=90)
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    concept = models.ForeignKey(GrammarConcept, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "GrammarBlogs"

    def __str__(self) -> str:
        return f"Blog: {self.name}"

class GrammarTest(models.Model):
    pass

    class Meta:
        pass

    def __str__(self) -> str:
        pass

class Vocab(models.Model):
    pass

    class Meta:
        pass

    def __str__(self) -> str:
        pass