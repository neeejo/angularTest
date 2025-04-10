import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterModule, RouterLink} from '@angular/router';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  route?: string;
  children?: FoodNode[];
}

/**
 * @title Tree with flat nodes (childrenAccessor)
 */
@Component({
  selector: 'app-navigator-tree',
  templateUrl: 'navigator-tree.component.html',
  imports: [MatTreeModule, MatButtonModule, MatIconModule, RouterModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class TreeFlatChildAccessorOverviewExample {
  dataSource = EXAMPLE_DATA;

  constructor(private router: Router) {
  }

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Home', 
    route: 'index',
    children: [
      {
        name: 'Placeholder1',
        route: '404',
      },
       {
        name: 'Placeholder2',
        route: '404',
      },
        {
          name: 'Placeholder3',
          route: '404',
        }
      ],
  },
  {
    name: 'About',
    route: 'about',
  },
  {
    name: 'Pages',
    route: 'pages',
    children: [
      {
        name: 'Placeholder4',
        route: '404',
        children: [
          {
            name: 'Placeholder6',
            route: '404',
          },
           {
            name: 'Placeholder7',
            route: '404',
          }
        ],
      },
      {
        name: 'Placeholder5',
        route: '404',
        children: [
          {
            name: 'Placeholder8',
            route: '404',
          }, 
          {
            name: 'Placeholder9',
            route: '404',
          }
        ],
      },
    ],
  },
  {
    name: 'Portfolio',
    route: 'portfolio',
  },
  {
    name: 'Contact',
    route: 'contact',
  },
];