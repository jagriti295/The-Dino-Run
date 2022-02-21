// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"offline-sprite-definitions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Runner_spriteDefinitionByType = void 0;

var _offline = require("./offline");

// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/* @const
 * Add matching sprite definition and config to Runner.spriteDefinitionByType.
 */
var GAME_TYPE = [];
/**
 * Obstacle definitions.
 * minGap: minimum pixel space between obstacles.
 * multipleSpeed: Speed at which multiples are allowed.
 * speedOffset: speed faster / slower than the horizon.
 * minSpeed: Minimum speed which the obstacle can make an appearance.
 *
 * @typedef {{
 *   type: string,
 *   width: number,
 *   height: number,
 *   yPos: number,
 *   multipleSpeed: number,
 *   minGap: number,
 *   minSpeed: number,
 *   collisionBoxes: Array<CollisionBox>,
 * }}
 */

var ObstacleType;
/**
 * T-Rex runner sprite definitions.
 */

var Runner_spriteDefinitionByType = {
  original: {
    LDPI: {
      BACKGROUND_EL: {
        x: 86,
        y: 2
      },
      CACTUS_LARGE: {
        x: 332,
        y: 2
      },
      CACTUS_SMALL: {
        x: 228,
        y: 2
      },
      OBSTACLE_2: {
        x: 332,
        y: 2
      },
      OBSTACLE: {
        x: 228,
        y: 2
      },
      CLOUD: {
        x: 86,
        y: 2
      },
      HORIZON: {
        x: 2,
        y: 54
      },
      MOON: {
        x: 484,
        y: 2
      },
      PTERODACTYL: {
        x: 134,
        y: 2
      },
      RESTART: {
        x: 2,
        y: 68
      },
      TEXT_SPRITE: {
        x: 655,
        y: 2
      },
      TREX: {
        x: 848,
        y: 2
      },
      STAR: {
        x: 645,
        y: 2
      },
      COLLECTABLE: {
        x: 2,
        y: 2
      },
      ALT_GAME_END: {
        x: 121,
        y: 2
      }
    },
    HDPI: {
      BACKGROUND_EL: {
        x: 166,
        y: 2
      },
      CACTUS_LARGE: {
        x: 652,
        y: 2
      },
      CACTUS_SMALL: {
        x: 446,
        y: 2
      },
      OBSTACLE_2: {
        x: 652,
        y: 2
      },
      OBSTACLE: {
        x: 446,
        y: 2
      },
      CLOUD: {
        x: 166,
        y: 2
      },
      HORIZON: {
        x: 2,
        y: 104
      },
      MOON: {
        x: 954,
        y: 2
      },
      PTERODACTYL: {
        x: 260,
        y: 2
      },
      RESTART: {
        x: 2,
        y: 130
      },
      TEXT_SPRITE: {
        x: 1294,
        y: 2
      },
      TREX: {
        x: 1678,
        y: 2
      },
      STAR: {
        x: 1276,
        y: 2
      },
      COLLECTABLE: {
        x: 4,
        y: 4
      },
      ALT_GAME_END: {
        x: 242,
        y: 4
      }
    },
    MAX_GAP_COEFFICIENT: 1.5,
    MAX_OBSTACLE_LENGTH: 3,
    HAS_CLOUDS: 1,
    BOTTOM_PAD: 10,
    TREX: {
      WAITING_1: {
        x: 44,
        w: 44,
        h: 47,
        xOffset: 0
      },
      WAITING_2: {
        x: 0,
        w: 44,
        h: 47,
        xOffset: 0
      },
      RUNNING_1: {
        x: 88,
        w: 44,
        h: 47,
        xOffset: 0
      },
      RUNNING_2: {
        x: 132,
        w: 44,
        h: 47,
        xOffset: 0
      },
      JUMPING: {
        x: 0,
        w: 44,
        h: 47,
        xOffset: 0
      },
      CRASHED: {
        x: 220,
        w: 44,
        h: 47,
        xOffset: 0
      },
      COLLISION_BOXES: [new _offline.CollisionBox(22, 0, 17, 16), new _offline.CollisionBox(1, 18, 30, 9), new _offline.CollisionBox(10, 35, 14, 8), new _offline.CollisionBox(1, 24, 29, 5), new _offline.CollisionBox(5, 30, 21, 4), new _offline.CollisionBox(9, 34, 15, 4)]
    },

    /** @type {Array<ObstacleType>} */
    OBSTACLES: [{
      type: 'CACTUS_SMALL',
      width: 17,
      height: 35,
      yPos: 105,
      multipleSpeed: 4,
      minGap: 120,
      minSpeed: 0,
      collisionBoxes: [new _offline.CollisionBox(0, 7, 5, 27), new _offline.CollisionBox(4, 0, 6, 34), new _offline.CollisionBox(10, 4, 7, 14)]
    }, {
      type: 'CACTUS_LARGE',
      width: 25,
      height: 50,
      yPos: 90,
      multipleSpeed: 7,
      minGap: 120,
      minSpeed: 0,
      collisionBoxes: [new _offline.CollisionBox(0, 12, 7, 38), new _offline.CollisionBox(8, 0, 7, 49), new _offline.CollisionBox(13, 10, 10, 38)]
    }, {
      type: 'PTERODACTYL',
      width: 46,
      height: 40,
      yPos: [100, 75, 50],
      // Variable height.
      yPosMobile: [100, 50],
      // Variable height mobile.
      multipleSpeed: 999,
      minSpeed: 8.5,
      minGap: 150,
      collisionBoxes: [new _offline.CollisionBox(15, 15, 16, 5), new _offline.CollisionBox(18, 21, 24, 6), new _offline.CollisionBox(2, 14, 4, 3), new _offline.CollisionBox(6, 10, 4, 7), new _offline.CollisionBox(10, 8, 6, 9)],
      numFrames: 2,
      frameRate: 1000 / 6,
      speedOffset: .8
    }],
    BACKGROUND_EL: {
      'CLOUD': {
        HEIGHT: 14,
        MAX_CLOUD_GAP: 400,
        MAX_SKY_LEVEL: 30,
        MIN_CLOUD_GAP: 100,
        MIN_SKY_LEVEL: 71,
        OFFSET: 4,
        WIDTH: 46,
        X_POS: 1,
        Y_POS: 120
      }
    },
    BACKGROUND_EL_CONFIG: {
      MAX_BG_ELS: 1,
      MAX_GAP: 400,
      MIN_GAP: 100,
      POS: 0,
      SPEED: 0.5,
      Y_POS: 125
    },
    LINES: [{
      SOURCE_X: 2,
      SOURCE_Y: 52,
      WIDTH: 600,
      HEIGHT: 12,
      YPOS: 127
    }]
  }
};
exports.Runner_spriteDefinitionByType = Runner_spriteDefinitionByType;
},{"./offline":"offline.js"}],"offline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Runner = Runner;
exports.CollisionBox = CollisionBox;

var _offlineSpriteDefinitions = require("./offline-sprite-definitions");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * T-Rex runner.
 * @param {string} outerContainerId Outer containing element id.
 * @param {!Object=} opt_config
 * @constructor
 * @implements {EventListener}
 * @export
 */
function Runner(outerContainerId, opt_config) {
  // Singleton
  console.log("??");

  if (Runner.instance_) {
    return Runner.instance_;
  }

  Runner.instance_ = this;
  this.outerContainerEl = document.querySelector(outerContainerId);
  this.containerEl = null;
  this.snackbarEl = null; // A div to intercept touch events. Only set while (playing && useTouch).

  this.touchController = null;
  this.config = opt_config || Object.assign(Runner.config, Runner.normalConfig); // Logical dimensions of the container.

  this.dimensions = Runner.defaultDimensions;
  this.gameType = null;
  Runner.spriteDefinition = _offlineSpriteDefinitions.Runner_spriteDefinitionByType['original'];
  this.altGameImageSprite = null;
  this.altGameModeActive = false;
  this.altGameModeFlashTimer = null;
  this.fadeInTimer = 0;
  this.canvas = null;
  this.canvasCtx = null;
  this.tRex = null;
  this.distanceMeter = null;
  this.distanceRan = 0;
  this.highestScore = 0;
  this.syncHighestScore = false;
  this.time = 0;
  this.runningTime = 0;
  this.msPerFrame = 1000 / FPS;
  this.currentSpeed = this.config.SPEED;
  Runner.slowDown = false;
  this.obstacles = [];
  this.activated = false; // Whether the easter egg has been activated.

  this.playing = false; // Whether the game is currently in play state.

  this.crashed = false;
  this.paused = false;
  this.inverted = false;
  this.invertTimer = 0;
  this.resizeTimerId_ = null;
  this.playCount = 0; // Sound FX.

  this.audioBuffer = null;
  /** @type {Object} */

  this.soundFx = {};
  this.generatedSoundFx = null; // Global web audio context for playing sounds.

  this.audioContext = null; // Images.

  this.images = {};
  this.imagesLoaded = 0; // Gamepad state.

  this.pollingGamepads = false;
  this.gamepadIndex = undefined;
  this.previousGamepad = null;

  if (this.isDisabled()) {
    this.setupDisabledRunner();
  } else {
    if (Runner.isAltGameModeEnabled()) {
      this.initAltGameType();
      Runner.gameType = this.gameType;
    }

    this.loadImages();
    window['initializeEasterEggHighScore'] = this.initializeHighScore.bind(this);
  }
}
/**
 * Default game width.
 * @const
 */


var DEFAULT_WIDTH = 600;
/**
 * Frames per second.
 * @const
 */

var FPS = 60;
/** @const */

var IS_HIDPI = window.devicePixelRatio > 1;
/** @const */

var IS_IOS = /CriOS/.test(window.navigator.userAgent);
/** @const */

var IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;
/** @const */

var IS_RTL = document.querySelector('html').dir == 'rtl';
/** @const */

var ARCADE_MODE_URL = 'chrome://dino/';
/** @const */

var RESOURCE_POSTFIX = 'offline-resources-';
/** @const */

var A11Y_STRINGS = {
  ariaLabel: 'dinoGameA11yAriaLabel',
  description: 'dinoGameA11yDescription',
  gameOver: 'dinoGameA11yGameOver',
  highScore: 'dinoGameA11yHighScore',
  jump: 'dinoGameA11yJump',
  started: 'dinoGameA11yStartGame',
  speedLabel: 'dinoGameA11ySpeedToggle'
};
/**
 * Default game configuration.
 * Shared config for all  versions of the game. Additional parameters are
 * defined in Runner.normalConfig and Runner.slowConfig.
 */

Runner.config = {
  AUDIOCUE_PROXIMITY_THRESHOLD: 190,
  AUDIOCUE_PROXIMITY_THRESHOLD_MOBILE_A11Y: 250,
  BG_CLOUD_SPEED: 0.2,
  BOTTOM_PAD: 10,
  // Scroll Y threshold at which the game can be activated.
  CANVAS_IN_VIEW_OFFSET: -10,
  CLEAR_TIME: 3000,
  CLOUD_FREQUENCY: 0.5,
  FADE_DURATION: 1,
  FLASH_DURATION: 1000,
  GAMEOVER_CLEAR_TIME: 1200,
  INITIAL_JUMP_VELOCITY: 12,
  INVERT_FADE_DURATION: 12000,
  MAX_BLINK_COUNT: 3,
  MAX_CLOUDS: 6,
  MAX_OBSTACLE_LENGTH: 3,
  MAX_OBSTACLE_DUPLICATION: 2,
  RESOURCE_TEMPLATE_ID: 'audio-resources',
  SPEED: 6,
  SPEED_DROP_COEFFICIENT: 3,
  ARCADE_MODE_INITIAL_TOP_POSITION: 35,
  ARCADE_MODE_TOP_POSITION_PERCENT: 0.1
};
Runner.normalConfig = {
  ACCELERATION: 0.001,
  AUDIOCUE_PROXIMITY_THRESHOLD: 190,
  AUDIOCUE_PROXIMITY_THRESHOLD_MOBILE_A11Y: 250,
  GAP_COEFFICIENT: 0.6,
  INVERT_DISTANCE: 700,
  MAX_SPEED: 13,
  MOBILE_SPEED_COEFFICIENT: 1.2,
  SPEED: 6
};
Runner.slowConfig = {
  ACCELERATION: 0.0005,
  AUDIOCUE_PROXIMITY_THRESHOLD: 170,
  AUDIOCUE_PROXIMITY_THRESHOLD_MOBILE_A11Y: 220,
  GAP_COEFFICIENT: 0.3,
  INVERT_DISTANCE: 350,
  MAX_SPEED: 9,
  MOBILE_SPEED_COEFFICIENT: 1.5,
  SPEED: 4.2
};
/**
 * Default dimensions.
 */

Runner.defaultDimensions = {
  WIDTH: DEFAULT_WIDTH,
  HEIGHT: 150
};
/**
 * CSS class names.
 * @enum {string}
 */

Runner.classes = {
  ARCADE_MODE: 'arcade-mode',
  CANVAS: 'runner-canvas',
  CONTAINER: 'runner-container',
  CRASHED: 'crashed',
  ICON: 'icon-offline',
  INVERTED: 'inverted',
  SNACKBAR: 'snackbar',
  SNACKBAR_SHOW: 'snackbar-show',
  TOUCH_CONTROLLER: 'controller'
};
/**
 * Sound FX. Reference to the ID of the audio tag on interstitial page.
 * @enum {string}
 */

Runner.sounds = {
  BUTTON_PRESS: 'offline-sound-press',
  HIT: 'offline-sound-hit',
  SCORE: 'offline-sound-reached'
};
/**
 * Key code mapping.
 * @enum {Object}
 */

Runner.keycodes = {
  JUMP: {
    '38': 1,
    '32': 1
  },
  // Up, spacebar
  DUCK: {
    '40': 1
  },
  // Down
  RESTART: {
    '13': 1
  } // Enter

};
/**
 * Runner event names.
 * @enum {string}
 */

