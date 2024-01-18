import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { UsersComponent } from './dashboard/users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // when path is empty, redirect to /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
