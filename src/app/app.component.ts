import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent} from './new-component/new-component.component'
import { ClassComponentComponent } from './class-component/class-component.component';
import { StyleComponentComponent } from './style-component/style-component.component';
import { EventComponentComponent } from './event-component/event-component.component';
import { PasiveComponentComponent } from './pasive-component/pasive-component.component';
import { KeyEventComponentComponent } from './key-event-component/key-event-component.component';
import { ChildSelectorComponent } from './child-selector/child-selector.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ContentComponent } from './content/content.component';
import { MultiContentComponent } from './multi-content/multi-content.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { SvgTemplateComponent } from './svg-template/svg-template.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { OnInitAndOnChangesComponent } from './on-init-and-on-changes/on-init-and-on-changes.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, NewComponentComponent, CommonModule, ClassComponentComponent, StyleComponentComponent, EventComponentComponent, PasiveComponentComponent, KeyEventComponentComponent, ChildSelectorComponent, TwoWayBindingComponent, ContentComponent, MultiContentComponent, TemplateVariableComponent, SvgTemplateComponent, DirectivesComponent, OnInitAndOnChangesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'angular';
  title2:string = 'title2String';
  title3:number = 1;
  
  today:Date = new Date();

  customers = [{value : 'Tom'}, {value : 'Emily'}, {value : 'Bob'}];

  buttonUse = false;
  constructor() {
    setTimeout(()=>{
      this.buttonUse = true;
    }, 3000)
  }

  forChildData:string = 'for child data!!!';

  msgs = ['msg1', 'msg2', 'msg3', 'msg4'];

  addMsg(newMsg: string){
    this.msgs.push(newMsg);
  }


  fontSize=16;
  testOnChangeLifeHook:string = "parentVar";
  testOnChangeLifeHook2:string = "parentVar2";
  testOnChangeLifeHook3:string = "parentVar3";
}
