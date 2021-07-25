const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.accessible = true;
scrapulo.hasAtmosphere = true;
scrapulo.generator = new SerpuloPlanetGenerator;
scrapulo.generator.scl = 1;
scrapulo.generator.water = 0.06;
scrapulo.generator.waterOffset = 0.02;
scrapulo.localizedName = "scrapulo";
scrapulo.orbitRadius = 16;



const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 13);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localisedName = "scrapulo inlet";
