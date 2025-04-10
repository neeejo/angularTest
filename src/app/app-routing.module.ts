import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentSideContainerComponent } from "./content-side-container/content-side-container.component";
import { ContentSideComponent } from "./content-side-container/content-side/content-side.component";
import { ContentSide2Component } from "./content-side-container/content-side2/content-side2.component";
import { ContentSide3Component } from "./content-side-container/content-side3/content-side3.component";
export const routes: Routes = [
  {
    path: "",
    component: ContentSideContainerComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        children: [
          { path: "4041", component: ContentSide3Component },
          { path: "", component: ContentSideComponent },
        ],
      },
      { path: "about", component: ContentSide2Component },
      { path: "pages", component: ContentSideComponent },
      { path: "portfolio", component: ContentSide2Component },
      { path: "contact", component: ContentSide2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
