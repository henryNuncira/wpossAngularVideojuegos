import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarDetalleVentaRoutingModule } from './editar-detalle-venta-routing.module';
import { EditarDetalleVentaComponent } from './editar-detalle-venta.component';
import { DetalleVentaFormModule } from 'src/app/shared/components/detalle-venta-form/detalle-venta-form.module';


@NgModule({
  declarations: [
    EditarDetalleVentaComponent
  ],
  imports: [
    CommonModule,
    EditarDetalleVentaRoutingModule,
    DetalleVentaFormModule
  ]
})
export class EditarDetalleVentaModule { }
