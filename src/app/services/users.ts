import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './userModel';
import { Observable } from 'rxjs';
import { API_PATH } from '../API-PATH';

@Injectable({
  providedIn: 'root'
})
export class Users {

  constructor(private httpCliente: HttpClient) { 
    
  }

  salvar(users: User) : Observable<User>{
      return this.httpCliente.post<User>(`${API_PATH}users/register`, users)
  }
}