// Welcome to the javacript code for Light and Shadow
// a role playing game by Andrew A. Anissi

// google jquery UI for info on animation techniques



/* ****************** FUNCTIONS ********************** */

// This function sets up the game at the beginning.
function initialize()
{
	// assigning land name, map spaces, random monsters, 
	// and friendly characters to each area[i]
	for (var i=0; i<10; i++)
	{ 
		area[i] = new ProtoArea(i, land[i], maps[i], monsterSet[i],
			goodGuys[i], startyx[i], startyy[i], startbg[i]); 
	}

	// current space image set to initial default image
	currentSpace = spaces[0][0];
	currentPerson = goodGuys[0][0];

	// assign attributes of player's character, Maj. Charles Carroll
	var carroll = new Object();
	carroll = 
	{
		health: 1000, maxhealth: 1000,
		name: 	"Maj. Charles Carroll",
		strength: weapon[0], weap: "fists", defense: 50,
		magic: spells[0],
		cattack: function(enemy)
		{
			var hit = (this.strength) - enemy.defense;
			if (hit > 0)
				enemy.health -= hit;
		}
	}
	reset(0);
	render(0);
	changeArea = 0;
	hoverFunk();
}

// This function should run at the start of each new area.
function reset(index)
{
	// Change current area to selected area.
	currentArea = area[index];

	// Change location label to current area
	$('#location').text(currentArea.location);

	// set currentPlace to starting coordinates.
	currentPlace = [area[index].startx, area[index].starty]

	// set default person as currentPerson
	currentPerson = goodGuys[index][0];
}

// This function should run every time player moves to a new space.
// If a key space is landed on, run keyEvents(); instead.
function render(id)
{
	loadSpace(id, currentPlace[0], currentPlace[1]);
	loadMonster(currentPerson);
}

function dialogue()
{
	// load dialogue text
	// set up each responsebutton[x]
		// when clicked, load next dialogue, and remove responsebutton
		// add next response button and repeat

	// if no response needed, add ok button
		// if battle=true:
			// $('li').remove();
			// battle();
		// $('li').remove();


}


function loadText(wordums)
{
	$('#textbox').text(wordums);
}



function loadSpace(id, y, x)
{
	// Every time player moves, rotate the image in the space box,
	// using images assigned to the area
	if (maps[id][y][x] == "A")
	{
		// declare index for which space to use
		var spaceInd;
		if (spaces[id].length == 1)
			spaceInd = 0;
		else // pick random between 1 and spaces[id].length
		{
			var randomNumber = Math.random();
			for (var i=1; i <= spaces[id].length; i++)
			{
				if (randomNumber <= (i/(spaces[id].length)))
					spaceInd = i-1;
			}
		}
		$('#placebox').css('background-image', spaces[id][spaceInd]);
	}

	// For now use spaces[id][0] for key spaces. Later we'll assign special images
	if (maps[id][y][x] == "K")
		$('#placebox').css('background-image', spaces[id][0]);	
}

function moved()
{	
	render(areaIndex);
	
	if (maps[areaIndex][currentPlace[0]][currentPlace[1]] == "K")
	{
		keyTest(areaIndex);
	}
	else
	{
		// check for random monster;
		// if there's a monster, then pick one.
		currentPerson = monsterSet[areaIndex][0]; // temporary

		render(areaIndex, currentPlace[0], currentPlace[1]);
	}
	if (currentPerson != goodGuys[areaIndex][0])
		{
			dialogue();
			carrollDeadTest();
		}

}

function playArea0()
{
	areaIndex = 0;
	reset(areaIndex);
	keyTest(areaIndex);
	dial = 1;
	var dialogChooser = rochesterDial();
	
	// START BUTTON
	$('#gamestart').click(function()
	{ 	
		$('#gamestart').remove();
		$('#continuegame').remove();
		$('#actionlist').append("<li id='roch1'>I do not remember</li>");
		$('#actionlist').append("<li id='roch2'>Who are you?</li>");
		$('#actionlist').append("<li id='roch3'></li>");
		$('#roch1').hide();
		$('#roch2').hide();
		$('#roch3').hide();
		rochesterDial(1);
	});





}


function playArea1()
{
	changeArea = 0;
	areaIndex = 1;
	reset(areaIndex);
	render(areaIndex);
		

		// at end of dialogue, textbox offers space description
		if (maps[areaIndex][currentPlace[0]][currentPlace[1]] == "A")
		{
			loadText(describe[areaIndex][1]);
		}
		
		moved();
		// action box offers directional movement buttons
		moveAction();
		changeArea = 1;
}




function moveAction()
{
	// determine which directions are available for movement
	// $('li').remove();
	// if north is available
		// $('#actionlist').append("<li id=#north>NORTH</li>");
	// if west is available
		// $('#actionlist').append("<li id=#west>WEST</li>");
	// if east is available
		// $('#actionlist').append("<li id=#east>EAST</li>");
	// if south is available
		// $('#actionlist').append("<li id=#south>SOUTH</li>");
	// set event listener for buttons
		// move(newY, newX);
		// render();
}

function move(y, x)
{
	currentPlace = [y, x];
	render(areaIndex);
}

// changes button color on rollover
// run this whenever creating new li buttons
function hoverFunk() {
$('li').hover(
	function()
	{
		var self=this;
		$(self).css('background-color', 'dodgerblue');
	},
	function()
	{
		var self1=this;
		$(self1).css('background-color', 'white');
	} );
}

function carrollDeadTest()
{
	if (carroll.health < 1)
	{
		console.log("Carroll is dead.");
		$('#photobox').css('background-image', splitfoot.spriteImg);
		$('#textbox').text('Carroll is dead.');
		alert("Game over!");
		
	}
}

/* ****************** MONSTERS *********************** */

function loadMonster(person)
{
	//load photo of current sprite
	$('#photobox').css('background-image', person.spriteImg);

	//start currentMonster's dialogue


	//if fight happens, launch battle function
		//if Carroll dies, launch game over function
		//if currentMonster dies, launch loot function
		//if Carroll retreats, reload map location without monster
}




/* ****************** GLOBAL VARIABLES *************** */

var areaIndex;
var changeArea;
var currentPerson;
var currentSpace;
var currentPlace = [];
var currentMonster= new Object();
var weapon = [50, 100, 200, 300];
var weap = ["fists", "dagger", "musket", "flint-lock rifle"]
var spells = ["curse", "bolt"];
var armor = [10, 50, 100, 150];
var mission = 0;
var dial = 0;



/* ****************** THE ACTION STARTS HERE ********* */

//set up game and offer "start" and "continue" in actionbox
initialize();

playArea0(); 


// ROCHESTERDIAL BUTTON






