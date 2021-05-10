import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesVentaComponent } from './detalles-venta.component';

const routes: Routes = [{ path: '', component: DetallesVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesVentaRoutingModule { }
