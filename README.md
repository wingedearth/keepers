#README.md
###Project 1
###By Andrew A. Anissi


#####**Project Title: Keepers of the Western Door**
<br><br>

1. Description
2. Wireframe
3. MVP
4. User Stories

*****

##1. Description:
Light and Shadow is an online, one player role-playing adventure game embodying an esoteric historical fiction / epic fantasy taking place in upstate New York, primarily in the Genesee Country of Western New York and around Greater Rochester. 

The game's narrative and many of the characters are fiction. The game incorporates non-fictional characters, such as Ebenezer Allan, Charles Carroll, William Fitzhugh, and Nathanial Rochester, the founders of Rochester, NY, as well as the Publick Universal Friend, Cornplanter, and the Fox Sisters.

The game incorporates non-fictional locations and historical elements, such as the Seneca Nation, the Society of Friends and New Jerusalem, and the Spiritualist movement that began around Rochester, NY.

Gameplay includes class text-adventure navigation, turned-based battles (in the mode of Final Fantasy), character interaction, and magic.


*****

##2. Wireframe

![image](assets/wireframe.png =500x)


*******

##3. MVP

**Phase 1: Current**<br>
	
1. [x] Design interface elements and Splash Screen with "start" button.
	- [x] text box (dialogue and location descriptions)
	- [x] location box (identify current area)
	- [x] space box (picture of current surroundings)
	- [x] action box (interactive buttons for movement, battle, dialogue)
	- [x] photo box (image of character player is interacting with)
	- [x] body background (image of current area)

2. [x] Create initial maps for ten (10) areas:
	- [x] Welcome
	- [x] Boston Harbor
	- [x] Boston Town
	- [x] Massachusetts
	- [x] Mohawk Trail
	- [x] Bath
	- [x] Genesee Country
	- [x] New Jerusalem
	- [x] Genesee River
	- [x] Fallstown

3. Create eleven (11) non-hostile characters:
	- [x] Col. Nathanial Rochester (Welcome)
	- [x] Constable (Boston Harbor)
	- [x] Robert Morris (Boston Town)
	- [x] barkeep (Boston Town)
	- [x] Cecil (Massachusetts)
	- [x] Capt. Williamson (Bath)
	- [x] Elias (New Jerusalem)
	- [x] Universal Friend (New Jerusalem)
	- [x] Xentha (New Jerusalem)
	- [x] Splitfoot (Genesee River)
	- [x] Genushio (Fallstown)

4. [x] Create five (5) hostile characters.
	- [x] wharf rat (Boston Harbor)
	- [x] drunk fisherman (Boston Harbor)
	- [x] pirate (Boston Harbor)
	- [x] tavern wench (Boston Town)
	- [x] cut throat (Boston Town)

5. [x] Create player's character object with health and fighting attributes:
	- [x] Maj. Charles Carroll

6. [x] Create four weapons:
	- [x] fists
	- [x] dagger
	- [x] musket
	- [x] flint-lock rifle

7. [x] Add rotating space images for map spaces on all ten areas.

8. [x] Assign default space images for all areas.


**Phase 2: Sprint**<br>

1. [x] Include placeholder images for all characters created.

2. Create all gameplay functions for at least first three (3) areas.
	- [x] set up initialize function to initialize variables and maps.
	- [x] set up reset function to reset variable at start of each new area.
	- [x] set up render button to set up images each time player moves.
	- [x] make "start" button start the game.
	- [x] create exchange/dialogue functionality
	- [x] create basic battle functionality

4. [x] Create some character exchanges/dialogues.
	- Create dialogues with: 
	- [x] Col. Rochester at Welcome/Boston Harbor.
	- [x] Constable
	- [x] Wharf Rat
	- [x] Pirate
	- [x] Drunken Fisherman
	- [x] Tavern Wench
	- [x] Cut Throat

5. [x] Create random monster generator for player moves on empty spaces.

6. [x] Create post-battle loot function

7. [x] Add space images for each area.

8. [x] Add movement functionality for the player to move around maps and progress through the game.

9. [x] Add in-game coordinates for player to track his/her own location.



**Phase 3: Icebox**<br>

1. Create dialogues for all characters in all areas

2. Include at music tracks.

3. Include sound effects

4. [ ] Create sub-locations for Town of Boston:
	- [ ] Green Dragon tavern
	- [ ] Town Gate
	- [ ] Quincy Market (buy/sell goods)
	- [ ] North End apothecary (buy potions/spells)

5. [ ] Enhance battle functionality to include actual attacks and defenses.

6. Add full battle functionality that includes actual attacks/defenses, shows weapons used and allows spells to be cast.

8. Add in-game stores for item purchase.

9. Add in-game gold for looting, buying, and selling.

11. Add all characters and dialogue exchanges.



******

##4. User Stories

<u>Task: Write at least a handful (8-12) specific, measurable user stories for your app.</u>

<br>

**<u>Role:</u>** As a player,

**<u>Goal:</u>** I would like the game to includes beautiful imagery matching the character's locations,

**<u>Reason:</u>** so that the in-game world is more attractive.

********

**<u>Role:</u>** As a role playing gamer,

**<u>Goal:</u>** I would like the game to include movement buttons to navigate through maps directionally,

**<u>Reason:</u>** so that I can progress through the game.

********

**<u>Role:</u>** As a gamer,

**<u>Goal:</u>** I would like the game to include a fighting engine,

**<u>Reason:</u>** so that gameplay is fun and challenging.

********

**<u>Role:</u>** As a fiction reader,

**<u>Goal:</u>** I would like the game to include many interesting characters to interact with,

**<u>Reason:</u>** so that I can appreciate story elements.

********

**<u>Role:</u>** As an adventure gamer

**<u>Goal:</u>** I would like the game to include maps of reasonable size,

**<u>Reason:</u>** so that the game is not so small that it's too easy and not so big that it's too tedious.

********

**<u>Role:</u>** As an Adventure Gamer,

**<u>Goal:</u>** I would like the game to include a variety of key, specific locations,

**<u>Reason:</u>** to keep the game interesting and offer opportunities for exploration (for fun) and places to find.

********

**<u>Role:</u>** As a History Buff,

**<u>Goal:</u>** I would like the game to include real places from the American Northeast,

**<u>Reason:</u>** because I can associate with real places and am interested in their history.

********

**<u>Role:</u>** As a History Buff,

**<u>Goal:</u>** I would like the game to include real historical characters,

**<u>Reason:</u>** because I want to know more about the early history and mythology of the American Northeast.

********

**<u>Role:</u>** As a History Buff,

**<u>Goal:</u>** I would like the game to include actual historical elements,

**<u>Reason:</u>** because I want to know more about the early history and mythology of the American Northeast.

********

**<u>Role:</u>** As an adventure gamer,

**<u>Goal:</u>** I want the game to include a linear storyline,

**<u>Reason:</u>** so that I can get involved in the interactive story.

********

