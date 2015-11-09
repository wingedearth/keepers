console.log('app/main.js has formed into matter from pure spirit...');

/* GLOBAL MODEL DEFINITION */

var app = {
	areas:      [],
	characters: []
};
//var character;

// Define Player's Character Object
app.carroll = {
	name:     "Maj. Charles Carroll",
	area:     null,
	location: [0, 0],
	health:   600,
  fight:    0,
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
    loadchar(area);
	},
	moveTo: function(newLocation) {
    // set current location coordinates
    this.location = newLocation;
    var mapY = this.location[0];
    var mapX = this.location[1];

    if (this.area.map[mapY][mapX] == null)
    {
      if ( this.area.isRandomInteraction() )
        this.area.map[mapY][mapX] = this.area.getRandomCharacter();
    }
		// render();
	},
	currentCharacter: function() {
		// set current location coordinates

		// if key location, location's character is current character
		if ( this.isKeyLocation() ) {
			return this.area.map[this.location[0]][this.location[1]];
		}

		else {
			return this.area.defaultNPC;
		}
	},
	isKeyLocation: function() {
		// set current location coordinates
		if (this.area.map[this.location[0]][this.location[1]] != null) {
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
        $coords    = $("#coords"),
        $charImage = $("#photobox"),
        $response  = $("#actionlist"),
        $areaImage = $("#placebox"),
        $text      = $("#texthere");
        $namelabel = $("#namelabel");

    // A. Write location name and player's coordinates
    $location.text(app.carroll.area.name); //location name

    var coordX = app.carroll.location[1];
    var coordY = (app.carroll.area.map.length) - (app.carroll.location[0]) - 1;
    $coords.text("coordinates: (" + coordX + "," + coordY + ")");


    // B. Display character image and name
    character = app.carroll.currentCharacter();
    $charImage.css('background-image', 'url("' + character.image + '")');
    $namelabel.html("<span>" + character.name + "</span>");

    // C. Draw response buttons and attach events to them
    $response.html(""); // clear response buttons
    isKey = app.carroll.isKeyLocation();

    if ( isKey ) {
    	// key location exchange
	    character.exchanges[character.keyExchangeIndex]
	     .responses.forEach(function(response) {
		    	var $btn = $('<li>', {text: response.button, class: "clickable"});
		    	$response.append($btn);
		    	$btn.on('click', function() {
		    		response.respond(character);
	    		});
	    });
    } else if ( character == app.carroll.area.defaultNPC ) {
    	// show movement buttons
    	showMovement(coordY, coordX);
    }


    // D. Draw area image
    var imageUrl = app.carroll.area.getRandomImage();
    if (character.keyImage != null)
    	{ imageURL = character.keyImage; }
    $areaImage.css("background-image", 'url("' + imageUrl + '")');


    // E. Insert exchange text
    $text.html("");
    if (app.carroll.fight==1)
		{
			$text.append("<br><br><u>Health:</u><br>Charles Carroll\
        : " + app.carroll.health + "<br>" + character.name + ":\
          " + character.health + " ");
			$text.text("A random character has approached you.\n")
	    $text.append(character.exchanges[character.keyExchangeIndex].msg);
		}
	  else {
	    if ( isKey ) {
	    	$text.css('display', 'none').fadeIn(1500).html(character.exchanges[character.keyExchangeIndex].msg);
	    }
      else if ( character == app.carroll.area.defaultNPC ) {
	    	// random default exchange for area
	    	app.carroll.fight = 0;
	    	var charsLength = app.carroll.area.defaultMessage.length;
	    	var randomIndex = Math.floor(Math.random()*charsLength);
	    	$text.html(app.carroll.area.defaultMessage[randomIndex]);
	    }
	    else {
	    	// random char dialogue
	    	$text.text("A random character has approached you.\n")
	    	$text.append(character.exchanges[0].msg);
	    }
    }
}; //end of render


// SHOW MOVEMENT BUTTONS
function showMovement(coordY, coordX) {
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
} //end of showMovement



// LOAD GAME DATA & ASSETS
$(document).ready(function() {

	// LOAD CHARACTERS
	loadScript("app/characters/characters.js").on("load", function() {

		// LOAD AREAS
		loadScript("app/areas/areas.js").on("load", function() {

      loadScript("app/characters/loadchars.js").on("load", function() {

        loadScript("app/characters/colrochester/colrochester.js").on("load", function() {

    			// INITIALIZE GAME

    			// Carroll arrives at Welcome area
          loadScript("app/characters/pirate/pirate.js")
    			app.carroll.arriveAt(app.areas[0]);
  			  render();
        });
      });
		});
	});
});


