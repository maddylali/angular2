import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student;
  @Output() sendName = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.sendName.emit(this.student.name);
  }

}
