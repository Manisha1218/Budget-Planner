import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';import { Router, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ MatToolbarModule,
    ReactiveFormsModule,
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,MatButtonModule,RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todoForm: any;
  selectedMonth: any;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 },
    { month: 'April', expenseAmount: 2100 },
    { month: 'May', expenseAmount: 2200 },
    { month: 'June', expenseAmount: 2300 },
    { month: 'July', expenseAmount: 2400 },
    { month: 'August', expenseAmount: 2500 },
    { month: 'September', expenseAmount: 2600 },
    { month: 'October', expenseAmount: 2700 },
    { month: 'November', expenseAmount: 2800 },
    { month: 'December', expenseAmount: 2900 },
  ];
  
  monthSelected: boolean = false;
  
  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];
  
  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 },
  ];
  
  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 250 },
  ];
  
  aprilExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1200 },
    { expenseType: 'Light Bills', expenseAmount: 400 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  
  mayExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1300 },
    { expenseType: 'Groceries', expenseAmount: 600 },
    { expenseType: 'Dining', expenseAmount: 500 },
  ];
  
  juneExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1400 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
    { expenseType: 'Groceries', expenseAmount: 700 },
  ];
  
  julyExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1500 },
    { expenseType: 'Groceries', expenseAmount: 750 },
    { expenseType: 'Entertainment', expenseAmount: 500 },
  ];
  
  augustExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1600 },
    { expenseType: 'Groceries', expenseAmount: 800 },
    { expenseType: 'Dining', expenseAmount: 600 },
  ];
  
  septemberExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1700 },
    { expenseType: 'Light Bills', expenseAmount: 600 },
    { expenseType: 'Groceries', expenseAmount: 850 },
  ];
  
  octoberExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1800 },
    { expenseType: 'Groceries', expenseAmount: 900 },
    { expenseType: 'Entertainment', expenseAmount: 650 },
  ];
  
  novemberExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1900 },
    { expenseType: 'Groceries', expenseAmount: 950 },
    { expenseType: 'Dining', expenseAmount: 700 },
  ];
  
  decemberExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 2000 },
    { expenseType: 'Groceries', expenseAmount: 1000 },
    { expenseType: 'Entertainment', expenseAmount: 750 },
  ];
  
  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    this.selectedMonth = currentMonth;
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryExpense.push(newExpense);
          break;
        case 'February':
          this.februaryExpense.push(newExpense);
          break;
        case 'March':
          this.marchExpense.push(newExpense);
          break;
        case 'April':
          this.aprilExpense.push(newExpense);
          break;
        case 'May':
          this.mayExpense.push(newExpense);
          break;
        case 'June':
          this.juneExpense.push(newExpense);
          break;
        case 'July':
          this.julyExpense.push(newExpense);
          break;
        case 'August':
          this.augustExpense.push(newExpense);
          break;
        case 'September':
          this.septemberExpense.push(newExpense);
          break;
        case 'October':
          this.octoberExpense.push(newExpense);
          break;
        case 'November':
          this.novemberExpense.push(newExpense);
          break;
        case 'December':
          this.decemberExpense.push(newExpense);
          break;
        default:
          break;
      
      }
      this.todoForm.reset();
      this.todoForm.patchValue({ month: '', expenseType: '', expenseAmount: '' });
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    let filteredExpense: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredExpense = [...this.januaryExpense];
        break;
      case 'February':
        filteredExpense = [...this.februaryExpense];
        break;
      case 'March':
        filteredExpense = [...this.marchExpense];
        break;
      default:
        break;
    }
    return filteredExpense;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const income of this.gettodoFormonth(month)) {
      totalExpense += income.expenseAmount;
    }
    return totalExpense;
  }

  gettodoFormonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
      default:
        return [];
    }
  }

  onSave() {
    if (this.todoForm.valid) {
      const incomeData = this.todoForm.value;
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['home/dashboard']);
  }

  toggleSelection(expense: any) {
    expense.selected = !expense.selected;
  }

}