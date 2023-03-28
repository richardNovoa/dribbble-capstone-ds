"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logoLight = _interopRequireDefault(require("../../assets/logo-light.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Navbar = props => {
  let navClass;
  if (props.variant === 'secondary') {
    navClass = 'bg-capstonegray-1000 text-capstonegray-100 py-2 flex justify-center';
  } else {
    navClass = 'bg-capstonegray-900 text-capstonegray-100 py-2 flex justify-center';
  }
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: navClass
  }, props.variant === 'primary' && /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logoLight.default,
    style: {
      height: 32,
      width: 'auto'
    },
    alt: "Interplanetary Travel Syndicate"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-3"
  }, props.children)), props.variant === 'secondary' && /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-3"
  }, props.children)));
};
var _default = Navbar;
exports.default = _default;