import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleDetalleVentaComponent } from './detalle-detalle-venta.component';

const routes: Routes = [{ path: '', component: DetalleDetalleVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleDetalleVentaRoutingModule { }
