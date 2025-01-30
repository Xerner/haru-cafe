import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { FiltersComponent } from 'components/filters/filters.component';
import { FooterComponent } from 'components/footer/footer.component';
import { MenuItemComponent } from 'components/menu-item/menu-item.component';
import { Category } from 'models/Categories';
import { MenuItemsService } from 'services/menu.service';

@Component({
  selector: 'haru-landing-page',
  imports: [
    MenuItemComponent,
    FooterComponent,
    FiltersComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  Category = Category;
  
  constructor(
    protected menuItemsService: MenuItemsService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('svgs/instagram.svg'));
    iconRegistry.addSvgIcon('uber-eats', sanitizer.bypassSecurityTrustResourceUrl('svgs/uber-eats.svg'));
  }
}
