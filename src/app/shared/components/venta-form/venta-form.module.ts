import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VentaFormComponent } from './venta-form.component';



@NgModule({
  declarations: [VentaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [VentaFormComponent]
})
export class VentaFormModule { }
