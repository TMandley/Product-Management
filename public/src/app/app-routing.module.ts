import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductnewComponent } from './products/productnew/productnew.component';
import { ProducteditComponent } from './products/productedit/productedit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
    { path: 'new', component: ProductnewComponent },
    { path: 'edit/:id', component: ProducteditComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
