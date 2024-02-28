import { Component } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonName: string="";
  pokemonNameResult: any;
  pokemonType: any;
  constructor(private api: APIServiceService) {}

  getPokemonDataName(name: string) {
    try {
      this.api.getPokemonName(name).subscribe((response => {
        this.pokemonNameResult = response;
      // Accede al tipo de Pokémon y almacénalo en una variable
      const pokemonType = response.types[0].type.name;
      // Actualiza la vista con el tipo de Pokémon
      this.pokemonType = pokemonType;

      }));
    } catch (error) {
      console.log(error);
    }
  }
}
