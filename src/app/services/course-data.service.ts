import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import {Course} from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  courseCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;

  constructor(private afs: AngularFirestore) {
    this.courseCollection = afs.collection<Course>('courses');
    this.addCourseToDatabase({name: 'Angular'});
  }

   getCourses(): Observable<Course[]> {
    this.courses = this.courseCollection.valueChanges();

    this.courses.subscribe(data => {
      console.log('Data', JSON.stringify(data));
    })
    return this.courses;

  }

  addCourseToDatabase(course: Course){
    this.courseCollection.add((course));
  }

}
