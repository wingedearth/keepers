
function rochesterDial(x) // Col. Rochester dialogue
{
	if (x==1)
	{
		$('#textbox').text("Good morning, Charles.");
		setTimeout(function() { 
			$('#textbox').append("<br>You are finally awake. I'm afraid your ship from Maryland was attacked by pirates.");
		}, 1800);
		setTimeout(function() { 
			$('#textbox').append("<br>You took a nasty hit to the head, but I see no sign of permanent damage.");
		}, 2500);
		setTimeout(function() 
		{ 
			$('#textbox').append("<br>Do you remember where you are?");
			$('#roch1').show();
			$('#roch2').show();

		// Check if player answers Col. Roch dialogue.
		$('#roch1').click(function()
		{
			$('#roch1').hide();
			$('#roch2').hide();
			dial += dial;
		} );

		$('#roch2').click(function()
		{
			$('#roch1').hide();
			$('#roch2').hide();
			dial += dial;
		} );		

		hoverFunk();
		}, 3000);
	}



	if (x==2)
	{
		$('#textbox').text("I am your friend from Maryland, Col. Nathanial Rochester. <br>I accompanied you to make a formal introduction to Mr. Robert Morris, who is presently staying here in Boston, Massachusetts. <br>You have recently inherited a vast estate, but you lack the funds to sustain it. Mr. Morris is the richest man in America and can provide you the financing you need to get your house in order.<br>Are you ready to disembark?");

		$('#actionlist').append("<li id='cont1'>I am ready, Sir.</li>");
		$('#actionlist').append("<li id='cont2'>Sure, whatever.</li>");
		$('#actionlist').append("<li id='cont3'>Fo Sheezy!</li>");
		$('.roch1').css('border', '3px solid black');
		hoverFunk();

		$('.cont1').click(function()
		{
			$('.cont1').remove();
			$('.cont2').remove();
			$('.cont3').remove();
			areaIndex += areaIndex;
		} );

	}
}