"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchFilter = exports.FilterOption = exports.FilterCategory = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = _interopRequireDefault(require("./Typography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SearchFilter = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col text-left gap-8"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "heading-3",
    className: "text-white"
  }, "Filter By"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-x-8"
  }, props.children));
};
exports.SearchFilter = SearchFilter;
const FilterCategory = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col text-left gap-4 mb-8"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle-1",
    className: "text-white"
  }, props.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-2"
  }, props.children));
};
exports.FilterCategory = FilterCategory;
FilterCategory.propTypes = {
  title: _propTypes.default.string
};
const FilterOption = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-2 "
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "filter",
    value: props.children
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: "text-marina-600"
  }, props.children));
};
exports.FilterOption = FilterOption;