var config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: '100%',
    height: '100%',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.atlas('cube', 'assets/animations/cube.png', 'assets/animations/cube.json');
}

function create ()
{
    //this.load.atlas('cube', 'assets/animations/cube.png', 'assets/animations/cube.json');
}