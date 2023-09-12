import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {PokemonPageComponent} from "./pokemon-page/pokemon-page.component";
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'pokemon', component: PokemonPageComponent},
  {path: 'create', component: PokemonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
