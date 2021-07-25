const simpx = new Packages.arc.util.noise.Simplex();
const ridpl = new Packages.arc.util.noise.RidgedPerlin(1, 2);
const scrapulo_gen = extend(PlanetGenerator, 
{
    getColor(position){
        var block = this.getBlock(position);

        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        return Tmp.c1;
    },
    
    getBlock(pos){
        var height = this.rawHeight(pos);
    
        Tmp.v31.set(pos);
        pos = Tmp.v33.set(pos).scl(scrapulo_gen.scl);
        var rad = scrapulo_gen.scl;
        var temp = Mathf.clamp(Math.abs(pos.y * 2) / rad);
        var tnoise = simplex.octaveNoise3D(7, 0.56, 1 / 3, pos.x, pos.y + 999, pos.z);
        temp = Mathf.lerp(temp, tnoise, 0.5);
        height *= 1.2;
        height = Mathf.clamp(height);
    
        var tar = simplex.octaveNoise3D(4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
        var res = scrapulo_gen.arr[
           Mathf.clamp(Mathf.floor(temp * scrapulo_gen.arr.length), 0, scrapulo_gen.arr[0].length - 1)]
        [ Mathf.clamp(Mathf.floor(height * scrapulo_gen.arr[0].length), 0, scrapulo_gen.arr[0].length - 1)];
    
        if (tar > 0.5){
            return scrapulo_gen.tars.get(res, res);
        } else {
            return res;
        };
    },
    
    rawHeight(pos){
        var pos = Tmp.v33.set(pos);
        pos.scl(scrapulo_gen.scl);
        
        return (Mathf.pow(simplex.octaveNoise3D(7, 0.5, 1 / 3, pos.x, pos.y, pos.z), 2.3) + scrapulo_gen.waterOffset) / (1 + scrapulo_gen.waterOffset);  
    },
    //script is copied from Gravilaso Mod. 
    getHeight(position){
        var height = this.rawHeight(position);
        return Math.max(height, scrapulo_gen.water);
    },
    
    genTile(position, tile){
        tile.floor = this.getBlock(position);
        tile.block = tile.floor.asFloor().wall;

        if(rid.getValue(position.x, position.y, position.z, 22) > 0.32){
            tile.block = Blocks.air;
        }
    }
});

scrapulo_gen.arr = [
    [Blocks.stone, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.sand, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.snow],
    [Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.snow, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.stone],
    [Blocks.stone, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone],  
    [Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow],  
    [Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.snow],  
     
    [Blocks.darksandWater, Blocks.craters, Blocks.darksand, Blocks.tar, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.tar, Blocks.tar, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass],
    [Blocks.darksandWater, Blocks.darksandWater, Blocks.darksand, Blocks.tar, Blocks.metalFloorDamaged, Blocks.tar, Blocks.dacite, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass],
    [Blocks.darksandWater, Blocks.darksand, Blocks.grass, Blocks.grass, Blocks.dacite, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass],

    [Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.sand, Blocks.sand],  
    [Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.snow],  
    [Blocks.stone, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.stone],
    [Blocks.stone, Blocks.sand, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.snow, Blocks.sand], 
    [Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone], 
    [Blocks.stone, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.snow],
    [Blocks.ice, Blocks.stone, Blocks.snow, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.sand, Blocks.sand]
];
scrapulo_gen.scl = 7;
scrapulo_gen.waterOffset = 0.02;
scrapulo_gen.basegen = new BaseGenerator();
scrapulo_gen.water = 0.07;//normal is 0.06

scrapulo_gen.dec = new ObjectMap().of(
    Blocks.stone, Blocks.sand,
    Blocks.dacite, Blocks.stone,
    Blocks.stone, Blocks.sand,
    Blocks.stone, Blocks.snow
);

scrapulo_gen.tars = new ObjectMap().of(
    Blocks.stone, Blocks.snow,
    Blocks.dacite, Blocks.sand
);

const scrapulo = new JavaAdapter(Planet, {}, "scrapulo", Planets.sun, 4, 1);
scrapulo.generator = new scrapulo_gen();
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
