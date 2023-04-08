"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FormInput = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "gap-2 flex bg-white border border-midnight-900 p-4 align-baseline"
  }, props.hasIcon && /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(props.iconClass, " pt-1")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: props.placeholder,
    value: props.value,
    className: props.inputClassName
  })));
};
exports.FormInput = FormInput;
FormInput.defaultProps = {
  hasIcon: true,
  iconClass: 'fa-solid fa-user',
  placeholder: 'placeholder',
  className: '',
  value: ''
};
FormInput.propTypes = {
  hasIcon: _propTypes.default.bool,
  iconClass: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  className: _propTypes.default.string,
  value: _propTypes.default.string
};