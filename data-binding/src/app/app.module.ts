import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './students-list/student/student.component';
import { StudentCardBodyComponent } from './students-list/student/student-card-body/student-card-body.component';
import { StudentCardHeaderComponent } from './students-list/student/student-card-header/student-card-header.component';
import { StudentFiltersComponent } from './students-list/student-filters/student-filters.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { RegistrationComponent } from './registration/registration.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import icons from './icons';
import { ContentsComponent } from './contents/contents.component';
import { ProjectionChildrenComponent } from './contents/projection-children/projection-children.component';
import { ProjectionChildComponent } from './contents/projection-child/projection-child.component';
import { ProjComponentChildComponent } from './contents/contents/proj-component-child/proj-component-child.component';
import { ProjComponentChildrenComponent } from './contents/contents/proj-component-children/proj-component-children.component';

/* 
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';
providers: [{ provide: APP_BASE_HREF, useValue: environment.baseHref }],
*/

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
    ProductModalComponent,
    ProductsComponent,
    ProductListComponent,
    RegistrationComponent,
    PostsComponent,
    PostComponent,
    ContentsComponent,
    ProjectionChildComponent,
    ProjectionChildrenComponent,
    ProjComponentChildComponent,
    ProjComponentChildrenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
