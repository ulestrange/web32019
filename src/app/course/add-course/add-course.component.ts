import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/course';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { CourseDataService } from 'src/app/services/course-data.service';

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
  constructor(private fb: FormBuilder, private courseDataService: CourseDataService) {
    
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

  onSubmit()

  {
    this.courseDataService.addCourse(this.mainForm.value);
    
  }


}
