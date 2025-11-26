import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";
import { CommonModule, NgFor } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonicModule, CommonModule, IonList],
})
export class Tab1Page {

  favoriteCities: string[] = [];

  constructor(private favoritesService: FavoritesService , private router: Router) {
    this.favoriteCities = this.favoritesService.getFavorites();
  }

  removeCity(city: string) {
    this.favoritesService.removeFavorite(city);
    this.favoriteCities = this.favoritesService.getFavorites();
  }

  displayCity(city: string){
    this.router.navigate(['/tabs/home'], { queryParams: { city } });
  }

}
