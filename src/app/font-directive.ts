import { Directive,ElementRef,Input,HostListener } from "@angular/core";

@Directive({
   selector: '[appFont]' 
})

export class FontDirective {

    constructor(private elem:ElementRef) {}

    @HostListener("mouseenter") onmouseenter(){
        this.fontChange('Caveat')
      }
      @HostListener("mouseleave") onmouseleave(){
        this.fontChange('Cookie')
      }
      private fontChange(action:string){
        this.elem.nativeElement.style.fontFamily = 'Great Vibes'
        this.elem.nativeElement.style.fontSize = '30px'
      
      }
}
