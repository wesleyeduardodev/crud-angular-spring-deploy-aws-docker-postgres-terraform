import {HttpHeaders} from "@angular/common/http";

const URL_PROD = 'http://ec2-44-200-159-155.compute-1.amazonaws.com';
const URL_LOCAL = 'http://localhost:8080';

//TODO Criar esquema de configuração automática de ambiente de Des e Prod usando o enviroment.ts
export const API_CONFIG = {
  baseUrl: URL_LOCAL
}

//TODO Implementar futuramente autenticação e autorização com JWT
export const AUTHORIZATION_CONFIG = {
  headerOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa("admin" + ':' + "admin")
    })
  }
}
