import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleClienteRoutingModule } from './detalle-cliente-routing.module';
import { DetalleClienteComponent } from './detalle-cliente.component';


@NgModule({
  declarations: [
    DetalleClienteComponent
  ],
  imports: [
    CommonModule,
    DetalleClienteRoutingModule
  ]
})
export class DetalleClienteModule { }
