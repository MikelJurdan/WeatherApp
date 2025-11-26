import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute } from '@angular/router';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  weatherTemp : any
  todayDate = new Date()
  cityName = ""
  weatherIcon : any
  weatherDetails : any
  name = ""
  loading = true
  icon = 'assets/icon/icon.png'
  isFavorite = false;

  constructor(public httpClient: HttpClient, private favoritesService: FavoritesService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['city']) {
        this.cityName = params['city'];
        this.loadData();
      }
    });
  }

  loadData(){
    if (!this.cityName) return;
    this.loading = true;
    this.httpClient.get<any>(`${API_URL}?q=${this.cityName}&appid=${API_KEY}`).subscribe(results =>{
      console.log(results)
      this.weatherTemp = results['main']
      this.name = results['name']
      console.log(this.weatherTemp)
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails)
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
      this.loading = false;
      this.checkFavorite();
    })
  }

  checkFavorite() {
    this.isFavorite = this.favoritesService.isFavorite(this.name);
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.name);
    } else {
      this.favoritesService.addFavorite(this.name);
    }
    this.checkFavorite();
  }
}
