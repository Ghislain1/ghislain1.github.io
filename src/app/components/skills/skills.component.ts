import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      skills: [
        { name: 'Angular', percent: 85 },
        { name: 'TypeScript', percent: 80 },
        { name: 'JavaScript', percent: 85 },
        { name: 'HTML/CSS/SCSS', percent: 90 },
      ],
    },
    {
      name: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'C# / .NET', percent: 88 },
        { name: 'Python', percent: 75 },
        { name: 'FastAPI', percent: 70 },
        { name: 'Django', percent: 65 },
      ],
    },
    {
      name: 'Tools & Others',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', percent: 85 },
        { name: 'RxJS', percent: 75 },
        { name: 'SQL/ORM', percent: 70 },
        { name: 'REST APIs', percent: 85 },
      ],
    },
  ];

  devIcons = [
    { icon: 'fab fa-python', label: 'Python' },
    { icon: 'fab fa-angular', label: 'Angular' },
    { icon: 'fab fa-js-square', label: 'JavaScript' },
    { icon: 'fab fa-node-js', label: 'Node.js' },
    { icon: 'fab fa-sass', label: 'Sass' },
    { icon: 'fab fa-git-alt', label: 'Git' },
    { icon: 'fas fa-database', label: 'Database' },
    { icon: 'fas fa-cloud', label: 'Cloud' },
  ];
}
