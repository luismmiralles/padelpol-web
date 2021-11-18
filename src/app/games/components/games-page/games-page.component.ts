import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertService } from 'src/app/core/services/sweetalert.service';
import { GamesApiService } from '../../services/games-api.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  constructor(public router: Router, private gamesApiService: GamesApiService, private sweetAlertService: SweetalertService) { }

  ngOnInit(): void {
    this.gamesApiService.getGames().subscribe({
      next: res => {
        console.log(res);
      },
      error: err => this.sweetAlertService.showAPIErrors(err)
    });
  }

  openCreateGameDialog(): void {
    // this.dialog.open(CreateGameDialogComponent, {
    //   data: {}
    // });
  }
}
