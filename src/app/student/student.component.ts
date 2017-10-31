import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student;
  @Output() sendName = new EventEmitter();

  studentName = 'Nagesh';
  showName = true;
  amount = 16;
  amount2 = 3000;
  date = new Date();

  students = [1, 2];
  filterText;
  studentsArr = [
    {
      id: 1,
      name: 'Nagesh',
      friends: ['maddy', 'srinu'],
      show: false
    },
    {
      id: 2,
      name: 'Srinu',
      friends: ['maddy', 'Nagesh'],
      show: true
    },
    {
      id: 3,
      name: 'Ratnam',
      friends: ['Srinu', 'Nagesh'],
      show: true
    }
  ];

  constructor() { }

  sendData() {
    this.sendName.emit(this.student.name);
  }

  changeState() {
    this.showName = false;
  }

}
