import { Component } from '@angular/core';
import { Award } from '../../models/resume.model';

@Component({
  selector: 'app-awards',
  standalone: true,
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
})
export class AwardsComponent {
  awards: Award[] = [
    { 
      title: 'Design Patterns in C# and .NET - Pluralsight', 
      issuer: 'Pluralsight',
      icon: 'fas fa-certificate',
      year: '2023'
    },
    { 
      title: 'Build a Real-world App with ASP.NET Core and Angular 2 (4+) - Udemy', 
      issuer: 'Udemy',
      icon: 'fas fa-award',
      year: '2022'
    },
    { 
      title: 'Jetzt mit Bootstrap 4 starten - mit Praxisprojekt! - Udemy', 
      issuer: 'Udemy',
      icon: 'fas fa-medal',
      year: '2021'
    },
  ];
}
