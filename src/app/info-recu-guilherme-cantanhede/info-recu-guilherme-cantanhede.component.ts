import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-info-recu-guilherme-cantanhede',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './info-recu-guilherme-cantanhede.component.html',
  styleUrl: './info-recu-guilherme-cantanhede.component.css'
})
export class InfoRecuGuilhermeCantanhedeComponent {

  id: any
  data: any
  evolutionchain: string = ''
  evolution: any;

  constructor(private http: HttpClient) {}

  getPokemonInfo() {
    // @ts-ignore
    this.id = document.getElementById('idValue').value

    console.log(this.id)

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + this.id + '/').subscribe({
      next: (data: any) => {
        this.data = data
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
      }
    })

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon-species/' + this.id + '/').subscribe({
      next: (data: any) => {
        this.evolutionchain = data.evolution_chain.url
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.http.get<any>(this.evolutionchain).subscribe({
          next: (data: any) => {
            this.evolution = data
          },
          error: (err) => {
            console.log(err)
          },
          complete: () => {
          }
        })
      }
    })
    }
  }
