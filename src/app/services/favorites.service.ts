import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
	private favorites: string[] = [];

	constructor() {
		const stored = localStorage.getItem('favorites');
		if (stored) {
			this.favorites = JSON.parse(stored);
		}
	}

	getFavorites(): string[] {
		return this.favorites;
	}

	addFavorite(city: string) {
		if (!this.favorites.includes(city)) {
			this.favorites.push(city);
			this.save();
		}
	}

	removeFavorite(city: string) {
		this.favorites = this.favorites.filter(fav => fav !== city);
		this.save();
	}

	isFavorite(city: string): boolean {
		return this.favorites.includes(city);
	}

	private save() {
		localStorage.setItem('favorites', JSON.stringify(this.favorites));
	}
}
