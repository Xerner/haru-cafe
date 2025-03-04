from .views import seed_menu_item_json, seed_image_urls
from django.urls import path

urlpatterns = [
  path('seed-menu-item-json', seed_menu_item_json),
  path('seed-image-urls', seed_image_urls),
]
