import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/course';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {



  mainForm: FormGroup;

 
 get categories() {
    return this.mainForm.get('categories') as FormArray;
  }
  constructor(private fb: FormBuilder) {
    
  }




  addCategory() {
    this.categories.push(this.fb.control(''));
  }



  ngOnInit() {

    this.mainForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      categories: this.fb.array([]),
      imageURL: ['']
    });
  }

}
