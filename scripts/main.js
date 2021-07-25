
const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.generator = new SerpuloPlanetGenerator();
scrapulo.mesh = new HexMesh(scrapulo, 5);
scrapulo.orbitRadius = 15;
scrapulo.orbitTime = 1500;
scrapulo.rotateTime = 130;
scrapulo.bloom = true;
scrapulo.accessible = true;
scrapulo.startSector = 51;
scrapulo.hasAtmosphere = false;
scrapulo.atmosphereColor = Color.valueOf("63A53cFF");
scrapulo.atmosphereRadIn = 1.0;
scrapulo.atmosphereRadOut = 1.0;
scrapulo.alwaysUnlocked = true;
scrapulo.localizedName = "scrapulo";

const scrapulo_inlet = new SectorPreset("scarpulo_inlet", abcde, 51);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localisedName = "scrapulo inlet";
