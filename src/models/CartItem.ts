import { Product } from "./product";
export class CartItem {
     constructor(
          public readonly product: Product,
          private _quantity: number,
          public price: number
      ) {}

      get quantity(): number {
          return this._quantity;
     }

     set quantity(newQuantity: number) {

          if (newQuantity <= 0) {
               throw new Error("Quantity must be greater than zero");
          }
          this._quantity = newQuantity;

}
  
     getTotalPrice(): number {
          return this.price * this._quantity;
     }
}