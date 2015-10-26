console.log("yarrrrrr, pirate.js is on the deck.");

// PIRATE'S EXCHANGES
app.characters.pirate.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Ahoy, matey! You survived our attack! But \
       not for long!</p>",

    responses: [{
      button: "FIGHT!",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 1;
        app.carroll.fight = 1;
        render();
      }
    },
    ]
  }),

  // 1
  new Exchange({
    msg: "<p>Avast! We don't parlay, we kill!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 1;
        melee(app.characters.pirate);

        render();
      }
    },
    {
      button: "RETREAT!",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 1;
        retreat(app.characters.pirate);
        render();
      }
    }]
  }),

  // 2
  new Exchange({
    msg: "<p>Well well well, if it isn't the bilge-sucking landlubber\
       from Mary Land! Off to call the constable on us, are ye?\
       Ye scallywag won't make it two planks before I cleave\
       ye to the brisket and send ye down to Davy Jones' Locker.</p>",

    responses: [{
      button: "Have we met?",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 3;
        render();
      }
    },
    {
      button: "Die, pirate scum!",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 4;
        render();
      }
    },
    {
      button: "Nice costume. I'll be going as a ninja.",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 3;
        render();
      }
    }]
  }),

    // 3
  new Exchange({
    msg: "<p>Don't tell me ye've forgotten us already, bucko.\
       Can't be too surprised, I suppose. Twas me knocked\
       you upside the head, I did. No matter, you'll be\
       be feedin' the fish before you can say,\
       yo ho ho!</p>",

    responses: [{
      button: "No one talks to me like that.",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 4;
        render();
      }
    },
    {
      button: "I'm a lover not a fighter. No wait, I'm a fighter.",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 4;
        render();
      }
    }]
  }),

    // 4
  new Exchange({
    msg: "<p>Avast, dog!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        app.characters.pirate.keyExchangeIndex = 4;
        melee(app.characters.pirate);
        if (app.carroll.fight == 0) {
          app.characters.colrochester.keyExchangeIndex = 5;
          app.characters.pirate.keyExchangeIndex = 2;
          app.carroll.area.map[2][2] = app.characters.colrochester;
        }
        render();
      }
    }]
  })
];
