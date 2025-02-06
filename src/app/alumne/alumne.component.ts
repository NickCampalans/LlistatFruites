import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumne } from '../classes/alumne';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alumne',
  imports: [NgClass],
  templateUrl: './alumne.component.html',
  styleUrl: './alumne.component.css'
})
export class AlumneComponent {
  @Input() elementActual: Alumne = new Alumne();
  @Input() index: number = -1;

  @Output() deleteItemEvent =  new EventEmitter<number>();
  @Output() selectItemEvent =  new EventEmitter<number>();

  deleteItem() {
    this.deleteItemEvent.emit(this.index);
  }

  selectItem() {
    this.selectItemEvent.emit(this.index);
  }
}
