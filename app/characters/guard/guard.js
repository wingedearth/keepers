console.log("guard.js is reporting for duty");

// GUARD'S EXCHANGES
app.characters.guard.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Good afternoon, sir. What is your business here?</p>",

    responses: [{
      button: "I'm leaving Boston Town, heading West.",
      respond: function() {
        app.characters.guard.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>Exit through this gate. Have a wonderful day.</p>",

    responses: [{
      button: "Fare well.",
      respond: function() {
        app.carroll.arriveAt(app.areas[3]);
        render();
      }
    }]
  })
];
