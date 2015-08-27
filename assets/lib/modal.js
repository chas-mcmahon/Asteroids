$(document).ready(function(){
  window.showModal = function(id){
    $(id).addClass("is-active");
    $(".points").html("Score: " + window.game.points);
  }

  window.hideModal = function(){
    if ($(".is-active").attr("id") === "start-modal"){
	    window.game.start();
    } else {
    	window.game.resetGame();
    }
    $(".is-active").removeClass("is-active");
  }

  $("body").on("click", ".js-hide-modal", window.hideModal);
  window.showModal("#start-modal");
});