console.log('app/main.js loaded...');

/* DEFINE CONSTRUCTORS/CLASSES FOR DATA */

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
	this.randomChars = options.randomChars; 

	// a Character
	this.defaultNPC = options.defaultNPC;

	// an array [x, y]
	this.startLocation = options.startLocation;

	// not yet implemented
	this.flavor = options.flavor;
};

/* DEFINE FILE-FINDING AND FILE-LOADING HELPERS */

/* LOAD GAME DATA & ASSETS */

/* INITIALIZE (SET UP) GAME (SET PC STATE) */

/* RENDER */