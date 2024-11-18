import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatCard, MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../../logout/logout.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule,MatCardModule,MatCard,CommonModule,MatDialogModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { route: 'home/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { route: 'home/profile', icon: 'person', label: 'Profile' },
    { route: 'home/previous-history', icon: 'history', label: 'Previous History' },
    { route: 'home/logout', icon: 'logout', label: 'Logout' }
  ];
selectedItem: any;
  constructor(private router: Router,private dialog: MatDialog) { }
 
  navigateTo(route: string) {
    if (route === 'home/logout') {
      this.openLogoutConfirmationDialog();
    } else {
      this.router.navigate([route]);
    }
  }

  openLogoutConfirmationDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Perform logout action
      }
    });
  }
}
