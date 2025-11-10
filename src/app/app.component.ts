import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  // Personal Information
  name = 'Saeed Eldeeb';
  title = 'Backend Developer';
  email = 'saeedeldeeb1@gmail.com';
  phone = '+201069913208';
  location = 'Nasr City, Cairo, Egypt';
  birthdate = '1997-06-30';
  nationality = 'Egyptian';
  linkedin = 'linkedin.com/in/saeed-eldeeb';
  github = 'github.com/saeedeldeeb';

  // Profile Summary
  profile = 'Software Engineer with multiple years of experience in different programming languages, proven track record of delivering successful projects on time and to specification in various business domains with a high ownership. Strong communication skills, skilled in working within teams and working in agile environments.';

  // Skills
  skills = [
    '.Net Core (C#, EF, LINQ)',
    'Clean Architecture',
    'Cloud & Kubernetes',
    'PHP & Laravel',
    'Testing (Unit, Integration, Load Testing with K6)',
    'Golang',
    'DBMS (PostgreSQL, MySQL, SQL Server)',
    'Java',
    'Front-End (JavaScript, HTML & CSS, Node.js)',
    'Tools (Redis, RabbitMQ, Docker, Git, Linux)'
  ];

  // Experience
  experiences = [
    {
      position: 'Software Developer',
      company: 'Probuy',
      location: 'Riyadh (Remote)',
      period: '11/2024 – Present',
      achievements: [
        'Migrated a Windows-based Azure service to Linux on Kubernetes, reducing hosting costs by approximately 35–40%.',
        'Refactored all system services with new integration and unit tests to ensure maintainability and prevent regressions.',
        'Built CI pipelines to enforce code quality and testing before merges, reducing production issues.',
        'Developed core services including a centralized MediaService and AuditTrailService to improve system structure and traceability.',
        'Contributed to DevOps by adding monitoring, logging, and improving debugging visibility.',
        'Optimized Git flow strategy to accelerate releases and improve collaboration.',
        'Enhanced team communication by integrating system alerts with Microsoft Teams for faster responses.'
      ]
    },
    {
      position: 'Back End Developer',
      company: 'Our education for investment',
      location: 'Cairo',
      period: '12/2022 – 12/2024',
      achievements: [
        'Worked on a large educational platform for Ibn Khaldoun schools in Saudi Arabia.',
        'Collaborated with the team to develop various services to automate the educational process within the school.',
        'Conduct code reviews to ensure quality output.',
        'Optimized application for speed and scalability.',
        'Designed and implemented with a dedicated team transportation service.',
        'Solved some technical and design-related issues concerning the database, code quality using unit tests, and other improvements.'
      ]
    },
    {
      position: 'Back End Developer',
      company: 'Kite Agency',
      location: 'Cairo',
      period: '09/2021 – 12/2022',
      achievements: [
        'Worked on E-Learning service (topqdrat)',
        'Implemented some local payment Gateways in Saudi Arabia and Apple in-app purchase.'
      ]
    },
    {
      position: 'Back End Developer',
      company: 'Qowwa Technologies',
      location: 'Alexandria',
      period: '01/2021 – 09/2021',
      achievements: [
        'Worked on Leads Management Service using Laravel.',
        'Created Ahadith API service for public consumption and other backend services with Nodejs.'
      ]
    },
    {
      position: 'Android Developer',
      company: 'Fahmawy for Development',
      location: 'Cairo',
      period: '09/2019 – 12/2020',
      achievements: [
        'As a software house, we worked on & supported Android e-commerce app with WooCommerce APIs.',
        'Built a company portfolio app using Laravel service that I built.'
      ]
    }
  ];

  // Education
  education = {
    degree: 'B.S.E. in Computer Science Engineering',
    institution: 'Faculty of Computer and Information, Menoufia University',
    period: '2015 – 2019',
    location: 'Menoufia',
    grade: 'Good',
    graduationProject: 'Excellent "A"'
  };

  // Projects
  projects = [
    {
      name: 'ProSplit',
      description: 'Buy now, Pay later - financing solution (BNPL)',
      technologies: 'Worked on multiple services in a microservice architecture with .Net Aspire tool and K8s.'
    },
    {
      name: 'Tracking Service',
      description: 'Vehicles Tracking service for Off Duty School Bus Project',
      technologies: 'C# - .Net Core - Docker - RabbitMQ - Redis - Multithreading - HTTP Client - Hosted Service',
      link: 'GitRepo'
    },
    {
      name: 'Off Duty School Bus',
      description: 'School bus rental system',
      technologies: 'C# - .Net Core - Docker - Clean Arch - Multilangual Entity - Permissions Based - AutoMapper - Stripe - RabbitMQ',
      link: 'GitRepo'
    },
    {
      name: 'Wheel Wander',
      description: 'Bike rental system',
      technologies: 'C# - JS - MVC Razor - UnitOfWork - Repository Pattern - Identity(Cookie, JWT) - Twilio SMS',
      link: 'GitRepo'
    },
    {
      name: 'Ibn Khaldun International Schools',
      description: 'A large multi service educational platform for Ibn Khaldoun schools in Saudi Arabia',
      technologies: 'PHP - Golang - RabbitMQ - PostGIS - Docker - integeration Test - Load Test(k6)',
      company: 'Our education for investment'
    },
    {
      name: 'topqdrat',
      description: 'E-Learning service',
      technologies: 'Implemented some local payment Gateways in Saudi Arabia and Apple in-app purchase',
      company: 'Kite Agency'
    },
    {
      name: 'sadaqahti',
      description: 'A charity website',
      technologies: 'Laravel Restful API, Multi-language, Roles and permissions',
      company: 'Majal',
      link: 'Live demo'
    },
    {
      name: 'Ahadith API',
      description: 'RESTful API powered by Express framework and SQLite',
      link: 'GitRepo'
    },
    {
      name: '302Labs',
      description: 'Restful API for 302labs coworking space (Local web App)',
      technologies: 'NodeJS (Express), mongodb',
      company: 'Fahmawy',
      link: 'GitRepo | App Screens'
    },
    {
      name: 'Hathaly',
      description: 'A delivery Android App',
      technologies: 'WooCommerce (Server Side), Retrofit, MVP',
      company: 'Fahmawy',
      link: 'Play Store Link'
    },
    {
      name: 'CoProfile',
      description: 'Android application & Laravel api for companies\' services and projects',
      technologies: 'Retrofit, MVVM',
      company: 'Fahmawy',
      link: 'GitHub repo'
    },
    {
      name: 'Rakna System',
      description: 'Graduation Project - A peer to peer parking system',
      technologies: 'Native PHP, MySQL, Mapbox, Volley, Firebase',
      note: '1st App (Car owner) & (Garage owner)',
      link: 'video link | GitHub'
    }
  ];

  ngOnInit(): void {
    // Smooth scroll behavior is handled by CSS
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

  onSubmitContact(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Log form data (in production, you would send this to a backend)
    console.log('Contact form submitted:', data);

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');

    // Reset form
    form.reset();
  }
}
