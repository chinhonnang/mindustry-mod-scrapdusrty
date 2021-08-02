const simplex = new Packages.arc.util.noise.Simplex();
const rid = new Packages.arc.util.noise.RidgedPerlin(1, 2);

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


       
      

//this is a copied code from a chinese mod named "创世神-creator" which was errorous at the time it is pasted here 
const TwinGenerator4 = extend(PlanetGenerator, 
   {getColor(position)
    { 
        var block = this.getBlock(position);
        //print(block)
        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        return Tmp.c1
    },
    
    getBlock(pos){
    var height = this.rawHeight(pos);

    Tmp.v31.set(pos);
    pos = Tmp.v33.set(pos).scl(TwinGenerator4.scl);
    var rad = TwinGenerator4.scl;
    var temp = Mathf.clamp(Math.abs(pos.y * 2) / rad);
    var tnoise = simplex.octaveNoise3D(7, 0.56, 1 / 3, pos.x, pos.y + 999, pos.z);
    temp = Mathf.lerp(temp, tnoise, 0.5);
    height *= 1.2
    height = Mathf.clamp(height);

    var tar = simplex.octaveNoise3D(4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
    var res = TwinGenerator4.arr[
	    Mathf.clamp(Mathf.floor(temp * TwinGenerator4.arr.length), 0, TwinGenerator4.arr[0].length - 1)][ Mathf.clamp(Mathf.floor(height * TwinGenerator4.arr[0].length), 0, TwinGenerator4.arr[0].length - 1)
    ];

    if (tar > 0.5){
	    return TwinGenerator4.tars.get(res, res);
    } else {
	    return res;
    };
    },
    
    rawHeight(pos){
    var pos = Tmp.v33.set(pos);
    pos.scl(TwinGenerator4.scl);

    return (Mathf.pow(simplex.octaveNoise3D(7, 0.5, 1 / 3, pos.x, pos.y, pos.z), 2.3) + TwinGenerator4.waterOffset) / (1 + TwinGenerator4.waterOffset);  
        
    },
    
    getHeight(position){
        var height = this.rawHeight(position);
        return Math.max(height, TwinGenerator4.water);
    },
    
    genTile(position, tile){
        tile.floor = this.getBlock(position);
        tile.block = tile.floor.asFloor().wall;

        //if(noise.octaveNoise3D(5, 0.6, 8.0, position.x, position.y, position.z) > 0.65){
            //tile.block = Blocks.air;
        //}

        if(rid.getValue(position.x, position.y, position.z, 22) > 0.32){
            tile.block = Blocks.air;
        }
    }
    
});

TwinGenerator4.arr = [
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.moss, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
    [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.moss, Blocks.moss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice],
    [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.moss, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
    [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.moss, Blocks.sporeMoss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
    [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.darksandTaintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.moss, Blocks.sporeMoss, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    
];

TwinGenerator4.scl = 5;
TwinGenerator4.waterOffset = 0.001;
TwinGenerator4.basegen = new BaseGenerator();
TwinGenerator4.water = 2 / TwinGenerator4.arr[0].length;

TwinGenerator4.dec = new ObjectMap().of(
    Blocks.sporeMoss, Blocks.sporeCluster,
    Blocks.moss, Blocks.sporeCluster,
    Blocks.taintedWater, Blocks.water,
    Blocks.darksandTaintedWater, Blocks.darksandWater
);

TwinGenerator4.tars = new ObjectMap().of(
    Blocks.sporeMoss, Blocks.shale,
    Blocks.moss, Blocks.shale
);

