import {Component, OnInit} from '@angular/core';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'afrotempo-music';
  loadAPI!: Promise<unknown>;

  constructor(private loadingService: LoadingService) {
    this.loadingService.startLoading();
  }

  ngOnInit(): void{
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScripts();
    });
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      "assets/js/jquery.js",
      "assets/js/bootstrap.min.js",
      "assets/js/plugins/swiper/js/swiper.min.js",
      "assets/js/plugins/player/jplayer.playlist.min.js",
      "assets/js/plugins/player/jquery.jplayer.min.js",
      "assets/js/plugins/player/audio-player.js",
      "assets/js/plugins/player/volume.js",
      "assets/js/plugins/nice_select/jquery.nice-select.min.js",
      "assets/js/plugins/scroll/jquery.mCustomScrollbar.js",
      "assets/js/custom.js",
       //Load all your script files here'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = dynamicScripts[i];
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    } }
}
