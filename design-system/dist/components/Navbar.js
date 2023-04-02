"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarLink = exports.Navbar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("../components/Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//Navbar
const Navbar = props => {
  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement(NavbarPrimary, {
    brand: props.brand
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white"
  }, "Logo"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/_react.default.createElement(NavbarLink, null, "World"), /*#__PURE__*/_react.default.createElement(NavbarLink, null, "Travel"), /*#__PURE__*/_react.default.createElement(NavbarLink, null, "Ride"))), /*#__PURE__*/_react.default.createElement(NavbarSecondary, {
    hasSecondary: props.hasSecondary,
    brand: props.brand
  }, props.children));
};
exports.Navbar = Navbar;
Navbar.defaultProps = {
  brand: 'world',
  hasSecondary: 'false'
};

//NavbarLink
const NavbarLink = props => {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: props.href
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "heading-3"
  }, props.children));
};
exports.NavbarLink = NavbarLink;
NavbarLink.defaultProps = {
  href: '#'
};

//NavbarPrimary
const NavbarPrimary = props => {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.brand === 'world' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-8 pt-8 justify-center items-center bg-midnight-1000"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle text-midnight-100"
  }, props.children)), props.brand === 'visit' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-8 pt-8 justify-center items-center bg-apricot-600"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle text-apricot-1000"
  }, props.children)), props.brand === 'ride' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-8 pt-8 justify-center items-center bg-marina-1000"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle text-marina-100"
  }, props.children)));
};

//NavbarSecondary
const NavbarSecondary = props => {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.brand === 'world' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex py-4 justify-center align-middle bg-midnight-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle text-midnight-1000"
  }, props.children)), props.brand === 'visit' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex py-4 justify-center align-middle bg-apricot-200"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle text-apricot-1000"
  }, props.children)), props.brand === 'ride' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex py-4 justify-center align-middle bg-marina-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between align-middle text-marina-1000"
  }, props.children)));
};
NavbarSecondary.defaultProps = {
  hasSecondary: false
};