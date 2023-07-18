import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {IndexComponent} from './index/index.component';
import {DetalhesComponent} from './detalhes/detalhes.component';
import {AdminModule} from "./admin/admin.module";
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    IndexComponent,
    DetalhesComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
