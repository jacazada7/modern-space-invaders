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
}