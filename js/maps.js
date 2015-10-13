
// LANDS. A land is the name of a particular area.

var land = ["Welcome", 			//0 - same index for areas
			"Boston Harbor", 	//1 - same index for areas
			"Boston Town", 		//2 - same index for areas
			"Massachusetts",  	//3 - same index for areas
			"Mohawk Trail", 	//4 - same index for areas
			"Bath",				//5 - same index for areas
			"Genesee Country",	//6 - same index for areas
			"New Jerusalem",	//7 - same index for areas
			"Genesee River",	//8 - same index for areas
			"Fallstown"			//9 - same index for areas
			]

// x and y coordinates of player's starting position on each map
var startyx = [0, 2, 2, 4, 9, 1, 3, 1, 1, 1];
var startyy = [0, 2, 3, 2, 0, 1, 1, 0, 7, 0];

/* MAPS.  maps is an array of numbered spaces designating where you may 
move to within a particular area. Each area has its own map. */

var maps = []; // array of maps, one for each area
var spaces = []; // array of space photos, several for each area

// Initialize by setting all zones to null.
for (var i=0; i<10; i++)
{ maps[i] = null; }


// Welcome zone has a 1 x 1 map of 1 space
maps[0] = [['K']];
spaces[0] = ["url(/assets/area0/area0.jpg)"];


// Boston Harbor has a 3 x 3 map of 9 spaces
maps[1] = [];
maps[1] = 	[	['A', 'K', 'A'],
				['A', 'A', 'A'],
				['A', 'A', 'K']
		 	];

spaces[1] = ["url(/assets/area1/area1-1.jpg)",
			"url(/assets/area1/area1-2.jpg)",
			"url(/assets/area1/area1-3.jpg)",
			"url(/assets/area1/area1-4.jpg)"];

describe[1] = ["Y"
					];

// Boston Town has a 4 x 4 map of 16 spaces
maps[2] = [];
maps[2] = 	[	['A', 'K', 'A', 'K'],
				['A', 'K', 'A', 'A'],
				['A', 'A', 'A', 'A'],
				['K', 'A', 'K', 'A']
		 	];

spaces[2] = ["url(/assets/area2/area2-1.jpg)",
			"url(/assets/area2/area2-2.jpg)",
			"url(/assets/area2/area2-3.jpg)"];

// Massachusetts has a 5 x 4 map of 20 spaces
maps[3] = [];
maps[3] = 	[	['A', 'A', 'A', 'A', 'A'],
				['A', 'K', 'A', 'A', 'A'],
				['A', 'A', 'A', 'A', 'K'],
				['A', 'A', 'A', 'A', 'A']
		 	];

spaces[3] = ["url(/assets/area3/area3-1.jpg)",
			"url(/assets/area3/area3-2.jpg)",
			"url(/assets/area3/area3-3.jpg)",
			"url(/assets/area3/area3-4.jpg)",
			"url(/assets/area3/area3-5.jpg)"];

// Mohawk Trail has a 10 x 2 map of 20 spaces
maps[4] = [];
maps[4] = 	[	['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ,'K'],
				['A', 'K', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ,'A']
		 	];
spaces[4] = ["url(/assets/area4/area4-1.jpg)",
			 "url(/assets/area4/area4-2.jpg)"];

// Bath has a 3 x 3 map of 9 spaces
maps[5] = [];
maps[5] = 	[	['A', 'K', 'A'],
				['A', 'K', 'A'],
				['A', 'A', 'A']
		 	];

spaces[5] = ["url(/assets/area5/area5-1.jpg)"];

// Genesee Country has a 5 x 5 map of 25 spaces
maps[6] = [];
maps[6] = 	[	['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A']
		 	];

spaces[6] = ["url(/assets/area6/area6-1.jpg)"];

// New Jerusalem has a 3 x 3 map of 9 spaces
maps[7] = [];
maps[7] = 	[	['A', 'K', 'A'],
				['A', 'A', 'A'],
				['A', 'A', 'K'],
		 	];

spaces[7] = ["url(/assets/area7/area7-1.jpg)"];

// Genesee River has a 2 x 8 map of 16 spaces
maps[8] = [];
maps[8] = 	[	['A', 'K'],
				['A', 'A'],
				['A', 'A'],
				['A', 'A'],
				['A', 'A'],
				['A', 'A'],
				['A', 'A'],
				['A', 'A']
		 	];

spaces[8] = ["url(/assets/area8/area8-1.jpg)",
			 "url(/assets/area8/area8-2.jpg)",
			 "url(/assets/area8/area8-3.jpg)"];

// Fallstown has a 3 x 3 map of 9 spaces
maps[9] = [];
maps[9] = 	[	['A', 'K', 'A'],
				['A', 'A', 'A'],
				['A', 'A', 'K'],
		 	];

spaces[9] = ["url(/assets/area9/area9-1.jpg)",
			 "url(/assets/area9/area9-2.jpg)"];

/* AREAS - Each area[i] includes a land, a map, a set of
common monsters, and a list of friendly characters. 
The maps include key locations that activate key functions. */

var area = []; // array of area objects
var currentArea = new Object(); // assigning your current area

// what each area[i] object looks like
var ProtoArea = function(id, location, map, monsters, friendlies, startx, starty, bg)
{
	this.id = id;
	this.location = location;
	this.map = map;
	this.monsters = monsters;
	this.friendlies = friendlies;
	this.startx = startx;
	this.starty = starty;
	this.bg = bg;
	this.id = id;
	//this.landbg = landbg;
};

var startbg = [];
startbg = 	["url()",
			"url()",
			"url()",
			"url()",
			"url()",
			"url()",
			"url()",
			"url()",
			"url()",
			"url()"]



