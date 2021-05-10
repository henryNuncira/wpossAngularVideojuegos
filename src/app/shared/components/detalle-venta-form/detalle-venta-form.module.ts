import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleVentaFormComponent } from './detalle-venta-form.component';



@NgModule({
  declarations: [DetalleVentaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [DetalleVentaFormComponent]
})
export class DetalleVentaFormModule { }
