import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeDataService } from './services/resume-data.service';
import { Experience, Education, Project } from './models/resume.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  private resumeDataService = inject(ResumeDataService);

  // Personal Information
  name: string = '';
  title: string = '';
  email: string = '';
  phone: string = '';
  location: string = '';
  nationality: string = '';
  linkedin: string = '';
  github: string = '';

  // Profile Summary
  profile: string = '';

  // Skills
  skills: string[] = [];

  // Experience
  experiences: Experience[] = [];

  // Education
  education!: Education;

  // Projects
  projects: Project[] = [];

  ngOnInit(): void {
    // Initialize data from service
    const personalInfo = this.resumeDataService.getPersonalInfo();
    this.name = personalInfo.name;
    this.title = personalInfo.title;
    this.email = personalInfo.email;
    this.phone = personalInfo.phone;
    this.location = personalInfo.location;
    this.nationality = personalInfo.nationality;
    this.linkedin = personalInfo.linkedin;
    this.github = personalInfo.github;

    this.profile = this.resumeDataService.getProfile();
    this.skills = this.resumeDataService.getSkills();
    this.experiences = this.resumeDataService.getExperiences();
    this.education = this.resumeDataService.getEducation();
    this.projects = this.resumeDataService.getProjects();
  }

  ngAfterViewInit(): void {
    // Setup Intersection Observer for fade-in animations
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));
  }
}
