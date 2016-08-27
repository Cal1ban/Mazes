var cell = {
	initCell: function() {
		this.startingCell = false;
		this.finalCell = false;
		this.unvisited = true;
		this.walkable = false;
	}
};
var dungeon = {
	initGrid: function(x, y, cellType) {
		this.y = y;
		this.x = x;
		this.totalCells = x * y;
		this.cells = new Array();
		for (let i = 0; i < y; i++) {
			this.cells[i] = new Array();
			for (let j = 0; j < x; j++) {
				this.cells[i][j] = Object.create(cell);
				this.cells[i][j].initCell();
			}
		}
	}
};

maze = (function() {
	//recursive backtrack algorithm
	recursive = function*(dungeonName) {
			var currentCell = [Math.floor(Math.random() * dungeonName.y), Math.floor(Math.random() * dungeonName.x)],
					path = [currentCell],
					visitedCells = 1;
					dungeonName.cells[currentCell[0]][currentCell[1]].startingCell = true;
					dungeonName.cells[currentCell[0]][currentCell[1]].unvisited = false;
					yield currentCell;
			while (visitedCells < Math.floor(dungeonName.totalCells/4)) {
			//	console.log(visitedCells);
			//	console.log("Cell:"+currentCell[0]);
				var a = [
					[currentCell[0] - 2, currentCell[1], "up"],
					[currentCell[0], currentCell[1] + 2, "right"],
					[currentCell[0] + 2, currentCell[1], "down"],
					[currentCell[0], currentCell[1] - 2, "left"]
				];

				var neighbors = new Array();
				for (var l = 0; l < 4; l++) {
					if (a[l][0] > -1 && a[l][0] < dungeonName.y && a[l][1] > -1 && a[l][1] < dungeonName.x && dungeonName.cells[a[l][0]][a[l][1]].unvisited) {
						neighbors.push(a[l]);
				//		console.log(a[l]);
					}
				}
				if (neighbors.length) {
					next = neighbors[Math.floor(Math.random() * neighbors.length)];
				//	dungeonName.cells[currentCell[0]][currentCell[1]].walls[next[2]] = 1;
					if (next[2] == "up"){
						dungeonName.cells[next[0]+1][next[1]].walkable = true;
						dungeonName.cells[next[0]+1][next[1]].unvisited = false;
						dungeonName.cells[next[0]][next[1]].walkable = true;
						dungeonName.cells[next[0]][next[1]].unvisited = false;
						currentCell = [next[0], next[1]];
					}
					if (next[2] == "down"){
						dungeonName.cells[next[0]-1][next[1]].walkable = true;
						dungeonName.cells[next[0]-1][next[1]].unvisited = false;
						dungeonName.cells[next[0]][next[1]].walkable = true;
						dungeonName.cells[next[0]][next[1]].unvisited = false;
						currentCell = [next[0], next[1]];
					}
					if (next[2] == "left"){
						dungeonName.cells[next[0]][next[1]+1].walkable = true;
						dungeonName.cells[next[0]][next[1]+1].unvisited = false;
						dungeonName.cells[next[0]][next[1]].walkable = true;
						dungeonName.cells[next[0]][next[1]].unvisited = false;
						currentCell = [next[0], next[1]];
					}
					if (next[2] == "right"){
						dungeonName.cells[next[0]][next[1]-1].walkable = true;
						dungeonName.cells[next[0]][next[1]-1].unvisited = false;
						dungeonName.cells[next[0]][next[1]].walkable = true;
						dungeonName.cells[next[0]][next[1]].unvisited = false;
						currentCell = [next[0], next[1]];
					}

				path.push(currentCell);
				 visitedCells++;
				 console.log(visitedCells);
				}
				else {
					currentCell = path.pop();
				}
			}
			dungeonName.cells[currentCell[0]][currentCell[1]].finalCell = true;
			return dungeonName.cells;
		}
	return {
		//define methods
		recursive: recursive
	};
})();
