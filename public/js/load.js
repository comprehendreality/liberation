/**
 * Created by user on 8/30/2014.
 */

var loadState = {
	preload: function () {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {font: '30px Geo', fill: "#ffffff"});
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');

		progressBar.anchor.setTo(0.5, 0.5);

		game.load.setPreloadSprite(progressBar);


		game.load.image('enemy', '/assets/enemy.png');
		game.load.image('coin', '/assets/coin.png');
		game.load.image('pixel', '/assets/pixel.png');
		game.load.image('background', '/assets/background.png');
		game.load.image('jumpButton', '/assets/jumpButton.png');
		game.load.image('rightButton', '/assets/rightButton.png');
		game.load.image('leftButton', '/assets/leftButton.png');

		game.load.spritesheet('player', '/assets/player2.png', 20, 20);
		game.load.spritesheet('mute', '/assets/muteButton.png', 28, 22);

		game.load.audio('jump', ['/assets/jump.ogg', '/assets/jump.mp3']);
		game.load.audio('coin', ['/assets/coin.ogg', '/assets/coin.mp3']);
		game.load.audio('dead', ['/assets/dead.ogg', '/assets/dead.mp3']);

		this.load.image('tileset', '/assets/tileset.png');
		this.load.tilemap('map', '/assets/map.json', null, Phaser.Tilemap.TILED_JSON);

	},

	create: function () {
		game.state.start("menu");
	}
};