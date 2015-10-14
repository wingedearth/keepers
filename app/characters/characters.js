
var goodGuys = []; // static, characters
var monsterSet = []; // wandering characters
var Sprite = function(health, maxhealth, name, hostile, store, strength, defense, spriteImg)
{
	this.health 	= health;
	this.maxhealth 	= maxhealth;
	this.name 		= name;
	this.hostile 	= hostile;
	this.store 		= store;
	this.strength 	= strength;
	this.defense 	= defense;
	this.spriteImg 	= spriteImg;
	mattack 		= function(enemy) 
						{
							var hit = (this.strength) - enemy.defense;
							if (hit > 0)
								enemy.health -= hit;
						}
}

// AREA 0: Welcome
var colrochester = new Sprite(100000, 100000, "Col. Nathanial Rochester", false, false, 100000, 100000, "url(/assets/nathanialrochester.jpg)");
goodGuys[0] = [colrochester];
monsterSet[0] = [null];

// AREA 1: Boston Harbor 
var wharfRat = new Sprite(50, 50, "Wharf Rat", true, false, 30, 10, "url(/assets/ages.jpg)");
var pirate = new Sprite(150, 150, "Pirate", true, false, 80, 10, "url(/assets/pirate.jpg)");
var fisherman = new Sprite(80, 80, "Drunken Fisherman", true, false, 60, 10, "url(/assets/fisherman.jpg)");
var constable = new Sprite(5000, 5000, "Constable", false, false, 600, 600, "url(/assets/constable.jpg)");
monsterSet[1] = (wharfRat, pirate, fisherman);
goodGuys[1] = [colrochester, constable];
var spaceText1 = ["You are at a wharf by the Atlantic Ocean. It smells of salt and fish.",
				  "You are by the ocean at Boston Harbor. You recently arrived from Maryland.",
				  "You are wandering around Boston Harbor. Pirates attacked your ship and robbed you.",
				  "Seagulls fly overhead. You're walking on wooden planks by Boston Harbor. Stop by the Aquarium some time!"];


// AREA 2: Boston Town
var robertMorris = new Sprite(	1000, 1000, "Robert Morris", false, false, 600, 600, "url(/assets/morris.jpg)");
var barKeep = new Sprite(1000, 1000, "Barkeep", false, false, 1000, 1000, "url(/assets/morris.jpg)");
var tavernWench = new Sprite(150, 150, "Tavern Wench", true, false, 80, 10, "url(/assets/diane.jpg)");
var cutThroat = new Sprite(150, 150, "Cut Throat", true, false, 80, 10, "url(/assets/cutthroat.jpg)");
monsterSet[2] = [tavernWench, cutThroat];
goodGuys[2] = [constable, robertMorris, barKeep, colrochester];

// AREA 2: Massachusetts
var cecil = new Sprite(200, 200, "Cecil", false, false, 600, 600, "url(/assets/cecil.jpg)");
monsterSet[3] = [cutThroat];
goodGuys[3] = [cecil];


// AREA 3: The Mohawk Trail
goodGuys[4] = [cecil];

// AREA 4: Bath
var williamson = new Sprite(5000, 5000, "Capt. Williamson", false, false, 600, 600, "url(/assets/williamson.jpg)");
goodGuys[5] = [williamson, cecil];

// AREA 5: The Genesee Country
goodGuys[6] = [cecil];

// AREA 6: New Jerusalem
var xentha = new Sprite(5000, 5000, "Xentha", false, false, 600, 600, "url(/assets/xentha.jpg)");
var ufriend = new Sprite(5000, 5000, "The Universal Friend", false, false, 600, 600, "url(/assets/ufriend.jpg)");
var elias = new Sprite(5000, 5000, "Elias", false, false, 600, 600, "url(/assets/cody.jpg)");
goodGuys[7] = [elias, ufriend, cecil, xentha];

// AREA 7: The Genesee River
var splitfoot = new Sprite(1000000, 1000000, "Splitfoot", false, false, 100000, 100000, "url(/assets/ninazu.jpg)");
var genushio = new Sprite(100000, 100000, "Col. Nathanial Rochester", false, false, 100000, 100000, "url(/assets/genushio.jpg)");
goodGuys[8] = [ufriend, splitfoot];

// AREA 8: Fallstown
var genushio = new Sprite(100000, 100000, "Col. Nathanial Rochester", false, false, 100000, 100000, "url(/assets/genushio.jpg)");
goodGuys[9] = [genushio, splitfoot];



