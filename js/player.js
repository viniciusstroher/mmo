var PlayerController = {

	engine:null,
	sourceMarker:null,
	controls:null,
	worldPoint:null,

	init:function() {
		this.sourceMarker = this.engine.add.graphics({ lineStyle: { width: 5, color: 0xffffff, alpha: 1 } });
    	this.sourceMarker.strokeRect(0, 0, 3 * MapController.map.tileWidth, 3 * MapController.map.tileHeight);
		
		// body...
		// PlayerController
		
		this.engine.cameras.main.setScroll(-27, -27);

		// this.engine.input.on('pointerdown', this.selectSQM);

	    // var help = this.add.text(16, 16, 'Click to re-randomize.', {
	    //     fontSize: '18px',
	    //     padding: { x: 10, y: 5 },
	    //     backgroundColor: '#ffffff',
	    //     fill: '#000000'
	    // });
	    // help.setScrollFactor(0);

	    // this.setControlers();
	},

	// setControlers:function(){
	// 	var cursors = this.engine.input.keyboard.createCursorKeys();
	//     var controlConfig = {
	//         camera: this.engine.cameras.main,
	//         left: 	cursors.left,
	//         right: 	cursors.right,
	//         up: 	cursors.up,
	//         down: 	cursors.down,
	//         speed: 	0.5
	//     };

	//     this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
	// },

	selectSQM:function(){
	    this.worldPoint = this.engine.input.activePointer.positionToCamera(this.engine.cameras.main);
	    this.sourceMarker.x = MapController.map.worldToTileX(this.worldPoint.x);
	    this.sourceMarker.y = MapController.map.worldToTileY(this.worldPoint.y);

	}
}