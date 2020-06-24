'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuState = function (_Phaser$State) {
    _inherits(MenuState, _Phaser$State);

    function MenuState() {
        _classCallCheck(this, MenuState);

        return _possibleConstructorReturn(this, (MenuState.__proto__ || Object.getPrototypeOf(MenuState)).apply(this, arguments));
    }

    _createClass(MenuState, [{
        key: 'create',
        value: function create() {
            console.log('[menu] showing main menu');

            window.menu = this;

            if (config.AUTO_PLAY) {
                this.next();
            }

            this.music = this.game.add.audio('MenuMusic', 0.7, true);
            this.music.play();

            var bg = this.game.add.sprite(0, 0, 'background');
            bg.tint = 0x3f3f3f;

            var logo = this.game.add.sprite(this.game.world.centerX, 120, 'logo');
            logo.anchor.set(0.5, 0);
            logo.scale.set(0.96, 0.96);

            var btnHum = this.game.add.button(this.game.world.centerX, this.game.world.height - 130, 'btn', this.next, this, 1, // over
            0, // out
            2 // down
            );
            btnHum.anchor.set(0.5, 1);
            btnHum.input.useHandCursor = false;
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'next',
        value: function next() {
            this.game.stateTransition.to('PlayState');
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.music.stop();
        }
    }]);

    return MenuState;
}(Phaser.State);