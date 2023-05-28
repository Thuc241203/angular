import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    HomeComponent,
    AdminProductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
