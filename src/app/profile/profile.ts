import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class Profile {

  @Input() name = 'Ghislain Zeleu';
  @Input() title = 'Software Developer';
  @Input() profileImage = 'img/ghis.jpg';
  @Input() bio = 'Passionate Software Developer with expertise in Angular, TypeScript, backend APIs, and cloud computing.';
  @Input() skills: string[] = ['Angular', 'TypeScript', 'Node.js', 'REST APIs', 'C#/.NET', 'WPF', 'Python', 'Scikit-learn', 'Azure', 'HTML5', 'CSS3', 'Sass', 'Git', 'Docker'];
  @Input() socialLinks: { icon: string; url: string }[] = [
    { icon: 'github', url: 'https://github.com/ghislain1' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/ghislain1' },
    { icon: 'twitter', url: 'https://twitter.com/ghislain1' }
  ];
}
