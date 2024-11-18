// import { Component} from '@angular/core';

// @Component({
//   selector: 'app-bookmark',
//   templateUrl: './bookmark.component.html',
//   styleUrls: ['./bookmark.component.scss'],
//   // schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class BookmarkComponent {
//   budgetItems = [
//     { id: 1, name: 'Groceries' },
//     { id: 2, name: 'Entertainment' },
//     { id: 3, name: 'Utilities' },
//     { id: 4, name: 'Transport' }
//   ];

//   bookmarks: { id: number, name: string }[] = [];

//   toggleBookmark(item: any) {
//     const bookmarkIndex = this.bookmarks.findIndex(b => b.id === item.id);
//     if (bookmarkIndex !== -1) {
//       // Remove bookmark if it already exists
//       this.bookmarks.splice(bookmarkIndex, 1);
//     } else {
//       // Add new bookmark
//       this.bookmarks.push({ id: item.id, name: item.name });
//     }
//   }

//   isBookmarked(item: any): boolean {
//     return this.bookmarks.some(b => b.id === item.id);
//   }
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],

})
export class BookmarkComponent {
  budgetItems = [
    // Example budget item structure
    { name: 'Rent', category: 'Housing', dateAdded: new Date() },
    { name: 'Groceries', category: 'Food', dateAdded: new Date() },
    { name: 'Electricity Bill', category: 'Utilities', dateAdded: new Date() },
    { name: 'Water Bill', category: 'Utilities', dateAdded: new Date() },
    { name: 'Internet', category: 'Utilities', dateAdded: new Date() },
    { name: 'Car Payment', category: 'Transportation', dateAdded: new Date() },
    { name: 'Fuel', category: 'Transportation', dateAdded: new Date() },
    { name: 'Public Transport', category: 'Transportation', dateAdded: new Date() },
    { name: 'Health Insurance', category: 'Insurance', dateAdded: new Date() },
    { name: 'Gym Membership', category: 'Fitness', dateAdded: new Date() },
    { name: 'Dining Out', category: 'Entertainment', dateAdded: new Date() },
    { name: 'Movie Tickets', category: 'Entertainment', dateAdded: new Date() },
    { name: 'Clothing', category: 'Shopping', dateAdded: new Date() },
    { name: 'Shoes', category: 'Shopping', dateAdded: new Date() },
    { name: 'Personal Care', category: 'Personal', dateAdded: new Date() },
    { name: 'Gifts', category: 'Miscellaneous', dateAdded: new Date() },
    { name: 'Household Supplies', category: 'Household', dateAdded: new Date() },
    { name: 'Pet Food', category: 'Pet Care', dateAdded: new Date() },
    { name: 'School Supplies', category: 'Education', dateAdded: new Date() },
    { name: 'Savings', category: 'Financial', dateAdded: new Date() },
    { name: 'Emergency Fund', category: 'Financial', dateAdded: new Date() },
    { name: 'Charity Donations', category: 'Charity', dateAdded: new Date() },
  ];
  // [x: string]: any;
  // budgetItems = [
  //   { id: 1, name: 'Groceries' },
  //   { id: 2, name: 'Entertainment' },
  //   { id: 3, name: 'Utilities' },
  //   { id: 4, name: 'Transport' }
  // ];

  bookmarks: { id: number, name: string }[] = [];



 
  addItem(item: any) {
    // Set isAdded to true when the item is added
    item.isAdded = true;
    alert(`Item added: ${item.name}`);
    console.log('Item added:', item);
  }




  toggleBookmark(item: { id: number; name: string }): void {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === item.id);
    if (bookmarkIndex !== -1) {
      // Remove bookmark if it already exists
      console.log(`Removing bookmark for ${item.name}`);
      this.bookmarks.splice(bookmarkIndex, 1);
    } else {
      // Add new bookmark
      console.log(`Adding bookmark for ${item.name}`);
      this.bookmarks.push({ id: item.id, name: item.name });
    }
  }

  isBookmarked(item: { id: number; name: string }): boolean {
    return this.bookmarks.some(b => b.id === item.id);
  }
  navigateToAddItem() {
    // Logic to navigate to add item
  }
}
