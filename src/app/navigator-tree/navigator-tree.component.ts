import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

/**
 * @title Tree with flat nodes (childrenAccessor)
 */
@Component({
  selector: 'app-navigator-tree',
  templateUrl: 'navigator-tree.component.html',
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class TreeFlatChildAccessorOverviewExample {
  dataSource = EXAMPLE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Home',
    children: [{name: 'Placeholder1'}, {name: 'Placeholder2'}, {name: 'Placeholder3'}],
  },
  {
    name: 'About',
  },
  {
    name: 'Pages',
    children: [
      {
        name: 'Placeholder4',
        children: [{name: 'Placeholder6'}, {name: 'Placeholder7'}],
      },
      {
        name: 'Placeholder5',
        children: [{name: 'Placeholder8'}, {name: 'Placeholder9'}],
      },
    ],
  },
  {
    name: 'Portfolio',
  },
  {
    name: 'Contact',
  },
];