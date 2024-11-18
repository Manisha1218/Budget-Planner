import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule, Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    SidebarComponent,
    RouterModule
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(destination: string) {
    switch (destination) {
      case 'search':
        this.router.navigate(['/search']);
        break;
      case 'bookmark':
        this.router.navigate(['/bookmarks']);
        break;
      case 'mail':
        this.router.navigate(['/mail']);
        break;
      default:
        break;
    }
  }
}
