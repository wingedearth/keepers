console.log('app/characters/characters.js is now loaded.....');


var Character = function(options) {

	this.health 	= options.health;
	this.fullHealth = options.health;
	this.name 		= options.name;
	this.isHostile 	= options.isHostile;
	this.isMerchant = options.isMerchant;
	this.strength 	= options.strength;
	this.defense 	= options.defense;
	this.image 		= options.image;
	this.items		= options.items;
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
		image:      "/app/characters/nathanialrochester.jpg",
		keyImage:   null,
		items:      []
	}),

	// Pirate
	pirate: new Character({
		health:     100,
		name: 		"Pirate",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    10,
		image:      "/app/characters/pirate.jpg",
		keyImage:   null,
		items:      ["dagger"]
	}),

	// Wharf Rat
	wharfRat: new Character({
		health:     50,
		name: 		"Wharf Rat",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    10,
		image:      "/app/characters/wharfrat.jpg",
		keyImage:   null,
		items:      []
	}),

	// Drunken Fisherman
	fisherman: new Character({
		health:     120,
		name: 		"Drunken Fisherman",
		isHostile:  true,
		isMerchant: false,
		strength:   60,
		defense:    10,
		image:      "/app/characters/fisherman.jpg",
		keyImage:   null,
		items:      []
	}),

	// Constable
	constable: new Character({
		health:     5000,
		name: 		"Constable",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/constable.jpg",
		keyImage:   null,
		items:      ["new clothes"]
	}),

	// Robert Morris
	robertMorris: new Character({
		health:     1000,
		name: 		"Robert Morris",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/morris.jpg",
		keyImage:   "/app/characters/governorsmansion.jpg",
		items:      ["mission"]
	}),

	// Tavern Wench
	tavernwench: new Character({
		health:     150,
		name: 		"Tavern Wench",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    20,
		image:      "/app/characters/tavernwench.jpg",
		keyImage:   null,
		items:      []
	}),

	// Barkeep
	barkeep: new Character({
		health:     1000,
		name: 		"Barkeep",
		isHostile:  false,
		isMerchant: true,
		strength:   100,
		defense:    100,
		image:      "/app/characters/barkeep.jpg",
		keyImage: 	"/app/characters/greendragon.jpg", 
		items:      ["Harpoon IPA", "Sam Adams"]
	}),

	// Apothecary
	apothecary: new Character({
		health:     1000,
		name: 		"Apothecary",
		isHostile:  false,
		isMerchant: true,
		strength:   100,
		defense:    100,
		image:      "/app/characters/apothecary.jpg",
		keyImage: 	"/app/characters/apothecarystore.jpg", 
		items:      ["healing potion", "curse"]
	}),

	// Cecil
	cecil: new Character({
		health:     300,
		name: 		"Cecil",
		isHostile:  false,
		isMerchant: false,
		strength:   500,
		defense:    500,
		image:      "/app/characters/cecil.jpg",
		keyImage: 	null,
		items:      []
	}),

	// Mohawk Scout
	mohawkscout: new Character({
		health:     200,
		name: 		"Mohawk Scout",
		isHostile:  true,
		isMerchant: false,
		strength:   150,
		defense:    150,
		image:      "/app/characters/mohawkscout.jpg",
		keyImage: 	null,
		items:      ["musket"]
	}),

	// Tory
	tory: new Character({
		health:     250,
		name: 		"Tory",
		isHostile:  true,
		isMerchant: false,
		strength:   175,
		defense:    175,
		image:      "/app/characters/tory.jpg",
		keyImage: 	null,
		items:      ["flint-lock rifle"]
	}),

	// Williamson
	williamson: new Character({
		health:     5000,
		name: 		"Capt. Williamson",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/williamson.jpg",
		keyImage: 	null,
		items:      []
	}),

	// Peregrine Fitzhugh
	fitzhugh: new Character({
		health:     5000,
		name: 		"Peregrine Fitzhugh",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/fitzhugh.jpg",
		keyImage: 	null,
		items:      []
	}),

	// Elias
	elias: new Character({
		health:     5000,
		name: 		"Elias",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/elias.jpg",
		keyImage: 	null,
		items:      []
	}),

	// The Universal Friend
	ufriend: new Character({
		health:     5000,
		name: 		"The Universal Friend",
		isHostile:  false,
		isMerchant: false,
		strength:   600,
		defense:    600,
		image:      "/app/characters/ufriend.jpg",
		keyImage: 	null,
		items:      []
	}),

	// Xentha
	xentha: new Character({
		health:     800,
		name: 		"Xentha",
		isHostile:  true,
		isMerchant: false,
		strength:   100,
		defense:    100,
		image:      "/app/characters/xentha.jpg",
		keyImage: 	null,
		items:      []
	}),

	// Splitfoot
	splitfoot: new Character({
		health:     1000000,
		name: 		"Splitfoot",
		isHostile:  false,
		isMerchant: false,
		strength:   1000000,
		defense:    1000000,
		image:      "/app/characters/splitfoot.jpg",
		keyImage: 	null,
		items:      []
	})
};

app.characters.colrochester.exchanges = [
    // 0
	new Exchange({
		msg: '<p><center><span id="maintitle">Light and Shadow</span> \
		     <br><br>a game of honor and magic<br>in the historic    \
		     American Northeast<br><br>&copy; 2015 Andrew A. Anissi  \
		     </center></p>',
		
		responses: [{
			button: "Start",
			respond: function() {
				console.log("START");
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
			}
		}, {
			button: "Who are you?",
			respond: function() {
				console.log("who?");
			}
		}]
	})
];


