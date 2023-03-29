"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = _interopRequireDefault(require("../../components/Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavbarLink = props => {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: props.href,
    className: "flex gap-1 align-middle items-center pt-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle-1"
  }, props.children), props.hasIcon === 'true' && /*#__PURE__*/_react.default.createElement("i", {
    class: "fa-solid fa-chevron-down fa-xs pb-1"
  }));
};
var _default = NavbarLink;
exports.default = _default;