"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rideDivider = _interopRequireDefault(require("../assets/media/Dividers/ride-divider.svg"));
var _visitDivider = _interopRequireDefault(require("../assets/media/Dividers/visit-divider.svg"));
var _worldDividerLeft = _interopRequireDefault(require("../assets/media/Dividers/world-divider-left.svg"));
var _worldDividerRight = _interopRequireDefault(require("../assets/media/Dividers/world-divider-right.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Divider = props => {
  function getImg(brand, direction) {
    const imgKey = {
      world: {
        left: _worldDividerLeft.default,
        right: _worldDividerRight.default
      },
      visit: {
        left: _visitDivider.default,
        right: _visitDivider.default
      },
      ride: {
        left: _rideDivider.default,
        right: _rideDivider.default
      }
    };
    return imgKey[brand][direction];
  }
  const imgSrc = getImg(props.brand, props.direction);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imgSrc
  }));
};
exports.Divider = Divider;
Divider.defaultProps = {
  direction: 'left',
  brand: 'world'
};
Divider.propTypes = {
  direction: _propTypes.default.string,
  brand: _propTypes.default.string
};