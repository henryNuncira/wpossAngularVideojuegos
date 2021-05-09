import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoClienteRoutingModule } from './listado-cliente-routing.module';
import { ListadoClienteComponent } from './listado-cliente.component';


@NgModule({
  declarations: [
    ListadoClienteComponent
  ],
  imports: [
    CommonModule,
    ListadoClienteRoutingModule
  ]
})
export class ListadoClienteModule { }
