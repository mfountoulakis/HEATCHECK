"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _imageOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageOptions = (_imageOptions = {
    colored: true,
    image_type: "jpg",
    size: {
        height: "30%"
    },
    bg: true,
    pxSize: {
        width: 0.1,
        height: 0.1
    },
    pxWidth: 1
}, (0, _defineProperty3.default)(_imageOptions, "bg", true), (0, _defineProperty3.default)(_imageOptions, "pixels", " "), _imageOptions);

exports.default = imageOptions;