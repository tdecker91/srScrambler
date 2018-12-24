(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sr-scrambler"] = factory();
	else
		root["sr-scrambler"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/*! exports provided: CubePlane, Side, Modifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubePlane", function() { return CubePlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Side", function() { return Side; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modifier", function() { return Modifier; });
var CubePlane;
(function (CubePlane) {
    CubePlane["X"] = "x";
    CubePlane["Y"] = "y";
    CubePlane["Z"] = "z";
})(CubePlane || (CubePlane = {}));
var Side;
(function (Side) {
    Side["L"] = "L";
    Side["R"] = "R";
    Side["U"] = "U";
    Side["D"] = "D";
    Side["F"] = "F";
    Side["B"] = "B";
})(Side || (Side = {}));
var Modifier;
(function (Modifier) {
    Modifier["Double"] = "2";
    Modifier["CounterClockwise"] = "'";
    Modifier["Clockwise"] = "";
})(Modifier || (Modifier = {}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Turn, generateScramble, generateHtmlScramble, convertScrambleToHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turn", function() { return Turn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateScramble", function() { return generateScramble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHtmlScramble", function() { return generateHtmlScramble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertScrambleToHtml", function() { return convertScrambleToHtml; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/enums.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.ts");
var _a;


var planeMapping = (_a = {},
    _a[_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].L] = _enums__WEBPACK_IMPORTED_MODULE_0__["CubePlane"].X,
    _a[_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].R] = _enums__WEBPACK_IMPORTED_MODULE_0__["CubePlane"].X,
    _a[_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].U] = _enums__WEBPACK_IMPORTED_MODULE_0__["CubePlane"].Y,
    _a[_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].D] = _enums__WEBPACK_IMPORTED_MODULE_0__["CubePlane"].Y,
    _a[_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].F] = _enums__WEBPACK_IMPORTED_MODULE_0__["CubePlane"].Z,
    _a[_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].B] = _enums__WEBPACK_IMPORTED_MODULE_0__["CubePlane"].Z,
    _a);
var sides = [_enums__WEBPACK_IMPORTED_MODULE_0__["Side"].L, _enums__WEBPACK_IMPORTED_MODULE_0__["Side"].R, _enums__WEBPACK_IMPORTED_MODULE_0__["Side"].U, _enums__WEBPACK_IMPORTED_MODULE_0__["Side"].D, _enums__WEBPACK_IMPORTED_MODULE_0__["Side"].F, _enums__WEBPACK_IMPORTED_MODULE_0__["Side"].B];
var modifiers = [
    _enums__WEBPACK_IMPORTED_MODULE_0__["Modifier"].Double,
    _enums__WEBPACK_IMPORTED_MODULE_0__["Modifier"].CounterClockwise,
    _enums__WEBPACK_IMPORTED_MODULE_0__["Modifier"].Clockwise
];
var Turn = /** @class */ (function () {
    function Turn(cubeSize, face, depth, modifier) {
        this.cubeSize = cubeSize;
        this.face = face;
        this.depth = depth;
        this.modifier = modifier;
    }
    Turn.prototype.toHtml = function () {
        if (this.depth > 1) {
            // Cube sizes under 6 have different notation
            if (this.cubeSize > 5) {
                return this.face + "<sub>" + this.depth + "</sub>" + this.modifier;
            }
            else {
                return this.face.toLowerCase() + this.modifier;
            }
        }
        else {
            return this.face + this.modifier;
        }
    };
    return Turn;
}());

/**
 * Generates a scramble for an nxn cubic twisty puzzle
 * @param size size of the cube (ex 3 for a 3x3 rubiks cube)
 * @param numTurns number of moves to generate in the sramble
 */
function generateScramble(size, numTurns) {
    var turns = [];
    var previousTurn;
    var newTurn;
    var maxDepth = Math.floor(size / 2);
    for (var i = 0; i < numTurns; i++) {
        do {
            newTurn = Object(_util__WEBPACK_IMPORTED_MODULE_1__["randomElement"])(sides);
        } while (planeMapping[previousTurn] === planeMapping[newTurn]);
        var depth = Math.floor(Math.random() * maxDepth) + 1;
        turns.push(new Turn(size, newTurn, depth, Object(_util__WEBPACK_IMPORTED_MODULE_1__["randomElement"])(modifiers)));
        previousTurn = newTurn;
    }
    return turns;
}
/**
 * Generates a scramble and returns it ready to put on an html page
 * @param  {int} size how big(in layers) of cube to generate a scramble for
 * @param  {int} numTurns how many turns the scramble should be
 * @return {String} html string to display scramble
 */
function generateHtmlScramble(size, numTurns) {
    return convertScrambleToHtml(generateScramble(size, numTurns));
}
;
/**
 * Converts an array of turns to an html string
 * @param  {Array} turns an array of turns
 * @return {String} html string to display scramble
 */
function convertScrambleToHtml(turns) {
    return turns.reduce(function (previous, current) {
        return previous + " " + current.toHtml();
    }, '');
}


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: randomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomElement", function() { return randomElement; });
function randomElement(array) {
    if (!Array.isArray(array) || array.length < 1) {
        return null;
    }
    return array[Math.floor(Math.random() * array.length)];
}


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map