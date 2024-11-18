import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PreviousHistoryComponent } from './admin/previous-history/previous-history.component';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    MatToolbarModule,
    
   
   
  ],
  exports: [
   
  ]
})
export class BudgetPlannerModule { }
