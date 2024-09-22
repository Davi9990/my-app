import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-enitter',
  templateUrl: './enitter.component.html',
  styleUrl: './enitter.component.css'
})
export class EnitterComponent implements OnInit {

  myNumber : number = 0;

  constructor(){}

  ngOnInit(): void {
    
  }

  onChangerNumber(){
    this.myNumber = Math.floor(Math.random() * 100) + 1;  // Gera um numero aleatorio até 100
  }
}
