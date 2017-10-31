
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { FilterListPipe } from './shared/filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent,
    FilterListPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
