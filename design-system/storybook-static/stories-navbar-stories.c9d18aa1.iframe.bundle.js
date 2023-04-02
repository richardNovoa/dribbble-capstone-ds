/*! For license information please see stories-navbar-stories.c9d18aa1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcapstone_ds_rn=self.webpackChunkcapstone_ds_rn||[]).push([[935],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/navbar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return navbar_stories}});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),components_Typography=function Typography(props){var mergedClass;function getClass(type){return{"heading-1":"heading-1","heading-2":"heading-2","heading-3":"heading-3","subtitle-1":"subtitle-1",body:"body-1",caption:"caption"}[type]}return mergedClass=props.className?props.className+" "+getClass(props.variant):getClass(props.variant),function getTypography(variant){return{"heading-1":(0,jsx_runtime.jsx)("h1",{className:mergedClass,children:props.children}),"heading-2":(0,jsx_runtime.jsx)("h2",{className:mergedClass,children:props.children}),"heading-3":(0,jsx_runtime.jsx)("h3",{className:mergedClass,children:props.children}),"subtitle-1":(0,jsx_runtime.jsx)("p",{className:mergedClass,children:props.children}),body:(0,jsx_runtime.jsx)("p",{className:mergedClass,children:props.children}),caption:(0,jsx_runtime.jsx)("caption",{className:mergedClass,children:props.children})}[variant]}(props.variant)},Navbar_Navbar=function Navbar(props){return(0,jsx_runtime.jsxs)("nav",{children:[(0,jsx_runtime.jsxs)(NavbarPrimary,{brand:props.brand,children:[(0,jsx_runtime.jsx)("div",{className:"text-white",children:"Logo"}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-4",children:[(0,jsx_runtime.jsx)(NavbarLink,{children:"World"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Travel"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Ride"})]})]}),(0,jsx_runtime.jsx)(NavbarSecondary,{hasSecondary:props.hasSecondary,brand:props.brand,children:props.children})]})};Navbar_Navbar.defaultProps={brand:"world",hasSecondary:"false"};var NavbarLink=function NavbarLink(props){return(0,jsx_runtime.jsx)("a",{href:props.href,children:(0,jsx_runtime.jsx)(components_Typography,{variant:"heading-3",children:props.children})})};NavbarLink.defaultProps={href:"#"};var NavbarPrimary=function NavbarPrimary(props){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["world"===props.brand&&(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-8 py-8 justify-center items-center bg-midnight-1000",children:(0,jsx_runtime.jsx)("div",{className:"container flex justify-between align-middle text-midnight-100",children:props.children})}),"visit"===props.brand&&(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-8 py-8 justify-center items-center bg-apricot-600",children:(0,jsx_runtime.jsx)("div",{className:"container flex justify-between align-middle text-apricot-1000",children:props.children})}),"ride"===props.brand&&(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-8 py-8 justify-center items-center bg-marina-1000",children:(0,jsx_runtime.jsx)("div",{className:"container flex justify-between align-middle text-marina-100",children:props.children})})]})},NavbarSecondary=function NavbarSecondary(props){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["world"===props.brand&&(0,jsx_runtime.jsx)("div",{className:"flex py-4 justify-center align-middle bg-midnight-100",children:(0,jsx_runtime.jsx)("div",{className:"container flex gap-4 align-middle text-midnight-1000",children:props.children})}),"visit"===props.brand&&(0,jsx_runtime.jsx)("div",{className:"flex py-4 justify-center align-middle bg-apricot-200",children:(0,jsx_runtime.jsx)("div",{className:"container flex gap-4 align-middle text-apricot-1000",children:props.children})}),"ride"===props.brand&&(0,jsx_runtime.jsx)("div",{className:"flex py-4 justify-center align-middle bg-marina-100",children:(0,jsx_runtime.jsx)("div",{className:"container flex gap-4 align-middle text-marina-1000",children:props.children})})]})};NavbarSecondary.defaultProps={hasSecondary:!1},Navbar_Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{brand:{defaultValue:{value:"'world'",computed:!1},description:"",type:{name:"string"},required:!1},hasSecondary:{defaultValue:{value:"'false'",computed:!1},description:"",type:{name:"bool"},required:!1}}},NavbarLink.__docgenInfo={description:"",methods:[],displayName:"NavbarLink",props:{href:{defaultValue:{value:"'#'",computed:!1},required:!1}}};var navbar_stories={title:"Components/Navbar",component:Navbar_Navbar},Default=function Default(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,jsx_runtime.jsxs)(Navbar_Navbar,{hasSecondary:!0,brand:"world",children:[(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"})]}),(0,jsx_runtime.jsxs)(Navbar_Navbar,{hasSecondary:!0,brand:"visit",children:[(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"})]}),(0,jsx_runtime.jsxs)(Navbar_Navbar,{hasSecondary:!0,brand:"ride",children:[(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"}),(0,jsx_runtime.jsx)(NavbarLink,{children:"Hello"})]})]})},__namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return /*#__PURE__*/_jsxs("div", {\n    className: "flex flex-col gap-4",\n    children: [/*#__PURE__*/_jsxs(Navbar, {\n      hasSecondary: true,\n      brand: "world",\n      children: [/*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      })]\n    }), /*#__PURE__*/_jsxs(Navbar, {\n      hasSecondary: true,\n      brand: "visit",\n      children: [/*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      })]\n    }), /*#__PURE__*/_jsxs(Navbar, {\n      hasSecondary: true,\n      brand: "ride",\n      children: [/*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      }), /*#__PURE__*/_jsx(NavbarLink, {\n        children: "Hello"\n      })]\n    })]\n  });\n}',...Default.parameters?.docs?.source}}}}}]);