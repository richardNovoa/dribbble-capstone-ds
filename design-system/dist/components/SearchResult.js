"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResult = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SearchResult = props => {
  if (props.type === 'default') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flex bg-white rounded-[16px] overflow-hidden h-48"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: props.imgSrc,
      alt: "results",
      className: "w-1/3 h-auto object-cover"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "p-6 flex flex-col justify-between w-2/3"
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "heading-3",
      className: "text-left"
    }, props.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex justify-between h-full"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-col justify-between text-left"
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "body"
    }, props.subtitle), /*#__PURE__*/_react.default.createElement("div", {
      className: ""
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "body",
      className: "text-marina-900"
    }, props.status), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "body"
    }, /*#__PURE__*/_react.default.createElement("strong", null, props.rating), "/10 Good (", props.reviews, ' ', "reviews)"))), /*#__PURE__*/_react.default.createElement("div", {
      className: " text-right flex-col flex justify-end"
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "heading-2"
    }, "$", props.price), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "body"
    }, "includes taxes and fees")))));
  }
  if (props.type === 'ride') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-white rounded-[16px] flex justify-between px-7 py-4"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "h-full flex flex-col gap-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fas fa-train self-center pr-2"
    }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "heading-3"
    }, props.title)), /*#__PURE__*/_react.default.createElement(_Typography.default, null, props.subtitle), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      className: "text-red-500"
    }, props.status)), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-col gap-2 text-right"
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "heading-3"
    }, props.time, " min"), /*#__PURE__*/_react.default.createElement(_Typography.default, null, props.distance, " miles")));
  }
};
exports.SearchResult = SearchResult;
SearchResult.defaultProps = {
  type: 'default',
  title: 'Ramada by Wyndham Miami Springs/Miami',
  subtitle: 'Breakfast Included',
  status: 'fully refundable',
  rating: '7.5',
  reviews: '3,135',
  price: '9912009',
  time: '95',
  distance: '240',
  imgSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80'
};
SearchResult.propTypes = {
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  status: _propTypes.default.string,
  rating: _propTypes.default.string,
  reviews: _propTypes.default.string,
  importantNumber: _propTypes.default.string,
  type: _propTypes.default.string,
  imgSrc: _propTypes.default.string
};