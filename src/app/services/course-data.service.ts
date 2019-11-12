import { Injectable } from '@angular/core';

import { AngularFirestore, 
  AngularFirestoreDocument,
  AngularFirestoreCollection } from '@angular/fire/firestore';

import { Course, CourseID } from '../model/course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  courseCollection: AngularFirestoreCollection<Course>;
  courses: Observable<CourseID[]>;
  private courseDoc: AngularFirestoreDocument;

  constructor(private afs: AngularFirestore) {
    this.courseCollection = afs.collection<Course>('courses');
  }

  getCourses(): Observable<CourseID[]> {
   // this.courses = this.courseCollection.valueChanges();

    this.courses = this.courseCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Course;
        console.log("data: ", data);
        const id = a.payload.doc.id;
        console.log("id: ", id);
        return { id, ...data }
      }
      )));

    this.courses.subscribe(data => {
      console.log('Data', JSON.stringify(data));
    })
     return this.courses;

  }

  addCourseToDatabase(course: Course) {
    this.courseCollection.add((course));
  }

  updateCourse(id: string, course: Course) {
    console.log("changing ", course);
    this.courseDoc=this.afs.doc<Course>('courses/' +id);
    course.testChange = true;
    this.courseDoc.update(course);
  }

}
