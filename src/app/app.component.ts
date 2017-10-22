import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  course: String;
  constructor() {
  }
  ngOnInit() {
    this.course = 'Angular2';
  }


}