Runner.events = {
  ANIM_END: 'webkitAnimationEnd',
  CLICK: 'click',
  KEYDOWN: 'keydown',
  KEYUP: 'keyup',
  POINTERDOWN: 'pointerdown',
  POINTERUP: 'pointerup',
  RESIZE: 'resize',
  TOUCHEND: 'touchend',
  TOUCHSTART: 'touchstart',
  VISIBILITY: 'visibilitychange',
  BLUR: 'blur',
  FOCUS: 'focus',
  LOAD: 'load',
  GAMEPADCONNECTED: 'gamepadconnected'
};
Runner.prototype = {
  /**
   * Initialize alternative game type.
   */
  initAltGameType: function initAltGameType() {
    if (GAME_TYPE.length > 0) {
      // this.gameType = loadTimeData && loadTimeData.valueExists('altGameType') ?
      //     GAME_TYPE[parseInt(loadTimeData.getValue('altGameType'), 10) - 1] :
      //     '';
      this.gameType = '';
    }
  },

  /**
   * Whether the easter egg has been disabled. CrOS enterprise enrolled devices.
   * @return {boolean}
   */
  isDisabled: function isDisabled() {
    // return loadTimeData && loadTimeData.valueExists('disabledEasterEgg');
    return false;
  },

  /**
   * For disabled instances, set up a snackbar with the disabled message.
   */
  setupDisabledRunner: function setupDisabledRunner() {
    this.containerEl = document.createElement('div');
    this.containerEl.className = Runner.classes.SNACKBAR; // this.containerEl.textContent = loadTimeData.getValue('disabledEasterEgg');

    this.outerContainerEl.appendChild(this.containerEl); // Show notification when the activation key is pressed.

    document.addEventListener(Runner.events.KEYDOWN, function (e) {
      if (Runner.keycodes.JUMP[e.keyCode]) {
        this.containerEl.classList.add(Runner.classes.SNACKBAR_SHOW);
        document.querySelector('.icon').classList.add('icon-disabled');
      }
    }.bind(this));
  },

  /**
   * Setting individual settings for debugging.
   * @param {string} setting
   * @param {number|string} value
   */
  updateConfigSetting: function updateConfigSetting(setting, value) {
    if (setting in this.config && value !== undefined) {
      this.config[setting] = value;

      switch (setting) {
        case 'GRAVITY':
        case 'MIN_JUMP_HEIGHT':
        case 'SPEED_DROP_COEFFICIENT':
          this.tRex.config[setting] = value;
          break;

        case 'INITIAL_JUMP_VELOCITY':
          this.tRex.setJumpVelocity(value);
          break;

        case 'SPEED':
          this.setSpeed(
          /** @type {number} */
          value);
          break;
      }
    }
  },

  /**
   * Creates an on page image element from the base 64 encoded string source.
   * @param {string} resourceName Name in data object,
   * @return {HTMLImageElement} The created element.
   */
  createImageElement: function createImageElement(resourceName) {
    // const imgSrc = loadTimeData && loadTimeData.valueExists(resourceName) ?
    //     loadTimeData.getString(resourceName) :
    //     null;
    var imgSrc = null;

    if (imgSrc) {
      var el =
      /** @type {HTMLImageElement} */
      document.createElement('img');
      el.id = resourceName;
      el.src = imgSrc;
      document.getElementById('offline-resources').appendChild(el);
      return el;
    }

    return null;
  },

  /**
   * Cache the appropriate image sprite from the page and get the sprite sheet
   * definition.
   */
  loadImages: function loadImages() {
    var scale = '1x';
    this.spriteDef = Runner.spriteDefinition.LDPI;

    if (IS_HIDPI) {
      scale = '2x';
      this.spriteDef = Runner.spriteDefinition.HDPI;
    }

    Runner.imageSprite =
    /** @type {HTMLImageElement} */
    document.getElementById(RESOURCE_POSTFIX + scale);

    if (this.gameType) {
      Runner.altGameImageSprite =
      /** @type {HTMLImageElement} */
      this.createImageElement('altGameSpecificImage' + scale);
      Runner.altCommonImageSprite =
      /** @type {HTMLImageElement} */
      this.createImageElement('altGameCommonImage' + scale);
    }

    Runner.origImageSprite = Runner.imageSprite; // Disable the alt game mode if the sprites can't be loaded.

    if (!Runner.altGameImageSprite || !Runner.altCommonImageSprite) {
      Runner.isAltGameModeEnabled = function () {
        return false;
      };

      this.altGameModeActive = false;
    }

    if (Runner.imageSprite.complete) {
      this.init();
    } else {
      // If the images are not yet loaded, add a listener.
      Runner.imageSprite.addEventListener(Runner.events.LOAD, this.init.bind(this));
    }
  },

  /**
   * Load and decode base 64 encoded sounds.
   */
  loadSounds: function loadSounds() {
    if (!IS_IOS) {
      this.audioContext = new AudioContext();
      var resourceTemplate = document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;

      for (var sound in Runner.sounds) {
        var soundSrc = resourceTemplate.getElementById(Runner.sounds[sound]).src;
        soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
        var buffer = decodeBase64ToArrayBuffer(soundSrc); // Async, so no guarantee of order in array.

        this.audioContext.decodeAudioData(buffer, function (index, audioData) {
          this.soundFx[index] = audioData;
        }.bind(this, sound));
      }
    }
  },

  /**
   * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
   * @param {number=} opt_speed
   */
  setSpeed: function setSpeed(opt_speed) {
    var speed = opt_speed || this.currentSpeed; // Reduce the speed on smaller mobile screens.

    if (this.dimensions.WIDTH < DEFAULT_WIDTH) {
      var mobileSpeed = Runner.slowDown ? speed : speed * this.dimensions.WIDTH / DEFAULT_WIDTH * this.config.MOBILE_SPEED_COEFFICIENT;
      this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
    } else if (opt_speed) {
      this.currentSpeed = opt_speed;
    }
  },

  /**
   * Game initialiser.
   */
  init: function init() {
    var _this = this;

    // Hide the static icon.
    document.querySelector('.' + Runner.classes.ICON).style.visibility = 'hidden';
    this.adjustDimensions();
    this.setSpeed();
    var ariaLabel = getA11yString(A11Y_STRINGS.ariaLabel);
    this.containerEl = document.createElement('div');
    this.containerEl.setAttribute('role', IS_MOBILE ? 'button' : 'application');
    this.containerEl.setAttribute('tabindex', '0');
    this.containerEl.setAttribute('title', ariaLabel);
    this.containerEl.className = Runner.classes.CONTAINER; // Player canvas container.

    this.canvas = createCanvas(this.containerEl, this.dimensions.WIDTH, this.dimensions.HEIGHT); // Live region for game status updates.

    this.a11yStatusEl = document.createElement('span');
    this.a11yStatusEl.className = 'offline-runner-live-region';
    this.a11yStatusEl.setAttribute('aria-live', 'assertive');
    this.a11yStatusEl.textContent = '';
    Runner.a11yStatusEl = this.a11yStatusEl; // Add checkbox to slow down the game.

    this.slowSpeedCheckboxLabel = document.createElement('label');
    this.slowSpeedCheckboxLabel.className = 'slow-speed-option hidden';
    this.slowSpeedCheckboxLabel.textContent = getA11yString(A11Y_STRINGS.speedLabel);
    this.slowSpeedCheckbox = document.createElement('input');
    this.slowSpeedCheckbox.setAttribute('type', 'checkbox');
    this.slowSpeedCheckbox.setAttribute('title', getA11yString(A11Y_STRINGS.speedLabel));
    this.slowSpeedCheckbox.setAttribute('tabindex', '0');
    this.slowSpeedCheckbox.setAttribute('checked', 'checked');
    this.slowSpeedToggleEl = document.createElement('span');
    this.slowSpeedToggleEl.className = 'slow-speed-toggle';
    this.slowSpeedCheckboxLabel.appendChild(this.slowSpeedCheckbox);
    this.slowSpeedCheckboxLabel.appendChild(this.slowSpeedToggleEl);

    if (IS_IOS) {
      this.outerContainerEl.appendChild(this.a11yStatusEl);
    } else {
      this.containerEl.appendChild(this.a11yStatusEl);
    }

    announcePhrase(getA11yString(A11Y_STRINGS.description));
    this.generatedSoundFx = new GeneratedSoundFx();
    this.canvasCtx =
    /** @type {CanvasRenderingContext2D} */
    this.canvas.getContext('2d');
    this.canvasCtx.fillStyle = '#f7f7f7';
    this.canvasCtx.fill();
    Runner.updateCanvasScaling(this.canvas); // Horizon contains clouds, obstacles and the ground.

    this.horizon = new Horizon(this.canvas, this.spriteDef, this.dimensions, this.config.GAP_COEFFICIENT); // Distance meter

    this.distanceMeter = new DistanceMeter(this.canvas, this.spriteDef.TEXT_SPRITE, this.dimensions.WIDTH); // Draw t-rex

    this.tRex = new Trex(this.canvas, this.spriteDef.TREX);
    this.outerContainerEl.appendChild(this.containerEl);
    this.outerContainerEl.appendChild(this.slowSpeedCheckboxLabel);
    this.startListening(); // console.log(this.currentFrame);
    // console.log(this.typeConfig.numFrames);
    // console.log(deltaTime);

    this.update();
    window.addEventListener(Runner.events.RESIZE, this.debounceResize.bind(this)); // Handle dark mode

    var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = darkModeMediaQuery && darkModeMediaQuery.matches;
    darkModeMediaQuery.addListener(function (e) {
      _this.isDarkMode = e.matches;
    });
  },

  /**
   * Create the touch controller. A div that covers whole screen.
   */
  createTouchController: function createTouchController() {
    this.touchController = document.createElement('div');
    this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
    this.touchController.addEventListener(Runner.events.TOUCHSTART, this);
    this.touchController.addEventListener(Runner.events.TOUCHEND, this);
    this.outerContainerEl.appendChild(this.touchController);
  },

  /**
   * Debounce the resize event.
   */
  debounceResize: function debounceResize() {
    if (!this.resizeTimerId_) {
      this.resizeTimerId_ = setInterval(this.adjustDimensions.bind(this), 250);
    }
  },

  /**
   * Adjust game space dimensions on resize.
   */
  adjustDimensions: function adjustDimensions() {
    clearInterval(this.resizeTimerId_);
    this.resizeTimerId_ = null;
    var boxStyles = window.getComputedStyle(this.outerContainerEl);
    var padding = Number(boxStyles.paddingLeft.substr(0, boxStyles.paddingLeft.length - 2));
    this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;

    if (this.isArcadeMode()) {
      this.dimensions.WIDTH = Math.min(DEFAULT_WIDTH, this.dimensions.WIDTH);

      if (this.activated) {
        this.setArcadeModeContainerScale();
      }
    } // Redraw the elements back onto the canvas.


    if (this.canvas) {
      this.canvas.width = this.dimensions.WIDTH;
      this.canvas.height = this.dimensions.HEIGHT;
      Runner.updateCanvasScaling(this.canvas);
      this.distanceMeter.calcXPos(this.dimensions.WIDTH);
      this.clearCanvas();
      this.horizon.update(0, 0, true);
      this.tRex.update(0); // Outer container and distance meter.

      if (this.playing || this.crashed || this.paused) {
        this.containerEl.style.width = this.dimensions.WIDTH + 'px';
        this.containerEl.style.height = this.dimensions.HEIGHT + 'px';
        this.distanceMeter.update(0, Math.ceil(this.distanceRan));
        this.stop();
      } else {
        this.tRex.draw(0, 0);
      } // Game over panel.


      if (this.crashed && this.gameOverPanel) {
        this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
        this.gameOverPanel.draw(this.altGameModeActive, this.tRex);
      }
    }
  },

  /**
   * Play the game intro.
   * Canvas container width expands out to the full width.
   */
  playIntro: function playIntro() {
    if (!this.activated && !this.crashed) {
      this.playingIntro = true;
      this.tRex.playingIntro = true; // CSS animation definition.

      var keyframes = '@-webkit-keyframes intro { ' + 'from { width:' + Trex.config.WIDTH + 'px }' + 'to { width: ' + this.dimensions.WIDTH + 'px }' + '}';
      document.styleSheets[0].insertRule(keyframes, 0);
      this.containerEl.addEventListener(Runner.events.ANIM_END, this.startGame.bind(this));
      this.containerEl.style.webkitAnimation = 'intro .4s ease-out 1 both';
      this.containerEl.style.width = this.dimensions.WIDTH + 'px';
      this.setPlayStatus(true);
      this.activated = true;
    } else if (this.crashed) {
      this.restart();
    }
  },

  /**
   * Update the game status to started.
   */
  startGame: function startGame() {
    if (this.isArcadeMode()) {
      this.setArcadeMode();
    }

    this.toggleSpeed();
    this.runningTime = 0;
    this.playingIntro = false;
    this.tRex.playingIntro = false;
    this.containerEl.style.webkitAnimation = '';
    this.playCount++;
    this.generatedSoundFx.background();
    announcePhrase(getA11yString(A11Y_STRINGS.started));

    if (Runner.audioCues) {
      this.containerEl.setAttribute('title', getA11yString(A11Y_STRINGS.jump));
    } // Handle tabbing off the page. Pause the current game.


    document.addEventListener(Runner.events.VISIBILITY, this.onVisibilityChange.bind(this));
    window.addEventListener(Runner.events.BLUR, this.onVisibilityChange.bind(this));
    window.addEventListener(Runner.events.FOCUS, this.onVisibilityChange.bind(this));
  },
  clearCanvas: function clearCanvas() {
    this.canvasCtx.clearRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
  },

  /**
   * Checks whether the canvas area is in the viewport of the browser
   * through the current scroll position.
   * @return boolean.
   */
  isCanvasInView: function isCanvasInView() {
    return this.containerEl.getBoundingClientRect().top > Runner.config.CANVAS_IN_VIEW_OFFSET;
  },

  /**
   * Enable the alt game mode. Switching out the sprites.
   */
  enableAltGameMode: function enableAltGameMode() {
    Runner.imageSprite = Runner.altGameImageSprite;
    Runner.spriteDefinition = _offlineSpriteDefinitions.Runner_spriteDefinitionByType[Runner.gameType];

    if (IS_HIDPI) {
      this.spriteDef = Runner.spriteDefinition.HDPI;
    } else {
      this.spriteDef = Runner.spriteDefinition.LDPI;
    }

    this.altGameModeActive = true;
    this.tRex.enableAltGameMode(this.spriteDef.TREX);
    this.horizon.enableAltGameMode(this.spriteDef);
    this.generatedSoundFx.background();
  },

  /**
   * Update the game frame and schedules the next one. 
   */
  update: function update() {
    this.updatePending = false;
    var now = getTimeStamp();
    var deltaTime = now - (this.time || now); // Flashing when switching game modes.

    if (this.altGameModeFlashTimer < 0 || this.altGameModeFlashTimer === 0) {
      this.altGameModeFlashTimer = null;
      this.tRex.setFlashing(false);
      this.enableAltGameMode();
    } else if (this.altGameModeFlashTimer > 0) {
      this.altGameModeFlashTimer -= deltaTime;
      this.tRex.update(deltaTime);
      deltaTime = 0;
    }

    this.time = now; //console.log(this.currentFrame);
    //console.log(this.typeConfig.numFrames);
    //console.log(deltaTime); - getting printed

    if (this.playing) {
      this.clearCanvas(); // Additional fade in - Prevents jump when switching sprites

      if (this.altGameModeActive && this.fadeInTimer <= this.config.FADE_DURATION) {
        this.fadeInTimer += deltaTime / 1000;
        this.canvasCtx.globalAlpha = this.fadeInTimer;
      } else {
        this.canvasCtx.globalAlpha = 1;
      }

      if (this.tRex.jumping) {
        this.tRex.updateJump(deltaTime);
      }

      this.runningTime += deltaTime;
      var hasObstacles = this.runningTime > this.config.CLEAR_TIME; // First jump triggers the intro.

      if (this.tRex.jumpCount === 1 && !this.playingIntro) {
        this.playIntro();
      } // The horizon doesn't move until the intro is over.


      if (this.playingIntro) {
        this.horizon.update(0, this.currentSpeed, hasObstacles);
      } else if (!this.crashed) {
        var showNightMode = this.isDarkMode ^ this.inverted;
        deltaTime = !this.activated ? 0 : deltaTime;
        this.horizon.update(deltaTime, this.currentSpeed, hasObstacles, showNightMode);
      } // Check for collisions.


      var collision = hasObstacles && checkForCollision(this.horizon.obstacles[0], this.tRex); // console.log(hasObstacles);
      // For a11y, audio cues.

      if (Runner.audioCues && hasObstacles) {
        var jumpObstacle = this.horizon.obstacles[0].typeConfig.type != 'COLLECTABLE';

        if (!this.horizon.obstacles[0].jumpAlerted) {
          var threshold = Runner.isMobileMouseInput ? Runner.config.AUDIOCUE_PROXIMITY_THRESHOLD_MOBILE_A11Y : Runner.config.AUDIOCUE_PROXIMITY_THRESHOLD;
          var adjProximityThreshold = threshold + threshold * Math.log10(this.currentSpeed / Runner.config.SPEED);

          if (this.horizon.obstacles[0].xPos < adjProximityThreshold) {
            if (jumpObstacle) {
              this.generatedSoundFx.jump();
            }

            this.horizon.obstacles[0].jumpAlerted = true;
          }
        }
      } // Activated alt game mode.


      if (Runner.isAltGameModeEnabled() && collision && this.horizon.obstacles[0].typeConfig.type == 'COLLECTABLE') {
        this.horizon.removeFirstObstacle();
        this.tRex.setFlashing(true);
        collision = false;
        this.altGameModeFlashTimer = this.config.FLASH_DURATION;
        this.runningTime = 0;
        this.generatedSoundFx.collect();
      }

      if (!collision) {
        this.distanceRan += this.currentSpeed * deltaTime / this.msPerFrame;

        if (this.currentSpeed < this.config.MAX_SPEED) {
          this.currentSpeed += this.config.ACCELERATION;
        }
      } else {
        this.gameOver();
      }

      var playAchievementSound = this.distanceMeter.update(deltaTime, Math.ceil(this.distanceRan));

      if (!Runner.audioCues && playAchievementSound) {
        this.playSound(this.soundFx.SCORE);
      } // Night mode.


      if (!Runner.isAltGameModeEnabled()) {
        if (this.invertTimer > this.config.INVERT_FADE_DURATION) {
          this.invertTimer = 0;
          this.invertTrigger = false;
          this.invert(false);
        } else if (this.invertTimer) {
          this.invertTimer += deltaTime;
        } else {
          var actualDistance = this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));

          if (actualDistance > 0) {
            this.invertTrigger = !(actualDistance % this.config.INVERT_DISTANCE);

            if (this.invertTrigger && this.invertTimer === 0) {
              this.invertTimer += deltaTime;
              this.invert(false);
            }
          }
        }
      }
    }

    if (this.playing || !this.activated && this.tRex.blinkCount < Runner.config.MAX_BLINK_COUNT) {
      this.tRex.update(deltaTime);
      this.scheduleNextUpdate();
    }
  },

  /**
   * Event handler.
   * @param {Event} e
   */
  handleEvent: function handleEvent(e) {
    return function (evtType, events) {
      switch (evtType) {
        case events.KEYDOWN:
        case events.TOUCHSTART:
        case events.POINTERDOWN:
          this.onKeyDown(e);
          break;

        case events.KEYUP:
        case events.TOUCHEND:
        case events.POINTERUP:
          this.onKeyUp(e);
          break;

        case events.GAMEPADCONNECTED:
          this.onGamepadConnected(e);
          break;
      }
    }.bind(this)(e.type, Runner.events);
  },

  /**
   * Initialize audio cues if activated by focus on the canvas element.
   * @param {Event} e
   */
  handleCanvasKeyPress: function handleCanvasKeyPress(e) {
    if (!this.activated && !Runner.audioCues) {
      this.toggleSpeed();
      Runner.audioCues = true;
      this.generatedSoundFx.init();
      Runner.generatedSoundFx = this.generatedSoundFx;
      Runner.config.CLEAR_TIME *= 1.2;
    } else if (e.keyCode && Runner.keycodes.JUMP[e.keyCode]) {
      this.onKeyDown(e);
    }
  },

  /**
   * Prevent space key press from scrolling.
   * @param {Event} e
   */
  preventScrolling: function preventScrolling(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
    }
  },

  /**
   * Toggle speed setting if toggle is shown.
   */
  toggleSpeed: function toggleSpeed() {
    if (Runner.audioCues) {
      var speedChange = Runner.slowDown != this.slowSpeedCheckbox.checked;

      if (speedChange) {
        Runner.slowDown = this.slowSpeedCheckbox.checked;
        var updatedConfig = Runner.slowDown ? Runner.slowConfig : Runner.normalConfig;
        Runner.config = Object.assign(Runner.config, updatedConfig);
        this.currentSpeed = updatedConfig.SPEED;
        this.tRex.enableSlowConfig();
        this.horizon.adjustObstacleSpeed();
      }

      if (this.playing) {
        this.disableSpeedToggle(true);
      }
    }
  },

  /**
   * Show the speed toggle.
   * From focus event or when audio cues are activated.
   * @param {Event=} e
   */
  showSpeedToggle: function showSpeedToggle(e) {
    var isFocusEvent = e && e.type == 'focus';

    if (Runner.audioCues || isFocusEvent) {
      this.slowSpeedCheckboxLabel.classList.toggle(HIDDEN_CLASS, isFocusEvent ? false : !this.crashed);
    }
  },

  /**
   * Disable the speed toggle.
   * @param {boolean} disable
   */
  disableSpeedToggle: function disableSpeedToggle(disable) {
    if (disable) {
      this.slowSpeedCheckbox.setAttribute('disabled', 'disabled');
    } else {
      this.slowSpeedCheckbox.removeAttribute('disabled');
    }
  },

  /**
   * Bind relevant key / mouse / touch listeners.
   */
  startListening: function startListening() {
    // A11y keyboard / screen reader activation.
    this.containerEl.addEventListener(Runner.events.KEYDOWN, this.handleCanvasKeyPress.bind(this));

    if (!IS_MOBILE) {
      this.containerEl.addEventListener(Runner.events.FOCUS, this.showSpeedToggle.bind(this));
    }

    this.canvas.addEventListener(Runner.events.KEYDOWN, this.preventScrolling.bind(this));
    this.canvas.addEventListener(Runner.events.KEYUP, this.preventScrolling.bind(this)); // Keys.

    document.addEventListener(Runner.events.KEYDOWN, this);
    document.addEventListener(Runner.events.KEYUP, this); // Touch / pointer.

    this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);
    document.addEventListener(Runner.events.POINTERDOWN, this);
    document.addEventListener(Runner.events.POINTERUP, this);

    if (this.isArcadeMode()) {
      // Gamepad
      window.addEventListener(Runner.events.GAMEPADCONNECTED, this);
    }
  },

  /**
   * Remove all listeners.
   */
  stopListening: function stopListening() {
    document.removeEventListener(Runner.events.KEYDOWN, this);
    document.removeEventListener(Runner.events.KEYUP, this);

    if (this.touchController) {
      this.touchController.removeEventListener(Runner.events.TOUCHSTART, this);
      this.touchController.removeEventListener(Runner.events.TOUCHEND, this);
    }

    this.containerEl.removeEventListener(Runner.events.TOUCHSTART, this);
    document.removeEventListener(Runner.events.POINTERDOWN, this);
    document.removeEventListener(Runner.events.POINTERUP, this);

    if (this.isArcadeMode()) {
      window.removeEventListener(Runner.events.GAMEPADCONNECTED, this);
    }
  },

  /**
   * Process keydown.
   * @param {Event} e
   */
  onKeyDown: function onKeyDown(e) {
    // Prevent native page scrolling whilst tapping on mobile.
    if (IS_MOBILE && this.playing) {
      e.preventDefault();
    } // e.keyCode =32;


    console.log(e.keyCode); //e.keyCode =32;

    if (this.isCanvasInView()) {
      // Allow toggling of speed toggle.
      if (Runner.keycodes.JUMP[e.keyCode] && e.target == this.slowSpeedCheckbox) {
        return;
      }

      if (!this.crashed && !this.paused) {
        // For a11y, screen reader activation.
        var isMobileMouseInput = IS_MOBILE && e.type === Runner.events.POINTERDOWN && e.pointerType == 'mouse' && e.target == this.containerEl || IS_IOS && e.pointerType == 'touch' && document.activeElement == this.containerEl;

        if (Runner.keycodes.JUMP[e.keyCode] || e.type === Runner.events.TOUCHSTART || isMobileMouseInput || Runner.keycodes.DUCK[e.keyCode] && this.altGameModeActive) {
          e.preventDefault(); // Starting the game for the first time.

          if (!this.playing) {
            // Started by touch so create a touch controller.
            if (!this.touchController && e.type === Runner.events.TOUCHSTART) {
              this.createTouchController();
            }

            if (isMobileMouseInput) {
              this.handleCanvasKeyPress(e);
            } // this.loadSounds();


            this.setPlayStatus(true);
            this.update();

            if (window.errorPageController) {
              errorPageController.trackEasterEgg();
            }
          } // Start jump.


          if (!this.tRex.jumping && !this.tRex.ducking) {
            if (Runner.audioCues) {
              this.generatedSoundFx.cancelFootSteps();
            } else {
              this.playSound(this.soundFx.BUTTON_PRESS);
            }

            this.tRex.startJump(this.currentSpeed);
          } // Ducking is disabled on alt game modes.

        } else if (!this.altGameModeActive && this.playing && Runner.keycodes.DUCK[e.keyCode]) {
          e.preventDefault();

          if (this.tRex.jumping) {
            // Speed drop, activated only when jump key is not pressed.
            this.tRex.setSpeedDrop();
          } else if (!this.tRex.jumping && !this.tRex.ducking) {
            // Duck.
            this.tRex.setDuck(true);
          }
        }
      }
    }
  },

  /**
   * Process key up.
   * @param {Event} e
   */
  onKeyUp: function onKeyUp(e) {
    var keyCode = String(e.keyCode);
    var isjumpKey = Runner.keycodes.JUMP[keyCode] || e.type === Runner.events.TOUCHEND || e.type === Runner.events.POINTERUP;

    if (this.isRunning() && isjumpKey) {
      this.tRex.endJump();
    } else if (Runner.keycodes.DUCK[keyCode]) {
      this.tRex.speedDrop = false;
      this.tRex.setDuck(false);
    } else if (this.crashed) {
      // Check that enough time has elapsed before allowing jump key to restart.
      var deltaTime = getTimeStamp() - this.time;

      if (this.isCanvasInView() && (Runner.keycodes.RESTART[keyCode] || this.isLeftClickOnCanvas(e) || deltaTime >= this.config.GAMEOVER_CLEAR_TIME && Runner.keycodes.JUMP[keyCode])) {
        this.handleGameOverClicks(e);
      }
    } else if (this.paused && isjumpKey) {
      // Reset the jump state
      this.tRex.reset();
      this.play();
    }
  },

  /**
   * Process gamepad connected event.
   * @param {Event} e
   */
  onGamepadConnected: function onGamepadConnected(e) {
    if (!this.pollingGamepads) {
      this.pollGamepadState();
    }
  },

  /**
   * rAF loop for gamepad polling.
   */
  pollGamepadState: function pollGamepadState() {
    var gamepads = navigator.getGamepads();
    this.pollActiveGamepad(gamepads);
    this.pollingGamepads = true;
    requestAnimationFrame(this.pollGamepadState.bind(this));
  },

  /**
   * Polls for a gamepad with the jump button pressed. If one is found this
   * becomes the "active" gamepad and all others are ignored.
   * @param {!Array<Gamepad>} gamepads
   */
  pollForActiveGamepad: function pollForActiveGamepad(gamepads) {
    for (var i = 0; i < gamepads.length; ++i) {
      if (gamepads[i] && gamepads[i].buttons.length > 0 && gamepads[i].buttons[0].pressed) {
        this.gamepadIndex = i;
        this.pollActiveGamepad(gamepads);
        return;
      }
    }
  },

  /**
   * Polls the chosen gamepad for button presses and generates KeyboardEvents
   * to integrate with the rest of the game logic.
   * @param {!Array<Gamepad>} gamepads
   */
  pollActiveGamepad: function pollActiveGamepad(gamepads) {
    if (this.gamepadIndex === undefined) {
      this.pollForActiveGamepad(gamepads);
      return;
    }

    var gamepad = gamepads[this.gamepadIndex];

    if (!gamepad) {
      this.gamepadIndex = undefined;
      this.pollForActiveGamepad(gamepads);
      return;
    } // The gamepad specification defines the typical mapping of physical buttons
    // to button indicies: https://w3c.github.io/gamepad/#remapping


    this.pollGamepadButton(gamepad, 0, 38); // Jump

    if (gamepad.buttons.length >= 2) {
      this.pollGamepadButton(gamepad, 1, 40); // Duck
    }

    if (gamepad.buttons.length >= 10) {
      this.pollGamepadButton(gamepad, 9, 13); // Restart
    }

    this.previousGamepad = gamepad;
  },

  /**
   * Generates a key event based on a gamepad button.
   * @param {!Gamepad} gamepad
   * @param {number} buttonIndex
   * @param {number} keyCode
   */
  pollGamepadButton: function pollGamepadButton(gamepad, buttonIndex, keyCode) {
    var state = gamepad.buttons[buttonIndex].pressed;
    var previousState = false;

    if (this.previousGamepad) {
      previousState = this.previousGamepad.buttons[buttonIndex].pressed;
    } // Generate key events on the rising and falling edge of a button press.


    if (state !== previousState) {
      var e = new KeyboardEvent(state ? Runner.events.KEYDOWN : Runner.events.KEYUP, {
        keyCode: keyCode
      });
      document.dispatchEvent(e);
    }
  },

  /**
   * Handle interactions on the game over screen state.
   * A user is able to tap the high score twice to reset it.
   * @param {Event} e
   */
  handleGameOverClicks: function handleGameOverClicks(e) {
    if (e.target != this.slowSpeedCheckbox) {
      e.preventDefault();

      if (this.distanceMeter.hasClickedOnHighScore(e) && this.highestScore) {
        if (this.distanceMeter.isHighScoreFlashing()) {
          // Subsequent click, reset the high score.
          this.saveHighScore(0, true);
          this.distanceMeter.resetHighScore();
        } else {
          // First click, flash the high score.
          this.distanceMeter.startHighScoreFlashing();
        }
      } else {
        this.distanceMeter.cancelHighScoreFlashing();
        this.restart();
      }
    }
  },

  /**
   * Returns whether the event was a left click on canvas.
   * On Windows right click is registered as a click.
   * @param {Event} e
   * @return {boolean}
   */
  isLeftClickOnCanvas: function isLeftClickOnCanvas(e) {
    return e.button != null && e.button < 2 && e.type === Runner.events.POINTERUP && (e.target === this.canvas || IS_MOBILE && Runner.audioCues && e.target === this.containerEl);
  },

  /**
   * RequestAnimationFrame wrapper.
   */
  scheduleNextUpdate: function scheduleNextUpdate() {
    if (!this.updatePending) {
      this.updatePending = true;
      this.raqId = requestAnimationFrame(this.update.bind(this));
    } //console.log(this.currentFrame);
    // console.log(this.typeConfig.numFrames);
    //console.log(deltaTime);

  },

  /**
   * Whether the game is running.
   * @return {boolean}
   */
  isRunning: function isRunning() {
    return !!this.raqId;
  },

  /**
   * Set the initial high score as stored in the user's profile.
   * @param {number} highScore
   */
  initializeHighScore: function initializeHighScore(highScore) {
    this.syncHighestScore = true;
    highScore = Math.ceil(highScore);

    if (highScore < this.highestScore) {
      if (window.errorPageController) {
        errorPageController.updateEasterEggHighScore(this.highestScore);
      }

      return;
    }

    this.highestScore = highScore;
    this.distanceMeter.setHighScore(this.highestScore);
  },

  /**
   * Sets the current high score and saves to the profile if available.
   * @param {number} distanceRan Total distance ran.
   * @param {boolean=} opt_resetScore Whether to reset the score.
   */
  saveHighScore: function saveHighScore(distanceRan, opt_resetScore) {
    this.highestScore = Math.ceil(distanceRan);
    this.distanceMeter.setHighScore(this.highestScore); // Store the new high score in the profile.

    if (this.syncHighestScore && window.errorPageController) {
      if (opt_resetScore) {
        errorPageController.resetEasterEggHighScore();
      } else {
        errorPageController.updateEasterEggHighScore(this.highestScore);
      }
    }
  },

  /**
   * Game over state.
   */
  gameOver: function gameOver() {
    this.playSound(this.soundFx.HIT);
    vibrate(200);
    this.stop();
    this.crashed = true;
    this.distanceMeter.achievement = false;
    this.tRex.update(100, Trex.status.CRASHED); // Game over panel.

    if (!this.gameOverPanel) {
      var origSpriteDef = IS_HIDPI ? _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.HDPI : _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.LDPI;

      if (this.canvas) {
        if (Runner.isAltGameModeEnabled) {
          this.gameOverPanel = new GameOverPanel(this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART, this.dimensions, origSpriteDef.ALT_GAME_END, this.altGameModeActive);
        } else {
          this.gameOverPanel = new GameOverPanel(this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART, this.dimensions);
        }
      }
    }

    this.gameOverPanel.draw(this.altGameModeActive, this.tRex); // Update the high score.

    if (this.distanceRan > this.highestScore) {
      this.saveHighScore(this.distanceRan);
    }

    document.getElementById("dino-scores1").innerHTML = "Congratulations! " + ((this.distanceRan - this.distanceRan % 1) / 100).toString() + " $DINO coins have been added to your Near wallet";
    console.log(document.getElementById("dino-scores1")); // Reset the time clock.

    this.time = getTimeStamp();

    if (Runner.audioCues) {
      this.generatedSoundFx.stopAll();
      announcePhrase(getA11yString(A11Y_STRINGS.gameOver).replace('$1', this.distanceMeter.getActualDistance(this.distanceRan).toString()) + ' ' + getA11yString(A11Y_STRINGS.highScore).replace('$1', this.distanceMeter.getActualDistance(this.highestScore).toString()));
      this.containerEl.setAttribute('title', getA11yString(A11Y_STRINGS.ariaLabel));
    }

    this.showSpeedToggle();
    this.disableSpeedToggle(false);
  },
  stop: function stop() {
    this.setPlayStatus(false);
    this.paused = true;
    cancelAnimationFrame(this.raqId);
    this.raqId = 0;
    this.generatedSoundFx.stopAll();
  },
  play: function play() {
    if (!this.crashed) {
      this.setPlayStatus(true);
      this.paused = false;
      this.tRex.update(0, Trex.status.RUNNING);
      this.time = getTimeStamp();
      this.update();
      this.generatedSoundFx.background();
    }
  },
  restart: function restart() {
    if (!this.raqId) {
      this.playCount++;
      this.runningTime = 0;
      this.setPlayStatus(true);
      this.toggleSpeed();
      this.paused = false;
      this.crashed = false;
      this.distanceRan = 0;
      this.setSpeed(this.config.SPEED);
      this.time = getTimeStamp();
      this.containerEl.classList.remove(Runner.classes.CRASHED);
      this.clearCanvas();
      this.distanceMeter.reset();
      this.horizon.reset();
      this.tRex.reset();
      this.playSound(this.soundFx.BUTTON_PRESS);
      this.invert(true);
      this.flashTimer = null;
      this.update();
      this.gameOverPanel.reset();
      this.generatedSoundFx.background();
      this.containerEl.setAttribute('title', getA11yString(A11Y_STRINGS.jump));
      announcePhrase(getA11yString(A11Y_STRINGS.started));
    }
  },
  setPlayStatus: function setPlayStatus(isPlaying) {
    if (this.touchController) {
      this.touchController.classList.toggle(HIDDEN_CLASS, !isPlaying);
    }

    this.playing = isPlaying;
  },

  /**
   * Whether the game should go into arcade mode.
   * @return {boolean}
   */
  isArcadeMode: function isArcadeMode() {
    // In RTL languages the title is wrapped with the left to right mark
    // control characters &#x202A; and &#x202C but are invisible.
    return IS_RTL ? document.title.indexOf(ARCADE_MODE_URL) == 1 : document.title === ARCADE_MODE_URL;
  },

  /**
   * Hides offline messaging for a fullscreen game only experience.
   */
  setArcadeMode: function setArcadeMode() {
    document.body.classList.add(Runner.classes.ARCADE_MODE);
    this.setArcadeModeContainerScale();
  },

  /**
   * Sets the scaling for arcade mode.
   */
  setArcadeModeContainerScale: function setArcadeModeContainerScale() {
    var windowHeight = window.innerHeight;
    var scaleHeight = windowHeight / this.dimensions.HEIGHT;
    var scaleWidth = window.innerWidth / this.dimensions.WIDTH;
    var scale = Math.max(1, Math.min(scaleHeight, scaleWidth));
    var scaledCanvasHeight = this.dimensions.HEIGHT * scale; // Positions the game container at 10% of the available vertical window
    // height minus the game container height.

    var translateY = Math.ceil(Math.max(0, (windowHeight - scaledCanvasHeight - Runner.config.ARCADE_MODE_INITIAL_TOP_POSITION) * Runner.config.ARCADE_MODE_TOP_POSITION_PERCENT)) * window.devicePixelRatio;
    var cssScale = IS_RTL ? -scale + ',' + scale : scale;
    this.containerEl.style.transform = 'scale(' + cssScale + ') translateY(' + translateY + 'px)';
  },

  /**
   * Pause the game if the tab is not in focus.
   */
  onVisibilityChange: function onVisibilityChange(e) {
    if (document.hidden || document.webkitHidden || e.type === 'blur' || document.visibilityState !== 'visible') {
      this.stop();
    } else if (!this.crashed) {
      this.tRex.reset();
      this.play();
    }
  },

  /**
   * Play a sound.
   * @param {AudioBuffer} soundBuffer
   */
  playSound: function playSound(soundBuffer) {
    if (soundBuffer) {
      var sourceNode = this.audioContext.createBufferSource();
      sourceNode.buffer = soundBuffer;
      sourceNode.connect(this.audioContext.destination);
      sourceNode.start(0);
    }
  },

  /**
   * Inverts the current page / canvas colors.
   * @param {boolean} reset Whether to reset colors.
   */
  invert: function invert(reset) {
    var htmlEl = document.firstElementChild;

    if (reset) {
      htmlEl.classList.toggle(Runner.classes.INVERTED, false);
      this.invertTimer = 0;
      this.inverted = false;
    } else {
      this.inverted = htmlEl.classList.toggle(Runner.classes.INVERTED, this.invertTrigger);
    }
  }
};
/**
 * Updates the canvas size taking into
 * account the backing store pixel ratio and
 * the device pixel ratio.
 *
 * See article by Paul Lewis:
 * http://www.html5rocks.com/en/tutorials/canvas/hidpi/
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number=} opt_width
 * @param {number=} opt_height
 * @return {boolean} Whether the canvas was scaled.
 */

