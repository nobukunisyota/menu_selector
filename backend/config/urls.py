from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

router = routers.SimpleRouter()
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'recipes'), namespace='recipes')),
]
