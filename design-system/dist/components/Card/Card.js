"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = props => {
  if (props.variant === 'sm') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rounded overflow-hidden"
    }, props.children);
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rounded overflow-hidden w-64"
    }, props.children);
  }
};
var _default = Card;
exports.default = _default;