// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-mail',
//   templateUrl: './mail.component.html',
//   styleUrl: './mail.component.scss'
// })
// export class MailComponent {
 

// notifications = {
//   autoEnrolment: { visible: false },
//   buildingRetirementPot: { visible: false },
//   pensionBasics: { visible: false },
//   pensionProblems: { visible: false },
//   statePension: { visible: false },
//   takingPension: { visible: false },
//   taxAndPensions: { visible: false },
//   pensionsAndRetirement: { visible: false }
// };

// toggleDropdown(notification: keyof typeof this.notifications): void {
//   this.notifications[notification].visible = !this.notifications[notification].visible;
//   console.log(notification);
// }

// // This method could be used to handle any other event (e.g., adding notifications)
// addNotification(content: string, type: string): void {
//   console.log(content, type);
// }
// }
import { Component } from '@angular/core';

type NotificationKey = 
  | 'autoEnrolment'
  | 'buildingRetirementPot'
  | 'pensionBasics'
  | 'pensionProblems'
  | 'statePension'
  | 'takingPension'
  | 'taxAndPensions'
  | 'pensionsAndRetirement';

interface Notification {
  visible: boolean;
}

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
toggleVisibility(arg0: string) {
throw new Error('Method not implemented.');
}
  notifications: { [key in NotificationKey]: Notification } = {
    autoEnrolment: { visible: false },
    buildingRetirementPot: { visible: false },
    pensionBasics: { visible: false },
    pensionProblems: { visible: false },
    statePension: { visible: false },
    takingPension: { visible: false },
    taxAndPensions: { visible: false },
    pensionsAndRetirement: { visible: false }
  };

  // Toggle the visibility of the dropdown for the specific notification
  toggleDropdown(notification: NotificationKey): void {
    // Toggle the visibility of the notification
    this.notifications[notification].visible = !this.notifications[notification].visible;
    console.log(`${notification} visibility: ${this.notifications[notification].visible}`);
  }

  // Placeholder method for adding notifications (optional)
  addNotification(content: string, type: string): void {
    console.log('Notification Content:', content);
    console.log('Notification Type:', type);
  }

}
