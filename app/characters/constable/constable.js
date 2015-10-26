console.log("constable.js reporting for duty");

// CONSTABLE INTERACTIONS
app.characters.constable.exchanges = [

    // 0
  new Exchange({
    msg: "<p>Good day to you, sir. I am Constable Barney.</p>",

    responses: [{
      button: "Good day, Constable.",
      respond: function() {
        console.log("gday");
        app.characters.constable.keyExchangeIndex = 1;
        render();
      }
    },
    {
      button: "Which way to Boston Town?",
      respond: function() {
        console.log("whichway");
        app.characters.constable.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "Right this way to Boston Town.",

    responses: [{
      button: "I am much obliged to you, Constable.",
      respond: function() {
        console.log("Attack");
        app.characters.constable.keyExchangeIndex = 1;
        app.carroll.arriveAt(app.areas[2]);
        render();
      }
    }, {
      button: "Time for some chowdah!",
      respond: function() {
        console.log("chowdah");
        app.characters.constable.keyExchangeIndex = 1;
        app.carroll.arriveAt(app.areas[2]);
        render();
      }
    }]
  })
];
