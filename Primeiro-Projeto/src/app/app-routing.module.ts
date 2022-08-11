import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentsDataComponent } from './components/parents-data/parents-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent}, //Criando o primeiro componente
  {path: 'parent', component: ParentsDataComponent}, //Compartilhamento de dados entre componentes pai e filho @Input
  {path: 'directive', component: DirectivesComponent}, //Criando e testando diretivas 
  {path: 'if', component: IfRenderComponent}, //Aprendendo renderização condicional com If e Else
  {path: 'eventos', component: EventosComponent}, //Criando eventos com o Click
  {path: 'emitter', component: EmitterComponent}, //Vai realizar uma determinada função após receber uma informação emitida pelo componente filho @Output
  {path: 'list', component: ListRenderComponent}, //Rendereização de uma lista e utilização de interface
  {path: 'pipes', component: PipesComponent}, //Utilizando Pipe Operators 
  {path: 'two', component: TwoWayBidingComponent}, //Utilização de form, importação do module
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
