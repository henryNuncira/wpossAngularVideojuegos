import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClienteComponent } from './listado-cliente.component';

const routes: Routes = [{ path: '', component: ListadoClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoClienteRoutingModule { }
