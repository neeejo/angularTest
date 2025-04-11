import {Component, EventEmitter, Output, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, RouterLink } from '@angular/router';
import { EXAMPLE_DATA, FoodNode } from '../navigator-tree/navigator-tree.component';
import { CommonModule } from '@angular/common';

/**
 * @title Toolbar 
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.css',
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    RouterLink, 
    RouterModule,
    CommonModule
  ],
  standalone: true
})
export class Toolbar {
  @Input() dataSource: FoodNode[] = [];
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() navigationChange = new EventEmitter<string>();

  hoveredNode: FoodNode | null = null;

  onNavigate(route: string | undefined): void {
    if (!route) {
      console.warn('Route is undefined, navigation skipped.');
      return;
    }
    this.navigationChange.emit(route); // Emetti l'evento con la route
  }

  onHover(node: FoodNode): void {
    this.hoveredNode = node; 
  }
  
  onLeave(): void {
    this.hoveredNode = null; 
  }
}
