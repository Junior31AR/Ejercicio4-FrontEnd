import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento.model';

const baseURL = "Http://localhost:8090/actividad4/medicamento";

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private http:HttpClient) { }

  create(data:Medicamento):Observable<any>{
      return this.http.post(baseURL,data);
  }

}
