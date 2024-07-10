import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';


const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checktoken(){
  return new HttpContext().set(CHECK_TOKEN, true)
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenservice: TokenService,
    private authServices: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TOKEN)){
      const isValidToken = this.tokenservice.isvalidRefreshToken();

      if(isValidToken){
        return this.addToken(request, next)

      }

    }
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>, next: HttpHandler){
    const accesstoken =  this.tokenservice.getToken();
    if(accesstoken){

      // const authRequest = request.clone({
      //   headers: request.headers.set('Authorization', `Bearer ${accesstoken}` )
      // });
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accesstoken}`
        }
    });
      return next.handle(request);
    }
    return next.handle(request);
  }



}
