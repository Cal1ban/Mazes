var mouse ={
  initMouse:function(location){
    if(arguments.length < 1 && typeof(location) != "Array")
    {
    return console.log("Error - please use Array!")
    }
    this.location = location
    this.see={
    UP:[this.location[0]-1,this.location[1]],
    DOWN: [this.location[0]+1,this.location[1]],
    RIGHT:[this.location[0],this.location[1]+1],
    LEFT:[this.location[0],this.location[1]-1]
    }
  }
};

var cheese ={
  initCheese:function(location){
    this.location = location;
    //this.location = [Math.floor(Math.random()), Math.floor(Math.random())];
  }
};


AI = (function() {
  look = function(mouse, cheese, grid) {
      currentLocation = mouse.location;
      target = cheese.location;
      x = grid.x;
      y = grid.y;
      return currentLocation;
  },
  move= function(){

   }
return{
  look:look,
  move:move
};

})();
/*
dir.push(UP);
dir.push(LEFT);
dir.push(RIGHT);
dir.push(DOWN);
nextStep.push();



      [1][2]
[2][1][2][2] [2][3]
      [3][2]
*/
