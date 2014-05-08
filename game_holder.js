(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(canvasEl) {
    this.ctx = canvasEl.getContext("2d");
    this.SCREENWIDTH = canvasEl.width;
    this.SCREENHEIGHT = canvasEl.height;
    this.asteroids = this.addAsteroids(3);
    this.ship = this.addShip(this.SCREENWIDTH, this.SCREENHEIGHT);
    // this.bullets = [];
  };

  Game.prototype.addAsteroids = function(num) {
    astArray = [];
    for (var i = 0; i < num; i++) {
      astArray.push(Asteroids.Asteroid.randomAsteroid(this.SCREENWIDTH, this.SCREENHEIGHT));
    }
    return astArray;
  };

  Game.prototype.addShip = function(x, y) {
    return Asteroids.Ship.newShip(x, y);
  };

  // Game.prototype.fireBullet = function() {
 //    this.bullets.push(this.ship.fireBullet());
 //  }

  Game.prototype.draw = function() {
    this.ctx.clearRect(0,0, this.SCREENWIDTH, this.SCREENHEIGHT);
    var that = this;
    this.ship.draw(this.ctx, Asteroids.Ship.COLOR);

    // this.bullets.forEach(function(bullet) {
    //   bullet.draw(that.ctx, Asteroids.Bullet.COLOR);
    // });

    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx, Asteroids.Asteroid.COLOR);
    });
  };

  Game.prototype.move = function() {
    var that = this;
    this.ship.move(this.SCREENWIDTH, this.SCREENHEIGHT);

    // this.bullets.forEach(function(bullet) {
    //   bullet.move(that.SCREENWIDTH, that.SCREENHEIGHT);
    // });

    this.asteroids.forEach(function(asteroid) {
      asteroid.move(that.SCREENWIDTH, that.SCREENHEIGHT);
    });
  };

  Game.prototype.step = function() {
    var game = this;
    for (var i = 0; i < game.asteroids.length; i++) {
      if (game.ship.isCollideWith(game.asteroids[i])) {
        alert("You lose!!!");
    }

    //questionable. Why iterate over asteroids to make game move?
    game.asteroids.forEach(function(asteroid) {
      game.move();
      game.draw();
    })
  };

  Game.prototype.bindKeyHandlers = function() {
    var that = this;


    key('w', function(){ that.ship.power([ 0,-1]) });
    key('a', function(){ that.ship.power([-1, 0]) });
    key('s', function(){ that.ship.power([ 0, 1]) });
    key('d', function(){ that.ship.power([ 1, 0]) });
    // key('space', function(){ that.fireBullet() });
  };

  Game.prototype.start = function() {
    // var ctx = canvasEl.getContext("2d");
    var game = this;
    this.bindKeyHandlers();
    // key('b', function(){ alert('you pressed a!'); });
    // game.step()
    window.setInterval(function () {
      game.step();
    }, 30);
  };

})(this);