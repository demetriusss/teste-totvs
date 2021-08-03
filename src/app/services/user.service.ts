import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }

  list(searchText:string):Observable<User[] | any> {
    return this.http.get<User[] | any>(`${environment.API}/search/users`, {params: {q: searchText}});
  }
}
