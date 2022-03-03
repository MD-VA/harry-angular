import {Component, Input, OnInit} from '@angular/core';
import { timestamp } from 'rxjs';
import {ProductModel} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  product!: Array<ProductModel>
  myProduct: ProductModel = new ProductModel("", "", "", 0, 0, false);
  ngOnInit(): void {
    this.product = [
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
  }
}
