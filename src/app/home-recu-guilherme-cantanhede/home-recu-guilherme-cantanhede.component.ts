import { Component } from '@angular/core';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {Web3} from "web3";

@Component({
  selector: 'app-home-recu-guilherme-cantanhede',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './home-recu-guilherme-cantanhede.component.html',
  styleUrl: './home-recu-guilherme-cantanhede.component.css'
})
export class HomeRecuGuilhermeCantanhedeComponent {

  image: string = ''
  message: string = ''
  data: any | undefined
  cost: number | undefined
  prices: any;
  preubnb: number = 0;

  constructor(private http: HttpClient) {
    this.getCryptoPrices();
    let randomNumber = Math.floor(Math.random() * 64)
    let PromiseDolc = new Promise((resolve, reject) => {
      this.http.get<any>('https://pokeapi.co/api/v2/berry/' + randomNumber + '/').subscribe({
        next: (data) => {
          if (data.flavors[2].potency == 0) {
            reject(data)
          }
          else {
            resolve(data)
          }
        },
        error: (err) => {
          reject(err)
        },
        complete: () => {
        }
      })
    })

    PromiseDolc.then((data: any) => {
      this.data = data
      data.flavors.forEach((element: { potency: number; flavor: any; }) => {
        if(element.potency != 0) {
          console.log(element.flavor.name)
        }
      })
      this.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/'+ data.item.name +'.png'
      this.message = 'Promesa resolta! La ' + data.item.name + ' és dolça. Potencia de sabor:' + data.flavors[2].potency


      this.http.get<any>('https://pokeapi.co/api/v2/item/' + data.item.name + '/').subscribe({
        next: (data) => {
          this.cost = data.cost
        }
      })

    }).catch((err: any) => {
      this.data = err
      err.flavors.forEach((element: { potency: number; flavor: any; }) => {
        if(element.potency != 0) {
          console.log(element.flavor.name)
        }
      })
      this.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/'+ err.item.name +'.png'
      this.message = 'Promesa rebutjada! La ' + err.item.name + ' no és dolça. Potencia de sabor:' + err.flavors[2].potency


      this.http.get<any>('https://pokeapi.co/api/v2/item/' + err.item.name + '/').subscribe({
        next: (data) => {
          this.cost = data.cost
        }
      })
    })
    }

  getCryptoPrices() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';
    const ids = 'bitcoin,binancecoin';
    const vsCurrencies = 'usd,eur';
    const url = `${apiUrl}?ids=${ids}&vs_currencies=${vsCurrencies}`;

    setInterval(() => {
      this.http.get(url).subscribe((data) => {
        this.prices = data;
        if(this.prices != undefined) {
          // @ts-ignore
          this.preubnb = this.cost / this.prices.binancecoin?.eur;
        }
      });
    }, 5000)
  }

  comprar() {
    // @ts-ignore
    window.ethereum.request({method: 'eth_requestAccounts'}).then((response) => {
      let walletId = response[0]
      const weiValue = parseInt(Web3.utils.toWei(this.preubnb.toFixed(8), "ether")).toString(16);
      //@ts-ignore
      window.ethereum.request({method: "eth_sendTransaction",
        params: [
          {
            // The user's active address.
            from: walletId,
            // Required except during contract publications.
            to: "0xd5D22fBEbE7E85628fb202A7a21717fC2168944d",
            // Only required to send ether to the recipient from the initiating external account.
            value: weiValue
          },
        ],
      }).then((res: any) => {
        console.log(res)
      })
    })
  }

    }
