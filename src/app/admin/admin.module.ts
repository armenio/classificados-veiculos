import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AdminCrudLayoutComponent} from './admin-crud-layout/admin-crud-layout.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminSidebarComponent} from './admin-sidebar/admin-sidebar.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminClassificadosListarComponent} from './classificados/admin-classificados-listar/admin-classificados-listar.component';
import {AdminClassificadosAdicionarComponent} from './classificados/admin-classificados-adicionar/admin-classificados-adicionar.component';
import {AdminClassificadosEditarComponent} from './classificados/admin-classificados-editar/admin-classificados-editar.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {FormsModule} from "@angular/forms";
import { AdminClassificadosFormComponent } from './classificados/admin-classificados-form/admin-classificados-form.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminCrudLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminLoginComponent,
    AdminClassificadosListarComponent,
    AdminClassificadosAdicionarComponent,
    AdminClassificadosEditarComponent,
    AdminDashboardComponent,
    AdminClassificadosFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
