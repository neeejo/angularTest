import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-content-side',
  imports: [Toolbar],
  templateUrl: 'content-side.component.html',
  styleUrl: `content-side.component.css`,
  standalone: true
})
export class ContentSideComponent {

}
