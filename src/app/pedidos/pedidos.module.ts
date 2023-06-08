import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';


@NgModule({
  declarations: [PedidosComponent, NuevoPedidoComponent, EditarPedidoComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
