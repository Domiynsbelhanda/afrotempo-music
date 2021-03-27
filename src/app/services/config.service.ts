import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  genre: any;

  songs: any;

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
    ];

    this.songs = [
      {
        cover_url: 'https://lushitrap.com/assets/artists/Nyandoro/audio/Agressivo%20-%20ZAINA_lushitrapMUSIC.jpg',
        name: 'Zaina',
        composer: 'Dj Chris',
        artist: 'Agressivo Nyandoro',
        downloads: 0,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9CZ6fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce9OdHGTX69UVOCFm2",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      }
    ]
  }
}
