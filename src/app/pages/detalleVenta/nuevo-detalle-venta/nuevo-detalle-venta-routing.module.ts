import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoDetalleVentaComponent } from './nuevo-detalle-venta.component';

const routes: Routes = [{ path: '', component: NuevoDetalleVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoDetalleVentaRoutingModule { }
