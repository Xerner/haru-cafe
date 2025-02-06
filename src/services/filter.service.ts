import { EventEmitter, Injectable, signal } from '@angular/core';
import { Category } from 'models/Categories';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  activeCategories = signal<Category[]>([]);
}
