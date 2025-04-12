function Stick(){
    this.position = {x:0, y:402};
}

Stick.prototype.update = function() {

}

Stick.prototype.draw = function() {
    window.Canvas.drawImage(sprites.stick, this.position);
}