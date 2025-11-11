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
      description: 'Buy now, Pay later - financing solution (BNPL), Worked on multiple services in a microservice architecture with .Net Aspire tool and K8s.',
      technologies: 'C# - .Net Core - Docker - k8s - Mapster - PostgreSQL - RabbitMQ - Redis - AliBaba Bucket - .Net Aspire - Seq - Azure DevOps',
      company: 'Probuy',
      links: [
        { label: 'Website', url: 'https://probuy.me/' }
      ]
    },
    {
      name: 'Tracking Service',
      description: 'Real-time GPS tracking service for school buses utilizing WebSocket connections, message queues for reliable data processing, and Redis for fast location caching. Supports concurrent tracking of multiple vehicles with low latency.',
      technologies: 'C# - .Net Core - Docker - RabbitMQ - Redis - Multithreading - HTTP Client - Hosted Service',
      links: [
        { label: 'GitHub', url: 'https://github.com/saeedeldeeb/tracking-service' }
      ]
    },
    {
      name: 'Off Duty School Bus',
      description: 'Comprehensive school bus rental platform enabling parents to book transportation services. Features multi-language support, role-based permissions, integrated payment processing via Stripe, and event-driven architecture using RabbitMQ for scalability.',
      technologies: 'C# - .Net Core - Docker - Clean Arch - Multilangual Entity - Permissions Based - AutoMapper - Stripe - RabbitMQ',
      links: [
        { label: 'GitHub', url: 'https://github.com/saeedeldeeb/the-off-duty-school-bus' }
      ]
    },
    {
      name: 'Wheel Wander',
      description: 'Wheel Wander is a bike rental system developed using C# and JavaScript. The system allows users to rent bikes from various stations and return them when they\'re done. The system is managed by an admin who can add, update, and view details of System.',
      technologies: 'C# - JS - MVC Razor - UnitOfWork - Repository Pattern - Identity(Cookie, JWT) - Twilio SMS',
      links: [
        { label: 'GitHub', url: 'https://github.com/saeedeldeeb/wheel-wander-.net' }
      ]
    },
    {
      name: 'Ibn Khaldun International Schools',
      description: 'A large multi service educational platform for Ibn Khaldoun schools in Saudi Arabia',
      technologies: 'PHP - Golang - RabbitMQ - PostGIS - Docker - integeration Test - Load Test(k6)',
      company: 'Our education for investment',
      links: [
        { label: 'Website', url: 'https://ouredu.net/en/' }
      ]
    },
    {
      name: 'topqdrat',
      description: 'E-learning platform for Saudi Arabian students preparing for standardized tests. Integrated local payment gateways (Moyasar, Hyperpay) and Apple in-app purchases to provide seamless payment experience across web and mobile platforms.',
      technologies: 'Implemented some local payment Gateways in Saudi Arabia and Apple in-app purchase',
      company: 'Kite Agency',
      links: [
        { label: 'Website', url: 'https://topqdrat.com/ar' }
      ]
    },
    {
      name: 'sadaqahti',
      description: 'Digital charity platform connecting donors with charitable causes. Built with Laravel RESTful API supporting multiple languages (Arabic/English) and sophisticated role-based permission system for managing donations, campaigns, and beneficiaries.',
      technologies: 'Laravel Restful API, Multi-language, Roles and permissions',
      company: 'Majal',
      links: [
        { label: 'Live Demo', url: 'https://sadaqahti.com/en/' }
      ]
    },
    {
      name: 'Ahadith API',
      description: 'Open-source RESTful API providing access to authentic Islamic Hadith collections. Built with Express.js and SQLite for lightweight deployment, featuring efficient querying, categorization by books and narrators, and comprehensive documentation for developers.',
      technologies: 'NodeJS (Express), SQLite',
      links: [
        { label: 'GitHub', url: 'https://github.com/saeedeldeeb/hadithApi' }
      ]
    },
    {
      name: '302Labs',
      description: 'Backend API for coworking space management system handling member registrations, workspace bookings, and resource allocation. Built with Express.js and MongoDB for flexible data management and scalability.',
      technologies: 'NodeJS (Express), mongodb',
      company: 'Fahmawy',
      links: [
        { label: 'GitHub', url: 'https://github.com/saeedeldeeb/CoworkingSpace-Api' },
        { label: 'App Screens', url: 'https://drive.google.com/file/d/18fimYHAffXmD6jWUdUQbGle5XpStgw0u/view' }
      ]
    },
    {
      name: 'Hathaly',
      description: 'Android e-commerce delivery application integrated with WooCommerce backend. Implements MVP architecture pattern with Retrofit for network calls, providing customers with seamless product browsing, ordering, and real-time delivery tracking.',
      technologies: 'WooCommerce (Server Side), Retrofit, MVP',
      company: 'Fahmawy',
      links: [
        { label: 'Video', url: 'https://www.youtube.com/watch?v=f96Tq6Z365o' }
      ]
    },
    {
      name: 'CoProfile',
      description: 'Full-stack company portfolio solution featuring an Android app with MVVM architecture and a Laravel RESTful API backend. Enables companies to showcase their services, projects, and team members with dynamic content management.',
      technologies: 'Retrofit, MVVM',
      company: 'Fahmawy',
      links: [
        { label: 'GitHub', url: 'https://github.com/saeedeldeeb/CompanyProfile' }
      ]
    },
    {
      name: 'Rakna System',
      description: 'Graduation project: Peer-to-peer parking marketplace connecting car owners with garage owners. Dual mobile applications with real-time location services using Mapbox, Firebase notifications, and PHP backend for booking management and payment processing.',
      technologies: 'Native PHP, MySQL, Mapbox, Volley, Firebase',
      links: [
        { label: 'Car Owner Video', url: 'https://www.youtube.com/watch?v=Mq_cRU_SezE' },
        { label: 'Car Owner GitHub', url: 'https://github.com/Islam2ela4/Rakna_Car_Owner_App' },
        { label: 'Garage Owner Video', url: 'https://www.youtube.com/watch?v=gmrvk2IWya8' },
        { label: 'Garage Owner GitHub', url: 'https://github.com/Islam2ela4/Rakna_Garage_Owner_App'}
      ]
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
