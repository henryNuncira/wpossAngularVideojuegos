import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form.component';



@NgModule({
  declarations: [ClienteFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [ClienteFormComponent]
})
export class ClienteFormModule { }
