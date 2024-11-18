import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router 
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false); // User clicked cancel, send false
  }

  onYesClick(): void {
    this.dialogRef.close(true); // User clicked logout, send true
    this.router.navigate(['']);
  }
}
