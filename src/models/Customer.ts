import { CustmerPermission, Usertype } from "src/Types/Users";
import { User } from "./Uesr";
import { Cart } from "./Cart";
import { Order } from "./Order";

export class custmerProperties extends User{


private readonly cart:Cart;
private readonly order:Order;


      constructor(name: string, age: number, email: string) {
        super(name,email);
            this.cart=new Cart();
            this.order=new Order();
        }

      getRole(): Usertype {
          return "Custmer";
     }
      

      getPermissions():CustmerPermission[]{
          return [
               'add', 'delete', 'update', 'read', 
               'search', 'filter', 'sort', 'view', 
               'purchase', 'return', 'review', 'wishlist'
          ];
      }
          


}