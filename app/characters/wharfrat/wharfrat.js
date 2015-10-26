console.log("wharfrat.js has crawled into the open.");

// WHARF RAT'S EXCHANGES
app.characters.wharfRat.exchanges = [

    // 0
  new Exchange({
    msg: "<p>EEK! EEK! HISS! KILL!</p>",

    responses: [{
      button: "FIGHT!",
      respond: function() {
        console.log("fight");
        app.characters.wharfRat.keyExchangeIndex = 1;
        app.carroll.fight = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>EEK! EEK! HISSSSSSSSSS!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        console.log("Attack");
        app.characters.wharfRat.keyExchangeIndex = 1;
        melee(app.characters.wharfRat);
        render();
      }
    }, {
      button: "RETREAT!",
      respond: function() {
        console.log("Retreat");
        app.characters.wharfRat.keyExchangeIndex = 1;
        retreat(app.character.wharfRat);
        render();
      }
    }]
  })
];
