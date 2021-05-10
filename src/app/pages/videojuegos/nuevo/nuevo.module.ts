import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoRoutingModule } from './nuevo-routing.module';
import { NuevoComponent } from './nuevo.component';
import { VideoJuegoFormModule } from 'src/app/shared/components/video-juego-form/video-juego-form.module';


@NgModule({
  declarations: [
    NuevoComponent
  ],
  imports: [
    CommonModule,
    NuevoRoutingModule,
    VideoJuegoFormModule
  ]
})
export class NuevoModule { }
