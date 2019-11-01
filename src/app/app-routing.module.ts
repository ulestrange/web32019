import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'Home', component: HomeComponent},
  // {path: 'About', redirectTo: '/Home'},
  // {path: 'form1', component: Form1Component},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'ListPeople', component: ListPeopleComponent},
  // {path: 'person/:id', component: PersonDetailsComponent},
  // {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  // {path: 'testRoute', component: ShowRouteInfoComponent },
  // {path: 'testRoute/:user', component: ShowRouteInfoComponent },
  // {path: 'testRoute/:user/:id/:mess', component: ShowRouteInfoComponent },
 // {path: '**', component: NotFoundComponent, pathMatch: 'full'} // this needs to be last

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
