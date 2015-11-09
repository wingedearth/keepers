console.log("Col. Rochester has been summoned.");

// COL. NATHANIEL ROCHESTER'S EXCHANGES

app.characters.colrochester.exchanges = [
    // 0
  new Exchange({
    msg: '<p><center><span id="maintitle">Keepers of the Western Door</span> \
         <br><br>a game of honor and magic<br>in the historic    \
         American Northeast<br><br>&copy; 2015 Andrew A. Anissi  \
         </center></p>',

    responses: [{
      button: "Start",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 1;
        render();
      }
    }, {
      button: "Continue",
      respond: function() {
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>Good morning, Charles. You are finally awake. \
         I'm afraid our ship from Maryland was attacked by pirates. \
         You took a nasty hit to the head, but I see no sign of \
         permanent damage. Do you remember where you are?</p>",

    responses: [{
      button: "I do not remember.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 2;
        render();
      }
    }, {
      button: "Who are you?",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 2;
        render();
      }
    }]
  }),

  // 2
  new Exchange({
    msg: "<p>I am your friend, Col. Nathaniel Rochester.\
    I accompanied you from Maryland to introduce you to \
    Mr. Robert Morris, presently staying here in \
    Boston, Massachusetts. You recently inherited a vast estate,\
    but you lack the funds to sustain it. Mr. Morris is the \
    richest man in America in 1791 and can provide the financing you need\
    to get your house in order.<br>Are you ready to disembark?</p>",

    responses: [{
      button: "I am ready, Sir.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 4;
        render();
      }
    }, {
      button: "Sure, whatever.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 4;
        render();
      }
    }, {
      button: "No, I think I'll stay right here.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 3;
        render();
      }
    }]
  }),

  // 3

  new Exchange({
    msg: "<p>I am here to help you, Major Carroll. I ask you again, \
       are you ready to leave this ship and enter Boston Town?</p>",

    responses: [{
      button: "I am ready, Sir.",
      respond: function() {
        console.log("Yes");
        app.characters.colrochester.keyExchangeIndex = 4;
        render();
      }
    },  {
      button: "Fo Sheezy!",
      respond: function() {
        console.log("for sure.");
        app.characters.colrochester.keyExchangeIndex = 4;
        render();
      }
    }]
  }),

  // 4

  new Exchange({
    msg: "<p>Let's be on our way then...<br>Oh no, look out! They're back!\
     "+ " It's a pirate!</p>",

    responses: [{
      button: "I am not afraid.",
      respond: function() {
        console.log("Yes");
        app.characters.colrochester.keyExchangeIndex = 5;
        app.carroll.arriveAt(app.areas[1]);
        render();
      }
    },  {
      button: "I'll mop the floor with this clown.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 5;
        app.carroll.arriveAt(app.areas[1]);
        render();
      }
    }]
  }),

  // 5

  new Exchange({
    msg: "<p>Well done, lad! And serves him right, bloody pirate.\
       I only wish I could have helped you in this fight, but...\
       well...I suppose you have been polite enough not to\
       mention my aged appearance.</p>",

    responses: [{
      button: "What are you talking about?",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 7;
        render();
      }
    },  {
      button: "Nah...you look fine.",
      respond: function() {
        console.log("who?");
        app.characters.colrochester.keyExchangeIndex = 7;
        render();
      }
    }]
  }),

  // 6

  new Exchange({
    msg: "<p>Tis good to be back in Boston. I remember my time here\
       with General Washington, driving the Redcoats back into the\
       ocean. But let's stay focused. You must find Robert Morris.\
       He is an important man, just named by the President to be\
       the first Superintendent of Finance of the United States!\
       You will find Mr. Morris at the Governor's Mansion.</p>",

    responses: [{
      button: "Thank you Colonel. Let's be on our way.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 6;
        app.carroll.area.map[3][2] = null;
        app.carroll.moveTo([2, 2]);
        app.carroll.fight = 0;
        render();
      }
    },  {
      button: "You're a very helpful ghost.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 6;
        app.carroll.area.map[3][2] = null;
        app.carroll.fight = 0;
        render();
      }
    }]
  }),

  // 7

  new Exchange({
    msg: "<p>I am not the Nathaniel Rochester you know. Or I am,\
       but rather have lived long after 1791. I have lived...\
       and then I have left Time. The Nathaniel Rochester you know\
       is still in Maryland. He will live many years, and then he \
       will leave Time, and then he will be me. As a spirt Out of\
       Time...yes a ghost if you will. I have come to help you now.</p>",

    responses: [{
      button: "You're...a ghost?",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 8;
        render();
      }
    },  {
      button: "What do you want with me?",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 8;
        render();
      }
    },
      {
      button: "That is fascinating, albeit alarming. But I trust you.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 8;
        render();
      }
    }]
  }),

  // 8

  new Exchange({
    msg: "<p>I appear old to you, because my self-image continues\
       to be that of an old man. With the right discipline, however, I can\
       appear in any form. I have come to you now because your\
       quest is far more important that you know. There is\
       much I cannot reveal to you now, but I will help to guide you.</p>",

    responses: [{
      button: "Thank you, Colonel.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 6;
        app.carroll.area.map[2][2] = null;
        render();
      }
    },  {
      button: "You're the ghost with the most.",
      respond: function() {
        app.characters.colrochester.keyExchangeIndex = 6;
        app.carroll.area.map[2][2] = null;
        render();
      }
    }]
  })

];
