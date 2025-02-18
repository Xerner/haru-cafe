from .views import seed_json
from django.urls import path

urlpatterns = [
  path('seed-json', seed_json),
]
