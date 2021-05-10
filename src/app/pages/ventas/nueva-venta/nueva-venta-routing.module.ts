import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaVentaComponent } from './nueva-venta.component';

const routes: Routes = [{ path: '', component: NuevaVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaVentaRoutingModule { }
