'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScoreState = function (_Phaser$State) {
    _inherits(ScoreState, _Phaser$State);

    function ScoreState() {
        _classCallCheck(this, ScoreState);

        return _possibleConstructorReturn(this, (ScoreState.__proto__ || Object.getPrototypeOf(ScoreState)).apply(this, arguments));
    }

    _createClass(ScoreState, [{
        key: 'init',
        value: function init(_ref) {
            var stats = _ref.stats;

            this.stats = stats;
        }
    }, {
        key: 'create',
        value: function create() {
            console.log('[score] showing score menu');

            var gameover = this.game.add.sprite(this.game.world.centerX, 100, 'game-over');
            gameover.anchor.set(0.5, 0);

            var text = this.game.add.text(game.world.centerX, game.world.centerY, 'GOOD JOB!  you won in ' + this.stats.moves + ' moves.', {
                font: "65px Arial",
                fill: "#ffe5c6",
                align: "center"
            });

            text.anchor.setTo(0.5, 0.5);

            var btnHum = game.add.button(game.world.centerX, game.world.height - 130, 'btn-play', this.next, this, 1, // over
            0, // out
            2 // down
            );
            btnHum.anchor.set(0.5, 1);
            btnHum.onDownSound = this.game.add.audio('drum1');
            btnHum.onOverSound = this.game.add.audio('drum2');
            btnHum.input.useHandCursor = false;
        }
    }, {
        key: 'next',
        value: function next() {
            this.game.stateTransition.to('PlayState');
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return ScoreState;
}(Phaser.State);