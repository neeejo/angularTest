import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule, RouterLink } from "@angular/router";
import { MatTree } from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  route?: string;
  children?: FoodNode[];
  expanded? : boolean;
}

/**
 * @title Tree with flat nodes (childrenAccessor)
 */
@Component({
  selector: "app-navigator-tree",
  templateUrl: "navigator-tree.component.html",
  imports: [
    MatTree,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NavigatorTreeComponent implements OnInit {
  @ViewChild(MatTree) tree!: MatTree<any>;

  dataSource = EXAMPLE_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.expandNodesForCurrentRoute();
  }
  
  private expandNodesForCurrentRoute(): void {
    const currentRoute = this.router.url;
  
    const expandNodeRecursively = (node: FoodNode) => {
      if (node.route && currentRoute.startsWith(node.route)) {
        this.tree.expand(node);
        node.expanded = true;
      }
      if (node.children) {
        node.children.forEach(child => expandNodeRecursively(child));
      }
    };
  
    this.dataSource.forEach(node => expandNodeRecursively(node));
  }

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  
  
  expandNode(node: FoodNode): void {
    this.tree.expand(node);
  }

  collapseNode(node: FoodNode): void {
    this.tree.collapse(node);
  }

  isNodeExpanded(node: FoodNode): boolean {
    const currentRoute = this.router.url;

    if (node.route && currentRoute.startsWith(node.route)) {
      this.expandNodesForCurrentRoute();
      return true;
    }

    if (node.children) {
      return node.children.some((child) => this.isNodeExpanded(child));
    }

    return node.expanded? node.expanded : false;
  }
  

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: "Home",
    route: "/home",
    expanded: true,
    children: [
      {
        name: "Placeholder1",
        route: "/home/4041",
      },
      {
        name: "Placeholder2",
        route: "/home/4042",
      },
      {
        name: "Placeholder3",
        route: "/home/4043",
      },
    ],
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Pages",
    route: "/pages",
    expanded: true,
    children: [
      {
        name: "Pagina 5",
        route: "/pages/4044",
        expanded: true,
        children: [
          {
            name: "Placeholder6",
            route: "/pages/4044/4046",
          },
          {
            name: "Placeholder7",
            route: "/pages/4044/4047",
          },
        ],
      },
      {
        name: "Placeholder5",
        route: "/pages/4045",
        expanded: true,
        children: [
          {
            name: "Placeholder8",
            route: "/pages/4045/4048",
          },
          {
            name: "Placeholder9",
            route: "/pages/4045/4049",
          },
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    route: "/portfolio",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
