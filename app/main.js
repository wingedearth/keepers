console.log('app/main.js has formed into matter from pure spirit...');

/* GLOBAL MODEL DEFINITION */

var app = {
	areas:      [],
	characters: []
};
var newRender = 0;

// Define Player's Character Object
app.carroll = {
	name:     "Maj. Charles Carroll",
	area:     null,
	location: null,
	items: [],
	magic: {
		spells:   [],
		fullMana: 100,
		mana:     100
	},
	attack: {
		strength:    50,
		defense:     50,
		fullHealth: 500,
		health:     500
	},
	arriveAt: function(area) {
		this.area = area;
		this.moveTo(area.startLocation);
	},
	moveTo: function(location) {
		this.location = location;
		// render();
	},
	currentCharacter: function() {
		// set current location coordinates
		var mapY = this.location[0];
		var mapX = this.location[1];

		// if key location, location's character is current character
		if ( this.isKeyLocation() ) {
			return this.area.map[mapY][mapX];
		} 

		// if there's a random encounter, return random character
		else if(this.area.isRandomInteraction()) {
			return this.area.getRandomCharacter();
		}
		else {
			return this.area.defaultNPC;
		}
	},
	isKeyLocation: function() {
		// set current location coordinates
		var mapY = this.location[0];
		var mapX = this.location[1];
		if (this.area.map[mapY][mapX] !== null) {
			return true;
		}
		else {
			return false;
		}
	}
};

/* DEFINE A FUNCTION THAT LOADS SCRIPT FILES */

var loadScript = function(url) {
	var script  = document.createElement('script');
	script.type = 'text/javascript';
    script.src  = url;

    document.body.appendChild(script);

    return $(script);
};

/* DEFINE RENDER */

var render = function() {

	/* The user interface has five parts:
	 * ┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
	 * ┃            ┃ A location ┃
	 * ┃     E      ┣━━━━━━━━━━━━┫
	 * ┃ exchange   ┃     B      ┃
	 * ┃   .text    ┃ character  ┃
	 * ┃            ┃  .image    ┃
	 * ┣━━━━━━━━━━━━╋━━━━━━━━━━━━┫
	 * ┃            ┃            ┃
	 * ┃     D      ┃     C      ┃
	 * ┃ area.rand- ┃ exchange.  ┃
	 * ┃   image    ┃ responses  ┃
	 * ┃            ┃            ┃
	 * ┗━━━━━━━━━━━━┻━━━━━━━━━━━━┛
     */

    var $location  = $("#location"),
        $charImage = $("#photobox"),
        $response  = $("#actionlist"),
        $areaImage = $("#placebox"),
        $text      = $("#textbox");

    // A. Write location name
    $location.text(app.carroll.area.name);
    console.log(app.carroll.location);
    var coordX = app.carroll.location[1];
    var coordY = (app.carroll.area.map.length) - (app.carroll.location[0]) - 1;
    $location.append(" (" + coordX + "," + coordY + ")");

    // B. Draw character image
    var character = app.carroll.currentCharacter();
    $charImage.css('background-image', 'url("' + character.image + '")');


    // C. Draw response buttons and attach events to them

    $response.html(""); // clear response buttons

    currentChar = app.carroll.currentCharacter();
    isKey = app.carroll.isKeyLocation();
    if ( isKey ) {
    	// key exchange
	    currentChar.exchanges[currentChar.keyExchangeIndex]
	     .responses.forEach(function(response) {
		    	var $btn = $('<li>', {text: response.button, class: "clickable"});
		    	$response.append($btn);
		    	$btn.on('click', function() {
		    		response.respond();
	    		});
	    });
    } else if ( currentChar == location.defaultNPC ) {
    	// show movement buttons
    } else {
	    // response buttons for random char
	}


    // D. Draw area image
    var imageUrl = app.carroll.area.getRandomImage();
    if (character.keyImage != null)
    	{ imageURL = character.keyImage; }
    $areaImage.css("background-image", 'url("' + imageUrl + '")');
    

    // E. Insert exchange text
    $text.html("");
    if ( app.carroll.isKeyLocation() ) {
    	$text.html(currentChar.exchanges[currentChar.keyExchangeIndex].msg);
    }
    else if ( currentChar == location.defaultNPC ) {
    	// random default exchange for area
    	$text.html(location.defaultMessage[0]);
    }
    else {    
    	// random char dialogue
    	$text.html("random character dialogue goes here.");
    }
};

// LOAD GAME DATA & ASSETS
$(document).ready(function() {

	// LOAD CHARACTERS
	loadScript("app/characters/characters.js").on("load", function() {	
		
		// LOAD AREAS
		loadScript("app/areas/areas.js").on("load", function() {	

			// INITIALIZE GAME

			// Carroll arrives at Welcome area
			app.carroll.arriveAt(app.areas[0]);
			render();
		});
	});
});


