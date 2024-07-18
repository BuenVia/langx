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

class GrammarTestSection(models.Model):
    name = models.CharField(max_length=10)
    
    class Meta:
        db_table = "grammartestsection"

    def __str__(self) -> str:
        return self.name

class GrammarTest(models.Model):
    test_type = models.IntegerField()
    instruction = models.TextField(blank=True)
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    option_one = models.CharField(max_length=255, blank=True)
    option_two = models.CharField(max_length=255, blank=True)
    option_three = models.CharField(max_length=255, blank=True)
    feedback = models.CharField(max_length=255, blank=True)
    concept = models.ForeignKey(GrammarConcept, on_delete=models.CASCADE)
    test_section = models.ForeignKey(GrammarTestSection, on_delete=models.CASCADE)

    class Meta:
        db_table = "GrammarTests"

    def __str__(self) -> str:
        return self.question    

class Vocab(models.Model):
    pass

    class Meta:
        pass

    def __str__(self) -> str:
        pass