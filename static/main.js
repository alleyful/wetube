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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayer */ \"./assets/js/videoPlayer.js\");\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_videoPlayer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videoRecorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoRecorder */ \"./assets/js/videoRecorder.js\");\n/* harmony import */ var _videoRecorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_videoRecorder__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/videoPlayer.js":
/*!**********************************!*\
  !*** ./assets/js/videoPlayer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var videoContainer = document.getElementById(\"jsVideoPlayer\");\nvar videoPlayer = document.querySelector(\"#jsVideoPlayer video\");\nvar playBtn = document.getElementById(\"jsPlayButton\");\nvar volumeBtn = document.getElementById(\"jsVolumeBtn\");\nvar fullScrnBtn = document.getElementById(\"jsFullScreen\");\nvar currentTime = document.getElementById(\"currentTime\");\nvar totalTime = document.getElementById(\"totalTime\");\nvar volumeRange = document.getElementById(\"jsVolume\");\n\nfunction handlePlayClick() {\n  if (videoPlayer.paused) {\n    videoPlayer.play();\n    playBtn.innerHTML = '<i class=\"fas fa-pause\"></i>';\n  } else {\n    videoPlayer.pause();\n    playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n  }\n}\n\nfunction handleVolumeClick() {\n  if (videoPlayer.muted) {\n    videoPlayer.muted = false;\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n    volumeRange.value = videoPlayer.volume;\n  } else {\n    volumeRange.value = 0;\n    videoPlayer.muted = true;\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-mute\"></i>';\n  }\n}\n\nfunction exitFullScreen() {\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-expand\"></i>';\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\n\n  if (document.exitFullscreen) {\n    document.exitFullscreen();\n  } else if (document.mozCancelFullScreen) {\n    document.mozCancelFullScreen();\n  } else if (document.webkitExitFullscreen) {\n    document.webkitExitFullscreen();\n  } else if (document.msExitFullscreen) {\n    document.msExitFullscreen();\n  }\n}\n\nfunction goFullScreen() {\n  if (videoContainer.requestFullscreen) {\n    videoContainer.requestFullscreen();\n  } else if (videoContainer.mozRequestFullScreen) {\n    videoContainer.mozRequestFullScreen();\n  } else if (videoContainer.webkitRequestFullscreen) {\n    videoContainer.webkitRequestFullscreen();\n  } else if (videoContainer.msRequestFullscreen) {\n    videoContainer.msRequestFullscreen();\n  }\n\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-compress\"></i>';\n  fullScrnBtn.removeEventListener(\"click\", goFullScreen);\n  fullScrnBtn.addEventListener(\"click\", exitFullScreen);\n}\n\nvar formatDate = function formatDate(seconds) {\n  var secondsNumber = parseInt(seconds, 10);\n  var hours = Math.floor(secondsNumber / 3600);\n  var minutes = Math.floor((secondsNumber - hours * 3600) / 60);\n  var totalSeconds = secondsNumber - hours * 3600 - minutes * 60;\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (seconds < 10) {\n    totalSeconds = \"0\".concat(totalSeconds);\n  }\n\n  return \"\".concat(hours, \":\").concat(minutes, \":\").concat(totalSeconds);\n};\n\nfunction getCurrentTime() {\n  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));\n}\n\nfunction setTotalTime() {\n  var totalTimeString = formatDate(videoPlayer.duration);\n  totalTime.innerHTML = totalTimeString;\n  setInterval(getCurrentTime, 1000);\n}\n\nfunction handleEnded() {\n  videoPlayer.currentTime = 0;\n  playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n}\n\nfunction handleDrag(event) {\n  var value = event.target.value;\n  videoPlayer.volume = value;\n\n  if (value >= 0.6) {\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n  } else if (value >= 0.2) {\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-down\"></i>';\n  } else {\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-off\"></i>';\n  }\n}\n\nfunction init() {\n  videoPlayer.volume = 0.5;\n  playBtn.addEventListener(\"click\", handlePlayClick);\n  volumeBtn.addEventListener(\"click\", handleVolumeClick);\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\n  videoPlayer.addEventListener(\"loadedmetadata\", setTotalTime);\n  videoPlayer.addEventListener(\"ended\", handleEnded);\n  volumeRange.addEventListener(\"input\", handleDrag);\n}\n\nif (videoContainer) {\n  init();\n}\n\n//# sourceURL=webpack:///./assets/js/videoPlayer.js?");

/***/ }),

/***/ "./assets/js/videoRecorder.js":
/*!************************************!*\
  !*** ./assets/js/videoRecorder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar recorderContainer = document.getElementById(\"jsRecordContainer\");\nvar recordBtn = document.getElementById(\"jsRecordBtn\");\nvar videoPreview = document.getElementById(\"jsVideoPreview\");\nvar streamObject;\nvar videoRecorder;\n\nvar handleVideoData = function handleVideoData(event) {\n  var videoFile = event.data;\n  var link = document.createElement(\"a\");\n  link.href = URL.createObjectURL(videoFile);\n  link.download = \"recorded.webm\";\n  document.body.appendChild(link);\n  link.click();\n};\n\nvar stopRecording = function stopRecording() {\n  videoRecorder.stop();\n  recordBtn.removeEventListener(\"click\", stopRecording);\n  recordBtn.addEventListener(\"click\", getVideo);\n  recordBtn.innerHTML = \"Start recording\";\n};\n\nvar startRecording = function startRecording() {\n  videoRecorder = new MediaRecorder(streamObject);\n  videoRecorder.start();\n  videoRecorder.addEventListener(\"dataavailable\", handleVideoData);\n  recordBtn.addEventListener(\"click\", stopRecording);\n};\n\nvar getVideo =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var stream;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return navigator.mediaDevices.getUserMedia({\n              audio: true,\n              video: {\n                width: 1280,\n                height: 720\n              }\n            });\n\n          case 3:\n            stream = _context.sent;\n            videoPreview.srcObject = stream;\n            videoPreview.muted = true;\n            videoPreview.play();\n            recordBtn.innerHTML = \"Stop recording\";\n            streamObject = stream;\n            startRecording();\n            _context.next = 15;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](0);\n            recordBtn.innerHTML = \"☹️ Cant record\";\n\n          case 15:\n            _context.prev = 15;\n            recordBtn.removeEventListener(\"click\", getVideo);\n            return _context.finish(15);\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 12, 15, 18]]);\n  }));\n\n  return function getVideo() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction init() {\n  recordBtn.addEventListener(\"click\", getVideo);\n}\n\nif (recorderContainer) {\n  init();\n}\n\n//# sourceURL=webpack:///./assets/js/videoRecorder.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ })

/******/ });