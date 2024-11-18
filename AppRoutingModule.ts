// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// // import { SearchComponent } from './search/search.component';
// import { BookmarkComponent } from './bookmark/bookmark.component';
// import { MailComponent } from './mail/mail.component';

// const routes: Routes = [
//   // { path: 'search', component: SearchComponent },
//   { path: 'bookmarks', component: BookmarkComponent },
//   { path: 'mail', component: MailComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification/notification.component'; // Adjust the import as necessary
// import { SidenavComponent } from './sidenav/sidenav.component'; // Adjust the import as necessary

const routes: Routes = [
  { path: 'notification', component: NotificationComponent },
  // { path: 'sidenav', component: SidenavComponent }, // Sidenav route
  { path: 'home/notification', component: NotificationComponent }, // Notification route
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
