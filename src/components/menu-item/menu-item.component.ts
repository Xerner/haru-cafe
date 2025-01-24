import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ImageDialogDirective } from 'directives/image-dialog.directive';
import { IMenuItem } from 'models/IMenuItem';

@Component({
  selector: 'haru-menu-item',
  imports: [
    CurrencyPipe,
    ImageDialogDirective,
  ],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  menuItem = input.required<IMenuItem>();
}
