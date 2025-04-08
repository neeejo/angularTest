import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentSideContainerComponent } from './content-side-container/content-side-container.component';
import { ContentSideComponent } from './content-side-container/content-side/content-side.component';
import { ContentSide2Component } from './content-side-container/content-side2/content-side2.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentSideContainerComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: ContentSideComponent },
      { path: 'content2', component: ContentSide2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}