Runner.updateCanvasScaling = function (canvas, opt_width, opt_height) {
  var context =
  /** @type {CanvasRenderingContext2D} */
  canvas.getContext('2d'); // Query the various pixel ratios

  var devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;
  /** @suppress {missingProperties} */

  var backingStoreRatio = Math.floor(context.webkitBackingStorePixelRatio) || 1;
  var ratio = devicePixelRatio / backingStoreRatio; // Upscale the canvas if the two ratios don't match

  if (devicePixelRatio !== backingStoreRatio) {
    var oldWidth = opt_width || canvas.width;
    var oldHeight = opt_height || canvas.height;
    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;
    canvas.style.width = oldWidth + 'px';
    canvas.style.height = oldHeight + 'px'; // Scale the context to counter the fact that we've manually scaled
    // our canvas element.

    context.scale(ratio, ratio);
    return true;
  } else if (devicePixelRatio === 1) {
    // Reset the canvas width / height. Fixes scaling bug when the page is
    // zoomed and the devicePixelRatio changes accordingly.
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
  }

  return false;
};
/**
 * Whether events are enabled.
 * @return {boolean}
 */


Runner.isAltGameModeEnabled = function () {
  // return loadTimeData && loadTimeData.valueExists('enableAltGameMode');
  return false;
};
/**
 * Generated sound FX class for audio cues.
 * @constructor
 */


function GeneratedSoundFx() {
  this.audioCues = false;
  this.context = null;
  this.panner = null;
}

