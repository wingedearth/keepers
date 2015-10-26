console.log("cutthroat.js is ready for his next customer!");

// CUT THROAT'S EXCHANGES
app.characters.cutthroat.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Would you care for a cut, governah? Your throat perhaps?</p>",

    responses: [{
      button: "No, leave me alone.",
      respond: function() {
        app.characters.cutthroat.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>Too bad! I'll cut it anyway!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        app.characters.cutthroat.keyExchangeIndex = 1;
        melee(app.characters.cutthroat);
        render();
      }
    }, {
      button: "RETREAT!",
      respond: function() {
        console.log("Retreat");
        app.characters.cutthroat.keyExchangeIndex = 1;
        retreat(app.character.cutthroat);
        render();
      }
    }]
  })
];
