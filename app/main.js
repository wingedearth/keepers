console.log('app/main.js loaded...');

/* GLOBAL MODEL DEFINITION */

var app = {
	areas:      [],
	characters: []
};

// Our hero enters stage left...
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
		// if key event, that is the char
		var mapY = this.location[0];
		var mapX = this.location[1];
		if (this.area.map[mapY][mapX] !== null) {
			return this.area.map[mapY][mapX];
		} else if(this.area.isRandomInteraction()) {
			return this.area.getRandomCharacter();
		}
		// else if random encoutner, that is char
		// else defualt NPC
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
        $charImage = $("#photobox .container"),
        $response  = $("#actionbox"),
        $areaImage = $("#placebox"),
        $text      = $("#textbox");

    // A. Draw location
    $location.text(app.carroll.area.name);

    // B. Draw character image
    $charImage.text(app.carroll.currentCharacter())

    // C. Draw possible response and attach events to them
    // TODO ...

    // D. Draw area image
    var imageUrl = app.carroll.area.getRandomImage();
    $areaImage.css("background-image", 'url("' + imageUrl + '")');

    // E. Exchange text
    // TODO ...
};

$(document).ready(function() {
	/* LOAD GAME DATA & ASSETS */
	var $areas = loadScript("app/areas/areas.js");
	
	/* INITIALIZE (SET UP) GAME (SET PC STATE) */
	$areas.on("load", function() {	
	    // Carroll arrives at Welcome area
		app.carroll.arriveAt(app.areas[0])	
		
		render();
	});
});