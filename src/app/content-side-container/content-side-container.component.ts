import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";


@Component({
  selector: 'app-content-side-container',
  imports: [ 
    RouterModule, 
    MatSidenavModule,],
  templateUrl: 'content-side-container.component.html',
  styleUrls: ['content-side-container.component.css'],
  standalone: true,
})
export class ContentSideContainerComponent {}