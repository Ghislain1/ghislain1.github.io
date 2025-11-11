import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  public onToggleSidenav = () => {
  }

  get activeTheme(): string {
    return localStorage.getItem('theme') ?? '';
  }

  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

}
