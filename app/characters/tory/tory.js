console.log("tory.js has loaded...a rifle");

// TORY'S EXCHANGES
app.characters.tory.exchanges = [

    // 0
  new Exchange({
    msg: "<p>This land will soon return to the Crown, and the traitors\
        will be defeated. Are you with us, brother?</p>",

    responses: [{
      button: "No, leave me alone.",
      respond: function() {
        app.characters.tory.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>You rebel scum. God save the King!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        melee(app.characters.tory);
        render();
      }
    }, {
      button: "RETREAT!",
      respond: function() {
        console.log("Retreat");
        retreat(app.character.tory);
        render();
      }
    }]
  })
];
