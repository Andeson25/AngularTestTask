import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stock} from "../../models/stock";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {
  @Input() stock: Stock;
  @Input() sellOrBuy: string;
  @Output() sellPrice = new EventEmitter();

  balance = 0;

  constructor(private _userService: UserService) {
    this.balance = this._userService.user.money;
    _userService.user$.subscribe(next => {
      this.balance = next.money;
    })
  }

  ngOnInit() {
  }

  parseFloat(any: any) {
    return parseFloat(any);
  }

  changePrice(target: any, element: HTMLElement, stockPrice: string) {
    let val = target.value;
    let res: number = (Number.parseFloat(stockPrice) * parseInt(val == '' ? 1 : val));
    element.getElementsByTagName('span')[0].innerText = <string>(res.toString().includes('.') ? res.toString().split('.')[0] + '.' + res.toString().split('.')[1].slice(0, 3) : res);
  }

  buyStock(quantity: string, stock: Stock) {
    if (this.balance - parseFloat(stock.price) <= 0) {
      alert('Not enough money');
      return;
    } else {
      this._userService.buyStock(stock, parseFloat(quantity));
    }
  }


  sellStock(quantity: string, stock: Stock) {
    if (this.parseFloat(quantity) > this.stock.quantity) {
      alert('Invalid quantity');
      return;
    }
    this._userService.sellStock(stock, Number.parseFloat(quantity));
    this.sellPrice.emit(parseFloat(stock.price) * this.parseFloat(quantity));
  }


}
