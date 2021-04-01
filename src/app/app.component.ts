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

    this.loadAPI = new Promise((resolve) => {
      this.loadScripts();
      resolve(true);
    });

    const event = this.loaderScript('assets/js/jquery.min.js')
      .then(() => { console.log("loaded"); })
      .catch(() => { console.log("error"); });
  }

  loadScripts() { 

    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      'assets/js/jquery.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/form-contact.js',
      'assets/js/gallery.js',
      'assets/js/jquery.circliful.min.js',
      'assets/js/jquery.magnific-popup.min.js',
      'assets/js/jquery.mb.YTPlayer.min.js',
      'assets/js/jquery.mixitup.js',
      'assets/js/jquery.stellar.min.js',
      'assets/js/mansory.js',
      'assets/js/owl.carousel.min.js',
      'assets/js/scripts.js',
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
    } 
 }

  loaderScript(scriptUrl: string){
    return new Promise(function (res, rej) {
      let script = document.createElement('script');
      script.src = scriptUrl;
      script.type = 'text/javascript';
      script.onerror = rej;
      script.async = true;
      script.onload = res;
      script.addEventListener('error',rej);
      script.addEventListener('load',res);
      document.head.appendChild(script);
    })
  }

}
