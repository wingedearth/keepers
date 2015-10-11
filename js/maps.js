/* MAPS.  maps is an array of numbered spaces designating where you may 
move to within a particular area. Each area has its own map. */

var maps = [];

// First set all zones to null
for (var i=0; i<10; i++)
{
	maps[i] = null;	
}

// Welcome zone of maps[0] stays as null

// Boston Harbor has a 4 x 4 map of 16 spaces
maps[1] = [];
maps[1] = 	[	['A', 'K', 'A', 'A'],
				['A', 'A', 'A', 'A'],
				['A', 'A', 'A', 'A'],
				['A', 'A', 'A', 'K']
		 	];

// Boston Town has a 4 x 4 map of 16 spaces
maps[2] = [];
maps[2] = 	[	['A', 'K', 'A', 'K'],
				['A', 'K', 'A', 'A'],
				['A', 'A', 'A', 'A'],
				['K', 'A', 'K', 'A']
		 	];

// Massachusetts has a 5 x 4 map of 20 spaces
maps[3] = [];
maps[3] = 	[	['A', 'A', 'A', 'A', 'A'],
				['A', 'K', 'A', 'A', 'A'],
				['A', 'A', 'A', 'A', 'K'],
				['A', 'A', 'A', 'A', 'A']
		 	];

// Mohawk Trail has a 10 x 2 map of 20 spaces
maps[4] = [];
maps[4] = 	[	['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ,'K'],
				['A', 'K', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ,'A']
		 	];

// Bath has a 3 x 3 map of 9 spaces
maps[5] = [];
maps[5] = 	[	['A', 'K', 'A'],
				['A', 'K', 'A'],
				['A', 'A', 'A']
		 	];


// Genesee Country has a 5 x 5 map of 25 spaces
maps[6] = [];
maps[6] = 	[	['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A'],
				['A', 'K', 'A', 'A']
		 	];

// New Jerusalem has a 3 x 3 map of 9 spaces
maps[7] = [];
maps[7] = 	[	['A', 'K', 'A'],
				['A', 'A', 'A'],
				['A', 'A', 'K'],
		 	];

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

// Fallstown has a 3 x 3 map of 9 spaces
maps[9] = [];
maps[9] = 	[	['A', 'K', 'A'],
				['A', 'A', 'A'],
				['A', 'A', 'K'],
		 	];