import { Component, Injectable} from '@angular/core';
import { Tarefa} from '../tarefa'
import {TarefaService} from '../tarefa.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

@Injectable()
export class ListaComponent  {
  tarefas: Tarefa
  msg:string = ""
  servico: TarefaService
  constructor(servico: TarefaService ) { 
    
    this.servico = servico
    this.servico.listarTarefas().subscribe(res => {
      this.tarefas = res.json()
    })
}


}
