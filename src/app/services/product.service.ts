import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({providedIn: 'root'})

export class ProductService {
    constructor() { }

    products : ProductModel[] = [
        new ProductModel(
          "Peluche Harry potter",
          "lortetstem ipsue kjsnefk",
          "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
          200,
          0,
          false,
          ["XL", "M"],
          {XL: 200, M:30},
          new Date('2021-01-01')
        ),
        new ProductModel(
          "Peluche Harry potter",
          "lortetstem ipsue kjsnefk",
          "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
          67,
          0,
          false,
          ["XL"],
          {XL: 200},
          new Date('2021-12-12')
        ),
        new ProductModel(
          "Peluche Harry potter",
          "lortetstem ipsue kjsnefk",
          "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
          200,
          0,
          false,
          ["XL", "M"],
          {XL: 200, M:30},
          new Date('2021-01-12')
        ),
        new ProductModel(
          "Peluche Harry potter",
          "lortetstem ipsue kjsnefk",
          "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
          56,
          0,
          false,
          ["XL", "L", "M"],
          {XL: 200, L:67, M:20},
          new Date('2021-12-01')
        ),
      ]

      getAllProducts(): ProductModel[]{
          return this.products;
      }

      onLikeProduct(product): void{
        if (product){
            // this.myProduct.likes === 0 ? this.myProduct.likes++ : this.myProduct.likes--;
            if(product.isLiked){
                product.likes--
            }else {
                product.likes++
            }
            product.isLiked = !product.isLiked
          }
      }
}