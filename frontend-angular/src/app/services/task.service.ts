import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_CONFIG, AUTHORIZATION_CONFIG} from '../config/api.config';
import {Task} from "../models/task";

const PATH = '/api/v1/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_CONFIG.baseUrl}${PATH}`, AUTHORIZATION_CONFIG.headerOptions);
  }

  findById(id: any): Observable<Task> {
    return this.http.get<Task>(`${API_CONFIG.baseUrl}${PATH}/${id}`, AUTHORIZATION_CONFIG.headerOptions);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(`${API_CONFIG.baseUrl}${PATH}`, task, AUTHORIZATION_CONFIG.headerOptions);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${API_CONFIG.baseUrl}${PATH}/${task.id}`, task, AUTHORIZATION_CONFIG.headerOptions);
  }

  delete(id: any): Observable<Task> {
    return this.http.delete<Task>(`${API_CONFIG.baseUrl}${PATH}/${id}`, AUTHORIZATION_CONFIG.headerOptions);
  }
}
