import { Component } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }
}
