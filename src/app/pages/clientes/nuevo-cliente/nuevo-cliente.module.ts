import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoClienteRoutingModule } from './nuevo-cliente-routing.module';
import { NuevoClienteComponent } from './nuevo-cliente.component';
import { ClienteFormModule } from 'src/app/shared/components/cliente-form/cliente-form.module';


@NgModule({
  declarations: [
    NuevoClienteComponent
  ],
  imports: [
    CommonModule,
    NuevoClienteRoutingModule,
    ClienteFormModule
  ]
})
export class NuevoClienteModule { }
