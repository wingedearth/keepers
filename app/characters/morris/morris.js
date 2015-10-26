console.log("morris.js is loaded, as in filthy rich");

// ROBERT MORRIS' EXCHANGES
app.characters.robertMorris.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Welcome, Mr. Carroll. I say welcome, because the Governor \
    has made me feel so at home here in his mansion. Wait...</p>",

    responses: [{
      button: "What's wrong?",
      respond: function() {
        app.characters.robertMorris.keyExchangeIndex = 1;
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
        app.characters.robertMorris.keyExchangeIndex = 1;
        app.carroll.moveTo([0, 2]);
        render();
      }
    }]
  })
];
