import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:any;
  registerForm:any;
  activeForm: 'login' | 'register' = 'login';
  snackBar: any;
  
  constructor( private fb: FormBuilder,private router: Router
  
    ){}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }
  
  login() {
    if (this.loginForm.valid) {
      console.log("Login info==>", this.loginForm.value);
      this.router.navigate(['/home']);
    } else {
      this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
    }
  }
  register() {
    if (this.registerForm.valid) {
      console.log("Register info==>>", this.registerForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/budget-planner/login']);
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
    }
  }
  
  
  
}
