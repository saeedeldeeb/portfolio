import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() profile: string = '';
  @Input() location: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() nationality: string = '';
}
