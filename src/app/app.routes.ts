import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },

  {
    path: 'landing',
    loadComponent: () =>
      import('./components/landing/landing.component')
        .then(m => m.LandingComponent)
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component')
        .then(m => m.HomeComponent)
  },
   {
    path: 'project',
    loadComponent: () =>
      import('./components/projects/projects.component')
        .then(m => m.ProjectsComponent)
  },

  {
    path: '**',
    redirectTo: 'landing'
  }

];