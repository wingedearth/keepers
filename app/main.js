console.log('app/main.js has formed into matter from pure spirit...');

/* GLOBAL MODEL DEFINITION */

var app = {
	areas:      [],
	characters: []
};
var character;

// Define Player's Character Object
app.carroll = {
	name:     "Maj. Charles Carroll",
	area:     null,
	location: null,
	health:   600, 
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
	moveTo: function(newLocation) {
		this.location = newLocation;
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

    // A. Write location name and player's coordinates
    $location.text(app.carroll.area.name); //location name

    var coordX = app.carroll.location[1];
    var coordY = (app.carroll.area.map.length) - (app.carroll.location[0]) - 1;
    $location.append(" (" + coordX + "," + coordY + ")");


    // B. Display character image
    character = app.carroll.currentCharacter();
    app.carroll.isKeyLocation();
    $('#photobox').css('background-image', 'url("' + character.image + '")');

    // X. Display character's name
    $('#namebox .container').text(character.name);

    // C. Draw response buttons and attach events to them
    $response.html(""); // clear response buttons
    isKey = app.carroll.isKeyLocation();

    if ( isKey ) {
    	// key location exchange
	    character.exchanges[character.keyExchangeIndex]
	     .responses.forEach(function(response) {
		    	var $btn = $('<li>', {text: response.button, class: "clickable"});
		    	$('#actionlist').append($btn);
		    	$btn.on('click', function() {
		    		response.respond(character);
	    		});
	    });
    } else if ( character == app.carroll.area.defaultNPC ) {
    	// show movement buttons
    	if (coordY < (app.carroll.area.map.length - 1)) {
    		$('#actionlist').append($nbtn);
    			$nbtn.on('click', function() {
    				var newY = ((app.carroll.location[0])-1);
    				var newX = (app.carroll.location[1]);
		    		app.carroll.moveTo([newY, newX]); //move north;
		    		render();
		    	});
    	}
    	if (coordX > 0) {
    		$('#actionlist').append($wbtn);
    			$wbtn.on('click', function() {
    				var newY = (app.carroll.location[0]);
    				var newX = ((app.carroll.location[1])-1);
		    		app.carroll.moveTo([newY, newX]); //move west;
		    		render();
		    	});
    	}
    	if (coordX < (app.carroll.area.map[0].length-1)) {
    		$('#actionlist').append($ebtn);
    		$ebtn.on('click', function() {
    				var newY = (app.carroll.location[0]);
    				var newX = ((app.carroll.location[1])+1);
		    		app.carroll.moveTo([newY, newX]); //move east;
		    		render();
		    	});
    	}

    	if (coordY > 0) {
    		$('#actionlist').append($sbtn);
    		$sbtn.on('click', function() {
    				var newY = ((app.carroll.location[0])+1);
    				var newX = (app.carroll.location[1]);
		    		app.carroll.moveTo([newY, newX]); //move south;
		    		render();
		    	});
    	}

    } else {
	    // response buttons for random char
	    console.log("character: " + character);
	    character.exchanges[character.keyExchangeIndex].responses.forEach(function(response) {
		    	var $btn = $('<li>', {text: response.button, class: "clickable"});
		    	$('#actionlist').append($btn);
		    	$btn.on('click', function() {
		    		response.respond();
	    		});
	    });
	}


    // D. Draw area image
    var imageUrl = app.carroll.area.getRandomImage();
    if (character.keyImage != null)
    	{ imageURL = character.keyImage; }
    $areaImage.css("background-image", 'url("' + imageUrl + '")');
    

    // E. Insert exchange text
    $('#textbox').html("");
    if (fight==1)
		{
			$('#textbox').append("<br><br><u>Health:</u><br>Charles Carroll: " + app.carroll.health + "<br>" + character.name + ": " + character.health + " ");
			$('#textbox').text("A random character has approached you.\n")
	    	$('#textbox').append(character.exchanges[character.keyExchangeIndex].msg);
		}
	else {
	    if ( isKey ) {
	    	$('#textbox').html(character.exchanges[character.keyExchangeIndex].msg);
	    }
	    else if ( character == app.carroll.area.defaultNPC ) {
	    	// random default exchange for area
	    	fight = 0;
	    	var charsLength = app.carroll.area.defaultMessage.length;
	    	var randomIndex = Math.floor(Math.random()*charsLength);
	    	$('#textbox').html(app.carroll.area.defaultMessage[randomIndex]);
	    }
	    else {    
	    	// random char dialogue
	    	$('#textbox').text("A random character has approached you.\n")
	    	$('#textbox').append(character.exchanges[0].msg);
	    }
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


