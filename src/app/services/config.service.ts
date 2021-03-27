import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  genre: any;

  constructor() {
    this.genre = [
      {
        nom: 'Rumba',
        image: 'https://www.mediacongo.net/cache/rumba-congolaise_jpg_640_350_1.jpeg'
      },
      {
        nom: 'RAP',
        image: 'https://image.shutterstock.com/image-vector/vector-logo-rap-music-hand-600w-1365427319.jpg'
      }    
    ]
  }
}
