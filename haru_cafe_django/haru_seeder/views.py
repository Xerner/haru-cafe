import os
from django.shortcuts import HttpResponse
from django.http import HttpRequest
from django.contrib.auth.decorators import login_required
from django.db import transaction
from haru_seeder.seeders import MenuItemRawJsonSeeder, ImageUrlSeeder
from haru_seeder import SEEDERS_DIR
from haru_cafe_django.paths import MEDIA_ROOT


@login_required
@transaction.atomic
def seed_menu_item_json(_: HttpRequest):
  menu_item_json_seeder = MenuItemRawJsonSeeder()
  json_str = menu_item_json_seeder.seed(os.path.join(SEEDERS_DIR, "data", "menu-items.json"))
  return HttpResponse(json_str, content_type="application/json")

@login_required
@transaction.atomic
def seed_image_urls(_: HttpRequest):
  image_url_seeder = ImageUrlSeeder()
  images_dir = os.path.join(MEDIA_ROOT, "images")
  json_str = image_url_seeder.seed(images_dir)
  return HttpResponse(json_str, content_type="application/json")
