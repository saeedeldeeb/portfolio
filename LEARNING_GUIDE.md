# Angular Learning Guide - MyResume Project

This guide documents all the Angular CLI commands and concepts as we build your resume project together.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Angular CLI Commands](#angular-cli-commands)
3. [Project Structure](#project-structure)
4. [Concepts Learned](#concepts-learned)

---

## Getting Started

### Prerequisites
- Node.js installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Your Current Setup
- Angular CLI: 17.3.17
- Node: 20.18.1
- Package Manager: npm 11.5.1

---

## Angular CLI Commands

### 1. Creating a New Project

```bash
ng new MyResume --routing --style=css --skip-git
```

**What this does:**
- `ng new MyResume` - Creates a new Angular project named "MyResume"
- `--routing` - Adds Angular Router for navigation between pages
- `--style=css` - Uses CSS for styling (alternatives: scss, sass, less)
- `--skip-git` - Skips git repository initialization

**What happens:**
- Creates project folder structure
- Installs all dependencies (this takes a few minutes)
- Sets up configuration files
- Creates a starter application

### 2. Running the Development Server

```bash
ng serve
```

**What this does:**
- Compiles TypeScript to JavaScript
- Starts a local development server (default: http://localhost:4200)
- Watches for file changes and automatically reloads the browser
- Shows compilation errors in the terminal

**Useful flags:**
- `ng serve --open` or `ng serve -o` - Opens browser automatically
- `ng serve --port 4300` - Run on different port

### 3. Uninstalling Packages

```bash
npm uninstall @angular/router
```

**What this does:**
- Removes a package from node_modules folder
- Updates package.json to remove the dependency
- We used this to remove routing since we don't need it for a simple resume

---

## Project Structure

After running `ng new`, here's what was created:

```
MyResume/
├── src/                          # Source code for your application
│   ├── app/                      # Your application components
│   │   ├── app.component.ts      # Main component TypeScript code
│   │   ├── app.component.html    # Main component template (HTML)
│   │   ├── app.component.css     # Main component styles
│   │   ├── app.component.spec.ts # Unit tests for main component
│   │   └── app.config.ts         # Application configuration
│   ├── assets/                   # Images, fonts, and other static files
│   ├── index.html                # Main HTML file (entry point)
│   ├── main.ts                   # Bootstrap file that starts the app
│   ├── styles.css                # Global styles for entire app
│   └── favicon.ico               # Website icon
│
├── node_modules/                 # All installed dependencies (don't edit!)
├── .vscode/                      # VSCode settings and configurations
├── angular.json                  # Angular CLI configuration
├── package.json                  # NPM dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

### Key Files Explained

**src/main.ts**
- The entry point of your application
- Bootstraps (starts) the Angular app

**src/index.html**
- The single HTML page for your SPA (Single Page Application)
- Contains `<app-root>` where Angular injects your app

**src/app/app.component.ts**
- The root component of your application
- Every Angular app has at least one component
- Components = building blocks of Angular apps

**src/app/app.component.html**
- The template (HTML) for the main component
- This is what users see on the page

**src/app/app.component.css**
- Styles specific to this component
- CSS written here only applies to this component (component-scoped styles)

**angular.json**
- Configuration for Angular CLI
- Defines build options, asset paths, styles, etc.

**package.json**
- Lists all npm packages your project depends on
- Contains scripts to run, build, and test your app

**tsconfig.json**
- TypeScript compiler configuration
- Angular uses TypeScript (JavaScript with types)

---

## Concepts Learned

### What is Angular?
- A TypeScript-based web application framework
- Developed and maintained by Google
- Used for building Single Page Applications (SPAs)

### What is Angular CLI?
- Command Line Interface for Angular
- Helps you create, build, test, and deploy Angular apps
- Automates repetitive tasks

### Components
- The building blocks of Angular applications
- Each component has three parts:
  1. **TypeScript file (.ts)** - The logic/code
  2. **HTML file (.html)** - The template/structure
  3. **CSS file (.css)** - The styles
- Components are reusable and self-contained

### Angular Router (When You Need It)
- Used for navigation between different pages/views
- Good for multi-page applications
- Not needed for simple single-page apps like our resume
- Can be added later if needed

### Hot Module Replacement (HMR)
- When you run `ng serve`, Angular watches your files
- When you save a file, the browser automatically refreshes
- You see changes instantly without manual refresh
- Speeds up development significantly

### Angular 17+ Template Syntax
- The `@` symbol is reserved for control flow (like `@if`, `@for`)
- To use `@` in text (like email addresses), use HTML entity `&#64;`
- Example: `email&#64;example.com` renders as `email@example.com`

### Data Binding
Data binding connects your component's TypeScript code with the HTML template.

**Interpolation `{{ }}`**
- Displays component properties in the template
- One-way binding (component → template)
- Example: `{{ name }}` displays the value of the `name` property
- Example: `{{ email }}` displays saeedeldeeb1@gmail.com

**Property Binding `[property]`**
- Binds a component property to an HTML element property
- Example: `[href]="'https://' + linkedin"` creates a dynamic link
- The quotes inside allow you to concatenate strings

**Control Flow: @for**
- Angular 17+ introduces new control flow syntax
- `@for (item of array; track item)` loops through arrays
- Example: Display all skills from the skills array
```html
@for (skill of skills; track skill) {
  <li>{{ skill }}</li>
}
```
- The `track` keyword helps Angular optimize rendering

### Component Properties
- Properties defined in the component class can be used in the template
- **Simple properties**: `name = 'Saeed Eldeeb'`
- **Arrays**: `skills = ['C#', 'PHP', 'Golang']`
- **Objects**: `experiences = [{ position: '...', company: '...' }]`
- Access object properties with dot notation: `{{ exp.position }}`

### Bundle Size
- Angular compiles your code into JavaScript bundles
- Smaller bundles = faster loading websites
- After removing routing: 4.53 kB
- With real resume data: 8.85 kB
- Production builds are even smaller (optimized and minified)

---

## What We Built

### Simple Resume Structure
We created a single-page resume with sections:
- **Header** - Name and title
- **About** - Brief introduction
- **Skills** - List of skills
- **Experience** - Job history
- **Contact** - Contact information

### Why We Removed Routing
- Our resume is a single page, so we don't need multiple routes
- Simpler code = easier to learn and maintain
- Smaller bundle size = faster loading
- We can always add it later if needed

---

## Next Steps

1. ✅ Create the project
2. ✅ Remove unnecessary routing
3. ✅ Set up basic resume structure
4. ✅ Learn about data binding and displaying dynamic content
5. ⏭️ Create additional components (breaking down the resume)
6. ⏭️ Add TypeScript interfaces for type safety
7. ⏭️ Learn about event binding and interactivity

---

*This guide will be updated as we progress through the learning journey!*
