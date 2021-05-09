import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';


@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    CommonModule,
    DetallesRoutingModule
  ]
})
export class DetallesModule { }