GeneratedSoundFx.prototype = {
  init: function init() {
    this.audioCues = true;

    if (!this.context) {
      // iOS only supports the webkit version.
      this.context = window.webkitAudioContext ? new webkitAudioContext() : new AudioContext();

      if (IS_IOS) {
        this.context.onstatechange = function () {
          if (this.context.state != 'running') {
            this.context.resume();
          }
        }.bind(this);

        this.context.resume();
      }

      this.panner = this.context.createStereoPanner ? this.context.createStereoPanner() : null;
    }
  },
  stopAll: function stopAll() {
    this.cancelFootSteps();
  },

  /**
   * Play oscillators at certain frequency and for a certain time.
   * @param {number} frequency
   * @param {number} startTime
   * @param {number} duration
   * @param {?number=} opt_vol
   * @param {number=} opt_pan
   */
  playNote: function playNote(frequency, startTime, duration, opt_vol, opt_pan) {
    var osc1 = this.context.createOscillator();
    var osc2 = this.context.createOscillator();
    var volume = this.context.createGain(); // Set oscillator wave type

    osc1.type = 'triangle';
    osc2.type = 'triangle';
    volume.gain.value = 0.1; // Set up node routing

    if (this.panner) {
      this.panner.pan.value = opt_pan || 0;
      osc1.connect(volume).connect(this.panner);
      osc2.connect(volume).connect(this.panner);
      this.panner.connect(this.context.destination);
    } else {
      osc1.connect(volume);
      osc2.connect(volume);
      volume.connect(this.context.destination);
    } // Detune oscillators for chorus effect


    osc1.frequency.value = frequency + 1;
    osc2.frequency.value = frequency - 2; // Fade out

    volume.gain.setValueAtTime(opt_vol || 0.01, startTime + duration - 0.05);
    volume.gain.linearRampToValueAtTime(0.00001, startTime + duration); // Start oscillators

    osc1.start(startTime);
    osc2.start(startTime); // Stop oscillators

    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  },
  background: function background() {
    if (this.audioCues) {
      var now = this.context.currentTime;
      this.playNote(493.883, now, 0.116);
      this.playNote(659.255, now + 0.116, 0.232);
      this.loopFootSteps();
    }
  },
  loopFootSteps: function loopFootSteps() {
    if (this.audioCues && !this.bgSoundIntervalId) {
      this.bgSoundIntervalId = setInterval(function () {
        this.playNote(73.42, this.context.currentTime, 0.05, 0.16);
        this.playNote(69.30, this.context.currentTime + 0.116, 0.116, 0.16);
      }.bind(this), 280);
    }
  },
  cancelFootSteps: function cancelFootSteps() {
    if (this.audioCues && this.bgSoundIntervalId) {
      clearInterval(this.bgSoundIntervalId);
      this.bgSoundIntervalId = null;
      this.playNote(103.83, this.context.currentTime, 0.232, 0.02);
      this.playNote(116.54, this.context.currentTime + 0.116, 0.232, 0.02);
    }
  },
  collect: function collect() {
    if (this.audioCues) {
      this.cancelFootSteps();
      var now = this.context.currentTime;
      this.playNote(830.61, now, 0.116);
      this.playNote(1318.51, now + 0.116, 0.232);
    }
  },
  jump: function jump() {
    if (this.audioCues) {
      var now = this.context.currentTime;
      this.playNote(659.25, now, 0.116, 0.3, -0.6);
      this.playNote(880, now + 0.116, 0.232, 0.3, -0.6);
    }
  }
};
/**
 * Speak a phrase using Speech Synthesis API for a11y.
 * @param {string} phrase Sentence to speak.
 */

function speakPhrase(phrase) {
  if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance(phrase);
    var voices = window.speechSynthesis.getVoices();
    msg.text = phrase;
    speechSynthesis.speak(msg);
  }
}
/**
 * For screen readers make an announcement to the live region.
 * @param {string} phrase Sentence to speak.
 */


function announcePhrase(phrase) {
  if (Runner.a11yStatusEl) {
    Runner.a11yStatusEl.textContent = '';
    Runner.a11yStatusEl.textContent = phrase;
  }
}
/**
 * Returns a string from loadTimeData data object.
 * @param {string} stringName
 * @return {string}
 */


function getA11yString(stringName) {
  // return loadTimeData && loadTimeData.valueExists(stringName) ?
  //     loadTimeData.getString(stringName) :
  //     '';
  return '';
}
/**
 * Get random number.
 * @param {number} min
 * @param {number} max
 */


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Vibrate on mobile devices.
 * @param {number} duration Duration of the vibration in milliseconds.
 */


function vibrate(duration) {
  if (IS_MOBILE && window.navigator.vibrate) {
    window.navigator.vibrate(duration);
  }
}
/**
 * Create canvas element.
 * @param {Element} container Element to append canvas to.
 * @param {number} width
 * @param {number} height
 * @param {string=} opt_classname
 * @return {HTMLCanvasElement}
 */


function createCanvas(container, width, height, opt_classname) {
  var canvas =
  /** @type {!HTMLCanvasElement} */
  document.createElement('canvas');
  canvas.className = opt_classname ? Runner.classes.CANVAS + ' ' + opt_classname : Runner.classes.CANVAS;
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);
  return canvas;
}
/**
 * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
 * @param {string} base64String
 */


function decodeBase64ToArrayBuffer(base64String) {
  var len = base64String.length / 4 * 3;
  var str = atob(base64String);
  var arrayBuffer = new ArrayBuffer(len);
  var bytes = new Uint8Array(arrayBuffer);

  for (var i = 0; i < len; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes.buffer;
}
/**
 * Return the current timestamp.
 * @return {number}
 */


function getTimeStamp() {
  return IS_IOS ? new Date().getTime() : performance.now();
} //******************************************************************************

/**
 * Game over panel.
 * @param {!HTMLCanvasElement} canvas
 * @param {Object} textImgPos
 * @param {Object} restartImgPos
 * @param {!Object} dimensions Canvas dimensions.
 * @param {Object=} opt_altGameEndImgPos
 * @param {boolean=} opt_altGameActive
 * @constructor
 */


function GameOverPanel(canvas, textImgPos, restartImgPos, dimensions, opt_altGameEndImgPos, opt_altGameActive) {
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  canvas.getContext('2d');
  this.canvasDimensions = dimensions;
  this.textImgPos = textImgPos;
  this.restartImgPos = restartImgPos;
  this.altGameEndImgPos = opt_altGameEndImgPos;
  this.altGameModeActive = opt_altGameActive; // Retry animation.

  this.frameTimeStamp = 0;
  this.animTimer = 0;
  this.currentFrame = 0;
  this.gameOverRafId = null;
  this.flashTimer = 0;
  this.flashCounter = 0;
  this.originalText = true;
}

GameOverPanel.RESTART_ANIM_DURATION = 875;
GameOverPanel.LOGO_PAUSE_DURATION = 875;
GameOverPanel.FLASH_ITERATIONS = 5;
/**
 * Animation frames spec.
 */

GameOverPanel.animConfig = {
  frames: [0, 36, 72, 108, 144, 180, 216, 252],
  msPerFrame: GameOverPanel.RESTART_ANIM_DURATION / 8
};
/**
 * Dimensions used in the panel.
 * @enum {number}
 */

GameOverPanel.dimensions = {
  TEXT_X: 0,
  TEXT_Y: 13,
  TEXT_WIDTH: 191,
  TEXT_HEIGHT: 11,
  RESTART_WIDTH: 36,
  RESTART_HEIGHT: 32
};
GameOverPanel.prototype = {
  /**
   * Update the panel dimensions.
   * @param {number} width New canvas width.
   * @param {number} opt_height Optional new canvas height.
   */
  updateDimensions: function updateDimensions(width, opt_height) {
    this.canvasDimensions.WIDTH = width;

    if (opt_height) {
      this.canvasDimensions.HEIGHT = opt_height;
    }

    this.currentFrame = GameOverPanel.animConfig.frames.length - 1;
  },
  drawGameOverText: function drawGameOverText(dimensions, opt_useAltText) {
    var centerX = this.canvasDimensions.WIDTH / 2;
    var textSourceX = dimensions.TEXT_X;
    var textSourceY = dimensions.TEXT_Y;
    var textSourceWidth = dimensions.TEXT_WIDTH;
    var textSourceHeight = dimensions.TEXT_HEIGHT;
    var textTargetX = Math.round(centerX - dimensions.TEXT_WIDTH / 2);
    var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
    var textTargetWidth = dimensions.TEXT_WIDTH;
    var textTargetHeight = dimensions.TEXT_HEIGHT;

    if (IS_HIDPI) {
      textSourceY *= 2;
      textSourceX *= 2;
      textSourceWidth *= 2;
      textSourceHeight *= 2;
    }

    if (!opt_useAltText) {
      textSourceX += this.textImgPos.x;
      textSourceY += this.textImgPos.y;
    }

    var spriteSource = opt_useAltText ? Runner.altCommonImageSprite : Runner.origImageSprite;
    this.canvasCtx.save();

    if (IS_RTL) {
      this.canvasCtx.translate(this.canvasDimensions.WIDTH, 0);
      this.canvasCtx.scale(-1, 1);
    } // Game over text from sprite.


    this.canvasCtx.drawImage(spriteSource, textSourceX, textSourceY, textSourceWidth, textSourceHeight, textTargetX, textTargetY, textTargetWidth, textTargetHeight);
    this.canvasCtx.restore();
  },

  /**
   * Draw additional adornments for alternative game types.
   */
  drawAltGameElements: function drawAltGameElements(tRex) {
    // Additional adornments.
    if (this.altGameModeActive && Runner.spriteDefinition.ALT_GAME_END_CONFIG) {
      var altGameEndConfig = Runner.spriteDefinition.ALT_GAME_END_CONFIG;
      var altGameEndSourceWidth = altGameEndConfig.WIDTH;
      var altGameEndSourceHeight = altGameEndConfig.HEIGHT;
      var altGameEndTargetX = tRex.xPos + altGameEndConfig.X_OFFSET;
      var altGameEndTargetY = tRex.yPos + altGameEndConfig.Y_OFFSET;

      if (IS_HIDPI) {
        altGameEndSourceWidth *= 2;
        altGameEndSourceHeight *= 2;
      }

      this.canvasCtx.drawImage(Runner.altCommonImageSprite, this.altGameEndImgPos.x, this.altGameEndImgPos.y, altGameEndSourceWidth, altGameEndSourceHeight, altGameEndTargetX, altGameEndTargetY, altGameEndConfig.WIDTH, altGameEndConfig.HEIGHT);
    }
  },

  /**
   * Draw restart button.
   */
  drawRestartButton: function drawRestartButton() {
    var dimensions = GameOverPanel.dimensions;
    var framePosX = GameOverPanel.animConfig.frames[this.currentFrame];
    var restartSourceWidth = dimensions.RESTART_WIDTH;
    var restartSourceHeight = dimensions.RESTART_HEIGHT;
    var restartTargetX = this.canvasDimensions.WIDTH / 2 - dimensions.RESTART_WIDTH / 2;
    var restartTargetY = this.canvasDimensions.HEIGHT / 2;

    if (IS_HIDPI) {
      restartSourceWidth *= 2;
      restartSourceHeight *= 2;
      framePosX *= 2;
    }

    this.canvasCtx.save();

    if (IS_RTL) {
      this.canvasCtx.translate(this.canvasDimensions.WIDTH, 0);
      this.canvasCtx.scale(-1, 1);
    }

    this.canvasCtx.drawImage(Runner.origImageSprite, this.restartImgPos.x + framePosX, this.restartImgPos.y, restartSourceWidth, restartSourceHeight, restartTargetX, restartTargetY, dimensions.RESTART_WIDTH, dimensions.RESTART_HEIGHT);
    this.canvasCtx.restore();
  },

  /**
   * Draw the panel.
   * @param {boolean} opt_altGameModeActive
   * @param {!Trex} opt_tRex
   */
  draw: function draw(opt_altGameModeActive, opt_tRex) {
    if (opt_altGameModeActive) {
      this.altGameModeActive = opt_altGameModeActive;
    }

    this.drawGameOverText(GameOverPanel.dimensions, false);
    this.drawRestartButton();
    this.drawAltGameElements(opt_tRex);
    this.update();
  },

  /**
   * Update animation frames.
   */
  update: function update() {
    // console.log("Why not here?");
    var now = getTimeStamp();
    var deltaTime = now - (this.frameTimeStamp || now);
    this.frameTimeStamp = now;
    this.animTimer += deltaTime;
    this.flashTimer += deltaTime; // console.log(this.currentFrame);
    // console.log(this.typeConfig.numFrames);
    //console.log(deltaTime);
    // Restart Button

    if (this.currentFrame == 0 && this.animTimer > GameOverPanel.LOGO_PAUSE_DURATION) {
      this.animTimer = 0;
      this.currentFrame++;
      this.drawRestartButton();
    } else if (this.currentFrame > 0 && this.currentFrame < GameOverPanel.animConfig.frames.length) {
      if (this.animTimer >= GameOverPanel.animConfig.msPerFrame) {
        this.currentFrame++;
        this.drawRestartButton();
      }
    } else if (!this.altGameModeActive && this.currentFrame == GameOverPanel.animConfig.frames.length) {
      this.reset();
      return;
    } // Game over text


    if (this.altGameModeActive && _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.ALT_GAME_OVER_TEXT_CONFIG) {
      var altTextConfig = _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.ALT_GAME_OVER_TEXT_CONFIG;

      if (this.flashCounter < GameOverPanel.FLASH_ITERATIONS && this.flashTimer > altTextConfig.FLASH_DURATION) {
        this.flashTimer = 0;
        this.originalText = !this.originalText;
        this.clearGameOverTextBounds();

        if (this.originalText) {
          this.drawGameOverText(GameOverPanel.dimensions, false);
          this.flashCounter++;
        } else {
          this.drawGameOverText(altTextConfig, true);
        }
      } else if (this.flashCounter >= GameOverPanel.FLASH_ITERATIONS) {
        this.reset();
        return;
      }
    }

    this.gameOverRafId = requestAnimationFrame(this.update.bind(this));
  },

  /**
   * Clear game over text.
   */
  clearGameOverTextBounds: function clearGameOverTextBounds() {
    this.canvasCtx.save();
    this.canvasCtx.clearRect(Math.round(this.canvasDimensions.WIDTH / 2 - GameOverPanel.dimensions.TEXT_WIDTH / 2), Math.round((this.canvasDimensions.HEIGHT - 25) / 3), GameOverPanel.dimensions.TEXT_WIDTH, GameOverPanel.dimensions.TEXT_HEIGHT + 4);
    this.canvasCtx.restore();
  },
  reset: function reset() {
    if (this.gameOverRafId) {
      cancelAnimationFrame(this.gameOverRafId);
      this.gameOverRafId = null;
    }

    this.animTimer = 0;
    this.frameTimeStamp = 0;
    this.currentFrame = 0;
    this.flashTimer = 0;
    this.flashCounter = 0;
    this.originalText = true;
  }
}; //******************************************************************************

/**
 * Check for a collision.
 * @param {!Obstacle} obstacle
 * @param {!Trex} tRex T-rex object.
 * @param {CanvasRenderingContext2D=} opt_canvasCtx Optional canvas context for
 *    drawing collision boxes.
 * @return {Array<CollisionBox>|undefined}
 */

function checkForCollision(obstacle, tRex, opt_canvasCtx) {
  var obstacleBoxXPos = Runner.defaultDimensions.WIDTH + obstacle.xPos; // console.log(obstacleBoxXPos);
  // Adjustments are made to the bounding box as there is a 1 pixel white
  // border around the t-rex and obstacles.

  var tRexBox = new CollisionBox(tRex.xPos + 1, tRex.yPos + 1, tRex.config.WIDTH - 2, tRex.config.HEIGHT - 2); // console.log(tRexBox);

  var obstacleBox = new CollisionBox(obstacle.xPos + 1, obstacle.yPos + 1, obstacle.typeConfig.width * obstacle.size - 2, obstacle.typeConfig.height - 2); // console.log(obstacleBox);
  // Debug outer box

  if (opt_canvasCtx) {
    drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox);
  } // Simple outer bounds check.


  if (boxCompare(tRexBox, obstacleBox)) {
    var collisionBoxes = obstacle.collisionBoxes;
    var tRexCollisionBoxes = [];

    if (Runner.isAltGameModeEnabled()) {
      tRexCollisionBoxes = Runner.spriteDefinition.TREX.COLLISION_BOXES;
    } else {
      tRexCollisionBoxes = tRex.ducking ? Trex.collisionBoxes.DUCKING : Trex.collisionBoxes.RUNNING;
    } // Detailed axis aligned box check.


    for (var t = 0; t < tRexCollisionBoxes.length; t++) {
      for (var i = 0; i < collisionBoxes.length; i++) {
        // Adjust the box to actual positions.
        var adjTrexBox = createAdjustedCollisionBox(tRexCollisionBoxes[t], tRexBox);
        var adjObstacleBox = createAdjustedCollisionBox(collisionBoxes[i], obstacleBox);
        var crashed = boxCompare(adjTrexBox, adjObstacleBox); // Draw boxes for debug.

        if (opt_canvasCtx) {
          drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox);
        }

        if (crashed) {
          return [adjTrexBox, adjObstacleBox];
        }
      }
    }
  }
}
/**
 * Adjust the collision box.
 * @param {!CollisionBox} box The original box.
 * @param {!CollisionBox} adjustment Adjustment box.
 * @return {CollisionBox} The adjusted collision box object.
 */


function createAdjustedCollisionBox(box, adjustment) {
  return new CollisionBox(box.x + adjustment.x, box.y + adjustment.y, box.width, box.height);
}
/**
 * Draw the collision boxes for debug.
 */


function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
  canvasCtx.save();
  canvasCtx.strokeStyle = '#f00';
  canvasCtx.strokeRect(tRexBox.x, tRexBox.y, tRexBox.width, tRexBox.height);
  canvasCtx.strokeStyle = '#0f0';
  canvasCtx.strokeRect(obstacleBox.x, obstacleBox.y, obstacleBox.width, obstacleBox.height);
  canvasCtx.restore();
}
/**
 * Compare two collision boxes for a collision.
 * @param {CollisionBox} tRexBox
 * @param {CollisionBox} obstacleBox
 * @return {boolean} Whether the boxes intersected.
 */


