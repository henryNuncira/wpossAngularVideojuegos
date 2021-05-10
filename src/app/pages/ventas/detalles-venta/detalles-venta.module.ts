import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesVentaRoutingModule } from './detalles-venta-routing.module';
import { DetallesVentaComponent } from './detalles-venta.component';


@NgModule({
  declarations: [
    DetallesVentaComponent
  ],
  imports: [
    CommonModule,
    DetallesVentaRoutingModule
  ]
})
export class DetallesVentaModule { }
