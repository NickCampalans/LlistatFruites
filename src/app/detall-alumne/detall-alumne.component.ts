import { Component, Input } from '@angular/core';
import { Alumne } from '../classes/alumne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detall-alumne',
  imports: [CommonModule],
  templateUrl: './detall-alumne.component.html',
  styleUrl: './detall-alumne.component.css'
})
export class DetallAlumneComponent {
  @Input() element: Alumne = new Alumne();

  getAvatarUrl():string {
    return `assets/avatars/${this.element.avatar}`; 
  }
}
