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

	// assign attributes of player's character, Maj. Charles Carroll
	carroll = 
	{
		health: 1000,
		maxhealth: 1000,
		name: 	"Maj. Charles Carroll",
		strength: weapon[0],
		weap: "fists",
		defense: 50,
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
	currentArea = area[i];
	currentPlace = [area[i].startx, area[i].starty]
	currentPerson = goodGuys[i][0];
	loadLand(i);
}

// This function should run every time player moves to a new space.
// If a key space is landed on, run render() after key event runs.
function render(id, y, x)
{
	loadSpace(id, y, x);
	loadMonster(currentPerson);
	loadText(id);
	moveAction();
}

function dialogue()
{
	// set up buttons in actionbox to converse via text
}

function loadText(id)
{
	//load random space descriptive dialog for this area
}


function loadLand(i)
{
	$('body').css('background-image', area[i].bg);
	$('#location').text(currentArea.location);
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
			}
		render(areaIndex, currentPlace[0], currentPlace[1]);
		
		// at end of dialogue, textbox offers space description
		// action box offers directional movement buttons	
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
var person;
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

//set up event listener for "start" button


playGame();




