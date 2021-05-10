import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVentasComponent } from './listado-ventas.component';

const routes: Routes = [{ path: '', component: ListadoVentasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoVentasRoutingModule { }
