import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  name : string = 'Eva Gina';
  idade : number = 33;
  profissao = 'Dama da Noite';
  hobbies = ['Mamar geladinho de nervo quente','Jogar GTA 10']

  carro = {
    nome: "Chevette",
    cor: "Preto",
    ano: "2009"
  }

  constructor(){}

  ngOnInit(): void {}
}
