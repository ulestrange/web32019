import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './core/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './core/register/register.component';
import { environment } from 'src/environments/environment';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseRowComponent } from './course/course-row/course-row.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseComponent } from './course/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    HomeComponent,
     NotFoundComponent,
     LoginComponent,
     RegisterComponent,
     CourseListComponent,
     CourseRowComponent,
     CourseDetailsComponent,
     EditCourseComponent,
     AddCourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ EditCourseComponent ]  // needed because the component is not included in a template
})
export class AppModule { }
