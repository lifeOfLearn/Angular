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
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, NewComponentComponent, CommonModule, ClassComponentComponent, StyleComponentComponent, EventComponentComponent, PasiveComponentComponent, KeyEventComponentComponent, ChildSelectorComponent],
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
}
