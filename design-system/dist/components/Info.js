"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Info = props => {
  if (props.variant === 'img-left') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flex p-10 w-full justify-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: props.image,
      alt: "demo",
      className: "w-4/5"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-col justify-between p-10 w-80"
    }, props.children));
  }
  if (props.variant === 'img-right') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flex p-10 w-full justify-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-col justify-between p-10 w-80"
    }, props.children), /*#__PURE__*/_react.default.createElement("img", {
      src: props.image,
      alt: "demo",
      className: "w-4/5"
    }));
  }
};
var _default = Info;
exports.default = _default;