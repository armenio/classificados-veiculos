import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {AdminClassificadosListarComponent} from "./classificados/admin-classificados-listar/admin-classificados-listar.component";
import {AdminClassificadosAdicionarComponent} from "./classificados/admin-classificados-adicionar/admin-classificados-adicionar.component";
import {AdminClassificadosEditarComponent} from "./classificados/admin-classificados-editar/admin-classificados-editar.component";
import {AdminClassificadosRemoverComponent} from "./classificados/admin-classificados-remover/admin-classificados-remover.component";
import {AdminCrudLayoutComponent} from "./admin-crud-layout/admin-crud-layout.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: AdminLoginComponent},
      {
        path: 'classificados',
        component: AdminCrudLayoutComponent,
        children: [
          {path: '', component: AdminClassificadosListarComponent},
          {path: 'adicionar', component: AdminClassificadosAdicionarComponent},
          {path: 'editar/:id', component: AdminClassificadosEditarComponent},
          {path: 'remover/:id', component: AdminClassificadosRemoverComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
