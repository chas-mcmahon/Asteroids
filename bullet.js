function(root){
  var Asteroids = root.Asteroids = {root.Asteroids || {}}

  var Bullet = Asteroids.Bullet = function(pos, vel, radius, color){
    Asteroids.MoveObject.call(this, pos, vel, radius, color);
  };

  Bullet.COLOR = "red";
  Bullet.RADIUS = 1;

  Bullet.inherits(Asteroids.MoveObject);

}(this);