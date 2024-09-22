import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import {  ParentDataComponent } from './components/parent-data/parent-data.component';
import {  DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EnitterComponent }  from './components/enitter/enitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { PipesComponent }  from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: 'list', component: ListRenderComponent},
  {path: '', component: FirstComponentComponent},
  {path: 'Parent', component: ParentDataComponent},
  {path: 'Direct', component: DirectivesComponent},
  {path: 'IF', component: IfRenderComponent},
  {path: 'Eventos', component: EventosComponent},
  {path: 'Enitter', component:EnitterComponent},
  {path: 'Change', component: ChangeNumberComponent },
  {path: 'Pipes', component: PipesComponent },
  {path: 'Two', component: TwoWayBindingComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
