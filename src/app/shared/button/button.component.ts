import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() bg:string = 'blue';
  @Input() name:string = "none"
  @Input() color:string = 'white'

  constructor() { }

  ngOnInit(): void {
  }

}
