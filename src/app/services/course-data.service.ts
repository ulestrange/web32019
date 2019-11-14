import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  courseCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;
  private courseDoc: AngularFirestoreDocument;

  constructor(private afs: AngularFirestore) {
    this.courseCollection = afs.collection<Course>('courses');
  }

  getCourses(): Observable<Course[]> {
   
    this.courses =
      this.courseCollection.snapshotChanges().pipe(
        map(actions => {
          return (actions.map(a => {
          
            return ({ id: a.payload.doc.id, ...a.payload.doc.data() } as Course)
          }
          ))
        }));

    return this.courses;
  }



  addCourse(course: Course) {
    this.courseCollection.add({ ...course });
  }

  updateCourse(id: string, course: Course) {
    console.log("changing ", course);
    this.courseDoc = this.afs.doc<Course>('courses/' + id);
    this.courseDoc.update(course);
  }

}
