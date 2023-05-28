import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  products: IProduct[]=[]
  title = 'quản lý sản phẩm';

  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    },error=> console.log(error))
  }
  removeItem(id:any){
    this.productService.deleteProduct(id).subscribe(()=> {
      console.log('bạn đã xóa thành công');
      this.products = this.products.filter(item => item.id != id);
      
    })
  }
}
