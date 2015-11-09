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
	if (testRandom <= 5) {
		return false;
	}
	else {
    	return true;
	}
};

Area.prototype.getRandomCharacter = function() {
	var len = this.randomChars.length;
	var randomIndex = Math.floor(Math.random()*len);
	return (this.randomChars[randomIndex]);
};

Area.prototype.getRandomImage = function() {
	var len = this.images.length;
	var randomIndex = Math.floor(Math.random()*len);
	return "app/areas/" + this.images[randomIndex];
};


app.areas = [

	// Welcome has a 1 x 1 map of 1 space
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

	// Boston Harbor has a 4 x 4 map of 16 spaces
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
			[null, app.characters.constable, null],
			[null, null, 										 null],
			[null, null, 										 app.characters.pirate]
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

	// Boston Town has a 5 x 5 map of 25 spaces
	new Area({
		id:     2,
		name:   "Boston Town",
		images: [
			"bostontown/assets/area2-1.jpg",
			"bostontown/assets/area2-2.jpg",
			"bostontown/assets/area2-3.jpg"
		],
		map: [
			[null, app.characters.robertMorris, null, app.characters.apothecary, null],
			[null, app.characters.barkeep, null, null, null],
			[null, null, null, null, null],
			[app.characters.guard, null, app.characters.colrochester, null, null],
			[null, null, null, null, null]
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

	// Massachusetts has a 5 x 4 map of 20 spaces
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
			app.characters.cutthroat, app.characters.tory
		],
		defaultNPC: app.characters.cecil,
		defaultMessage: [
		     "The air is chilly here, master. But Massachusetts is beautiful",
		     "Let us travel along the Boston Post Road all the way to New York.",
		     "There is a well-known inn for travelers at Sudbury, right along the Boston Post Road.",
		     "They say in these parts there are WITCHES about! Especially to the northeast, in Salem",
		     "The first shots of the American Revolution were fired not far from here, in Lexington.",
		     "America won its first battle against the British near here in Concord, Massachusetts."
		]
	}),

	// The Mohawk Trail has a 10 x 2 map of 20 spaces
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
		defaultNPC: app.characters.cecil,
		defaultMessage: [
				"I have heard tales of the Iroquois. A powerful Confederacy \
				of fierce warriors.",
				"We are past the Hudson River. These lands are more wild than \
				any in Europe has been in thousands of years.",
				"They say the ghost of a beheaded Hessian warrior stalks these\
				lands, killing all in his way, in search of his lost head."
		]
	}),

	// Bath has a 3 x 3 map of 9 spaces
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
			app.characters.tory, app.characters.williamson
		],
		defaultNPC: app.characters.fitzhugh,
		defaultMessage: [
				"I understand you are acquainted with my cousin, \
				William Fitzhugh. I have been long away from Maryland.",
				"The Genesee Country is a great investment opportunity.\
				Wild, unclaimed land!",
				"Only the bold travel this far west. I salute you, sir!",
				"I would gladly travel with you to Fallstown, sir, but \
				Captain Williamson needs me here.",
				"It's strange, working for a Tory, but Captain Williamson \
				 is a good man.",
				 "We have traded with the Society of Universal Friends. Their\
				  settlement is the furthest west of any American enclave.",
				 "We are at peace with the Iroquois Confederacy, but their\
				 their warriors, the Seneca Nation, do not tolerate our \
				 presence west of the Genesee River.",
				 "We are in the heartland of the Six Nations of the Iroquois.",
				 "The Six Nations of Iroquois are: the Mohawk, the Onondaga, \
				 the Oneida, the Cayuga, the Tuscarora, and the Seneca.",
				 "The Iroquois refer to themselves as the Haudenosaunee, \
				 or 'People of the Longhouse'."
		]
	}),

	// Genesee Country has a 5 x 5 map of 25 spaces
	new Area({
		id:     6,
		name:   "Genesee Country",
		images: [
			"geneseecountry/assets/area6-1.jpg",
		],
		map: [
				[null, app.characters.cecil,   null, null, null],
				[null, app.characters.cecil,   null, null, null],
				[null, app.characters.cecil,   null, null, null],
				[null, app.characters.ufriend, null, null, null],
				[null, app.characters.cecil,   null, null, null]
		],
		startLocation: [1, 5],
		randomChars: [
			app.characters.senecashaman, app.characters.senecascout
		],
		defaultNPC: app.characters.cecil,
		defaultMessage: [
				"Welcome to the Genesee Country."
		]
	}),

	// New Jerusalem has a 5 x 5 map of 25 spaces
	new Area({
		id:     7,
		name:   "New Jerusalem",
		images: [
			"newjerusalem/assets/area7-1.jpg",
		],
		map: [
				[null, null, null, null, app.characters.ufriend],
				[null, null, null, null, null],
				[null, null, null, null, null],
				[null, app.characters.ufriend, null, null, null],
				[null, null, null, null, null]
		],
		startLocation: [0, 4],
		randomChars: [
			app.characters.friend, app.characters.ufriend,
			app.characters.cecil
		],
		defaultNPC: app.characters.elias,
		defaultMessage: [
				"Welcome to the New Jerusalem! God will purify you!",
				"The Universal Friend cut off my evil! Want me to show you?",
				"The Friends are not allowed to have children, but many \
				already had kids before the Friend saved them!"
		]
	}),

		// New Jerusalem Escape has a 5 x 5 map of 25 spaces
	new Area({
		id:     8,
		name:   "New Jerusalem Escape",
		images: [
			"newjerusalem/assets/area7-1.jpg",
		],
		map: [
				[null, null, null, null, null],
				[null, null, null, null, null],
				[null, null, app.characters.xentha, null, null],
				[null, null, null, null, null],
				[app.characters.mosquitos, null, null, null, null]
		],
		startLocation: [2, 2],
		randomChars: [
			app.characters.mosquitos, app.characters.friend
		],
		defaultNPC: app.characters.ufriend,
		defaultMessage: [
				"You will not escape me.",
				"The lilit is lying to you. Return to us and I will protect\
				 you.",
				 "Major Carroll has fled into the woods. He must not escape. \
				 Find him!"
		]
	}),

	// Genesee River has a 3 x 10 map of 30 spaces
	new Area({
		id:     9,
		name:   "Genesee River",
		images: [
			"geneseeriver/assets/area8-1.jpg",
		],
		map: [
				[app.characters.sara, app.characters.sara, app.characters.sara],
				[null, null, null],
				[null, null, null],
				[app.characters.splitfoot, app.characters.splitfoot, app.characters.splitfoot],
				[null, null, null],
				[null, null, null],
				[null, null, null],
				[null, null, null],
				[null, null, null],
				[null, null, app.characters.xentha]
		],
		startLocation: [9, 2],
		randomChars: [
			app.characters.mosquitos, app.characters.senecawarrior,
			app.characters.senecashaman
		],
		defaultNPC: app.characters.fever,
		defaultMessage: [
				"You hear the sound of mosquitos buzzing behind you. Or \
				maybe they're in your mind. Are the mosquitos real? \
				You can feel them on your skin.",
				"You can see little in the dark forest, but you hear the \
				splashing of the Genesee River to your right. You hear \
				hoofbeats, and the crunching of leaves. You hear \
				the wind, as it burns the tops of your ears, and chills \
				your bones.",
				"It is difficult to see, in the weak light. But there \
				is a faint glow in the distance. A campfire?"
		]
	}),

	// Fallstown has a 3 x 3 map of 9 spaces
	new Area({
		id:     10,
		name:   "Fallstown",
		images: [
			"fallstown/assets/area8-1.jpg",
		],
		map: [
				[null, null, null, null, app.characters.genushio],
				[null, null, null, null, null],
				[null, null, app.characters.sara, null, null],
				[null, null, null, null, null],
				[null, null, null, null, null]
		],
		startLocation: [2, 2],
		randomChars: [
			app.characters.sara
		],
		defaultNPC: app.characters.sara,
		defaultMessage: [
				"Genushio is waiting for you. He is \
				by the High Falls of the Genesee River.",
				"The Seneca recognize Genushio as steward over \
				these 100 acres of land that make up Fallstown."
		]
	})

];


