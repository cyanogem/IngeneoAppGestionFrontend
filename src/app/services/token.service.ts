import { Injectable } from '@angular/core';
import {getCookie, setCookie,removeCookie} from 'typescript-cookie'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  saveToken(token: string){
    console.log(token);
    localStorage.setItem('token',token);
    //setCookie('token', token, { expires: 365, path: '/'});
  }

  getToken() {

    const token = localStorage.getItem('token');
    return token;
  }

  removeToken()
  {
    localStorage.removeItem('token');
    // removeCookie('token');
  }

  isvalidRefreshToken(){
    const token = this.getToken();
    if(!token){
      return false
    }else{
      return true
    }
  }
}
