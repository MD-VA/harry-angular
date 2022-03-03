export class ProductModel {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public likes: number,
    public isLiked: boolean,
    public size?: Array<string>,
    public priceTable?: Object,
  ) {
  }
}
