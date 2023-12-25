from django.urls import path, include
from rest_framework import routers
from .views import RecipeViewSet

router = routers.SimpleRouter()
router.register(r'recipes', RecipeViewSet)
urlpatterns = [
    path('recipes/', RecipeViewSet.as_view({'get': 'list'})),
]
urlpatterns += router.urls
