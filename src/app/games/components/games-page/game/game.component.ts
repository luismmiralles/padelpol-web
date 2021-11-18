import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/games/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

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
