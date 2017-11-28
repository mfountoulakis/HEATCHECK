"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nba = require("nba");

var _nba2 = _interopRequireDefault(_nba);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _getLeaderImageURL = require("./getLeaderImageURL");

var _getLeaderImageURL2 = _interopRequireDefault(_getLeaderImageURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLeaders = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(answer) {
        var leagueLeaders;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _nba2.default.stats.leagueLeaders({
                            PerMode: "PerGame",
                            StatCategory: "" + answer,
                            Season: "2017-18",
                            SeasonType: "Regular Season",
                            ActiveFlag: true
                        });

                    case 3:
                        leagueLeaders = _context.sent;

                        //move this someplace else
                        leagueLeaders.resultSet.rowSet.slice(0, 15).forEach(function (element) {
                            var playerRank = element[1];
                            var playerName = element[2];
                            (0, _getLeaderImageURL2.default)(playerName, playerRank).then(function () {
                                pushPlayer();
                            });
                        });
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);

                        console.log(_chalk2.default.redBright("Sorry, there was an error ", _context.t0));

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 7]]);
    }));

    return function getLeaders(_x) {
        return _ref.apply(this, arguments);
    };
}();
exports.default = getLeaders;