function boxCompare(tRexBox, obstacleBox) {
  var crashed = false;
  var tRexBoxX = tRexBox.x;
  var tRexBoxY = tRexBox.y;
  var obstacleBoxX = obstacleBox.x;
  var obstacleBoxY = obstacleBox.y; // Axis-Aligned Bounding Box method.

  if (tRexBox.x < obstacleBoxX + obstacleBox.width && tRexBox.x + tRexBox.width > obstacleBoxX && tRexBox.y < obstacleBox.y + obstacleBox.height && tRexBox.height + tRexBox.y > obstacleBox.y) {
    crashed = true;
  }

  return crashed;
} //******************************************************************************

/**
 * Collision box object.
 * @param {number} x X position.
 * @param {number} y Y Position.
 * @param {number} w Width.
 * @param {number} h Height.
 * @constructor
 */


function CollisionBox(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
} //******************************************************************************

/**
 * Obstacle.
 * @param {CanvasRenderingContext2D} canvasCtx
 * @param {ObstacleType} type
 * @param {Object} spriteImgPos Obstacle position in sprite.
 * @param {Object} dimensions
 * @param {number} gapCoefficient Mutipler in determining the gap.
 * @param {number} speed
 * @param {number=} opt_xOffset
 * @param {boolean=} opt_isAltGameMode
 * @constructor
 */


function Obstacle(canvasCtx, type, spriteImgPos, dimensions, gapCoefficient, speed, opt_xOffset, opt_isAltGameMode) {
  this.canvasCtx = canvasCtx;
  this.spritePos = spriteImgPos;
  this.typeConfig = type;
  this.gapCoefficient = Runner.slowDown ? gapCoefficient * 2 : gapCoefficient;
  this.size = getRandomNum(1, Obstacle.MAX_OBSTACLE_LENGTH);
  this.dimensions = dimensions;
  this.remove = false;
  this.xPos = dimensions.WIDTH + (opt_xOffset || 0);
  this.yPos = 0;
  this.width = 0;
  this.collisionBoxes = [];
  this.gap = 0;
  this.speedOffset = 0;
  this.altGameModeActive = opt_isAltGameMode;
  this.imageSprite = this.typeConfig.type == 'COLLECTABLE' ? Runner.altCommonImageSprite : this.altGameModeActive ? Runner.altGameImageSprite : Runner.imageSprite; // For animated obstacles.

  this.currentFrame = 0;
  this.timer = 0;
  this.init(speed);
}
/**
 * Coefficient for calculating the maximum gap.
 */


Obstacle.MAX_GAP_COEFFICIENT = 1.5;
/**
 * Maximum obstacle grouping count.
 */

Obstacle.MAX_OBSTACLE_LENGTH = 3;
Obstacle.prototype = {
  /**
   * Initialise the DOM for the obstacle.
   * @param {number} speed
   */
  init: function init(speed) {
    this.cloneCollisionBoxes(); // Only allow sizing if we're at the right speed.

    if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {
      this.size = 1;
    }

    this.width = this.typeConfig.width * this.size; // Check if obstacle can be positioned at various heights.

    if (Array.isArray(this.typeConfig.yPos)) {
      var yPosConfig = IS_MOBILE ? this.typeConfig.yPosMobile : this.typeConfig.yPos;
      this.yPos = yPosConfig[getRandomNum(0, yPosConfig.length - 1)];
    } else {
      this.yPos = this.typeConfig.yPos;
    }

    this.draw(); // Make collision box adjustments,
    // Central box is adjusted to the size as one box.
    //      ____        ______        ________
    //    _|   |-|    _|     |-|    _|       |-|
    //   | |<->| |   | |<--->| |   | |<----->| |
    //   | | 1 | |   | |  2  | |   | |   3   | |
    //   |_|___|_|   |_|_____|_|   |_|_______|_|
    //

    if (this.size > 1) {
      this.collisionBoxes[1].width = this.width - this.collisionBoxes[0].width - this.collisionBoxes[2].width;
      this.collisionBoxes[2].x = this.width - this.collisionBoxes[2].width;
    } // For obstacles that go at a different speed from the horizon.


    if (this.typeConfig.speedOffset) {
      this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset : -this.typeConfig.speedOffset;
    }

    this.gap = this.getGap(this.gapCoefficient, speed); // Increase gap for audio cues enabled.

    if (Runner.audioCues) {
      this.gap *= 2;
    }
  },

  /**
   * Draw and crop based on size.
   */
  draw: function draw() {
    var sourceWidth = this.typeConfig.width;
    var sourceHeight = this.typeConfig.height;

    if (IS_HIDPI) {
      sourceWidth = sourceWidth * 2;
      sourceHeight = sourceHeight * 2;
    } // X position in sprite.


    var sourceX = sourceWidth * this.size * (0.5 * (this.size - 1)) + this.spritePos.x; // Animation frames.

    if (this.currentFrame > 0) {
      sourceX += sourceWidth * this.currentFrame;
    }

    this.canvasCtx.drawImage(this.imageSprite, sourceX, this.spritePos.y, sourceWidth * this.size, sourceHeight, this.xPos, this.yPos, this.typeConfig.width * this.size, this.typeConfig.height);
  },

  /**
   * Obstacle frame update.
   * @param {number} deltaTime
   * @param {number} speed
   */
  update: function update(deltaTime, speed) {
    if (!this.remove) {
      if (this.typeConfig.speedOffset) {
        speed += this.speedOffset;
      }

      this.xPos -= Math.floor(speed * FPS / 1000 * deltaTime); // Update frame

      if (this.typeConfig.numFrames) {
        this.timer += deltaTime;

        if (this.timer >= this.typeConfig.frameRate) {
          this.currentFrame = this.currentFrame === this.typeConfig.numFrames - 1 ? 0 : this.currentFrame + 1;
          this.timer = 0;
        }
      }

      this.draw();

      if (!this.isVisible()) {
        this.remove = true;
      }
    }
  },

  /**
   * Calculate a random gap size.
   * - Minimum gap gets wider as speed increses
   * @param {number} gapCoefficient
   * @param {number} speed
   * @return {number} The gap size.
   */
  getGap: function getGap(gapCoefficient, speed) {
    var minGap = Math.round(this.width * speed + this.typeConfig.minGap * gapCoefficient);
    var maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);
    return getRandomNum(minGap, maxGap);
  },

  /**
   * Check if obstacle is visible.
   * @return {boolean} Whether the obstacle is in the game area.
   */
  isVisible: function isVisible() {
    return this.xPos + this.width > 0;
  },

  /**
   * Make a copy of the collision boxes, since these will change based on
   * obstacle type and size.
   */
  cloneCollisionBoxes: function cloneCollisionBoxes() {
    var collisionBoxes = this.typeConfig.collisionBoxes;

    for (var i = collisionBoxes.length - 1; i >= 0; i--) {
      this.collisionBoxes[i] = new CollisionBox(collisionBoxes[i].x, collisionBoxes[i].y, collisionBoxes[i].width, collisionBoxes[i].height);
    }
  }
}; //******************************************************************************

/**
 * T-rex game character.
 * @param {HTMLCanvasElement} canvas
 * @param {Object} spritePos Positioning within image sprite.
 * @constructor
 */

function Trex(canvas, spritePos) {
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  canvas.getContext('2d');
  this.spritePos = spritePos;
  this.xPos = 0;
  this.yPos = 0;
  this.xInitialPos = 0; // Position when on the ground.

  this.groundYPos = 0;
  this.currentFrame = 0;
  this.currentAnimFrames = [];
  this.blinkDelay = 0;
  this.blinkCount = 0;
  this.animStartTime = 0;
  this.timer = 0;
  this.msPerFrame = 1000 / FPS;
  this.config = Object.assign(Trex.config, Trex.normalJumpConfig); // Current status.

  this.status = Trex.status.WAITING;
  this.jumping = false;
  this.ducking = false;
  this.jumpVelocity = 0;
  this.reachedMinHeight = false;
  this.speedDrop = false;
  this.jumpCount = 0;
  this.jumpspotX = 0;
  this.altGameModeEnabled = false;
  this.flashing = false;
  this.init();
}
/**
 * T-rex player config.
 */


Trex.config = {
  DROP_VELOCITY: -5,
  FLASH_OFF: 175,
  FLASH_ON: 100,
  HEIGHT: 47,
  HEIGHT_DUCK: 25,
  INTRO_DURATION: 1500,
  SPEED_DROP_COEFFICIENT: 3,
  SPRITE_WIDTH: 262,
  START_X_POS: 50,
  WIDTH: 44,
  WIDTH_DUCK: 59
};
Trex.slowJumpConfig = {
  GRAVITY: 0.25,
  MAX_JUMP_HEIGHT: 50,
  MIN_JUMP_HEIGHT: 45,
  INITIAL_JUMP_VELOCITY: -20
};
Trex.normalJumpConfig = {
  GRAVITY: 0.6,
  MAX_JUMP_HEIGHT: 30,
  MIN_JUMP_HEIGHT: 30,
  INITIAL_JUMP_VELOCITY: -10
};
/**
 * Used in collision detection.
 * @enum {Array<CollisionBox>}
 */

Trex.collisionBoxes = {
  DUCKING: [new CollisionBox(1, 18, 55, 25)],
  RUNNING: [new CollisionBox(22, 0, 17, 16), new CollisionBox(1, 18, 30, 9), new CollisionBox(10, 35, 14, 8), new CollisionBox(1, 24, 29, 5), new CollisionBox(5, 30, 21, 4), new CollisionBox(9, 34, 15, 4)]
};
/**
 * Animation states.
 * @enum {string}
 */

Trex.status = {
  CRASHED: 'CRASHED',
  DUCKING: 'DUCKING',
  JUMPING: 'JUMPING',
  RUNNING: 'RUNNING',
  WAITING: 'WAITING'
};
/**
 * Blinking coefficient.
 * @const
 */

Trex.BLINK_TIMING = 7000;
/**
 * Animation config for different states.
 * @enum {Object}
 */

Trex.animFrames = {
  WAITING: {
    frames: [44, 0],
    msPerFrame: 1000 / 3
  },
  RUNNING: {
    frames: [88, 132],
    msPerFrame: 1000 / 12
  },
  CRASHED: {
    frames: [220],
    msPerFrame: 1000 / 60
  },
  JUMPING: {
    frames: [0],
    msPerFrame: 1000 / 60
  },
  DUCKING: {
    frames: [264, 323],
    msPerFrame: 1000 / 8
  }
};
Trex.prototype = {
  /**
   * T-rex player initaliser.
   * Sets the t-rex to blink at random intervals.
   */
  init: function init() {
    this.groundYPos = Runner.defaultDimensions.HEIGHT - this.config.HEIGHT - Runner.config.BOTTOM_PAD;
    this.yPos = this.groundYPos;
    this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;
    this.draw(0, 0);
    this.update(0, Trex.status.WAITING);
  },

  /**
   * Assign the appropriate jump parameters based on the game speed.
   */
  enableSlowConfig: function enableSlowConfig() {
    var jumpConfig = Runner.slowDown ? Trex.slowJumpConfig : Trex.normalJumpConfig;
    Trex.config = Object.assign(Trex.config, jumpConfig);
    this.adjustAltGameConfigForSlowSpeed();
  },

  /**
   * Enables the alternative game. Redefines the dino config.
   * @param {Object} spritePos New positioning within image sprite.
   */
  enableAltGameMode: function enableAltGameMode(spritePos) {
    this.altGameModeEnabled = true;
    this.spritePos = spritePos;
    var spriteDefinition = Runner.spriteDefinition['TREX']; // Update animation frames.

    Trex.animFrames.RUNNING.frames = [spriteDefinition.RUNNING_1.x, spriteDefinition.RUNNING_2.x];
    Trex.animFrames.CRASHED.frames = [spriteDefinition.CRASHED.x];

    if (_typeof(spriteDefinition.JUMPING.x) == 'object') {
      Trex.animFrames.JUMPING.frames = spriteDefinition.JUMPING.x;
    } else {
      Trex.animFrames.JUMPING.frames = [spriteDefinition.JUMPING.x];
    }

    Trex.animFrames.DUCKING.frames = [spriteDefinition.RUNNING_1.x, spriteDefinition.RUNNING_2.x]; // Update Trex config

    Trex.config.GRAVITY = spriteDefinition.GRAVITY || Trex.config.GRAVITY;
    Trex.config.HEIGHT = spriteDefinition.RUNNING_1.h, Trex.config.INITIAL_JUMP_VELOCITY = spriteDefinition.INITIAL_JUMP_VELOCITY;
    Trex.config.MAX_JUMP_HEIGHT = spriteDefinition.MAX_JUMP_HEIGHT;
    Trex.config.MIN_JUMP_HEIGHT = spriteDefinition.MIN_JUMP_HEIGHT;
    Trex.config.WIDTH = spriteDefinition.RUNNING_1.w;
    Trex.config.WIDTH_JUMP = spriteDefinition.JUMPING.w;
    Trex.config.INVERT_JUMP = spriteDefinition.INVERT_JUMP;
    this.adjustAltGameConfigForSlowSpeed(spriteDefinition.GRAVITY);
    this.config = Trex.config; // Adjust bottom horizon placement.

    this.groundYPos = Runner.defaultDimensions.HEIGHT - this.config.HEIGHT - Runner.spriteDefinition['BOTTOM_PAD'];
    this.yPos = this.groundYPos;
    this.reset();
  },

  /**
   * Slow speeds adjustments for the alt game modes.
   * @param {number=} opt_gravityValue
   */
  adjustAltGameConfigForSlowSpeed: function adjustAltGameConfigForSlowSpeed(opt_gravityValue) {
    if (Runner.slowDown) {
      if (opt_gravityValue) {
        Trex.config.GRAVITY = opt_gravityValue / 1.5;
      }

      Trex.config.MIN_JUMP_HEIGHT *= 1.5;
      Trex.config.MAX_JUMP_HEIGHT *= 1.5;
      Trex.config.INITIAL_JUMP_VELOCITY = Trex.config.INITIAL_JUMP_VELOCITY * 1.5;
    }
  },

  /**
   * Setter whether dino is flashing.
   * @param {boolean} status
   */
  setFlashing: function setFlashing(status) {
    this.flashing = status;
  },

  /**
   * Setter for the jump velocity.
   * The approriate drop velocity is also set.
   * @param {number} setting
   */
  setJumpVelocity: function setJumpVelocity(setting) {
    this.config.INITIAL_JUMP_VELOCITY = -setting;
    this.config.DROP_VELOCITY = -setting / 2;
  },

  /**
   * Set the animation status.
   * @param {!number} deltaTime
   * @param {Trex.status=} opt_status Optional status to switch to.
   */
  update: function update(deltaTime, opt_status) {
    this.timer += deltaTime; // Update the status.

    if (opt_status) {
      this.status = opt_status;
      this.currentFrame = 0;
      this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;
      this.currentAnimFrames = Trex.animFrames[opt_status].frames;

      if (opt_status === Trex.status.WAITING) {
        this.animStartTime = getTimeStamp();
        this.setBlinkDelay();
      }
    } // Game intro animation, T-rex moves in from the left.


    if (this.playingIntro && this.xPos < this.config.START_X_POS) {
      this.xPos += Math.round(this.config.START_X_POS / this.config.INTRO_DURATION * deltaTime);
      this.xInitialPos = this.xPos;
    }

    if (this.status === Trex.status.WAITING) {
      this.blink(getTimeStamp());
    } else {
      this.draw(this.currentAnimFrames[this.currentFrame], 0);
    } // Update the frame position.


    if (!this.flashing && this.timer >= this.msPerFrame) {
      this.currentFrame = this.currentFrame == this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1;
      this.timer = 0;
    }

    if (!this.altGameModeEnabled) {
      // Speed drop becomes duck if the down key is still being pressed.
      if (this.speedDrop && this.yPos === this.groundYPos) {
        this.speedDrop = false;
        this.setDuck(true);
      }
    }
  },

  /**
   * Draw the t-rex to a particular position.
   * @param {number} x
   * @param {number} y
   */
  draw: function draw(x, y) {
    var sourceX = x;
    var sourceY = y;
    var sourceWidth = this.ducking && this.status !== Trex.status.CRASHED ? this.config.WIDTH_DUCK : this.config.WIDTH;
    var sourceHeight = this.config.HEIGHT;
    var outputHeight = sourceHeight;
    var jumpOffset = Runner.spriteDefinition.TREX.JUMPING.xOffset; // Width of sprite changes on jump.

    if (this.altGameModeEnabled && this.jumping && this.status !== Trex.status.CRASHED) {
      sourceWidth = this.config.WIDTH_JUMP;
    }

    if (IS_HIDPI) {
      sourceX *= 2;
      sourceY *= 2;
      sourceWidth *= 2;
      sourceHeight *= 2;
      jumpOffset *= 2;
    } // Adjustments for sprite sheet position.


    sourceX += this.spritePos.x;
    sourceY += this.spritePos.y; // Flashing.

    if (this.flashing) {
      if (this.timer < this.config.FLASH_ON) {
        this.canvasCtx.globalAlpha = 0.5;
      } else if (this.timer > this.config.FLASH_OFF) {
        this.timer = 0;
      }
    } // Ducking.


    if (!this.altGameModeEnabled && this.ducking && this.status !== Trex.status.CRASHED) {
      this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH_DUCK, outputHeight);
    } else if (this.altGameModeEnabled && this.jumping && this.status !== Trex.status.CRASHED) {
      // Jumping with adjustments.
      this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos - jumpOffset, this.yPos, this.config.WIDTH_JUMP, outputHeight);
    } else {
      // Crashed whilst ducking. Trex is standing up so needs adjustment.
      if (this.ducking && this.status === Trex.status.CRASHED) {
        this.xPos++;
      } // Standing / running


      this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH, outputHeight);
    }

    this.canvasCtx.globalAlpha = 1;
  },

  /**
   * Sets a random time for the blink to happen.
   */
  setBlinkDelay: function setBlinkDelay() {
    this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING);
  },

  /**
   * Make t-rex blink at random intervals.
   * @param {number} time Current time in milliseconds.
   */
  blink: function blink(time) {
    var deltaTime = time - this.animStartTime;

    if (deltaTime >= this.blinkDelay) {
      this.draw(this.currentAnimFrames[this.currentFrame], 0);

      if (this.currentFrame === 1) {
        // Set new random delay to blink.
        this.setBlinkDelay();
        this.animStartTime = time;
        this.blinkCount++;
      }
    }
  },

  /**
   * Initialise a jump.
   * @param {number} speed
   */
  startJump: function startJump(speed) {
    if (!this.jumping) {
      this.update(0, Trex.status.JUMPING); // Tweak the jump velocity based on the speed.

      this.jumpVelocity = this.config.INITIAL_JUMP_VELOCITY - speed / 10;
      this.jumping = true;
      this.reachedMinHeight = false;
      this.speedDrop = false;

      if (this.config.INVERT_JUMP) {
        this.minJumpHeight = this.groundYPos + this.config.MIN_JUMP_HEIGHT;
      }
    }
  },

  /**
   * Jump is complete, falling down.
   */
  endJump: function endJump() {
    if (this.reachedMinHeight && this.jumpVelocity < this.config.DROP_VELOCITY) {
      this.jumpVelocity = this.config.DROP_VELOCITY;
    }
  },

  /**
   * Update frame for a jump.
   * @param {number} deltaTime
   */
  updateJump: function updateJump(deltaTime) {
    var msPerFrame = Trex.animFrames[this.status].msPerFrame;
    var framesElapsed = deltaTime / msPerFrame; // Speed drop makes Trex fall faster.

    if (this.speedDrop) {
      this.yPos += Math.round(this.jumpVelocity * this.config.SPEED_DROP_COEFFICIENT * framesElapsed);
    } else if (this.config.INVERT_JUMP) {
      this.yPos -= Math.round(this.jumpVelocity * framesElapsed);
    } else {
      this.yPos += Math.round(this.jumpVelocity * framesElapsed);
    }

    this.jumpVelocity += this.config.GRAVITY * framesElapsed; // Minimum height has been reached.

    if (this.config.INVERT_JUMP && this.yPos > this.minJumpHeight || !this.config.INVERT_JUMP && this.yPos < this.minJumpHeight || this.speedDrop) {
      this.reachedMinHeight = true;
    } // Reached max height.


    if (this.config.INVERT_JUMP && this.yPos > -this.config.MAX_JUMP_HEIGHT || !this.config.INVERT_JUMP && this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {
      this.endJump();
    } // Back down at ground level. Jump completed.


    if ((this.config.INVERT_JUMP && this.yPos) < this.groundYPos || (!this.config.INVERT_JUMP && this.yPos) > this.groundYPos) {
      this.reset();
      this.jumpCount++;

      if (Runner.audioCues) {
        Runner.generatedSoundFx.loopFootSteps();
      }
    }
  },

  /**
   * Set the speed drop. Immediately cancels the current jump.
   */
  setSpeedDrop: function setSpeedDrop() {
    this.speedDrop = true;
    this.jumpVelocity = 1;
  },

  /**
   * @param {boolean} isDucking
   */
  setDuck: function setDuck(isDucking) {
    if (isDucking && this.status !== Trex.status.DUCKING) {
      this.update(0, Trex.status.DUCKING);
      this.ducking = true;
    } else if (this.status === Trex.status.DUCKING) {
      this.update(0, Trex.status.RUNNING);
      this.ducking = false;
    }
  },

  /**
   * Reset the t-rex to running at start of game.
   */
  reset: function reset() {
    this.xPos = this.xInitialPos;
    this.yPos = this.groundYPos;
    this.jumpVelocity = 0;
    this.jumping = false;
    this.ducking = false;
    this.update(0, Trex.status.RUNNING);
    this.midair = false;
    this.speedDrop = false;
    this.jumpCount = 0;
  }
}; //******************************************************************************

