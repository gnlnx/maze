var mazes = [
	[       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 2, 0, 0, 0, 0, 0, 0,
		0, 1, 1, 1, 0, 0, 0, 0,
		0, 0, 0, 1, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 0, 0,
		0, 0, 0, 0, 0, 1, 0, 0,
		0, 0, 0, 0, 0, 1, 3, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	],
	[       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 1, 0,
		0, 2, 0, 0, 1, 0, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 0, 1, 0, 0,
		0, 3, 0, 1, 0, 1, 1, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	],
	[       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 1, 0,
		0, 2, 0, 0, 0, 1, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 0, 1, 3, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	],
	[       //0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 1, 0,
		0, 2, 0, 0, 0, 0, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 0, 1, 3, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
	],

];

var GetRandom = function( max ) {
	return parseInt( max * Math.random() );
}

self.onmessage = function( e ) {
	var rnd = GetRandom( mazes.length );
	self.postMessage( { "rnd" : rnd, "maze" : mazes[ rnd ] } );
}
