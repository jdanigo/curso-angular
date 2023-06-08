import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
  { path: '', component: ProductosComponent},
  { path: 'nuevo', component: NuevoProductoComponent},
  { path: 'editar/:id', component: EditarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
