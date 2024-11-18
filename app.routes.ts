// import { Routes } from '@angular/router';

// export const routes: Routes = [
//     {path: '', loadChildren: () =>import('./budget-planner/budget-planner.module').then(m=> m.BudgetPlannerModule )}
// ];


import { Routes } from '@angular/router';
// import { SearchComponent } from './search/search.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MailComponent } from './mail/mail.component';
import { NotificationComponent } from './notification/notification.component';


export const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)
    },
    // { path: 'search', component: SearchComponent },
    { path: 'bookmarks', component: BookmarkComponent },
    { path: 'mail', component: MailComponent },
    { path: 'notification', component: NotificationComponent },
];
