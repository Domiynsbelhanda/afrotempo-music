import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  currentUser: any;
  update: any;
  formSubmitted = false;

  uploadProgress_image$: Observable<number>;
  file: any;

  constructor(
      private loadingService: LoadingService,
      private localStorage: LocalStorageService,
      private afs: AngularFirestore,
      private storage: AngularFireStorage,
      private router: Router,
    ) { }

  ngOnInit(): void {
    this.currentUser = this.localStorage.getCurrentUser();

    if(this.currentUser == null){
      this.router.navigate(['/home']);
    }

    this.update = new FormGroup({
      displayName: new FormControl(this.currentUser.displayName),
      localisation: new FormControl(this.currentUser.localisation),
      about: new FormControl(this.currentUser.description),
      phone: new FormControl(this.currentUser.telephone)
    });
  }

  get displayName() {
    return this.currentUser.displayName;
  }

  get localisation() {
    return this.currentUser.localisation;
  }

  get about() {
    return this.currentUser.description;
  }

  get phone() {
    return this.currentUser.telephone;
  }

  submitUpdate() {
    this.formSubmitted = true;
    const data = {
      uid: this.currentUser.uid,
      email: this.currentUser.email,
      displayName: this.update.controls.displayName.value,
      telephone: this.update.controls.phone.value,
      photoURL: this.currentUser.photoURL,
      localisation: this.update.controls.localisation.value,
      description: this.update.controls.about.value
    };
    this.localStorage.setLocalStorage('currentUser', data);
    this.afs.collection('users').doc(this.currentUser.uid).update({
      displayName: this.update.controls.displayName.value,
      telephone: this.update.controls.phone.value,
      description: this.update.controls.about.value,
      localisation: this.update.controls.localisation.value
    }).then(res => {
      location.reload();
    }, err => {
      console.log('Error : ' + err);
    });
  }

  ngAfterViewInit() {
      this.loadingService.stopLoading();
  }

  uploadImage(event: any) {
    this.file = event.target.files[0];
    const file = this.file;
    const filePath = 'artiste/' + this.currentUser.displayName + '-' + this.currentUser.uid;
    const ref = this.storage.ref(`${filePath}`);

    const task = ref.put(file);

    this.uploadProgress_image$ = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url) => {
          const datas = {
            uid: this.currentUser.uid,
            email: this.currentUser.email,
            displayName: this.update.controls.displayName.value,
            telephone: this.update.controls.phone.value,
            photoURL: url,
            cover_url: url,
            cover_art_url: url,
            localisation: this.update.controls.localisation.value,
            description: this.update.controls.about.value
          };
          this.localStorage.setLocalStorage('currentUser', datas);
          this.afs.collection('users').doc(this.currentUser.uid).set(datas, {merge: true}).then(res => {
            location.reload();
          }, err => {
            console.log('Error : ' + err);
          });
        });
      }),
    ).subscribe();
  }

}

