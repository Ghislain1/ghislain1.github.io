import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  standalone: true,
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss',
})
export class InterestsComponent {
  interests = [
    {
      icon: 'fas fa-futbol',
      text: 'Outside of work, I actively play football at TSV 1895 Volxheim and cherish moments spent with my children.',
      color: '#4CAF50'
    },
    {
      icon: 'fas fa-family',
      text: 'I like to relax by spending peaceful time with my family outdoors and I spend a large amount of my free time exploring the latest technology advancements in the application development world.',
      color: '#2196F3'
    }
  ];

  hobbies = [
    { icon: 'fas fa-laptop-code', label: 'Coding' },
    { icon: 'fas fa-hiking', label: 'Hiking' },
    { icon: 'fas fa-book', label: 'Reading' },
    { icon: 'fas fa-gamepad', label: 'Gaming' },
  ];
}
