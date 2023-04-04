"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DecorativeDividerDown = _interopRequireDefault(require("../assets/media/Decorative-divider-down.svg"));
var _DecorativeDividerUp = _interopRequireDefault(require("../assets/media/Decorative-divider-up.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Divider = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full"
  }, props.direction === 'up' && /*#__PURE__*/_react.default.createElement("img", {
    src: _DecorativeDividerUp.default
  }), props.direction === 'down' && /*#__PURE__*/_react.default.createElement("img", {
    src: _DecorativeDividerDown.default
  }));
};
exports.Divider = Divider;
Divider.defaultProps = {
  direction: 'up'
};
Divider.propTypes = {
  direction: _propTypes.default.string
};