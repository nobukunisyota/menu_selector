from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
