console.log("loadchars.js is loaded");

var loadScript = function(url) {
  var script  = document.createElement('script');
  script.type = 'text/javascript';
    script.src  = url;

    document.body.appendChild(script);

    return $(script);
};


function loadchar(area) {
  if (area.name == "Boston Harbor")
  {
    loadScript("app/characters/wharfrat/wharfrat.js");
    loadScript("app/characters/fisherman/fisherman.js");
    loadScript("app/characters/constable/constable.js");
  }

  if (area.name == "Boston Town")
  {
  loadScript("app/characters/tavernwench/tavernwench.js");
  loadScript("app/characters/cutthroat/cutthroat.js");
  loadScript("app/characters/barkeep/barkeep.js");
  loadScript("app/characters/morris/morris.js");
  loadScript("app/characters/apothecary/apothecary.js");
  loadScript("app/characters/guard/guard.js");
  }

  if (area.name == "Massachusetts")
  {
   loadScript("app/characters/tory/tory.js");
  }
}
