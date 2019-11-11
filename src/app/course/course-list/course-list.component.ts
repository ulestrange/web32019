import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../model/course';
import { CourseDataService } from 'src/app/services/course-data.service';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courseList: Course[];
  closeResult: string;



  currentCourse: Course;

  constructor(private courseDataService: CourseDataService, private modalService: NgbModal) {
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

  // open the modal form, the form itself is a component
  open() {
    const modalRef = this.modalService.open(EditCourseComponent);
    modalRef.componentInstance.course = this.currentCourse;

    modalRef.result.then(
      (result) => {
        console.log("emitting", result);
        this.courseDataService.addCourseToDatabase(result);
        // this.personSubmitted.emit(result);
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    console.log("dismmis");
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}