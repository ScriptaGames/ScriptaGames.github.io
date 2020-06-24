class MenuState extends Phaser.State {

    create() {
        console.log('[menu] showing main menu');

        window.menu = this;

        // Add the game logo
        let style = { font: "bold 70px Monospace", fill: "#fff", boundsAlignH: "center", boundsAlignV: "top" };
        let logoText = this.game.add.text(0, 20, "THE WEISSMAN CHALLENGE", style);
        logoText.setTextBounds(0, 20, config.CANVAS_WIDTH, 80);

        // Add some instruction text
        let instructions = "Your team is getting ready for TechCrunch Disrupt.  You are a compression algorithm.  Can you break the Weissman theoretical limit? The more uncompressed or lost data you have the worse your Weissman score will be.";
        style = { font: "18px Monospace", fill: "#fff", boundsAlignH: "center", boundsAlignV: "top",  align: "left", wordWrap: true, wordWrapWidth: 620 };
        let instructionText = this.game.add.text(0, 70, instructions, style);
        instructionText.setTextBounds(0, 70, config.CANVAS_WIDTH, 100);

        // Draw the server sprite
        this.game.add.sprite(870, 150, 'server-big');

        // Draw the ledgend
        let compressedLetter = new Letter('a', 0, 0, config.COMPRESSED_TINT, this.game);
        let uncompressedLetter = new Letter('a', 0, 60, config.UNCOMPRESSED_TINT, this.game);

        style = { font: "18px Monospace", fill: "#fff" };
        let hintCompressedText = this.game.add.text(60, 15, "Compressed data. Don't type these.", style);

        style = { font: "18px Monospace", fill: "#fff" };
        let hintUncompressedText = this.game.add.text(60, 75, "Uncompressed data. Type these to compress them.", style);

        let legendGroup = this.game.add.group();

        legendGroup.add(compressedLetter.group);
        legendGroup.add(uncompressedLetter.group);
        legendGroup.add(hintCompressedText);
        legendGroup.add(hintUncompressedText);

        legendGroup.position.set(200, 300);

        // Play button
        const playBtn = this.game.add.button(
            this.game.world.centerX,
            this.game.world.height - 70,
            'btn-play',
            this.next,
            this,
            1, // over
            0, // out
            2  // down
        );
        playBtn.anchor.set(0.5, 1);
        // playBtn.onDownSound = this.game.add.audio('ButtonTap');
        // playBtn.onOverSound = this.game.add.audio('Barrier');
        playBtn.input.useHandCursor = false;


        if (config.SKIP_MENU) {
            this.next();
        }

        // this.drawMissileHelp();
        // this.drawBarrierHelp();
    }

    next() {
        this.game.stateTransition.to('PlayState');
    }

    shutdown() {
        // this.music.stop();
    }

    // drawBarrierHelp() {
    //     const x = -370;
    //     const y = 68;
    //     const barrier = this.game.add.sprite(this.game.world.centerX + x - 100, this.game.world.height - 670 + y, 'barrier');
    //     const font = this.game.add.retroFont('gelatin-font', 70, 110, this.fontSet, 18, 0, 0);
    //     const text = this.game.add.image(80, 80, font);
    //     text.scale.set(0.5,0.5);
    //     font.text = 'Barrier';
    //     text.tint = 0x777777;
    //     text.position.x = this.game.world.centerX + x;
    //     text.position.y = this.game.world.height - 608 + y;
    // }
    //
    // drawMissileHelp() {
    //     const x = 140;
    //     const y = 40;
    //     const mouse = this.game.add.sprite(this.game.world.centerX - 44 + x, this.game.world.height - 600 + y, 'mouse');
    //     mouse.anchor.set(0.5, 0.5);
    //
    //     const font = this.game.add.retroFont('gelatin-font', 70, 110, this.fontSet, 18, 0, 0);
    //     const text = this.game.add.image(80, 80, font);
    //     text.scale.set(0.5,0.5);
    //     font.text = 'Missile';
    //     text.tint = 0x777777;
    //     text.position.x = this.game.world.centerX + x;
    //     text.position.y = this.game.world.height - 608 + y;
    //
    // }

}
