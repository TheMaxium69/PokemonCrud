import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonTypeDeClass, resultPokemonApi} from "./pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //RECUPERE LE MODULE HTTPCLIENT
  constructor(private http: HttpClient) { }

  // RECUPERE TOUT LES POKEMON
  getPokemons(): Observable<PokemonTypeDeClass[]>{
    return this.http.get<PokemonTypeDeClass[]>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll");
  }

  // RECUPERE UN POKEMON VIA SON ID
  getPokemonById(id:number): Observable<PokemonTypeDeClass>{
    return this.http.get<PokemonTypeDeClass>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=" + id);
  }

  // SUPPRIMER UN POKEMON VIA SON ID
  deletePokemon(id:number): Observable<resultPokemonApi>{
    return this.http.get<resultPokemonApi>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi=Maxime&id=" + id)
  }

  // AJOUTER UN POKEMON
  addPokemon(pokemon: PokemonTypeDeClass): Observable<resultPokemonApi> {
    const body = JSON.stringify(pokemon);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<resultPokemonApi>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Maxime", body, {'headers': header})

  }


}
