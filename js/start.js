var config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
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

	MapController.create();

	PlayerController.engine = this;
	PlayerController.init();

}

function update (time, delta)
{
	// console.log(time,delta);
    PlayerController.controls.update(delta);
    PlayerController.selectSQM();
}