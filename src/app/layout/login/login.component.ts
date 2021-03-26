import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    signin: any;
    login: any;
    formSubmitted = false;
    formSubmitted2 = false;

  constructor(private authService: AuthentificationService,) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      userName: new FormControl('your_mail@gmail.com', [
          Validators.required,
          Validators.email
      ]),
      password: new FormControl('123456789', [
          Validators.required
      ]),
  });

  this.signin = new FormGroup({
    mailInscription: new FormControl('user@afrotempomusic.com', [
      Validators.required,
      Validators.email
    ]),
    passwordInscription: new FormControl('Password: 123456', [
      Validators.required
    ]),
    displayNameInscription: new FormControl('Dominique Youness', [
      Validators.required
    ]),
    telephoneInscription: new FormControl('+243 996 852 377', [
      Validators.required
    ]),
    localisation: new FormControl('Localisation : Lubumbashi', [
      Validators.required
    ]),
    description: new FormControl('Je suis un artiste résidant à Lubumbashi, ...', [
      Validators.required
    ])
  });
  }

  get mailInscription() {
    return this.signin.get('mailInscription');
  }

  get passwordInscription() {
    return this.signin.get('passwordInscription');
  }

  get displayNameInscription() {
      return this.signin.get('displayNameInscription');
  }

  get telephoneInscription() {
    return this.signin.get('telephoneInscription');
  }

  get localisation() {
    return this.signin.get('localisation');
  }

  get description() {
    return this.signin.get('description');
  }

  get userName() {
      return this.login.get('userName');
  }

  get password() {
      return this.login.get('password');
  }

  submitLogin() : void{
      this.formSubmitted2 = true;

      // You can replace this object with your user object
      this.authService.signInUser(
        this.login.controls.userName.value,
        this.login.controls.password.value,
        );
  }

  submitInscription(): void {
    this.formSubmitted = true;

    this.authService.createNewUser(
      this.signin.controls.mailInscription.value,
      this.signin.controls.passwordInscription.value,
      this.signin.controls.displayNameInscription.value,
      this.signin.controls.telephoneInscription.value,
      this.signin.controls.description.value,
      this.signin.controls.localisation.value
    );
  }

}
