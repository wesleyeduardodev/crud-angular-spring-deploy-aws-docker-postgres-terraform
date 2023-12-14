import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_CONFIG, AUTHORIZATION_CONFIG} from '../config/api.config';
import {Client} from '../models/client';

const PATH = '/api/v1/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Client[]> {
    let urlFindAll = `${API_CONFIG.baseUrl}${PATH}`;
    console.log('urlFindAll');
    console.log(urlFindAll);
    return this.http.get<Client[]>(urlFindAll, AUTHORIZATION_CONFIG.headerOptions);
  }

  findById(id: any): Observable<Client> {
    let urlFindById = `${API_CONFIG.baseUrl}${PATH}/${id}`
    console.log('urlFindById');
    console.log(urlFindById);
    return this.http.get<Client>(urlFindById, AUTHORIZATION_CONFIG.headerOptions);
  }

  create(cliente: Client): Observable<Client> {
    let urlCreate = `${API_CONFIG.baseUrl}${PATH}`;
    console.log('urlCreate');
    console.log(urlCreate);
    return this.http.post<Client>(urlCreate, cliente, AUTHORIZATION_CONFIG.headerOptions);
  }

  update(cliente: Client): Observable<Client> {
    let urlUpdate = `${API_CONFIG.baseUrl}${PATH}/${cliente.id}`
    console.log('urlUpdate');
    console.log(urlUpdate);
    return this.http.put<Client>(urlUpdate, cliente, AUTHORIZATION_CONFIG.headerOptions);
  }

  delete(id: any): Observable<Client> {
    let urlDelete = `${API_CONFIG.baseUrl}${PATH}/${id}`;
    console.log('urlDelete');
    console.log(urlDelete);
    return this.http.delete<Client>(urlDelete, AUTHORIZATION_CONFIG.headerOptions);
  }
}
