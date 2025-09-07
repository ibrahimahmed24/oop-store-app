import { Categoty } from "./Types/Categoty";

export class Product {
  private readonly id : number;
   
 
private static nextId = 1;

constructor( 
     private _name: string,
      private _price: number ,
      private _stock: number ,
      private _categoty: Categoty) {}
   

get Name(): string {
    return this._name;
  }
get Price(): number {
    return this._price;
  }
get Stock(): number {
    return this._stock;
  }
get Categoty(): Categoty {
    return this._categoty;
  }
  
       set Stock(value: number) {
    if (value < 0) {
      this._stock = value;
    }else{
      throw new Error("Stock cannot be negative");
  }
}
 
 set Price(value: number) {
    if (value < 0) {
      this._price = value;
    }else{
      throw new Error("Price cannot be negative");
  }
}




}

const product1 = new Product("Laptop", 1500, 10, "digital");

console.log(product1.Price); // Laptop


