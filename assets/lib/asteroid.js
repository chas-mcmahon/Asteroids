(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(options) {
    Asteroids.MoveObject.call(this, options);
  };

  Asteroid.inherits(Asteroids.MoveObject);

  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 36;

  Asteroid.randPosition = function(screenWidth, screenHeight) {
    // toss = Math.floor(Math.random()*2);
    startX = Math.floor(Math.random()*screenWidth);
    startY = Math.floor(Math.random()*screenHeight);
    // if (toss < 1) {
    //   if (startX < screenWidth / 2) {
    //     startX = 0;
    //   } else {
    //     startX = screenWidth;
    //   }
    // } else {
    //   if (startY < screenHeight){
    //     startY = 0; 
    //   } else {
    //     startY = screenHeight;
    //   }
    // }
    return newPos = [startX, startY];
  };

  Asteroid.randomAsteroid = function(screenWidth, screenHeight, game) {
    newVelX = 0;
    newVelY = 0;
    while (newVelX === 0 && newVelY === 0){
      newVelX = ((Math.random()*2) -1)/2;
      newVelY = ((Math.random()*2) -1)/2;
    }

    newPos = Asteroid.randPosition(screenWidth, screenHeight);
    while (game.ship.isCollideWith({
      centerX: newPos[0],
      centerY: newPos[1],
      radius: Asteroid.RADIUS * 4
    }) == true) {
      newPos = Asteroid.randPosition(screenWidth, screenHeight);
    }

    return new Asteroid({
      pos: newPos,
      vel: [newVelX, newVelY],
      radius: Asteroid.RADIUS
    });
  };

  Asteroid.prototype.draw = function(ctx) {
    var image = $("#asteroidImage")[0];
    ctx.drawImage(image, (this.centerX - 44), (this.centerY - 41));
  };

})(this);


