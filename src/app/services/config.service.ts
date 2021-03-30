import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  genre: any;

  songs: any;

  artists: any;

  albums: any;

  constructor() {
    this.genre = [
      {
        nom: 'Urbain',
        image: '../../../assets/images/genrs/urbain.jpg'
      },
      {
        nom: 'Rumba',
        image: '../../../assets/images/genrs/rumba.jpeg'
      },
      {
        nom: 'Rap',
        image: '../../../assets/images/genrs/rap.webp'
      },
      {
        nom: 'Gospel',
        image: '../../../assets/images/genrs/gospel.jpg'
      },
      {
        nom: 'Trap',
        image: '../../../assets/images/genrs/trap.jpg'
      },
      {
        nom: 'Autres',
        image: '../../../assets/images/genrs/autres.jpg'
      }   
    ];

    this.songs = [
      {
        cover_url: '../../../assets/images/music/zaina.jpg',
        name: 'Zaina',
        composer: 'Dj Chris',
        artist: 'Agressivo Nyandoro',
        downloads: 0,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9CZ6fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce9OdHGTX69UVOCFm7",
        link:"/track/IZCkAL0oCQce9OdHGTX69UVOCFm7/details",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      },

      {
        cover_url: '../../../assets/images/music/sabu.jpeg',
        name: 'Sabu',
        composer: 'P Son',
        artist: 'P Son',
        downloads: 4,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9C45fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce93HGTX69UVOCFm6",
        link:"/track/IZCkAL0oCQce93HGTX69UVOCFm6/details",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      },

      {
        cover_url: '../../../assets/images/music/veranda.jpg',
        name: 'Veranda x Boyoma',
        composer: 'P2N',
        artist: 'P2N',
        downloads: 9,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9C45fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce93HGTX69UVOCFm5",
        link:"/track/IZCkAL0oCQce93HGTX69UVOCFm5/details",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      },

      {
        cover_url: '../../../assets/images/music/abomi_nga.jpg',
        name: 'Abomi Nga feat Ferre Gola',
        composer: 'Majoos',
        artist: 'Majoos',
        downloads: 23,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9C45fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce93HGTX69UVOCFm4",
        link:"/track/IZCkAL0oCQce93HGTX69UVOCFm4/details",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      },

      {
        cover_url: '../../../assets/images/music/kamalondo.jpg',
        name: 'Kamalondo',
        composer: 'Lhomanix Kyanzila',
        artist: 'Lhomanix Kyanzila',
        downloads: 15,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9C45fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce93HGTX69UVOCFm3",
        link: "/track/IZCkAL0oCQce93HGTX69UVOCFm3/details",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      },

      {
        cover_url: '../../../assets/images/music/radio.jpg',
        name: 'Radio',
        composer: 'Tienness Naija',
        artist: 'Tienness Naija',
        downloads: 98,
        genre: 'Urbain',
        id: '9yoixB0kVPdCxO9C45fH',
        lyrics: 'No Lyrics',
        timestamp: 'No time',
        uid: "IZCkAL0oCQce93HGTX69UVOCFm2",
        link: "/track/IZCkAL0oCQce93HGTX69UVOCFm2/details",
        url: 'https://firebasestorage.googleapis.com/v0/b/afrotempo-cd55b.appspot.com/o/song%2F9yoixB0kVPdCxO9CZ6fH?alt=media&token=db7973f3-d139-42d4-b435-c6b347646833'
      }
    ];

    this.artists = [
      {
        cover_art_url: "../../../assets/images/artist/nyandoro.jpg",
        cover_url: "../../../assets/images/artist/nyandoro.jpg",
        description: "BABA YABO, le père de la musique congolaise, Agressivo reste et restera sans doute l'icone que le Katanga ne reveras plus, nous regretterons tous la fin de sa carrière.",
        displayName: "Agressivo Nyandoro",
        email: "nyandoro@afrotempo.com",
        localisation: "Lubumbashi / R.D Congo",
        name: "Agressivo Nyandoro",
        photoURL: "../../../assets/images/artist/nyandoro.jpg",
        telephone: "+243 996 852 377",
        uid: "nyandoro",
        link: "/artistes/nyandoro/details"
      },

      {
        cover_art_url: "../../../assets/images/artist/pson.jpg",
        cover_url: "../../../assets/images/artist/pson.jpg",
        description: "Artiste musicien évoluant a Lubumbashi. The Zuba Boy comme on aime bien le surnommé",
        displayName: "P Son Zuba Boy",
        email: "zubaboy@afrotempo.com",
        localisation: "Lubumbashi / R.D Congo",
        name: "P Son Zuba Boy",
        photoURL: "../../../assets/images/artist/pson.jpg",
        telephone: "+243 996 852 377",
        uid: "zubaboy",
        link: "/artistes/zubaboy/details"
      },

      {
        cover_art_url: "../../../assets/images/artist/kyanzila.jpg",
        cover_url: "../../../assets/images/artist/kyanzila.jpg",
        description: "L'homme de weka point, tjrs au top",
        displayName: "Lhomanix Kyanzila",
        email: "lhomanix@afrotempo.com",
        localisation: "Lubumbashi / R.D Congo",
        name: "Lhomanix Kyanzila",
        photoURL: "../../../assets/images/artist/kyanzila.jpg",
        telephone: "+243 996 852 377",
        uid: "kyanzila",
        link: "/artistes/kyanzila/details"
      },

      {
        cover_art_url: "../../../assets/images/artist/majoos.jpg",
        cover_url: "../../../assets/images/artist/majoos.jpg",
        description: "Le plus beau",
        displayName: "Majoos",
        email: "majoos@afrotempo.com",
        localisation: "Lubumbashi / R.D Congo",
        name: "Majoos",
        photoURL: "../../../assets/images/artist/majoos.jpg",
        telephone: "+243 996 852 377",
        uid: "majoos",
        link: "/artistes/majoos/details"
      },

      {
        cover_art_url: "../../../assets/images/artist/p2n.jpg",
        cover_url: "../../../assets/images/artist/p2n.jpg",
        description: "Le gorilla de la musique congolaise.",
        displayName: "DJ P2N Gorilla",
        email: "djp2n@afrotempo.com",
        localisation: "Lubumbashi / R.D Congo",
        name: "DJ P2N Gorilla",
        photoURL: "../../../assets/images/artist/p2n.jpg",
        telephone: "+243 996 852 377",
        uid: "p2n",
        link: "/artistes/p2n/details"
      },

      {
        cover_art_url: "../../../assets/images/artist/tienness.jpg",
        cover_url: "../../../assets/images/artist/tienness.jpg",
        description: "Artiste musicien évoluant au Lualaba. Naija International",
        displayName: "Tienness Naija",
        email: "tienness@afrotempo.com",
        localisation: "Lualaba / R.D Congo",
        name: "Tienness Naija",
        photoURL: "../../../assets/images/artist/tienness.jpg",
        telephone: "+243 996 852 377",
        uid: "tienness",
        link: "/artistes/tienness/details"
      }
    ];

    this.albums = [
      {
        name: "QQJD",
        artist: "Ferre Gola",
        uid: "uid fere",
        id: "qqjd",
        nbre_chanson: 20,
        cover_url: "../../../assets/images/album/qqjd.jpg"
      },

      {
        name: "YA SASA",
        artist: "Agressivo Nyandoro",
        uid: "uid",
        id: "yasasa",
        nbre_chanson: 10,
        cover_url: "../../../assets/images/album/ya_sasa.jfif"
      },

      {
        name: "MILS 3.0",
        artist: "Ninho",
        uid: "uid",
        id: "mils3",
        nbre_chanson: 11,
        cover_url: "../../../assets/images/album/mils.png"
      },

      {
        name: "EVOLUTION OF CONGO",
        artist: "DJ P2N Gorilla",
        uid: "uid",
        id: "evolution",
        nbre_chanson: 12,
        cover_url: "../../../assets/images/album/evolution_of_congo.jpg"
      },

      {
        name: "Power",
        artist: "Oxygène Bleduza",
        uid: "uid",
        id: "power",
        nbre_chanson: 7,
        cover_url: "../../../assets/images/album/power.jpg"
      },

      {
        name: "Tokooos 2",
        artist: "Fally Ipupa",
        uid: "uid",
        id: "tokooos2",
        nbre_chanson: 10,
        cover_url: "../../../assets/images/album/tokooos2.jpg"
      }
    ]
  }
}
