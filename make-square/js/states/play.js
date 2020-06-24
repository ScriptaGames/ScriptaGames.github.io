"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayState = function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        return _possibleConstructorReturn(this, (PlayState.__proto__ || Object.getPrototypeOf(PlayState)).apply(this, arguments));
    }

    _createClass(PlayState, [{
        key: "create",
        value: function create() {
            console.log('[play] starting play state');

            // for easy access to this state for debugging in browser console
            window.play = this;

            var text = this.game.add.text(game.world.centerX, game.world.centerY, "Move blocks into a square.", {
                font: "65px Arial",
                fill: "#ffe5c6",
                align: "center"
            });

            text.anchor.setTo(0.5, 0.5);
            var text2 = this.game.add.text(game.world.centerX, game.world.centerY + 80, "click, then use arrow keys", {
                font: "65px Arial",
                fill: "#ffe5c6",
                align: "center"
            });
            text2.anchor.setTo(0.5, 0.5);
            this.btns = [];

            this.gridSize = 10;
            this.blockCount = 4 * 4;

            this.createActors();
            this.createStats();
            this.createSounds();
            this.createGrid();
            this.createButtons(this.blockCount);

            this.done = false;
            this.debounceControls = _.throttle(this.updateControls, 100);
        }
    }, {
        key: "update",
        value: function update() {
            this.debounceControls();

            this.done = this.evaluateGrid();
            if (this.done) {
                this.next();
            }
        }
    }, {
        key: "updateControls",
        value: function updateControls() {
            if (this.selectedBtn) {
                var x = 0;
                var y = 0;
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    x = -1;
                } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                    y = -1;
                } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                    y = 1;
                } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    x = 1;
                }
                if (this.canMove(this.selectedBtn.data.x, this.selectedBtn.data.y, x, y)) {
                    this.move(this.selectedBtn.data.x, this.selectedBtn.data.y, x, y, this.selectedBtn);
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            // this.game.debug.body(this.actors.earth);
            // this.game.debug.body(this.actors.barrier);
            // this.actors.asteroids.forEach(this.game.debug.body.bind(this.game.debug));
            // this.actors.comets.forEach(this.game.debug.body.bind(this.game.debug));
            // this.actors.booms.forEach(this.game.debug.body.bind(this.game.debug));
        }
    }, {
        key: "shutdown",
        value: function shutdown() {}
        // _.forEach(this.sounds, sound => sound.stop());


        /* create functions */

    }, {
        key: "createButtons",
        value: function createButtons(count) {
            for (var num = 0; num < count; ++num) {
                var x = 0;
                var y = 0;
                do {
                    x = this.game.rnd.between(0, this.gridSize - 1);
                    y = this.game.rnd.between(0, this.gridSize - 1);
                } while (this.grid[y][x] === 1);
                this.createButton(x, y);
                this.grid[y][x] = 1;
            }
        }
    }, {
        key: "canMove",
        value: function canMove(x, y, xd, yd) {
            try {
                return this.grid[y + yd][x + xd] === 0;
            } catch (e) {
                return false;
            }
        }
    }, {
        key: "move",
        value: function move(x, y, xd, yd, btn) {
            if (this.canMove(x, y, xd, yd)) {
                btn.data.x = x + xd;
                btn.data.y = y + yd;
                btn.position.x += xd * 100;
                btn.position.y += yd * 100;
                this.grid[y][x] = 0;
                this.grid[y + yd][x + xd] = 1;
                this.stats.moves += 1;
            }
        }
    }, {
        key: "selectBtn",
        value: function selectBtn(btn) {
            this.selectedBtn = btn;
            this.btns.forEach(function (btn) {
                return btn.tint = 0xffffff;
            });
            btn.tint = 0xff00ff;
        }
    }, {
        key: "createButton",
        value: function createButton(x, y) {
            var btn = this.game.add.button(x * 100, y * 100, 'btn', this.selectBtn, this, 0, // over
            0, // out
            0 // down
            );
            btn.anchor.set(0, 0);
            btn.input.useHandCursor = false;
            btn.data.x = x;
            btn.data.y = y;
            this.btns.push(btn);
            return btn;
        }
    }, {
        key: "createGrid",
        value: function createGrid() {
            var _this2 = this;

            this.grid = new Array(this.gridSize).fill(0).map(function (v, i) {
                return new Array(_this2.gridSize).fill(0);
            });

            console.log("[play] created grid " + this.grid);
        }
    }, {
        key: "createActors",
        value: function createActors() {
            this.actors = {};
        }
    }, {
        key: "createStats",
        value: function createStats() {
            this.stats = {
                moves: 0
            };
        }
    }, {
        key: "createSounds",
        value: function createSounds() {
            this.sounds = {
                music: this.game.add.audio('music')
            };
        }
    }, {
        key: "printGrid",
        value: function printGrid() {
            console.log(this.grid.join('\n'));
        }
    }, {
        key: "evaluateGrid",
        value: function evaluateGrid() {
            var _findTopLeft = this.findTopLeft(),
                _findTopLeft2 = _slicedToArray(_findTopLeft, 2),
                x = _findTopLeft2[0],
                y = _findTopLeft2[1];

            var count = this.blockCount;
            var side = Math.sqrt(count);
            var validSquare = this.checkArea(x, y, x + side, y + side);
            return validSquare;
        }

        // for testing

    }, {
        key: "fillArea",
        value: function fillArea(x1, y1, x2, y2) {
            for (var y = y1; y <= y2; ++y) {
                for (var x = x1; x <= x2; ++x) {
                    this.grid[y][x] = 1;
                }
            }
        }
    }, {
        key: "checkArea",
        value: function checkArea(x1, y1, x2, y2) {
            for (var y = y1; y < y2; ++y) {
                for (var x = x1; x < x2; ++x) {
                    if (this.grid[y][x] !== 1) {
                        return false;
                    }
                }
            }
            return true;
        }
    }, {
        key: "findTopLeft",
        value: function findTopLeft() {
            var x = 0;
            var y = 0;
            while (this.grid[y][x] !== 1) {
                x += 1;
                if (x > this.gridSize) {
                    x = 0;
                    y += 1;
                }
            }
            return [x, y];
        }
    }, {
        key: "updateCollisions",
        value: function updateCollisions() {
            // this.game.physics.arcade.collide(this.actors.A, this.actors.B, this.CONTACT, this.OVERLAP, this);
        }
    }, {
        key: "next",
        value: function next() {
            this.game.stateTransition.to('ScoreState', true, true, { stats: this.stats });
        }
    }]);

    return PlayState;
}(Phaser.State);