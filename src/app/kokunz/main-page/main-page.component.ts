import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes : Personaje[] = [
    {
      nombre:'kokun',
      poder:11000
    },
    {
      nombre: 'Vegeta',
      poder:8000
    },
    {
      nombre: 'Gohan',
      poder:12000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
