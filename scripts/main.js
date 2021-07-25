const scrapuloGenerator extend(PlanetGenerator, 
{
    getColor(position){
        var block = this.getBlock(position);

        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        return Tmp.c1;
},

const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 0.9);
scrapulo.generator = new SerpuloPlanetGenerator();
scrapulo.mesh = new HexMesh(scrapulo, 5);
scrapulo.orbitRadius = 100;
scrapulo.orbitTime = 1500;
scrapulo.rotateTime = 130;
scrapulo.bloom = true;
scrapulo.accessible = true;
scrapulo.startSector = 51;
scrapulo.hasAtmosphere = false;
scrapulo.atmosphereColor = Color.valueOf("63A53cFF");
scrapulo.atmosphereRadIn = 0.0;
scrapulo.atmosphereRadOut = 0.0;
scrapulo.alwaysUnlocked = true;
scrapulo.localizedName = "scrapulo";

var h = new SectorPreset("scarpulo_inlet", abcde, 51);
h.difficulty = 2; 
h.alwaysUnlocked = true;
h.captureWave = 30; 
h.localisedName = "scrapulo inlet";
