import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  }

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.submitted = true;
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;

    this.myForm.reset();
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
