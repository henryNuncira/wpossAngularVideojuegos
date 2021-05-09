import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:
Routes = [
{ path: 'list', loadChildren: () => import('./pages/videojuegos/listar/listar.module').then(m => m.ListarModule) },
{ path: 'nuevo', loadChildren: () => import('./pages/videojuegos/nuevo/nuevo.module').then(m => m.NuevoModule) },
{ path: 'detalles', loadChildren: () => import('./pages/videojuegos/detalles/detalles.module').then(m => m.DetallesModule) },
{ path: 'editar', loadChildren: () => import('./pages/videojuegos/editar/editar.module').then(m => m.EditarModule) },
{ path: 'listadoClientes', loadChildren: () => import('./pages/clientes/listado-cliente/listado-cliente.module').then(m => m.ListadoClienteModule) },
{ path: 'detalleClientes', loadChildren: () => import('./pages/clientes/detalle-cliente/detalle-cliente.module').then(m => m.DetalleClienteModule) },
{ path: 'editarClientes', loadChildren: () => import('./pages/clientes/editar-cliente/editar-cliente.module').then(m => m.EditarClienteModule) },
{ path: 'nuevoClientes', loadChildren: () => import('./pages/clientes/nuevo-cliente/nuevo-cliente.module').then(m => m.NuevoClienteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
