import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionStorageService: SessionStorageService) { }

  getCurrentUser(): User | null {
    try {
      const token = this.sessionStorageService.getItem("token");
      if (!token) return null;
      const payload = JSON.parse(atob(token.split(".")[1])); // se coge el segundo elemento (payload) del token
      // se pasa a base 64 y se pasa a JSON
      return new User(payload.user);
    } catch (err) {
      return null;
    }
  }
}
