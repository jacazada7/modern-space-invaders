class Particle {
    constructor({position, velocity, radius, color, fades}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius; 
        this.color = color ;
        this.fades = fades;
        this.opacity = 1;
    }

    draw() {
        c.save();
        c.globalAlpha = this.opacity       
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, );
        c.fill();
        c.closePath();
        c.restore();
    }
}