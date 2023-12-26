from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('recipes', RecipeViewSet, basename='recipe')
router.register('histories', HistoryViewSet, basename='history')
urlpatterns = [
    path('recipes/', include(router.urls)),
    path('histories/', include(router.urls)),
]
