import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  { path: '', redirectTo: '/interpolation', pathMatch: 'full' },
  { path: 'interpolation', component: InterpolationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
