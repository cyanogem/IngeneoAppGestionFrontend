import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenService } from 'src/app/services/token.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ){  }

  canActivate() {

    const isvalidToken = this.tokenService.isvalidRefreshToken();
    console.log(isvalidToken);
    if(!isvalidToken){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
