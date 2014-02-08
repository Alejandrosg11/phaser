
// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	game.load.image('pic', 'assets/pics/backscroll.png');

}

var image;
var image2;
var r;

function create() {

	image = game.add.image(32, 50, 'pic');

	image2 = game.add.image(32, 250, 'pic');

	r = new Phaser.Rectangle(0, 0, 100, 100);

	image2.crop(r);

	game.input.onDown.add(tint, this);

}

function tint() {

	image.tint = Math.random() * 0xFFFFFF;

}

function update() {

	if (r && r.width < 300)
	{
		r.width += 1;
		image2.crop(r);
	}
	else
	{
		image2.crop();
		r = null;
	}

}

function render() {

	game.debug.renderText(image2.width, 32, 32);

}
