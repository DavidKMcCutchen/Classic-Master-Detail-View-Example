import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { ApiPagination, API } from "@public-apis/api-interfaces";

const BASE_URL = 'https://api.publicapis.org/';
const MODEL = 'entries';



@Injectable({
  providedIn: 'root'
})
export class APIsService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<API[]> {
    return this.http.get<ApiPagination>(this.getUrl()).pipe(
      tap((res) => console.log(res)),
      map((response) => response.entries),
      
    );
  };

  getOne(id: string): Observable<API> {
    return this.http.get<API>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
