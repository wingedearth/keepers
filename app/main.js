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
		if (this.area.map[mapY][mapX] !== null) {
			return this.area.map[mapY][mapX];
		} 

		// if there's a random encounter, return random character
		else if(this.area.isRandomInteraction()) {
			return this.area.getRandomCharacter();
		}
		
		return this.area.defaultNPC;
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
	/* Our page has five parts:
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

    // C. Draw possible response and attach events to them

    // clear response buttons
    $response.html("");

    //determine whether on default space

    app.carroll.currentCharacter().exchanges[0]
        .responses.forEach(function(response) {
	    	var $btn = $('<li>', {text: response.button, class: "clickable"});
	    	$response.append($btn);
	    	$btn.on('click', function() {
	    		response.respond();
    		});
    });


    // D. Draw area image
    var imageUrl = app.carroll.area.getRandomImage();
    if (character.keyImage != null)
    	{ imageURL = character.keyImage; }
    $areaImage.css("background-image", 'url("' + imageUrl + '")');
    
    // E. Exchange text
    $text.html(app.carroll.currentCharacter().exchanges[0].msg);
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


