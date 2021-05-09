import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatFormFieldModule } from  '@angular/material/form-field'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from  '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { GraphComponent } from './graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ChartThreeDComponent } from './chart-three-d/chart-three-d.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserProfileComponent,
    SideNavComponent,
    SidebarComponent,
    TableComponent,
    GraphComponent,
    DashboardComponent,
    ChartComponent,
    ChartThreeDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    HighchartsChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
