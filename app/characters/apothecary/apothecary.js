console.log("apothecary.js has a potion ready")

// APOTHECARY'S EXCHANGES
app.characters.apothecary.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Hello there, Sir, and welcome. I am the apothecary.</p>",

    responses: [{
      button: "Hi there. What do you have for sale?",
      respond: function() {
        app.characters.apothecary.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>Now's not a good time. My character hasn't really been created yet. Raincheck?</p>",

    responses: [{
      button: "Ok, goodbye then.",
      respond: function() {
        app.characters.apothecary.keyExchangeIndex = 1;
        app.carroll.moveTo([0, 2]);
        render();
      }
    }]
  })
];
