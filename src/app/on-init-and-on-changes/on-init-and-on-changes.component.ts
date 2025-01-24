import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter, DoCheck, AfterContentInit, AfterContentChecked, ContentChild, ElementRef, AfterViewInit, ViewChild, AfterViewChecked, Renderer2, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'oninit-and-onchanges',
  imports: [FormsModule, CommonModule],
  templateUrl: './on-init-and-on-changes.component.html',
  styleUrl: './on-init-and-on-changes.component.css'
})
export class OnInitAndOnChangesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  theVar:string = '初始值';
  @Input()
  theVar2:string = '初始值2';

  @Input()
  theVar3:string = '初始值3';
  @Output()
  theVar3Change = new EventEmitter<string>();

  constructor(private renderer: Renderer2){
    console.log('constructor: theVar:' + this.theVar + ', theVar2:' + this.theVar2 + ', theVar3:' + this.theVar3);
  }

  ngOnInit(): void {
    console.log('ngOnInit start: theVar:' + this.theVar + ', theVar2:' + this.theVar2 + ', theVar3:' + this.theVar3);
    this.theVar = 'ngOnInit';
    this.theVar2 = 'ngOnInit2';
    this.theVar3 = 'ngOnInit3';
    console.log('ngOnInit end: theVar:' + this.theVar + ', theVar2:' + this.theVar2 + ', theVar3:' + this.theVar3);
  }  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges start: theVar:' + this.theVar + ', theVar2:' + this.theVar2 + ', theVar3:' + this.theVar3);
    this.theVar = 'ngOnChanges';
    this.theVar2 = 'ngOnChanges2';
    this.theVar3 = 'ngOnChanges3';
    console.log('ngOnChanges end: theVar:' + this.theVar + ', theVar2:' + this.theVar2 + ', theVar3:' + this.theVar3);
  }


  colorR:string = 'red';
  onKeyDown(event: KeyboardEvent){
    let key = event.key;
    switch(key){
      case 'r': 
        this.colorR='red';
        break;
      case 'b':
        this.colorR='blue';
        break;
      case 'g':
        this.colorR='green';
    }
    console.log('keydown:' + event.key);
  }

 
  ngDoCheck(): void {
    console.log('ngDoCheck : theVar:' + this.theVar + ', theVar2:' + this.theVar2 + ', theVar3:' + this.theVar3);
  }
  
  
  @ContentChild('afterContentTest')
  projectContent!: ElementRef;
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit : ', this.projectContent.nativeElement.textContent);
    if (this.afterView == undefined){
      console.log('ngAfterContentInit 時 view尚未建立');
    }else {
      console.log('ngAfterContentInit 時 view已建立');
    }
  }
  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked : ', this.projectContent.nativeElement);
    if (this.afterView == undefined){
      console.log('ngAfterContentChecked 時 view尚未建立');
    }else {
      console.log('ngAfterContentChecked 時 view已建立');
    }
  }

  @ViewChild('viewTest') 
  afterView!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.afterView.nativeElement);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.afterView.nativeElement.textContent);
  }

  divIsVisable:boolean = true;

  ngOnDestroy():void {
    console.log('ngOnDestroy');
  }
  
  toggleDiv(): void {
    this.divIsVisable = !this.divIsVisable;
  }

}
