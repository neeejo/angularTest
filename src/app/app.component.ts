import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';
import { PhotoContainerComponent } from './photo-container/photo-container.component';
import { NavigatorTreeComponent } from './navigator-tree/navigator-tree.component';
import { Toolbar } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [
    Toolbar,
    MatSidenavModule,
    RouterModule,
    PhotoContainerComponent,
    NavigatorTreeComponent,
    ],
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(NavigatorTreeComponent) sidebar!: NavigatorTreeComponent; 

  onNavigationChange(route: string): void {
    console.log('Navigated to:', route);
    if (this.sidebar) {
      this.sidebar.navigateTo(route); // Richiama il metodo della sidebar
    }
     // Chiamata alla funzione per espandere i nodi
    // Ad esempio, potresti chiamare expandNodesForCurrentRoute()
  }
}
