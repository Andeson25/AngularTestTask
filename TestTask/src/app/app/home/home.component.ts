import {Component, HostListener} from '@angular/core';
import {StockService} from "../../service/stock.service";
import {Stock} from "../../models/stock";
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [StockService]
})
export class HomeComponent {

  stocks: Stock[] = [];

  startIndex = 0;
  limit = 20;

  filter = '';
  showLoad = true;
  wasEnd = false;

  balance = 0;

  constructor(private _stockService: StockService, private _userService: UserService) {
    this.balance = this._userService.user.money;
    this._userService.user$.subscribe(next => {
      this.balance = next.money
    });
    this.loadStocks();
  }

  loadStocks() {
    this.showLoad = true;
    this._stockService.getAllSliceAndFilter(this.startIndex, this.limit, this.filter).subscribe(next => {
      this.stocks.push(...next);
      this.startIndex += next.length;
      this.showLoad = false;
      if (next.length == 0 || next.length < this.limit)
        this.wasEnd = true;
      else
        this.wasEnd = false;
    }, error => {
      console.error(error);
    })
  }

  myFilter() {
    if (this.filter == 'Disable Filtering') {
      this.filter = '';
    }
    this.stocks = [];
    this.showLoad = true;
    this.wasEnd = false;
    this.startIndex = 0;
    this.loadStocks();
  }


  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (!this.wasEnd) {
      let pos = window.innerHeight + window.scrollY;
      let max = document.body.offsetHeight;
      if (pos + 1 >= max) {
        this.loadStocks();
      }
    }
  }


}
