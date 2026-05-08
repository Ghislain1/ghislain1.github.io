import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  navLinks = [
    { path: '/', fragment: 'about', label: 'About', icon: 'fas fa-user' },
    { path: '/experience', fragment: '', label: 'Experience', icon: 'fas fa-briefcase' },
    { path: '/education', fragment: '', label: 'Education', icon: 'fas fa-graduation-cap' },
    { path: '/skills', fragment: '', label: 'Skills', icon: 'fas fa-code' },
    { path: '/interests', fragment: '', label: 'Interests', icon: 'fas fa-heart' },
    { path: '/awards', fragment: '', label: 'Awards', icon: 'fas fa-trophy' },
  ];

  socialLinks = [
    {
      url: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      icon: 'fab fa-linkedin-in',
    },
    { url: 'https://github.com/Ghislain1', icon: 'fab fa-github' },
  ];
}
