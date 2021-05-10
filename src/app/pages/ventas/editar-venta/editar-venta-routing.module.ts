import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarVentaComponent } from './editar-venta.component';

const routes: Routes = [{ path: '', component: EditarVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarVentaRoutingModule { }
