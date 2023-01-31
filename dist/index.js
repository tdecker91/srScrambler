(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sr-scrambler"] = factory();
	else
		root["sr-scrambler"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubePlane": () => (/* binding */ CubePlane),
/* harmony export */   "Modifier": () => (/* binding */ Modifier),
/* harmony export */   "Side": () => (/* binding */ Side)
/* harmony export */ });
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

/***/ "./src/scrambler/scrambler.ts":
/*!************************************!*\
  !*** ./src/scrambler/scrambler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCubeScramble": () => (/* binding */ generateCubeScramble),
/* harmony export */   "generateMegaminxScramble": () => (/* binding */ generateMegaminxScramble),
/* harmony export */   "generatePyraminxScramble": () => (/* binding */ generatePyraminxScramble),
/* harmony export */   "generateSkewbScramble": () => (/* binding */ generateSkewbScramble),
/* harmony export */   "generateSquare1Scramble": () => (/* binding */ generateSquare1Scramble)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.ts");


const generateScramble = (faces, planeMapping, modifiers, maxDepth, numTurns) => {
    let turns = [];
    let previousTurn;
    let newTurn;
    for (var i = 0; i < numTurns; i++) {
        do {
            newTurn = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)(faces);
        } while (planeMapping[previousTurn] === planeMapping[newTurn]);
        turns.push({
            face: newTurn,
            depth: Math.floor(Math.random() * maxDepth) + 1,
            modifier: (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)(modifiers)
        });
        previousTurn = newTurn;
    }
    return turns;
};
const generateCubeScramble = (size = 3, numTurns = 21) => {
    return generateScramble([_enums__WEBPACK_IMPORTED_MODULE_0__.Side.L, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.R, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.U, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.D, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.F, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.B], {
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.L]: _enums__WEBPACK_IMPORTED_MODULE_0__.CubePlane.X,
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.R]: _enums__WEBPACK_IMPORTED_MODULE_0__.CubePlane.X,
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.U]: _enums__WEBPACK_IMPORTED_MODULE_0__.CubePlane.Y,
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.D]: _enums__WEBPACK_IMPORTED_MODULE_0__.CubePlane.Y,
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.F]: _enums__WEBPACK_IMPORTED_MODULE_0__.CubePlane.Z,
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.B]: _enums__WEBPACK_IMPORTED_MODULE_0__.CubePlane.Z
    }, [
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.Double,
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.CounterClockwise,
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.Clockwise
    ], Math.floor(size / 2), numTurns);
};
const pochmanFaces = ['D', 'R'];
const pochmanModifiers = ['++', '--'];
/**
 * generates a pochman scramble for the megaminx
 */
