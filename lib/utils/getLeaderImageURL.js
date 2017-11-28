'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _googleImages = require('google-images');

var _googleImages2 = _interopRequireDefault(_googleImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _googleImages2.default('013987659345103135712:ngnkzqbnh_m', 'AIzaSyAoW2B5Xi6zKIxRJHWo2GzgaCuHv-4AzTE');

var getLeaderImageURl = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(playerName, playerRank) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return client.search(playerName, { size: 'small' }).then(function (images) {
                            console.log("imgz ", images);

                            playerNames.push(new Player(playerName, images[0].url, playerRank));
                        });

                    case 3:
                        _context.next = 8;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context['catch'](0);

                        console.log("ERRORRRR ", _context.t0); // 30

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 5]]);
    }));

    return function getLeaderImageURl(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = getLeaderImageURl;