import os
from django.shortcuts import HttpResponse
from django.http import HttpRequest
from django.contrib.auth.decorators import login_required
from django.db import transaction
from haru_seeder.seeders.seed_json import MenuItemRawJsonSeeder
from haru_seeder import SEEDERS_DIR

@login_required
@transaction.atomic
def seed_json(_: HttpRequest):
  seeder = MenuItemRawJsonSeeder()
  json_str = seeder.seed(os.path.join(SEEDERS_DIR, "data", "menu-items.json"))
  return HttpResponse(json_str, content_type="application/json")
