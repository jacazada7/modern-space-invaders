class Projectile {
    constructor({position, velocity, color = "red"}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 4; 
        this.color = color;
    }
}