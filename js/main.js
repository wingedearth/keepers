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
var charSet = [];
var goodGuys = [];
var currentMonster;
var currentPlace = [];




// define the areas

var ProtoArea = function(location, map, monsters, friendlies)
{
	this.location = location;
	this.map = map;
	this.key = key;
	this.monsters = monsters;
	this.friendlies = friendlies;
};

for (var i=0; i<10; i++)
{
	area[i] = new ProtoArea(land[i], maps[i], charSet[i], goodGuys[i]);
}



var Sprite = function(health, maxhealth, name, hostile, store, mattack, defense)
{
	this.health = health;
	this.maxhealth = maxhealth;
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
spells[0] = "curse";


var armor = [];
armor[0] = 10;
armor[1] = 50;
armor[2] = 100;
armor[3] = 150;

var Carroll = new Object();

Carroll = 
{
	health: 1000,
	maxhealth: 1000,
	name: 	"Maj. Charles Carroll",
	strength: weapon[0],
	weap: "fists"
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




