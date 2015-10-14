function keyEvent(id)
{
	// Welcome Event
	if (id==0)
	{
		while(changeArea == 0)
		{
			// Col. Rochester dialogue
			currentPerson = goodGuys[0][0];
			$('#textbox').text("Good morning, Charles.");
			setTimeout(function() { 
				$('#textbox').html("<span>Good morning, Charles.<br>You took a nasty hit to the head.</span>")
			}, 1800);
			setTimeout(function() { 
				$('#textbox').html("<span>Good morning, Charles.<br>You took a nasty hit to the head.<br>Do you remember where you are?</span>")
			}, 1800);
			setTimeout(function() { 
				$('#actionlist').append("<li id=#nextbutton>I don't remember</li>");
				$('#nextbutton').css('border', '2px solid black');
			}, 3800);
			$('li').hover(
				function()
				{ 
					$(this).css('background-color', 'dodgerblue');
				},
				function()
				{
					$(this).css('background-color', 'cornsilk');
				} );

			changeArea = 1;
		}
	}

	// Boston Harbor events
	if (id==1)
	{
		if (currentPlace == [2, 2])
		{
			// wake-up event
			currentPerson = colrochester;
			loadSpace(1, 2, 2);
			loadMonster(currentPerson);
			loadText(id);
		}
		if (currentPlace == [0, 1])
		{
			// constable event
			changeArea = 1;
		}
	}
	
	// Boston Town events
	if (id==2)
	{
		if (currentPlace == [3, 2])
		{
		// startmap event
		}		

		if (currentPlace == [0, 3])
		{
		// North End event / apothecary / buy/sell
		}		

		if (currentPlace == [0, 1])
		{
		// Green Dragon Tavern with Robert Morris
		mission = 1;
		}		

		if (currentPlace == [1, 1])
		{
		// Quincy Market
		// buy/sell goods
		}

		if (currentPlace = [3, 0])
		{
		// exit event
		// if (mission==1)
			// exit dialogue
			// changeArea = 1;	
		}
	}

	// Massachusetts events
	if (id==3)
	{
		// event
		changeArea = 1;
	}
	if (id==4)
	{
		// event
		changeArea = 1;
	}
	if (id==5)
	{
		// event
		changeArea = 1;
	}
	if (id==6)
	{
		// event
		changeArea = 1;
	}
	if (id==7)
	{
		// event
		changeArea = 1;
	}
	if (id==8)
	{
		// event
		changeArea = 1;
	}
	if (id==9)
	{
		// event
		changeArea = 1;
	}
}