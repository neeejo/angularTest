function PortfolioGameWorld() {

    this.stick = new Stick();
}

PortfolioGameWorld.prototype.update = function() {

    this.stick.update();
}

PortfolioGameWorld.prototype.draw = function() {
    if (window.Canvas && typeof window.Canvas.drawImage === "function") {
        window.Canvas.drawImage(sprites.background, { x: 0, y: 0 });
    } else {
        console.error("Canvas.drawImage is not defined or not a function");
    }

    this.stick.draw();
};