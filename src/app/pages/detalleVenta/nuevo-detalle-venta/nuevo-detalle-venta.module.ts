import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoDetalleVentaRoutingModule } from './nuevo-detalle-venta-routing.module';
import { NuevoDetalleVentaComponent } from './nuevo-detalle-venta.component';
import { DetalleVentaFormModule } from 'src/app/shared/components/detalle-venta-form/detalle-venta-form.module';


@NgModule({
  declarations: [
    NuevoDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    NuevoDetalleVentaRoutingModule,
    DetalleVentaFormModule
  ]
})
export class NuevoDetalleVentaModule { }
