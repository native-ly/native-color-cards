module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bases/Card.tsx":
/*!****************************!*\
  !*** ./src/bases/Card.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
var react_native_touchable_scale_1 = __importDefault(__webpack_require__(/*! react-native-touchable-scale */ "react-native-touchable-scale"));
exports.Base = native_1.default(react_native_touchable_scale_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var color = _a.color, shadow = _a.shadow, flat = _a.flat;
    return "\n    border-radius: 13px;\n    padding: 9px 11px;\n    height: 114px;\n    margin: 5px;\n\n    background-color: " + color + ";\n\n    " + (flat ? "opacity: 0.5;" : "") + "\n\n    " + (shadow
        ? "\n        shadow-opacity: 0.75;\n        shadow-radius: 5px;\n        shadow-color: " + color + ";\n        shadow-offset: 0 0;\n        elevation: 6;\n      "
        : "") + "\n  ";
});
exports.Info = native_1.default.View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 70px;\n"], ["\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 70px;\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/bases/CheckBox.tsx":
/*!********************************!*\
  !*** ./src/bases/CheckBox.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
exports.Base = native_1.default.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n\n  right: 11px;\n  top: 9px;\n  position: absolute;\n  border: 1px solid #fff;\n  border-radius: 15px;\n  padding-top: 2px;\n"], ["\n  ", "\n\n  ", "\n\n  ",
    "\n\n  right: 11px;\n  top: 9px;\n  position: absolute;\n  border: 1px solid #fff;\n  border-radius: 15px;\n  padding-top: 2px;\n"])), helpers_1.flex, helpers_1.size, function (_a) {
    var checked = _a.checked;
    return checked
        ? "\n  background-color: #007aff;"
        : "";
});
var templateObject_1;


/***/ }),

/***/ "./src/bases/Gradient.tsx":
/*!********************************!*\
  !*** ./src/bases/Gradient.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_linear_gradient_1 = __webpack_require__(/*! expo-linear-gradient */ "expo-linear-gradient");
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
exports.Base = native_1.default(expo_linear_gradient_1.LinearGradient)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 10px;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n"], ["\n  border-radius: 10px;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/bases/Icon.tsx":
/*!****************************!*\
  !*** ./src/bases/Icon.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
var Ionicons_1 = __importDefault(__webpack_require__(/*! react-native-vector-icons/Ionicons */ "react-native-vector-icons/Ionicons"));
exports.Icon = native_1.default(Ionicons_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 28px;\n  margin-top: -2px;\n  text-align: center;\n"], ["\n  width: 28px;\n  margin-top: -2px;\n  text-align: center;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/bases/List.tsx":
/*!****************************!*\
  !*** ./src/bases/List.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = __webpack_require__(/*! react-native */ "react-native");
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
// import DragSortableView from 'react-native-drag-sort'
exports.Base = native_1.default(react_native_1.FlatList)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;


/***/ }),

