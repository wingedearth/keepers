// Welcome to the javacript code for Light and Shadow
// a role playing game by Andrew A. Anissi

// google jquery UI for info on animation techniques



/* ****************** FUNCTIONS ********************** */

function reset(i)
{
	currentArea = area[i];
	currentPlace = [area[i].startx, area[i].starty]
	render(i);
}

function render(i)
{
	loadLand(i);
	//loadText();
	//loadAction();
}



function loadLand(i)
{
	var blah = "url(/assets/return.jpg)";
	$('body').css('background-image', area[i].bg);
	$('#location').text(currentArea.location);
}




/* ****************** MONSTERS *********************** */

function loadMonster()
{
	currentPerson = person;

	//load #photobox with background-image set to monster's bg url

	//start currentMonster's dialogue

	//if fight happens, launch battle function
		//if Carroll dies, launch game over function
		//if currentMonster dies, launch loot function
		//if Carroll retreats, reload map location without monster
}




/* ****************** GLOBAL VARIABLES *************** */


var person;
var currentPerson;
var currentPlace = [];
var monsterSet = [];
var goodGuys = [];
var currentMonster= new Object();


// assigning land name, map spaces, random monsters, 
// and friendly characters to each area[i]
for (var i=0; i<10; i++)
{ 
	area[i] = new ProtoArea(land[i], maps[i], monsterSet[i], goodGuys[i], startyx[i], startyy[i], startbg[i]); 
}

reset(0);


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

monsterSet[0] = null;
goodGuys[0] = null;

// Boston Harbor
var wharfRat = new Sprite(50, 50, "Wharf Rat", true, false, 30, 10);
var pirate = new Sprite(150, 150, "Pirate", true, false, 80, 10);
var fisherman = new Sprite(80, 80, "Drunken Fisherman", true, false, 60, 10);

var constable = new Sprite(5000, 5000, "Constable", false, false, 600, 600);
monsterSet[1] = (wharfRat, pirate, fisherman);
goodGuys[1] = constable;


// Boston Town
var robertMorris = new Sprite(	1000, 1000, "Robert Morris", false, false,
								1000, 1000);
var tavernWench = new Sprite(150, 150, "Tavern Wench", true, false, 80, 10);


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
	weap: "fists",
	defense: 50,
	magic: spells[0],
	cattack: function(enemy)
	{
		enemy.health -= 10*(this.strength);
	}
}






/* ****************** THE ACTION STARTS HERE ********* */



//draw 




