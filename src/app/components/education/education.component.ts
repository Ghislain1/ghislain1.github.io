import { Component } from '@angular/core';
import { Education } from '../../models/resume.model';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationList: Education[] = [
    {
      school: 'University of Younde 1- Cameroun',
      degree: 'DEUG of Mathematics',
      field: 'Algebra - Pure Mathematics',
      details: 'GPA: 11.23/20',
      period: 'September 2001 - September 2005',
      icon: 'fas fa-university'
    },
  ];
}
