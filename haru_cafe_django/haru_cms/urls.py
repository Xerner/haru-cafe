from rest_framework.routers import DefaultRouter
from haru_cms.api.MenuItem import MenuItemViewSet
from haru_cms.api.MenuItemCategory import MenuItemCategoryViewSet
from haru_cms.api.MenuItemSize import MenuItemSizeViewSet

router = DefaultRouter()
router.register('menu-items', MenuItemViewSet, basename='menu-item')
router.register('menu-item-categories', MenuItemCategoryViewSet, basename='menu-item-category')
router.register('menu-item-sizes', MenuItemSizeViewSet, basename='menu-item-size')
urlpatterns = router.urls
