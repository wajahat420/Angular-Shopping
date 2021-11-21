import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() clicked:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value:string){
    this.clicked.emit(value)
  }

}