/***/ "./src/bases/Options.tsx":
/*!*******************************!*\
  !*** ./src/bases/Options.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = __webpack_require__(/*! react-native */ "react-native");
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
var expo_blur_1 = __webpack_require__(/*! expo-blur */ "expo-blur");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
exports.Base = native_1.default(react_native_1.TouchableOpacity)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 100;\n  right: 11px;\n  top: 9px;\n"], ["\n  position: absolute;\n  z-index: 100;\n  right: 11px;\n  top: 9px;\n"])));
exports.BlurLayer = native_1.default(expo_blur_1.BlurView)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  ", "\n  \n  border-radius: 13px;\n"], ["\n  ", "\n\n  ", "\n  \n  border-radius: 13px;\n"])), helpers_1.flex, helpers_1.size);
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/bases/Title.tsx":
/*!*****************************!*\
  !*** ./src/bases/Title.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
exports.Base = native_1.default.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  left: 11px;\n  right: 11px;\n\n  ", "\n"], ["\n  color: ", ";\n  left: 11px;\n  right: 11px;\n\n  ",
    "\n"])), function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var isPrimary = _a.isPrimary;
    return isPrimary
        ? "\n    font-weight: 600;\n    font-size: 16px;\n  "
        : "\n    margin-top: 4px;\n    opacity: 0.8;\n    font-weight: 500;\n    font-size: 12px;\n  ";
});
var templateObject_1;


/***/ }),

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var react_native_1 = __webpack_require__(/*! react-native */ "react-native");
var Haptics = __importStar(__webpack_require__(/*! expo-haptics */ "expo-haptics"));
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
var Title_1 = __webpack_require__(/*! ./Title */ "./src/components/Title.tsx");
var Options_1 = __webpack_require__(/*! ./Options */ "./src/components/Options.tsx");
var Gradient_1 = __webpack_require__(/*! ./Gradient */ "./src/components/Gradient.tsx");
var CheckBox_1 = __webpack_require__(/*! ./CheckBox */ "./src/components/CheckBox.tsx");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
var context_1 = __webpack_require__(/*! ../context */ "./src/context.tsx");
var Card_1 = __webpack_require__(/*! ../bases/Card */ "./src/bases/Card.tsx");
var Icon_1 = __webpack_require__(/*! ../bases/Icon */ "./src/bases/Icon.tsx");
exports.Card = function (_a) {
    var backgroundColor = _a.backgroundColor, checkBoxProps = _a.checkBoxProps, _b = _a.color, color = _b === void 0 ? 'adjust' : _b, _c = _a.flat, flat = _c === void 0 ? false : _c, _d = _a.gradient, gradient = _d === void 0 ? false : _d, gradientProps = _a.gradientProps, icon = _a.icon, onLongPress = _a.onLongPress, optionsProps = _a.optionsProps, _e = _a.scalable, scalable = _e === void 0 ? true : _e, _f = _a.shadow, shadow = _f === void 0 ? false : _f, _g = _a.subtitle, subtitle = _g === void 0 ? '' : _g, _h = _a.title, title = _h === void 0 ? '' : _h, props = __rest(_a, ["backgroundColor", "checkBoxProps", "color", "flat", "gradient", "gradientProps", "icon", "onLongPress", "optionsProps", "scalable", "shadow", "subtitle", "title"]);
    var _j = react_1.useContext(context_1.ListContext), editable = _j.editable, setEditable = _j.setEditable;
    var _k = react_1.useState(false), checked = _k[0], setChecked = _k[1];
    var animatedValue = new react_native_1.Animated.Value(0);
    var press = function () {
        editable && setChecked(!checked);
    };
    var longPress = function () {
        setEditable(true);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        onLongPress();
    };
    helpers_1.animations(animatedValue);
    if (color === 'adjust') {
        color = helpers_1.checkColor(backgroundColor);
    }
    else if (color === 'contrast') {
        color = color_1.default(backgroundColor).isDark() ? '#fff' : '#000';
    }
    return (react_1.default.createElement(react_native_1.Animated.View, { style: {
            flex: 1,
            transform: [
                {
                    rotate: editable && !flat
                        ? animatedValue.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ['-0.06rad', '0.06rad'],
                        })
                        : '0rad',
                },
            ],
        } },
        react_1.default.createElement(Card_1.Base, __assign({}, props, { activeScale: !scalable || flat ? 1 : 0.96, onPress: function () { return !flat && press(); }, as: flat ? react_native_1.TouchableOpacity : Card_1.Base, onLongPress: function () { return !flat && longPress(); }, color: backgroundColor, shadow: shadow && !flat, flat: flat }),
            icon && react_1.default.createElement(Icon_1.Icon, { name: icon, color: color, size: 30 }),
            !flat &&
                (editable ? (react_1.default.createElement(CheckBox_1.Check, __assign({}, checkBoxProps, { checked: checked }))) : (react_1.default.createElement(Options_1.Options, __assign({}, optionsProps, { color: color, isDark: backgroundColor })))),
            react_1.default.createElement(Card_1.Info, null,
                title ? (react_1.default.createElement(Title_1.Title, { isPrimary: true, color: color, numberOfLines: 2 }, title)) : null,
                subtitle && !flat ? (react_1.default.createElement(Title_1.Title, { numberOfLines: 1, color: color }, subtitle)) : null),
            gradient && !flat && (react_1.default.createElement(Gradient_1.Gradient, __assign({}, gradientProps, { color: color, faded: checked && editable }))))));
};


