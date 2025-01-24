import { Injectable, signal } from '@angular/core';
import { IMenuItem } from 'models/IMenuItem';
import { MENU_ITEMS } from 'data/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  menuItems = signal<IMenuItem[]>(MENU_ITEMS);
}
