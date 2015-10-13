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
}

// This function should run at the start of each new area.
function reset(i)
{
	// Change current area to selected area.
	currentArea = area[i];

	// Change location label to current area
	$('#location').text(currentArea.location);

	// set currentPlace to starting coordinates.
	currentPlace = [area[i].startx, area[i].starty]

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
	// set up buttons in actionbox to converse via text
}


function loadText(wordums)
{
	$('#textbox').text(wordums);
}


function waitNow() 
{
	setTimeout(function() { }, 3000);
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

function playGame()
{
	playArea0();
	// playArea1();
	// playArea2();
	// playArea3();
	// playArea4();
	// playArea5();
	// playArea6();
	// playArea7();
	// playArea8();
	// playArea9();
}

function playArea0()
{
	changeArea = 0;
	areaIndex = 0;
	reset(areaIndex);
	render(areaIndex, currentPlace[0], currentPlace[1]);
	if (maps[areaIndex][currentPlace[0]][currentPlace[1]] == "A")
		{
			//display random area text.
		}
	// click through talking using actionbox "next" button
}


function playArea1()
{
	changeArea = 0;
	areaIndex = 1;
	reset(areaIndex);
	while (changeArea == 0)
	{
		if (maps[areaIndex][currentPlace[0]][currentPlace[1]] == "K")
		{
				keyEvent(areaIndex);
				currentPerson = goodGuys[areaIndex][0];
		}
		else
		{
			// check for random monster;
			// if there's a monster, then pick one.
		}
		
		if (currentPerson != goodGuys[areaIndex][0])
		{
			dialogue();
			if (carroll.health < 1)
				{
					console.log("Carroll is dead.");
					$('#photobox').css('background-image', splitfoot.spriteImg);
					$('#textbox').text('Carroll is dead.');
					alert("Game over!");
				}
		}

		// at end of dialogue, textbox offers space description
		render(areaIndex, currentPlace[0], currentPlace[1]);
		
		// action box offers directional movement buttons
		moveAction();
	}
}




function moveAction()
{
	// determine which directions are available for movement
	// offer available directions as movement buttons
	// set event listener for buttons
		// move(newY, newX);
		// render();
}

function move(y, x)
{
	currentPlace = [y, x];
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
var spells = ["curse", "bolt"];
var armor = [10, 50, 100, 150];

var carroll = new Object();








/* ****************** THE ACTION STARTS HERE ********* */

//set up game and offer "start" and "continue" in actionbox
initialize();
reset(0);
render(0);

$('li').hover(
	function()
	{ 
		$(this).css('background-color', 'dodgerblue');
	},
	function()
	{
		$(this).css('background-color', 'cornsilk');
	} );

$('#gamestart').click(function()
{ 	playArea0; });






