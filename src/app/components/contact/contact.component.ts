import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() location: string = '';
  @Output() contactSubmit = new EventEmitter<Event>();

  onSubmit(event: Event) {
    this.contactSubmit.emit(event);
  }
}
