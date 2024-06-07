import { Routes } from '@angular/router';
import {HomeRecuGuilhermeCantanhedeComponent} from "./home-recu-guilherme-cantanhede/home-recu-guilherme-cantanhede.component";
import {
  InfoRecuGuilhermeCantanhedeComponent
} from "./info-recu-guilherme-cantanhede/info-recu-guilherme-cantanhede.component";

export const routes: Routes = [
  {path: '', title: '', component:HomeRecuGuilhermeCantanhedeComponent},
  {path:'info', title: '', component:InfoRecuGuilhermeCantanhedeComponent},
];
