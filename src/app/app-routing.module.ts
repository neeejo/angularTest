import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentSideContainerComponent } from "./content-side-container/content-side-container.component";
import { ContentSideComponent } from "./content-side-container/content-side/content-side.component";
import { ContentSide2Component } from "./content-side-container/content-side2/content-side2.component";
import { ContentSide3Component } from "./content-side-container/content-side3/content-side3.component";
import { ContentSide4Component } from "./content-side-container/content-side4/content-side4.component";
import { ContentSide5Component } from "./content-side-container/content-side5/content-side5.component";

export const routes: Routes = [
  {
    path: "",
    component: ContentSideContainerComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home", component: ContentSideComponent
      },
      { path: "about", component: ContentSide2Component },
      { 
        path: "pages", 
        children: [
          { 
            path: "4044",
            children: [
              { path: "4046", component: ContentSide5Component },
              { path: "4047", component: ContentSide5Component },
              { path: "", component: ContentSide5Component },
            ] 
          },
          { 
            path: "4045", 
            children: [
              { path: "4048", component: ContentSide5Component },
              { path: "4049", component: ContentSide5Component },
              { path: "", component: ContentSide5Component },
            ] 
          },
          { path: "", component: ContentSide4Component },
        ], 
    },
      { 
        path: "portfolio",
        children: [
          { path: "4041", component: ContentSide3Component },
          { path: "4042", component: ContentSide3Component },
          { path: "4043", component: ContentSide3Component },
          { path: "", component: ContentSide3Component },
        ], 
      },
      { path: "contact", component: ContentSide2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
