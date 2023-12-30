from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import *
from .serializer import *


class RecipeListViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetailViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeCreateViewSet(mixins.CreateModelMixin,
                          mixins.ListModelMixin,
                          mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeUpdateViewSet(mixins.UpdateModelMixin,
                          mixins.ListModelMixin,
                          mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDeleteViewSet(mixins.DestroyModelMixin,
                          mixins.ListModelMixin,
                          mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
