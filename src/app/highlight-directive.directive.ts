import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirectiveDirective {

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'lightgreen';
  private backgroundColor:string;
  
  constructor(/*private elementRef: ElementRef, private  renderer: Renderer*/) {
    //this.renderer.setElementStyle(this.elementRef.nativeElement, ' background-color', 'green');
     
   }

   ngOnInit(){
      this.backgroundColor = this.defaultColor;
    }

}
