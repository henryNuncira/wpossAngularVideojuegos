import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { VideoJuegoFormModule } from 'src/app/shared/components/video-juego-form/video-juego-form.module';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    VideoJuegoFormModule
  ]
})
export class EditarModule { }
