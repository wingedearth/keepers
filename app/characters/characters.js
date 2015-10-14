console.log('app/characters/characters.js is now loaded.....');

var Exchange = function(text, responses) {
	this.text = text;
	this.responses = responses;

}

Exchange.prototype.action = function() {
	// this is the stub...
	console.log(this.text);
}

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
	
	//Col. Nathanial Rochester
	colrochester: new Character({
		health:     100000,
		name: 		"Col. Nathanial Rochester",
		isHostile:  false,
		isMerchant: false,
		strength:   100000,
		defense:    100000,
		image:      "/app/characters/nathanialrochester.jpg",
		items:      []
	}),

	//Pirate
	pirate: new Character({
		health:     100,
		name: 		"Pirate",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    10,
		image:      "/app/characters/pirate.jpg",
		items:      ["dagger"]
	}),

	//Wharf Rat
	wharfRat: new Character({
		health:     50,
		name: 		"Wharf Rat",
		isHostile:  true,
		isMerchant: false,
		strength:   80,
		defense:    10,
		image:      "/app/characters/wharfrat.jpg",
		items:      []
	}),

	//Drunken Fisherman
	fisherman: new Character({
		health:     120,
		name: 		"Drunken Fisherman",
		isHostile:  true,
		isMerchant: false,
		strength:   60,
		defense:    10,
		image:      "/app/characters/fisherman.jpg",
		items:      []
	})
};

app.characters.colrochester.exchanges = [
    // 0
	new Exchange(
		'<p><center><span id="maintitle">Light and Shadow</span> \
		<br><br>a game of honor and magic<br>in the historic    \
		American Northeast<br><br>&copy; 2015 Andrew A. Anissi  \
		</center></p>',
		[{
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
	)
];


