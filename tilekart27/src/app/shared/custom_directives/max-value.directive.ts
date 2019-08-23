import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMaxValue]'
})
export class MaxValueDirective {


  @HostListener('change') validateValue(){
    console.log(this.element.nativeElement);
    let elementValue = this.element.nativeElement.value;
    let directiveValue = this.element.nativeElement.attributes['appmaxvalue'].value;
    if(elementValue > directiveValue){
      console.log(`element value ${elementValue} is greater than configured directive value ${directiveValue}`);
      // i want to create error div and append the element where this directive is applied
      let divNode = this.renderer.createElement('div');
      let textNode = this.renderer.createText(`element value ${elementValue} is greater than configured directive value ${directiveValue}`);
      this.renderer.appendChild(divNode,textNode);
      this.renderer.addClass(divNode,'alert');
      this.renderer.addClass(divNode,'alert-danger');
      this.renderer.appendChild(this.element.nativeElement.parentElement,divNode);
    }
  }

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    // console.log(this.element.nativeElement);
    // let elementValue = this.element.nativeElement.value;
    // let directiveValue = this.element.nativeElement.attributes['appmaxvalue'].value;
    // if(elementValue > directiveValue){
    //   console.log(`element value ${elementValue} is greater than configured directive value ${directiveValue}`);
    // }
  }

}
