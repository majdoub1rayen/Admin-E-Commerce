import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Get the user's email from local storage
    const userEmail = localStorage.getItem('email');

    if (userEmail) {
      // Fetch all users and filter by the user's email
      this.userService.getAllUsers().subscribe((users: User[]) => {
        const userWithEmail = users.find((user) => user.email === userEmail);
        if (userWithEmail) {
          this.userName = `${userWithEmail.First_Name} ${userWithEmail.Last_name}`;
        }
      });
    }
  }
}
