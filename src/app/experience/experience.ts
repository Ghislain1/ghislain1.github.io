import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var M: any; // Materialize CSS

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class Experience implements OnInit, AfterViewInit {
  experiences = [
    {
      position: 'Software Developer',
      company: 'Rosenxt',
      duration: 'Jan 2022 - Present',
      description: 'Architect and develop new capabilities for autonomous robotics, subsea perception, and underwater structure inspection'
    },
    {
      position: 'Software Developer',
      company: 'Rosen Group',
      duration: 'Oct 2020 - Dec 2021',
      description: 'Write and maintain high-quality, efficient, and scalable code using modern C# and Python'
    },
    {
      position: 'Junior Developer',
      company: 'Tecan AG',
      duration: 'Jun 2018 - Sept 2020',
      description: 'Contributed to front-end UI using WPF and Angular.'
    }
  ];

  ngOnInit() {
    // Initialization code if needed
  }

  ngAfterViewInit() {
    // Initialize Materialize components (if using collapsible or other JS components)
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }
}