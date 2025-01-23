import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessMyDirective]'
})
export class MyUnlessDirectiveDirective {
  private hasView: boolean = false;

  //UnlessDirective 會透過angular生成 <ng-template> ,建立一個嵌入的view,然後將此view插入宿主元素後面的viewContainer
  //TemplateRef 幫助獲取<ng-template>內容
  //ViewContainerRef 訪問viewContainer
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnlessMyDirective(condition: boolean) {
    if(!condition && !this.hasView) {
      //將TemplateRef內容插入view container,實現動態渲染
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
