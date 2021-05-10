import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarDetalleVentaComponent } from './editar-detalle-venta.component';

const routes: Routes = [{ path: '', component: EditarDetalleVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarDetalleVentaRoutingModule { }
