import { Component } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';
import { PhotoContainerComponent } from './photo-container/photo-container.component';
import { TreeFlatChildAccessorOverviewExample } from './navigator-tree/navigator-tree.component';
import { Toolbar } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [
    Toolbar,
    MatSidenavModule,
    RouterModule,
    PhotoContainerComponent,
    TreeFlatChildAccessorOverviewExample,
    ],
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
