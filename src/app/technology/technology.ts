import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.html',
  styleUrls: ['./technology.scss'],
})
export class Technology {

  skills = [
    "C#/.NET", 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
    'MaterializeCSS', 'Git', 'REST APIs', 'Node.js', 'RxJS',
    'Sass', 'Webpack', 'Jasmine', 'Protractor', 'Docker'
  ];
}
