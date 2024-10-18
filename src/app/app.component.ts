import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./other/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  /*
  * 
  * VARIABLES GLOBALES
  * 
  */
  APP_ENV: string = "DEV"; // PROD ou DEV
  API_URL: string = "";

  ngOnInit(): void {
    if (this.APP_ENV === 'DEV') {
      this.API_URL = "https://api.chucknorris.io/jokes/";
    } else if (this.APP_ENV === 'https://api.chucknorris.io/jokes/') {
      this.API_URL = "https://api.chucknorris.io/jokes/";
    } else {
      this.API_URL = 'apiUrl';
    }
  }

  /*
  * 
  * FONCTIONS GLOBALES
  * 
  */
  createCors(): void  {

  }

  


}
