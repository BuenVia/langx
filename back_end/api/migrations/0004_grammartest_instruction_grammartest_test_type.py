# Generated by Django 5.0.7 on 2024-07-18 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_grammartest_answer_grammartest_concept_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='grammartest',
            name='instruction',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='grammartest',
            name='test_type',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
