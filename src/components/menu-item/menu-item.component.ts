import { CurrencyPipe } from '@angular/common';
import { Component, input, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IMenuItem } from 'models/IMenuItem';

@Component({
  selector: 'haru-menu-item',
  imports: [
    CurrencyPipe,
    MatIconModule,
  ],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  menuItem = input.required<IMenuItem>();
  imageElement = viewChild.required<HTMLImageElement>('imgRef');

  constructor() {

  }
}
