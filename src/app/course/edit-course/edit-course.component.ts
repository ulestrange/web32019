import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


import { Course } from '../../model/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input() course: Course;

  mainForm: FormGroup;
  closeResult: string;
  activeModal: NgbActiveModal;


  get categories() {
    return this.mainForm.get('categories') as FormArray;
  }
  constructor(private fb: FormBuilder, activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }




  addCategory() {
    this.categories.push(this.fb.control(''));
  }

 


  ngOnInit() {

    this.mainForm = this.fb.group({
      name: [this.course.name],
      price: [this.course.price],
      description: [this.course.description],
      categories: this.fb.array(this.course.categories),
      imageURL: [this.course.imageURL]
    });
  }

  // this is a hook - when coruse which is an input to the component changes
  // this will be called.

  ngOnChanges() {
    console.log('On Changes:', this.course);


    if (this.mainForm) {
      this.mainForm.patchValue({

        name: this.course.name, 
        price: this.course.price,
        description: this.course.description,
      });

     // this.swapInterestValues(this.course.interests);

    }
  }

  onSubmit() {
    this.activeModal.close(this.mainForm.value);

  }

  // swapInterestValues takes an array of strings and puts them into
  // the existing formArray interests.
  // could be much simplier - need to tidy

  // private swapInterestValues(inputInterestArray) {
  //   if (inputInterestArray.length === this.interests.length) {
  //     // same length - just swap values
  //     this.interests.patchValue(inputInterestArray);
  //   } else if (inputInterestArray.length < this.interests.length) {
  //     // less interests comming in then are there already
  //     this.interests.patchValue(inputInterestArray);
  //     const length = this.interests.length;
  //     for (let i = length; i >= inputInterestArray.length; i--) {
  //       this.interests.removeAt(i);
  //       console.log(inputInterestArray);
  //     }
  //   } else {
  //     // more interests comming in that are there already
  //     const length = this.interests.length;
  //     const newlength = inputInterestArray.length;
  //     const firstSetofValues = inputInterestArray.slice(0, length)
  //     const extraInterests = inputInterestArray.slice(length, newlength);
  //     // replace the existing interests
  //     this.interests.patchValue(firstSetofValues);


  //     // add the new interests
  //     extraInterests.forEach((interest) => { this.interests.push(this.fb.control(interest)); });

  //     console.log(inputInterestArray);

  //   }


  // }


}

