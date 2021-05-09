import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileGuard } from './profile.guard';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{path: '', component: DashboardComponent},
{path: 'user-profile/:id', component: ProfileComponent, canActivate:[ProfileGuard]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
