function keyEvent(id)
{
	// Welcome Event
	if (id==0)
	{
		// Col. Rochester dialogue
		changeArea = 1;
	}

	// Boston Harbor events
	if (id==1)
	{
		if (currentPlace == [2, 2])
		{
			// wake-up event
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
		// North End event / apothecary
		}		

		if (currentPlace == [0, 1])
		{
		// Green Dragon event with Robert Morris
		// mission = 1;
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