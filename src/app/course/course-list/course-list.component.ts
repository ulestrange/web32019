import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course, CourseID } from '../../model/course';
import { CourseDataService } from 'src/app/services/course-data.service';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { EditCourseComponent } from '../edit-course/edit-course.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courseList: CourseID[];
  closeResult: string;



  currentCourse: CourseID;

  constructor(private courseDataService: CourseDataService, private modalService: NgbModal) {
  }


  ngOnInit() {

    this.courseDataService.getCourses().subscribe({
      next: (value: CourseID[]) => {
        this.courseList = value;
      },
      complete: () => { console.log('all done'); }
    });




  }


  clicked(course: CourseID): void {
    this.currentCourse = course;

  }

  isSelected(course: CourseID): boolean {
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
        console.log(' upating ', this.currentCourse.id);
        this.courseDataService.updateCourse(this.currentCourse.id  , result);
        this.closeResult = `Closed with: success`;
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