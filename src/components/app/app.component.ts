import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MenuItemsService } from 'services/menu.service';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { ImageDialogDirective } from 'directives/image-dialog.directive';
import { H1Component } from "../h1/h1.component";
import { Category } from 'models/Categories';
import { H2Component } from "../h2/h2.component";

@Component({
  selector: 'haru-root',
  imports: [
    NavbarComponent,
    MenuItemComponent,
    ImageDialogDirective,
    H1Component,
    H2Component
],
  styles: [],
  templateUrl: "app.component.html",
})
export class AppComponent {
  Category = Category;
  
  constructor(
    protected menuItemsService: MenuItemsService,
  ) { }
}
