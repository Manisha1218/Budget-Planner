import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from "../home/home.component";
import { Router, RouterModule } from '@angular/router';
import { IncomeComponent } from './income/income.component';





@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [MatCardModule, MatIconModule, MatDividerModule, HomeComponent,CommonModule,RouterModule,IncomeComponent]
})
export class DashboardComponent {
  
  showNavigation: boolean = false;
  lastMonthsIncome =['January : $1000', 'February : $1500', 'March : $1200', ]
  currentmonthicome=['Current Month : $2000']
  lastMonthsexpense =['January : $800', 'February : $100', 'March : $120', ]
  currentmonthisexpense=['Current Month : $1500']
  todoTransactions=[
    {description :'Pay electricity bill'},
    { description:'Submit Monthly reports'},
    {description :'Buy groceries'},
    { description:'Call insurance company'},
  
  ]
  currentmonthisexpenses= 1500;
  currentmonthicomes =2000;
  CurrentMonthSavings=this.currentmonthicomes-this.currentmonthisexpenses
  items = [
    { icon: 'attach_money', title: 'Current Month Income' },
    { icon: 'money_off', title: 'Current Month Expense' },
    { icon: 'account_balance_wallet', title: 'Current Month Savings' }
  ];
  constructor(private router: Router) { }
  onIncomeView() {
   
     this.router.navigate(['home/income-details']);
    this.showNavigation = true;
  }
  onExpenseView() {
    this.router.navigate(['home/expense-details']);
  }
  ontodoView() {
    this.router.navigate(['home/to-do']);
  }
}
