import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit {


  @Output() changerNumber : EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  handleclick() {
    this.changerNumber.emit(Math.random()); 

  }
}
