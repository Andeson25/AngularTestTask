import {Injectable} from '@angular/core';
import {Stock} from "../models/stock";
import {Subject} from "rxjs";
import {User} from "../models/user";
import {count} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = new User();
  private _user = new Subject<User>();
  public user$ = this._user.asObservable();


  constructor() {
    this.user.money = 10000;
  }


  buyStock(stock: Stock, quantity: number) {
    this.user.money -= parseFloat(stock.price) * quantity;
    let newStock = this.user.stocks.find(value => value.id == stock.id);
    if (newStock) {
      newStock.quantity += quantity;
    } else {
      newStock = new Stock();
      Object.assign(newStock, stock);
      newStock.quantity = quantity;
      this.user.stocks.push(newStock);
    }
    this._user.next(this.user);
  }

  sellStock(stock: Stock, quantity: number) {
    this.user.money += parseFloat(stock.price) * quantity;
    if (stock.quantity - quantity == 0) {
      this.user.stocks.splice(this.user.stocks.indexOf(stock), 1);
    } else {
      stock.quantity -= quantity;
    }
    this._user.next(this.user);
  }


}
