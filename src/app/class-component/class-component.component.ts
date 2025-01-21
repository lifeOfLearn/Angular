import { Component } from '@angular/core';

@Component({
  selector: 'class-component',
  imports: [],
  templateUrl: './class-component.component.html',
  styleUrl: './class-component.component.css'
})
export class ClassComponentComponent {
  classBindingString: string = 'bgBk colorR';
  
  classBindingObject = {
    bgBlue: true,
    colorG: false
  };

  classBindingArray: string[] = ['bgRed', 'colorB'];
}
