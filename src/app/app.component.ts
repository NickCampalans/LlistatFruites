import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumneComponent } from './alumne/alumne.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AlumneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titles:string[] = ['Pau', 'Marc', 'Marc', 'Dídac', 'Ismael', 'Nico'];

  eraseLast() : void {
    this.titles.pop();
  }

  deleteItem(position: number) {
    this.titles.splice(position, 1);
  }
}
