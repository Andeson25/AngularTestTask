import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stock} from "../models/stock";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class StockService {

  constructor(private httpClient: HttpClient) {
  }

  readonly url = "http://localhost:3000/";

  getAll(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(this.url + "stocks");
  }

  getAllSliceAndFilter(start: number, limit: number, filter: string) {

    return this.httpClient.get<Stock[]>(this.url + "stocks" + (filter.length > 0 ? "?category=" + filter + '&' : "?") + "_start=" + start + "&_limit=" + limit);
  }


}
