import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';

import { AppRoutingModule } from './app.routing.module'

import { HttpClientModule } from '@angular/common/http'; //Importar para a service funcionar
import { PokemonService } from './services/pokemon/pokemon.service';
import { LigaComponent } from './pages/liga/liga.component';
import { ModalRegistroComponent } from './pages/liga/modal-registro/modal-registro.component'; //Importar para a Service funcionar
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent,
    LigaComponent,
    ModalRegistroComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule, //Importar para a service funcionar
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
