import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LlistatAlumnesComponent } from './llistat-alumnes/llistat-alumnes.component';
import { DetallAlumneComponent } from './detall-alumne/detall-alumne.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, LlistatAlumnesComponent, DetallAlumneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titles:string[] = ['Pau', 'Marc', 'Marc', 'Dídac', 'Ismael', 'Nico', 'Marc'];

  current: string = "";

  constructor() {
    this.current = this.titles[0];
  }

  select(position: number) {
    this.current = this.titles[position];
  }


}
