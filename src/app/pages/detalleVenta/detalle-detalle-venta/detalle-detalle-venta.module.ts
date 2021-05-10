import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleDetalleVentaRoutingModule } from './detalle-detalle-venta-routing.module';
import { DetalleDetalleVentaComponent } from './detalle-detalle-venta.component';


@NgModule({
  declarations: [
    DetalleDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    DetalleDetalleVentaRoutingModule
  ]
})
export class DetalleDetalleVentaModule { }
