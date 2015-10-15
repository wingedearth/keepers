console.log('app/areas/areas.js loaded...');

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
};

Area.prototype.isRandomInteraction = function() {
    return false;
};

Area.prototype.getRandomCharacter = function() {
	var len = this.randomChars.length;
	var randomIndex = Math.floor(Math.random()*len)
	return this.randomChars[randomIndex];
};

Area.prototype.getRandomImage = function() {
	var len = this.images.length;
	var randomIndex = Math.floor(Math.random()*len)
	return "/app/areas/" + this.images[randomIndex];
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
			[null, 'Constable', null],
			[null, null, null],
			[null, null, 'Pirate']
		],
		startLocation: [2, 2],
		randomChars: [
			app.characters.pirate,
			app.characters.wharfRat,
			app.characters.fisherman
		],
		defaultNPC: app.characters.colrochester
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
			[null, 'Morris', null, 'Apothecary'],
			[null, 'Barkeep', null, null],
			[null, null, null, null],
			['Guard', null, app.characters.colrochester, null]
		],
		startLocation: [3, 2],
		randomChars: [
			app.characters.tavernwench,
			app.characters.cutthroat
		],
		defaultNPC: app.characters.constable
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

];


