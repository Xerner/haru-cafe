import { Injectable, signal } from '@angular/core';
import { IMenuItem } from 'models/IMenuItem';
import { MENU_ITEMS } from 'data/menu-items';
import { Category } from 'models/Categories';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  menuItems = signal<IMenuItem[]>(MENU_ITEMS);

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
