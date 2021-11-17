import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingDiv: HTMLElement;

  private styles = [
    'display: none;',
    'position: fixed;',
    'inset: 0;',
    'background: rgba(0,0,0,0.5) url(assets/images/loading-padelpol.gif) center center no-repeat;',
    // 'background-image: url(assets/images/loading-padelpol.gif);', FORMA EXTENSA
    // 'background-repeat: no-repeat;',
    // 'background-position: center;',
  ]

  private count = 0;

  constructor() {
    this.loadingDiv = document.createElement("div");
    this.loadingDiv.setAttribute('style', this.styles.join(''));
    document.body.appendChild(this.loadingDiv);
  }
  // el count es para que cuando haga varias peticiones HTTP no esté haciendo star-stop todo el rato y 
  // hacerlo solo al principio y al final
  start() {
    this.count++;
    if (this.count == 1) this.loadingDiv.style.display = 'block';
  }
  stop() {
    if (this.count > 0) this.count--;
    if (this.count == 0) this.loadingDiv.style.display = 'none';
  }
}
