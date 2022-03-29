import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  buscarUsuarios(url:string){
    return this.http.get(url);
  }
}
