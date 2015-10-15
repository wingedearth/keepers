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
		keyExchangeIndex: 0
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

var currentChar;
var isKey;
var fight = 0;

/* *******************   BATTLES   ************************* */

function melee() {
	// player attacks
	currentChar = app.carroll.currentChar();
	currentChar.health = 0 // enemy dies (temporary)

	if (currentChar.health > 0) {
		// if still alive, currentChar attacks
	} else {
		currentChar.keyExchangeIndex = 0;
		currentChar = area.defaultNPC;
	}
}

function retreat() {
	var testRetreat = Math.floor(Math.random()*2);
	if (testRetreat == 1) {
		return;
	} else { // if retreat is successfull:
		currentChar.keyExchangeIndex = 0;
		currentChar = area.defaultNPC;
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
				console.log("START");
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
		     <br>I'm afraid our ship from Maryland was attacked by pirates.\
		     <br>You took a nasty hit to the head, but I see no sign of \
		     permanent damage. <br>Do you remember where you are?</p>",
		
		responses: [{
			button: "I do not remember.",
			respond: function() {
				console.log("No");
				app.characters.colrochester.keyExchangeIndex = 2;
				render();	
			}
		}, {
			button: "Who are you?",
			respond: function() {
				console.log("who?");
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
				console.log("Yes");
				app.characters.colrochester.keyExchangeIndex = 4;
				app.carroll.arriveAt(app.areas[1]);
				render();
			}
		}, {
			button: "Sure, whatever.",
			respond: function() {
				console.log("sure");
				app.characters.colrochester.keyExchangeIndex = 4;
				app.carroll.arriveAt(app.areas[1]);
				render();
			}
		}, {
			button: "No, I think I'll stay right here.",
			respond: function() {
				console.log("nope.");
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
				app.carroll.arriveAt(app.areas[1]);
				render();
			}
		},  {
			button: "Fo Sheezy!",
			respond: function() {
				console.log("for sure.");
				app.characters.colrochester.keyExchangeIndex = 4;
				app.carroll.arriveAt(app.areas[1]);
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
				console.log("FIGHT");
				app.characters.pirate.keyExchangeIndex = 1;
				render();
			}
		},	
		]
	}),

	// 1
	new Exchange({
		msg: "<p>Avast!</p>",
	
		responses: [{
			button: "BLAH!",
			respond: function() {
				console.log("BLAH");
				app.characters.pirate.keyExchangeIndex = 2;
				render();
			}
		},	
		{
			// button: "second button text",
			// respond: function() {
				// change keyExchangeIndex
				// other stuff happens
				// render();
			//}
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
				melee();
				render();
			}
		}, {
			button: "RETREAT!",
			respond: function() {
				console.log("Retreat");
				app.characters.wharfRat.keyExchangeIndex = 1;
				retreat();
				render();
			}
		}]
	})	
];
