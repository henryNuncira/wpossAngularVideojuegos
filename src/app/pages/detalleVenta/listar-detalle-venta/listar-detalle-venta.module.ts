import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarDetalleVentaRoutingModule } from './listar-detalle-venta-routing.module';
import { ListarDetalleVentaComponent } from './listar-detalle-venta.component';


@NgModule({
  declarations: [
    ListarDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    ListarDetalleVentaRoutingModule
  ]
})
export class ListarDetalleVentaModule { }
