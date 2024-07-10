import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { gestionlogistica } from 'src/app/models/logistica.model'
import { Response } from 'src/app/models/response'
import { checktoken } from 'src/app/interceptors/token.interceptor'



@Injectable({
  providedIn: 'root'
})
export class GestionlogisticaService {


   private endpoint  : string = environment.API_URL;
   private apiURL : string = this.endpoint + "/api/Maritima/ListReporteplanEntregaAll/"

  constructor(private http:HttpClient) { }

  getList():Observable<Response>{
    return this.http.get<Response>(`${this.apiURL}`, { context: checktoken() });
  }

}
