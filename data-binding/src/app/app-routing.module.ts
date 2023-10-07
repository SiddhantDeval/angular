import { StudentsListComponent } from './students-list/students-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { PostsComponent } from './posts/posts.component';
import { ContentsComponent } from './contents/contents.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: '', component: StudentsListComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'quotes', component: QuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