/**
 * Handles displaying the distance meter.
 * @param {!HTMLCanvasElement} canvas
 * @param {Object} spritePos Image position in sprite.
 * @param {number} canvasWidth
 * @constructor
 */

function DistanceMeter(canvas, spritePos, canvasWidth) {
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  canvas.getContext('2d');
  this.image = Runner.imageSprite;
  this.spritePos = spritePos;
  this.x = 0;
  this.y = 5;
  this.currentDistance = 0;
  this.maxScore = 0;
  this.highScore = '0';
  this.container = null;
  this.digits = [];
  this.achievement = false;
  this.defaultString = '';
  this.flashTimer = 0;
  this.flashIterations = 0;
  this.invertTrigger = false;
  this.flashingRafId = null;
  this.highScoreBounds = {};
  this.highScoreFlashing = false;
  this.config = DistanceMeter.config;
  this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS;
  this.canvasWidth = canvasWidth;
  this.init(canvasWidth);
}
/**
 * @enum {number}
 */


DistanceMeter.dimensions = {
  WIDTH: 10,
  HEIGHT: 13,
  DEST_WIDTH: 11
};
/**
 * Y positioning of the digits in the sprite sheet.
 * X position is always 0.
 * @type {Array<number>}
 */

DistanceMeter.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120];
/**
 * Distance meter config.
 * @enum {number}
 */

DistanceMeter.config = {
  // Number of digits.
  MAX_DISTANCE_UNITS: 5,
  // Distance that causes achievement animation.
  ACHIEVEMENT_DISTANCE: 100,
  // Used for conversion from pixel distance to a scaled unit.
  COEFFICIENT: 0.025,
  // Flash duration in milliseconds.
  FLASH_DURATION: 1000 / 4,
  // Flash iterations for achievement animation.
  FLASH_ITERATIONS: 3,
  // Padding around the high score hit area.
  HIGH_SCORE_HIT_AREA_PADDING: 4
};
DistanceMeter.prototype = {
  /**
   * Initialise the distance meter to '00000'.
   * @param {number} width Canvas width in px.
   */
  init: function init(width) {
    var maxDistanceStr = '';
    this.calcXPos(width);
    this.maxScore = this.maxScoreUnits;

    for (var i = 0; i < this.maxScoreUnits; i++) {
      this.draw(i, 0);
      this.defaultString += '0';
      maxDistanceStr += '9';
    }

    this.maxScore = parseInt(maxDistanceStr, 10);
  },

  /**
   * Calculate the xPos in the canvas.
   * @param {number} canvasWidth
   */
  calcXPos: function calcXPos(canvasWidth) {
    this.x = canvasWidth - DistanceMeter.dimensions.DEST_WIDTH * (this.maxScoreUnits + 1);
  },

  /**
   * Draw a digit to canvas.
   * @param {number} digitPos Position of the digit.
   * @param {number} value Digit value 0-9.
   * @param {boolean=} opt_highScore Whether drawing the high score.
   */
  draw: function draw(digitPos, value, opt_highScore) {
    var sourceWidth = DistanceMeter.dimensions.WIDTH;
    var sourceHeight = DistanceMeter.dimensions.HEIGHT;
    var sourceX = DistanceMeter.dimensions.WIDTH * value;
    var sourceY = 0;
    var targetX = digitPos * DistanceMeter.dimensions.DEST_WIDTH;
    var targetY = this.y;
    var targetWidth = DistanceMeter.dimensions.WIDTH;
    var targetHeight = DistanceMeter.dimensions.HEIGHT; // For high DPI we 2x source values.

    if (IS_HIDPI) {
      sourceWidth *= 2;
      sourceHeight *= 2;
      sourceX *= 2;
    }

    sourceX += this.spritePos.x;
    sourceY += this.spritePos.y;
    this.canvasCtx.save();

    if (IS_RTL) {
      if (opt_highScore) {
        this.canvasCtx.translate(this.canvasWidth - DistanceMeter.dimensions.WIDTH * (this.maxScoreUnits + 3), this.y);
      } else {
        this.canvasCtx.translate(this.canvasWidth - DistanceMeter.dimensions.WIDTH, this.y);
      }

      this.canvasCtx.scale(-1, 1);
    } else {
      var highScoreX = this.x - this.maxScoreUnits * 2 * DistanceMeter.dimensions.WIDTH;

      if (opt_highScore) {
        this.canvasCtx.translate(highScoreX, this.y);
      } else {
        this.canvasCtx.translate(this.x, this.y);
      }
    }

    this.canvasCtx.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, targetX, targetY, targetWidth, targetHeight);
    this.canvasCtx.restore();
  },

  /**
   * Covert pixel distance to a 'real' distance.
   * @param {number} distance Pixel distance ran.
   * @return {number} The 'real' distance ran.
   */
  getActualDistance: function getActualDistance(distance) {
    return distance ? Math.round(distance * this.config.COEFFICIENT) : 0;
  },

  /**
   * Update the distance meter.
   * @param {number} distance
   * @param {number} deltaTime
   * @return {boolean} Whether the acheivement sound fx should be played.
   */
  update: function update(deltaTime, distance) {
    var paint = true;
    var playSound = false;

    if (!this.achievement) {
      distance = this.getActualDistance(distance); // Score has gone beyond the initial digit count.

      if (distance > this.maxScore && this.maxScoreUnits == this.config.MAX_DISTANCE_UNITS) {
        this.maxScoreUnits++;
        this.maxScore = parseInt(this.maxScore + '9', 10);
      } else {
        this.distance = 0;
      }

      if (distance > 0) {
        // Achievement unlocked.
        if (distance % this.config.ACHIEVEMENT_DISTANCE === 0) {
          // Flash score and play sound.
          this.achievement = true;
          this.flashTimer = 0;
          playSound = true;
        } // Create a string representation of the distance with leading 0.


        var distanceStr = (this.defaultString + distance).substr(-this.maxScoreUnits);
        this.digits = distanceStr.split('');
      } else {
        this.digits = this.defaultString.split('');
      }
    } else {
      // Control flashing of the score on reaching acheivement.
      if (this.flashIterations <= this.config.FLASH_ITERATIONS) {
        this.flashTimer += deltaTime;

        if (this.flashTimer < this.config.FLASH_DURATION) {
          paint = false;
        } else if (this.flashTimer > this.config.FLASH_DURATION * 2) {
          this.flashTimer = 0;
          this.flashIterations++;
        }
      } else {
        this.achievement = false;
        this.flashIterations = 0;
        this.flashTimer = 0;
      }
    } // Draw the digits if not flashing.


    if (paint) {
      for (var i = this.digits.length - 1; i >= 0; i--) {
        this.draw(i, parseInt(this.digits[i], 10));
      }
    }

    this.drawHighScore();
    return playSound;
  },

  /**
   * Draw the high score.
   */
  drawHighScore: function drawHighScore() {
    if (parseInt(this.highScore, 10) > 0) {
      this.canvasCtx.save();
      this.canvasCtx.globalAlpha = .8;

      for (var i = this.highScore.length - 1; i >= 0; i--) {
        this.draw(i, parseInt(this.highScore[i], 10), true);
      }

      this.canvasCtx.restore();
    }
  },

  /**
   * Set the highscore as a array string.
   * Position of char in the sprite: H - 10, I - 11.
   * @param {number} distance Distance ran in pixels.
   */
  setHighScore: function setHighScore(distance) {
    distance = this.getActualDistance(distance);
    var highScoreStr = (this.defaultString + distance).substr(-this.maxScoreUnits);
    this.highScore = ['10', '11', ''].concat(highScoreStr.split(''));
  },

  /**
   * Whether a clicked is in the high score area.
   * @param {Event} e Event object.
   * @return {boolean} Whether the click was in the high score bounds.
   */
  hasClickedOnHighScore: function hasClickedOnHighScore(e) {
    var x = 0;
    var y = 0;

    if (e.touches) {
      // Bounds for touch differ from pointer.
      var canvasBounds = this.canvas.getBoundingClientRect();
      x = e.touches[0].clientX - canvasBounds.left;
      y = e.touches[0].clientY - canvasBounds.top;
    } else {
      x = e.offsetX;
      y = e.offsetY;
    }

    this.highScoreBounds = this.getHighScoreBounds();
    return x >= this.highScoreBounds.x && x <= this.highScoreBounds.x + this.highScoreBounds.width && y >= this.highScoreBounds.y && y <= this.highScoreBounds.y + this.highScoreBounds.height;
  },

  /**
   * Get the bounding box for the high score.
   * @return {Object} Object with x, y, width and height properties.
   */
  getHighScoreBounds: function getHighScoreBounds() {
    return {
      x: this.x - this.maxScoreUnits * 2 * DistanceMeter.dimensions.WIDTH - DistanceMeter.config.HIGH_SCORE_HIT_AREA_PADDING,
      y: this.y,
      width: DistanceMeter.dimensions.WIDTH * (this.highScore.length + 1) + DistanceMeter.config.HIGH_SCORE_HIT_AREA_PADDING,
      height: DistanceMeter.dimensions.HEIGHT + DistanceMeter.config.HIGH_SCORE_HIT_AREA_PADDING * 2
    };
  },

  /**
   * Animate flashing the high score to indicate ready for resetting.
   * The flashing stops following this.config.FLASH_ITERATIONS x 2 flashes.
   */
  flashHighScore: function flashHighScore() {
    var now = getTimeStamp();
    var deltaTime = now - (this.frameTimeStamp || now);
    var paint = true;
    this.frameTimeStamp = now; // Reached the max number of flashes.

    if (this.flashIterations > this.config.FLASH_ITERATIONS * 2) {
      this.cancelHighScoreFlashing();
      return;
    }

    this.flashTimer += deltaTime;

    if (this.flashTimer < this.config.FLASH_DURATION) {
      paint = false;
    } else if (this.flashTimer > this.config.FLASH_DURATION * 2) {
      this.flashTimer = 0;
      this.flashIterations++;
    }

    if (paint) {
      this.drawHighScore();
    } else {
      this.clearHighScoreBounds();
    } // Frame update.


    this.flashingRafId = requestAnimationFrame(this.flashHighScore.bind(this));
  },

  /**
   * Draw empty rectangle over high score.
   */
  clearHighScoreBounds: function clearHighScoreBounds() {
    this.canvasCtx.save();
    this.canvasCtx.fillStyle = '#fff';
    this.canvasCtx.rect(this.highScoreBounds.x, this.highScoreBounds.y, this.highScoreBounds.width, this.highScoreBounds.height);
    this.canvasCtx.fill();
    this.canvasCtx.restore();
  },

  /**
   * Starts the flashing of the high score.
   */
  startHighScoreFlashing: function startHighScoreFlashing() {
    this.highScoreFlashing = true;
    this.flashHighScore();
  },

  /**
   * Whether high score is flashing.
   * @return {boolean}
   */
  isHighScoreFlashing: function isHighScoreFlashing() {
    return this.highScoreFlashing;
  },

  /**
   * Stop flashing the high score.
   */
  cancelHighScoreFlashing: function cancelHighScoreFlashing() {
    if (this.flashingRafId) {
      cancelAnimationFrame(this.flashingRafId);
    }

    this.flashIterations = 0;
    this.flashTimer = 0;
    this.highScoreFlashing = false;
    this.clearHighScoreBounds();
    this.drawHighScore();
  },

  /**
   * Clear the high score.
   */
  resetHighScore: function resetHighScore() {
    this.setHighScore(0);
    this.cancelHighScoreFlashing();
  },

  /**
   * Reset the distance meter back to '00000'.
   */
  reset: function reset() {
    this.update(0, 0);
    this.achievement = false;
  }
}; //******************************************************************************

/**
 * Cloud background item.
 * Similar to an obstacle object but without collision boxes.
 * @param {HTMLCanvasElement} canvas Canvas element.
 * @param {Object} spritePos Position of image in sprite.
 * @param {number} containerWidth
 * @constructor
 */

function Cloud(canvas, spritePos, containerWidth) {
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  this.canvas.getContext('2d');
  this.spritePos = spritePos;
  this.containerWidth = containerWidth;
  this.xPos = containerWidth;
  this.yPos = 0;
  this.remove = false;
  this.gap = getRandomNum(Cloud.config.MIN_CLOUD_GAP, Cloud.config.MAX_CLOUD_GAP);
  this.init();
}
/**
 * Cloud object config.
 * @enum {number}
 */


Cloud.config = {
  HEIGHT: 14,
  MAX_CLOUD_GAP: 400,
  MAX_SKY_LEVEL: 30,
  MIN_CLOUD_GAP: 100,
  MIN_SKY_LEVEL: 71,
  WIDTH: 46
};
Cloud.prototype = {
  /**
   * Initialise the cloud. Sets the Cloud height.
   */
  init: function init() {
    this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL, Cloud.config.MIN_SKY_LEVEL);
    this.draw();
  },

  /**
   * Draw the cloud.
   */
  draw: function draw() {
    this.canvasCtx.save();
    var sourceWidth = Cloud.config.WIDTH;
    var sourceHeight = Cloud.config.HEIGHT;
    var outputWidth = sourceWidth;
    var outputHeight = sourceHeight;

    if (IS_HIDPI) {
      sourceWidth = sourceWidth * 2;
      sourceHeight = sourceHeight * 2;
    }

    this.canvasCtx.drawImage(Runner.imageSprite, this.spritePos.x, this.spritePos.y, sourceWidth, sourceHeight, this.xPos, this.yPos, outputWidth, outputHeight);
    this.canvasCtx.restore();
  },

  /**
   * Update the cloud position.
   * @param {number} speed
   */
  update: function update(speed) {
    if (!this.remove) {
      this.xPos -= Math.ceil(speed);
      this.draw(); // Mark as removeable if no longer in the canvas.

      if (!this.isVisible()) {
        this.remove = true;
      }
    }
  },

  /**
   * Check if the cloud is visible on the stage.
   * @return {boolean}
   */
  isVisible: function isVisible() {
    return this.xPos + Cloud.config.WIDTH > 0;
  }
};
/**
 * Background item.
 * Similar to cloud, without random y position.
 * @param {HTMLCanvasElement} canvas Canvas element.
 * @param {Object} spritePos Position of image in sprite.
 * @param {number} containerWidth
 * @param {string} type Element type.
 * @constructor
 */

function BackgroundEl(canvas, spritePos, containerWidth, type) {
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  this.canvas.getContext('2d');
  this.spritePos = spritePos;
  this.containerWidth = containerWidth;
  this.xPos = containerWidth;
  this.yPos = 0;
  this.remove = false;
  this.type = type;
  this.gap = getRandomNum(BackgroundEl.config.MIN_GAP, BackgroundEl.config.MAX_GAP);
  this.animTimer = 0;
  this.switchFrames = false;
  this.spriteConfig = {};
  this.init();
}
/**
 * Background element object config.
 * Real values assigned when game type changes.
 * @enum {number}
 */


