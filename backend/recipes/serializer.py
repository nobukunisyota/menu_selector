from .models import *
from rest_framework import serializers


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = '__all__'
