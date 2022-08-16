import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  myReactiveForm!: FormGroup ;
  @ViewChild('myForm')  myForm!: NgForm;
  defaultGender = 'Male';
  genders =[
    {
      id:1, value:'Male'
    },
    {
      id:2, value:'Female'
    }
  ];
  defaultCourse = 'Html';
  username = "";
  submitted = false;
  formData = {
    username: '',
    email: '',
    course: '',
    gender: '' 
  }
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup(
      {
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'course' : new FormControl('Angular'),
        'gender': new FormControl('Male')
      }
    );
  }

  onSubmit(){
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    this.submitted = true;
    this.formData.username = this.myReactiveForm.value.username;
    this.formData.email = this.myReactiveForm.value.email;
    this.formData.course = this.myReactiveForm.value.course;
    this.formData.gender = this.myReactiveForm.value.gender;

    this.myReactiveForm.reset();
  }

  
  setUsername(){
    //console.log('setUsername called');
    this.myForm.setValue(
      {
        course: '',
        userDetail : {
          email: "kamarali.dukandar@gmail.com",
          username: "Kamarali"
        },
        gender: 'Male'
      }
    )
    
  } 
}
