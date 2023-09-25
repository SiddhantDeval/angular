import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './students-list/student/student.component';
import { StudentCardBodyComponent } from './students-list/student/student-card-body/student-card-body.component';
import { StudentCardHeaderComponent } from './students-list/student/student-card-header/student-card-header.component';
import { StudentFiltersComponent } from './students-list/student-filters/student-filters.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentComponent,
    StudentCardBodyComponent,
    StudentCardHeaderComponent,
    StudentFiltersComponent,
    ProductsComponent,
    ProductComponent,
    ProductFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
