class Bomb {
    static radius = 30;
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 0;
        this.color = "";
        this.opacity = 1;
        this.active = false;

        gsap.to(this, {
            radius: 30
        });
    }

    draw() {
        c.save();
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.closePath();
        c.fillStyle = this.color;
        c.fill(); 
        c.restore();
        

    }
}