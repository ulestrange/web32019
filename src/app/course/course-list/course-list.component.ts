import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../model/course';
import { CourseDataService } from 'src/app/services/course-data.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courseList: Course[];



  currentCourse: Course;

  constructor(private courseDataService: CourseDataService) {
  }


  ngOnInit() {

    this.courseDataService.getCourses().subscribe({
      next: (value: Course[]) => {
        this.courseList = value;
      },
      complete: () => { console.log('all done'); }
    });
  }


  clicked(course: Course): void {
    this.currentCourse = course;

  }

  isSelected(course: Course): boolean {
    if (!course || !this.currentCourse) {
      return false;
    }
    return course.name === this.currentCourse.name;
  }



}