/***/ }),

/***/ "./src/components/CheckBox.tsx":
/*!*************************************!*\
  !*** ./src/components/CheckBox.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Ionicons_1 = __importDefault(__webpack_require__(/*! react-native-vector-icons/Ionicons */ "react-native-vector-icons/Ionicons"));
var CheckBox_1 = __webpack_require__(/*! ../bases/CheckBox */ "./src/bases/CheckBox.tsx");
exports.Check = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    return (react_1.default.createElement(CheckBox_1.Base, __assign({}, props, { checked: checked }), checked ? react_1.default.createElement(Ionicons_1.default, { color: "#fff", name: "md-checkmark", size: 18 }) : null));
};


/***/ }),

/***/ "./src/components/Gradient.tsx":
/*!*************************************!*\
  !*** ./src/components/Gradient.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
var Gradient_1 = __webpack_require__(/*! ../bases/Gradient */ "./src/bases/Gradient.tsx");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
exports.Gradient = function (_a) {
    var color = _a.color, faded = _a.faded;
    return (react_1.default.createElement(Gradient_1.Base, { start: [0.2, 0], end: [0.8, 1], colors: faded
            ? ['#fff4', '#fff4']
            : color_1.default(color).isDark()
                ? helpers_1.darker(color)
                : helpers_1.lighter(color) }));
};


/***/ }),

/***/ "./src/components/List.tsx":
/*!*********************************!*\
  !*** ./src/components/List.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var List_1 = __webpack_require__(/*! ../bases/List */ "./src/bases/List.tsx");
exports.List = function (_a) {
    var props = __rest(_a, []);
    return (react_1.default.createElement(List_1.Base, __assign({}, props, { scrollEnabled: true, columnWrapperStyle: {
            paddingHorizontal: 15,
        } })));
};


/***/ }),

/***/ "./src/components/Options.tsx":
/*!************************************!*\
  !*** ./src/components/Options.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Ionicons_1 = __importDefault(__webpack_require__(/*! react-native-vector-icons/Ionicons */ "react-native-vector-icons/Ionicons"));
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
var Options_1 = __webpack_require__(/*! ../bases/Options */ "./src/bases/Options.tsx");
exports.Options = function (_a) {
    var color = _a.color, faded = _a.faded, isDark = _a.isDark, props = __rest(_a, ["color", "faded", "isDark"]);
    return (react_1.default.createElement(Options_1.Base, __assign({}, props),
        react_1.default.createElement(Options_1.BlurLayer, { faded: faded, tint: color_1.default(isDark).isDark() ? 'dark' : 'light', intensity: 60 },
            react_1.default.createElement(Ionicons_1.default, { name: "ios-more", color: color, size: 22 }))));
};


/***/ }),

/***/ "./src/components/Title.tsx":
/*!**********************************!*\
  !*** ./src/components/Title.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Title_1 = __webpack_require__(/*! ../bases/Title */ "./src/bases/Title.tsx");
exports.Title = function (_a) {
    var color = _a.color, children = _a.children, _b = _a.isPrimary, isPrimary = _b === void 0 ? false : _b, props = __rest(_a, ["color", "children", "isPrimary"]);
    return (react_1.default.createElement(Title_1.Base, __assign({}, props, { color: color, isPrimary: isPrimary }), children));
};


/***/ }),

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = __webpack_require__(/*! ./List */ "./src/components/List.tsx");
exports.List = List_1.List;
var Card_1 = __webpack_require__(/*! ./Card */ "./src/components/Card.tsx");
exports.Card = Card_1.Card;


