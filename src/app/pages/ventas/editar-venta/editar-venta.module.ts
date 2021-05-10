import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarVentaRoutingModule } from './editar-venta-routing.module';
import { EditarVentaComponent } from './editar-venta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VentaFormModule } from 'src/app/shared/components/venta-form/venta-form.module';


@NgModule({
  declarations: [
    EditarVentaComponent
  ],
  imports: [
    CommonModule,
    EditarVentaRoutingModule,
    ReactiveFormsModule,
    VentaFormModule
  ]
})
export class EditarVentaModule { }
