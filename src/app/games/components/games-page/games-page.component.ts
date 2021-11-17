import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  openCreateGameDialog(): void {
    // this.dialog.open(CreateGameDialogComponent, {
    //   data: {}
    // });
  }

  openShowUserDialog(): void {
    // this.dialog.open(ShowUserDialogComponent, {
    //   data: {}
    // });
  }

}
