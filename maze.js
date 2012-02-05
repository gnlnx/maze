// default maze
var maze = [
	//0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 1, 1, 0,
	0, 2, 0, 0, 0, 0, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 1, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 0, 1, 0, 0,
	0, 1, 0, 0, 0, 1, 3, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
];

var level_loader = new Worker( "level_loader.js" );

var bWin = false;

var mainrow;
var toprow;
var bottomow;
var current;
var rows = 9;
var cols = 8;

var elements = 8;

var pos = 0;
var oldPos = 0;
var value = 0;
var oldValue = 0;

var moves = 0;
var oldMoves = 0;

var x = 1;
var oldX = 0;
var y = 2;
var oldY = 0;

// controls
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var H_KEY = 72;
var J_KEY = 74;
var K_KEY = 75;
var L_KEY = 76;
var N_KEY = 78;

// maze values
var WALL = 0;
var PATH = 1;
var START = 2;
var END = 3;
var NONE = -1;

// maze colors
var WALL_COLOR = "#400";
var PATH_COLOR = "#040";
var START_COLOR = "#004";
var END_COLOR = "#880";
var NONE_COLOR = "#333";

var GetMaze = function() {
	level_loader.postMessage( "new_maze" );
	level_loader.onmessage = function( e ) {
		maze = e.data.maze.path;
		x = e.data.maze.x;
		y = e.data.maze.y;
	}
}

var GetColor = function( cellValue ) {
	var color = NONE_COLOR;
	switch( cellValue ) {
		case WALL:
			color = WALL_COLOR;
			break;
		case PATH:
			color = PATH_COLOR;
			break;
		case START:
			color = START_COLOR;
			break;
		case END:
			color = END_COLOR;
			break;
	}

	return color;
}

var StartCells = function() {
	GetMaze();

	pos = x + ( y * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;

	UpdateCells();
}

var UpdateCells = function() {
	var currentColor = GetColor( value );
	if( currentColor == END_COLOR ) {
		bWin = true;
		document.getElementById( "moves" ).innerHTML = 0;
		document.getElementById( "total-moves" ).innerHTML = moves;
		document.getElementById( "hud" ).style.display = "none";
		document.getElementById( "win" ).style.display = "block";
	}
	current.style.backgroundColor = currentColor;

	pos = (x-1) + ( y * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	mainrow[0].style.backgroundColor = GetColor( value );
	
	pos = (x+1) + ( y * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	mainrow[2].style.backgroundColor = GetColor( value );

	// set top row
	pos = (x-1) + ( (y-1) * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	toprow[0].style.backgroundColor = GetColor( value );

	pos = x + ( (y-1) * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	toprow[1].style.backgroundColor = GetColor( value );

	pos = (x+1) + ( (y-1) * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	toprow[2].style.backgroundColor = GetColor( value );

	// set bottom row
	pos = (x-1) + ( (y+1) * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	bottomrow[0].style.backgroundColor = GetColor( value );

	pos = (x) + ( (y+1) * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	bottomrow[1].style.backgroundColor = GetColor( value );

	pos = (x+1) + ( (y+1) * elements );
	value = ( pos != undefined ) ? maze[ pos ] : NONE;
	bottomrow[2].style.backgroundColor = GetColor( value );
}

var NextLevel = function() {
	oldX = 0;
	oldY = 0;
	moves = 0;
	oldMoves = 0;

	bWin = false;
	document.getElementById( "hud" ).style.display = "";
	document.getElementById( "win" ).style.display = "none";
	StartCells();

	return false;
}

document.addEventListener( "DOMContentLoaded", function( e ) {
	current = document.getElementById( "current" );
	mainrow = current.parentNode;
	toprow = mainrow.previousElementSibling.cells;
	bottomrow = mainrow.nextElementSibling.cells;
	mainrow = mainrow.cells;

	// set starting cells
	StartCells();

	// create keypress event listener
	document.addEventListener( "keyup", function( e ) {
		if( bWin ) {
			switch( e.keyCode || e.which ) {
				case N_KEY:
					NextLevel();
					break;
			}
			return;
		}

		// save old values
		oldX = x;
		oldY = y;
		oldPos = pos;
		oldValue = value;
		oldMoves = moves;

		switch( e.keyCode || e.which ) {
			case H_KEY:
			case LEFT_ARROW:
				--x;
				x = ( x < 0 ) ? 0 : x;
				++moves;
				break;
			case L_KEY:
			case RIGHT_ARROW:
				++x;
				x = ( x > cols - 1 ) ? cols - 1 : x;
				++moves;
				break;
			case K_KEY:
			case UP_ARROW:
				--y;
				y = ( y < 0 ) ? 0 : y;
				++moves;
				break;
			case J_KEY:
			case DOWN_ARROW:
				++y;
				y = ( y > rows - 1 ) ? rows - 1 : y;
				++moves;
				break;
		}

		// set current cell
		pos = x + ( y * elements );
		value = maze[ pos ];

		if( value < 1 ) {
			x = oldX;
			y = oldY;
			pos = oldPos;
			value = oldValue;
			moves = oldMoves;
			return;
		}

		// update moves counter
		document.getElementById( "moves" ).innerHTML = moves;

		// update cells
		UpdateCells();
	}, false );

	// next level
	document.getElementById( "next" ).addEventListener( "click", function( e ) {
		NextLevel();
	}, false );

}, false );

