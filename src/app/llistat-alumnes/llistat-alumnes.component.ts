import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlumneComponent } from '../alumne/alumne.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-llistat-alumnes',
  imports: [CommonModule, AlumneComponent],
  templateUrl: './llistat-alumnes.component.html',
  styleUrl: './llistat-alumnes.component.css'
})
export class LlistatAlumnesComponent {
  @Input() titles: string[] = [];
  @Output() deleteItemEventList =  new EventEmitter<number>();
  @Output() selectItemEventList =  new EventEmitter<number>();

  borrar(element: number) {
    this.deleteItemEventList.emit(element)
  }

  seleccionar(element: number) {
    this.selectItemEventList.emit(element)
  }
}
