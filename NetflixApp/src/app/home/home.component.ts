import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myForm')  myForm: NgForm;
  
  defaultCourse = 'Html';
  username = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm);
  }

  
  setUsername(){

    this.myForm.setValue(
      {
        course: '',
        userDetail : {
          email: "kamarali.dukandar@gmail.com",
          username: "s"
        }
      }
    )
    
  } 
}
