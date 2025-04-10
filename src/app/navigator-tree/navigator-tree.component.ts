import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule, RouterLink } from "@angular/router";

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
  selector: "app-navigator-tree",
  templateUrl: "navigator-tree.component.html",
  imports: [
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
  dataSource = EXAMPLE_DATA;

  constructor(private router: Router) {}

  ngOnInit() {}

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  isNodeExpanded(node: FoodNode): boolean {
    const currentRoute = this.router.url;

    // Check if the current node matches the active route
    if (node.route && currentRoute.startsWith(node.route)) {
      return true;
    }

    // Recursively check if any child matches the active route
    if (node.children) {
      return node.children.some((child) => this.isNodeExpanded(child));
    }

    return false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: "Home",
    route: "/home",
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
    children: [
      {
        name: "Placeholder4",
        route: "/pages/4044",
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
