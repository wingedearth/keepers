// Welcome to the javacript code for Light and Shadow
// a role playing game by Andrew A. Anissi

// google jquery UI for info on animation techniques



/* ****************** FUNCTIONS ********************** */

function reset()
{
	currentArea = area[0];
}

function loadLand(landnumber)
{
	// load land's background image
	//$('body').css(background-image, $backImage[landnumber]);

	// load land's locationbox, textbox, and actionbox elements
}




/* ****************** MONSTERS *********************** */

function loadMonster (monster)
{
	//set currentMonster to monster;

	//load #photobox with background-image set to monster's bg url

	//start currentMonster's dialogue

	//if fight happens, launch battle function
		//if Carroll dies, launch game over function
		//if currentMonster dies, launch loot function
		//if Carroll retreats, reload map location without monster
}




/* ****************** GLOBAL VARIABLES *************** */

var area = [];
var currentArea = new Object();
var mapKeys = [];
var charSet = [];
var goodGuys = [];
var currentMonster;


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

// define the areas

var ProtoArea = function(location, map, key, monsters, friendlies)
{
	this.location = location;
	this.map = map;
	this.key = key;
	this.monsters = monsters;
	this.friendlies = friendlies;
};

for (var i=0; i<10; i++)
{
	area[i] = new ProtoArea(land[i], maps[i], mapKeys[i], charSet[i], goodGuys[i]);
}



var Sprite = function(health, maxhealth, name, hostile, store, mattack, defense)
{
	this.health = health;
	thismaxhealth = maxhealth;
	this.name = name;
	this.hostile = hostile;
	this.store = store;
	this.mattack = mattack;
	this.defense = defense;
}


var weapon = [];
weapon[0] = 50;
weapon[1] = 100;
weapon[2] = 200;
weapon[3] = 300;

var spells = [];
spells[0] = 0;

var armor = [];
armor[0] = 1;

var Carroll = new Object();

Carroll = 
{
	health: 1000,
	name: 	"Maj. Charles Carroll",
	strength: weapon[0],
	defense: 50,
	magic: spells[0],
	cattack: function(enemy) 
	{
		enemy.health -= 10*(this.strength);
	}
}



var wharfrat = new Sprite(50, 50, "Wharf Rat", true, false, 30, 10);


/* ****************** THE ACTION STARTS HERE ********* */



//draw 




