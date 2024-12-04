import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {
    Aos.init();
  }
}
