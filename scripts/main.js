const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.alwaysUnlocked = true;
scrapulo.hasAtmosphere = true;
scrapulo.generator = new serpuloPlanetGenerator();
scrapulo.localisedName = "scrapulo";
scrapulo.mesh = new HexMesh(scrapulo, 1);


const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 51);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localisedName = "scrapulo inlet";
