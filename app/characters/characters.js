console.log('app/characters/characters.js has awakened.....');


var Character = function(options) {

	this.health 			= options.health;
	this.fullHealth 		= options.health;
	this.name 				= options.name;
	this.isHostile 			= options.isHostile;
	this.isMerchant 		= options.isMerchant;
	this.strength 			= options.strength;
	this.defense 			= options.defense;
	this.image 				= options.image;
	this.items				= options.items;
	this.keyExchangeIndex 	= options.keyExchangeIndex;
};

app.characters = {
	
	// Col. Nathanial Rochester
	colrochester: new Character({
		health:     100000,
		name: 		"Col. Nathanial Rochester",
		isHostile:  false,
		isMerchant: false,
		strength:   100000,
		defense:    100000,
		image:      "/app/characters/assets/nathanialrochester.jpg",
		keyImage:   null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Pirate
	pirate: new Character({
		health:     100,
		name: 		"Pirate",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    10,
		image:      "/app/characters/assets/pirate.jpg",
		keyImage:   null,
		items:      ["dagger"],
		keyExchangeIndex: 2
	}),

	// Wharf Rat
	wharfRat: new Character({
		health:     50,
		name: 		"Wharf Rat",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    10,
		image:      "/app/characters/assets/wharfrat.jpg",
		keyImage:   null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Drunken Fisherman
	fisherman: new Character({
		health:     120,
		name: 		"Drunken Fisherman",
		isHostile:  true,
		isMerchant: false,
		strength:   60,
		defense:    10,
		image:      "/app/characters/assets/fisherman.jpg",
		keyImage:   null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Cut Throat
	cutthroat: new Character({
		health:     120,
		name: 		"Cut Throat",
		isHostile:  true,
		isMerchant: false,
		strength:   60,
		defense:    10,
		image:      "/app/characters/assets/cutthroat.jpg",
		keyImage:   null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Constable
	constable: new Character({
		health:     5000,
		name: 		"Constable",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/constable.jpg",
		keyImage:   null,
		items:      ["new clothes"],
		keyExchangeIndex: 0
	}),

	// Guard
	guard: new Character({
		health:     3000,
		name: 		"Guard",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/guard.jpg",
		keyImage:   null,
		items:      ["musket"],
		keyExchangeIndex: 0
	}),

	// Robert Morris
	robertMorris: new Character({
		health:     1000,
		name: 		"Robert Morris",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/morris.jpg",
		keyImage:   "/app/characters/assets/governorsmansion.jpg",
		items:      ["mission"],
		keyExchangeIndex: 0
	}),

	// Tavern Wench
	tavernwench: new Character({
		health:     150,
		name: 		"Tavern Wench",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    20,
		image:      "/app/characters/assets/tavernwench.jpg",
		keyImage:   null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Barkeep
	barkeep: new Character({
		health:     1000,
		name: 		"Barkeep",
		isHostile:  false,
		isMerchant: true,
		strength:   100,
		defense:    100,
		image:      "/app/characters/assets/barkeep.jpg",
		keyImage: 	"/app/characters/assets/greendragon.jpg", 
		items:      ["Harpoon IPA", "Sam Adams"],
		keyExchangeIndex: 0
	}),

	// Apothecary
	apothecary: new Character({
		health:     1000,
		name: 		"Apothecary",
		isHostile:  false,
		isMerchant: true,
		strength:   100,
		defense:    100,
		image:      "/app/characters/assets/apothecary.jpg",
		keyImage: 	"/app/characters/assets/apothecarystore.jpg", 
		items:      ["healing potion", "curse"],
		keyExchangeIndex: 0
	}),

	// Cecil
	cecil: new Character({
		health:     300,
		name: 		"Cecil",
		isHostile:  false,
		isMerchant: false,
		strength:   500,
		defense:    500,
		image:      "/app/characters/assets/cecil.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Mohawk Scout
	mohawkscout: new Character({
		health:     200,
		name: 		"Mohawk Scout",
		isHostile:  true,
		isMerchant: false,
		strength:   150,
		defense:    150,
		image:      "/app/characters/assets/mohawkscout.jpg",
		keyImage: 	null,
		items:      ["musket"],
		keyExchangeIndex: 0
	}),

	// Tory
	tory: new Character({
		health:     250,
		name: 		"Tory",
		isHostile:  true,
		isMerchant: false,
		strength:   175,
		defense:    175,
		image:      "/app/characters/assets/tory.jpg",
		keyImage: 	null,
		items:      ["flint-lock rifle"],
		keyExchangeIndex: 0
	}),

	// Williamson
	williamson: new Character({
		health:     5000,
		name: 		"Capt. Williamson",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/williamson.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Peregrine Fitzhugh
	fitzhugh: new Character({
		health:     5000,
		name: 		"Peregrine Fitzhugh",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/fitzhugh.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Elias
	elias: new Character({
		health:     5000,
		name: 		"Elias",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/elias.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// The Universal Friend
	ufriend: new Character({
		health:     5000,
		name: 		"The Universal Friend",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/assets/ufriend.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Xentha
	xentha: new Character({
		health:     800,
		name: 		"Xentha",
		isHostile:  true,
		isMerchant: false,
		strength:   100,
		defense:    100,
		image:      "/app/characters/assets/xentha.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Splitfoot
	splitfoot: new Character({
		health:     1000000,
		name: 		"Splitfoot",
		isHostile:  false,
		isMerchant: false,
		strength:   1000000,
		defense:    1000000,
		image:      "/app/characters/assets/splitfoot.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	})
};


/* *******************   EXCHANGES   ************************* */

// Define Exchange Constructicon
var Exchange = function(options) {
	this.msg 		         = options.msg;
	this.responses 	         = options.responses;
}

Exchange.prototype.action = function() {
	// this is the stub...
	console.log(this.msg);
}

var isKey;
var fight = 0;




/* *******************   BATTLES   ************************* */

function melee(enemy) {

	$('#textbox').text("BATTLE!");

	// player attacks
	alert("you attack!");
	enemy.health = 0 // enemy dies (temporary)

	if (enemy.health > 0) {
		// if still alive, character attacks
		$('#textbox').append("<br><br><u>Health:</u><br>Charles Carroll: " + app.carroll.health + "<br>" + character.name + ": " + character.health + " ");
		alert(enemy.name + " attacks!");

	} else {
		$('#textbox').append("<br><br><u>Health:</u><br>Charles Carroll: " + app.carroll.health + "<br>" + character.name + ": " + character.health + " ");
		alert(enemy.name + " is dead!");
		
		loot(enemy);
		enemy.keyExchangeIndex = 0;
		enemy.health = enemy.fullhealth;
		(app.carroll.area.map[app.carroll.location[0]][app.carroll.location[1]]) = null;
		fight = 0;
	}
}


function retreat(enemy) {

	var testRetreat = Math.floor(Math.random()*2);
	if (testRetreat == 1) {
		alert("Retreat was unsuccessful. Sorry, Charlie.")
		return;

	} else { // if retreat is successfull:
		// reset enemy, remove key from location, and end fight
		enemy.keyExchangeIndex = 0;
		enemy.health = enemy.fullHealth;
		(app.carroll.area.map[app.carroll.location[0]][app.carroll.location[1]]) = null;
		fight = 0;
	}
}

function loot(enemy) {
	if ((enemy.items[0] != undefined) && (enemy.items[0] != null)) {
		alert("You received an item: " + enemy.items[0]);
		var newItem = enemy.items.pop();
		app.carroll.items.push(newItem);
		if ("dagger" in app.carroll.items) {
			app.carroll.attack.strength = 100;
		}

	}
}


/* *******************   MOVEMENT   ************************* */

var $nbtn = $('<li>', {text: "NORTH", class: "clickable"});
var $wbtn = $('<li>', {text: "WEST", class: "clickable"});
var $ebtn = $('<li>', {text: "EAST", class: "clickable"});
var $sbtn = $('<li>', {text: "SOUTH", class: "clickable"});


/* **********   INDIVIDUAL CHARACTER EXCHANGES   ************* */

	// COL. ROCHESTER'S EXCHANGES
app.characters.colrochester.exchanges = [
    // 0
	new Exchange({
		msg: '<p><center><span id="maintitle">Keepers of the Western Door</span> \
		     <br><br>a game of honor and magic<br>in the historic    \
		     American Northeast<br><br>&copy; 2015 Andrew A. Anissi  \
		     </center></p>',
		
		responses: [{
			button: "Start",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 1;
				render();
			}
		}, {
			button: "Continue",
			respond: function() {
				console.log("CONTINUE");
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>Good morning, Charles. You are finally awake. \
		     I'm afraid our ship from Maryland was attacked by pirates. \
		     You took a nasty hit to the head, but I see no sign of \
		     permanent damage. Do you remember where you are?</p>",
		
		responses: [{
			button: "I do not remember.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 2;
				render();	
			}
		}, {
			button: "Who are you?",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 2;
				render();
			}
		}]
	}),

	// 2
	new Exchange({
		msg: "<p>I am your friend, Col. Nathanial Rochester.\
		I accompanied you from Maryland to introduce you to \
		Mr. Robert Morris, presently staying here in \
		Boston, Massachusetts. You recently inherited a vast estate,\
		but you lack the funds to sustain it. Mr. Morris is the \
		richest man in America in 1791 and can provide the financing you need\
		to get your house in order.<br>Are you ready to disembark?</p>",
		
		responses: [{
			button: "I am ready, Sir.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 4;
				render();
			}
		}, {
			button: "Sure, whatever.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 4;
				render();
			}
		}, {
			button: "No, I think I'll stay right here.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 3;
				render();
			}
		}]
	}),

	// 3

	new Exchange({
		msg: "<p>I am here to help you, Major Carroll. I ask you again, \
			 are you ready to leave this ship and enter Boston Town?</p>",
		
		responses: [{
			button: "I am ready, Sir.",
			respond: function() {
				console.log("Yes");
				app.characters.colrochester.keyExchangeIndex = 4;
				render();
			}
		},  {
			button: "Fo Sheezy!",
			respond: function() {
				console.log("for sure.");
				app.characters.colrochester.keyExchangeIndex = 4;
				render();
			}
		}]
	}),

	// 4

	new Exchange({
		msg: "<p>Let's be on our way then...<br>Oh no, look out! They're back!"
		+ " It's a pirate!</p>",
		
		responses: [{
			button: "I am not afraid.",
			respond: function() {
				console.log("Yes");
				app.characters.colrochester.keyExchangeIndex = 5;
				app.carroll.arriveAt(app.areas[1]);
				render();
			}
		},  {
			button: "I'll mop the floor with this clown.",
			respond: function() {
				console.log("for sure.");
				app.characters.colrochester.keyExchangeIndex = 5;
				app.carroll.arriveAt(app.areas[1]);
				render();
			}
		}]
	}),

	// 5

	new Exchange({
		msg: "<p>Well done, lad! And serves him right, bloody pirate.\
			 I only wish I could have helped you in this fight, but...\
			 well...I suppose you have been polite enough not to\
			 mention my aged appearance.</p>",
		
		responses: [{
			button: "What are you talking about?",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 7;
				render();
			}
		},  {
			button: "Nah...you look fine.",
			respond: function() {
				console.log("who?");
				app.characters.colrochester.keyExchangeIndex = 7;
				render();
			}
		}]
	}),

	// 6

	new Exchange({
		msg: "<p>Tis good to be back in Boston. I remember my time here\
			 with General Washington, driving the Redcoats back into the\
			 ocean. But let's stay focused. You must find Robert Morris.\
			 He is an important man, just named by the President to be\
			 the first Superintendent of Finance of the United States!\
			 You will find Mr. Morris at the Governor's Mansion.</p>",
		
		responses: [{
			button: "Thank you Colonel. Let's be on our way.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 6;
				app.carroll.area.map[3][2] = null;
				app.carroll.moveTo([2, 2]);
				fight = 0;
				render();
			}
		},  {
			button: "You're a very helpful ghost.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 6;
				app.carroll.area.map[3][2] = null;
				fight = 0;
				render();
			}
		}]
	}),

	// 7

	new Exchange({
		msg: "<p>I am not the Nathanial Rochester you know. Or I am,\
			 but rather have lived long after 1791. I have lived...\
			 and then I have left Time. The Nathanial Rochester you know\
			 is still in Maryland. He will live many years, and then he \
			 will leave Time, and then he will be me. As a spirt Out of\
			 Time...yes a ghost if you will. I have come to help you now.</p>",
		
		responses: [{
			button: "You're...a ghost?",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 8;
				render();
			}
		},  {
			button: "What do you want with me?",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 8;
				render();
			}
		},
			{
			button: "That is fascinating, albeit alarming. But I trust you.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 8;
				render();
			}
		}]
	}),

	// 8

	new Exchange({
		msg: "<p>I appear old to you, because my self-image continues\
			 to be that of an old man. With the right discipline, however, I can\
			 appear in any form. I have come to you now because your\
			 quest is far more important that you know. There is\
			 much I cannot reveal to you now, but I will help to guide you.</p>",
		
		responses: [{
			button: "Thank you, Colonel.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 6;
				app.carroll.area.map[2][2] = null;
				render();
			}
		},  {
			button: "You're the ghost with the most.",
			respond: function() {
				app.characters.colrochester.keyExchangeIndex = 6;
				app.carroll.area.map[2][2] = null;
				render();
			}
		}]
	})

];

// PIRATE'S EXCHANGES
app.characters.pirate.exchanges = [

    // 0
	new Exchange({
		msg: "<p>Ahoy, matey! You survived our attack! But \
	  	 not for long!</p>",
	
		responses: [{
			button: "FIGHT!",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 1;
				fight = 1;
				render();
			}
		},	
		]
	}),

	// 1
	new Exchange({
		msg: "<p>Avast! We don't parlay, we kill!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 1;
				melee(app.characters.pirate);

				render();
			}
		},	
		{
			button: "RETREAT!",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 1;
				retreat(app.characters.pirate);
				render();
			}
		}]
	}),

	// 2
	new Exchange({
		msg: "<p>Well well well, if it isn't the bilge-sucking landlubber\
			 from Mary Land! Off to call the constable on us, are ye?\
			 Ye scallywag won't make it two planks before I cleave\
			 ye to the brisket and send ye down to Davy Jones' Locker.</p>",
	
		responses: [{
			button: "Have we met?",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 3;
				render();
			}
		},	
		{
			button: "Die, pirate scum!",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 4;
				render();
			}
		},
		{
			button: "Nice costume. I'll be going as a ninja.",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 3;
				render();
			}
		}]
	}),

		// 3
	new Exchange({
		msg: "<p>Don't tell me ye've forgotten us already, bucko.\
			 Can't be too surprised, I suppose. Twas me knocked\
			 you upside the head, I did. No matter, you'll be\
			 be feedin' the fish before you can say,\
			 yo ho ho!</p>",
	
		responses: [{
			button: "No one talks to me like that.",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 4;
				render();
			}
		},	
		{
			button: "I'm a lover not a fighter. No wait, I'm a fighter.",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 4;
				render();
			}
		}]
	}),

		// 4
	new Exchange({
		msg: "<p>Avast, dog!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				app.characters.pirate.keyExchangeIndex = 4;
				melee(app.characters.pirate);
				if (fight == 0) {
					app.characters.colrochester.keyExchangeIndex = 5;
					app.carroll.area.map[2][2] = app.characters.colrochester;
				}
				render();
			}
		}]
	})	
];

// WHARF RAT'S EXCHANGES
app.characters.wharfRat.exchanges = [

    // 0
	new Exchange({
		msg: "<p>EEK! EEK! HISS! KILL!</p>",
	
		responses: [{
			button: "FIGHT!",
			respond: function() {
				console.log("fight");
				app.characters.wharfRat.keyExchangeIndex = 1;
				fight = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>EEK! EEK! HISSSSSSSSSS!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				console.log("Attack");
				app.characters.wharfRat.keyExchangeIndex = 1;
				melee(app.characters.wharfRat);
				render();
			}
		}, {
			button: "RETREAT!",
			respond: function() {
				console.log("Retreat");
				app.characters.wharfRat.keyExchangeIndex = 1;
				retreat(app.character.wharfRat);
				render();
			}
		}]
	})	
];

// DRUNKEN FISHERMAN INTERACTIONS
app.characters.fisherman.exchanges = [

    // 0
	new Exchange({
		msg: "<p>I know what you did last summer!</p>",
	
		responses: [{
			button: "FIGHT!",
			respond: function() {
				console.log("fight");
				app.characters.fisherman.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>Wicked Pissah!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				console.log("Attack");
				app.characters.fisherman.keyExchangeIndex = 1;
				melee(app.characters.fisherman);
				render();
			}
		}, {
			button: "RETREAT!",
			respond: function() {
				console.log("Retreat");
				app.characters.fisherman.keyExchangeIndex = 1;
				retreat(app.character.fisherman);
				render();
			}
		}]
	})	
];

// CONSTABLE INTERACTIONS
app.characters.constable.exchanges = [

    // 0
	new Exchange({
		msg: "<p>Good day to you, sir. I am Constable Barney.</p>",
	
		responses: [{
			button: "Good day, Constable.",
			respond: function() {
				console.log("gday");
				app.characters.constable.keyExchangeIndex = 1;
				render();
			}
		},
		{
			button: "Which way to Boston Town?",
			respond: function() {
				console.log("whichway");
				app.characters.constable.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "Right this way to Boston Town.",
	
		responses: [{
			button: "I am much obliged to you, Constable.",
			respond: function() {
				console.log("Attack");
				app.characters.constable.keyExchangeIndex = 1;
				app.carroll.arriveAt(app.areas[2]);
				render();
			}
		}, {
			button: "Time for some chowdah!",
			respond: function() {
				console.log("chowdah");
				app.characters.constable.keyExchangeIndex = 1;
				app.carroll.arriveAt(app.areas[2]);
				render();
			}
		}]
	})	
];

// TAVERN WENCH'S EXCHANGES
app.characters.tavernwench.exchanges = [

    // 0
	new Exchange({
		msg: "<p>'Ello, dearie! Would you spare some coin? I spent\
			 all my silver at a local tavern called Cheers.'</p>",
	
		responses: [{
			button: "No, leave me alone.",
			respond: function() {
				app.characters.tavernwench.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>I'll make you regret your lack of charity!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				melee(app.characters.tavernwench);
				render();
			}
		}, {
			button: "RETREAT!",
			respond: function() {
				console.log("Retreat");
				retreat(app.character.tavernwench);
				render();
			}
		}]
	})	
];

// CUT THROAT'S EXCHANGES
app.characters.cutthroat.exchanges = [

    // 0
	new Exchange({
		msg: "<p>Would you care for a cut, governah? Your throat perhaps?</p>",
	
		responses: [{
			button: "No, leave me alone.",
			respond: function() {
				app.characters.cutthroat.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>Too bad! I'll cut it anyway!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				app.characters.cutthroat.keyExchangeIndex = 1;
				melee(app.characters.cutthroat);
				render();
			}
		}, {
			button: "RETREAT!",
			respond: function() {
				console.log("Retreat");
				app.characters.cutthroat.keyExchangeIndex = 1;
				retreat(app.character.cutthroat);
				render();
			}
		}]
	})	
];

// BARKEEP'S EXCHANGES
app.characters.barkeep.exchanges = [

    // 0
	new Exchange({
		msg: "<p>Good day to you, Sir. The bar's closed now, I'm afraid.</p>",
	
		responses: [{
			button: "Why is the bar closed?",
			respond: function() {
				app.characters.barkeep.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>My character hasn't really been set up yet. Sorry\
			  about that, chief. You'd think someone would set up Sam Malone\
			  before Diane.</p>",
	
		responses: [{
			button: "Goodbye then.",
			respond: function() {
				app.characters.barkeep.keyExchangeIndex = 1;
				app.carroll.moveTo([2, 1]);
				render();
			}
		}]
	})	
];

// ROBERT MORRIS' EXCHANGES
app.characters.robertMorris.exchanges = [

    // 0
	new Exchange({
		msg: "<p>Welcome, Mr. Carroll. I say welcome, because the Governor \
		has made me feel so at home here in his mansion. Wait...</p>",
	
		responses: [{
			button: "What's wrong?",
			respond: function() {
				app.characters.robertMorris.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>Now's not a good time. My character hasn't really been created yet. Raincheck?</p>",
	
		responses: [{
			button: "Ok, goodbye then.",
			respond: function() {
				app.characters.robertMorris.keyExchangeIndex = 1;
				app.carroll.moveTo([0, 2]);
				render();
			}
		}]
	})	
];

// APOTHECARY'S EXCHANGES
app.characters.apothecary.exchanges = [

    // 0
	new Exchange({
		msg: "<p>Hello there, Sir, and welcome. I am the apothecary.</p>",
	
		responses: [{
			button: "Hi there. What do you have for sale?",
			respond: function() {
				app.characters.apothecary.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>Now's not a good time. My character hasn't really been created yet. Raincheck?</p>",
	
		responses: [{
			button: "Ok, goodbye then.",
			respond: function() {
				app.characters.apothecary.keyExchangeIndex = 1;
				app.carroll.moveTo([0, 2]);
				render();
			}
		}]
	})	
];

// TORY'S EXCHANGES
app.characters.tory.exchanges = [

    // 0
	new Exchange({
		msg: "<p>This land will soon return to the Crown, and the traitors\
			  will be defeated. Are you with us, brother?</p>",
	
		responses: [{
			button: "No, leave me alone.",
			respond: function() {
				app.characters.tory.keyExchangeIndex = 1;
				render();
			}
		}]
	}),

	// 1
	new Exchange({
		msg: "<p>You rebel scum. God save the King!</p>",
	
		responses: [{
			button: "ATTACK!",
			respond: function() {
				melee(app.characters.tory);
				render();
			}
		}, {
			button: "RETREAT!",
			respond: function() {
				console.log("Retreat");
				retreat(app.character.tory);
				render();
			}
		}]
	})	
];
