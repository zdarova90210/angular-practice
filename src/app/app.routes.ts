import { Routes } from '@angular/router';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { DirectivesComponent } from "./pages/directives/directives.component";

export const routes: Routes = [
  {path: 'directives', component: DirectivesComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: ''}
];
