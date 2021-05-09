import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarClienteRoutingModule } from './editar-cliente-routing.module';
import { EditarClienteComponent } from './editar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormModule } from 'src/app/shared/components/cliente-form/cliente-form.module';


@NgModule({
  declarations: [
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    EditarClienteRoutingModule,
    ReactiveFormsModule,
    ClienteFormModule
  ]
})
export class EditarClienteModule { }
