import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes:
Routes = [
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },

{path: 'dashboard', component:DashboardComponent},
{ path: 'list', loadChildren: () => import('./pages/videojuegos/listar/listar.module').then(m => m.ListarModule) },
{ path: 'nuevo', loadChildren: () => import('./pages/videojuegos/nuevo/nuevo.module').then(m => m.NuevoModule) },
{ path: 'detalles', loadChildren: () => import('./pages/videojuegos/detalles/detalles.module').then(m => m.DetallesModule) },
{ path: 'editar', loadChildren: () => import('./pages/videojuegos/editar/editar.module').then(m => m.EditarModule) },
{ path: 'listadoClientes', loadChildren: () => import('./pages/clientes/listado-cliente/listado-cliente.module').then(m => m.ListadoClienteModule) },
{ path: 'detalleClientes', loadChildren: () => import('./pages/clientes/detalle-cliente/detalle-cliente.module').then(m => m.DetalleClienteModule) },
{ path: 'editarClientes', loadChildren: () => import('./pages/clientes/editar-cliente/editar-cliente.module').then(m => m.EditarClienteModule) },
{ path: 'nuevoClientes', loadChildren: () => import('./pages/clientes/nuevo-cliente/nuevo-cliente.module').then(m => m.NuevoClienteModule) },
  { path: 'listadoVentas', loadChildren: () => import('./pages/ventas/listado-ventas/listado-ventas.module').then(m => m.ListadoVentasModule) },
  { path: 'detallesVenta', loadChildren: () => import('./pages/ventas/detalles-venta/detalles-venta.module').then(m => m.DetallesVentaModule) },
  { path: 'nuevaVenta', loadChildren: () => import('./pages/ventas/nueva-venta/nueva-venta.module').then(m => m.NuevaVentaModule) },
  { path: 'editarVenta', loadChildren: () => import('./pages/ventas/editar-venta/editar-venta.module').then(m => m.EditarVentaModule) },
  { path: 'listarDetalleVenta', loadChildren: () => import('./pages/detalleVenta/listar-detalle-venta/listar-detalle-venta.module').then(m => m.ListarDetalleVentaModule) },
  { path: 'detalleDetalleVenta', loadChildren: () => import('./pages/detalleVenta/detalle-detalle-venta/detalle-detalle-venta.module').then(m => m.DetalleDetalleVentaModule) },
  { path: 'editarDetalleVenta', loadChildren: () => import('./pages/detalleVenta/editar-detalle-venta/editar-detalle-venta.module').then(m => m.EditarDetalleVentaModule) },
  { path: 'nuevoDetalleVenta', loadChildren: () => import('./pages/detalleVenta/nuevo-detalle-venta/nuevo-detalle-venta.module').then(m => m.NuevoDetalleVentaModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
