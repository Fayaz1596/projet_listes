import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';
import { BeersComponent } from './beers/beers.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'beers/:id', component:DetailComponent},
  {path: 'beers', component:BeersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
