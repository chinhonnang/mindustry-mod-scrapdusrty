
const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.generator = new SerpuloPlanetGenerator();
scrapulo.localizedName = "scrapulo";
scrapulo.meshLoader = new HexMesh(scrapulo, 6);
scrapulo.orbitRadius = 16;
scrapulo.orbitTime = 9440;
scrapulo.rotateTime = 25 * 60;
scrapulo.startSector = 51; 



const scrapulo_inlet = new SectorPreset("scarpulo_inlet", scrapulo, 13);
scrapulo_inlet.difficulty = 2; 
scrapulo_inlet.alwaysUnlocked = true;
scrapulo_inlet.captureWave = 30; 
scrapulo_inlet.localizedName = "scrapulo inlet";

const scrapulo_0 = new JavaAdapter(Planet,{},"scrapulo_0", Planets.sun, 4,1);
scrapulo_0.accessible = true;
scrapulo_0.generator = new SerpuloPlanetGenerator();
scrapulo_0.localizedName = "scrapulo_0";
scrapulo_0.orbitTime = 12211;
scrapulo_0.orbitRadius = 19;
scrapulo_0.rotateTime = 1200;
scrapulo_0.startSector = 81; 

const scr_0_inlet = new SectorPreset("scrapulo_0_inlet", scrapulo, 124);
scr_0_inlet.alwaysUnlocked = true;
scr_0_inlet.captureWave = 50;
scr_0_inlet.diffuculty = 4;
scr_0_inlet.localizedName = "scrapulo_0 inlet";


function scrapulo_gen (diff)
{
       const scr_gen = extend(PlanetGenerator,
       {
              
       });
       return scr_gen;
}
       
      

