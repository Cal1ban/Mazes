
//pass in new grid to func i.e. dungeon1

//wrap in func(dungeonName, startingCell){}
var q=new Array();
    q.push(startingCell);
var next = q.shift();

var a = [
  [next[0] - 1, next[1], "up"],
  [next[0], next[1] + 1, "right"],
  [next[0] + 1, next[1], "down"],
  [next[0], next[1] - 1, "left"]
];

var neighbors = new Array();
for (var l = 0; l < 4; l++) {
  if (a[l][0] > -1 && a[l][0] < dungeonName.y && a[l][1] > -1 && a[l][1] < dungeonName.x && dungeonName.cells[a[l][0]][a[l][1]].unvisited) {
    neighbors.push(a[l]);
  }

    // Explore North, South, etc ...
var newLocation = doExplore(neighbours, dungeonName);
  if (newLocation.status === 'Goal') {
    return newLocation.path;
  } else if (newLocation.status === 'Valid') {
    queue.push(newLocation);
}
