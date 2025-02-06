import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LlistatAlumnesComponent } from './llistat-alumnes/llistat-alumnes.component';
import { DetallAlumneComponent } from './detall-alumne/detall-alumne.component';
import { Alumne } from './classes/alumne';

@Component({
  selector: 'app-root',
  imports: [CommonModule, LlistatAlumnesComponent, DetallAlumneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titles:Alumne[] = [
    { nom: 'Pau', edat: 20, avatar: 'users-1'}, 
    { nom: 'Marc', edat: 21, avatar: 'users-2'}, 
    { nom: 'Marc', edat: 22, avatar: 'users-3'}, 
    { nom: 'Dídac', edat: 23, avatar: 'users-4'},
    { nom: 'Ismael', edat: 24, avatar: 'users-5'},
    { nom: 'Marc', edat: 25, avatar: 'users-6'},
    { nom: 'Nico', edat: 26, avatar: 'users-7'}
  ];

  current: Alumne = new Alumne;
  currentPosition: number = -1;

  constructor() {
    
  }

  select(position: number) {
    this.current = this.titles[position];
    this.currentPosition = position;
  }

  delete(position: number) {
    this.titles.splice(position, 1)
    if(position == this.currentPosition) {
      this.currentPosition = -1;
      this.current = new Alumne();
    }
  }
}
