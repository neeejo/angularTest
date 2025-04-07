import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { PhotoContainerComponent } from "../photo-container/photo-container.component";
import { ContentSideComponent } from "../content-side/content-side.component";
import { TreeFlatChildAccessorOverviewExample } from "../navigator-tree/navigator-tree.component";

@Component({
  selector: "app-side-bar",
  imports: [MatSidenavModule, PhotoContainerComponent, ContentSideComponent, TreeFlatChildAccessorOverviewExample],
  templateUrl: "side-bar.component.html",
  styleUrl: `side-bar.component.css`,
  standalone: true,
})
export class SideBarComponent {}
