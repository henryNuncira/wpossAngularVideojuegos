import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { VideoJuegoFormModule } from './shared/components/video-juego-form/video-juego-form.module';
import { ClienteFormModule } from './shared/components/cliente-form/cliente-form.module';
import { VentaFormModule } from './shared/components/venta-form/venta-form.module';
import { DetalleVentaFormModule } from './shared/components/detalle-venta-form/detalle-venta-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    VideoJuegoFormModule,
    ClienteFormModule,
    VentaFormModule,
    ReactiveFormsModule,
    DetalleVentaFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
