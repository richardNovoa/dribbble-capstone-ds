"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DisplayImage = props => {
  let srcImage;
  !props.image ? srcImage = 'https://images.unsplash.com/photo-1525467187333-8e3f68b8e742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' : srcImage = props.image;
  return /*#__PURE__*/_react.default.createElement("img", {
    src: srcImage,
    alt: "demo",
    className: "border-2 border-capstonered-300"
  });
};
var _default = DisplayImage;
exports.default = _default;