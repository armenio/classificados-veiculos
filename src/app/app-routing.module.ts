import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {IndexComponent} from "./index/index.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";
import {AnunciosComponent} from "./anuncios/anuncios.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: IndexComponent},
      {path: 'anuncios', component: AnunciosComponent},
      {path: 'anuncio/:id', component: DetalhesComponent}
    ]
  },
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
