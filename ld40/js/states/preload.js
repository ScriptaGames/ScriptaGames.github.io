class PreloadState extends Phaser.State {
    preload() {
        console.log('[preload] preloading assets');

        // loading bar

        this.loadingBar = this.game.add.sprite(config.CANVAS_WIDTH/2 - 300, this.game.world.centerY, 'loading-bar');
        this.load.setPreloadSprite(this.loadingBar);
        this.loadingBar.anchor.set(0, 0.5);

        // images

        this.game.load.image('logo', 'images/logo.png');
        this.game.load.image('user', 'images/user-pixel-big.png');
        this.game.load.image('server', 'images/server-pixel-big.png');
        this.game.load.image('server-big', 'images/server-pixel-bigger.png');
        this.game.load.image('algorithm', 'images/algorithm.png');
        this.game.load.image('file', 'images/file-pixel-big.png');
        this.game.load.image('wire', 'images/wire.png');
        this.game.load.image('letter-bg', 'images/letter-bg.png');
        this.game.load.image('lost', 'images/lost.png');
        this.game.load.image('score-bg', 'images/score-dialog-bg.png');
        this.game.load.image('compressed-bar', 'images/compressed-bar.png');
        this.game.load.image('uncompressed-bar', 'images/uncompressed-bar.png');
        this.game.load.image('lost-bar', 'images/lost-bar.png');

        // letters
        this.game.load.image('a', 'images/letters/a.png');
        this.game.load.image('b', 'images/letters/b.png');
        this.game.load.image('c', 'images/letters/c.png');
        this.game.load.image('d', 'images/letters/d.png');
        this.game.load.image('e', 'images/letters/e.png');
        this.game.load.image('f', 'images/letters/f.png');
        this.game.load.image('g', 'images/letters/g.png');
        this.game.load.image('h', 'images/letters/h.png');
        this.game.load.image('i', 'images/letters/i.png');
        this.game.load.image('j', 'images/letters/j.png');
        this.game.load.image('k', 'images/letters/k.png');
        this.game.load.image('l', 'images/letters/l.png');
        this.game.load.image('m', 'images/letters/m.png');
        this.game.load.image('n', 'images/letters/n.png');
        this.game.load.image('o', 'images/letters/o.png');
        this.game.load.image('p', 'images/letters/p.png');
        this.game.load.image('q', 'images/letters/q.png');
        this.game.load.image('r', 'images/letters/r.png');
        this.game.load.image('s', 'images/letters/s.png');
        this.game.load.image('t', 'images/letters/t.png');
        this.game.load.image('u', 'images/letters/u.png');
        this.game.load.image('v', 'images/letters/v.png');
        this.game.load.image('w', 'images/letters/w.png');
        this.game.load.image('x', 'images/letters/x.png');
        this.game.load.image('y', 'images/letters/y.png');
        this.game.load.image('z', 'images/letters/z.png');
        this.game.load.image(' ', 'images/letters/space.png');
        this.game.load.image('3', 'images/letters/3.png');



        // Sprite sheets

        this.game.load.spritesheet('btn-play', 'images/button-play.png', 320, 120);
        this.game.load.spritesheet('btn-play-again', 'images/button-play-again.png', 320, 120);
        this.game.load.spritesheet('btn-next', 'images/button-next.png', 320, 120);


        // audio

        this.game.load.audio('compress', 'sounds/fx/compress.wav');
        this.game.load.audio('lost', 'sounds/fx/lost.wav');
        this.game.load.audio('typingSong', 'sounds/songs/typing.mp3');
        this.game.load.audio('fileRequest', 'sounds/fx/fileRequest.mp3');

    }

    create() {
        this.state.start('MenuState');
    }
}

