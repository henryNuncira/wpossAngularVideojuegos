import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoDetalleVentaRoutingModule } from './nuevo-detalle-venta-routing.module';
import { NuevoDetalleVentaComponent } from './nuevo-detalle-venta.component';


@NgModule({
  declarations: [
    NuevoDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    NuevoDetalleVentaRoutingModule
  ]
})
export class NuevoDetalleVentaModule { }
