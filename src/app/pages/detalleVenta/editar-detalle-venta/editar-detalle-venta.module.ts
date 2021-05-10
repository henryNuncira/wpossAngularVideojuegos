import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarDetalleVentaRoutingModule } from './editar-detalle-venta-routing.module';
import { EditarDetalleVentaComponent } from './editar-detalle-venta.component';


@NgModule({
  declarations: [
    EditarDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    EditarDetalleVentaRoutingModule
  ]
})
export class EditarDetalleVentaModule { }
