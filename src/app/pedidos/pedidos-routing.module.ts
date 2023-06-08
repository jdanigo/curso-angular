import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos.component';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';

const routes: Routes = [
  { path: '', component: PedidosComponent},
  { path: 'nuevo', component: NuevoPedidoComponent},
  { path: 'editar/:id', component: EditarPedidoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
