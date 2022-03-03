import {Component, Input, OnInit} from '@angular/core';
import { timestamp } from 'rxjs';
import {ProductModel} from "./models/product.model";
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  product!: Array<ProductModel>
  // myProduct: ProductModel = new ProductModel("", "", "", 0, 0, false);
  constructor(private ProductService: ProductService){

  }
  ngOnInit(): void {
    this.product = this.ProductService.getAllProducts();
  }
}
