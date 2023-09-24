import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './students-list/student/student.component';

@NgModule({
  declarations: [AppComponent, StudentsListComponent, StudentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