BackgroundEl.config = {
  MAX_BG_ELS: 0,
  MAX_GAP: 0,
  MIN_GAP: 0,
  POS: 0,
  SPEED: 0,
  Y_POS: 0,
  MS_PER_FRAME: 0 // only needed when BACKGROUND_EL.FIXED is true

};
BackgroundEl.prototype = {
  /**
   * Initialise the element setting the y position.
   */
  init: function init() {
    this.spriteConfig = Runner.spriteDefinition.BACKGROUND_EL[this.type];

    if (this.spriteConfig.FIXED) {
      this.xPos = this.spriteConfig.FIXED_X_POS;
    }

    this.yPos = BackgroundEl.config.Y_POS - this.spriteConfig.HEIGHT + this.spriteConfig.OFFSET;
    this.draw();
  },

  /**
   * Draw the element.
   */
  draw: function draw() {
    this.canvasCtx.save();
    var sourceWidth = this.spriteConfig.WIDTH;
    var sourceHeight = this.spriteConfig.HEIGHT;
    var sourceX = this.spriteConfig.X_POS;
    var outputWidth = sourceWidth;
    var outputHeight = sourceHeight;

    if (IS_HIDPI) {
      sourceWidth *= 2;
      sourceHeight *= 2;
      sourceX *= 2;
    }

    this.canvasCtx.drawImage(Runner.imageSprite, sourceX, this.spritePos.y, sourceWidth, sourceHeight, this.xPos, this.yPos, outputWidth, outputHeight);
    this.canvasCtx.restore();
  },

  /**
   * Update the background element position.
   * @param {number} speed
   */
  update: function update(speed) {
    if (!this.remove) {
      if (this.spriteConfig.FIXED) {
        this.animTimer += speed;

        if (this.animTimer > BackgroundEl.config.MS_PER_FRAME) {
          this.animTimer = 0;
          this.switchFrames = !this.switchFrames;
        }

        if (this.spriteConfig.FIXED_Y_POS_1 && this.spriteConfig.FIXED_Y_POS_2) {
          this.yPos = this.switchFrames ? this.spriteConfig.FIXED_Y_POS_1 : this.spriteConfig.FIXED_Y_POS_2;
        }
      } else {
        // Fixed speed, regardless of actual game speed.
        this.xPos -= BackgroundEl.config.SPEED;
      }

      this.draw(); // Mark as removable if no longer in the canvas.

      if (!this.isVisible()) {
        this.remove = true;
      }
    }
  },

  /**
   * Check if the element is visible on the stage.
   * @return {boolean}
   */
  isVisible: function isVisible() {
    return this.xPos + this.spriteConfig.WIDTH > 0;
  }
}; //******************************************************************************

/**
 * Nightmode shows a moon and stars on the horizon.
 * @param {HTMLCanvasElement} canvas
 * @param {number} spritePos
 * @param {number} containerWidth
 * @constructor
 */

function NightMode(canvas, spritePos, containerWidth) {
  this.spritePos = spritePos;
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  canvas.getContext('2d');
  this.xPos = containerWidth - 50;
  this.yPos = 30;
  this.currentPhase = 0;
  this.opacity = 0;
  this.containerWidth = containerWidth;
  this.stars = [];
  this.drawStars = false;
  this.placeStars();
}
/**
 * @enum {number}
 */


NightMode.config = {
  FADE_SPEED: 0.035,
  HEIGHT: 40,
  MOON_SPEED: 0.25,
  NUM_STARS: 2,
  STAR_SIZE: 9,
  STAR_SPEED: 0.3,
  STAR_MAX_Y: 70,
  WIDTH: 20
};
NightMode.phases = [140, 120, 100, 60, 40, 20, 0];
NightMode.prototype = {
  /**
   * Update moving moon, changing phases.
   * @param {boolean} activated Whether night mode is activated.
   */
  update: function update(activated) {
    // Moon phase.
    if (activated && this.opacity === 0) {
      this.currentPhase++;

      if (this.currentPhase >= NightMode.phases.length) {
        this.currentPhase = 0;
      }
    } // Fade in / out.


    if (activated && (this.opacity < 1 || this.opacity === 0)) {
      this.opacity += NightMode.config.FADE_SPEED;
    } else if (this.opacity > 0) {
      this.opacity -= NightMode.config.FADE_SPEED;
    } // Set moon positioning.


    if (this.opacity > 0) {
      this.xPos = this.updateXPos(this.xPos, NightMode.config.MOON_SPEED); // Update stars.

      if (this.drawStars) {
        for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
          this.stars[i].x = this.updateXPos(this.stars[i].x, NightMode.config.STAR_SPEED);
        }
      }

      this.draw();
    } else {
      this.opacity = 0;
      this.placeStars();
    }

    this.drawStars = true;
  },
  updateXPos: function updateXPos(currentPos, speed) {
    if (currentPos < -NightMode.config.WIDTH) {
      currentPos = this.containerWidth;
    } else {
      currentPos -= speed;
    }

    return currentPos;
  },
  draw: function draw() {
    var moonSourceWidth = this.currentPhase === 3 ? NightMode.config.WIDTH * 2 : NightMode.config.WIDTH;
    var moonSourceHeight = NightMode.config.HEIGHT;
    var moonSourceX = this.spritePos.x + NightMode.phases[this.currentPhase];
    var moonOutputWidth = moonSourceWidth;
    var starSize = NightMode.config.STAR_SIZE;
    var starSourceX = _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.LDPI.STAR.x;

    if (IS_HIDPI) {
      moonSourceWidth *= 2;
      moonSourceHeight *= 2;
      moonSourceX = this.spritePos.x + NightMode.phases[this.currentPhase] * 2;
      starSize *= 2;
      starSourceX = _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.HDPI.STAR.x;
    }

    this.canvasCtx.save();
    this.canvasCtx.globalAlpha = this.opacity; // Stars.

    if (this.drawStars) {
      for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
        this.canvasCtx.drawImage(Runner.origImageSprite, starSourceX, this.stars[i].sourceY, starSize, starSize, Math.round(this.stars[i].x), this.stars[i].y, NightMode.config.STAR_SIZE, NightMode.config.STAR_SIZE);
      }
    } // Moon.


    this.canvasCtx.drawImage(Runner.origImageSprite, moonSourceX, this.spritePos.y, moonSourceWidth, moonSourceHeight, Math.round(this.xPos), this.yPos, moonOutputWidth, NightMode.config.HEIGHT);
    this.canvasCtx.globalAlpha = 1;
    this.canvasCtx.restore();
  },
  // Do star placement.
  placeStars: function placeStars() {
    var segmentSize = Math.round(this.containerWidth / NightMode.config.NUM_STARS);

    for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
      this.stars[i] = {};
      this.stars[i].x = getRandomNum(segmentSize * i, segmentSize * (i + 1));
      this.stars[i].y = getRandomNum(0, NightMode.config.STAR_MAX_Y);

      if (IS_HIDPI) {
        this.stars[i].sourceY = _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.HDPI.STAR.y + NightMode.config.STAR_SIZE * 2 * i;
      } else {
        this.stars[i].sourceY = _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.LDPI.STAR.y + NightMode.config.STAR_SIZE * i;
      }
    }
  },
  reset: function reset() {
    this.currentPhase = 0;
    this.opacity = 0;
    this.update(false);
  }
}; //******************************************************************************

/**
 * Horizon Line.
 * Consists of two connecting lines. Randomly assigns a flat / bumpy horizon.
 * @param {HTMLCanvasElement} canvas
 * @param {Object} lineConfig Configuration object.
 * @constructor
 */

function HorizonLine(canvas, lineConfig) {
  var sourceX = lineConfig.SOURCE_X;
  var sourceY = lineConfig.SOURCE_Y;

  if (IS_HIDPI) {
    sourceX *= 2;
    sourceY *= 2;
  }

  this.spritePos = {
    x: sourceX,
    y: sourceY
  };
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  canvas.getContext('2d');
  this.sourceDimensions = {};
  this.dimensions = lineConfig;
  this.sourceXPos = [this.spritePos.x, this.spritePos.x + this.dimensions.WIDTH];
  this.xPos = [];
  this.yPos = 0;
  this.bumpThreshold = 0.5;
  this.setSourceDimensions(lineConfig);
  this.draw();
}
/**
 * Horizon line dimensions.
 * @enum {number}
 */


HorizonLine.dimensions = {
  WIDTH: 600,
  HEIGHT: 12,
  YPOS: 127
};
HorizonLine.prototype = {
  /**
   * Set the source dimensions of the horizon line.
   */
  setSourceDimensions: function setSourceDimensions(newDimensions) {
    for (var dimension in newDimensions) {
      if (dimension !== 'SOURCE_X' && dimension !== 'SOURCE_Y') {
        if (IS_HIDPI) {
          if (dimension !== 'YPOS') {
            this.sourceDimensions[dimension] = newDimensions[dimension] * 2;
          }
        } else {
          this.sourceDimensions[dimension] = newDimensions[dimension];
        }

        this.dimensions[dimension] = newDimensions[dimension];
      }
    }

    this.xPos = [0, newDimensions.WIDTH];
    this.yPos = newDimensions.YPOS;
  },

  /**
   * Return the crop x position of a type.
   */
  getRandomType: function getRandomType() {
    return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;
  },

  /**
   * Draw the horizon line.
   */
  draw: function draw() {
    this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[0], this.spritePos.y, this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT, this.xPos[0], this.yPos, this.dimensions.WIDTH, this.dimensions.HEIGHT);
    this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[1], this.spritePos.y, this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT, this.xPos[1], this.yPos, this.dimensions.WIDTH, this.dimensions.HEIGHT);
  },

  /**
   * Update the x position of an indivdual piece of the line.
   * @param {number} pos Line position.
   * @param {number} increment
   */
  updateXPos: function updateXPos(pos, increment) {
    var line1 = pos;
    var line2 = pos === 0 ? 1 : 0;
    this.xPos[line1] -= increment;
    this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;

    if (this.xPos[line1] <= -this.dimensions.WIDTH) {
      this.xPos[line1] += this.dimensions.WIDTH * 2;
      this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;
      this.sourceXPos[line1] = this.getRandomType() + this.spritePos.x;
    }
  },

  /**
   * Update the horizon line.
   * @param {number} deltaTime
   * @param {number} speed
   */
  update: function update(deltaTime, speed) {
    var increment = Math.floor(speed * (FPS / 1000) * deltaTime);

    if (this.xPos[0] <= 0) {
      this.updateXPos(0, increment);
    } else {
      this.updateXPos(1, increment);
    }

    this.draw();
  },

  /**
   * Reset horizon to the starting position.
   */
  reset: function reset() {
    this.xPos[0] = 0;
    this.xPos[1] = this.dimensions.WIDTH;
  }
}; //******************************************************************************

/**
 * Horizon background class.
 * @param {HTMLCanvasElement} canvas
 * @param {Object} spritePos Sprite positioning.
 * @param {Object} dimensions Canvas dimensions.
 * @param {number} gapCoefficient
 * @constructor
 */

function Horizon(canvas, spritePos, dimensions, gapCoefficient) {
  this.canvas = canvas;
  this.canvasCtx =
  /** @type {CanvasRenderingContext2D} */
  this.canvas.getContext('2d');
  this.config = Horizon.config;
  this.dimensions = dimensions;
  this.gapCoefficient = gapCoefficient;
  this.obstacles = [];
  this.obstacleHistory = [];
  this.horizonOffsets = [0, 0];
  this.cloudFrequency = this.config.CLOUD_FREQUENCY;
  this.spritePos = spritePos;
  this.nightMode = null;
  this.altGameModeActive = false; // Cloud

  this.clouds = [];
  this.cloudSpeed = this.config.BG_CLOUD_SPEED; // Background elements

  this.backgroundEls = [];
  this.lastEl = null;
  this.backgroundSpeed = this.config.BG_CLOUD_SPEED; // Horizon

  this.horizonLine = null;
  this.horizonLines = [];
  this.init();
}
/**
 * Horizon config.
 * @enum {number}
 */


Horizon.config = {
  BG_CLOUD_SPEED: 0.2,
  BUMPY_THRESHOLD: .3,
  CLOUD_FREQUENCY: .5,
  HORIZON_HEIGHT: 16,
  MAX_CLOUDS: 6
};
Horizon.prototype = {
  /**
   * Initialise the horizon. Just add the line and a cloud. No obstacles.
   */
  init: function init() {
    Obstacle.types = _offlineSpriteDefinitions.Runner_spriteDefinitionByType.original.OBSTACLES; // Obstacle.types[0].yPos = 100;
    //       Obstacle.types[0].xPos = 350;  //@jsikka
    //       console.log(Obstacle.types[0].yPos);
    //       console.log(Obstacle.types[0].xPos);

    this.addCloud(); // Multiple Horizon lines

    for (var i = 0; i < Runner.spriteDefinition.LINES.length; i++) {
      this.horizonLines.push(new HorizonLine(this.canvas, Runner.spriteDefinition.LINES[i]));
    }

    this.nightMode = new NightMode(this.canvas, this.spritePos.MOON, this.dimensions.WIDTH);
  },

  /**
   * Update obstacle definitions based on the speed of the game.
   */
  adjustObstacleSpeed: function adjustObstacleSpeed() {
    for (var i = 0; i < Obstacle.types.length; i++) {
      if (Runner.slowDown) {
        Obstacle.types[i].multipleSpeed = Obstacle.types[i].multipleSpeed / 2;
        Obstacle.types[i].minGap *= 1.5;
        Obstacle.types[i].minSpeed = Obstacle.types[i].minSpeed / 2; // Convert variable y position obstacles to fixed.

        if (_typeof(Obstacle.types[i].yPos) == 'object') {
          Obstacle.types[i].yPos = Obstacle.types[i].yPos[0]; // Obstacle.types[i].xPos = 350;  //@jsikka
          // console.log(Obstacle.types[i].yPos);
          // console.log(Obstacle.types[i].xPos);

          Obstacle.types[i].yPosMobile = Obstacle.types[i].yPos[0];
        }
      }
    }
  },

  /**
   * Update sprites to correspond to change in sprite sheet.
   * @param {number} spritePos
   */
  enableAltGameMode: function enableAltGameMode(spritePos) {
    // Clear existing horizon objects.
    this.clouds = [];
    this.backgroundEls = [];
    this.altGameModeActive = true;
    this.spritePos = spritePos;
    Obstacle.types = Runner.spriteDefinition.OBSTACLES;
    this.adjustObstacleSpeed();
    Obstacle.MAX_GAP_COEFFICIENT = Runner.spriteDefinition.MAX_GAP_COEFFICIENT;
    Obstacle.MAX_OBSTACLE_LENGTH = Runner.spriteDefinition.MAX_OBSTACLE_LENGTH;
    BackgroundEl.config = Runner.spriteDefinition.BACKGROUND_EL_CONFIG;
    this.horizonLines = [];

    for (var i = 0; i < Runner.spriteDefinition.LINES.length; i++) {
      this.horizonLines.push(new HorizonLine(this.canvas, Runner.spriteDefinition.LINES[i]));
    }

    this.reset();
  },

  /**
   * @param {number} deltaTime
   * @param {number} currentSpeed
   * @param {boolean} updateObstacles Used as an override to prevent
   *     the obstacles from being updated / added. This happens in the
   *     ease in section.
   * @param {boolean} showNightMode Night mode activated.
   */
  update: function update(deltaTime, currentSpeed, updateObstacles, showNightMode) {
    // console.log("Here?");
    this.runningTime += deltaTime;

    if (this.altGameModeActive) {
      this.updateBackgroundEls(deltaTime, currentSpeed);
    }

    for (var i = 0; i < this.horizonLines.length; i++) {
      this.horizonLines[i].update(deltaTime, currentSpeed);
    }

    if (!this.altGameModeActive || Runner.spriteDefinition.HAS_CLOUDS) {
      this.nightMode.update(showNightMode);
      this.updateClouds(deltaTime, currentSpeed);
    }

    if (updateObstacles) {
      this.updateObstacles(deltaTime, currentSpeed);
    }
  },

  /**
   * Update background element positions. Also handles creating new elements.
   * @param {number} elSpeed
   * @param {Array<Object>} bgElArray
   * @param {number} maxBgEl
   * @param {Function} bgElAddFunction
   * @param {number} frequency
   */
  updateBackgroundEl: function updateBackgroundEl(elSpeed, bgElArray, maxBgEl, bgElAddFunction, frequency) {
    var numElements = bgElArray.length;

    if (numElements) {
      for (var i = numElements - 1; i >= 0; i--) {
        bgElArray[i].update(elSpeed);
      }

      var lastEl = bgElArray[numElements - 1]; // Check for adding a new element.

      if (numElements < maxBgEl && this.dimensions.WIDTH - lastEl.xPos > lastEl.gap && frequency > Math.random()) {
        bgElAddFunction();
      }
    } else {
      bgElAddFunction();
    }
  },

  /**
   * Update the cloud positions.
   * @param {number} deltaTime
   * @param {number} speed
   */
  updateClouds: function updateClouds(deltaTime, speed) {
    var elSpeed = this.cloudSpeed / 1000 * deltaTime * speed;
    this.updateBackgroundEl(elSpeed, this.clouds, this.config.MAX_CLOUDS, this.addCloud.bind(this), this.cloudFrequency); // Remove expired elements.

    this.clouds = this.clouds.filter(function (obj) {
      return !obj.remove;
    });
  },

  /**
   * Update the background element positions.
   * @param {number} deltaTime
   * @param {number} speed
   */
  updateBackgroundEls: function updateBackgroundEls(deltaTime, speed) {
    this.updateBackgroundEl(deltaTime, this.backgroundEls, BackgroundEl.config.MAX_BG_ELS, this.addBackgroundEl.bind(this), this.cloudFrequency); // Remove expired elements.

    this.backgroundEls = this.backgroundEls.filter(function (obj) {
      return !obj.remove;
    });
  },

  /**
   * Update the obstacle positions.
   * @param {number} deltaTime
   * @param {number} currentSpeed
   */
  updateObstacles: function updateObstacles(deltaTime, currentSpeed) {
    // console.log(this.obstacles);
    if (this.obstacles.length > 0) {
      this.obstacles[0].typeConfig.xPos = 300;
      this.obstacles[0].typeConfig.yPos = 80;
    }

    var updatedObstacles = this.obstacles.slice(0);

    for (var i = 0; i < this.obstacles.length; i++) {
      var obstacle = this.obstacles[i];
      obstacle.update(deltaTime, currentSpeed); // Clean up existing obstacles.

      if (obstacle.remove) {
        updatedObstacles.shift();
      }
    }

    this.obstacles = updatedObstacles;

    if (this.obstacles.length > 0) {
      var lastObstacle = this.obstacles[this.obstacles.length - 1];

      if (lastObstacle && !lastObstacle.followingObstacleCreated && lastObstacle.isVisible() && lastObstacle.xPos + lastObstacle.width + lastObstacle.gap < this.dimensions.WIDTH) {
        this.addNewObstacle(currentSpeed);
        lastObstacle.followingObstacleCreated = true;
      }
    } else {
      // Create new obstacles.
      this.addNewObstacle(currentSpeed);
    }
  },
  removeFirstObstacle: function removeFirstObstacle() {
    this.obstacles.shift();
  },

  /**
   * Add a new obstacle.
   * @param {number} currentSpeed
   */
  addNewObstacle: function addNewObstacle(currentSpeed) {
    var obstacleCount = Runner.isAltGameModeEnabled() && !this.altGameModeActive || this.altGameModeActive ? Obstacle.types.length - 1 : Obstacle.types.length - 2;
    var obstacleTypeIndex = obstacleCount > 0 ? getRandomNum(0, obstacleCount) : 0;
    var obstacleType = Obstacle.types[obstacleTypeIndex]; // Check for multiples of the same type of obstacle.
    // Also check obstacle is available at current speed.

    if (obstacleCount > 0 && this.duplicateObstacleCheck(obstacleType.type) || currentSpeed < obstacleType.minSpeed) {
      this.addNewObstacle(currentSpeed);
    } else {
      var obstacleSpritePos = this.spritePos[obstacleType.type];
      this.obstacles.push(new Obstacle(this.canvasCtx, obstacleType, obstacleSpritePos, this.dimensions, this.gapCoefficient, currentSpeed, obstacleType.width, this.altGameModeActive));
      this.obstacleHistory.unshift(obstacleType.type);

      if (this.obstacleHistory.length > 1) {
        this.obstacleHistory.splice(Runner.config.MAX_OBSTACLE_DUPLICATION);
      }
    }
  },

  /**
   * Returns whether the previous two obstacles are the same as the next one.
   * Maximum duplication is set in config value MAX_OBSTACLE_DUPLICATION.
   * @return {boolean}
   */
  duplicateObstacleCheck: function duplicateObstacleCheck(nextObstacleType) {
    var duplicateCount = 0;

    for (var i = 0; i < this.obstacleHistory.length; i++) {
      duplicateCount = this.obstacleHistory[i] === nextObstacleType ? duplicateCount + 1 : 0;
    }

    return duplicateCount >= Runner.config.MAX_OBSTACLE_DUPLICATION;
  },

  /**
   * Reset the horizon layer.
   * Remove existing obstacles and reposition the horizon line.
   */
  reset: function reset() {
    this.obstacles = [];

    for (var l = 0; l < this.horizonLines.length; l++) {
      this.horizonLines[l].reset();
    }

    this.nightMode.reset();
  },

  /**
   * Update the canvas width and scaling.
   * @param {number} width Canvas width.
   * @param {number} height Canvas height.
   */
  resize: function resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  },

  /**
   * Add a new cloud to the horizon.
   */
  addCloud: function addCloud() {
    this.clouds.push(new Cloud(this.canvas, this.spritePos.CLOUD, this.dimensions.WIDTH));
  },

  /**
   * Add a random background element to the horizon.
   */
  addBackgroundEl: function addBackgroundEl() {
    var backgroundElTypes = Object.keys(Runner.spriteDefinition.BACKGROUND_EL);

    if (backgroundElTypes.length > 0) {
      var index = getRandomNum(0, backgroundElTypes.length - 1);
      var type = backgroundElTypes[index]; // Add variation if available.

      while (type == this.lastEl && backgroundElTypes.length > 1) {
        index = getRandomNum(0, backgroundElTypes.length - 1);
        type = backgroundElTypes[index];
      }

      this.lastEl = type;
      this.backgroundEls.push(new BackgroundEl(this.canvas, this.spritePos.BACKGROUND_EL, this.dimensions.WIDTH, type));
    }
  }
};
},{"./offline-sprite-definitions":"offline-sprite-definitions.js"}],"neterror.js":[function(require,module,exports) {
"use strict";

var _offline = require("./offline");

// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @typedef {{
 *   downloadButtonClick: function(),
 *   reloadButtonClick: function(string),
 *   detailsButtonClick: function(),
 *   diagnoseErrorsButtonClick: function(),
 *   trackEasterEgg: function(),
 *   updateEasterEggHighScore: function(number),
 *   resetEasterEggHighScore: function(),
 *   launchOfflineItem: function(string, string),
 *   savePageForLater: function(),
 *   cancelSavePage: function(),
 *   listVisibilityChange: function(boolean),
 * }}
 */
