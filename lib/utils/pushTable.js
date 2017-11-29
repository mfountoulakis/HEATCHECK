"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _playerNames = require("../helpers/playerNames");

var _playerNames2 = _interopRequireDefault(_playerNames);

var _imageToAscii = require("image-to-ascii");

var _imageToAscii2 = _interopRequireDefault(_imageToAscii);

var _imageOptions = require("../helpers/imageOptions");

var _imageOptions2 = _interopRequireDefault(_imageOptions);

var _cliTable = require("cli-table2");

var _cliTable2 = _interopRequireDefault(_cliTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statsTable = new _cliTable2.default({
    head: ["Player"]

});

var pushTable = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(playerImage) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _playerNames2.default.forEach(function (player) {
                            (0, _imageToAscii2.default)("" + player.image_url, _imageOptions2.default, function (err, converted) {
                                var playerImage = converted;
                                statsTable.push([{ colSpan: 2, content: playerImage }], ['rank', player.playerRank]);

                                console.log("STATSTABLE LENGTH ", statsTable.length);
                                console.log(statsTable.toString());
                            });
                        });

                    case 3:
                        _context.next = 8;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context["catch"](0);

                        console.log("there was an error", _context.t0);

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 5]]);
    }));

    return function pushTable(_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = pushTable;