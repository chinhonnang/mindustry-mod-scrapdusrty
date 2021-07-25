const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.hasAtmosphere = true;
scrapulo.generator = new SerpuloPlanetGenerator;
scrapulo.localizedName = "scrapulo";



const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 13);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localisedName = "scrapulo inlet";
