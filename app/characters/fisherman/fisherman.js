console.log("fisherman.js has come on shore");

// DRUNKEN FISHERMAN INTERACTIONS
app.characters.fisherman.exchanges = [

    // 0
  new Exchange({
    msg: "<p>I know what you did last summer!</p>",

    responses: [{
      button: "FIGHT!",
      respond: function() {
        console.log("fight");
        app.characters.fisherman.keyExchangeIndex = 1;
        render();
      }
    }]
  }),

  // 1
  new Exchange({
    msg: "<p>Wicked Pissah!</p>",

    responses: [{
      button: "ATTACK!",
      respond: function() {
        console.log("Attack");
        app.characters.fisherman.keyExchangeIndex = 1;
        melee(app.characters.fisherman);
        render();
      }
    }, {
      button: "RETREAT!",
      respond: function() {
        console.log("Retreat");
        app.characters.fisherman.keyExchangeIndex = 1;
        retreat(app.character.fisherman);
        render();
      }
    }]
  })
];
