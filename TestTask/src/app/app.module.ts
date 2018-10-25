import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app/app.component";
import {HeaderComponent} from './app/header/header.component';
import {HomeComponent} from './app/home/home.component';
import {PortfolioComponent} from './app/portfolio/portfolio.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {MatInputModule} from '@angular/material/input';
import {UserService} from "./service/user.service";
import {FormsModule} from "@angular/forms";
import {PipeModule} from "./pipes/pipe.module";
import {DirectiveModule} from "./diretives/directive.module";
import { StockCardComponent } from './app/stock-card/stock-card.component';

const _routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    StockCardComponent,
  ],
  imports: [
    RouterModule.forRoot(_routes, {useHash: false}),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    PipeModule,
    DirectiveModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
