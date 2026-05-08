import { Component } from '@angular/core';
import { Experience } from '../../models/resume.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Developer',
      company: 'Rosenxt',
      companyUrl: 'https://rosenxt.com',
      description:
        'I work as a Software Developer at Rosenxt, specializing in building applications using C#/.NET WPF, focusing on advanced data processing techniques such as Eddy Current testing and Phased Array data analysis for nondestructive testing solutions.',
      period: 'March 2019 - Present',
      icon: 'fas fa-laptop-code'
    },
  ];
}
