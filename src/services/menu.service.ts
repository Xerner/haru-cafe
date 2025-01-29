import { computed, Injectable, signal } from '@angular/core';
import { IMenuItem } from 'models/interfaces/IMenuItem';
import { MENU_ITEMS } from 'data/menu-items';
import { Category } from 'models/Categories';
import { FilterService } from './filter.service';
import { MenuItem } from 'models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  private menuItems = signal<MenuItem[]>(MENU_ITEMS.map(item => new MenuItem(item)).sort((menuItem1, menuItem2) => menuItem1.name.localeCompare(menuItem2.name)));
  filteredMenuItems = computed<IMenuItem[]>(() => {
    var menuItems = this.menuItems();
    var activeCategories = this.filtersService.activeCategories();
    return menuItems
      .filter(item => item.isActive !== false)
      .filter(item => item.categories !== undefined 
                   && item.categories.length > 0 
                   && (activeCategories.length === 0 || activeCategories.every(category => item.categories!.includes(category))));
  });

  constructor(
    private filtersService: FilterService,
  ) { }

  menuItemsByCategory(...categories: Category[]) {
    if (categories.length === 0) {
      return [];
    }
    return this.menuItems()
      .filter(item => item.categories !== undefined 
        && item.categories.length > 0 
        && categories.every(category => item.categories!.includes(category)))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
