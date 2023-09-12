import {Component, OnInit} from '@angular/core';
import {PokemonTypeDeClass, resultPokemonApi} from "../pokemon.interface";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  pokemonList: PokemonTypeDeClass[] = [];
  pokemonSelected: PokemonTypeDeClass | undefined;
  constructor(private unServiceCool: PokemonService) {
  }
  ngOnInit() {

    this.unServiceCool.getPokemons().subscribe(pokemonListResult => {

      this.pokemonList = pokemonListResult;
        console.table(this.pokemonList);

      });


  }


  wiewOnePokemon(id:number){
    this.unServiceCool.getPokemonById(id).subscribe(pokemonResult => {

        this.pokemonSelected = pokemonResult;
        console.log(this.pokemonSelected);


      });
  }


  resultMessageDelete: resultPokemonApi | undefined
  deletePokemon(id:number, index:number){
    this.unServiceCool.deletePokemon(id).subscribe(resultatDelete => {


      this.resultMessageDelete = resultatDelete;
      console.log(this.resultMessageDelete);

        if (this.resultMessageDelete.true !== "No have permission"){
          console.log(index)

          this.pokemonList.splice(index,1);
        }

      if (this.resultMessageDelete.true == "No have permission"){

        alert("Tu n'est pas autorisé a faire ça");
      }

        if (this.resultMessageDelete.err){
          console.log("Ya une erreur");
        }


    });





  }



}
