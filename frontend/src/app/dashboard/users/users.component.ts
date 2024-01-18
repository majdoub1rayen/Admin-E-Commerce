import { Component } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }
}
