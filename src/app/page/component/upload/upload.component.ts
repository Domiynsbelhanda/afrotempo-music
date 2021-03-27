import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  currentFile: File = null;
  currentUsers: any;
  type: string = "type";
  form: any;
  uploadProgress_song$: Observable<number>;
  uploadProgress_image$: Observable<number>;;
  file: any;
  id = this.afs.createId();
  genres: any;

  constructor(
    private configs: ConfigService,
              private afs: AngularFirestore,
              private authFirebase: AngularFireAuth,
              private router: Router,
              private storage: AngularFireStorage,
              private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.currentUsers = this.localStorageService.getCurrentUser();
    this.genres = this.configs.genre;
  }

  goHome() {
    this.router.navigate(['home']);
  }

  onSubmit(form: NgForm) {
    this.form = form.value;
    const data = {
      uid: this.currentUsers.uid,
      id: this.id,
      name: form.value['songName'],
      artist: this.form['artistName'],
      composer: this.form['composerName'],
      genre: this.form['genres'],
      downloads: 0,
      lyrics: "No Lyrics",
      timestamp: new Date(),
    };

    this.afs.collection('chanson').doc(this.id).set(data, {merge: true}).then(res=>{
      this.router.navigate(['home']);
    });
    this.router.navigate(['home']);
  }

  uploadImage(event: any) {

    this.file = event.target.files[0];
    const file = this.file;
    const filePath = 'cover/' + this.id;
    const ref = this.storage.ref(`${filePath}`);

    const task = ref.put(file);

    this.uploadProgress_image$ = task.percentageChanges();

    task.snapshotChanges().pipe(
        finalize(() => {
        ref.getDownloadURL().subscribe((url) => {
          const data = {
            cover_url: url,
            cover_art_url: url
          };

          this.afs.collection('chanson').doc(this.id).set(data, {merge: true});
        });
        }),
    ).subscribe();
  }

  uploadSong(event: any) {

    this.file = event.target.files[0];
    const file = this.file;
    const filePath = 'song/' + this.id;
    const ref = this.storage.ref(`${filePath}`);

    const task = ref.put(file);

    this.uploadProgress_song$ = task.percentageChanges();

    task.snapshotChanges().pipe(
        finalize(() => {
        ref.getDownloadURL().subscribe((url) => {
            const data = {
              url: url
            };
            this.afs.collection('chanson').doc(this.id).set(data, {merge: true});
        });
        }),
    ).subscribe();
  }

}
