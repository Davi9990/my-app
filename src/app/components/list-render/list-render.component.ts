import { Component, OnInit } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {

  youtubers: Animal[] = [
    { name: 'John Doe', img: 'https://via.placeholder.com/150', sound: 'GOOD'},
    { name: 'Jane Smith', img: 'https://via.placeholder.com/150', sound: 'MIDDLE'},
    { name: 'Mike Johnson', img: 'https://via.placeholder.com/150 ', sound: 'PEAK'}
  ]

  youtuberDetails = ''

  youtuber: Animal = {
    name: 'Teste Corno',
    img: 'Alguma Porra',
    sound: 'MIDDLE'
  }

  constructor(){}

  ngOnInit(): void {

  }

  showSom(youtuber: Animal){
    this.youtuberDetails = 'O corno ${youtuber.name} tem o som do seu canal nivel ${youtuber.sound}';
  }
}
