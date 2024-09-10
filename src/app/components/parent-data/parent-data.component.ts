import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {

  @Input() name: string = '';
  @Input() userData!: {email:string,funcao:string}

  constructor(){}

  ngOnInit(): void {}

}
