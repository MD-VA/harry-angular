import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../models/product.model";
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() myProduct!: ProductModel;

  constructor(private ProductService: ProductService){}

  onAddLike(){
    this.ProductService.onLikeProduct(this.myProduct);
  }

  selectSize(size){

  }

}
