import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './bata-binding/interpolation/interpolation.component';
import { AllComponent } from './bata-binding/all/all.component';

const routes: Routes = [
  { path: 'bata-binding', component: AllComponent },
  { path: '', redirectTo: '/bata-binding', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
