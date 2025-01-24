import { Component, signal } from '@angular/core';
import { HaruIconComponent } from "../haru-icon/haru-icon.component";
import { EventType, Router, Scroll } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'haru-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    HaruIconComponent,
    CommonModule,
  ],
})
export class NavbarComponent {
  windowScrollY = signal<number>(0);

  constructor(private router: Router) {
    this.router.events.subscribe(this.onScrollEvent.bind(this) as unknown as any);
  }

  onScrollEvent(event: any) {
    var isScrollEvent = event.type == EventType.Scroll;
    if (!isScrollEvent) return;
    this.windowScrollY.set(window.scrollY);
  }
}
