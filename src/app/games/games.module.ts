import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesPageComponent } from './components/games-page/games-page.component';

// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { GameComponent } from './components/games-page/game/game.component';

@NgModule({
  declarations: [
    GamesPageComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class GamesModule { }
