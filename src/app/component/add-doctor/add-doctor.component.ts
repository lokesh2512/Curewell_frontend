import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//declare const mymethod: any;
//import { rxjs } from 'nodemailer';


@Component({
  templateUrl: './add-doctor.component.html'
})
export class AddDoctorComponent implements OnInit {

  doctorId: number | undefined;
  doctorName: string | undefined;
  status: boolean | undefined;
  errorAddMsg: string | undefined;
  showDiv: boolean = false;
  msg: string | undefined;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  
}