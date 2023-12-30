from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('recipes', RecipeListViewSet, basename='recipe')
router.register('recipes', RecipeDetailViewSet, basename='recipe')
router.register('recipes', RecipeCreateViewSet, basename='recipe')
router.register('recipes', RecipeUpdateViewSet, basename='recipe')
router.register('recipes', RecipeDeleteViewSet, basename='recipe')
urlpatterns = [
    path('recipes/', RecipeListViewSet.as_view({'get': 'list'})),
    path('recipes/<int:pk>/',
         RecipeDetailViewSet.as_view({'get': 'retrieve'})),
    path('recipes/add/', RecipeCreateViewSet.as_view({'post': 'create'})),
    path('recipes/update/<int:pk>/',
         RecipeUpdateViewSet.as_view({'put': 'update'})),
    path('recipes/delete/<int:pk>/',
         RecipeDeleteViewSet.as_view({'delete': 'destroy'})),

]
