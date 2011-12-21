var mazes = [
	{ "x": 1, "y" : 2, 
	  "path" : [       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 2, 0, 0, 0, 0, 0, 0,
		0, 1, 1, 1, 0, 0, 0, 0,
		0, 0, 0, 1, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 0, 0,
		0, 0, 0, 0, 0, 1, 0, 0,
		0, 0, 0, 0, 0, 1, 3, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	] },
	{ "x" : 1, "y" : 2,
	  "path": [       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 1, 0,
		0, 2, 0, 0, 1, 0, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 0, 1, 0, 0,
		0, 3, 0, 1, 0, 1, 1, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	] },
	{ "x" : 1, "y" : 2,
	  "path" : [       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 3, 0,
		0, 2, 0, 0, 0, 1, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 0, 1, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	] },
	{ "x" : 1, "y" : 2,
	  "path" : [       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 3, 1, 1, 1, 0,
		0, 2, 0, 0, 0, 0, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 0, 1, 1, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	] }
];

var nCurrentMaze = 0;

var GetRandom = function( max ) {
	return Math.floor( max * Math.random() );
}

self.onmessage = function( e ) {
	var rnd = GetRandom( mazes.length );
	self.postMessage( { "rnd" : rnd, "maze" : mazes[ rnd ] } );
}
