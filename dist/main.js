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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Row = __webpack_require__(/*! ./row */ \"./src/row.js\")\n\nfunction Game(){\n    this.board = [new Row(0), new Row(1), new Row(2), new Row(3)]\n    this.player1 = 'human'\n    this.player2 = 'computer'\n    this.currentPlayer = this.player1\n    this.selected = []\n    this.nimSum = 0;\n}\n\nGame.prototype.turn = function turn(){\n    if (this.currentPlayer = this.player1){\n        \n    }\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\n\n\nfunction Gameview(){\n    this.game = null\n}\n\nGameview.prototype.start = function start(){\n    this.game = new Game()\n}\n\nmodule.exports = Gameview\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\")\n\ndocument.addEventListener('DOMContentLoaded', function (){\n\n    let matches = Array.from(document.getElementsByClassName('match'))\n    console.log(matches)\n    matches.forEach( match => {\n        match.addEventListener('mousedown', function(e) {\n            e.preventDefault()\n            // console.log('smelly')\n            match.classList.toggle('selected')\n        } )\n    })\n\n    new GameView().start()\n} )\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/match.js":
/*!**********************!*\
  !*** ./src/match.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction Match(id,rowId){\n    this.id = id\n    this.rowId = rowId\n    this.removed = false\n    this.selected = false\n    this.frontend = document.getElementsByClassName('match')[id]\n}\n\nMatch.prototype.select = function select(){\n    \n}\n\nmodule.exports = Match;\n\n//# sourceURL=webpack:///./src/match.js?");

/***/ }),

/***/ "./src/row.js":
/*!********************!*\
  !*** ./src/row.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Match = __webpack_require__(/*! ./match */ \"./src/match.js\")\n\n\nfunction Row(number){\n    this.id = number\n    this.matches = this.populate()\n    this.empty = false    \n    this.frontend = document.getElementsByClassName('match-row')[this.id]\n}\n\nRow.prototype.populate = function populate(){\n    let times = this.id * 2 + 1\n    let matchArray = []\n    let id = this.id * this.id\n    while (times) {\n        matchArray.push(new Match(id, this.id))\n        id += 1\n        times -= 1\n    }\n    return matchArray\n}\n\nmodule.exports = Row\n\n//# sourceURL=webpack:///./src/row.js?");

/***/ })

/******/ });