import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  imports: [],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  
  @Input()  size!: number | string;
  
  @Output() sizeChange = new EventEmitter<number>();

  resize(delta : number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta)); //"+"this.size =>string to number
    this.sizeChange.emit(this.size);
  }

  dec(){
    this.resize(-1);
  }

  inc(){
    this.resize(+1);
  }
}
