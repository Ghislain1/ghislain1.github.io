import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class Education {

  educationList = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Hochschule RheinMain',
      year: '2018 - 2020',
      description: 'Specialized in software development, algorithms, and data structures.'
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Hochschule RheinMain',
      year: '2014 - 2018',
      description: 'Focused on web development, databases, and networking fundamentals.'
    },
    {
      degree: 'Intermediate Examination in Mathematics ',
      institution: 'Hochschule RheinMain',
      year: '2001 - 2007',
      description: 'Focused on mathematics, algebra, and  statistics fundamentals.'
    },
    // Add more educational entries as needed
  ];
}