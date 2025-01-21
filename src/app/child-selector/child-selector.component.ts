import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-selector',
  imports: [],
  templateUrl: './child-selector.component.html',
  styleUrl: './child-selector.component.css'
})
export class ChildSelectorComponent {

  @Input() item = ''; // any type
}
