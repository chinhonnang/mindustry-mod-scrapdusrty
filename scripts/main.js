const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.accessible = true;
scrapulo.atmosphereRadIn = 0.1;
scrapulo.atmosphereRadOut = 0.1; 
scrapulo.hasAtmosphere = true;
scrapulo.generator = new SerpuloPlanetGenerator;

scrapulo.localizedName = "scrapulo";
scrapulo.meshLoader = new HexMesh(scrapulo, 6);
scrapulo.orbitRadius = 16;
scrapulo.startSector = 51; 


const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 13);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localisedName = "scrapulo inlet";
