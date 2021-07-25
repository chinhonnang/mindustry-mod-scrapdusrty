const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4.1, 1);
scrapulo.alwaysUnlocked = true;
scrapulo.hasAtmosphere = true;
scrapulo.generator = new scr_planet_gen(1);

function scr_planet_gen(diff)
{
  var arr:Array = new Array();
  var generator: Object = {};
  
};

const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 51);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localisedName = "scrapulo inlet";
