import { Component } from '@angular/core';
import { MenuItemsService } from 'services/menu.service';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { Category } from 'models/Categories';
import { FooterComponent } from "../footer/footer.component";
import { FiltersComponent } from "../filters/filters.component";
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'haru-root',
  imports: [
    MenuItemComponent,
    FooterComponent,
    FiltersComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CommonModule,
],
  styles: [],
  templateUrl: "app.component.html",
})
export class AppComponent {
  Category = Category;
  
  constructor(
    protected menuItemsService: MenuItemsService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    // iconRegistry.addSvgIcon('haru-cloud', sanitizer.bypassSecurityTrustResourceUrl('svgs/HaruCafe_Mascot.svg'));
    // iconRegistry.addSvgIcon('haru-letters', sanitizer.bypassSecurityTrustResourceUrl('svgs/HaruCafe_Letters.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('svgs/instagram.svg'));
    iconRegistry.addSvgIcon('uber-eats', sanitizer.bypassSecurityTrustResourceUrl('svgs/uber-eats.svg'));
  }
}
