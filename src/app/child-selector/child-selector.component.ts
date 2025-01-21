import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-selector',
  imports: [],
  templateUrl: './child-selector.component.html',
  styleUrl: './child-selector.component.css'
})
export class ChildSelectorComponent {

  @Input() item = ''; // any type

  @Output() forParentData = new EventEmitter<string>();

  addMsgToParent(msg: string){
    this.forParentData.emit(msg);
  }
}
