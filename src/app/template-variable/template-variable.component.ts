import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'template-variable',
  imports: [FormsModule],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.css'
})
export class TemplateVariableComponent {
  varName!:string;

  callTemp(variable:string) {
    console.log(variable);
  }
  callTempObj(variable:object) {
    console.log(variable);
  }

  callVarModel(variable:object) {
    console.log(variable);
  }
}
