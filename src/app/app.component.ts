import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('moveImageSky', [
      state('start', style({ left: '-95px' })),
      state('end', style({ left: '0px' })),
      transition('start => end', [
        animate('1.5s ease-in-out') // Ajuste la durée selon ton besoin
      ])
    ]),
    trigger('moveImageTree', [
      state('start', style({ right: '-200px', opacity: 0 })),
      state('end', style({ right: '-100px', opacity: 1 })),
      transition('start => end', [
        animate('1.7s ease-in-out') // Ajuste la durée selon ton besoin
      ])
    ]),
    trigger('startCloudParallax', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 1 })),
      transition('off => on', [
        animate('0.7s ease-in-out')
      ])
    ]),
    trigger('fadeInWithDelay', [
      state('hidden', style({ opacity: 0 })), // Invisible au début
      state('visible', style({ opacity: 1 })), // Visible après l'animation
      transition('hidden => visible', [
        animate('0.7s ease-in-out') // Fade-in en 1 seconde
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  imageState = 'start'; // Définit l'état initial de l'image
  titleState = 'hidden';
  pressStartState = 'hidden';

  // mobile
  isMobile = false;

  showVideo = false;

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 568; // ajuste selon ton seuil mobile préféré
  }
  //

  /*@HostListener('window:load')
  onLoad(): void {
    setTimeout(() => {
      this.imageState = 'end'; // Déclenche l'animation au chargement
    }, 500);
  }*/

  constructor(
  ) {}

  ngOnInit() {
    this.checkScreenSize();

    setTimeout(() => {
      this.imageState = 'end'; // Déclenche l'animation au chargement
    }, 500);

    setTimeout(() => {
      this.titleState = 'visible'; // Déclenche le fade-in après 2s
    }, 2500);

    setTimeout(() => {
      this.pressStartState = 'visible'; // Déclenche le fade-in après 2s
    }, 3250);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
