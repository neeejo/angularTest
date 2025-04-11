import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule, RouterLink } from "@angular/router";
import { MatTree } from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface FoodNode {
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
export class NavigatorTreeComponent implements OnInit, OnDestroy {
  @ViewChild(MatTree) tree!: MatTree<any>;

  dataSource = EXAMPLE_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.expandNodesForCurrentRoute();
  }
  
  public expandNodesForCurrentRoute(): void {
    
    const currentRoute = this.router.url;
  
    console.log("Current route:", currentRoute);
    //aggiunto undefined per la prima ricorsione con '/' - chiedere info
    const expandNodeRecursively = (node: FoodNode | undefined) => {
      if (!node) {
        return;
      }

      if (node.route && currentRoute.startsWith(node.route) ) {
        console.log("Expanding node:", node.route + currentRoute);
        this.expandNode(node);
      }else {
        this.collapseNode(node);
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
    node.expanded = true;
  }

  collapseNode(node: FoodNode): void {
    this.tree.collapse(node);
    node.expanded = false;
  }

  clickNode(node: FoodNode): void {
    if (node.expanded === true) {
        this.tree.collapse(node);
        node.expanded = false;
      } else {
        this.tree.expand(node);
        node.expanded = true;
      }
      this.ngOnInit()
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      console.log("Navigation completed. Current route:", this.router.url);
      this.ngOnDestroy(); 
      this.ngOnInit(); 
    });
  }

  ngOnDestroy(): void {
    console.log("Destroying sidebar state...");
    this.dataSource.forEach(node => this.collapseNodeRecursively(node));
  }

  private collapseNodeRecursively(node: FoodNode): void {
    this.collapseNode(node); // Chiudi il nodo corrente
    if (node.children) {
      node.children.forEach(child => this.collapseNodeRecursively(child)); // Chiudi i figli
    }
  }

}

export const EXAMPLE_DATA: FoodNode[] = [
  {
    name: "Home",
    route: "/home"
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
        name: "Pagina 4",
        route: "/pages/4044",
        children: [
          {
            name: "Pagina 5",
            route: "/pages/4044/4046",
          },
          {
            name: "Pagina 6",
            route: "/pages/4044/4047",
          },
        ],
      },
      {
        name: "Pagina 7",
        route: "/pages/4045",
        children: [
          {
            name: "Pagina 8",
            route: "/pages/4045/4048",
          },
          {
            name: "Pagina 9",
            route: "/pages/4045/4049",
          },
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    route: "/portfolio",
    children: [
      {
        name: "Pagina 10",
        route: "/portfolio/4041",
      },
      {
        name: "Pagina 11",
        route: "/portfolio/4042",
      },
      {
        name: "Pagina 12",
        route: "/portfolio/4043",
      },
    ],
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
