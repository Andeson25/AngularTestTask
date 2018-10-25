import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  balance: any;

  constructor(private userService: UserService) {
    this.balance = this.userService.user.money;
    this.userService.user$.subscribe(next => {
      this.balance = next.money;
    })

  }

  ngOnInit() {
  }

}
