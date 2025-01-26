import { CurrencyPipe } from '@angular/common';
import { Component, input, viewChild } from '@angular/core';
import { IMenuItem } from 'models/IMenuItem';

@Component({
  selector: 'haru-menu-item',
  imports: [
    CurrencyPipe,
  ],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  menuItem = input.required<IMenuItem>();
  imageElement = viewChild.required<HTMLImageElement>('imgRef');

  constructor() {

  }
}
