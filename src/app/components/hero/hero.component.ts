import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() email: string = '';
  @Input() github: string = '';
  @Input() linkedin: string = '';
}
