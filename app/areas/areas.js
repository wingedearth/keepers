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
	new Area({
		id:     0,
		name:   "Welcome",
		images: ["welcome/assets/area0.jpg"],
		map:    [ 
			["Col. Nathaniel Rochester"]
		],
		startLocation: [0, 0]
	})
];