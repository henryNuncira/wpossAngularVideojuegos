import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoVentasRoutingModule } from './listado-ventas-routing.module';
import { ListadoVentasComponent } from './listado-ventas.component';


@NgModule({
  declarations: [
    ListadoVentasComponent
  ],
  imports: [
    CommonModule,
    ListadoVentasRoutingModule
  ]
})
export class ListadoVentasModule { }
