import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',component: BaseLayoutComponent, children:[
      {path:"",component: HomeComponent},
      {path:"product/:id", component: ProductDetailComponent}
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children:[
      {path: "", redirectTo:"dashboard", pathMatch:"full"},
      {path:"dashboard", component: DashboardComponent},
      {path:"product", component: ProductListComponent},
      {path:"product/add", component: ProductAddComponent},
      {path:"product/:id/edit", component: ProductEditComponent}
    ]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
