import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentName;
  list = [
    {
      name: 'Bandi',
      email: 'bandi@gmail.com'
    }, {
      name: 'Nagesh',
      email: 'nagesh@gmail.com'
    }, {
      name: 'srini',
      email: 'srini@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getName(data) {
    this.studentName = data;
  }

}
