import {Component} from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
@Component({
  selector: 'app-root',
  imports: [SideBarComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
