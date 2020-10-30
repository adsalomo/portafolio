import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/interfaces/product-detail.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productDetail: ProductDetail;
  productId: string;

  constructor(private router: ActivatedRoute, 
    public productService: ProductsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.productService.getProduct(params.id)
          .subscribe((product: ProductDetail) => {
            this.productId = params.id;
            this.productDetail = product;
          })
    });
  }

}
