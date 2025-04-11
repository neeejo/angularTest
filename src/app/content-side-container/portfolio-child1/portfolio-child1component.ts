import { Component, OnInit, OnDestroy } from "@angular/core";
import { RouterModule, Router, NavigationStart } from "@angular/router";
import { Subscription } from "rxjs";

declare const Canvas2D: any;

@Component({
  selector: "app-portfolio-child1",
  imports: [RouterModule],
  templateUrl: "portfolio-child1.component.html",
  styleUrl: `portfolio-child1.component.css`,
  standalone: true,
})
export class PortfolioChild1Component implements OnInit, OnDestroy {
  private routerSubscription: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeCanvas();

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!event.url.includes("portfolio-child1")) {
          this.destroyCanvas();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private initializeCanvas(): void {
    const parentElement = document.querySelector(".canvas-container");
    if (parentElement) {
      const newCanvas = document.createElement("canvas");
      newCanvas.id = "screen";
      newCanvas.width = 1500; 
      newCanvas.height = 825; 
      parentElement.innerHTML = ""; 
      parentElement.appendChild(newCanvas);
    }

    const image = new Image();
    image.src = "assets/sprites/spr_background4.png";

    image.onload = () => {
      const canvasElement = document.getElementById("screen") as HTMLCanvasElement;
      const context = canvasElement.getContext("2d");
      if (context) {
        context.drawImage(image, 0, 0);
      }
    };
  }

  private destroyCanvas(): void {
    const parentElement = document.querySelector(".canvas-container");
    if (parentElement) {
      parentElement.innerHTML = ""; 
    }
  }
}

