"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "flex gap-1 px-4 pt-4 pb-3 bg-capstoneblue-500 relative text-white border-2 border-capstoneblue-0"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "subtitle-1 z-10"
  }, props.children), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-capstoneblue-800 absolute w-full bottom-0 h-1/2 left-0"
  }));
};
var _default = Button;
exports.default = _default;