import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Tarefa} from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  http: Http
  headers: Headers
  url: string = "http://localhost/to-do_list_3.0/Controllers/ToDoController.php"

  constructor(http:Http) {
    this.http = http
    this.headers = new Headers()
    this.headers.append('Content-Type', 'application/json')
   }
   listarTarefas () {
    return this.http.get(this.url)
  }
}
