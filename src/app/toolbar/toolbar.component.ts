import {Component, EventEmitter, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, RouterLink } from '@angular/router';

/**
 * @title Toolbar 
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterModule],
  standalone: true
})
export class Toolbar {
  @Output() toggleSidebar = new EventEmitter<void>();
}
