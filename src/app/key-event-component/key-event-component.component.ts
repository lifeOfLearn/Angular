import { Component } from '@angular/core';

@Component({
  selector: 'key-event-component',
  imports: [],
  templateUrl: './key-event-component.component.html',
  styleUrl: './key-event-component.component.css'
})
export class KeyEventComponentComponent {
    
  onKeydown(event : Event):void {
    console.log('keydown', event);
  }
}
