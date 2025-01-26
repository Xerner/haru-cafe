import { Injectable, signal } from '@angular/core';
import { Category } from 'models/Categories';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  activeCategories = signal<Category[]>([]);

  toggleCategories(categoriesToTurnOn: Category[], categoriesToTurnOff: Category[]) {
    var activeCategories = this.activeCategories();
    var filteredCategories = activeCategories.filter(c => categoriesToTurnOff.includes(c) == false);
    this.activeCategories.set([...new Set([...filteredCategories, ...categoriesToTurnOn])]);
  }
}
