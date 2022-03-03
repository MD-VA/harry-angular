import {Pipe, PipeTransform} from '@angular/core';
import { ProductModel } from '../models/product.model';
@Pipe({name: 'sortByDate'})
export class SortByDatePipe implements PipeTransform {
    transform(products: ProductModel[], order?: any) {
        return products.sort((a,b)=> { return b.date.getTime() - a.date.getTime() })
    }
}