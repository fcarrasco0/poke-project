import { MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';


@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css']
})
export class ModalRegistroComponent implements OnInit {

  pokemon: string;
  modalActions = new EventEmitter<string|MaterializeAction>();
  regiaoInicial: string;
  regions: string[] = [ "Kanto", "Johto", "Hoenn", "Sinnoh", "Unnova", "Kalos", "Ilhas Laranja", "Alola" ];

  constructor(public pkmnService: PokemonService) { 
    this.pokemon = 'bulbasaur';
  }

  ngOnInit() {
  }

  abreModal(){
    this.modalActions.emit({action: "modal", params: ['open'] });
  }

  fechaModal(){
    this.modalActions.emit({action: "modal", params: ['close'] });
  }

  onSubmit(cadastro){
    console.log(cadastro.value);
  }

  // getPokemon(pokemon){
  //   this.pkmnService.getPokemonByName(pokemon)
  //   .subscribe(
  //     (res)=>{
  //           this.pokemons.push(res); 
  //           console.log(res);
  //       }
  //     )
  // }


}
