import { Injectable, signal } from '@angular/core';
import { Category, MutuallyExclusiveCategories } from 'models/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories = signal<Category[]>(Object.values(Category));
  mutuallyExclusiveCategories = signal<Category[][]>(MutuallyExclusiveCategories);
}