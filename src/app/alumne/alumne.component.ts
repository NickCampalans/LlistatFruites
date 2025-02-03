import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alumne',
  imports: [],
  templateUrl: './alumne.component.html',
  styleUrl: './alumne.component.css'
})
export class AlumneComponent {
  @Input() nom: string = "";
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
