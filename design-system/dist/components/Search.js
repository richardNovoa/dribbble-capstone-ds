"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Search = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FormInput = require("./FormInput");
var _Button = require("./Button");
var _Logo = _interopRequireDefault(require("./Logo"));
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Search = props => {
  return /*#__PURE__*/_react.default.createElement(SearchBg, {
    brand: props.brand
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react.default.createElement(SearchOptions, {
    brand: props.brand
  }), /*#__PURE__*/_react.default.createElement(SearchFields, {
    brand: props.brand
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-end pb-2"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    brand: props.brand,
    className: "h-8"
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, null, "Search"))));
};
exports.Search = Search;
Search.defaultProps = {
  brand: 'ride'
};
Search.propTypes = {
  brand: _propTypes.default.oneOf(['world', 'ride', 'visit'])
};

//SearchFields
const SearchFields = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex rounded-[360px] overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement(_FormInput.FormInput, {
    placeholder: "Depart From",
    hasIcon: true,
    iconClass: "fas fa-plane-departure"
  }), /*#__PURE__*/_react.default.createElement(_FormInput.FormInput, {
    placeholder: "Arrive To",
    hasIcon: true,
    iconClass: "fas fa-plane-arrival"
  }), /*#__PURE__*/_react.default.createElement(_FormInput.FormInput, {
    placeholder: "Passengers",
    hasIcon: true,
    iconClass: "fas fa-walking"
  }), props.brand !== 'ride' && /*#__PURE__*/_react.default.createElement(_FormInput.FormInput, {
    placeholder: "Pick Dates",
    hasIcon: true,
    iconClass: "fas fa-calendar"
  }));
};
const SearchOptions = props => {
  function getClasses(brand) {
    const classKey = {
      world: 'text-marina-700 active:text-marina-600 cursor-pointer',
      visit: 'text-marina-400 active:text-marina-100 cursor-pointer',
      ride: 'text-apricot-500 active:text-apricot-600 cursor-pointer'
    };
    return classKey[brand];
  }
  const optionClasses = getClasses(props.brand);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex py-4 gap-4"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "label",
    className: optionClasses
  }, "One way"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "Round Trip"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "|"), props.brand === 'visit' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "Stays"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "Starships"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "Packages")), props.brand === 'world' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "Lounges")), props.brand === 'ride' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: optionClasses
  }, "Weekly Pass")));
};
const SearchBg = props => {
  function getClasses(brand) {
    const classKey = {
      world: 'bg-midnight-1000 rounded-[32px] px-8 pt-4 pb-8 self-end inline-block',
      ride: 'bg-apricot-1100 rounded-[32px] px-8 pt-4 pb-8 self-end inline-block',
      visit: 'bg-marina-1100 rounded-[32px] px-8 pt-4 pb-8 self-end inline-block'
    };
    return classKey[brand];
  }
  const searchBgClass = getClasses(props.brand);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: searchBgClass
  }, props.children);
};
var _default = Search;
exports.default = _default;