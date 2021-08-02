
const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.generator = new SerpuloPlanetGenerator();
scrapulo.localizedName = "scrapulo";
scrapulo.meshLoader = new HexMesh(scrapulo, 6);
scrapulo.orbitRadius = 16;
scrapulo.rotateTime = 25 * 60;
scrapulo.startSector = 51; 



const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 13);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localizedName = "scrapulo inlet";

function scrapulo_gen (diff)
{
       const scr_gen = extend(PlanetGenerator,
       {
              
       });
       return scr_gen;
}
       
      

