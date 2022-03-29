import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  users: User[]=[];
  page: number;
  total_pages: number;
  constructor(public UserService : UserService) {}

  ngOnInit():void{
    this.buscarUsuario(this.UserService.urlUser);
  }

  buscarUsuario(url:string){
    this.users = [];
    this.UserService.buscarUsuarios(url).subscribe(retorno =>{
      
      this.page = retorno['page'];
      this.total_pages = retorno['total_pages'];
     
      retorno['data'].forEach(user => {
       
          this.users.push(user);
         
        })
      });
  
  }
}
