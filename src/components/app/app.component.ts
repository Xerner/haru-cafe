import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DebugService } from 'src/services/debug.service';

@Component({
  selector: 'haru-root',
  imports: [
    RouterModule,
  ],
  templateUrl: "app.component.html",
})
export class AppComponent {
  constructor(
    private debugService: DebugService,
  ) { }
  
}
