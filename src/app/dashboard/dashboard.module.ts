import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { dashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent],
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
