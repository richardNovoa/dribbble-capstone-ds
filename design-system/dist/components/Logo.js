"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _shuddleWorld__light = _interopRequireDefault(require("../assets/logos/shuddle-world__light.svg"));
var _shuddleVisit__light = _interopRequireDefault(require("../assets/logos/shuddle-visit__light.png"));
var _shuddleRide__light = _interopRequireDefault(require("../assets/logos/shuddle-ride__light.png"));
var _ipts__light = _interopRequireDefault(require("../assets/logos/ipts__light.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Logo = props => {
  function getLogo(brand) {
    const logoSrc = {
      world: _shuddleWorld__light.default,
      visit: _shuddleVisit__light.default,
      ride: _shuddleRide__light.default,
      ipts: _ipts__light.default
    };
    return logoSrc[brand];
  }
  const logoImg = getLogo(props.brand);
  return /*#__PURE__*/_react.default.createElement("img", {
    src: logoImg,
    className: "h-12"
  });
};
var _default = Logo;
exports.default = _default;