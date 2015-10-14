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
	})
};