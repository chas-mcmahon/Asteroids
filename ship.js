(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(pos, vel, radius, colour) {
    Asteroids.MoveObject.call(this, pos, vel, radius, colour);
  };

  Ship.inherits(Asteroids.MoveObject);
  Ship.COLOUR = 'hotpink';
  Ship.RADIUS = 5;

  Ship.startPoint = function(screenWidth, screenHeight){
    return [(screenWidth/2),(screenHeight/2)];
  };

  Ship.newShip = function(screenWidth, screenHeight) {
    return new Ship(this.startPoint(screenWidth, screenHeight), [0,0], Ship.RADIUS, Ship.COLOUR);
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})(this);


