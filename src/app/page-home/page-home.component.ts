import { Component } from '@angular/core';
import { JokeViewComponent } from '../page-panel/joke-view/joke-view.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [JokeViewComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

}
