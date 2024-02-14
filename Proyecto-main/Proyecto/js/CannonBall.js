class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//crear un cuerpo circular
//cargar la imagen
    World.add(world, this.body);
  }

  shoot() {
    
    //establecer el ángulo de la bala al cañón
    //establecer un valor estático al cuerpo
    //establecer la velocidad de la bala para hacer que se mueva
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//mostrar la imagen
    pop();

    }
  }

