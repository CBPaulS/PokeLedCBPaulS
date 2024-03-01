import { Component } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonName: string="";
  pokemonNameResult: any;
  pokemonType: any;
  Pokemon: any;
  constructor(private api: APIServiceService, private db: Firestore) {}
  //metodo async nombre ()
  async colorRojo(){
    this.Pokemon = doc(this.db,'Pokemon', 'Po|keColor');
    await setDoc(this.Pokemon,{Color:"Rojo"});
  }
  async colorVerdeO(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"VerdeO"});
  }
  async colorNegro(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Negro"});
  }
  async colorAzulN(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"AzulN"});
  }
  async colorAmarillo(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Amarillo"});
  }
  async colorRosa(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Rosa"});
  }
  async colorVioleta(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Violeta"});
  }
  async colorMoradoC(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"MoradoC"});
  }
  async colorMorado(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Morado"});
  }
  async colorVerdeC(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"VerdeC"});
  }
  async colorCafe(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Cafe"});
  }
  async colorAzulC(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"AzulC"});
  }
  async colorBlanco(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Blanco"});
  }
  async colorMoradoO(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"MoradoO"});
  }
  async colorNaranja(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Naranja"});
  }
  async colorCafeC(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"CafeC"});
  }
  async colorPlomo(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Plomo"});
  }
  async colorCeleste(){
    this.Pokemon = doc(this.db,'Pokemon', 'PokeColor');
    await setDoc(this.Pokemon,{Color:"Celeste"});
  }
  getPokemonDataName(name: string) {
    try {
      this.api.getPokemonName(name).subscribe((response => {
        this.pokemonNameResult = response;
      // Accede al tipo de Pokémon y almacénalo en una variable
      const pokemonType = response.types[0].type.name;
      // Actualiza la vista con el tipo de Pokémon
      this.pokemonType = pokemonType;

      if (pokemonType=="fire"){
        this.colorRojo();
      }
      if (pokemonType=="bug"){
        this.colorVerdeO();
      }
      if (pokemonType=="dark"){
        this.colorNegro();
      }
      if (pokemonType=="dragon"){
        this.colorAzulN();
      }
      if (pokemonType=="electric"){
        this.colorAmarillo();
      }
      if (pokemonType=="fairy"){
        this.colorRosa();
      }
      if (pokemonType=="fight"){
        this.colorVioleta();
      }
      if (pokemonType=="flying"){
        this.colorMoradoC();
      }
      if (pokemonType=="ghost"){
        this.colorMorado();
      }
      if (pokemonType=="grass"){
        this.colorVerdeC();
      }
      if (pokemonType=="ground"){
        this.colorCafe();
      }
      if (pokemonType=="ice"){
        this.colorAzulC();
      }
      if (pokemonType=="normal"){
        this.colorBlanco();
      }
      if (pokemonType=="poison"){
        this.colorMoradoO();
      }
      if (pokemonType=="psychic"){
        this.colorNaranja();
      }
      if (pokemonType=="rock"){
        this.colorCafeC();
      }
      if (pokemonType=="steel"){
        this.colorPlomo();
      }
      if (pokemonType=="water"){
        this.colorCeleste();
      }

      }));
    } catch (error) {
      console.log(error);
    }
  }
}
