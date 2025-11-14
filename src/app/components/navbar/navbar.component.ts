import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  activeSection: string = 'home';

  private sections: string[] = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  ngOnInit(): void {
    this.onScroll();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.pageYOffset + 100; // Offset for navbar height

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = this.sections[i];
          break;
        }
      }
    }

    // Handle top of page
    if (window.pageYOffset < 100) {
      this.activeSection = 'home';
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
