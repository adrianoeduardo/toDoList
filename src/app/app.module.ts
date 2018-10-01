import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TarefaService} from './tarefa.service';
import { PrincipalComponent } from './principal/principal.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
