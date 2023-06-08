import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},

  { path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)},
      { path: 'pedidos', loadChildren: ()=> import('./pedidos/pedidos.module').then(m => m.PedidosModule)},
      { path: 'productos', loadChildren: ()=> import('./productos/productos.module').then(m => m.ProductosModule)},
      { path: '*', redirectTo: 'dashboard'}
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
