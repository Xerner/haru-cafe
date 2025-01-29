import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, input, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageDialogDirective } from 'directives/image-dialog.directive';
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
  menuItem = input.required<IMenuItem>();
  imageElement = viewChild.required<HTMLImageElement>('imgRef');
  isDetailShown = signal<boolean>(false);
  hasDetail = computed<boolean>(() => typeof this.menuItem().description === "string" && this.menuItem().description!.length > 0);

  constructor() {

  }
}
