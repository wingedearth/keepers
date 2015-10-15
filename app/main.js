console.log('app/main.js is loaded...');

/* GLOBAL MODEL DEFINITION */

var app = {
	areas:      [],
	characters: []
};

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

/* DEFINE FILE-FINDING AND FILE-LOADING HELPERS */

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

    // B. Draw character image
    var character = app.carroll.currentCharacter();
    $charImage.css('background-image', 'url("' + character.image + '")');


    // C. Draw response buttons and attach events to them
    
    $response.html(""); // clear response buttons

    var currentChar = app.carroll.currentCharacter();
    if ( app.carroll.isKeyLocation() ) {
    	// key exchange
	    currentChar.exchanges[currentChar.keyExchangeIndex]
	        .responses.forEach(function(response) {
		    	var $btn = $('<li>', {text: response.button, class: "clickable"});
		    	$response.append($btn);
		    	$btn.on('click', function() {
		    		response.respond();
	    		});
	    	});
    }
    else {
	    // default response, based on area / defaultNPC
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
    else {    
    	// default exchange, based on area / defaultNPC
    }
    console.log(currentChar.keyExchangeIndex);
};

// LOAD GAME DATA & ASSETS
$(document).ready(function() {

	// LOAD EXCHANGES
	loadScript("app/exchanges/exchanges.js").on("load", function() {

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
});


