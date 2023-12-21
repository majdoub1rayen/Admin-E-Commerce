import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  notifs: Notification[] = [];

  constructor(private service: LoginService) {}

  logout() {
    this.service.logout();
  }
}
