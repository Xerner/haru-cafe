# from rest_framework.routers import SimpleRouter
from django.contrib import admin
from django.urls import path, include
from haru_cms.urls import urlpatterns as cms_urlpatterns
from haru_seeder.urls import urlpatterns as seeder_urlpatterns

# router = SimpleRouter()
# router.register(r'api/', include(cms_urlpatterns), basename='cms')
# router.register(r'api/', include(seeder_urlpatterns), basename='seed')
urlpatterns = [
  path(r'admin/', admin.site.urls),
  path(r'api/', include(cms_urlpatterns)),
  path(r'api/', include(seeder_urlpatterns))
]
# urlpatterns += router.urls
