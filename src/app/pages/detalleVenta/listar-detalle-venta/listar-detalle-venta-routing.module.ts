import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDetalleVentaComponent } from './listar-detalle-venta.component';

const routes: Routes = [{ path: '', component: ListarDetalleVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarDetalleVentaRoutingModule { }
