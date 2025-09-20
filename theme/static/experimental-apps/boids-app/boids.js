const canvas = document.getElementById('boids-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const numBoids = 100;
const boids = [];

const separationDistance = 20;
const alignmentDistance = 50;
const cohesionDistance = 50;
const maxSpeed = 3;
const maxForce = 0.1;

class Boid {
    constructor() {
        this.position = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.velocity = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
        this.acceleration = { x: 0, y: 0 };
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;

        const speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
        if (speed > maxSpeed) {
            this.velocity.x = (this.velocity.x / speed) * maxSpeed;
            this.velocity.y = (this.velocity.y / speed) * maxSpeed;
        }

        this.acceleration = { x: 0, y: 0 };

        if (this.position.x > canvas.width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = canvas.width;
        }
        if (this.position.y > canvas.height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = canvas.height;
        }
    }

    applyForce(force) {
        this.acceleration.x += force.x;
        this.acceleration.y += force.y;
    }

    flock(boids) {
        let separation = this.separate(boids);
        let alignment = this.align(boids);
        let cohesion = this.cohere(boids);

        separation.x *= 1.5;
        separation.y *= 1.5;
        alignment.x *= 1.0;
        alignment.y *= 1.0;
        cohesion.x *= 1.0;
        cohesion.y *= 1.0;

        this.applyForce(separation);
        this.applyForce(alignment);
        this.applyForce(cohesion);
    }

    separate(boids) {
        let steer = { x: 0, y: 0 };
        let count = 0;
        for (let other of boids) {
            let d = Math.sqrt(
                (this.position.x - other.position.x) * (this.position.x - other.position.x) +
                (this.position.y - other.position.y) * (this.position.y - other.position.y)
            );
            if ((d > 0) && (d < separationDistance)) {
                let diff = { x: this.position.x - other.position.x, y: this.position.y - other.position.y };
                diff.x /= d;
                diff.y /= d;
                steer.x += diff.x;
                steer.y += diff.y;
                count++;
            }
        }
        if (count > 0) {
            steer.x /= count;
            steer.y /= count;
        }
        if (steer.x !== 0 || steer.y !== 0) {
            steer.x = (steer.x / Math.sqrt(steer.x * steer.x + steer.y * steer.y)) * maxSpeed;
            steer.y = (steer.y / Math.sqrt(steer.x * steer.x + steer.y * steer.y)) * maxSpeed;
            steer.x -= this.velocity.x;
            steer.y -= this.velocity.y;
            let steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
            if (steerMag > maxForce) {
                steer.x = (steer.x / steerMag) * maxForce;
                steer.y = (steer.y / steerMag) * maxForce;
            }
        }
        return steer;
    }

    align(boids) {
        let sum = { x: 0, y: 0 };
        let count = 0;
        for (let other of boids) {
            let d = Math.sqrt(
                (this.position.x - other.position.x) * (this.position.x - other.position.x) +
                (this.position.y - other.position.y) * (this.position.y - other.position.y)
            );
            if ((d > 0) && (d < alignmentDistance)) {
                sum.x += other.velocity.x;
                sum.y += other.velocity.y;
                count++;
            }
        }
        if (count > 0) {
            sum.x /= count;
            sum.y /= count;
            sum.x = (sum.x / Math.sqrt(sum.x * sum.x + sum.y * sum.y)) * maxSpeed;
            sum.y = (sum.y / Math.sqrt(sum.x * sum.x + sum.y * sum.y)) * maxSpeed;
            let steer = { x: sum.x - this.velocity.x, y: sum.y - this.velocity.y };
            let steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
            if (steerMag > maxForce) {
                steer.x = (steer.x / steerMag) * maxForce;
                steer.y = (steer.y / steerMag) * maxForce;
            }
            return steer;
        } else {
            return { x: 0, y: 0 };
        }
    }

    cohere(boids) {
        let sum = { x: 0, y: 0 };
        let count = 0;
        for (let other of boids) {
            let d = Math.sqrt(
                (this.position.x - other.position.x) * (this.position.x - other.position.x) +
                (this.position.y - other.position.y) * (this.position.y - other.position.y)
            );
            if ((d > 0) && (d < cohesionDistance)) {
                sum.x += other.position.x;
                sum.y += other.position.y;
                count++;
            }
        }
        if (count > 0) {
            sum.x /= count;
            sum.y /= count;
            return this.seek(sum);
        } else {
            return { x: 0, y: 0 };
        }
    }

    seek(target) {
        let desired = { x: target.x - this.position.x, y: target.y - this.position.y };
        desired.x = (desired.x / Math.sqrt(desired.x * desired.x + desired.y * desired.y)) * maxSpeed;
        desired.y = (desired.y / Math.sqrt(desired.x * desired.x + desired.y * desired.y)) * maxSpeed;
        let steer = { x: desired.x - this.velocity.x, y: desired.y - this.velocity.y };
        let steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
        if (steerMag > maxForce) {
            steer.x = (steer.x / steerMag) * maxForce;
            steer.y = (steer.y / steerMag) * maxForce;
        }
        return steer;
    }

    draw() {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(Math.atan2(this.velocity.y, this.velocity.x));
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(-5, 5);
        ctx.lineTo(-5, -5);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fill();
        ctx.restore();
    }
}

for (let i = 0; i < numBoids; i++) {
    boids.push(new Boid());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let boid of boids) {
        boid.flock(boids);
        boid.update();
        boid.draw();
    }
    requestAnimationFrame(animate);
}

animate();
