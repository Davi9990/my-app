import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {
  show : boolean =  false;
  
  constructor(){}

  ngOnInit(): void {}

  showMessage(): void{
    this.show = !this.show;
    /*
    setTimeout(() => {
      this.show = false;
    }, 3000); // Troca o valor booleano depois de um delay
    */
  }
}
