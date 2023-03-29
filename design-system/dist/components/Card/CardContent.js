"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CardContent = props => {
  if (props.variant === 'sm') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "py-2"
    }, props.children);
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "p-4 bg-capstoneblue-1000 text-white"
    }, props.children);
  }
};
var _default = CardContent;
exports.default = _default;