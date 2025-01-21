import { Component } from '@angular/core';

@Component({
  selector: 'event-component',
  imports: [],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.css'
})
export class EventComponentComponent {
  onClick() {
    alert('click!!!');
  }
}
