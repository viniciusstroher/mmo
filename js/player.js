var PlayerController = {

	engine:null,
	sourceMarker:null,
	controls:null,
	worldPoint:null,

	init:function() {
		this.sourceMarker = this.engine.add.graphics({ lineStyle: { width: 5, color: 0xffffff, alpha: 1 } });
    	this.sourceMarker.strokeRect(0, 0, 3 * MapController.map.tileWidth, 3 * MapController.map.tileHeight);
	    this.setControlers();
	},

	setControlers:function(){
		this.engine.cameras.main.setBounds(0, 0, MapController.map.widthInPixels, MapController.map.heightInPixels);
		
		var cursors = this.engine.input.keyboard.createCursorKeys();
	    var controlConfig = {
	        camera: this.engine.cameras.main,
	        left: 	cursors.left,
	        right: 	cursors.right,
	        up: 	cursors.up,
	        down: 	cursors.down,
	        speed: 	0.5
	    };

	    this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
	},

	selectSQM:function(){
	    this.worldPoint = this.engine.input.activePointer.positionToCamera(this.engine.cameras.main);
	    this.sourceMarker.x = MapController.map.worldToTileX(this.worldPoint.x)*23;
	    this.sourceMarker.y = MapController.map.worldToTileY(this.worldPoint.y)*17;

	}
}