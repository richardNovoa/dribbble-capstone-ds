"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = _interopRequireDefault(require("../components/Typography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Logo = _interopRequireDefault(require("../components/Logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Footer = props => {
  return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement(FooterTop, {
    brand: props.brand
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container flex justify-between py-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(FooterCategory, {
    brand: props.brand
  }, "Sitemap"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Shuddle Visit"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Shuddle Rail"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Shuddle World")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(FooterCategory, {
    brand: props.brand
  }, "Tickets and fares"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Terra"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Andromeda"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Orion"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Klingon")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(FooterCategory, {
    brand: props.brand
  }, "In the news"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Shuddle Blog"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Shuddle Corporate"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Shuddle Newsletter")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(FooterCategory, {
    brand: props.brand
  }, "Services & Policies"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Service Updates"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Contact Us"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Privacy policy"), /*#__PURE__*/_react.default.createElement(FooterLink, {
    brand: props.brand
  }, "Data Policy")))), /*#__PURE__*/_react.default.createElement(FooterEnd, {
    brand: props.brand
  }));
};
exports.Footer = Footer;
Footer.defaultProps = {
  brand: 'world'
};
Footer.propTypes = {
  brand: _propTypes.default.string
};
const FooterCategory = props => {
  function getClass(brand) {
    const textClass = {
      world: 'text-midnight-1000 mb-3',
      visit: 'text-apricot-1000 mb-3',
      ride: 'text-marina-1000 mb-3'
    };
    return textClass[brand];
  }
  const categoryClass = getClass(props.brand);
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle-1",
    className: categoryClass
  }, props.children);
};
const FooterLink = props => {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle-1",
    className: "text-amethyst-700"
  }, props.children);
};
const FooterTop = props => {
  function getClass(brand) {
    const getColors = {
      world: 'flex flex-col justify-center items-center w-full = gap-4 bg-midnight-100 border-t-8 border-r-0 border-b-0 border-l-0 border-midnight-900',
      visit: 'flex flex-col justify-center items-center w-full = gap-4 bg-apricot-100 border-t-8 border-r-0 border-b-0 border-l-0 border-apricot-900',
      ride: 'flex flex-col justify-center items-center w-full = gap-4 bg-marina-100 border-t-8 border-r-0 border-b-0 border-l-0 border-marina-900'
    };
    return getColors[brand];
  }
  const categoryColor = getClass(props.brand);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: categoryColor
  }, props.children);
};
const FooterEnd = props => {
  function getClass(brand) {
    const colorClass = {
      world: {
        textColor: 'text-midnight-100',
        bgColor: 'bg-midnight-1000'
      },
      visit: {
        textColor: 'text-apricot-100',
        bgColor: 'bg-apricot-1000'
      },
      ride: {
        textColor: 'text-marina-100',
        bgColor: 'bg-marina-1000'
      }
    };
    return colorClass[brand];
  }
  const classes = getClass(props.brand);
  const textColor = classes.textColor;
  const bgColor = classes.bgColor;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex py-4 justify-center ".concat(bgColor),
    id: "footer-bottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex container justify-between text-white"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    brand: props.brand
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body",
    className: "".concat(textColor, " pt-1")
  }, "2023 Interplanetary Travel Syndicate. All rights reserved"))));
};