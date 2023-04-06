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
    size: props.size,
    variant: props.variant
  }, /*#__PURE__*/_react.default.createElement(CardImage, {
    src: props.imgSrc,
    size: props.size,
    alt: props.imgAlt,
    imgClass: props.imgClass,
    variant: props.variant
  }), /*#__PURE__*/_react.default.createElement(CardContent, {
    title: props.title,
    description: props.description,
    size: props.size,
    variant: props.variant
  }));
};
exports.Card = Card;
Card.defaultProps = {
  size: 'lg',
  variant: 'flat',
  imgSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
  title: 'This is a title',
  description: 'this is a description',
  imgAlt: 'this is an alt message',
  imgClass: ''
};
Card.propType = {
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  layout: _propTypes.default.oneOf(['flat', 'surface']),
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  imgSrc: _propTypes.default.string,
  imgAlt: _propTypes.default.string,
  imgClass: _propTypes.default.string
};

//CardBg
const CardBg = props => {
  function getBg(size, variant) {
    const bgClasses = {
      sm: {
        flat: 'flex overflow-hidden gap-4 rounded-full bg-white',
        surface: 'flex overflow-hidden inline-block overflow-hidden gap-4 rounded-[32px] bg-white inline-block'
      },
      md: {
        flat: 'flex flex-col',
        surface: 'flex flex-col justify-start'
      },
      lg: {
        flat: 'container flex justify-center w-full h-[654px] gap-8',
        surface: ' '
      }
    };
    return bgClasses[size][variant];
  }
  const bgClass = getBg(props.size, props.variant);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: bgClass
  }, props.children);
};

//CardImage
const CardImage = props => {
  function getClasses(size, variant) {
    const classKey = {
      sm: {
        flat: 'w-32 h-32 rounded-[360px]',
        surface: 'w-32 h-32'
      },
      md: {
        flat: 'w-60 h-60 rounded-[32px] object-cover',
        surface: 'w-60 h-60 object-cover rounded-tl-[32px] rounded-tr-[32px] '
      },
      lg: {
        flat: 'w-full h-[576px] rounded-lg',
        surface: 'w-full h-[576px] rounded-lg'
      }
    };
    return classKey[size][variant];
  }
  const imgClass = getClasses(props.size, props.variant);
  return /*#__PURE__*/_react.default.createElement("img", {
    className: "".concat(imgClass, " ").concat(props.imgClass),
    src: props.src,
    alt: props.alt
  });
};

//CardContent
const CardContent = props => {
  function getClasses(size, variant) {
    const classKey = {
      sm: {
        flat: {
          cardContentClass: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
          titleVariant: 'heading-3',
          titleClass: 'text-white',
          descriptionVariant: 'body',
          descriptionClass: 'text-white'
        },
        surface: {
          cardContentClass: 'flex flex-col justify-center items-start self-stretch gap-2 py-4',
          titleVariant: 'heading-3',
          titleClass: 'text-midnight-1000',
          descriptionVariant: 'body',
          descriptionClass: 'text-midnight-1000'
        }
      },
      md: {
        flat: {
          cardContentClass: 'flex flex-col justify-center w-60 gap-2 p-4',
          titleVariant: 'heading-3',
          titleClass: 'text-white',
          descriptionVariant: 'body',
          descriptionClass: 'text-white'
        },
        surface: {
          cardContentClass: 'flex flex-col justify-center w-60 gap-2 p-4',
          titleVariant: 'heading-3',
          titleClass: 'text-marina-1100',
          descriptionVariant: 'body',
          descriptionClass: 'text-marina-900'
        }
      },
      lg: {
        flat: {
          cardContentClass: 'w-[728px] h-[576px] rounded-lg object-cover',
          titleVariant: 'heading-2',
          titleClass: 'text-marina-600',
          descriptionVariant: 'heading-3',
          descriptionClass: 'text-white'
        },
        surface: {
          cardContentClass: 'w-[728px] h-[576px] rounded-lg object-cover',
          titleVariant: 'heading-2',
          titleClass: 'text-marina-600',
          descriptionVariant: 'heading-3',
          descriptionClass: 'text-white'
        }
      }
    };
    return classKey[size][variant];
  }
  const cardContentClasses = getClasses(props.size, props.variant);
  const cardContentClass = cardContentClasses.cardContentClass;
  const titleVariant = cardContentClasses.titleVariant;
  const titleClass = cardContentClasses.titleClass;
  const descriptionVariant = cardContentClasses.descriptionVariant;
  const descriptionClass = cardContentClasses.descriptionClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cardContentClass
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: titleVariant,
    className: titleClass
  }, props.title), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: descriptionVariant,
    className: descriptionClass
  }, props.description));
};