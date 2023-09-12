import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PokemonTypeDeClass} from "../pokemon.interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{

  constructor(private unService: PokemonService) {}

  ngOnInit() {


  }

  onSubmit(form: NgForm){
    this.unService.addPokemon(form.value).subscribe(reponse => {
      console.log(reponse)
    })
  }


}
