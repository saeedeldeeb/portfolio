import { Component, Input } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];
}
