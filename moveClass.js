(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MoveObject = Asteroids.MoveObject = function (pos, vel, radius, colour) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.colour = colour;
    this.centerX = pos[0];
    this.centerY = pos[1];
  }

  MoveObject.prototype.move = function(screenWidth, screenHeight) {

    this.centerX += this.vel[0] % screenWidth; //screenWidth comes from game
    this.centerY += this.vel[1] % screenHeight;

    if (this.centerX - this.radius >= screenWidth) {
      this.centerX = 0 - this.radius;
    } else if (this.centerX + this.radius <= 0) {
      this.centerX = screenWidth + this.radius;
    }

    if (this.centerY - this.radius >= screenHeight) {
      this.centerY = 0 - this.radius;
    } else if (this.centerY + this.radius <= 0) {
      this.centerY = screenHeight + this.radius;
    }

    // console.log("center:")
    // console.log(this.centerX)
    // console.log("vel")
    // console.log(this.vel[0])
    // console.log(screenWidth)
  };

  MoveObject.prototype.draw = function(ctx, colour){ //ctx comes from game
    ctx.fillStyle = colour;
    ctx.beginPath();
    //console.log(ctx);
    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MoveObject.prototype.isCollideWith = function(otherObject){
    distX = Math.abs(this.centerX - otherObject.centerX);
    distY = Math.abs(this.centerY - otherObject.centerY);
    totRad = this.radius + otherObject.radius;

    // console.log("otherObjX")
    // console.log(otherObject.centerX)
    // console.log("otherObjY")
    // console.log(otherObject.centerY)
    // console.log("(distY * distY)");
    // console.log((distY * distY));
    // console.log("(distX * distX)");
    // console.log((distX * distX));
    // console.log("totRad");
    // console.log(totRad);

    if ((totRad * totRad) > ((distX * distX) + (distY * distY))){
      return true;
    } else {
      return false;
    }
  };

  Function.prototype.inherits = function(superClass){
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  };

})(this);




