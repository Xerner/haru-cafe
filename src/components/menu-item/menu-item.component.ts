import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageDialogDirective } from 'directives/image-dialog.directive';
import { Category } from 'models/Categories';
import { IMenuItem } from 'models/interfaces/IMenuItem';

@Component({
  selector: 'haru-menu-item',
  imports: [
    CurrencyPipe,
    MatIconModule,
    MatRippleModule,
    ImageDialogDirective,
    CommonModule,
  ],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  Category = Category;
  menuItem = input.required<IMenuItem>();
  isDetailShown = signal<boolean>(false);
  hasDetail = computed<boolean>(() => typeof this.menuItem().description === "string" && this.menuItem().description!.length > 0);
}
