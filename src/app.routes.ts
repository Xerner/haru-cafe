import { Routes } from '@angular/router';
import { LandingPageComponent } from 'src/components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '',     component: LandingPageComponent },
  { path: '홈',   redirectTo: '/' },
  { path: '**',   redirectTo: '/' },
];
