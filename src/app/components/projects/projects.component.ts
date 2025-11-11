import { Component, Input } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  name: string;
  description: string;
  technologies?: string;
  company?: string;
  links?: ProjectLink[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
