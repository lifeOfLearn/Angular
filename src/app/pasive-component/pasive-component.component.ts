import { Component } from '@angular/core';


@Component({
  selector: 'pasive-component',
  imports: [],
  templateUrl: './pasive-component.component.html',
  styleUrl: './pasive-component.component.css'
})
export class PasiveComponentComponent {
  onScroll(event : Event):void {
    console.log('scroll',event);
  }
}
