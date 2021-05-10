import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoJuegoFormComponent } from './video-juego-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VideoJuegoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [VideoJuegoFormComponent]
})
export class VideoJuegoFormModule { }
