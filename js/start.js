var config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
	MapController.engine = this;
	MapController.mapPng = 'assets/dungeon.png';
	MapController.init();
    
}

function create ()
{
	this.cameras.main.setScroll(-27, -27);
	MapController.create();
	
    //this.load.atlas('cube', 'assets/animations/cube.png', 'assets/animations/cube.json');
}