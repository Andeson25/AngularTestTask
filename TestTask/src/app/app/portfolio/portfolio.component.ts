import {Component, OnInit} from '@angular/core';
import {Stock} from "../../models/stock";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user";
import {st} from "@angular/core/src/render3";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  user: User = new User();
  price: number = 0;

  constructor(private _userService: UserService) {
    this.user = this._userService.user;
    this.user.stocks.forEach(next => {
      this.price += next.quantity * parseFloat(next.price);
    })
    this._userService.user$.subscribe(next => {
      this.user = next;
    }, error => {
      console.error(error);
    });
  }

  sell(value: number) {
    this.price -= value;
  }


  ngOnInit() {

  }

}
