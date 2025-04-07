import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Toolbar 
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  standalone: true
})
export class Toolbar {}