/***/ }),

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
exports.ListContext = react_1.default.createContext({});
exports.ColorCardsProvider = function (_a) {
    var children = _a.children /* data, onDataChange */;
    var _b = react_1.useState(false), editable = _b[0], setEditable = _b[1];
    return (react_1.default.createElement(exports.ListContext.Provider, { value: {
            editable: editable,
            setEditable: function (state) { return setEditable(state); },
        } }, children));
};


/***/ }),

/***/ "./src/helpers/animations.ts":
/*!***********************************!*\
  !*** ./src/helpers/animations.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = __webpack_require__(/*! react-native */ "react-native");
exports.animations = function (animatedValue) {
    react_native_1.Animated.loop(react_native_1.Animated.sequence([
        react_native_1.Animated.timing(animatedValue, {
            toValue: 0.3,
            duration: 100,
            easing: react_native_1.Easing.bounce,
            useNativeDriver: true,
        }),
        react_native_1.Animated.timing(animatedValue, {
            toValue: -0.3,
            duration: 100,
            easing: react_native_1.Easing.bounce,
            useNativeDriver: true,
        }),
        react_native_1.Animated.timing(animatedValue, {
            toValue: 0.0,
            duration: 100,
            easing: react_native_1.Easing.bounce,
            useNativeDriver: true,
        }),
    ])).start();
};


/***/ }),

/***/ "./src/helpers/colors.ts":
/*!*******************************!*\
  !*** ./src/helpers/colors.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
exports.checkColor = function (item) {
    var color = color_1.default(item);
    return color[color.isDark() ? 'lighten' : 'darken'](0.5).toString();
};
exports.darker = function (item) { return [
    'transparent',
    color_1.default(item)
        .darken(0.5)
        .alpha(0.3)
        .toString(),
]; };
exports.lighter = function (item) { return [
    color_1.default(item)
        .lighten(0.5)
        .alpha(0.3)
        .toString(),
    'transparent',
]; };


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(/*! ./animations */ "./src/helpers/animations.ts");
exports.animations = animations_1.animations;
var colors_1 = __webpack_require__(/*! ./colors */ "./src/helpers/colors.ts");
exports.darker = colors_1.darker;
exports.lighter = colors_1.lighter;
exports.checkColor = colors_1.checkColor;
var mixin_1 = __webpack_require__(/*! ./mixin */ "./src/helpers/mixin.ts");
exports.flex = mixin_1.flex;
exports.size = mixin_1.size;


/***/ }),

/***/ "./src/helpers/mixin.ts":
/*!******************************!*\
  !*** ./src/helpers/mixin.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.flex = "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n";
exports.size = "\n  width: 26px;\n  height: 26px;\n";


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ./context */ "./src/context.tsx");
exports.ColorCardsProvider = context_1.ColorCardsProvider;
var components_1 = __webpack_require__(/*! ./components */ "./src/components/index.tsx");
exports.List = components_1.List;
exports.Card = components_1.Card;


/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "expo-blur":
/*!****************************!*\
  !*** external "expo-blur" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("expo-blur");

/***/ }),

/***/ "expo-haptics":
/*!*******************************!*\
  !*** external "expo-haptics" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("expo-haptics");

/***/ }),

/***/ "expo-linear-gradient":
/*!***************************************!*\
  !*** external "expo-linear-gradient" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("expo-linear-gradient");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ }),

/***/ "react-native-touchable-scale":
/*!***********************************************!*\
  !*** external "react-native-touchable-scale" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-touchable-scale");

/***/ }),

/***/ "react-native-vector-icons/Ionicons":
/*!*****************************************************!*\
  !*** external "react-native-vector-icons/Ionicons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-vector-icons/Ionicons");

/***/ }),

/***/ "styled-components/native":
/*!*******************************************!*\
  !*** external "styled-components/native" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components/native");

/***/ })

/******/ });
//# sourceMappingURL=native-color-cards.js.map