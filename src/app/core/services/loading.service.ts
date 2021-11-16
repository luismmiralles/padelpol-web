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

  constructor() {
    this.loadingDiv = document.createElement("div");
    this.loadingDiv.setAttribute('style', this.styles.join(''));
    document.body.appendChild(this.loadingDiv);
  }

  start() {
    this.loadingDiv.style.display = 'block';
  }
  stop() {
    this.loadingDiv.style.display = 'none';
  }
}
