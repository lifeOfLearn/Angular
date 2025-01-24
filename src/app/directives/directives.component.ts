import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MyDirectiveDirective } from '../my-directive.directive';
import { MyUnlessDirectiveDirective } from '../my-unless-directive.directive';
@Component({
  selector: 'app-directives',
  
  imports: [CommonModule, MyDirectiveDirective, MyUnlessDirectiveDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  ngIfBoolean:boolean = false;

  class: {name:string} | null = {name : 'clazzzz'};

  ngForItems = [
    {id : 1, name: 'Alice'},
    {id : 2, name: 'Bob'},
    {id : 3, name: 'Corin'},
    {id : 4, name: 'David'},
  ];

  trackById(index: number, item:{id: number, name:string}): number {
    return item.id;
  }


  show = true;
  thenBlock: TemplateRef<any>|null = null;
  
  @ViewChild('primaryBlock', {static: true})
  primaryBlock: TemplateRef<any>|null = null;
  
  @ViewChild('secondaryBlock', {static: true})
  secondaryBlock: TemplateRef<any>|null = null;

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }
  ngOnInit() {
    this.thenBlock = this.primaryBlock;
  }

  myCondition=false;
}
