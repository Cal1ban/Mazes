var cell1 = Object.create(cell);
cell1.initCell();

var dungeon1 = Object.create(dungeon)
dungeon1.initGrid(40,40,cell1);

var mouse1 = Object.create(mouse)
var cheese1 = Object.create(cheese)

var iterate = maze.recursive(dungeon1);
var startingPoint = iterate.next().value;
var disp =  iterate.next().value;

    for (var i = 0; i < disp.length; i++) {
        $('#maze > tbody').append("<tr>");
        for (var j = 0; j < disp[i].length; j++) {
            var selector = i+"-"+j;
            $('#maze > tbody').append("<td id='"+selector+"'>&nbsp;</td>");
            if (disp[i][j].walkable == false) { $('#'+selector).css('background', 'black'); }
            if (disp[i][j].startingCell == true) { $('#'+selector).css('background', 'green'); }
            if (disp[i][j].finalCell == true) { $('#'+selector).css('background', 'blue'); }
            if (disp[i][j].startingCell == true) { mouse1.initMouse([i,j]); }
            if (disp[i][j].finalCell == true) { cheese1.initCheese([i,j]); }
        }
        $('#maze > tbody').append("</tr>");
    }
