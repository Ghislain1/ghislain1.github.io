import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Experience } from './experience/experience';
import { Connect } from './connect/connect';
import { Education } from './education/education';
import { Technology } from './technology/technology';
import { SideNav } from './side-nav/side-nav';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SideNav

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('ghis');
}
