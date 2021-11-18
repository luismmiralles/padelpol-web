import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

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
