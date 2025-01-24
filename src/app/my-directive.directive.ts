import { Directive, ElementRef, HostListener, Input , OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  
  constructor(private e : ElementRef) {
    this.e.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('click') onClickListener(){
      this.hightLight('red');
   }


   //e在建構子那邊要設定private之後才能用,因為變成類的property
   hightLight(backgroundColorString : string) {
    this.e.nativeElement.style.backgroundColor = backgroundColorString;
    setTimeout(()=>{
      this.e.nativeElement.style.backgroundColor = 'yellow';
    }, 1000)
   }


   @Input() hightLightColor !:string;

  ngOnChanges(change: SimpleChanges){
    if(change['hightLightColor']){
      this.e.nativeElement.style.backgroundColor = this.hightLightColor;
    }
  }
}
