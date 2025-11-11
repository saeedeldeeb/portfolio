import { Component, Input } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  graduationProject: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() education: Education | null = null;
}
