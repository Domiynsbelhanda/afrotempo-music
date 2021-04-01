import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {LocalStorageService} from './local-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  item$: Observable<any[]>;

  constructor(private authFirebase: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore,
              private localStorage: LocalStorageService) {
    this.item$ = this.afs.collection('users').valueChanges();
  }

  createNewUser(email: string, password: string, display: string, phone: string, description: string, localisation: string) {
    return new Promise(
      (resolve, reject) => {
        this.authFirebase.createUserWithEmailAndPassword(email, password).then(
          (users) => {
            const data = {
              uid: users.user.uid,
              email: users.user.email,
              displayName: display,
              name: display,
              telephone: phone,
              cover_url: 'https://www.materialui.co/materialIcons/action/account_circle_black_192x192.png',
              cover_art_url: 'https://www.materialui.co/materialIcons/action/account_circle_black_192x192.png',
              photoURL: 'https://www.materialui.co/materialIcons/action/account_circle_black_192x192.png',
              localisation: localisation,
              description: description,
              link: '/artistes/'+users.user.uid+'details'
            };
            this.afs.doc('users/' + users.user.uid).set(data, {merge: true}).then(res => {
              location.reload();
            }, err => {
              console.log('Error : ' + err);
            });
            this.localStorage.setLocalStorage('currentUser', data);
            resolve(users);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  signInUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        this.authFirebase.signInWithEmailAndPassword(email, password).then(
          (users) => {
            this.item$.subscribe((value) => {
              for (let val of value) {
                if (val.uid == users.user.uid) {
                  const data = {
                      uid: users.user.uid,
                      email: users.user.email,
                      displayName: val.displayName,
                      telephone: val.telephone,
                      photoURL: val.photoURL,
                      description: val.description,
                      localisation: val.localisation,
                      cover_url: val.cover_url,
                      cover_art_url: val.cover_art_url
                    };
                  this.localStorage.setLocalStorage('currentUser', data);
                  location.reload();
                }
              }
            });
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
