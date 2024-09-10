import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Thomas Turbando"

  userData ={
    email: 'ThomasPinto@gmail.com',
    funcao: 'ADM',
  };

  title = 'my-app';
}
