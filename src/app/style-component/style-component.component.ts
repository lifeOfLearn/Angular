import { Component } from '@angular/core';

@Component({
  selector: 'style-component',
  imports: [],
  templateUrl: './style-component.component.html',
  styleUrl: './style-component.component.css'
})
export class StyleComponentComponent {
  textColor: string = 'pink';
  textStyleString: string = 'font-size: 1.5em; text-decoration: underline; color: blue;';
  borderStyleObj = {
    border: '1px solid #999',
    borderRadius: '30px',
    backgroundColor: '#ccc'
  };
}
