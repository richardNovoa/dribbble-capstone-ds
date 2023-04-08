"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = require("./Button");
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Banner = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between rounded-[16px] p-4 bg-gradient-to-r from-midnight-800 to-midnight-1000"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "heading-3",
    className: "text-white self-center pl-4"
  }, "Join Shuddle World and get exclusive discounts"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    type: "secondary"
  }, "Learn More"));
};
exports.Banner = Banner;
Banner.defaultProps = {
  brand: 'world'
};
Banner.propTypes = {
  brand: _propTypes.default.string
};