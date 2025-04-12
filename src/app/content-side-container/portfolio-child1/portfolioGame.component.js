function PortfolioGame() {

}

PortfolioGame.prototype.init = function() {

    this.portfolioGameWorld = new PortfolioGameWorld();
}

PortfolioGame.prototype.start = function() {

    this.init();

    this.mainLoop();
}

PortfolioGame.prototype.mainLoop = function() {
    try {
        if (window.Canvas && typeof window.Canvas.clear === "function") {
            window.Canvas.clear(); 
        } else {
            console.error("Canvas.clear is not defined or not a function");
            return; // Interrompe il loop se il canvas non è inizializzato
        }

        if (this.portfolioGameWorld) {
            this.portfolioGameWorld.update();
            this.portfolioGameWorld.draw();
        }
    } catch (error) {
        console.error("Error in mainLoop:", error);
        return; // Interrompe il loop in caso di errore
    }

    requestAnimationFrame(this.mainLoop.bind(this));
};

let PoolGame = new PortfolioGame();