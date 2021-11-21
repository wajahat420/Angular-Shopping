import { Directive, ElementRef, HostBinding, HostListener, Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickedBgColor]'
})
export class BgColor {
  @Input() defaultColor:string = 'white'
  @Input() clickedColor:string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor:string = 'white'
  @HostBinding('style.color') color:string = 'black'
  isTrue = false

  constructor(private elRef:ElementRef, private renderer: Renderer2) { 
    this.renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if(!this.isTrue){
        this.backgroundColor = this.defaultColor
        this.color = "black"
      }else{
        this.backgroundColor = this.clickedColor
        this.color = "white"
      }
      // if(e.target !== this.elRef.nativeElement && this.backgroundColor !== this.clickedColor){
      //   console.log("IF", this.defaultColor)
      // }
    });
  }

  @HostListener('click') mouseEnter(){
    this.isTrue = true
    console.log("CLICKED", this.clickedColor)
    // this.backgroundColor = this.clickedColor
    // this.color = "white"
  }

  // @HostListener('mouseleave') mouseLeave(){
  //   this.backgroundColor = this.defaultColor
  //   this.color = "black "
  // }
  

}