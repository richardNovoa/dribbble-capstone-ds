"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Card
const Card = props => {
  return /*#__PURE__*/_react.default.createElement(CardBg, {
    brand: props.brand,
    size: props.size
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: props.layout === 'alt' ? 'flex flex-row-reverse gap-8' : 'flex gap-8'
  }, /*#__PURE__*/_react.default.createElement(CardImage, {
    src: props.src,
    size: props.size,
    alt: props.alt
  }), /*#__PURE__*/_react.default.createElement(CardContent, {
    title: props.title,
    description: props.description,
    size: props.size,
    brand: props.brand
  })));
};
exports.Card = Card;
Card.defaultProps = {
  brand: 'world',
  size: 'lg',
  layout: 'default',
  src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
  title: 'This is a title',
  description: 'this is a description',
  alt: 'this is an alt message'
};
Card.propType = {
  brand: _propTypes.default.oneOf(['world', 'visit', 'ride']),
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  layout: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  src: _propTypes.default.string,
  alt: _propTypes.default.string
};

//CardBg
const CardBg = props => {
  function getBg(size, brand) {
    const bgClasses = {
      sm: {
        world: 'flex overflow-hidden gap-4 rounded-full bg-white',
        visit: 'flex overflow-hidden gap-4 rounded-full',
        ride: 'flex overflow-hidden gap-4 rounded-full'
      },
      md: {
        world: 'flex flex-col',
        visit: 'flex flex-col',
        ride: 'flex flex-col'
      },
      lg: {
        world: 'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] ',
        visit: 'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] ',
        ride: 'container flex pl-10 py-10 relative rounded-xl w-full h-[654px]'
      }
    };
    return bgClasses[size][brand];
  }
  const bgClass = getBg(props.size, props.brand);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: bgClass
  }, props.children);
};

//CardImage
const CardImage = props => {
  function getClass(size) {
    var imgSize = {
      sm: 'w-32 h-32 rounded-[360px] object-cover',
      md: 'w-60 h-60 rounded-[360px] object-cover',
      lg: 'w-full h-[576px] rounded-lg object-cover'
    };
    return imgSize[size];
  }
  const imgClass = getClass(props.size);
  return /*#__PURE__*/_react.default.createElement("img", {
    className: imgClass,
    src: props.src,
    alt: props.alt
  });
};

//CardContent
const CardContent = props => {
  function getClass(brand, size) {
    const classValue = {
      world: {
        sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
        md: 'w-60 h-60 rounded-[360px] object-cover',
        lg: 'w-[728px] h-[576px] rounded-lg object-cover'
      },
      visit: {
        sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
        md: 'w-60 h-60 rounded-[360px] object-cover',
        lg: 'w-[728px] h-[576px] rounded-lg object-cover'
      },
      ride: {
        sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
        md: 'w-60 h-60 rounded-[360px] object-cover',
        lg: 'w-[728px] h-[576px] rounded-lg object-cover'
      }
    };
    return classValue[brand][size];
  }
  const contentClass = getClass(props.brand, props.size);
  function getTitle(size) {
    var titleSize = {
      sm: 'heading-3',
      md: 'heading-3',
      lg: 'heading-2'
    };
    return titleSize[size];
  }
  const titleClass = getTitle(props.size);
  function getTitleColor(brand) {
    const titleColor = {
      world: 'text-marina-600',
      visit: 'text-amethyst-600',
      ride: 'text-apricot-600'
    };
    return titleColor[brand];
  }
  const titleColor = getTitleColor(props.brand);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: contentClass
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: titleClass,
    className: titleColor
  }, props.title), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body"
  }, props.description));
};