var cell = {
	initCell: function() {
		this.startingCell = false;
		this.finalCell = false;
		this.unvisited = true;
		this.walls = [0, 0, 0, 0];
		this.wallsDir = {
			UP: [1, 0, 0, 0],
			DOWN: [0, 1, 0, 0],
			LEFT: [0, 0, 1, 0],
			RIGHT: [0, 0, 0, 1]
		};
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
	recursive = function(dungeonName) {
			var currentCell = [Math.floor(Math.random() * dungeonName.y), Math.floor(Math.random() * dungeonName.x)],
					path = [currentCell],
					visitedCells = 1;
					dungeonName.cells[currentCell[0]][currentCell[1]].startingCell = true;
					dungeonName.cells[currentCell[0]][currentCell[1]].unvisited = false;

			while (visitedCells < dungeonName.totalCells) {
				var a = [
					[currentCell[0] - 1, currentCell[1], 0, 2],
					[currentCell[0], currentCell[1] + 1, 1, 3],
					[currentCell[0] + 1, currentCell[1], 2, 0],
					[currentCell[0], currentCell[1] - 1, 3, 1]
				];
				var neighbors = new Array();
				for (var l = 0; l < 4; l++) {
					if (a[l][0] > -1 && a[l][0] < dungeonName.y && a[l][1] > -1 && a[l][1] < dungeonName.x && dungeonName.cells[a[l][0]][a[l][1]].unvisited) {
						neighbors.push(a[l]);
					}
				}
				if (neighbors.length) {
					next = neighbors[Math.floor(Math.random() * neighbors.length)];
					dungeonName.cells[currentCell[0]][currentCell[1]].walls[next[2]] = 1;
					dungeonName.cells[next[0]][next[1]].walls[next[3]] = 1;
					dungeonName.cells[next[0]][next[1]].unvisited = false;
					visitedCells++;
					currentCell = [next[0], next[1]];
					path.push(currentCell);
				}
				else {
					currentCell = path.pop();
				}
			}
			dungeonName.cells[currentCell[0]][currentCell[1]].finalCell = true;
			return dungeonName.cells;
		},

		//not yet implemented
		depthFirst = function(dungeonName) {
			while (true) {
				var startCell = [Math.floor(Math.random() * dungeonName.y), Math.floor(Math.random() * dungeonName.x)];
				var path = [];
				var stack = [];
				stack.push(startCell);
				var currentCell = stack.top();
				path.push(currentCell.id);
				currentCell.visited = true;
				if (currentCell.id === targetCell.id) {
					break;
				}
				var unVisited = 0;
				currentCell.adj.forEach(function(id) {
					var node = getNodeById(graph, id);
					if (!node.visited) {
						stack.push(node);
						unvisisted += 1;
					}
				});
				if (unvisited === 0) {
					stack.pop();
				}
			}
		}

	return {
		//define methods
		recursive: recursive,
		depthFirst: depthFirst
	};
})();
