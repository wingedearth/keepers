console.log("tavernwench.js is ready for a drink!");

// TAVERN WENCH'S EXCHANGES
app.characters.tavernwench.exchanges = [

    // 0
  new Exchange({
    msg: "<p>'Ello, dearie! Would you spare some coin? I spent\
       all my silver at a local tavern called Cheers.'</p>",

    responses: [{
      button: "No, leave me alone.",
      respond: function() {
        app.characters.tavernwench.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>I'll make you regret your lack of charity!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        melee(app.characters.tavernwench);
        render();
      }
    }, {
      button: "RETREAT!",
      respond: function() {
        console.log("Retreat");
        retreat(app.character.tavernwench);
        render();
      }
    }]
  })
];