const generateMegaminxScramble = (sequenceLength = 10, numSequences = 6) => {
    let turns = [];
    for (let i = 0; i < numSequences; i++) {
        turns[i] = [];
        for (let j = 0; j < sequenceLength; j++) {
            turns[i].push({
                face: pochmanFaces[j % pochmanFaces.length],
                modifier: (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)(pochmanModifiers),
                depth: 1
            });
        }
        turns[i].push({
            face: 'U',
            modifier: (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)(['', '\'']),
            depth: 1
        });
    }
    return turns;
};
const generateSkewbScramble = (numTurns = 9) => {
    return generateScramble([_enums__WEBPACK_IMPORTED_MODULE_0__.Side.L, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.R, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.U, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.B], {
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.L]: 'L',
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.R]: 'R',
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.U]: 'U',
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.B]: 'B'
    }, [
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.CounterClockwise,
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.Clockwise
    ], 1, numTurns);
};
const generatePyraminxScramble = (numTurns = 10) => {
    let turns = generateScramble([_enums__WEBPACK_IMPORTED_MODULE_0__.Side.L, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.R, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.U, _enums__WEBPACK_IMPORTED_MODULE_0__.Side.B], {
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.L]: 'L',
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.R]: 'R',
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.U]: 'U',
        [_enums__WEBPACK_IMPORTED_MODULE_0__.Side.B]: 'B'
    }, [
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.CounterClockwise,
        _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.Clockwise
    ], 1, numTurns);
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.shuffle)(['l', 'r', 'u', 'b'])
        .forEach(point => {
        let modifier = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)([_enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.Clockwise, _enums__WEBPACK_IMPORTED_MODULE_0__.Modifier.CounterClockwise, null]);
        if (modifier != null) {
            turns.push({
                face: point,
                modifier: modifier,
                depth: 1
            });
        }
    });
    return turns;
};
const generateSquare1Scramble = (numTurns = 12) => {
    let tops = [2, 1, 2, 1, 2, 1, 2, 1];
    let bottom = [1, 2, 1, 2, 1, 2, 1, 2];
    const turnTop = (turns) => {
        while (turns != 0) {
            if (turns < 0) {
                let piece = tops.shift();
                turns += piece;
                tops.push(piece);
            }
            else if (turns > 0) {
                let piece = tops.pop();
                turns -= piece;
                tops.unshift(piece);
            }
        }
    };
    const turnBottom = (turns) => {
        while (turns != 0) {
            if (turns < 0) {
                let piece = bottom.shift();
                turns += piece;
                bottom.push(piece);
            }
            else if (turns > 0) {
                let piece = bottom.pop();
                turns -= piece;
                bottom.unshift(piece);
            }
        }
    };
    const slice = () => {
        let topNum = 0;
        let bottomNum = 0;
        let value = 0;
        for (let i = tops.length; i > 0 && value < 6; i--) {
            value += tops[i - 1];
            topNum++;
        }
        value = 0;
        for (let i = 0; i < bottom.length && value < 6; i++) {
            value += bottom[i];
            bottomNum++;
        }
        const topSlice = tops.splice(tops.length - topNum, tops.length);
        const bottomSlice = bottom.splice(0, bottomNum);
        tops = tops.concat(bottomSlice);
        bottom = topSlice.concat(bottom);
    };
    const isLayerAligned = (layer) => {
        let value = 0;
        for (let i = 0; i < layer.length && value < 6; i++) {
            value += layer[i];
            if (value > 6) {
                return false;
            }
        }
        return true;
    };
    const isMovePossible = (layer, turns) => {
        if (turns < 0) {
            // Take off front, put on end
            while (turns < 0) {
                let piece = layer.shift();
                if (piece > Math.abs(turns)) {
                    return false;
                }
                turns += piece;
                layer.push(piece);
            }
            return isLayerAligned(layer);
        }
        else if (turns > 0) {
            // Take off end, put on front
            while (turns > 0) {
                let piece = layer.pop();
                if (turns < piece) {
                    return false;
                }
                turns -= piece;
                layer.unshift(piece);
            }
            return isLayerAligned(layer);
        }
        else {
            // Turns = 0, should be possible
            return true;
        }
    };
    const possibleMoves = () => {
        let possibleTop = [];
        let possibleBottom = [];
        for (let i = -6; i <= 6; i++) {
            if (isMovePossible([...tops], i)) {
                possibleTop.push(i);
            }
            if (isMovePossible([...bottom], i)) {
                possibleBottom.push(i);
            }
        }
        return {
            possibleTop,
            possibleBottom
        };
    };
    let turns = [];
    for (let i = 0; i < numTurns; i++) {
        let moves = possibleMoves();
        let topMove = 0;
        let bottomMove = 0;
        do {
            topMove = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)(moves.possibleTop);
            bottomMove = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomElement)(moves.possibleBottom);
        } while (topMove === 0 && bottomMove === 0);
        turns.push({
            top: topMove,
            bottom: bottomMove
        });
        turnTop(topMove);
        turnBottom(bottomMove);
        slice();
    }
    return turns;
};


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomElement": () => (/* binding */ randomElement),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
function randomElement(array) {
    if (!Array.isArray(array) || array.length < 1) {
        return null;
    }
    return array[Math.floor(Math.random() * array.length)];
}
function shuffle(array) {
    return array.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => (/* binding */ cube),
/* harmony export */   "megaminx": () => (/* binding */ megaminx),
/* harmony export */   "pyraminx": () => (/* binding */ pyraminx),
/* harmony export */   "skewb": () => (/* binding */ skewb),
/* harmony export */   "square1": () => (/* binding */ square1)
/* harmony export */ });
/* harmony import */ var _scrambler_scrambler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrambler/scrambler */ "./src/scrambler/scrambler.ts");

const turnToString = (turn) => {
    const depthLayer = turn.depth > 2 ? `${turn.depth}` : '';
    const sliceIndicator = turn.depth > 1 ? 'w' : '';
    return `${depthLayer}${turn.face}${sliceIndicator}${turn.modifier}`;
};
const scrambleToString = (turns) => {
    return turns
        .map(turn => {
        if (Array.isArray(turn)) {
            return scrambleToString(turn) + '\n';
        }
        else {
            return turnToString(turn);
        }
    })
        .join(' ');
};
const cube = (size = 3, numTurns = 21) => {
    return scrambleToString((0,_scrambler_scrambler__WEBPACK_IMPORTED_MODULE_0__.generateCubeScramble)(size, numTurns));
};
const megaminx = () => {
    return scrambleToString((0,_scrambler_scrambler__WEBPACK_IMPORTED_MODULE_0__.generateMegaminxScramble)());
};
const pyraminx = (numTurns) => {
    return scrambleToString((0,_scrambler_scrambler__WEBPACK_IMPORTED_MODULE_0__.generatePyraminxScramble)(numTurns));
};
const skewb = (numTurns) => {
    return scrambleToString((0,_scrambler_scrambler__WEBPACK_IMPORTED_MODULE_0__.generateSkewbScramble)(numTurns));
};
const square1 = (numTurns) => {
    return (0,_scrambler_scrambler__WEBPACK_IMPORTED_MODULE_0__.generateSquare1Scramble)(numTurns)
        .map((turn) => ` (${turn.top}, ${turn.bottom}) /`)
        .join('');
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map