console.log('app/areas/areas.js has landed in physicality from the astral plane...');

/*
 * Area - the area is a "region" for the character
 *   to explore. It has a default NPC to talk to,
 *   and a set of random characters (usually
 *   monsters) that appear as you explore. The
 *   area comprises a set of locations on an x-
 *   y-coordinate system.
 *
 * Example usage:
 *
 * var la = new Area({
 *   id: 90027,
 *   name: "Los Angeles",
 *   images: ["dtla.jpg","santaMonica.jpg","compton.png"],
 *   defaultNPC: new Character({name: "Miley Cyrus"}),
 *   // ...
 * });
*/
var Area = function(options) {
	this.id     = options.id;
	this.name   = options.name;
	this.images = options.images;

	// list of Locations
	this.map = options.map;

	// list of Characters, usually monsters
	this.randomChars = (options.randomChars || []);

	// a Character
	this.defaultNPC = options.defaultNPC;

	// an array [x, y]
	this.startLocation = options.startLocation;

	// not yet implemented
	this.flavor = (options.flavor || "");

	this.defaultMessage = (options.defaultMessage || "");
};

Area.prototype.isRandomInteraction = function() {
	var testRandom = Math.floor(Math.random()*8);
	if (testRandom <= 8) {
		return false;
	}
	else {
    	return true;
	}
};

Area.prototype.getRandomCharacter = function() {
	var length = this.randomChars.length;
	var randomIndex = Math.floor(Math.random()*length);
	return this.randomChars[randomIndex];
};

Area.prototype.getRandomImage = function() {
	var len = this.images.length;
	var randomIndex = Math.floor(Math.random()*len);
	return "app/areas/" + this.images[randomIndex];
};


app.areas = [

	// Welcome
	new Area({
		id:     0,
		name:   "Welcome",
		images: ["welcome/assets/area0.jpg"],
		map:    [
			[app.characters.colrochester]
		],
		startLocation: [0, 0],
		defaultNPC: app.characters.colrochester
	}),

	// Boston Harbor
	new Area({
		id:     1,
		name:   "Boston Harbor",
		images: [
			"bostonharbor/assets/area1-1.jpg",
			"bostonharbor/assets/area1-2.jpg",
			"bostonharbor/assets/area1-3.jpg",
			"bostonharbor/assets/area1-4.jpg"
		],
		map: [
			[app.characters.wharfRat, app.characters.constable, null],
			[null, app.characters.wharfRat, app.characters.fisherman],
			[null, null, app.characters.pirate]
		],
		startLocation: [2, 2],
		randomChars: [
			app.characters.pirate,
			app.characters.wharfRat,
			app.characters.fisherman
		],
		defaultNPC: app.characters.colrochester,
		defaultMessage: [
		     "Boston Harbor is crowded today. Maybe we should stop \
		     by the aquarium.",
		     "I bought a lobster roll, but a seagull flew down and ate it.",
		     "We must make our way to Boston Town, to find Robert Morris.",
		     "The wind at Boston Harbor chills me to the bone. I'm chillin' like a villain.",
		     "Boston is a major port town. Everything arriving by ship must first pass through the Custom House.",
		     "Ride the ferry from Boston to Salem some time.",
		     "You'll want to check in with the constable before leaving the harbor.\
		     Might help to explain that nasty situation with the pirate.",
		     "If the British ever return, we have defensive forts on the Harbor Islands."
		]

	}),

	// Boston Town
	new Area({
		id:     2,
		name:   "Boston Town",
		images: [
			"bostontown/assets/area2-1.jpg",
			"bostontown/assets/area2-2.jpg",
			"bostontown/assets/area2-3.jpg"
		],
		map: [
			[null, app.characters.robertMorris, null, app.characters.apothecary],
			[app.characters.cutthroat, app.characters.barkeep, app.characters.tavernwench, null],
			[null, app.characters.tavernwench, null, null],
			[app.characters.guard, app.characters.cutthroat, app.characters.colrochester, null]
		],
		startLocation: [3, 2],
		randomChars: [
			app.characters.tavernwench,
			app.characters.cutthroat
		],
		defaultNPC: app.characters.constable,
		defaultMessage: [
		     "It's not easy maintaining order in a town most famous for insurrection.",
		     "You have arrived at another town block. There's a Dunkin Donuts on the corner\
		     just like every other block in Boston.",
		     "If you look around, you'll find the Green Dragon Tavern, where the Sons of Liberty started the American Revolution",
		     "In the North End is the home of Paul Revere. You'll also find many cafes and cannoli shops.",
		     "Massachusetts farmers and fishermen sell their goods at the Haymarket on Fridays. Try the cherrystone clams!",
		     "A great place to find dry goods and baubles is at Quincy Market.",
		     "I hear Robert Morris is in town conducting business at the Governor's Mansion.",
		     "The night watch and I keep the peace as best we can. But there are always ruffians and wahlburgs around."
		]
	}),

	// Massachusetts
	new Area({
		id:     3,
		name:   "Massachusetts",
		images: [
			"massachusetts/assets/area3-1.jpg",
			"massachusetts/assets/area3-2.jpg",
			"massachusetts/assets/area3-3.jpg",
			"massachusetts/assets/area3-4.jpg",
			"massachusetts/assets/area3-5.jpg"
		],
		map: [
				[null, null, null, null, null],
				[null, app.characters.traveler, null, null, null],
				[null, null, null, null, app.characters.cecil],
				[null, null, null, null, null]
		],
		startLocation: [2, 4],
		randomChars: [
			app.characters.cutthroat
		],
		defaultNPC: app.characters.cecil
	}),

	// The Mohawk Trail
	new Area({
		id:     4,
		name:   "The Mohawk Trail",
		images: [
			"mohawktrail/assets/area4-1.jpg",
			"mohawktrail/assets/area4-2.jpg"
		],
		map: [
				[null, null, null, null, null, null, null, null, null , app.characters.cecil],
				[null, app.characters.williamson, null, null, null, null, null, null, null, null]
		],
		startLocation: [2, 4],
		randomChars: [
			app.characters.mohawkscout
		],
		defaultNPC: app.characters.cecil
	}),

	// Bath
	new Area({
		id:     5,
		name:   "Bath",
		images: [
			"bath/assets/area5-1.jpg",
		],
		map: [
				[null, app.characters.fitzhugh, null],
				[app.characters.tory, app.characters.williamson, null],
				[null, null, null]
		],
		startLocation: [1, 1],
		randomChars: [
			app.characters.tory
		],
		defaultNPC: app.characters.cecil
	})

];


