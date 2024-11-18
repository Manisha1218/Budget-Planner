import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './admin/profile/profile.component';

import { IncomeComponent } from './admin/dashboard/income/income.component';
import { ExpenseComponent } from './admin/dashboard/expense/expense.component';
import { TodoComponent } from './admin/dashboard/todo/todo.component';
import { PreviousHistoryComponent } from './admin/previous-history/previous-history.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
     
      { path: 'previous-history', component: PreviousHistoryComponent },
      { path: 'income-details', component: IncomeComponent },
      { path: 'expense-details', component: ExpenseComponent },
      {path:'logout', component: LogoutComponent},
      { path: 'to-do', component: TodoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetPlannerRoutingModule {}

