"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Banner = props => {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex flex-col items-center gap-4 border border-capstoneblue-700 py-10 bg-capstoneblue-1000 text-capstoneblue-0"
  }, props.children));
};
var _default = Banner;
exports.default = _default;