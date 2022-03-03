import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() myProduct!: ProductModel;



  onAddLike(){
    if (this.myProduct){
      // this.myProduct.likes === 0 ? this.myProduct.likes++ : this.myProduct.likes--;
      if(this.myProduct.isLiked){
        this.myProduct.likes--
      }else {
        this.myProduct.likes++
      }
      this.myProduct.isLiked = !this.myProduct.isLiked
    }
  }

  selectSize(size){

  }

}
