#!/usr/bin/env node
"use strict";

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _clear = require("clear");

var _clear2 = _interopRequireDefault(_clear);

var _clui = require("clui");

var _clui2 = _interopRequireDefault(_clui);

var _figlet = require("figlet");

var _figlet2 = _interopRequireDefault(_figlet);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _googleImages = require("google-images");

var _googleImages2 = _interopRequireDefault(_googleImages);

var _imageToAscii = require("image-to-ascii");

var _imageToAscii2 = _interopRequireDefault(_imageToAscii);

var _inquirer = require("inquirer");

var _inquirer2 = _interopRequireDefault(_inquirer);

var _nba = require("nba");

var _nba2 = _interopRequireDefault(_nba);

var _preferences = require("preferences");

var _preferences2 = _interopRequireDefault(_preferences);

var _commander = require("commander");

var _commander2 = _interopRequireDefault(_commander);

var _cliTable = require("cli-table2");

var _cliTable2 = _interopRequireDefault(_cliTable);

var _getLeaders = require("./utils/getLeaders");

var _getLeaders2 = _interopRequireDefault(_getLeaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = new _chalk2.default.constructor({ level: 3 });

//utils

var prefs = new _preferences2.default("heatcheck");
var Spinner = _clui2.default.Spinner;

console.log(ctx.bold.yellowBright.bgRed(_figlet2.default.textSync("Heat Check!", {
    font: 'Big Money-ne',
    horizontalLayout: "full"
})));

_commander2.default.command('stat').alias('s').option('-p, --points', 'points leaders').option('-b, --blocks', 'blocks leaders').option('-a, --assists', 'assists leaders').option('-s, --steals', 'steals leaders').action(function (option) {
    console.log("option.points ", option.points);
    switch (true) {
        case option.points:
            var answer = "PTS";
            break;
        case option.blocks:
            var answer = "BLK";
            break;
        case option.assists:
            var answer = "AST";
            break;
        case option.steals:
            var answer = "STL";
            break;
        case option.turnovers:
            var answer = "TOV";
            break;
        default:
            console.log("Sorry, nothing yet for " + answer + ".");
    }
    (0, _getLeaders2.default)(answer);
});

_commander2.default.parse(process.argv);