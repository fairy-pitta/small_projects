from django.urls import path
from rest_framework import routers
from .views import ItemAPIView

router = routers.DefaultRouter()
router.register(r'', ItemAPIView)


