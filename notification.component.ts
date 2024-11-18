import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  notifications: { 
    [key: string]: { 
      visible: boolean, 
      title: string, 
      description: string 
    } 
  } = {
    taxAndPensions: { visible: false, title: 'Tax and Pensions', description: 'Tax allowances, tax paid on pensions, tax relief.' },
    pensionBasics: { visible: false, title: 'Pension Basics', description: 'Information about pension schemes and basics.' },
    statePension: { visible: false, title: 'State Pension', description: 'State pension eligibility and benefits.' }
  };


  toggleDropdown(notificationKey: keyof typeof this.notifications): void {
    this.notifications[notificationKey].visible = !this.notifications[notificationKey].visible;
  }
}
