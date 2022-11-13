class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  emit(amount) {
    if (color == 1) {
      for (let i = 0; i < amount; i++) {
        this.particles.push(new Particle(this.pos.x, this.pos.y));
      }
    } else {
      for (let i = 0; i < amount; i++) {
        this.particles.push(new White(this.pos.x, this.pos.y));
      }
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }

    for (let i = 0; i <= this.particles.length - 1; i++) {
      if (this.particles[i].lifespan < 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }
}
