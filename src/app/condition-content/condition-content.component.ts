import { Component, Input } from '@angular/core';

@Component({
  selector: 'condition-content',
  imports: [],
  templateUrl: './condition-content.component.html',
  styleUrl: './condition-content.component.css'
})
export class ConditionContentComponent {
  @Input() condiData:string = "1";
}
