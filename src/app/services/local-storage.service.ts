import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    setLocalStorage(key: string, data: any) {
        try {
            return localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to local storage', e);
            return null;
        }
    }

    getLocalStorage(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error('Error saving to local storage', e);
            return null;
        }
    }

    getCurrentUser() {
        return this.getLocalStorage("currentUser");
    }
}
