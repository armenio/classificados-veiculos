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
import {AdminClassificadosRemoverComponent} from './classificados/admin-classificados-remover/admin-classificados-remover.component';
import {AdminRoutingModule} from "./admin-routing.module";

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
    AdminClassificadosRemoverComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
