import { Injectable } from '@angular/core';

type sessionKey = "token";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setItem(key: sessionKey, value: string) {
    sessionStorage.setItem(key, value);
  }

  getItem(key: sessionKey) {
    return sessionStorage.getItem(key);
  }

  removeItem(key: sessionKey) {
    sessionStorage.removeItem(key);
  }
}
