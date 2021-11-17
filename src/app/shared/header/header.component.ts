import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from 'src/app/app-routes';
import { authRoutes } from 'src/app/auth/auth-routes';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | null;

  constructor(public router: Router, private authService: AuthService, private sessionStoragService: SessionStorageService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  openShowUserDialog() {

  }

  logOut() {
    this.sessionStoragService.removeItem("token");
    this.router.navigate([`${appRoutes.authModule}/${authRoutes.loginPage}`]);
  }

}