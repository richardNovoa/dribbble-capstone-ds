"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logoLight = _interopRequireDefault(require("../assets/logo-light.svg"));
var _Button = _interopRequireDefault(require("../components/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Footer = props => {
  return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center bg-capstonegray-800 py-10",
    id: "footer-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstoneteal-200"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "subtitle-1"
  }, "SITEMAP")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstonegray-300"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "IPTS Travel")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "IPTS Rail")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "IPTS Info")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstoneteal-200"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "subtitle-1"
  }, "tickets and fares")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstonegray-300"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Terra")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Andromeda")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Orion")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Klingon")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstoneteal-200"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "subtitle-1"
  }, "in the news")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstonegray-300"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "IPTS Blog")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "IPTS Corporate")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Newsletter")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstoneteal-200"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "subtitle-1"
  }, "services & policies")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-capstonegray-300"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Service Updates")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Contact Us")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Privacy Policy")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "Data Policy")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex py-4 bg-capstonegray-1000 justify-center",
    id: "footer-bottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex container justify-between text-white"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logoLight.default,
    className: "h-8 ",
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "body"
  }, "2023 Interplanetary Travel Syndicate. All rights reserved")))));
};
var _default = Footer;
exports.default = _default;