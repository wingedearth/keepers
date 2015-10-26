console.log('app/characters/characters.js has awakened.....');


var Character = function(options) {

	this.health 			= options.health;
	this.fullHealth 	= options.health;
	this.name 				= options.name;
	this.isHostile 		= options.isHostile;
	this.isMerchant 	= options.isMerchant;
	this.strength 		= options.strength;
	this.defense 			= options.defense;
	this.image 				= options.image;
	this.items				= options.items;
	this.keyExchangeIndex = options.keyExchangeIndex;
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
		image:      "app/characters/assets/nathanialrochester.jpg",
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
		image:      "app/characters/assets/pirate.jpg",
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
		image:      "app/characters/assets/wharfrat.jpg",
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
		image:      "app/characters/assets/fisherman.jpg",
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
		image:      "app/characters/assets/cutthroat.jpg",
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
		image:      "app/characters/assets/constable.jpg",
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
		image:      "app/characters/assets/guard.jpg",
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
		image:      "app/characters/assets/morris.jpg",
		keyImage:   "app/characters/assets/governorsmansion.jpg",
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
		image:      "app/characters/assets/tavernwench.jpg",
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
		image:      "app/characters/assets/barkeep.jpg",
		keyImage: 	"app/characters/assets/greendragon.jpg",
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
		image:      "app/characters/assets/apothecary.jpg",
		keyImage: 	"app/characters/assets/apothecarystore.jpg",
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
		image:      "app/characters/assets/cecil.jpg",
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
		image:      "app/characters/assets/mohawkscout.jpg",
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
		image:      "app/characters/assets/tory.jpg",
		keyImage: 	null,
		items:      ["flint-lock rifle"],
		keyExchangeIndex: 0
	}),

	// Seneca Scout
	senecascout: new Character({
		health:     350,
		name: 		"Seneca Scout",
		isHostile:  true,
		isMerchant: false,
		strength:   250,
		defense:    250,
		image:      "app/characters/assets/senecascout.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Seneca Warrior
	senecascout: new Character({
		health:     350,
		name: 		"Seneca Warrior",
		isHostile:  true,
		isMerchant: false,
		strength:   250,
		defense:    250,
		image:      "app/characters/assets/senecawarrior.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Seneca Shaman
	senecascout: new Character({
		health:     350,
		name: 		"Seneca Warrior",
		isHostile:  true,
		isMerchant: false,
		strength:   250,
		defense:    250,
		image:      "app/characters/assets/senecashaman.jpg",
		keyImage: 	null,
		items:      [],
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
		image:      "app/characters/assets/williamson.jpg",
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
		image:      "app/characters/assets/fitzhugh.jpg",
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
		image:      "app/characters/assets/elias.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Female Friend
	friend1: new Character({
		health:     500,
		name: 		"A Friend",
		isHostile:  false,
		isMerchant: false,
		strength:   200,
		defense:    200,
		image:      "app/characters/assets/friend1.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Couple of Universal Friends
	friends: new Character({
		health:     500,
		name: 		"Society of Universal Friends",
		isHostile:  false,
		isMerchant: false,
		strength:   250,
		defense:    250,
		image:      "app/characters/assets/friends.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// The Publick Universal Friend
	ufriend: new Character({
		health:     5000,
		name: 		"The Universal Friend",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "app/characters/assets/ufriend.jpg",
		keyImage: 	"app/areas/newjerusalem/assets/friendhouse.jpg",
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
		image:      "app/characters/assets/xentha.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// The Genesee Fever
	fever: new Character({
		health:     1000000,
		name: 		"Genesee Fever",
		isHostile:  false,
		isMerchant: false,
		strength:   1000000,
		defense:    1000000,
		image:      "app/characters/assets/fever.jpg",
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
		image:      "app/characters/assets/splitfoot.jpg",
		keyImage: 	null,
		items:      [],
		keyExchangeIndex: 0
	}),

	// Genushio
	genushio: new Character({
		health:     1000000,
		name: 		"Genushio",
		isHostile:  false,
		isMerchant: false,
		strength:   1000000,
		defense:    1000000,
		image:      "app/characters/assets/genushio.jpg",
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
		app.carroll.fight = 0;
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
		app.carroll.fight = 0;
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
				app.carroll.fight = 1;
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
