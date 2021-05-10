import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaVentaRoutingModule } from './nueva-venta-routing.module';
import { NuevaVentaComponent } from './nueva-venta.component';
import { VentaFormModule } from 'src/app/shared/components/venta-form/venta-form.module';


@NgModule({
  declarations: [
    NuevaVentaComponent
  ],
  imports: [
    CommonModule,
    NuevaVentaRoutingModule,
    VentaFormModule
  ]
})
export class NuevaVentaModule { }
