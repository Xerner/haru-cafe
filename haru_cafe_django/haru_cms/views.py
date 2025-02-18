from django.shortcuts import HttpResponse
from django.views.decorators.http import require_GET

# Create your views here.
@require_GET
def menu_items(request, message: str = ''):
  return HttpResponse('Menu items ' + message)

