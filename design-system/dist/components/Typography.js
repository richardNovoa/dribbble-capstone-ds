"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Typography = props => {
  let mergedClass;
  function getClass(type) {
    var textClass = {
      'heading-1': 'heading-1',
      'heading-2': 'heading-2',
      'heading-3': 'heading-3',
      'subtitle-1': 'subtitle-1',
      body: 'body-1',
      label: 'label'
    };
    return textClass[type];
  }
  if (props.className) {
    mergedClass = props.className + ' ' + getClass(props.variant);
  } else {
    mergedClass = getClass(props.variant);
  }
  function getTypography(variant) {
    var semantic = {
      'heading-1': /*#__PURE__*/_react.default.createElement("h1", {
        className: mergedClass
      }, props.children),
      'heading-2': /*#__PURE__*/_react.default.createElement("h2", {
        className: mergedClass
      }, props.children),
      'heading-3': /*#__PURE__*/_react.default.createElement("h3", {
        className: mergedClass
      }, props.children),
      'subtitle-1': /*#__PURE__*/_react.default.createElement("p", {
        className: mergedClass
      }, props.children),
      body: /*#__PURE__*/_react.default.createElement("p", {
        className: mergedClass
      }, props.children),
      label: /*#__PURE__*/_react.default.createElement("label", {
        className: mergedClass
      }, props.children)
    };
    return semantic[variant];
  }
  return getTypography(props.variant);
};
Typography.defaultProps = {
  variant: 'body'
};
Typography.propTypes = {
  variant: _propTypes.default.oneOf(['heading-1', 'heading-2', 'heading-3', 'subtitle-1', 'body'])
};
var _default = Typography;
exports.default = _default;