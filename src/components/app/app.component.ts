import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MenuItemsService } from 'services/menu.service';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { ImageDialogDirective } from 'directives/image-dialog.directive';

@Component({
  selector: 'haru-root',
  imports: [
    NavbarComponent,
    MenuItemComponent,
    ImageDialogDirective,
],
  styles: [],
  templateUrl: "app.component.html",
})
export class AppComponent {
  constructor(
    protected menuItemsService: MenuItemsService,
  ) { }
}
