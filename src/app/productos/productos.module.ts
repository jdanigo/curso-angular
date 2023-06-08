import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    NuevoProductoComponent,
    EditarProductoComponent    
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