// eslint-disable-next-line no-var
var errorPageController;
var HIDDEN_CLASS = 'hidden'; // Decodes a UTF16 string that is encoded as base64.

function decodeUTF16Base64ToString(encoded_text) {
  var data = atob(encoded_text);
  var result = '';

  for (var i = 0; i < data.length; i += 2) {
    result += String.fromCharCode(data.charCodeAt(i) * 256 + data.charCodeAt(i + 1));
  }

  return result;
} // function replaceDino(idx) {
//   console.log("me");
//   const imgElem1 = document.getElementById('offline-resources-1x');
//   const imgElem2 = document.getElementById('offline-resources-2x');
//   imgElem1.src = "images/default_100_percent/offline/100-offline-sprite_" + idx.toString() + ".png";
//   imgElem2.src = "images/default_100_percent/offline/100-offline-sprite_" + idx.toString() + ".png";
//   console.log(imgElem1.src);
//   console.log(imgElem2.src);
// }


function toggleHelpBox() {
  var helpBoxOuter = document.getElementById('details');
  helpBoxOuter.classList.toggle(HIDDEN_CLASS);
  var detailsButton = document.getElementById('details-button');

  if (helpBoxOuter.classList.contains(HIDDEN_CLASS)) {
    /** @suppress {missingProperties} */
    detailsButton.innerText = detailsButton.detailsText;
  } else {
    /** @suppress {missingProperties} */
    detailsButton.innerText = detailsButton.hideDetailsText;
  } // Details appears over the main content on small screens.


  if (mobileNav) {
    document.getElementById('main-content').classList.toggle(HIDDEN_CLASS);
    var runnerContainer = document.querySelector('.runner-container');

    if (runnerContainer) {
      runnerContainer.classList.toggle(HIDDEN_CLASS);
    }
  }
}

function diagnoseErrors() {
  if (window.errorPageController) {
    errorPageController.diagnoseErrorsButtonClick();
  }
} // Subframes use a different layout but the same html file.  This is to make it
// easier to support platforms that load the error page via different
// mechanisms (Currently just iOS). We also use the subframe style for portals
// as they are embedded like subframes and can't be interacted with by the user.


var isSubFrame = false;

if (window.top.location !== window.location || window.portalHost) {
  document.documentElement.setAttribute('subframe', '');
  isSubFrame = true;
} // Re-renders the error page using |strings| as the dictionary of values.
// Used by NetErrorTabHelper to update DNS error pages with probe results.


function updateForDnsProbe(strings) {
  var context = new JsEvalContext(strings);
  jstProcess(context, document.getElementById('t'));
  onDocumentLoadOrUpdate();
} // Adds an icon class to the list and removes classes previously set.


function updateIconClass(newClass) {
  var frameSelector = isSubFrame ? '#sub-frame-error' : '#main-frame-error';
  var iconEl = document.querySelector(frameSelector + ' .icon');

  if (iconEl.classList.contains(newClass)) {
    return;
  }

  iconEl.className = 'icon ' + newClass;
} // Implements button clicks.  This function is needed during the transition
// between implementing these in trunk chromium and implementing them in iOS.


function reloadButtonClick(url) {
  if (window.errorPageController) {
    // <if expr="is_ios">
    errorPageController.reloadButtonClick(url); // </if>
    // <if expr="not is_ios">

    errorPageController.reloadButtonClick(); // </if>
  } else {
    window.location = url;
  }
}

function downloadButtonClick() {
  if (window.errorPageController) {
    errorPageController.downloadButtonClick();
    var downloadButton = document.getElementById('download-button');
    downloadButton.disabled = true;
    /** @suppress {missingProperties} */

    downloadButton.textContent = downloadButton.disabledText;
    document.getElementById('download-link-wrapper').classList.add(HIDDEN_CLASS);
    document.getElementById('download-link-clicked-wrapper').classList.remove(HIDDEN_CLASS);
  }
}

function detailsButtonClick() {
  if (window.errorPageController) {
    errorPageController.detailsButtonClick();
  }
}

var primaryControlOnLeft = true; // <if expr="is_macosx or is_ios or is_linux or is_android">

primaryControlOnLeft = false; // </if>

function setAutoFetchState(scheduled, can_schedule) {
  document.getElementById('cancel-save-page-button').classList.toggle(HIDDEN_CLASS, !scheduled);
  document.getElementById('save-page-for-later-button').classList.toggle(HIDDEN_CLASS, scheduled || !can_schedule);
}

function savePageLaterClick() {
  errorPageController.savePageForLater(); // savePageForLater will eventually trigger a call to setAutoFetchState() when
  // it completes.
}

function cancelSavePageClick() {
  errorPageController.cancelSavePage(); // setAutoFetchState is not called in response to cancelSavePage(), so do it
  // now.

  setAutoFetchState(false, true);
}

function toggleErrorInformationPopup() {
  document.getElementById('error-information-popup-container').classList.toggle(HIDDEN_CLASS);
}

function launchOfflineItem(itemID, name_space) {
  errorPageController.launchOfflineItem(itemID, name_space);
}

function launchDownloadsPage() {
  errorPageController.launchDownloadsPage();
}

function getIconForSuggestedItem(item) {
  // Note: |item.content_type| contains the enum values from
  // chrome::mojom::AvailableContentType.
  switch (item.content_type) {
    case 1:
      // kVideo
      return 'image-video';

    case 2:
      // kAudio
      return 'image-music-note';

    case 0: // kPrefetchedPage

    case 3:
      // kOtherPage
      return 'image-earth';
  }

  return 'image-file';
}

function getSuggestedContentDiv(item, index) {
  // Note: See AvailableContentToValue in available_offline_content_helper.cc
  // for the data contained in an |item|.
  // TODO(carlosk): Present |snippet_base64| when that content becomes
  // available.
  var thumbnail = '';
  var extraContainerClasses = []; // html_inline.py will try to replace src attributes with data URIs using a
  // simple regex. The following is obfuscated slightly to avoid that.

  var source = 'src';

  if (item.thumbnail_data_uri) {
    extraContainerClasses.push('suggestion-with-image');
    thumbnail = "<img ".concat(source, "=\"").concat(item.thumbnail_data_uri, "\">");
  } else {
    extraContainerClasses.push('suggestion-with-icon');
    var iconClass = getIconForSuggestedItem(item);
    thumbnail = "<div><img class=\"".concat(iconClass, "\"></div>");
  }

  var favicon = '';

  if (item.favicon_data_uri) {
    favicon = "<img ".concat(source, "=\"").concat(item.favicon_data_uri, "\">");
  } else {
    extraContainerClasses.push('no-favicon');
  }

  if (!item.attribution_base64) {
    extraContainerClasses.push('no-attribution');
  }

  return "\n  <div class=\"offline-content-suggestion ".concat(extraContainerClasses.join(' '), "\"\n    onclick=\"launchOfflineItem('").concat(item.ID, "', '").concat(item.name_space, "')\">\n      <div class=\"offline-content-suggestion-texts\">\n        <div id=\"offline-content-suggestion-title-").concat(index, "\"\n             class=\"offline-content-suggestion-title\">\n        </div>\n        <div class=\"offline-content-suggestion-attribution-freshness\">\n          <div id=\"offline-content-suggestion-favicon-").concat(index, "\"\n               class=\"offline-content-suggestion-favicon\">\n            ").concat(favicon, "\n          </div>\n          <div id=\"offline-content-suggestion-attribution-").concat(index, "\"\n               class=\"offline-content-suggestion-attribution\">\n          </div>\n          <div class=\"offline-content-suggestion-freshness\">\n            ").concat(item.date_modified, "\n          </div>\n          <div class=\"offline-content-suggestion-pin-spacer\"></div>\n          <div class=\"offline-content-suggestion-pin\"></div>\n        </div>\n      </div>\n      <div class=\"offline-content-suggestion-thumbnail\">\n        ").concat(thumbnail, "\n      </div>\n  </div>");
}
/**
 * @typedef {{
 *   ID: string,
 *   name_space: string,
 *   title_base64: string,
 *   snippet_base64: string,
 *   date_modified: string,
 *   attribution_base64: string,
 *   thumbnail_data_uri: string,
 *   favicon_data_uri: string,
 *   content_type: number,
 * }}
 */


var AvailableOfflineContent; // Populates a list of suggested offline content.
// Note: For security reasons all content downloaded from the web is considered
// unsafe and must be securely handled to be presented on the dino page. Images
// have already been safely re-encoded but textual content -- like title and
// attribution -- must be properly handled here.
// @param {boolean} isShown
// @param {Array<AvailableOfflineContent>} suggestions

function offlineContentAvailable(isShown, suggestions) {
  /*if (!suggestions || !loadTimeData.valueExists('offlineContentList')) {
    return;
  }*/
  //if (!suggestions || !loadTimeData.valueExists('offlineContentList')) {
  return; //}

  var suggestionsHTML = [];

  for (var index = 0; index < suggestions.length; index++) {
    suggestionsHTML.push(getSuggestedContentDiv(suggestions[index], index));
  }

  document.getElementById('offline-content-suggestions').innerHTML = suggestionsHTML.join('\n'); // Sets textual web content using |textContent| to make sure it's handled as
  // plain text.

  for (var _index = 0; _index < suggestions.length; _index++) {
    document.getElementById("offline-content-suggestion-title-".concat(_index)).textContent = decodeUTF16Base64ToString(suggestions[_index].title_base64);
    document.getElementById("offline-content-suggestion-attribution-".concat(_index)).textContent = decodeUTF16Base64ToString(suggestions[_index].attribution_base64);
  }

  var contentListElement = document.getElementById('offline-content-list');

  if (document.dir === 'rtl') {
    contentListElement.classList.add('is-rtl');
  }

  contentListElement.hidden = false; // The list is configured as hidden by default. Show it if needed.

  if (isShown) {
    toggleOfflineContentListVisibility(false);
  }
}

function toggleOfflineContentListVisibility(updatePref) {
  if (true) {
    //!loadTimeData.valueExists('offlineContentList')) {
    return;
  }

  var contentListElement = document.getElementById('offline-content-list');
  var isVisible = !contentListElement.classList.toggle('list-hidden');

  if (updatePref && window.errorPageController) {
    errorPageController.listVisibilityChanged(isVisible);
  }
} // Called on document load, and from updateForDnsProbe().


function onDocumentLoadOrUpdate() {
  console.log("hi"); // document.getElementById('download-links-wrapper')
  //       .classList.add(HIDDEN_CLASS);

  var downloadButtonVisible = false; //loadTimeData.valueExists('downloadButton') &&
  //loadTimeData.getValue('downloadButton').msg;

  var detailsButton = document.getElementById('details-button'); // If offline content suggestions will be visible, the usual buttons will not
  // be presented.

  var offlineContentVisible = true; //loadTimeData.valueExists('suggestedOfflineContentPresentation');

  if (offlineContentVisible) {
    document.querySelector('.nav-wrapper').classList.add(HIDDEN_CLASS);
    detailsButton.classList.add(HIDDEN_CLASS);
    document.getElementById('download-link').hidden = !downloadButtonVisible;
    document.getElementById('download-links-wrapper').classList.remove(HIDDEN_CLASS);
    document.getElementById('error-information-popup-container').classList.add('use-popup-container', HIDDEN_CLASS);
    document.getElementById('error-information-button').classList.remove(HIDDEN_CLASS);
  }

  var attemptAutoFetch = false;
  /*loadTimeData.valueExists('attemptAutoFetch') &&
      //loadTimeData.getValue('attemptAutoFetch'); */

  var reloadButtonVisible = false; //loadTimeData.valueExists('reloadButton') &&
  //loadTimeData.getValue('reloadButton').msg;

  var reloadButton = document.getElementById('reload-button');
  var downloadButton = document.getElementById('download-button');

  if (reloadButton.style.display === 'none' && downloadButton.style.display === 'none') {
    detailsButton.classList.add('singular');
    console.log("Should be here");
  } // Show or hide control buttons.


  var controlButtonDiv = document.getElementById('control-buttons');
  controlButtonDiv.hidden = offlineContentVisible || !(reloadButtonVisible || downloadButtonVisible);
  var iconClass = 'icon-offline'; //loadTimeData.valueExists('iconClass') &&
  //loadTimeData.getValue('iconClass');

  updateIconClass(iconClass); // if (!isSubFrame && iconClass === 'icon-offline') {

  console.log(iconClass);

  if (iconClass === 'icon-offline') {
    document.documentElement.classList.add('offline');
    new _offline.Runner('.interstitial-wrapper', null);
    console.log(iconClass);
  }

  document.getElementById('error-information-button').classList.add(HIDDEN_CLASS);
  document.getElementById('download-links-wrapper').classList.add(HIDDEN_CLASS);
}

function onDocumentLoad() {
  // Sets up the proper button layout for the current platform.
  var buttonsDiv = document.getElementById('buttons');

  if (primaryControlOnLeft) {
    buttonsDiv.classList.add('suggested-left');
  } else {
    buttonsDiv.classList.add('suggested-right');
  }

  onDocumentLoadOrUpdate();
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
},{"./offline":"offline.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50585" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","neterror.js"], null)
//# sourceMappingURL=/neterror.935bb152.js.map