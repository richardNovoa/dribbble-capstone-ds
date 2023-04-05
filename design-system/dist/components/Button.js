"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    href: "#",
    className: " items-center py-4 px-8 box-content bg-amethyst-700 text-white rounded-[32px] self-center hover:bg-amethyst-900 select-none active:bg-amethyst-700 focus:outline-none focus:ring focus:ring-amethyst-400"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "label"
  }, props.children));
};
exports.Button = Button;