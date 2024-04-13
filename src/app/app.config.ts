import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { routes } from './app.routes';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
// import { CommonModule } from '@angular/common';
const appRoutes: Routes = [
  {path: '',component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(appRoutes))
    // importProvidersFrom(FormsModule),
    // importProvidersFrom(CommonModule)
  ]
};



