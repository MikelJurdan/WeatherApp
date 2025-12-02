import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { CommonModule, NgFor } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class Tab1Page {

  favoriteCities: string[] = [];

  constructor(private favoritesService: FavoritesService , private router: Router) {
    this.favoriteCities = this.favoritesService.getFavorites();
  }

  ionViewWillEnter() {
    this.refreshFavorites();
  }

  removeCity(city: string) {
    this.favoritesService.removeFavorite(city);
    this.refreshFavorites();
  }

  refreshFavorites() {
    this.favoriteCities = this.favoritesService.getFavorites();
  }

  displayCity(city: string){
    this.router.navigate(['/tabs/home'], { queryParams: { city } });
  }

}
