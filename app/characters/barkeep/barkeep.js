console.log("barkeep.js is mixing up a cocktail");

// BARKEEP'S EXCHANGES
app.characters.barkeep.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Good day to you, Sir. The bar's closed now, I'm afraid.</p>",

    responses: [{
      button: "Why is the bar closed?",
      respond: function() {
        app.characters.barkeep.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>My character hasn't really been set up yet. Sorry\
        about that, chief. You'd think someone would set up Sam Malone\
        before Diane.</p>",

    responses: [{
      button: "Goodbye then.",
      respond: function() {
        app.characters.barkeep.keyExchangeIndex = 1;
        app.carroll.moveTo([2, 1]);
        render();
      }
    }]
  })
];
