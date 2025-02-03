import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detall-alumne',
  imports: [],
  templateUrl: './detall-alumne.component.html',
  styleUrl: './detall-alumne.component.css'
})
export class DetallAlumneComponent {
  @Input() element: string = "";
}
