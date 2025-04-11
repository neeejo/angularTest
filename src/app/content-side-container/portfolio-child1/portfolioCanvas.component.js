function Canvas2D() {
    this._canvas = document.getElementById("screen");
    if (!this._canvas) {
        console.error("Canvas element not found!");
        return;
    }
    this._canvasContext = this._canvas.getContext("2d");
    if (!this._canvasContext) {
        console.error("Failed to get 2D context!");
    } else {
        console.log("Canvas context initialized successfully!");
    }
}

Canvas2D.prototype.clear = function() {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position) {
    if (!this._canvasContext) {
        console.error("Canvas context is not initialized!");
        return;
    }
    this._canvasContext.drawImage(image, position.x, position.y);
};

document.addEventListener("DOMContentLoaded", () => {
    window.Canvas = new Canvas2D();
});
