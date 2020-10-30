import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor(public http: HttpClient) {
    this.loadProducts();
   }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get("https://angular-html-72bea.firebaseio.com/products_idx.json")
      .subscribe((res: Product[]) => {
        this.products = res;
        this.loading = false;
        resolve();
      });
    });
  }

  getProduct(id: string) {
    return this.http.get(`https://angular-html-72bea.firebaseio.com/products/${id}.json`)
  }

  searchProduct(value: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
      this.setFilters(value);  
      });
    } else {
      this.setFilters(value);
    }
  }

  private setFilters(value: string) {
    this.productsFilter = this.products
            .filter(p => p.categoria.toLowerCase().indexOf(value.toLowerCase()) >= 0 
                    || p.titulo.toLowerCase().indexOf(value.toLowerCase()) >= 0);
  }

}
