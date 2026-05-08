import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  name = 'Ghislain';
  surname = 'Zeleu';
  location = 'Weyroth · Bad Kreuznach, Germany';
  email = 'gzeleu@protonmail.com';
  
  socialLinks = [
    {
      url: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      icon: 'fab fa-linkedin-in',
    },
    { url: 'https://github.com/Ghislain1', icon: 'fab fa-github' },
  ];

  description = [
    {
      icon: 'fas fa-code',
      text: 'I am a versatile software developer with solid experience in C# and WPF, leveraging the .NET framework to build robust Windows desktop applications. I have a strong command of Python (proficiency), enabling me to work efficiently on backend development and automation tasks, including experience with Django for web applications.'
    },
    {
      icon: 'fas fa-paint-brush',
      text: 'On the frontend, I am skilled in Angular with solid knowledge of TypeScript and JavaScript, crafting dynamic and responsive user interfaces. My front-end skills are complemented by expertise in HTML and Sass, allowing me to build well-structured, maintainable, and visually appealing web pages.'
    },
    {
      icon: 'fas fa-rocket',
      text: 'My diverse technology stack and continual growth mindset enable me to adapt and deliver across full-stack projects, making me an asset in multidisciplinary development teams.'
    }
  ];
}
