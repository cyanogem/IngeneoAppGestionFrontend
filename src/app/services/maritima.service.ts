import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { gestionlogistica } from 'src/app/models/logistica.model'
import { Response } from 'src/app/models/response'
import { checktoken } from 'src/app/interceptors/token.interceptor'
import { Guia } from '../models/guia.model';

@Injectable({
  providedIn: 'root'
})
export class MaritimaService {

  private endpoint  : string = environment.API_URL;
   private apiURL : string = this.endpoint + "/api/Maritima/"

  constructor(private http:HttpClient) { }

  getList():Observable<Response>{
    return this.http.get<Response>(`${this.apiURL}ListGuia`, { context: checktoken() });
  }

  addguia(modelo:Guia):Observable<Guia>{
    return this.http.post<Guia>(`${this.apiURL}SaveGuia`,modelo, { context: checktoken() })
  }
  updateguia(modelo:Guia):Observable<Guia>{
    return this.http.post<Guia>(`${this.apiURL}SaveGuia`,modelo, { context: checktoken() })
  }

  getListCliente():Observable<Response>{
    return this.http.get<Response>(`${this.apiURL}ListCliente`, { context: checktoken() });
  }
  getListBodega():Observable<Response>{
    return this.http.get<Response>(`${this.apiURL}ListBodega`, { context: checktoken() });
  }
  getListTipoGuia():Observable<Response>{
    return this.http.get<Response>(`${this.apiURL}ListTipoGuia`, { context: checktoken() });
  }


}
