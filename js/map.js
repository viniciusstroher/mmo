var MapController = {
	
	hashMap : {},
	mapPng: null,
	engine:null,

	map:null,
	tile:null,
	

	groundLayer:null,
	objectLayer:null,

	init:function() {
		console.log('init');
		if(this.engine == null){
			return "MapController precisa de engine";
		}

		this.engine.load.image('tiles', 'assets/dungeon.png');
		this.map = this.engine.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 23, height: 17 });
		
	},

	create:function(){
		console.log('create');
		this.tile = this.map.addTilesetImage('tiles');
		this.groundLayer = this.map.createBlankDynamicLayer('Ground Layer', this.tile);
	    this.objectLayer = this.map.createBlankDynamicLayer('Object Layer', this.tile);
	    
	    this.groundLayer.setScale(2);
	    this.objectLayer.setScale(2);
	    
	    this.createBorders();
	    this.loadMapElements();
	},


	createBorders:function(){
		console.log('createBorders');
		this.groundLayer.fill(39, 0, 0, this.map.width, 1);
	    this.groundLayer.fill(1, 0, this.map.height - 1, this.map.width, 1);
	    this.groundLayer.fill(21, 0, 0, 1, this.map.height);
	    this.groundLayer.fill(19, this.map.width - 1, 0, 1, this.map.height);
	    this.groundLayer.putTileAt(3, 0, 0);
	    this.groundLayer.putTileAt(4, this.map.width - 1, 0);
	    this.groundLayer.putTileAt(23, this.map.width - 1, this.map.height - 1);
	    this.groundLayer.putTileAt(22, 0, this.map.height - 1);
	},

	loadMapElements:function(){

	    // Fill the floor with random ground tiles
	    this.groundLayer.weightedRandomize(1, 1, this.map.width - 2, this.map.height - 2, [
	        { index: 6, weight: 4 }, // Regular floor tile (4x more likely)
	        { index: 7, weight: 1 }, // Tile variation with 1 rock
	        { index: 8, weight: 1 }, // Tile variation with 1 rock
	        { index: 26, weight: 1 } // Tile variation with 1 rock
	    ]);

	    // Fill the floor of the room with random, weighted tiles
	    this.objectLayer.weightedRandomize(1, 1, this.map.width - 2, this.map.height - 2, [
	        { index: -1, weight: 50 }, // Place an empty tile most of the tile
	        { index: 13, weight: 3 }, // Empty pot
	        { index: 32, weight: 2 }, // Full pot
	        { index: 127, weight: 1 }, // Open crate
	        { index: 108, weight: 1 }, // Empty crate
	        { index: 109, weight: 2 }, // Open barrel
	        { index: 110, weight: 2 }, // Empty barrel
	        { index: 166, weight: 0.25 }, // Chest
	        { index: 167, weight: 0.25 } // Trap door
	    ]);
	}
}