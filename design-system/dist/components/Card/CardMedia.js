"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CardMedia = props => {
  if (props.variant === 'sm') {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: props.image,
      alt: "astronaut",
      className: "object-cover h-32 w-52"
    });
  } else {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: props.image,
      alt: "astronaut",
      className: "object-cover h-60 w-60"
    });
  }
};
var _default = CardMedia;
exports.default = _default;