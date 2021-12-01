// @ts-nocheck
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["shogun-product"] = factory(require("vue"));
	else
		root["shogun-product"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "026b":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("eaf7");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "0790":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "09ac":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("b12f");
var isObject = __webpack_require__("e7cb");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "0d0b":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8088");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "0e0a":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "3016":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("daaa");
var isSymbol = __webpack_require__("f73e");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "320c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "394d":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3da6":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "432f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9d1c");
var has = __webpack_require__("f07b");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = has(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("b766");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "5ac7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c24":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("7237");
var isCallable = __webpack_require__("b12f");
var classofRaw = __webpack_require__("394d");
var wellKnownSymbol = __webpack_require__("8bcf");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "6c47":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("af10");
var global = __webpack_require__("3da6");
var isObject = __webpack_require__("e7cb");
var createNonEnumerableProperty = __webpack_require__("f95d");
var objectHas = __webpack_require__("f07b");
var shared = __webpack_require__("724c");
var sharedKey = __webpack_require__("dd53");
var hiddenKeys = __webpack_require__("0790");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6f84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("a21b");
var global = __webpack_require__("3da6");
var fails = __webpack_require__("fc61");
var aCallable = __webpack_require__("effe");
var toLength = __webpack_require__("0d0b");
var internalSort = __webpack_require__("730e");
var FF = __webpack_require__("992d");
var IE_OR_EDGE = __webpack_require__("80e8");
var V8 = __webpack_require__("7b89");
var WEBKIT = __webpack_require__("b6c5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global.Uint16Array;
var nativeSort = Uint16Array && Uint16Array.prototype.sort;

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !fails(function () {
  var array = new Uint16Array(2);
  array.sort(null);
  array.sort({});
});

var STABLE_SORT = !!nativeSort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  array.sort(function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  var array = this;
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort.call(array, comparefn);

  aTypedArray(array);
  var arrayLength = toLength(array.length);
  var items = Array(arrayLength);
  var index;

  for (index = 0; index < arrayLength; index++) {
    items[index] = array[index];
  }

  items = internalSort(array, getSortCompare(comparefn));

  for (index = 0; index < arrayLength; index++) {
    array[index] = items[index];
  }

  return array;
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


/***/ }),

/***/ "7237":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("8bcf");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "724c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var setGlobal = __webpack_require__("cff6");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "72b4":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("effe");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "730e":
/***/ (function(module, exports) {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    mergeSort(array.slice(0, middle), comparefn),
    mergeSort(array.slice(middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  } return result;
};

module.exports = mergeSort;


/***/ }),

/***/ "76b8":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("ac23");
var aPossiblePrototype = __webpack_require__("f8b9");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "7b89":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var userAgent = __webpack_require__("026b");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "8088":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "80e8":
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__("026b");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "814f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9d1c");
var IE8_DOM_DEFINE = __webpack_require__("acfc");
var anObject = __webpack_require__("ac23");
var toPropertyKey = __webpack_require__("3016");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8bcf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var shared = __webpack_require__("eb16");
var has = __webpack_require__("f07b");
var uid = __webpack_require__("ba61");
var NATIVE_SYMBOL = __webpack_require__("e529");
var USE_SYMBOL_AS_UID = __webpack_require__("e6bc");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "913a":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c67b");

__webpack_require__("6f84");

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__("8bbf"));else {}
})(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__8bbf__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "fb15");
      /******/
    }
    /************************************************************************/

    /******/
    ({
      /***/
      "024e":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewRequest_vue_vue_type_style_index_1_id_0be1356c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("201a");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewRequest_vue_vue_type_style_index_1_id_0be1356c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewRequest_vue_vue_type_style_index_1_id_0be1356c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "05ba":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_c3a95be4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("38e1");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_c3a95be4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_c3a95be4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "0701":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "0782":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2f76");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "10ee":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "1711":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCommentClean_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10ee");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCommentClean_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCommentClean_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "1789":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "1816":
      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */

        (function (global) {
          var required = __webpack_require__("440d"),
              qs = __webpack_require__("9c59"),
              slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
              protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
              windowsDriveLetter = /^[a-zA-Z]:/,
              whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]',
              left = new RegExp('^' + whitespace + '+');
          /**
           * Trim a given string.
           *
           * @param {String} str String to trim.
           * @public
           */


          function trimLeft(str) {
            return (str ? str : '').toString().replace(left, '');
          }
          /**
           * These are the parse rules for the URL parser, it informs the parser
           * about:
           *
           * 0. The char it Needs to parse, if it's a string it should be done using
           *    indexOf, RegExp using exec and NaN means set as current value.
           * 1. The property we should set when parsing this value.
           * 2. Indication if it's backwards or forward parsing, when set as number it's
           *    the value of extra chars that should be split off.
           * 3. Inherit from location if non existing in the parser.
           * 4. `toLowerCase` the resulting value.
           */


          var rules = [['#', 'hash'], // Extract from the back.
          ['?', 'query'], // Extract from the back.
          function sanitize(address, url) {
            // Sanitize what is left of the address
            return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
          }, ['/', 'pathname'], // Extract from the back.
          ['@', 'auth', 1], // Extract from the front.
          [NaN, 'host', undefined, 1, 1], // Set left over value.
          [/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
          [NaN, 'hostname', undefined, 1, 1] // Set left over.
          ];
          /**
           * These properties should not be copied or inherited from. This is only needed
           * for all non blob URL's as a blob URL does not include a hash, only the
           * origin.
           *
           * @type {Object}
           * @private
           */

          var ignore = {
            hash: 1,
            query: 1
          };
          /**
           * The location object differs when your code is loaded through a normal page,
           * Worker or through a worker using a blob. And with the blobble begins the
           * trouble as the location object will contain the URL of the blob, not the
           * location of the page where our code is loaded in. The actual origin is
           * encoded in the `pathname` so we can thankfully generate a good "default"
           * location from it so we can generate proper relative URL's again.
           *
           * @param {Object|String} loc Optional default location object.
           * @returns {Object} lolcation object.
           * @public
           */

          function lolcation(loc) {
            var globalVar;
            if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
            var location = globalVar.location || {};
            loc = loc || location;
            var finaldestination = {},
                type = typeof loc,
                key;

            if ('blob:' === loc.protocol) {
              finaldestination = new Url(unescape(loc.pathname), {});
            } else if ('string' === type) {
              finaldestination = new Url(loc, {});

              for (key in ignore) delete finaldestination[key];
            } else if ('object' === type) {
              for (key in loc) {
                if (key in ignore) continue;
                finaldestination[key] = loc[key];
              }

              if (finaldestination.slashes === undefined) {
                finaldestination.slashes = slashes.test(loc.href);
              }
            }

            return finaldestination;
          }
          /**
           * Check whether a protocol scheme is special.
           *
           * @param {String} The protocol scheme of the URL
           * @return {Boolean} `true` if the protocol scheme is special, else `false`
           * @private
           */


          function isSpecial(scheme) {
            return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
          }
          /**
           * @typedef ProtocolExtract
           * @type Object
           * @property {String} protocol Protocol matched in the URL, in lowercase.
           * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
           * @property {String} rest Rest of the URL that is not part of the protocol.
           */

          /**
           * Extract protocol information from a URL with/without double slash ("//").
           *
           * @param {String} address URL we want to extract from.
           * @param {Object} location
           * @return {ProtocolExtract} Extracted information.
           * @private
           */


          function extractProtocol(address, location) {
            address = trimLeft(address);
            location = location || {};
            var match = protocolre.exec(address);
            var protocol = match[1] ? match[1].toLowerCase() : '';
            var forwardSlashes = !!match[2];
            var otherSlashes = !!match[3];
            var slashesCount = 0;
            var rest;

            if (forwardSlashes) {
              if (otherSlashes) {
                rest = match[2] + match[3] + match[4];
                slashesCount = match[2].length + match[3].length;
              } else {
                rest = match[2] + match[4];
                slashesCount = match[2].length;
              }
            } else {
              if (otherSlashes) {
                rest = match[3] + match[4];
                slashesCount = match[3].length;
              } else {
                rest = match[4];
              }
            }

            if (protocol === 'file:') {
              if (slashesCount >= 2) {
                rest = rest.slice(2);
              }
            } else if (isSpecial(protocol)) {
              rest = match[4];
            } else if (protocol) {
              if (forwardSlashes) {
                rest = rest.slice(2);
              }
            } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
              rest = match[4];
            }

            return {
              protocol: protocol,
              slashes: forwardSlashes || isSpecial(protocol),
              slashesCount: slashesCount,
              rest: rest
            };
          }
          /**
           * Resolve a relative URL pathname against a base URL pathname.
           *
           * @param {String} relative Pathname of the relative URL.
           * @param {String} base Pathname of the base URL.
           * @return {String} Resolved pathname.
           * @private
           */


          function resolve(relative, base) {
            if (relative === '') return base;
            var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
                i = path.length,
                last = path[i - 1],
                unshift = false,
                up = 0;

            while (i--) {
              if (path[i] === '.') {
                path.splice(i, 1);
              } else if (path[i] === '..') {
                path.splice(i, 1);
                up++;
              } else if (up) {
                if (i === 0) unshift = true;
                path.splice(i, 1);
                up--;
              }
            }

            if (unshift) path.unshift('');
            if (last === '.' || last === '..') path.push('');
            return path.join('/');
          }
          /**
           * The actual URL instance. Instead of returning an object we've opted-in to
           * create an actual constructor as it's much more memory efficient and
           * faster and it pleases my OCD.
           *
           * It is worth noting that we should not use `URL` as class name to prevent
           * clashes with the global URL instance that got introduced in browsers.
           *
           * @constructor
           * @param {String} address URL we want to parse.
           * @param {Object|String} [location] Location defaults for relative paths.
           * @param {Boolean|Function} [parser] Parser for the query string.
           * @private
           */


          function Url(address, location, parser) {
            address = trimLeft(address);

            if (!(this instanceof Url)) {
              return new Url(address, location, parser);
            }

            var relative,
                extracted,
                parse,
                instruction,
                index,
                key,
                instructions = rules.slice(),
                type = typeof location,
                url = this,
                i = 0; //
            // The following if statements allows this module two have compatibility with
            // 2 different API:
            //
            // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
            //    where the boolean indicates that the query string should also be parsed.
            //
            // 2. The `URL` interface of the browser which accepts a URL, object as
            //    arguments. The supplied object will be used as default values / fall-back
            //    for relative paths.
            //

            if ('object' !== type && 'string' !== type) {
              parser = location;
              location = null;
            }

            if (parser && 'function' !== typeof parser) parser = qs.parse;
            location = lolcation(location); //
            // Extract protocol information before running the instructions.
            //

            extracted = extractProtocol(address || '', location);
            relative = !extracted.protocol && !extracted.slashes;
            url.slashes = extracted.slashes || relative && location.slashes;
            url.protocol = extracted.protocol || location.protocol || '';
            address = extracted.rest; //
            // When the authority component is absent the URL starts with a path
            // component.
            //

            if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
              instructions[3] = [/(.*)/, 'pathname'];
            }

            for (; i < instructions.length; i++) {
              instruction = instructions[i];

              if (typeof instruction === 'function') {
                address = instruction(address, url);
                continue;
              }

              parse = instruction[0];
              key = instruction[1];

              if (parse !== parse) {
                url[key] = address;
              } else if ('string' === typeof parse) {
                if (~(index = address.indexOf(parse))) {
                  if ('number' === typeof instruction[2]) {
                    url[key] = address.slice(0, index);
                    address = address.slice(index + instruction[2]);
                  } else {
                    url[key] = address.slice(index);
                    address = address.slice(0, index);
                  }
                }
              } else if (index = parse.exec(address)) {
                url[key] = index[1];
                address = address.slice(0, index.index);
              }

              url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
              // Hostname, host and protocol should be lowercased so they can be used to
              // create a proper `origin`.
              //

              if (instruction[4]) url[key] = url[key].toLowerCase();
            } //
            // Also parse the supplied query string in to an object. If we're supplied
            // with a custom parser as function use that instead of the default build-in
            // parser.
            //


            if (parser) url.query = parser(url.query); //
            // If the URL is relative, resolve the pathname against the base URL.
            //

            if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
              url.pathname = resolve(url.pathname, location.pathname);
            } //
            // Default to a / for pathname if none exists. This normalizes the URL
            // to always have a /
            //


            if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
              url.pathname = '/' + url.pathname;
            } //
            // We should not add port numbers if they are already the default port number
            // for a given protocol. As the host also contains the port number we're going
            // override it with the hostname which contains no port number.
            //


            if (!required(url.port, url.protocol)) {
              url.host = url.hostname;
              url.port = '';
            } //
            // Parse down the `auth` for the username and password.
            //


            url.username = url.password = '';

            if (url.auth) {
              instruction = url.auth.split(':');
              url.username = instruction[0] || '';
              url.password = instruction[1] || '';
            }

            url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null'; //
            // The href is just the compiled result.
            //

            url.href = url.toString();
          }
          /**
           * This is convenience method for changing properties in the URL instance to
           * insure that they all propagate correctly.
           *
           * @param {String} part          Property we need to adjust.
           * @param {Mixed} value          The newly assigned value.
           * @param {Boolean|Function} fn  When setting the query, it will be the function
           *                               used to parse the query.
           *                               When setting the protocol, double slash will be
           *                               removed from the final url if it is true.
           * @returns {URL} URL instance for chaining.
           * @public
           */


          function set(part, value, fn) {
            var url = this;

            switch (part) {
              case 'query':
                if ('string' === typeof value && value.length) {
                  value = (fn || qs.parse)(value);
                }

                url[part] = value;
                break;

              case 'port':
                url[part] = value;

                if (!required(value, url.protocol)) {
                  url.host = url.hostname;
                  url[part] = '';
                } else if (value) {
                  url.host = url.hostname + ':' + value;
                }

                break;

              case 'hostname':
                url[part] = value;
                if (url.port) value += ':' + url.port;
                url.host = value;
                break;

              case 'host':
                url[part] = value;

                if (/:\d+$/.test(value)) {
                  value = value.split(':');
                  url.port = value.pop();
                  url.hostname = value.join(':');
                } else {
                  url.hostname = value;
                  url.port = '';
                }

                break;

              case 'protocol':
                url.protocol = value.toLowerCase();
                url.slashes = !fn;
                break;

              case 'pathname':
              case 'hash':
                if (value) {
                  var char = part === 'pathname' ? '/' : '#';
                  url[part] = value.charAt(0) !== char ? char + value : value;
                } else {
                  url[part] = value;
                }

                break;

              default:
                url[part] = value;
            }

            for (var i = 0; i < rules.length; i++) {
              var ins = rules[i];
              if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
            }

            url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
            url.href = url.toString();
            return url;
          }
          /**
           * Transform the properties back in to a valid and full URL string.
           *
           * @param {Function} stringify Optional query stringify function.
           * @returns {String} Compiled version of the URL.
           * @public
           */


          function toString(stringify) {
            if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
            var query,
                url = this,
                protocol = url.protocol;
            if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
            var result = protocol + (url.slashes || isSpecial(url.protocol) ? '//' : '');

            if (url.username) {
              result += url.username;
              if (url.password) result += ':' + url.password;
              result += '@';
            }

            result += url.host + url.pathname;
            query = 'object' === typeof url.query ? stringify(url.query) : url.query;
            if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
            if (url.hash) result += url.hash;
            return result;
          }

          Url.prototype = {
            set: set,
            toString: toString
          }; //
          // Expose the URL parser and some additional properties that might be useful for
          // others or testing.
          //

          Url.extractProtocol = extractProtocol;
          Url.location = lolcation;
          Url.trimLeft = trimLeft;
          Url.qs = qs;
          module.exports = Url;
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__("c8ba"));
        /***/
      },

      /***/
      "1848":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_2_id_bb84d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2216");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_2_id_bb84d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_2_id_bb84d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "1864":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_1_id_bb84d6c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fcc");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_1_id_bb84d6c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_1_id_bb84d6c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "1c9f":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "1fcc":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "201a":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "2216":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "27ae":
      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          /*
          *  base64.js
          *
          *  Licensed under the BSD 3-Clause License.
          *    http://opensource.org/licenses/BSD-3-Clause
          *
          *  References:
          *    http://en.wikipedia.org/wiki/Base64
          */


          ;

          (function (global, factory) {
            true ? module.exports = factory(global) : undefined;
          })(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this, function (global) {
            'use strict'; // existing version for noConflict()

            global = global || {};
            var _Base64 = global.Base64;
            var version = "2.6.4"; // constants

            var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            var b64tab = function (bin) {
              var t = {};

              for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;

              return t;
            }(b64chars);

            var fromCharCode = String.fromCharCode; // encoder stuff

            var cb_utob = function (c) {
              if (c.length < 2) {
                var cc = c.charCodeAt(0);
                return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
              } else {
                var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
                return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
              }
            };

            var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

            var utob = function (u) {
              return u.replace(re_utob, cb_utob);
            };

            var cb_encode = function (ccc) {
              var padlen = [0, 2, 1][ccc.length % 3],
                  ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
                  chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
              return chars.join('');
            };

            var btoa = global.btoa && typeof global.btoa == 'function' ? function (b) {
              return global.btoa(b);
            } : function (b) {
              if (b.match(/[^\x00-\xFF]/)) throw new RangeError('The string contains invalid characters.');
              return b.replace(/[\s\S]{1,3}/g, cb_encode);
            };

            var _encode = function (u) {
              return btoa(utob(String(u)));
            };

            var mkUriSafe = function (b64) {
              return b64.replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
              }).replace(/=/g, '');
            };

            var encode = function (u, urisafe) {
              return urisafe ? mkUriSafe(_encode(u)) : _encode(u);
            };

            var encodeURI = function (u) {
              return encode(u, true);
            };

            var fromUint8Array;
            if (global.Uint8Array) fromUint8Array = function (a, urisafe) {
              // return btoa(fromCharCode.apply(null, a));
              var b64 = '';

              for (var i = 0, l = a.length; i < l; i += 3) {
                var a0 = a[i],
                    a1 = a[i + 1],
                    a2 = a[i + 2];
                var ord = a0 << 16 | a1 << 8 | a2;
                b64 += b64chars.charAt(ord >>> 18) + b64chars.charAt(ord >>> 12 & 63) + (typeof a1 != 'undefined' ? b64chars.charAt(ord >>> 6 & 63) : '=') + (typeof a2 != 'undefined' ? b64chars.charAt(ord & 63) : '=');
              }

              return urisafe ? mkUriSafe(b64) : b64;
            }; // decoder stuff

            var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;

            var cb_btou = function (cccc) {
              switch (cccc.length) {
                case 4:
                  var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
                      offset = cp - 0x10000;
                  return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);

                case 3:
                  return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

                default:
                  return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
              }
            };

            var btou = function (b) {
              return b.replace(re_btou, cb_btou);
            };

            var cb_decode = function (cccc) {
              var len = cccc.length,
                  padlen = len % 4,
                  n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
                  chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
              chars.length -= [0, 0, 2, 1][padlen];
              return chars.join('');
            };

            var _atob = global.atob && typeof global.atob == 'function' ? function (a) {
              return global.atob(a);
            } : function (a) {
              return a.replace(/\S{1,4}/g, cb_decode);
            };

            var atob = function (a) {
              return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
            };

            var _decode = function (a) {
              return btou(_atob(a));
            };

            var _fromURI = function (a) {
              return String(a).replace(/[-_]/g, function (m0) {
                return m0 == '-' ? '+' : '/';
              }).replace(/[^A-Za-z0-9\+\/]/g, '');
            };

            var decode = function (a) {
              return _decode(_fromURI(a));
            };

            var toUint8Array;
            if (global.Uint8Array) toUint8Array = function (a) {
              return Uint8Array.from(atob(_fromURI(a)), function (c) {
                return c.charCodeAt(0);
              });
            };

            var noConflict = function () {
              var Base64 = global.Base64;
              global.Base64 = _Base64;
              return Base64;
            }; // export Base64


            global.Base64 = {
              VERSION: version,
              atob: atob,
              btoa: btoa,
              fromBase64: decode,
              toBase64: encode,
              utob: utob,
              encode: encode,
              encodeURI: encodeURI,
              btou: btou,
              decode: decode,
              noConflict: noConflict,
              fromUint8Array: fromUint8Array,
              toUint8Array: toUint8Array
            }; // if ES5 is available, make Base64.extendString() available

            if (typeof Object.defineProperty === 'function') {
              var noEnum = function (v) {
                return {
                  value: v,
                  enumerable: false,
                  writable: true,
                  configurable: true
                };
              };

              global.Base64.extendString = function () {
                Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
                  return decode(this);
                }));
                Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
                  return encode(this, urisafe);
                }));
                Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
                  return encode(this, true);
                }));
              };
            } //
            // export Base64 to the namespace
            //


            if (global['Meteor']) {
              // Meteor.js
              Base64 = global.Base64;
            } // module.exports and AMD are mutually exclusive.
            // module.exports has precedence.


            if ( true && module.exports) {
              module.exports.Base64 = global.Base64;
            } else if (true) {
              // AMD. Register as an anonymous module.
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return global.Base64;
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } // that's it!


            return {
              Base64: global.Base64
            };
          });
          /* WEBPACK VAR INJECTION */

        }).call(this, __webpack_require__("c8ba"));
        /***/
      },

      /***/
      "27c8":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "2b0b":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewRequest_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e41");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewRequest_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewRequest_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "2f76":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "3004":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingWidget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c3a");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingWidget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingWidget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "333d":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3e3f");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "3410":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_2a07327c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7444");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_2a07327c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_2a07327c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "360e":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "38e1":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "38e7":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LdsSpinner_vue_vue_type_style_index_0_id_566b960c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5abe");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LdsSpinner_vue_vue_type_style_index_0_id_566b960c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LdsSpinner_vue_vue_type_style_index_0_id_566b960c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "3a7a":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "3c8a":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardClean_vue_vue_type_style_index_1_id_61e53698_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe9e");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardClean_vue_vue_type_style_index_1_id_61e53698_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardClean_vue_vue_type_style_index_1_id_61e53698_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "3e3f":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "3f54":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_8ae87a82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9fd9");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_8ae87a82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_8ae87a82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "440d":
      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Check if we're required to add a port number.
         *
         * @see https://url.spec.whatwg.org/#default-port
         * @param {Number|String} port Port number we need to check
         * @param {String} protocol Protocol we need to check against.
         * @returns {Boolean} Is it a default port for the given protocol
         * @api private
         */

        module.exports = function required(port, protocol) {
          protocol = protocol.split(':')[0];
          port = +port;
          if (!port) return false;

          switch (protocol) {
            case 'http':
            case 'ws':
              return port !== 80;

            case 'https':
            case 'wss':
              return port !== 443;

            case 'ftp':
              return port !== 21;

            case 'gopher':
              return port !== 70;

            case 'file':
              return false;
          }

          return port !== 0;
        };
        /***/

      },

      /***/
      "4cd1":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionsAnswers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("edd3");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionsAnswers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionsAnswers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "4d18":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6580");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "537d":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "54e2":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "59d7":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "59e4":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "5a02":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteQuestion_vue_vue_type_style_index_0_id_396c73aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68c4");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteQuestion_vue_vue_type_style_index_0_id_396c73aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteQuestion_vue_vue_type_style_index_0_id_396c73aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "5abe":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "5b4d":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "5c3a":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "5e0c":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedThumbnails_vue_vue_type_style_index_0_id_3c0afc75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("daeb");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedThumbnails_vue_vue_type_style_index_0_id_3c0afc75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedThumbnails_vue_vue_type_style_index_0_id_3c0afc75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "656f":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "6580":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "6890":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_0be1356c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4bb");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_0be1356c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_0be1356c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "68c4":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "693b":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "6e41":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "7093":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "71f0":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StarBars_vue_vue_type_style_index_0_id_829df81c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("537d");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StarBars_vue_vue_type_style_index_0_id_829df81c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StarBars_vue_vue_type_style_index_0_id_829df81c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "7444":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "786a":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardModern_vue_vue_type_style_index_1_id_c3a95be4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7093");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardModern_vue_vue_type_style_index_1_id_c3a95be4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardModern_vue_vue_type_style_index_1_id_c3a95be4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "78dc":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "7fc4":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OpinewGallery_vue_vue_type_style_index_0_id_2a50e6e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b5ab");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OpinewGallery_vue_vue_type_style_index_0_id_2a50e6e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OpinewGallery_vue_vue_type_style_index_0_id_2a50e6e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "8117":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainerCarousel_vue_vue_type_style_index_1_id_14d3e208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59d7");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainerCarousel_vue_vue_type_style_index_1_id_14d3e208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainerCarousel_vue_vue_type_style_index_1_id_14d3e208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "89d5":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainerCarousel_vue_vue_type_style_index_2_id_14d3e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b578");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainerCarousel_vue_vue_type_style_index_2_id_14d3e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewContainerCarousel_vue_vue_type_style_index_2_id_14d3e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "8bbf":
      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;
        /***/
      },

      /***/
      "8c43":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_61e53698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b01a");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_61e53698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_61e53698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "8f39":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_2_id_54005507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0701");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_2_id_54005507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_2_id_54005507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "9666":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "980c":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionMinimal_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1789");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionMinimal_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionMinimal_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "9bcb":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Rating_vue_vue_type_style_index_0_id_65d9f6bb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("54e2");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Rating_vue_vue_type_style_index_0_id_65d9f6bb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Rating_vue_vue_type_style_index_0_id_65d9f6bb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "9c59":
      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var has = Object.prototype.hasOwnProperty,
            undef;
        /**
         * Decode a URI encoded string.
         *
         * @param {String} input The URI encoded string.
         * @returns {String|Null} The decoded string.
         * @api private
         */

        function decode(input) {
          try {
            return decodeURIComponent(input.replace(/\+/g, ' '));
          } catch (e) {
            return null;
          }
        }
        /**
         * Attempts to encode a given input.
         *
         * @param {String} input The string that needs to be encoded.
         * @returns {String|Null} The encoded string.
         * @api private
         */


        function encode(input) {
          try {
            return encodeURIComponent(input);
          } catch (e) {
            return null;
          }
        }
        /**
         * Simple query string parser.
         *
         * @param {String} query The query string that needs to be parsed.
         * @returns {Object}
         * @api public
         */


        function querystring(query) {
          var parser = /([^=?#&]+)=?([^&]*)/g,
              result = {},
              part;

          while (part = parser.exec(query)) {
            var key = decode(part[1]),
                value = decode(part[2]); //
            // Prevent overriding of existing properties. This ensures that build-in
            // methods like `toString` or __proto__ are not overriden by malicious
            // querystrings.
            //
            // In the case if failed decoding, we want to omit the key/value pairs
            // from the result.
            //

            if (key === null || value === null || key in result) continue;
            result[key] = value;
          }

          return result;
        }
        /**
         * Transform a query string to an object.
         *
         * @param {Object} obj Object that should be transformed.
         * @param {String} prefix Optional prefix.
         * @returns {String}
         * @api public
         */


        function querystringify(obj, prefix) {
          prefix = prefix || '';
          var pairs = [],
              value,
              key; //
          // Optionally prefix with a '?' if needed
          //

          if ('string' !== typeof prefix) prefix = '?';

          for (key in obj) {
            if (has.call(obj, key)) {
              value = obj[key]; //
              // Edge cases where we actually want to encode the value to an empty
              // string instead of the stringified value.
              //

              if (!value && (value === null || value === undef || isNaN(value))) {
                value = '';
              }

              key = encode(key);
              value = encode(value); //
              // If we failed to encode the strings, we should bail out as we don't
              // want to add invalid strings to the query.
              //

              if (key === null || value === null) continue;
              pairs.push(key + '=' + value);
            }
          }

          return pairs.length ? prefix + pairs.join('&') : '';
        } //
        // Expose the module.
        //


        exports.stringify = querystringify;
        exports.parse = querystring;
        /***/
      },

      /***/
      "9c98":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSection_vue_vue_type_style_index_1_id_21f95ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27c8");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSection_vue_vue_type_style_index_1_id_21f95ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSection_vue_vue_type_style_index_1_id_21f95ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "9d57":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedAppView_vue_vue_type_style_index_1_id_2a07327c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5b4d");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedAppView_vue_vue_type_style_index_1_id_2a07327c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedAppView_vue_vue_type_style_index_1_id_2a07327c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "9fd9":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "a042":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewForm_vue_vue_type_style_index_0_id_328ee193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a7a");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewForm_vue_vue_type_style_index_0_id_328ee193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewForm_vue_vue_type_style_index_0_id_328ee193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "aca6":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_1_id_54005507_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c9f");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_1_id_54005507_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_1_id_54005507_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "afd6":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("78dc");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionModern_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "b01a":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "b07c":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_14d3e208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59e4");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_14d3e208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_14d3e208_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "b19e":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_37925883_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f780");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_37925883_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_37925883_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "b1c2":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "b408":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_25d53e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f78d");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_25d53e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_25d53e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "b578":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "b5ab":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "bf98":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_1_id_25d53e92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f669");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_1_id_25d53e92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_1_id_25d53e92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "c15e":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCondensed_vue_vue_type_style_index_1_id_37925883_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9666");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCondensed_vue_vue_type_style_index_1_id_37925883_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCondensed_vue_vue_type_style_index_1_id_37925883_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "c1b8":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "c6bf":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("360e");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "c8a2":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "c8ba":
      /***/
      function (module, exports) {
        var g; // This works in non-strict mode

        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}


        module.exports = g;
        /***/
      },

      /***/
      "cca2":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d75c");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCarousel_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "d0c8":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardCarousel_vue_vue_type_style_index_1_id_365070e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f53f");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardCarousel_vue_vue_type_style_index_1_id_365070e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCardCarousel_vue_vue_type_style_index_1_id_365070e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "d485":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSection_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c1b8");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSection_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSection_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "d49e":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCondensed_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1c2");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCondensed_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionCondensed_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "d4bb":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "d75c":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "da5e":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "daeb":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "dd77":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedAppView_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e0e7");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedAppView_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedAppView_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "e0b6":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_21f95ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("656f");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_21f95ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_21f95ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "e0e7":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "e63e":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_365070e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da5e");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_365070e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_365070e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "edd3":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "f067":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "f301":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_6383fd88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8a2");
        /* harmony import */


        var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_6383fd88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_base_css_vue_type_style_index_0_id_6383fd88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "f53f":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "f669":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "f780":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "f78d":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "fb15":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict"; // ESM COMPAT FLAG

        __webpack_require__.r(__webpack_exports__); // EXPORTS


        __webpack_require__.d(__webpack_exports__, "sharedAppView", function () {
          return (
            /* reexport */
            sharedAppView
          );
        }); // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
        // This file is imported into lib/wc client bundles.


        if (typeof window !== 'undefined') {
          var currentScript = window.document.currentScript;

          if (false) { var getCurrentScript; }

          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);

          if (src) {
            __webpack_require__.p = src[1]; // eslint-disable-line
          }
        } // Indicate to webpack that this file can be concatenated

        /* harmony default export */


        var setPublicPath = null; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/FloatingWidget.vue?vue&type=template&id=019373b8&

        var render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            ref: "floatingModal"
          }, [_c('div', {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.open,
              expression: "open"
            }],
            staticClass: "opw-overlay"
          }, [_vm.open ? _c('div', {
            staticClass: "opw-modal-wrapper",
            on: {
              "click": function ($event) {
                if ($event.target !== $event.currentTarget) {
                  return null;
                }

                return _vm.changeModal.apply(null, arguments);
              }
            }
          }, [_c('div', {
            staticClass: "opw-modal-spacer"
          }, [_c('button', {
            staticClass: "opw-modal-button",
            on: {
              "click": _vm.changeModal
            }
          }, [_c('svg', {
            attrs: {
              "width": "20",
              "height": "20"
            }
          }, [_c('g', {
            attrs: {
              "stroke-width": "3",
              "stroke": 'rgba(255, 255, 255, 255)'
            }
          }, [_c('line', {
            attrs: {
              "x1": "4",
              "y1": "4",
              "x2": "18",
              "y2": "18"
            }
          }), _c('line', {
            attrs: {
              "x1": "4",
              "y1": "18",
              "x2": "18",
              "y2": "4"
            }
          })])])])]), _c('div', {
            staticClass: "opw-modal-window"
          }, [_c('shared-app-view', {
            attrs: {
              "load-config": _vm.loadConfig,
              "load-products": _vm.loadProducts
            }
          })], 1)]) : _vm._e()]), _vm.shopConfig.displayFloatingWidget ? _c('span', {
            staticClass: "opw-cursor-pointer opw-inline-block opw-px-4 opw-py-3 opw-border opw-mt-0 opw-mr-2",
            style: _vm.floatingButtonStyle(),
            on: {
              "click": _vm.changeModal
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " ")]) : _vm._e()]);
        };

        var staticRenderFns = []; // CONCATENATED MODULE: ./src/components/FloatingWidget.vue?vue&type=template&id=019373b8&
        // CONCATENATED MODULE: ./src/utils/object.js

        function importantify(styles) {
          return Object.fromEntries(Object.entries(styles).filter(([_, val]) => ![null, undefined].includes(val)).map(([key, val]) => [key, val + '!important']));
        }

        function snakeToCamel(str) {
          return str.replace(/_[a-z0-9]/g, l => l[1].toUpperCase());
        }

        function camelToSnake(str) {
          return str.replace(/([A-Z]+|[0-9]+)/g, '_$1').toLowerCase();
        }

        function mapObjKeys(obj, mapper) {
          return obj && Object.fromEntries(Object.entries(obj).map(([key, val]) => [mapper(key), val]));
        }

        const isObject = o => Object.prototype.toString.apply(o) === '[object Object]';

        function mapObjKeysRecursive(obj, mapper) {
          return obj && Object.fromEntries(Object.entries(obj).map(([key, val]) => {
            const entry = [mapper(key)];

            if (Array.isArray(val) && val.every(isObject)) {
              entry.push(val.map(o => mapObjKeysRecursive(o, mapper)));
            } else if (isObject(val)) {
              entry.push(mapObjKeysRecursive(val, mapper));
            } else {
              entry.push(val);
            }

            return entry;
          }));
        }

        function deepAssign(source, target) {
          Object.entries(source).forEach(([key, val]) => {
            if (Array.isArray(val)) {
              target[snakeToCamel(key)] = target[snakeToCamel(key)] || [];

              if (val.every(e => typeof e === 'object')) {
                target[snakeToCamel(key)] = val.map(o => mapObjKeysRecursive(o, snakeToCamel));
              } else {
                target[snakeToCamel(key)] = val;
              }
            } else if (val && typeof val === 'object') {
              target[snakeToCamel(key)] = target[snakeToCamel(key)] || {};
              deepAssign(val, target[snakeToCamel(key)]);
            } else {
              if (val !== undefined) {
                target[snakeToCamel(key)] = val;
              }
            }
          });
        } // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/sharedAppView.vue?vue&type=template&id=2a07327c&scoped=true&


        var sharedAppViewvue_type_template_id_2a07327c_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            class: [_vm.showWidgetIfNoReviews ? '' : 'no-reviews-hide-widget', _vm.isCondensed ? 'opw-border opw-border-grey-light' : '', 'opw-my-2', 'opw-leading-normal', 'opw-text-lg', 'opw-text-left', 'opw-px-2', 'xl:opw-px-0'],
            attrs: {
              "id": "opinew-app-container"
            }
          }, [!['minimal', 'clean', 'condensed', 'carousel', 'modern'].includes(_vm.shopConfig.widgetTopSectionStyle) ? _c('shared-navbar', {
            attrs: {
              "title-style": _vm.getFontStyles('navbarReviewsTitleFontSize', 'navbarTextColor'),
              "navbar-buttons": _vm.shopConfig.navbarButtons,
              "navbar-buttons-style": _vm.navbarButtonsStyle,
              "navbar-color": _vm.shopConfig.navbarColor,
              "theme-style": _vm.shopConfig.widgetTopSectionStyle,
              "questions-and-answers-active": _vm.shopConfig.questionsAndAnswersActive
            },
            on: {
              "show-form": function ($event) {
                return _vm.showForm.apply(void 0, $event);
              }
            }
          }) : _vm._e(), _vm.shopNeedsToChoosePlan ? _c('pick-plan') : _c('div', {
            staticClass: "main-content-container "
          }, [_c('div', {
            staticClass: "summary-card-container"
          }, [_vm.shopConfig.widgetTopSectionStyle === 'carousel' ? _c('shared-top-section-carousel', _vm._b({
            on: {
              "change-page": function ($event) {
                _vm.changePage(1, $event[0]);

                _vm.starsFiltered = $event[1];
              },
              "change-tab": function ($event) {
                _vm.activeTab = $event;
              },
              "filter-select": _vm.onSelectFilter,
              "change-slide": function ($event) {
                return _vm.changeSlide($event);
              }
            }
          }, 'shared-top-section-carousel', _vm.topBarProps, false)) : _vm.shopConfig.widgetTopSectionStyle === 'modern' ? _c('shared-top-section-modern', _vm._b({
            on: {
              "change-page": function ($event) {
                _vm.changePage(1, $event[0]);

                _vm.starsFiltered = $event[1];
              },
              "change-tab": function ($event) {
                _vm.activeTab = $event;
              },
              "filter-select": _vm.onSelectFilter,
              "change-slide": function ($event) {
                return _vm.changeSlide($event);
              }
            }
          }, 'shared-top-section-modern', _vm.topBarProps, false)) : _vm.shopConfig.widgetTopSectionStyle === 'minimal' ? _c('shared-top-section-minimal', _vm._b({
            on: {
              "change-page": function ($event) {
                _vm.changePage(1, $event[0]);

                _vm.starsFiltered = $event[1];
              },
              "change-tab": function ($event) {
                _vm.activeTab = $event;
              },
              "filter-select": _vm.onSelectFilter,
              "change-slide": function ($event) {
                return _vm.changeSlide($event);
              }
            }
          }, 'shared-top-section-minimal', _vm.topBarProps, false)) : _vm.shopConfig.widgetTopSectionStyle !== 'default' ? _c('shared-top-section-condensed', _vm._b({
            on: {
              "change-page": function ($event) {
                _vm.changePage(1, $event[0]);

                _vm.starsFiltered = $event[1];
              },
              "change-tab": function ($event) {
                _vm.activeTab = $event;
              },
              "filter-select": _vm.onSelectFilter,
              "change-slide": function ($event) {
                return _vm.changeSlide($event);
              }
            }
          }, 'shared-top-section-condensed', _vm.topBarProps, false)) : _vm._e(), _vm.shopConfig.widgetTopSectionStyle === 'default' ? _c('shared-top-section', _vm._b({
            on: {
              "change-page": function ($event) {
                _vm.changePage(1, $event[0]);

                _vm.starsFiltered = $event[1];
              },
              "change-tab": function ($event) {
                _vm.activeTab = $event;
              },
              "filter-select": _vm.onSelectFilter,
              "change-slide": function ($event) {
                return _vm.changeSlide($event);
              }
            }
          }, 'shared-top-section', _vm.topBarProps, false)) : _vm._e()], 1), _vm.shopConfig.widgetTopSectionStyle === 'carousel' && _vm.activeTab === 'reviews' ? _c('review-container-carousel', {
            attrs: {
              "get-font-styles": _vm.getFontStyles,
              "page-loading": _vm.pageLoading,
              "reviews": _vm.getAllReviews,
              "navbar-buttons": _vm.shopConfig.navbarButtons,
              "carousel-controls-color": _vm.shopConfig.navbarTextColor,
              "carousel-control-style": {
                borderColor: _vm.shopConfig.navbarTextColor
              }
            },
            on: {
              "load-next": _vm.loadNext,
              "show-form": function ($event) {
                _vm.showForm(_vm.shopConfig.navbarButtons.review, _vm.shopConfig.navbarButtons.review.active);

                _vm.scrollToElementbyId('opinew-plugin');
              }
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (ref) {
                var review = ref.review;
                return [_c('review-card-carousel', _vm._b({
                  staticClass: "opw-h-full opw-mb-px",
                  attrs: {
                    "review": review
                  },
                  on: {
                    "show-vid": function ($event) {
                      return _vm.changeSlide($event);
                    },
                    "show-image": function ($event) {
                      return _vm.changeSlide($event);
                    },
                    "show-form": function ($event) {
                      _vm.showForm(_vm.shopConfig.navbarButtons.review, _vm.shopConfig.navbarButtons.review.active);

                      _vm.scrollToElementbyId('opinew-plugin');
                    }
                  }
                }, 'review-card-carousel', _vm.reviewCardProps, false))];
              }
            }], null, false, 1192384903)
          }) : _vm.activeTab === 'reviews' ? _c('review-container', {
            attrs: {
              "theme-style": _vm.shopConfig.widgetTopSectionStyle,
              "get-font-styles": _vm.getFontStyles,
              "navbar-color": _vm.shopConfig.navbarColor,
              "navbar-buttons": _vm.shopConfig.navbarButtons,
              "number-review-columns": _vm.shopConfig.numberReviewColumns,
              "change-page": _vm.changePage,
              "generate-column-number-styles": _vm.generateColumnNumberStyles,
              "page-count": _vm.pageCount,
              "review-column-buckets": _vm.reviewColumnBuckets,
              "reviews": _vm.reviews,
              "link-color": _vm.shopConfig.paginationColor,
              "table-view": _vm.shopConfig.widgetTopSectionStyle === 'modern'
            },
            on: {
              "show-form": function ($event) {
                _vm.showForm(_vm.shopConfig.navbarButtons.review, _vm.shopConfig.navbarButtons.review.active);

                _vm.scrollToElementbyId('opinew-plugin');
              }
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (ref) {
                var review = ref.review;
                return [_vm.shopConfig.widgetTopSectionStyle === 'modern' ? _vm._l(_vm.reviews, function (rev) {
                  return _c('review-card-modern', _vm._b({
                    key: rev.id,
                    attrs: {
                      "review": rev
                    },
                    on: {
                      "show-vid": function ($event) {
                        return _vm.changeSlide($event);
                      },
                      "show-image": function ($event) {
                        return _vm.changeSlide($event);
                      }
                    }
                  }, 'review-card-modern', _vm.reviewCardProps, false));
                }) : [_vm.isCondensed ? _c('review-card-clean', _vm._b({
                  attrs: {
                    "review": review,
                    "number-review-columns": _vm.shopConfig.numberReviewColumns
                  },
                  on: {
                    "show-vid": function ($event) {
                      return _vm.changeSlide($event);
                    },
                    "show-image": function ($event) {
                      return _vm.changeSlide($event);
                    }
                  }
                }, 'review-card-clean', _vm.reviewCardProps, false)) : _c('review-card', _vm._b({
                  attrs: {
                    "review": review
                  },
                  on: {
                    "show-vid": function ($event) {
                      return _vm.changeSlide($event);
                    },
                    "show-image": function ($event) {
                      return _vm.changeSlide($event);
                    }
                  }
                }, 'review-card', _vm.reviewCardProps, false))]];
              }
            }])
          }) : _vm._e(), _vm.shopConfig.questionsAndAnswersActive && _vm.activeTab === 'questions' ? _c('questions-answers', {
            class: {
              'opw-mt-3': _vm.isCondensed
            },
            attrs: {
              "theme": _vm.shopConfig.widgetTopSectionStyle,
              "questions-exist": _vm.questions && _vm.questions.length,
              "get-font-styles": _vm.getFontStyles,
              "border-style": _vm.reviewsBgBorderStyle,
              "link-color": _vm.shopConfig.paginationColor,
              "navbar-buttons": _vm.shopConfig.navbarButtons,
              "carousel-control-style": {
                borderColor: _vm.shopConfig.navbarTextColor
              },
              "reviews-bg-border-style": _vm.reviewsBgBorderStyle,
              "questions-per-page": _vm.questionsPerPage,
              "questions-paginated": _vm.questionsPaginated,
              "page-count-questions": _vm.pageCountQuestions,
              "fetch-page-questions": _vm.fetchPageQuestions,
              "show-form": _vm.showQAForm
            }
          }) : _vm._e()], 1), !_vm.shopConfig.permissions.noBranding ? _c('div', {
            staticClass: "opw-text-center opw-text-sm opw-border-solid opw-border-0 opw-mt-3 opw-py-3"
          }, [_vm._v(" Powered by "), _c('a', {
            attrs: {
              "href": "https://opinew.com",
              "target": "_blank"
            }
          }, [_vm._v("Opinew")])]) : _vm._e(), _c('opinew-gallery', {
            attrs: {
              "images": _vm.slides,
              "index": _vm.slideIndex,
              "url": _vm.currentImageUrl,
              "disable-scroll": true,
              "reviews-stars-style": _vm.getFontStyles('reviewsCardSecondaryTextStyle', 'starsColor'),
              "author-style": _vm.getFontStyles('starSummaryReviewsnumFontSize'),
              "verified-style": _vm.reviewsCardVerifiedStyle
            },
            on: {
              "update:value": _vm.changeSlide,
              "close": function ($event) {
                _vm.currentImageUrl = null;
              }
            }
          }), _c('div', {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.shopConfig.navbarButtons.review.active || _vm.shopConfig.navbarButtons.question.active || _vm.shopConfig.navbarButtons.question.thankyouScreen,
              expression: "\n      shopConfig.navbarButtons.review.active ||\n        shopConfig.navbarButtons.question.active ||\n        shopConfig.navbarButtons.question.thankyouScreen\n    "
            }],
            ref: "reviewModal",
            staticClass: "opw-review-form-container opw-px-4 opw-bg-white opw-shadow-lg opw-overflow-hidden"
          }, [_c('div', {
            staticClass: "opw-review-modal-content opw-pr-8 opw-h-full opw-overflow-y-auto opw-overflow-x-hidden"
          }, [_c('span', {
            staticClass: "close-icon",
            on: {
              "click": _vm.closeModal
            }
          }, [_c('close-icon')], 1), _vm.shopConfig.navbarButtons.review.active ? _c('review-request', {
            attrs: {
              "review": _vm.mappedReview(),
              "admin": _vm.admin,
              "platform-product-id": _vm.platformProductId
            },
            on: {
              "hide": _vm.closeModal
            }
          }) : _vm.shopConfig.navbarButtons.question.active ? _c('write-question', {
            attrs: {
              "navbar-buttons": _vm.shopConfig.navbarButtons,
              "form-post-button-style": _vm.formPostButtonStyle,
              "get-font-styles": _vm.getFontStyles,
              "review-details": _vm.reviewDetails
            },
            on: {
              "question-sent": function ($event) {
                _vm.canProceedWithQuestion = true;

                _vm.hideNavbar();

                _vm.hideThankYouScreen('question');
              }
            }
          }) : _vm._e()], 1)])], 1);
        };

        var sharedAppViewvue_type_template_id_2a07327c_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/sharedAppView.vue?vue&type=template&id=2a07327c&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=751a6d08&scoped=true&

        var Paginationvue_type_template_id_751a6d08_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('ul', {
            staticClass: "opw-paginator-container opw-pl-0"
          }, [_c('li', {
            staticClass: "opw-paginator-li opw-flex opw-items-center",
            class: _vm.currentPage === 1 ? 'disabled' : 'cursor-pointer',
            attrs: {
              "tabindex": "0"
            },
            on: {
              "click": function ($event) {
                return _vm.changePage(_vm.currentPage - 1);
              }
            }
          }, [_c('div', {
            staticClass: "opw-arrow opw-back"
          })]), _c('li', {
            staticClass: "opw-paginator-li",
            class: _vm.currentPage === 1 ? 'disabled' : 'cursor-pointer',
            attrs: {
              "tabindex": "0"
            },
            on: {
              "click": function ($event) {
                return _vm.changePage(1);
              }
            }
          }, [_c('span', {
            staticClass: "opw-paginator-a"
          }, [_vm._v("1")])]), _vm.currentPage >= 4 ? _c('li', {
            staticClass: "opw-paginator-li disabled",
            attrs: {
              "tabindex": "-1"
            }
          }, [_c('span', {
            staticClass: "opw-paginator-a"
          }, [_vm._v("…")])]) : _vm._e(), _vm._l(_vm.pageRange, function (page) {
            return _c('li', {
              key: page,
              staticClass: "opw-paginator-li",
              class: page === _vm.currentPage ? 'opw-paginator-active-class' : 'cursor-pointer',
              attrs: {
                "tabindex": "0"
              },
              on: {
                "click": function ($event) {
                  return _vm.changePage(page);
                }
              }
            }, [_c('span', {
              staticClass: "opw-paginator-a"
            }, [_vm._v(_vm._s(page))])]);
          }), _vm.pageCount - _vm.currentPage >= 3 ? _c('li', {
            staticClass: "opw-paginator-li disabled",
            attrs: {
              "tabindex": "-1"
            }
          }, [_c('span', {
            staticClass: "opw-paginator-a"
          }, [_vm._v("…")])]) : _vm._e(), _vm.pageCount > 1 ? _c('li', {
            staticClass: "opw-paginator-li",
            class: _vm.pageCount === _vm.currentPage ? 'opw-paginator-active-class' : 'cursor-pointer',
            attrs: {
              "tabindex": "0"
            },
            on: {
              "click": function ($event) {
                return _vm.changePage(_vm.pageCount);
              }
            }
          }, [_c('span', {
            staticClass: "opw-paginator-a"
          }, [_vm._v(" " + _vm._s(_vm.pageCount) + " ")])]) : _vm._e(), _c('li', {
            staticClass: "opw-paginator-li opw-flex opw-items-center",
            class: _vm.currentPage === _vm.pageCount ? 'disabled' : 'cursor-pointer',
            attrs: {
              "tabindex": "0"
            },
            on: {
              "click": function ($event) {
                return _vm.changePage(_vm.currentPage + 1);
              }
            }
          }, [_c('div', {
            staticClass: "opw-arrow opw-next"
          })])], 2);
        };

        var Paginationvue_type_template_id_751a6d08_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=template&id=751a6d08&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var Paginationvue_type_script_lang_js_ = {
          name: 'Rating',
          model: {
            event: 'update:value',
            prop: 'value'
          },
          props: {
            pageCount: {
              type: Number,
              default: 1
            }
          },

          data() {
            return {
              currentPage: 1
            };
          },

          methods: {
            changePage(page) {
              if (page !== this.currentPage && page > 0 && page <= this.pageCount) {
                this.currentPage = page;
                this.$emit('change', page);
              }
            }

          },
          computed: {
            pageRange() {
              let min = Math.max(1, this.currentPage - 1);
              min = Math.min(this.pageCount - 2, min);
              return new Array(3).fill(min).map((v, i) => v + i).filter(v => v && ![1, this.pageCount].includes(v));
            }

          }
        }; // CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_Paginationvue_type_script_lang_js_ = Paginationvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/Pagination.vue?vue&type=style&index=0&id=751a6d08&scoped=true&lang=scss&

        var Paginationvue_type_style_index_0_id_751a6d08_scoped_true_lang_scss_ = __webpack_require__("fbb9"); // CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js

        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.


        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
        /* server only */
        shadowMode
        /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          } // functional template


          if (functionalTemplate) {
            options.functional = true;
          } // scopedId


          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }

          var hook;

          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context = context || // cached call
              this.$vnode && this.$vnode.ssrContext || // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true

              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              } // inject component styles


              if (injectStyles) {
                injectStyles.call(this, context);
              } // register component module identifier for async chunk inferrence


              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            }; // used by ssr in case component is cached and beforeCreate
            // never gets called


            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
            } : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook; // register for functional component in vue file

              var originalRender = options.render;

              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }

          return {
            exports: scriptExports,
            options: options
          };
        } // CONCATENATED MODULE: ./src/components/Pagination.vue

        /* normalize component */


        var component = normalizeComponent(components_Paginationvue_type_script_lang_js_, Paginationvue_type_template_id_751a6d08_scoped_true_render, Paginationvue_type_template_id_751a6d08_scoped_true_staticRenderFns, false, null, "751a6d08", null);
        /* harmony default export */

        var Pagination = component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewRequest.vue?vue&type=template&id=0be1356c&scoped=true&

        var ReviewRequestvue_type_template_id_0be1356c_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            attrs: {
              "id": "opw-review-request-form"
            }
          }, [_vm.mainConfig.requestFormImageUrl ? _c('div', {
            staticClass: "opw-text-center opw-mb-2"
          }, [_c('img', {
            staticClass: "opw-shop-logo opw-mx-auto opw-object-contain",
            attrs: {
              "src": _vm.mainConfig.requestFormImageUrl,
              "alt": ""
            }
          }), _c('div', {
            staticClass: "opw-bg-grey-light opw-my-4 opw-py-px opw-h-px"
          })]) : _c('div', {
            staticClass: "opw-py-8"
          }), _vm._l(_vm.reviewList, function (prod, i) {
            return _c('div', {
              key: 'prod-rev-' + i,
              staticClass: "opw-height-transition opw-mb-4"
            }, [_vm.showThankYouMessage == prod.id ? [_c('thank-you-message', {
              attrs: {
                "reviewer-name": _vm.reviewResponseBody.reviewer.name
              }
            }), _c('div', {
              staticClass: "opw-text-center"
            }, [_c('div', {
              staticClass: "\n          opw-py-2\n          opw-px-4\n          opw-text-grey-darkest\n          opw-cursor-pointer\n          opw-border\n          opw-border-solid\n          opw-btn\n          opw-delicate-grey\n          hover:opw-bg-grey\n          opw-rounded\n          opw-inline-block\n          opw-uppercase\n          opw-text-base\n          opw-font-sans\n      ",
              on: {
                "click": _vm.redirectToThankYouPage
              }
            }, [_vm._v(" " + _vm._s(_vm.$t('general.finish')) + " ")])])] : prod.review && !prod.isEditing ? _c('review-products', {
              attrs: {
                "product": prod,
                "reviews-card-stars-style": _vm.reviewsCardStarsStyle
              },
              on: {
                "edit": function ($event) {
                  return _vm.setEditing(i, true);
                },
                "delete-review": function ($event) {
                  return _vm.deleteReview(prod);
                }
              }
            }) : _c('review-form', {
              attrs: {
                "config": _vm.mainConfig,
                "product": prod,
                "active-type": _vm.activeType,
                "reviewer": _vm.reviewResponseBody.reviewer,
                "review-request": _vm.isReviewRequest(),
                "is-widget": !!_vm.testData || _vm.isWidget,
                "is-unverified-create-widget": _vm.isUnverifiedCreateWidget,
                "admin": _vm.admin,
                "platform-product-id": _vm.platformProductId,
                "shop-id": +_vm.urlParams.shop_id
              },
              on: {
                "data-saved": _vm.redirectIfOneProduct,
                "hide": function ($event) {
                  return _vm.$emit('hide');
                }
              }
            })], 2);
          }), _vm.reviewList.every(function (p) {
            return !p.isEditing && p.review;
          }) && !_vm.showThankYouMessage ? _c('div', {
            staticClass: "opw-mt-3 opw-text-center"
          }, [_c('button', {
            staticClass: "\n         opw-py-2\n          opw-px-4\n          opw-text-grey-darkest\n          opw-cursor-pointer\n          opw-border\n          opw-border-solid\n          opw-btn\n          opw-delicate-grey\n          hover:opw-bg-grey\n          opw-rounded\n          opw-uppercase\n          opw-text-base\n          opw-font-sans\n          opw-inline-block\n      ",
            on: {
              "click": function ($event) {
                return _vm.redirectToThankYouPage();
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('general.finish')) + " ")])]) : _vm._e(), !_vm.isWidget ? _c('div', [_c('div', {
            staticClass: "opw-bg-grey-light opw-my-4 opw-py-px opw-h-px"
          }), _vm._m(0)]) : _vm._e()], 2);
        };

        var ReviewRequestvue_type_template_id_0be1356c_scoped_true_staticRenderFns = [function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-py-4 opw-flex opw-justify-between opw-items-center opw-font-sans"
          }, [_c('img', {
            attrs: {
              "src": "https://cdn.opinew.com/dashboard/images/opinew_logo.png",
              "alt": "Opinew logo"
            }
          }), _c('a', {
            staticClass: "opw-text-grey-darkest",
            attrs: {
              "href": "https://www.opinew.com",
              "target": "_blank"
            }
          }, [_vm._v(" www.opinew.com ")])]);
        }]; // CONCATENATED MODULE: ./src/components/ReviewRequest.vue?vue&type=template&id=0be1356c&scoped=true&
        // CONCATENATED MODULE: ./src/plugins/fetch.js

        function getUrl(path) {
          const BASE_URL = window.OPW_API_ENDPOINT || Object({
            "NODE_ENV": "production",
            "BASE_URL": "/"
          }).VUE_APP_API_ENDPOINT || 'http://localhost:5000';
          return path.slice(0, 4) === 'http' ? path : BASE_URL + path;
        }

        async function handleResponse(resp) {
          if (!resp.ok) {
            throw new Error(`Invalid server resp: ${resp.statusText} (${resp.status})`);
          }

          return mapObjKeysRecursive(await resp.json(), snakeToCamel);
        }

        async function get(path, params) {
          let query = '';

          if (params) {
            query = Object.entries(params).reduce((q, [key, val]) => q + `${key}=${val}&`, '?');
          }

          const response = await fetch(getUrl(path + query));
          return handleResponse(response);
        }

        async function post(path, data, headers) {
          const isFormData = data instanceof FormData;
          const ct = isFormData ? {} : {
            'Content-Type': 'application/json'
          };
          const response = await fetch(getUrl(path), {
            headers: { ...ct,
              ...headers
            },
            method: 'POST',
            body: isFormData ? data : JSON.stringify(mapObjKeysRecursive(data, camelToSnake))
          });
          return handleResponse(response);
        } // CONCATENATED MODULE: ./src/services/service.js


        const BASEURL = '/api/reviews';
        /* harmony default export */

        var service = {
          sendPhoto(data) {
            return post('/media/upload/review', data).catch(function (error) {
              console.error(error);
            });
          },

          startVideoUpload(data) {
            return post('/media/upload-video/review', mapObjKeys(data, camelToSnake)).catch(function (error) {
              console.error(error);
            });
          },

          postCreateReview(data) {
            return this.postData(`${BASEURL}/create`, data);
          },

          postDeleteReview(data, reviewId, reviewEditToken, reviewRequestToken) {
            return this.postData(`${BASEURL}/${reviewId}/delete?review_edit_token=${reviewEditToken}&review_request_token=${reviewRequestToken}`, data);
          },

          postEditReview(data, reviewId) {
            return this.postData(`${BASEURL}/${reviewId}/edit`, data);
          },

          postUnverifiedReview(data) {
            return this.postData(`${BASEURL}/create`, data);
          },

          getEditReview(data, reviewId) {
            return this.getData(`${BASEURL}/${reviewId}/edit`, data);
          },

          getFirstReview(params) {
            return this.getData(`${BASEURL}/create`, params);
          },

          getUnverifiedEditReview(params, reviewId) {
            return this.getData(`${BASEURL}/${reviewId}/edit`, params);
          },

          getData(url, params) {
            return get(url, params);
          },

          postData(url, data) {
            return post(url, data);
          },

          getExampleWidgets() {
            return get('/get-example-widgets');
          }

        }; // CONCATENATED MODULE: ./src/mixins/configMixin.js

        /* harmony default export */

        var configMixin = {
          props: {
            loadConfig: {
              type: Object,
              default: () => {}
            }
          },

          data() {
            return {
              shopConfig: {} // defaultConfig: {},

            };
          },

          methods: {
            getAbTestCookie() {
              const name = 'opinew_ab_test_sorting';
              const nameEQ = name + '=';
              const allCookies = document.cookie.split(';');

              for (let cookie of allCookies) {
                cookie = cookie.trim();

                if (cookie.indexOf(nameEQ) == 0) {
                  return cookie.substring(nameEQ.length, cookie.length);
                }
              } // no ab test cookie set, use random value and save it as cookie that expires in 5 days


              const sorting = ['smart', 'recent', 'content'];
              const randomSorting = sorting[Math.floor(Math.random() * sorting.length)];
              const date = new Date();
              date.setTime(date.getTime() + 5 * 24 * 60 * 60 * 1000);
              const expires = '; expires=' + date.toUTCString();
              document.cookie = name + '=' + randomSorting + expires + '; path=/';
              return randomSorting;
            }

          },
          watch: {
            loadConfig: {
              handler(config) {
                // Copy object
                const configObject = JSON.parse(JSON.stringify(this.shopConfig));

                if (config) {
                  deepAssign(config, configObject);
                  this.$i18n.locale = configObject.preferredLanguage || this.$i18n.locale; // code for evaluation of smart sorting ab test

                  if (configObject.abTestActive && !configObject.admin) {
                    configObject.defaultSorting = this.getAbTestCookie();
                  }

                  if (!(configObject.permissions || {}).qAndA) {
                    configObject.questionsAndAnswersActive = false;
                  }
                }

                this.shopConfig = configObject;
              },

              deep: true,
              immediate: true
            }
          }
        }; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/ThankYouMessage.vue?vue&type=template&id=725a9a20&functional=true&

        var ThankYouMessagevue_type_template_id_725a9a20_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', {
            staticClass: "opw-mt-3"
          }, [_c('div', {
            staticClass: "opw-text-center opw-py-8"
          }, [_c('div', {
            staticClass: "opw-text-3xl opw-font-sans opw-my-8"
          }, [_vm._v(" " + _vm._s(_vm.parent.$t('general.reviewSent')) + " ")])])]);
        };

        var ThankYouMessagevue_type_template_id_725a9a20_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/ThankYouMessage.vue?vue&type=template&id=725a9a20&functional=true&
        // CONCATENATED MODULE: ./src/components/functional/ThankYouMessage.vue

        var script = {};
        /* normalize component */

        var ThankYouMessage_component = normalizeComponent(script, ThankYouMessagevue_type_template_id_725a9a20_functional_true_render, ThankYouMessagevue_type_template_id_725a9a20_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var ThankYouMessage = ThankYouMessage_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewProducts.vue?vue&type=template&id=b8ab2bc2&

        var ReviewProductsvue_type_template_id_b8ab2bc2_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', [_c('div', {
            staticClass: "opw-flex opw-justify-center opw-items-center opw-mb-2"
          }, [_vm.product.productImageUrl ? _c('img', {
            staticClass: "opw-h-16 opw-w-16",
            attrs: {
              "src": _vm.product.productImageUrl,
              "alt": ""
            }
          }) : _vm._e(), _c('div', {
            staticClass: "opw-text-base opw-font-medium opw-flex-grow opw-mx-4"
          }, [_vm._v(" " + _vm._s(_vm.product.name) + " ")])]), _vm.product.review ? _c('div', {
            staticClass: "opw-flex"
          }, [_c('div', {
            staticClass: "opw-flex-grow opw-flex opw-flex-col opw-justify-start"
          }, [_c('stars', {
            staticClass: "opw-text-2xl opw-mb-4",
            attrs: {
              "rating": _vm.product.review.starRating,
              "reviews-card-stars-style": _vm.reviewsCardStarsStyle
            }
          }), _c('div', {
            staticClass: "opw-text-body-2"
          }, [_vm._v(" " + _vm._s(_vm.product.review.body) + " ")]), _c('div', {
            staticClass: "opw-py-2 opw-uppercase opw-mt-auto opw-flex"
          }, [_c('button', {
            staticClass: "\n          opw-py-2\n          opw-px-4\n          opw-mr-4\n          opw-cursor-pointer\n          opw-items-center\n          opw-justify-center\n          opw-border-none\n          opw-delicate-grey\n          hover:opw-bg-grey\n          opw-rounded\n          opw-uppercase\n          opw-flex\n          opw-text-base\n          opw-font-sans",
            on: {
              "click": function ($event) {
                return _vm.$emit('edit');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('reviewForm.edit')) + " ")]), _c('button', {
            staticClass: " opw-py-2\n          opw-px-4\n          opw-cursor-pointer\n          opw-items-center\n          opw-justify-center\n          opw-border-none\n          opw-delicate-grey\n          hover:opw-bg-grey\n          opw-rounded\n          opw-uppercase\n          opw-flex\n          opw-text-base\n          opw-font-sans",
            on: {
              "click": function ($event) {
                return _vm.$emit('delete-review');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('reviewForm.delete')) + " ")])])], 1), _vm.product.review.videoURL || _vm.product.review.imageUrls && _vm.product.review.imageUrls.length ? _c('div', {
            staticClass: "opw-flex-shrink-0"
          }, [_c('shared-thumbnails', {
            attrs: {
              "condensed": "",
              "num-featured-images": 6,
              "slides": _vm.thumbs(_vm.product)
            }
          })], 1) : _vm._e()]) : _vm._e()]);
        };

        var ReviewProductsvue_type_template_id_b8ab2bc2_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewProducts.vue?vue&type=template&id=b8ab2bc2&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Stars.vue?vue&type=template&id=31c4636e&scoped=true&

        var Starsvue_type_template_id_31c4636e_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('span', _vm._l(5, function (starNumber) {
            return _c('span', {
              key: starNumber
            }, [_vm.roundedRating >= starNumber ? _c('i', {
              staticClass: "opw-noci opw-noci-star-full",
              style: _vm.reviewsCardStarsStyle,
              attrs: {
                "aria-hidden": "true"
              }
            }) : _vm.halfStars && _vm.roundedRating + 0.5 >= starNumber ? _c('i', {
              staticClass: "opw-noci opw-noci-star-half",
              style: _vm.reviewsCardStarsStyle,
              attrs: {
                "aria-hidden": "true"
              }
            }) : _c('i', {
              staticClass: "opw-noci opw-noci-star-empty",
              style: _vm.reviewsCardStarsStyle,
              attrs: {
                "aria-hidden": "true"
              }
            })]);
          }), 0);
        };

        var Starsvue_type_template_id_31c4636e_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/Stars.vue?vue&type=template&id=31c4636e&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Stars.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var Starsvue_type_script_lang_js_ = {
          name: 'Stars',
          props: {
            reviewsCardStarsStyle: {
              type: Object,
              default: () => {}
            },
            rating: {
              type: Number,
              default: 0
            },
            halfStars: {
              type: Boolean,
              default: false
            }
          },
          computed: {
            roundedRating() {
              return this.halfStars ? Math.ceil(this.rating * 2) / 2 : Math.round(this.rating);
            }

          }
        }; // CONCATENATED MODULE: ./src/components/Stars.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_Starsvue_type_script_lang_js_ = Starsvue_type_script_lang_js_; // CONCATENATED MODULE: ./src/components/Stars.vue

        /* normalize component */

        var Stars_component = normalizeComponent(components_Starsvue_type_script_lang_js_, Starsvue_type_template_id_31c4636e_scoped_true_render, Starsvue_type_template_id_31c4636e_scoped_true_staticRenderFns, false, null, "31c4636e", null);
        /* harmony default export */

        var Stars = Stars_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/SharedThumbnails.vue?vue&type=template&id=3c0afc75&scoped=true&functional=true&

        var SharedThumbnailsvue_type_template_id_3c0afc75_scoped_true_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', {
            staticClass: "\n    opw-all-photos-container\n  ",
            class: [_vm.data.class, _vm.data.staticClass]
          }, [_c('div', {
            staticClass: "md:opw-float-right opw-m-0 opw-flex opw-flex-wrap lg:opw-grid lg:opw-grid-cols-3 opw-justify-center"
          }, _vm._l(_vm.props.slides.slice(0, _vm.props.numFeaturedImages), function (ref) {
            var img = ref[0];
            return _c('span', {
              key: img,
              staticClass: "\n            opw-centered-video-gallery-container-small\n            opw-cursor-pointer opw-m-1\n          ",
              on: {
                "click": function ($event) {
                  return _vm.parent.$emit('change-slide', img);
                }
              }
            }, [/(vimeo|youtu\.?be)/i.test(img) ? [_c('play-icon'), _c('lazy-img', {
              attrs: {
                "css-class": "opw-review-image-thumbnail opw-border",
                "lazy-src": _vm.props.videoThumbnails[img]
              }
            })] : [_c('lazy-img', {
              attrs: {
                "css-class": "opw-review-image-thumbnail opw-border",
                "lazy-src": img
              }
            })]], 2);
          }), 0)]);
        };

        var SharedThumbnailsvue_type_template_id_3c0afc75_scoped_true_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/SharedThumbnails.vue?vue&type=template&id=3c0afc75&scoped=true&functional=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/PlayIcon.vue?vue&type=template&id=2207a57e&functional=true&

        var PlayIconvue_type_template_id_2207a57e_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('span', {
            staticClass: "opw-play-btn opw-play-btn-small"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]);
        };

        var PlayIconvue_type_template_id_2207a57e_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/PlayIcon.vue?vue&type=template&id=2207a57e&functional=true&
        // CONCATENATED MODULE: ./src/components/functional/PlayIcon.vue

        var PlayIcon_script = {};
        /* normalize component */

        var PlayIcon_component = normalizeComponent(PlayIcon_script, PlayIconvue_type_template_id_2207a57e_functional_true_render, PlayIconvue_type_template_id_2207a57e_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var PlayIcon = PlayIcon_component.exports; // EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}

        var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

        var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_); // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LazyImg.vue?vue&type=template&id=7247eff6&


        var LazyImgvue_type_template_id_7247eff6_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('img', {
            staticClass: "opw-rounded-none",
            class: _vm.cssClass,
            style: _vm.style,
            attrs: {
              "src": _vm.url,
              "srcset": _vm.srcset,
              "alt": _vm.alt
            }
          });
        };

        var LazyImgvue_type_template_id_7247eff6_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/LazyImg.vue?vue&type=template&id=7247eff6&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LazyImg.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var LazyImgvue_type_script_lang_js_ = {
          name: 'LazyImg',
          props: {
            backgroundColor: {
              type: String,
              default: '#efefef'
            },
            height: {
              type: Number,
              default: null
            },
            lazySrc: {
              type: String,
              default: null
            },
            lazySrcset: {
              type: String,
              default: null
            },
            width: {
              type: Number,
              default: null
            },
            cssClass: {
              type: String,
              default: 'AppImage'
            },
            alt: {
              type: String,
              default: null
            }
          },

          data() {
            return {
              loading: true,
              show: false
            };
          },

          computed: {
            url() {
              return this.show ? this.lazySrc : '';
            },

            srcset() {
              return this.show ? this.lazySrcset : '';
            },

            aspectRatio() {
              // Calculate the aspect ratio of the image
              // if the width and the height are given.
              if (!this.width || !this.height) return null;
              return this.height / this.width * 100;
            },

            style() {
              // The background color is used as a
              // placeholder while loading the image.
              // You can use the dominant color of the
              // image to improve perceived performance.
              // See: https://manu.ninja/dominant-colors-for-lazy-loading-images/
              const style = {
                backgroundColor: this.backgroundColor
              };
              if (this.width) style.width = `${this.width}px`; // If the image is still loading and an
              // aspect ratio could be calculated, we
              // apply the calculated aspect ratio by
              // using padding top.

              const applyAspectRatio = this.loading && this.aspectRatio;

              if (applyAspectRatio) {
                // Prevent flash of unstyled image
                // after the image is loaded.
                style.height = 0; // Scale the image container according
                // to the aspect ratio.

                style.paddingTop = `${this.aspectRatio}%`;
              }

              return style;
            }

          },
          methods: {
            setLoadingState() {
              this.loading = false;
            }

          },

          mounted() {
            // As soon as the <img> element triggers
            // the `load` event, the loading state is
            // set to `false`, which removes the apsect
            // ratio we've applied earlier.
            this.$el.addEventListener('load', this.setLoadingState);

            if (this.$el.getBoundingClientRect().top < window.innerHeight) {
              this.show = true;
            } else {
              const intersectionHandler = ([entry]) => {
                if (entry.intersectionRatio > 0) {
                  this.show = true;
                }
              };

              const intersectionObserver = new IntersectionObserver(intersectionHandler);
              intersectionObserver.observe(this.$el);
            }
          },

          beforeDestroy() {
            // We remove the event listener as soon as
            // the component is destroyed to prevent
            // potential memory leaks.
            this.$el.removeEventListener('load', this.setLoadingState);
          }

        }; // CONCATENATED MODULE: ./src/components/LazyImg.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_LazyImgvue_type_script_lang_js_ = LazyImgvue_type_script_lang_js_; // CONCATENATED MODULE: ./src/components/LazyImg.vue

        /* normalize component */

        var LazyImg_component = normalizeComponent(components_LazyImgvue_type_script_lang_js_, LazyImgvue_type_template_id_7247eff6_render, LazyImgvue_type_template_id_7247eff6_staticRenderFns, false, null, null, null);
        /* harmony default export */

        var LazyImg = LazyImg_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/SharedThumbnails.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('PlayIcon', PlayIcon);
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('LazyImg', LazyImg);
        /* harmony default export */

        var SharedThumbnailsvue_type_script_lang_js_ = {
          name: 'Thumbnails'
        }; // CONCATENATED MODULE: ./src/components/functional/SharedThumbnails.vue?vue&type=script&lang=js&

        /* harmony default export */

        var functional_SharedThumbnailsvue_type_script_lang_js_ = SharedThumbnailsvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/functional/SharedThumbnails.vue?vue&type=style&index=0&id=3c0afc75&lang=scss&scoped=true&

        var SharedThumbnailsvue_type_style_index_0_id_3c0afc75_lang_scss_scoped_true_ = __webpack_require__("5e0c"); // CONCATENATED MODULE: ./src/components/functional/SharedThumbnails.vue

        /* normalize component */


        var SharedThumbnails_component = normalizeComponent(functional_SharedThumbnailsvue_type_script_lang_js_, SharedThumbnailsvue_type_template_id_3c0afc75_scoped_true_functional_true_render, SharedThumbnailsvue_type_template_id_3c0afc75_scoped_true_functional_true_staticRenderFns, true, null, "3c0afc75", null);
        /* harmony default export */

        var SharedThumbnails = SharedThumbnails_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewProducts.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewProductsvue_type_script_lang_js_ = {
          name: 'ReviewProducts',
          components: {
            Stars: Stars,
            SharedThumbnails: SharedThumbnails
          },
          props: {
            product: {
              type: Object,
              default: () => ({})
            },
            reviewsCardStarsStyle: {
              type: Object,
              default: () => {}
            }
          },
          methods: {
            thumbs(product) {
              const {
                imageUrls
              } = product.review;
              return imageUrls.map(i => i.url).filter(t => !!t).map(t => [t, product.review]);
            }

          }
        }; // CONCATENATED MODULE: ./src/components/ReviewProducts.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewProductsvue_type_script_lang_js_ = ReviewProductsvue_type_script_lang_js_; // CONCATENATED MODULE: ./src/components/ReviewProducts.vue

        /* normalize component */

        var ReviewProducts_component = normalizeComponent(components_ReviewProductsvue_type_script_lang_js_, ReviewProductsvue_type_template_id_b8ab2bc2_render, ReviewProductsvue_type_template_id_b8ab2bc2_staticRenderFns, false, null, null, null);
        /* harmony default export */

        var ReviewProducts = ReviewProducts_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewForm.vue?vue&type=template&id=328ee193&scoped=true&

        var ReviewFormvue_type_template_id_328ee193_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-pb-4 review-body-wrapper"
          }, [_vm.showReviewForm ? _c('div', {
            staticClass: "opw-grid xs:opw-grid-cols-1 gap-2 opw-grid-rows-auto opw-justify-center opw-flex-wrap",
            class: _vm.isWidget ? '' : 'lg:opw-grid-cols-2'
          }, [!_vm.isWidget ? _c('div', {
            staticClass: "opw-flex opw-flex-col opw-items-center opw-justify-center opw-px-4"
          }, [_c('div', {
            staticClass: "opw-text-xl opw-mb-2"
          }, [_vm._v(" " + _vm._s(_vm.product.name) + " ")]), _vm.product.productImageUrl ? _c('img', {
            staticClass: "opw-centered-img-preview opw-w-auto ",
            attrs: {
              "alt": "",
              "src": _vm.product.productImageUrl,
              "width": "100%"
            }
          }) : _vm._e()]) : _vm._e(), _c('div', {}, [!_vm.isWidget ? _c('div', {
            staticClass: "opw-text-xl opw-font-bold "
          }, [_vm._v(" " + _vm._s(_vm.product.name) + " ")]) : _vm._e(), _c('div', {
            staticClass: "opw-mb-4 opw-mt-3"
          }, [_c('rating', {
            attrs: {
              "active-color": _vm.config.requestFormStarsColor,
              "item-size": _vm.config.widgetTopSectionStyle === 'minimal' ? 36 : 44
            },
            model: {
              value: _vm.review.starRating,
              callback: function ($$v) {
                _vm.$set(_vm.review, "starRating", _vm._n($$v));
              },
              expression: "review.starRating"
            }
          })], 1), _c('div', {}, [_c('label', {
            staticClass: "opw-block opw-mb-2 opw-font-regular",
            class: _vm.config.widgetTopSectionStyle === 'minimal' && 'opw-text-center',
            style: _vm.formHeadingsStyle,
            attrs: {
              "for": "username"
            }
          }, [_vm._v(_vm._s(_vm.$t('reviewForm.name')))]), _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.author.name,
              expression: "author.name"
            }],
            staticClass: "\n          opw-rounded\n          opw-box-border\n          opw-border\n          opw-border-grey-light\n          opw-text-black\n          opw-h-8\n          opw-delicate-grey\n          opw-w-full\n          opw-max-w-full\n          opw-py-2\n          opw-px-3\n          opw-mb-6\n          opw-border-inset\n        ",
            style: _vm.formInputStyle,
            attrs: {
              "type": "text",
              "id": "username",
              "placeholder": _vm.$t('reviewForm.namePlaceholder')
            },
            domProps: {
              "value": _vm.author.name
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.$set(_vm.author, "name", $event.target.value);
              }
            }
          })]), _c('div', {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.isWidget,
              expression: "isWidget"
            }]
          }, [_c('label', {
            staticClass: "opw-block  opw-mb-2",
            class: _vm.config.widgetTopSectionStyle === 'minimal' && 'opw-text-center',
            style: _vm.formHeadingsStyle,
            attrs: {
              "for": "email"
            }
          }, [_vm._v(_vm._s(_vm.$t('generalForm.email')))]), _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.author.email,
              expression: "author.email"
            }],
            staticClass: "\n          opw-rounded\n          opw-border\n          opw-box-border\n          opw-border-grey-light\n          opw-text-black\n          opw-h-8\n          opw-delicate-grey\n          opw-w-full\n          opw-max-w-full\n          opw-py-2\n          opw-px-3\n          opw-mb-6\n          opw-border-inset\n        ",
            style: _vm.formInputStyle,
            attrs: {
              "type": "email",
              "id": "email",
              "placeholder": _vm.$t('generalForm.emailPlaceholder')
            },
            domProps: {
              "value": _vm.author.email
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.$set(_vm.author, "email", $event.target.value);
              }
            }
          })]), _c('div', {
            staticClass: "opw-mb-4"
          }, [_c('label', {
            staticClass: "opw-block opw-text-sm opw-mb-2",
            class: _vm.config.widgetTopSectionStyle === 'minimal' && 'opw-text-center',
            style: _vm.formHeadingsStyle,
            attrs: {
              "for": "review-body"
            }
          }, [_vm._v(_vm._s(_vm.$t('reviewForm.yourReview')))]), _c('textarea', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.review.body,
              expression: "review.body"
            }],
            staticClass: "\n          opw-border-inset\n          opw-border\n          opw-box-border\n          opw-border-grey-light\n          opw-max-w-full\n          opw-mb-6\n          opw-delicate-grey\n          opw-px-3\n          opw-py-2\n          opw-rounded\n          opw-text-black\n          opw-w-full\n        ",
            style: _vm.formInputStyle,
            attrs: {
              "type": "text",
              "id": "review-body",
              "rows": "5",
              "maxlength": "3000",
              "placeholder": _vm.$t('reviewForm.yourReviewPlaceholder')
            },
            domProps: {
              "value": _vm.review.body
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.$set(_vm.review, "body", $event.target.value);
              }
            }
          })]), _c('div', {
            staticClass: "opw-mb-4"
          }, _vm._l(_vm.product.customFields, function (customField, customFieldId) {
            return _c('div', {
              key: customFieldId
            }, [customField.title ? _c('div', [_c('h4', [_vm._v(_vm._s(customField.title))]), _c('h5', [_vm._v(_vm._s(customField.placeholder))]), _c('rating', {
              attrs: {
                "active-color": _vm.config.requestFormStarsColor,
                "item-size": 28
              },
              model: {
                value: customField.starRating,
                callback: function ($$v) {
                  _vm.$set(customField, "starRating", _vm._n($$v));
                },
                expression: "customField.starRating"
              }
            })], 1) : _vm._e()]);
          }), 0), _c('media-upload', {
            staticClass: "opw-my-4",
            attrs: {
              "disabled": _vm.disablePhoto,
              "uploaded-files-limit": _vm.uploadedPhotosLimit,
              "minimal": _vm.config.widgetTopSectionStyle === 'minimal',
              "form-headings-style": _vm.formHeadingsStyle,
              "form-input-style": _vm.formInputStyle
            },
            on: {
              "loading": function ($event) {
                _vm.loading = $event;
              }
            },
            model: {
              value: _vm.photoUploads,
              callback: function ($$v) {
                _vm.photoUploads = $$v;
              },
              expression: "photoUploads"
            }
          }), _c('media-upload', {
            staticClass: "opw-my-4",
            attrs: {
              "minimal": _vm.config.widgetTopSectionStyle === 'minimal',
              "form-headings-style": _vm.formHeadingsStyle,
              "form-input-style": _vm.formInputStyle,
              "video": ""
            },
            on: {
              "loading": function ($event) {
                _vm.loading = $event;
              }
            },
            model: {
              value: _vm.videoUploads,
              callback: function ($$v) {
                _vm.videoUploads = $$v;
              },
              expression: "videoUploads"
            }
          }), _c('div', {
            staticClass: "opw-flex justify-center",
            class: _vm.config.widgetTopSectionStyle === 'minimal' ? 'opw-flex-row' : 'opw-flex-col'
          }, [_c('div', {
            staticClass: "opw-flex opw-justify-end"
          }, [_c('button', {
            staticClass: "\n          opw-btn\n          opw-text-base\n          opw-text-white\n          opw-align-middle\n          opw-cursor-pointer\n          opw-rounded\n          opw-border\n          opw-border-solid\n          opw-bg-grey\n          opw-white--text\n          opw-flex-shrink-0\n          opw-py-2\n          opw-px-8\n          opw-uppercase\n          opw-font-medium\n          hover:opw-bg-grey\n        ",
            attrs: {
              "disabled": _vm.admin || _vm.loading
            },
            on: {
              "click": _vm.save
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('generalForm.postButton')) + " ")])])]), _vm.formErrors.length > 0 ? _c('div', {
            staticClass: "opw-text-red-dark opw-text-sm opw-text-right"
          }, _vm._l(_vm.formErrors, function (error) {
            return _c('div', {
              key: error
            }, [_vm._v(" " + _vm._s(error) + " ")]);
          }), 0) : _vm._e()], 1)]) : _vm._e()]);
        };

        var ReviewFormvue_type_template_id_328ee193_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewForm.vue?vue&type=template&id=328ee193&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Rating.vue?vue&type=template&id=65d9f6bb&scoped=true&

        var Ratingvue_type_template_id_65d9f6bb_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-star-rating"
          }, _vm._l(_vm.ratings, function (rating) {
            return _c('label', {
              key: rating,
              staticClass: "opw-star-rating__star",
              class: {
                'is-selected': _vm.value >= rating && _vm.value != null
              },
              on: {
                "click": function ($event) {
                  return _vm.setRating(rating);
                },
                "mouseover": function ($event) {
                  return _vm.starOver(rating);
                },
                "mouseout": _vm.starOut
              }
            }, [_c('input', {
              staticClass: "opw-star-rating opw-star-rating__checkbox",
              attrs: {
                "type": "radio"
              },
              domProps: {
                "value": _vm.value
              },
              on: {
                "input": function ($event) {
                  return _vm.$emit('input', $event.target.value);
                }
              }
            }), _c('i', {
              class: ['opw-noci', _vm.value >= rating && _vm.value != null ? 'opw-noci-star-full' : 'opw-noci-star-empty'],
              style: _vm.starsStyle
            })]);
          }), 0);
        };

        var Ratingvue_type_template_id_65d9f6bb_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/Rating.vue?vue&type=template&id=65d9f6bb&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Rating.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var Ratingvue_type_script_lang_js_ = {
          name: 'Rating',
          model: {
            event: 'update:value',
            prop: 'value'
          },
          props: {
            value: {
              type: Number,
              default: null
            },
            activeColor: {
              type: String,
              default: null
            },
            itemSize: {
              type: Number,
              default: 12
            }
          },

          data() {
            return {
              tempRating: null,
              ratings: [1, 2, 3, 4, 5]
            };
          },

          methods: {
            setRating(rating) {
              this.tempRating = rating;
              this.$emit('update:value', rating);
            },

            starOut() {
              this.$emit('update:value', this.tempRating);
            },

            starOver(index) {
              this.tempRating = this.value;
              this.$emit('update:value', index);
            }

          },
          computed: {
            starsStyle() {
              const style = {};
              style['color'] = this.activeColor;
              style['font-size'] = this.itemSize + 'px';
              return style;
            }

          }
        }; // CONCATENATED MODULE: ./src/components/Rating.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_Ratingvue_type_script_lang_js_ = Ratingvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/Rating.vue?vue&type=style&index=0&id=65d9f6bb&scoped=true&lang=scss&

        var Ratingvue_type_style_index_0_id_65d9f6bb_scoped_true_lang_scss_ = __webpack_require__("9bcb"); // CONCATENATED MODULE: ./src/components/Rating.vue

        /* normalize component */


        var Rating_component = normalizeComponent(components_Ratingvue_type_script_lang_js_, Ratingvue_type_template_id_65d9f6bb_scoped_true_render, Ratingvue_type_template_id_65d9f6bb_scoped_true_staticRenderFns, false, null, "65d9f6bb", null);
        /* harmony default export */

        var Rating = Rating_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/MediaUpload.vue?vue&type=template&id=2e0ecfdd&

        var MediaUploadvue_type_template_id_2e0ecfdd_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "position-relative"
          }, [_vm.video ? _c('div', {
            staticClass: "\n          opw-py-2\n          opw-px-4\n          opw-cursor-pointer\n          opw-items-center\n          opw-justify-center\n          opw-border\n          opw-border-solid\n          opw-btn\n          hover:opw-bg-grey\n          opw-rounded\n          opw-uppercase\n          opw-flex\n          opw-text-base\n          opw-font-sans\n        ",
            on: {
              "click": function ($event) {
                _vm.dialog = true;
              }
            }
          }, [_c('i', {
            staticClass: "mdi mdi-video",
            class: _vm.minimal ? 'opw-text-xl' : 'opw-text-4xl opw--m-1 opw--mt-1'
          }), _c('span', {
            staticClass: "opw-text-base opw-ml-2"
          }, [_vm._v(_vm._s(_vm.$t('reviewForm.addVideoButton')))])]) : [_c('label', {
            staticClass: "\n          opw-py-3\n          opw-px-4\n          opw-cursor-pointer\n          opw-flex\n          opw-justify-center\n          opw-items-center\n          opw-border\n          opw-border-solid\n          opw-btn\n          hover:opw-bg-grey\n          opw-rounded\n          opw-uppercase\n          opw-text-base\n          opw-font-sans\n        ",
            attrs: {
              "for": "review-image"
            }
          }, [_c('i', {
            staticClass: "opw-noci opw-noci-camera-retro opw--mt-px",
            class: _vm.minimal ? 'opw-text-xl' : 'opw-text-2xl'
          }), _c('span', {
            staticClass: "opw-ml-2 opw-text-base"
          }, [_vm._v(_vm._s(_vm.$t('reviewForm.addPhotoButton')))])]), _c('input', {
            ref: "image",
            staticClass: "opw-hidden",
            attrs: {
              "accept": "image/*;capture=camera",
              "id": "review-image",
              "type": "file",
              "disabled": _vm.disabled || _vm.uploadedFiles.length >= _vm.fileLimit
            },
            on: {
              "change": _vm.onFilePicked
            }
          })], _c('div', {}, [_vm.uploadedFiles.length || _vm.loading ? _c('div', [_vm._l(_vm.uploadedFiles, function (url) {
            return _c('div', {
              key: url,
              staticClass: "opw-my-2 opw-rounded opw-flex opw-rounded opw-py-2 opw-px-4 opw-delicate-grey "
            }, [_c('div', {
              staticClass: "opw-border-2 opw-border-grey-dark opw-border-solid opw-h-16 opw-w-16"
            }, [_vm.video ? [url.includes('vimeo') ? _c('a', {
              staticClass: "black-video-frame opw-cursor-pointer opw-bg-black opw-h-16 opw-w-16 opw-block",
              attrs: {
                "href": url,
                "target": "_blank"
              }
            }) : _c('iframe', {
              staticClass: "opw-h-16 opw-w-16 ",
              attrs: {
                "type": "text/html",
                "src": _vm.embededLink(url)
              }
            })] : _c('img', {
              staticClass: "opw-h-16 opw-w-16 opw-flex-grow-0 opw-object-cover",
              attrs: {
                "alt": "",
                "src": url,
                "width": "100%"
              }
            })], 2), _c('div', {
              staticClass: "opw-flex-grow opw-mx-auto opw-px-4 opw-py-1 opw-text-body-2"
            }, [_vm._v(" " + _vm._s(_vm.fileNameDict[url] || '') + " ")]), _c('span', {
              staticClass: "opw-remove-photo-btn opw-font-bold opw-btn opw-self-center opw-mr-2 opw-cursor-pointer",
              on: {
                "click": function ($event) {
                  return _vm.removeFile(url);
                }
              }
            }, [_c('bin-icon')], 1)]);
          }), _vm.loading ? _c('div', {
            staticClass: "opw-text-center "
          }, [_c('lds-spinner')], 1) : _vm._e(), _vm.uploadVideoError || _vm.uploadVideoStatus ? _c('div', {
            staticClass: "opw-text-sm opw-text-center opw-my-2"
          }, [_vm.uploadVideoError ? _c('div', {
            staticClass: "opw-text-red-dark"
          }, [_vm._v(" " + _vm._s(_vm.uploadVideoError) + " ")]) : _vm._e(), _vm.uploadVideoStatus && _vm.loading ? _c('div', [_vm._v(" " + _vm._s(_vm.uploadVideoStatus) + " ")]) : _vm._e()]) : _vm._e()], 2) : _vm._e()]), _vm.dialog ? _c('upload-dialog', {
            attrs: {
              "on-video-file-picked": _vm.onVideoFilePicked,
              "form-headings-style": _vm.formHeadingsStyle,
              "form-input-style": _vm.formInputStyle,
              "youtube-link-regex": _vm.youtubeLinkRegex,
              "disable-photo": _vm.disabled
            },
            on: {
              "close": function ($event) {
                _vm.dialog = false;
              },
              "video:uploaded": _vm.addVideo
            }
          }) : _vm._e()], 2);
        };

        var MediaUploadvue_type_template_id_2e0ecfdd_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/MediaUpload.vue?vue&type=template&id=2e0ecfdd&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/LdsSpinner.vue?vue&type=template&id=566b960c&scoped=true&functional=true&

        var LdsSpinnervue_type_template_id_566b960c_scoped_true_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _vm._m(0);
        };

        var LdsSpinnervue_type_template_id_566b960c_scoped_true_functional_true_staticRenderFns = [function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', {
            staticClass: "lds-spinner"
          }, [_c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div'), _c('div')]);
        }]; // CONCATENATED MODULE: ./src/components/functional/LdsSpinner.vue?vue&type=template&id=566b960c&scoped=true&functional=true&
        // EXTERNAL MODULE: ./src/components/functional/LdsSpinner.vue?vue&type=style&index=0&id=566b960c&scoped=true&lang=css&

        var LdsSpinnervue_type_style_index_0_id_566b960c_scoped_true_lang_css_ = __webpack_require__("38e7"); // CONCATENATED MODULE: ./src/components/functional/LdsSpinner.vue


        var LdsSpinner_script = {};
        /* normalize component */

        var LdsSpinner_component = normalizeComponent(LdsSpinner_script, LdsSpinnervue_type_template_id_566b960c_scoped_true_functional_true_render, LdsSpinnervue_type_template_id_566b960c_scoped_true_functional_true_staticRenderFns, true, null, "566b960c", null);
        /* harmony default export */

        var LdsSpinner = LdsSpinner_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/BinIcon.vue?vue&type=template&id=071cc8cd&functional=true&

        var BinIconvue_type_template_id_071cc8cd_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "width": "14",
              "height": "18",
              "viewBox": "0 0 14 18",
              "fill": "currentColor"
            }
          }, [_c('path', {
            attrs: {
              "id": "delete-outline",
              "d": "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6V19M8,9h8V19H8V9m7.5-5-1-1h-5l-1,1H5V6H19V4Z",
              "transform": "translate(-5 -3)"
            }
          })]);
        };

        var BinIconvue_type_template_id_071cc8cd_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/BinIcon.vue?vue&type=template&id=071cc8cd&functional=true&
        // CONCATENATED MODULE: ./src/components/functional/BinIcon.vue

        var BinIcon_script = {};
        /* normalize component */

        var BinIcon_component = normalizeComponent(BinIcon_script, BinIconvue_type_template_id_071cc8cd_functional_true_render, BinIconvue_type_template_id_071cc8cd_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var BinIcon = BinIcon_component.exports; // EXTERNAL MODULE: ./node_modules/js-base64/base64.js

        var base64 = __webpack_require__("27ae"); // EXTERNAL MODULE: ./node_modules/url-parse/index.js


        var url_parse = __webpack_require__("1816");

        var url_parse_default = /*#__PURE__*/__webpack_require__.n(url_parse); // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/error.js


        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _createSuper(Derived) {
          return function () {
            var Super = _getPrototypeOf(Derived),
                result;

            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;

              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : undefined;

          _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
              if (_cache.has(Class)) return _cache.get(Class);

              _cache.set(Class, Wrapper);
            }

            function Wrapper() {
              return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            return _setPrototypeOf(Wrapper, Class);
          };

          return _wrapNativeSuper(Class);
        }

        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }

          return _construct.apply(null, arguments);
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        var DetailedError = /*#__PURE__*/function (_Error) {
          _inherits(DetailedError, _Error);

          var _super = _createSuper(DetailedError);

          function DetailedError(message) {
            var _this;

            var causingErr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var req = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var res = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            _classCallCheck(this, DetailedError);

            _this = _super.call(this, message);
            _this.originalRequest = req;
            _this.originalResponse = res;
            _this.causingError = causingErr;

            if (causingErr != null) {
              message += ", caused by ".concat(causingErr.toString());
            }

            if (req != null) {
              var requestId = req.getHeader('X-Request-ID') || 'n/a';
              var method = req.getMethod();
              var url = req.getURL();
              var status = res ? res.getStatus() : 'n/a';
              var body = res ? res.getBody() || '' : 'n/a';
              message += ", originated from request (method: ".concat(method, ", url: ").concat(url, ", response code: ").concat(status, ", response text: ").concat(body, ", request id: ").concat(requestId, ")");
            }

            _this.message = message;
            return _this;
          }

          return DetailedError;
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        /* harmony default export */


        var error = DetailedError; // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/logger.js

        /* eslint no-console: "off" */

        var isEnabled = false;

        function enableDebugLog() {
          isEnabled = true;
        }

        function log(msg) {
          if (!isEnabled) return;
          console.log(msg);
        } // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/uuid.js

        /**
         * Generate a UUID v4 based on random numbers. We intentioanlly use the less
         * secure Math.random function here since the more secure crypto.getRandomNumbers
         * is not available on all platforms.
         * This is not a problem for us since we use the UUID only for generating a
         * request ID, so we can correlate server logs to client errors.
         *
         * This function is taken from following site:
         * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
         *
         * @return {string} The generate UUID
         */


        function uuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        } // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/upload.js


        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function upload_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /* global window */


        var defaultOptions = {
          endpoint: null,
          uploadUrl: null,
          metadata: {},
          fingerprint: null,
          uploadSize: null,
          onProgress: null,
          onChunkComplete: null,
          onSuccess: null,
          onError: null,
          _onUploadUrlAvailable: null,
          overridePatchMethod: false,
          headers: {},
          addRequestId: false,
          onBeforeRequest: null,
          onAfterResponse: null,
          onShouldRetry: null,
          chunkSize: Infinity,
          retryDelays: [0, 1000, 3000, 5000],
          parallelUploads: 1,
          storeFingerprintForResuming: true,
          removeFingerprintOnSuccess: false,
          uploadLengthDeferred: false,
          uploadDataDuringCreation: false,
          urlStorage: null,
          fileReader: null,
          httpStack: null
        };

        var upload_BaseUpload = /*#__PURE__*/function () {
          function BaseUpload(file, options) {
            upload_classCallCheck(this, BaseUpload); // Warn about removed options from previous versions

            if ('resume' in options) {
              console.log('tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead.'); // eslint-disable-line no-console
            } // The default options will already be added from the wrapper classes.


            this.options = options; // The storage module used to store URLs

            this._urlStorage = this.options.urlStorage; // The underlying File/Blob object

            this.file = file; // The URL against which the file will be uploaded

            this.url = null; // The underlying request object for the current PATCH request

            this._req = null; // The fingerpinrt for the current file (set after start())

            this._fingerprint = null; // The key that the URL storage returned when saving an URL with a fingerprint,

            this._urlStorageKey = null; // The offset used in the current PATCH request

            this._offset = null; // True if the current PATCH request has been aborted

            this._aborted = false; // The file's size in bytes

            this._size = null; // The Source object which will wrap around the given file and provides us
            // with a unified interface for getting its size and slice chunks from its
            // content allowing us to easily handle Files, Blobs, Buffers and Streams.

            this._source = null; // The current count of attempts which have been made. Zero indicates none.

            this._retryAttempt = 0; // The timeout's ID which is used to delay the next retry

            this._retryTimeout = null; // The offset of the remote upload before the latest attempt was started.

            this._offsetBeforeRetry = 0; // An array of BaseUpload instances which are used for uploading the different
            // parts, if the parallelUploads option is used.

            this._parallelUploads = null; // An array of upload URLs which are used for uploading the different
            // parts, if the parallelUploads option is used.

            this._parallelUploadUrls = null;
          }
          /**
           * Use the Termination extension to delete an upload from the server by sending a DELETE
           * request to the specified upload URL. This is only possible if the server supports the
           * Termination extension. If the `options.retryDelays` property is set, the method will
           * also retry if an error ocurrs.
           *
           * @param {String} url The upload's URL which will be terminated.
           * @param {object} options Optional options for influencing HTTP requests.
           * @return {Promise} The Promise will be resolved/rejected when the requests finish.
           */


          _createClass(BaseUpload, [{
            key: "findPreviousUploads",
            value: function findPreviousUploads() {
              var _this = this;

              return this.options.fingerprint(this.file, this.options).then(function (fingerprint) {
                return _this._urlStorage.findUploadsByFingerprint(fingerprint);
              });
            }
          }, {
            key: "resumeFromPreviousUpload",
            value: function resumeFromPreviousUpload(previousUpload) {
              this.url = previousUpload.uploadUrl || null;
              this._parallelUploadUrls = previousUpload.parallelUploadUrls || null;
              this._urlStorageKey = previousUpload.urlStorageKey;
            }
          }, {
            key: "start",
            value: function start() {
              var _this2 = this;

              var file = this.file;

              if (!file) {
                this._emitError(new Error('tus: no file or stream to upload provided'));

                return;
              }

              if (!this.options.endpoint && !this.options.uploadUrl) {
                this._emitError(new Error('tus: neither an endpoint or an upload URL is provided'));

                return;
              }

              var retryDelays = this.options.retryDelays;

              if (retryDelays != null && Object.prototype.toString.call(retryDelays) !== '[object Array]') {
                this._emitError(new Error('tus: the `retryDelays` option must either be an array or null'));

                return;
              }

              if (this.options.parallelUploads > 1) {
                // Test which options are incompatible with parallel uploads.
                ['uploadUrl', 'uploadSize', 'uploadLengthDeferred'].forEach(function (optionName) {
                  if (_this2.options[optionName]) {
                    _this2._emitError(new Error("tus: cannot use the ".concat(optionName, " option when parallelUploads is enabled")));
                  }
                });
              }

              this.options.fingerprint(file, this.options).then(function (fingerprint) {
                if (fingerprint == null) {
                  log('No fingerprint was calculated meaning that the upload cannot be stored in the URL storage.');
                } else {
                  log("Calculated fingerprint: ".concat(fingerprint));
                }

                _this2._fingerprint = fingerprint;

                if (_this2._source) {
                  return _this2._source;
                }

                return _this2.options.fileReader.openFile(file, _this2.options.chunkSize);
              }).then(function (source) {
                _this2._source = source; // If the upload was configured to use multiple requests or if we resume from
                // an upload which used multiple requests, we start a parallel upload.

                if (_this2.options.parallelUploads > 1 || _this2._parallelUploadUrls != null) {
                  _this2._startParallelUpload();
                } else {
                  _this2._startSingleUpload();
                }
              })["catch"](function (err) {
                _this2._emitError(err);
              });
            }
            /**
             * Initiate the uploading procedure for a parallelized upload, where one file is split into
             * multiple request which are run in parallel.
             *
             * @api private
             */

          }, {
            key: "_startParallelUpload",
            value: function _startParallelUpload() {
              var _this3 = this;

              var totalSize = this._size = this._source.size;
              var totalProgress = 0;
              this._parallelUploads = [];
              var partCount = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads; // The input file will be split into multiple slices which are uploaded in separate
              // requests. Here we generate the start and end position for the slices.

              var parts = splitSizeIntoParts(this._source.size, partCount, this._parallelUploadUrls); // Create an empty list for storing the upload URLs

              this._parallelUploadUrls = new Array(parts.length); // Generate a promise for each slice that will be resolve if the respective
              // upload is completed.

              var uploads = parts.map(function (part, index) {
                var lastPartProgress = 0;
                return _this3._source.slice(part.start, part.end).then(function (_ref) {
                  var value = _ref.value;
                  return new Promise(function (resolve, reject) {
                    // Merge with the user supplied options but overwrite some values.
                    var options = _objectSpread({}, _this3.options, {
                      // If available, the partial upload should be resumed from a previous URL.
                      uploadUrl: part.uploadUrl || null,
                      // We take manually care of resuming for partial uploads, so they should
                      // not be stored in the URL storage.
                      storeFingerprintForResuming: false,
                      removeFingerprintOnSuccess: false,
                      // Reset the parallelUploads option to not cause recursion.
                      parallelUploads: 1,
                      metadata: {},
                      // Add the header to indicate the this is a partial upload.
                      headers: _objectSpread({}, _this3.options.headers, {
                        'Upload-Concat': 'partial'
                      }),
                      // Reject or resolve the promise if the upload errors or completes.
                      onSuccess: resolve,
                      onError: reject,
                      // Based in the progress for this partial upload, calculate the progress
                      // for the entire final upload.
                      onProgress: function onProgress(newPartProgress) {
                        totalProgress = totalProgress - lastPartProgress + newPartProgress;
                        lastPartProgress = newPartProgress;

                        _this3._emitProgress(totalProgress, totalSize);
                      },
                      // Wait until every partial upload has an upload URL, so we can add
                      // them to the URL storage.
                      _onUploadUrlAvailable: function _onUploadUrlAvailable() {
                        _this3._parallelUploadUrls[index] = upload.url; // Test if all uploads have received an URL

                        if (_this3._parallelUploadUrls.filter(function (u) {
                          return !!u;
                        }).length === parts.length) {
                          _this3._saveUploadInUrlStorage();
                        }
                      }
                    });

                    var upload = new BaseUpload(value, options);
                    upload.start(); // Store the upload in an array, so we can later abort them if necessary.

                    _this3._parallelUploads.push(upload);
                  });
                });
              });
              var req; // Wait until all partial uploads are finished and we can send the POST request for
              // creating the final upload.

              Promise.all(uploads).then(function () {
                req = _this3._openRequest('POST', _this3.options.endpoint);
                req.setHeader('Upload-Concat', "final;".concat(_this3._parallelUploadUrls.join(' '))); // Add metadata if values have been added

                var metadata = encodeMetadata(_this3.options.metadata);

                if (metadata !== '') {
                  req.setHeader('Upload-Metadata', metadata);
                }

                return _this3._sendRequest(req, null);
              }).then(function (res) {
                if (!inStatusCategory(res.getStatus(), 200)) {
                  _this3._emitHttpError(req, res, 'tus: unexpected response while creating upload');

                  return;
                }

                var location = res.getHeader('Location');

                if (location == null) {
                  _this3._emitHttpError(req, res, 'tus: invalid or missing Location header');

                  return;
                }

                _this3.url = resolveUrl(_this3.options.endpoint, location);
                log("Created upload at ".concat(_this3.url));

                _this3._emitSuccess();
              })["catch"](function (err) {
                _this3._emitError(err);
              });
            }
            /**
             * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
             * uploaded in a sequential matter.
             *
             * @api private
             */

          }, {
            key: "_startSingleUpload",
            value: function _startSingleUpload() {
              // First, we look at the uploadLengthDeferred option.
              // Next, we check if the caller has supplied a manual upload size.
              // Finally, we try to use the calculated size from the source object.
              if (this.options.uploadLengthDeferred) {
                this._size = null;
              } else if (this.options.uploadSize != null) {
                this._size = +this.options.uploadSize;

                if (isNaN(this._size)) {
                  this._emitError(new Error('tus: cannot convert `uploadSize` option into a number'));

                  return;
                }
              } else {
                this._size = this._source.size;

                if (this._size == null) {
                  this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));

                  return;
                }
              } // Reset the aborted flag when the upload is started or else the
              // _performUpload will stop before sending a request if the upload has been
              // aborted previously.


              this._aborted = false; // The upload had been started previously and we should reuse this URL.

              if (this.url != null) {
                log("Resuming upload from previous URL: ".concat(this.url));

                this._resumeUpload();

                return;
              } // A URL has manually been specified, so we try to resume


              if (this.options.uploadUrl != null) {
                log("Resuming upload from provided URL: ".concat(this.options.url));
                this.url = this.options.uploadUrl;

                this._resumeUpload();

                return;
              } // An upload has not started for the file yet, so we start a new one


              log('Creating a new upload');

              this._createUpload();
            }
            /**
             * Abort any running request and stop the current upload. After abort is called, no event
             * handler will be invoked anymore. You can use the `start` method to resume the upload
             * again.
             * If `shouldTerminate` is true, the `terminate` function will be called to remove the
             * current upload from the server.
             *
             * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
             * @return {Promise} The Promise will be resolved/rejected when the requests finish.
             */

          }, {
            key: "abort",
            value: function abort(shouldTerminate) {
              var _this4 = this; // Count the number of arguments to see if a callback is being provided in the old style required by tus-js-client 1.x, then throw an error if it is.
              // `arguments` is a JavaScript built-in variable that contains all of the function's arguments.


              if (arguments.length > 1 && typeof arguments[1] === 'function') {
                throw new Error('tus: the abort function does not accept a callback since v2 anymore; please use the returned Promise instead');
              } // Stop any parallel partial uploads, that have been started in _startParallelUploads.


              if (this._parallelUploads != null) {
                this._parallelUploads.forEach(function (upload) {
                  upload.abort(shouldTerminate);
                });
              } // Stop any current running request.


              if (this._req !== null) {
                this._req.abort();

                this._source.close();
              }

              this._aborted = true; // Stop any timeout used for initiating a retry.

              if (this._retryTimeout != null) {
                clearTimeout(this._retryTimeout);
                this._retryTimeout = null;
              }

              if (!shouldTerminate || this.url == null) {
                return Promise.resolve();
              }

              return BaseUpload.terminate(this.url, this.options) // Remove entry from the URL storage since the upload URL is no longer valid.
              .then(function () {
                return _this4._removeFromUrlStorage();
              });
            }
          }, {
            key: "_emitHttpError",
            value: function _emitHttpError(req, res, message, causingErr) {
              this._emitError(new error(message, causingErr, req, res));
            }
          }, {
            key: "_emitError",
            value: function _emitError(err) {
              var _this5 = this; // Do not emit errors, e.g. from aborted HTTP requests, if the upload has been stopped.


              if (this._aborted) return; // Check if we should retry, when enabled, before sending the error to the user.

              if (this.options.retryDelays != null) {
                // We will reset the attempt counter if
                // - we were already able to connect to the server (offset != null) and
                // - we were able to upload a small chunk of data to the server
                var shouldResetDelays = this._offset != null && this._offset > this._offsetBeforeRetry;

                if (shouldResetDelays) {
                  this._retryAttempt = 0;
                }

                if (shouldRetry(err, this._retryAttempt, this.options)) {
                  var delay = this.options.retryDelays[this._retryAttempt++];
                  this._offsetBeforeRetry = this._offset;
                  this._retryTimeout = setTimeout(function () {
                    _this5.start();
                  }, delay);
                  return;
                }
              }

              if (typeof this.options.onError === 'function') {
                this.options.onError(err);
              } else {
                throw err;
              }
            }
            /**
             * Publishes notification if the upload has been successfully completed.
             *
             * @api private
             */

          }, {
            key: "_emitSuccess",
            value: function _emitSuccess() {
              if (this.options.removeFingerprintOnSuccess) {
                // Remove stored fingerprint and corresponding endpoint. This causes
                // new uploads of the same file to be treated as a different file.
                this._removeFromUrlStorage();
              }

              if (typeof this.options.onSuccess === 'function') {
                this.options.onSuccess();
              }
            }
            /**
             * Publishes notification when data has been sent to the server. This
             * data may not have been accepted by the server yet.
             *
             * @param {number} bytesSent  Number of bytes sent to the server.
             * @param {number} bytesTotal Total number of bytes to be sent to the server.
             * @api private
             */

          }, {
            key: "_emitProgress",
            value: function _emitProgress(bytesSent, bytesTotal) {
              if (typeof this.options.onProgress === 'function') {
                this.options.onProgress(bytesSent, bytesTotal);
              }
            }
            /**
             * Publishes notification when a chunk of data has been sent to the server
             * and accepted by the server.
             * @param {number} chunkSize  Size of the chunk that was accepted by the server.
             * @param {number} bytesAccepted Total number of bytes that have been
             *                                accepted by the server.
             * @param {number} bytesTotal Total number of bytes to be sent to the server.
             * @api private
             */

          }, {
            key: "_emitChunkComplete",
            value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
              if (typeof this.options.onChunkComplete === 'function') {
                this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
              }
            }
            /**
             * Create a new upload using the creation extension by sending a POST
             * request to the endpoint. After successful creation the file will be
             * uploaded
             *
             * @api private
             */

          }, {
            key: "_createUpload",
            value: function _createUpload() {
              var _this6 = this;

              if (!this.options.endpoint) {
                this._emitError(new Error('tus: unable to create upload because no endpoint is provided'));

                return;
              }

              var req = this._openRequest('POST', this.options.endpoint);

              if (this.options.uploadLengthDeferred) {
                req.setHeader('Upload-Defer-Length', 1);
              } else {
                req.setHeader('Upload-Length', this._size);
              } // Add metadata if values have been added


              var metadata = encodeMetadata(this.options.metadata);

              if (metadata !== '') {
                req.setHeader('Upload-Metadata', metadata);
              }

              var promise;

              if (this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred) {
                this._offset = 0;
                promise = this._addChunkToRequest(req);
              } else {
                promise = this._sendRequest(req, null);
              }

              promise.then(function (res) {
                if (!inStatusCategory(res.getStatus(), 200)) {
                  _this6._emitHttpError(req, res, 'tus: unexpected response while creating upload');

                  return;
                }

                var location = res.getHeader('Location');

                if (location == null) {
                  _this6._emitHttpError(req, res, 'tus: invalid or missing Location header');

                  return;
                }

                _this6.url = resolveUrl(_this6.options.endpoint, location);
                log("Created upload at ".concat(_this6.url));

                if (typeof _this6.options._onUploadUrlAvailable === 'function') {
                  _this6.options._onUploadUrlAvailable();
                }

                if (_this6._size === 0) {
                  // Nothing to upload and file was successfully created
                  _this6._emitSuccess();

                  _this6._source.close();

                  return;
                }

                _this6._saveUploadInUrlStorage();

                if (_this6.options.uploadDataDuringCreation) {
                  _this6._handleUploadResponse(req, res);
                } else {
                  _this6._offset = 0;

                  _this6._performUpload();
                }
              })["catch"](function (err) {
                _this6._emitHttpError(req, null, 'tus: failed to create upload', err);
              });
            }
            /*
             * Try to resume an existing upload. First a HEAD request will be sent
             * to retrieve the offset. If the request fails a new upload will be
             * created. In the case of a successful response the file will be uploaded.
             *
             * @api private
             */

          }, {
            key: "_resumeUpload",
            value: function _resumeUpload() {
              var _this7 = this;

              var req = this._openRequest('HEAD', this.url);

              var promise = this._sendRequest(req, null);

              promise.then(function (res) {
                var status = res.getStatus();

                if (!inStatusCategory(status, 200)) {
                  if (inStatusCategory(status, 400)) {
                    // Remove stored fingerprint and corresponding endpoint,
                    // on client errors since the file can not be found
                    _this7._removeFromUrlStorage();
                  } // If the upload is locked (indicated by the 423 Locked status code), we
                  // emit an error instead of directly starting a new upload. This way the
                  // retry logic can catch the error and will retry the upload. An upload
                  // is usually locked for a short period of time and will be available
                  // afterwards.


                  if (status === 423) {
                    _this7._emitHttpError(req, res, 'tus: upload is currently locked; retry later');

                    return;
                  }

                  if (!_this7.options.endpoint) {
                    // Don't attempt to create a new upload if no endpoint is provided.
                    _this7._emitHttpError(req, res, 'tus: unable to resume upload (new upload cannot be created without an endpoint)');

                    return;
                  } // Try to create a new upload


                  _this7.url = null;

                  _this7._createUpload();

                  return;
                }

                var offset = parseInt(res.getHeader('Upload-Offset'), 10);

                if (isNaN(offset)) {
                  _this7._emitHttpError(req, res, 'tus: invalid or missing offset value');

                  return;
                }

                var length = parseInt(res.getHeader('Upload-Length'), 10);

                if (isNaN(length) && !_this7.options.uploadLengthDeferred) {
                  _this7._emitHttpError(req, res, 'tus: invalid or missing length value');

                  return;
                }

                if (typeof _this7.options._onUploadUrlAvailable === 'function') {
                  _this7.options._onUploadUrlAvailable();
                } // Upload has already been completed and we do not need to send additional
                // data to the server


                if (offset === length) {
                  _this7._emitProgress(length, length);

                  _this7._emitSuccess();

                  return;
                }

                _this7._offset = offset;

                _this7._performUpload();
              })["catch"](function (err) {
                _this7._emitHttpError(req, null, 'tus: failed to resume upload', err);
              });
            }
            /**
             * Start uploading the file using PATCH requests. The file will be divided
             * into chunks as specified in the chunkSize option. During the upload
             * the onProgress event handler may be invoked multiple times.
             *
             * @api private
             */

          }, {
            key: "_performUpload",
            value: function _performUpload() {
              var _this8 = this; // If the upload has been aborted, we will not send the next PATCH request.
              // This is important if the abort method was called during a callback, such
              // as onChunkComplete or onProgress.


              if (this._aborted) {
                return;
              }

              var req; // Some browser and servers may not support the PATCH method. For those
              // cases, you can tell tus-js-client to use a POST request with the
              // X-HTTP-Method-Override header for simulating a PATCH request.

              if (this.options.overridePatchMethod) {
                req = this._openRequest('POST', this.url);
                req.setHeader('X-HTTP-Method-Override', 'PATCH');
              } else {
                req = this._openRequest('PATCH', this.url);
              }

              req.setHeader('Upload-Offset', this._offset);

              var promise = this._addChunkToRequest(req);

              promise.then(function (res) {
                if (!inStatusCategory(res.getStatus(), 200)) {
                  _this8._emitHttpError(req, res, 'tus: unexpected response while uploading chunk');

                  return;
                }

                _this8._handleUploadResponse(req, res);
              })["catch"](function (err) {
                // Don't emit an error if the upload was aborted manually
                if (_this8._aborted) {
                  return;
                }

                _this8._emitHttpError(req, null, "tus: failed to upload chunk at offset ".concat(_this8._offset), err);
              });
            }
            /**
             * _addChunktoRequest reads a chunk from the source and sends it using the
             * supplied request object. It will not handle the response.
             *
             * @api private
             */

          }, {
            key: "_addChunkToRequest",
            value: function _addChunkToRequest(req) {
              var _this9 = this;

              var start = this._offset;
              var end = this._offset + this.options.chunkSize;
              req.setProgressHandler(function (bytesSent) {
                _this9._emitProgress(start + bytesSent, _this9._size);
              });
              req.setHeader('Content-Type', 'application/offset+octet-stream'); // The specified chunkSize may be Infinity or the calcluated end position
              // may exceed the file's size. In both cases, we limit the end position to
              // the input's total size for simpler calculations and correctness.

              if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
                end = this._size;
              }

              return this._source.slice(start, end).then(function (_ref2) {
                var value = _ref2.value,
                    done = _ref2.done; // If the upload length is deferred, the upload size was not specified during
                // upload creation. So, if the file reader is done reading, we know the total
                // upload size and can tell the tus server.

                if (_this9.options.uploadLengthDeferred && done) {
                  _this9._size = _this9._offset + (value && value.size ? value.size : 0);
                  req.setHeader('Upload-Length', _this9._size);
                }

                if (value === null) {
                  return _this9._sendRequest(req);
                }

                _this9._emitProgress(_this9._offset, _this9._size);

                return _this9._sendRequest(req, value);
              });
            }
            /**
             * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
             * and already have received a response.
             *
             * @api private
             */

          }, {
            key: "_handleUploadResponse",
            value: function _handleUploadResponse(req, res) {
              var offset = parseInt(res.getHeader('Upload-Offset'), 10);

              if (isNaN(offset)) {
                this._emitHttpError(req, res, 'tus: invalid or missing offset value');

                return;
              }

              this._emitProgress(offset, this._size);

              this._emitChunkComplete(offset - this._offset, offset, this._size);

              this._offset = offset;

              if (offset == this._size) {
                // Yay, finally done :)
                this._emitSuccess();

                this._source.close();

                return;
              }

              this._performUpload();
            }
            /**
             * Create a new HTTP request object with the given method and URL.
             *
             * @api private
             */

          }, {
            key: "_openRequest",
            value: function _openRequest(method, url) {
              var req = openRequest(method, url, this.options);
              this._req = req;
              return req;
            }
            /**
             * Remove the entry in the URL storage, if it has been saved before.
             *
             * @api private
             */

          }, {
            key: "_removeFromUrlStorage",
            value: function _removeFromUrlStorage() {
              var _this10 = this;

              if (!this._urlStorageKey) return;

              this._urlStorage.removeUpload(this._urlStorageKey)["catch"](function (err) {
                _this10._emitError(err);
              });

              this._urlStorageKey = null;
            }
            /**
             * Add the upload URL to the URL storage, if possible.
             *
             * @api private
             */

          }, {
            key: "_saveUploadInUrlStorage",
            value: function _saveUploadInUrlStorage() {
              var _this11 = this; // Only if a fingerprint was calculated for the input (i.e. not a stream), we can store the upload URL.


              if (!this.options.storeFingerprintForResuming || !this._fingerprint) {
                return;
              }

              var storedUpload = {
                size: this._size,
                metadata: this.options.metadata,
                creationTime: new Date().toString()
              };

              if (this._parallelUploads) {
                // Save multiple URLs if the parallelUploads option is used ...
                storedUpload.parallelUploadUrls = this._parallelUploadUrls;
              } else {
                // ... otherwise we just save the one available URL.
                storedUpload.uploadUrl = this.url;
              }

              this._urlStorage.addUpload(this._fingerprint, storedUpload).then(function (urlStorageKey) {
                return _this11._urlStorageKey = urlStorageKey;
              })["catch"](function (err) {
                _this11._emitError(err);
              });
            }
            /**
             * Send a request with the provided body.
             *
             * @api private
             */

          }, {
            key: "_sendRequest",
            value: function _sendRequest(req) {
              var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              return sendRequest(req, body, this.options);
            }
          }], [{
            key: "terminate",
            value: function terminate(url, options) {
              // Count the number of arguments to see if a callback is being provided as the last
              // argument in the old style required by tus-js-client 1.x, then throw an error if it is.
              // `arguments` is a JavaScript built-in variable that contains all of the function's arguments.
              if (arguments.length > 1 && typeof arguments[arguments.length - 1] === 'function') {
                throw new Error('tus: the terminate function does not accept a callback since v2 anymore; please use the returned Promise instead');
              } // Note that in order for the trick above to work, a default value cannot be set for `options`,
              // so the check below replaces the old default `{}`.


              if (options === undefined) {
                options = {};
              }

              var req = openRequest('DELETE', url, options);
              return sendRequest(req, null, options).then(function (res) {
                // A 204 response indicates a successfull request
                if (res.getStatus() === 204) {
                  return;
                }

                throw new error('tus: unexpected response while terminating upload', null, req, res);
              })["catch"](function (err) {
                if (!(err instanceof error)) {
                  err = new error('tus: failed to terminate upload', err, req, null);
                }

                if (!shouldRetry(err, 0, options)) {
                  throw err;
                } // Instead of keeping track of the retry attempts, we remove the first element from the delays
                // array. If the array is empty, all retry attempts are used up and we will bubble up the error.
                // We recursively call the terminate function will removing elements from the retryDelays array.


                var delay = options.retryDelays[0];
                var remainingDelays = options.retryDelays.slice(1);

                var newOptions = _objectSpread({}, options, {
                  retryDelays: remainingDelays
                });

                return new Promise(function (resolve) {
                  return setTimeout(resolve, delay);
                }).then(function () {
                  return BaseUpload.terminate(url, newOptions);
                });
              });
            }
          }]);

          return BaseUpload;
        }();

        function encodeMetadata(metadata) {
          var encoded = [];

          for (var key in metadata) {
            encoded.push("".concat(key, " ").concat(base64["Base64"].encode(metadata[key])));
          }

          return encoded.join(',');
        }
        /**
         * Checks whether a given status is in the range of the expected category.
         * For example, only a status between 200 and 299 will satisfy the category 200.
         *
         * @api private
         */


        function inStatusCategory(status, category) {
          return status >= category && status < category + 100;
        }
        /**
         * Create a new HTTP request with the specified method and URL.
         * The necessary headers that are included in every request
         * will be added, including the request ID.
         *
         * @api private
         */


        function openRequest(method, url, options) {
          var req = options.httpStack.createRequest(method, url);
          req.setHeader('Tus-Resumable', '1.0.0');
          var headers = options.headers || {};

          for (var name in headers) {
            req.setHeader(name, headers[name]);
          }

          if (options.addRequestId) {
            var requestId = uuid();
            req.setHeader('X-Request-ID', requestId);
          }

          return req;
        }
        /**
         * Send a request with the provided body while invoking the onBeforeRequest
         * and onAfterResponse callbacks.
         *
         * @api private
         */


        function sendRequest(req, body, options) {
          var onBeforeRequestPromise = typeof options.onBeforeRequest === 'function' ? Promise.resolve(options.onBeforeRequest(req)) : Promise.resolve();
          return onBeforeRequestPromise.then(function () {
            return req.send(body).then(function (res) {
              var onAfterResponsePromise = typeof options.onAfterResponse === 'function' ? Promise.resolve(options.onAfterResponse(req, res)) : Promise.resolve();
              return onAfterResponsePromise.then(function () {
                return res;
              });
            });
          });
        }
        /**
         * Checks whether the browser running this code has internet access.
         * This function will always return true in the node.js environment
         *
         * @api private
         */


        function isOnline() {
          var online = true;

          if (typeof window !== 'undefined' && 'navigator' in window && window.navigator.onLine === false) {
            online = false;
          }

          return online;
        }
        /**
         * Checks whether or not it is ok to retry a request.
         * @param {Error} err the error returned from the last request
         * @param {number} retryAttempt the number of times the request has already been retried
         * @param {object} options tus Upload options
         *
         * @api private
         */


        function shouldRetry(err, retryAttempt, options) {
          // We only attempt a retry if
          // - retryDelays option is set
          // - we didn't exceed the maxium number of retries, yet, and
          // - this error was caused by a request or it's response and
          // - the error is server error (i.e. not a status 4xx except a 409 or 423) or
          // a onShouldRetry is specified and returns true
          // - the browser does not indicate that we are offline
          if (options.retryDelays == null || retryAttempt >= options.retryDelays.length || err.originalRequest == null) {
            return false;
          }

          if (options && typeof options.onShouldRetry === 'function') {
            return options.onShouldRetry(err, retryAttempt, options);
          }

          var status = err.originalResponse ? err.originalResponse.getStatus() : 0;
          return (!inStatusCategory(status, 400) || status === 409 || status === 423) && isOnline();
        }
        /**
         * Resolve a relative link given the origin as source. For example,
         * if a HTTP request to http://example.com/files/ returns a Location
         * header with the value /upload/abc, the resolved URL will be:
         * http://example.com/upload/abc
         */


        function resolveUrl(origin, link) {
          return new url_parse_default.a(link, origin).toString();
        }
        /**
         * Calculate the start and end positions for the parts if an upload
         * is split into multiple parallel requests.
         *
         * @param {number} totalSize The byte size of the upload, which will be split.
         * @param {number} partCount The number in how many parts the upload will be split.
         * @param {string[]} previousUrls The upload URLs for previous parts.
         * @return {object[]}
         * @api private
         */


        function splitSizeIntoParts(totalSize, partCount, previousUrls) {
          var partSize = Math.floor(totalSize / partCount);
          var parts = [];

          for (var i = 0; i < partCount; i++) {
            parts.push({
              start: partSize * i,
              end: partSize * (i + 1)
            });
          }

          parts[partCount - 1].end = totalSize; // Attach URLs from previous uploads, if available.

          if (previousUrls) {
            parts.forEach(function (part, index) {
              part.uploadUrl = previousUrls[index] || null;
            });
          }

          return parts;
        }

        upload_BaseUpload.defaultOptions = defaultOptions;
        /* harmony default export */

        var upload = upload_BaseUpload; // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/noopUrlStorage.js

        function noopUrlStorage_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function noopUrlStorage_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function noopUrlStorage_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) noopUrlStorage_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) noopUrlStorage_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /* eslint no-unused-vars: "off" */


        var NoopUrlStorage = /*#__PURE__*/function () {
          function NoopUrlStorage() {
            noopUrlStorage_classCallCheck(this, NoopUrlStorage);
          }

          noopUrlStorage_createClass(NoopUrlStorage, [{
            key: "listAllUploads",
            value: function listAllUploads() {
              return Promise.resolve([]);
            }
          }, {
            key: "findUploadsByFingerprint",
            value: function findUploadsByFingerprint(fingerprint) {
              return Promise.resolve([]);
            }
          }, {
            key: "removeUpload",
            value: function removeUpload(urlStorageKey) {
              return Promise.resolve();
            }
          }, {
            key: "addUpload",
            value: function addUpload(fingerprint, upload) {
              return Promise.resolve(null);
            }
          }]);
          return NoopUrlStorage;
        }(); // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/urlStorage.js


        function urlStorage_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function urlStorage_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function urlStorage_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) urlStorage_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) urlStorage_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /* global window, localStorage */


        var hasStorage = false;

        try {
          hasStorage = 'localStorage' in window; // Attempt to store and read entries from the local storage to detect Private
          // Mode on Safari on iOS (see #49)

          var urlStorage_key = 'tusSupport';
          localStorage.setItem(urlStorage_key, localStorage.getItem(urlStorage_key));
        } catch (e) {
          // If we try to access localStorage inside a sandboxed iframe, a SecurityError
          // is thrown. When in private mode on iOS Safari, a QuotaExceededError is
          // thrown (see #49)
          if (e.code === e.SECURITY_ERR || e.code === e.QUOTA_EXCEEDED_ERR) {
            hasStorage = false;
          } else {
            throw e;
          }
        }

        var canStoreURLs = hasStorage;

        var WebStorageUrlStorage = /*#__PURE__*/function () {
          function WebStorageUrlStorage() {
            urlStorage_classCallCheck(this, WebStorageUrlStorage);
          }

          urlStorage_createClass(WebStorageUrlStorage, [{
            key: "findAllUploads",
            value: function findAllUploads() {
              var results = this._findEntries('tus::');

              return Promise.resolve(results);
            }
          }, {
            key: "findUploadsByFingerprint",
            value: function findUploadsByFingerprint(fingerprint) {
              var results = this._findEntries("tus::".concat(fingerprint, "::"));

              return Promise.resolve(results);
            }
          }, {
            key: "removeUpload",
            value: function removeUpload(urlStorageKey) {
              localStorage.removeItem(urlStorageKey);
              return Promise.resolve();
            }
          }, {
            key: "addUpload",
            value: function addUpload(fingerprint, upload) {
              var id = Math.round(Math.random() * 1e12);
              var key = "tus::".concat(fingerprint, "::").concat(id);
              localStorage.setItem(key, JSON.stringify(upload));
              return Promise.resolve(key);
            }
          }, {
            key: "_findEntries",
            value: function _findEntries(prefix) {
              var results = [];

              for (var i = 0; i < localStorage.length; i++) {
                var _key = localStorage.key(i);

                if (_key.indexOf(prefix) !== 0) continue;

                try {
                  var upload = JSON.parse(localStorage.getItem(_key));
                  upload.urlStorageKey = _key;
                  results.push(upload);
                } catch (e) {// The JSON parse error is intentionally ignored here, so a malformed
                  // entry in the storage cannot prevent an upload.
                }
              }

              return results;
            }
          }]);
          return WebStorageUrlStorage;
        }(); // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/httpStack.js


        function httpStack_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function httpStack_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function httpStack_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) httpStack_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) httpStack_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /* global window */


        var XHRHttpStack = /*#__PURE__*/function () {
          function XHRHttpStack() {
            httpStack_classCallCheck(this, XHRHttpStack);
          }

          httpStack_createClass(XHRHttpStack, [{
            key: "createRequest",
            value: function createRequest(method, url) {
              return new Request(method, url);
            }
          }, {
            key: "getName",
            value: function getName() {
              return 'XHRHttpStack';
            }
          }]);
          return XHRHttpStack;
        }();

        var Request = /*#__PURE__*/function () {
          function Request(method, url) {
            httpStack_classCallCheck(this, Request);
            this._xhr = new XMLHttpRequest();

            this._xhr.open(method, url, true);

            this._method = method;
            this._url = url;
            this._headers = {};
          }

          httpStack_createClass(Request, [{
            key: "getMethod",
            value: function getMethod() {
              return this._method;
            }
          }, {
            key: "getURL",
            value: function getURL() {
              return this._url;
            }
          }, {
            key: "setHeader",
            value: function setHeader(header, value) {
              this._xhr.setRequestHeader(header, value);

              this._headers[header] = value;
            }
          }, {
            key: "getHeader",
            value: function getHeader(header) {
              return this._headers[header];
            }
          }, {
            key: "setProgressHandler",
            value: function setProgressHandler(progressHandler) {
              // Test support for progress events before attaching an event listener
              if (!('upload' in this._xhr)) {
                return;
              }

              this._xhr.upload.onprogress = function (e) {
                if (!e.lengthComputable) {
                  return;
                }

                progressHandler(e.loaded);
              };
            }
          }, {
            key: "send",
            value: function send() {
              var _this = this;

              var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              return new Promise(function (resolve, reject) {
                _this._xhr.onload = function () {
                  resolve(new Response(_this._xhr));
                };

                _this._xhr.onerror = function (err) {
                  reject(err);
                };

                _this._xhr.send(body);
              });
            }
          }, {
            key: "abort",
            value: function abort() {
              this._xhr.abort();

              return Promise.resolve();
            }
          }, {
            key: "getUnderlyingObject",
            value: function getUnderlyingObject() {
              return this._xhr;
            }
          }]);
          return Request;
        }();

        var Response = /*#__PURE__*/function () {
          function Response(xhr) {
            httpStack_classCallCheck(this, Response);
            this._xhr = xhr;
          }

          httpStack_createClass(Response, [{
            key: "getStatus",
            value: function getStatus() {
              return this._xhr.status;
            }
          }, {
            key: "getHeader",
            value: function getHeader(header) {
              return this._xhr.getResponseHeader(header);
            }
          }, {
            key: "getBody",
            value: function getBody() {
              return this._xhr.responseText;
            }
          }, {
            key: "getUnderlyingObject",
            value: function getUnderlyingObject() {
              return this._xhr;
            }
          }]);
          return Response;
        }(); // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/isReactNative.js


        var isReactNative = function isReactNative() {
          return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
        };
        /* harmony default export */


        var browser_isReactNative = isReactNative; // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/uriToBlob.js

        /**
         * uriToBlob resolves a URI to a Blob object. This is used for
         * React Native to retrieve a file (identified by a file://
         * URI) as a blob.
         */

        function uriToBlob(uri) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';

            xhr.onload = function () {
              var blob = xhr.response;
              resolve(blob);
            };

            xhr.onerror = function (err) {
              reject(err);
            };

            xhr.open('GET', uri);
            xhr.send();
          });
        } // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/isCordova.js


        var isCordova = function isCordova() {
          return typeof window != 'undefined' && (typeof window.PhoneGap != 'undefined' || typeof window.Cordova != 'undefined' || typeof window.cordova != 'undefined');
        };
        /* harmony default export */


        var browser_isCordova = isCordova; // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js

        /**
         * readAsByteArray converts a File object to a Uint8Array.
         * This function is only used on the Apache Cordova platform.
         * See https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/index.html#read-a-file
         */

        function readAsByteArray(chunk) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            reader.onload = function () {
              var value = new Uint8Array(reader.result);
              resolve({
                value: value
              });
            };

            reader.onerror = function (err) {
              reject(err);
            };

            reader.readAsArrayBuffer(chunk);
          });
        } // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/fileReader.js


        function fileReader_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function fileReader_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function fileReader_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) fileReader_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) fileReader_defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var fileReader_FileSource = /*#__PURE__*/function () {
          // Make this.size a method
          function FileSource(file) {
            fileReader_classCallCheck(this, FileSource);
            this._file = file;
            this.size = file.size;
          }

          fileReader_createClass(FileSource, [{
            key: "slice",
            value: function slice(start, end) {
              // In Apache Cordova applications, a File must be resolved using
              // FileReader instances, see
              // https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html#read-a-file
              if (browser_isCordova()) {
                return readAsByteArray(this._file.slice(start, end));
              }

              var value = this._file.slice(start, end);

              return Promise.resolve({
                value: value
              });
            }
          }, {
            key: "close",
            value: function close() {// Nothing to do here since we don't need to release any resources.
            }
          }]);
          return FileSource;
        }();

        var StreamSource = /*#__PURE__*/function () {
          function StreamSource(reader, chunkSize) {
            fileReader_classCallCheck(this, StreamSource);
            this._chunkSize = chunkSize;
            this._buffer = undefined;
            this._bufferOffset = 0;
            this._reader = reader;
            this._done = false;
          }

          fileReader_createClass(StreamSource, [{
            key: "slice",
            value: function slice(start, end) {
              if (start < this._bufferOffset) {
                return Promise.reject(new Error("Requested data is before the reader's current offset"));
              }

              return this._readUntilEnoughDataOrDone(start, end);
            }
          }, {
            key: "_readUntilEnoughDataOrDone",
            value: function _readUntilEnoughDataOrDone(start, end) {
              var _this = this;

              var hasEnoughData = end <= this._bufferOffset + len(this._buffer);

              if (this._done || hasEnoughData) {
                var value = this._getDataFromBuffer(start, end);

                var done = value == null ? this._done : false;
                return Promise.resolve({
                  value: value,
                  done: done
                });
              }

              return this._reader.read().then(function (_ref) {
                var value = _ref.value,
                    done = _ref.done;

                if (done) {
                  _this._done = true;
                } else if (_this._buffer === undefined) {
                  _this._buffer = value;
                } else {
                  _this._buffer = concat(_this._buffer, value);
                }

                return _this._readUntilEnoughDataOrDone(start, end);
              });
            }
          }, {
            key: "_getDataFromBuffer",
            value: function _getDataFromBuffer(start, end) {
              // Remove data from buffer before `start`.
              // Data might be reread from the buffer if an upload fails, so we can only
              // safely delete data when it comes *before* what is currently being read.
              if (start > this._bufferOffset) {
                this._buffer = this._buffer.slice(start - this._bufferOffset);
                this._bufferOffset = start;
              } // If the buffer is empty after removing old data, all data has been read.


              var hasAllDataBeenRead = len(this._buffer) === 0;

              if (this._done && hasAllDataBeenRead) {
                return null;
              } // We already removed data before `start`, so we just return the first
              // chunk from the buffer.


              return this._buffer.slice(0, end - start);
            }
          }, {
            key: "close",
            value: function close() {
              if (this._reader.cancel) {
                this._reader.cancel();
              }
            }
          }]);
          return StreamSource;
        }();

        function len(blobOrArray) {
          if (blobOrArray === undefined) return 0;
          if (blobOrArray.size !== undefined) return blobOrArray.size;
          return blobOrArray.length;
        }
        /*
          Typed arrays and blobs don't have a concat method.
          This function helps StreamSource accumulate data to reach chunkSize.
        */


        function concat(a, b) {
          if (a.concat) {
            // Is `a` an Array?
            return a.concat(b);
          }

          if (a instanceof Blob) {
            return new Blob([a, b], {
              type: a.type
            });
          }

          if (a.set) {
            // Is `a` a typed array?
            var c = new a.constructor(a.length + b.length);
            c.set(a);
            c.set(b, a.length);
            return c;
          }

          throw new Error('Unknown data type');
        }

        var fileReader_FileReader = /*#__PURE__*/function () {
          function FileReader() {
            fileReader_classCallCheck(this, FileReader);
          }

          fileReader_createClass(FileReader, [{
            key: "openFile",
            value: function openFile(input, chunkSize) {
              // In React Native, when user selects a file, instead of a File or Blob,
              // you usually get a file object {} with a uri property that contains
              // a local path to the file. We use XMLHttpRequest to fetch
              // the file blob, before uploading with tus.
              if (browser_isReactNative() && input && typeof input.uri !== 'undefined') {
                return uriToBlob(input.uri).then(function (blob) {
                  return new fileReader_FileSource(blob);
                })["catch"](function (err) {
                  throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(err));
                });
              } // Since we emulate the Blob type in our tests (not all target browsers
              // support it), we cannot use `instanceof` for testing whether the input value
              // can be handled. Instead, we simply check is the slice() function and the
              // size property are available.


              if (typeof input.slice === 'function' && typeof input.size !== 'undefined') {
                return Promise.resolve(new fileReader_FileSource(input));
              }

              if (typeof input.read === 'function') {
                chunkSize = +chunkSize;

                if (!isFinite(chunkSize)) {
                  return Promise.reject(new Error('cannot create source for stream without a finite value for the `chunkSize` option'));
                }

                return Promise.resolve(new StreamSource(input, chunkSize));
              }

              return Promise.reject(new Error('source object may only be an instance of File, Blob, or Reader in this environment'));
            }
          }]);
          return FileReader;
        }(); // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/fingerprint.js
        // TODO: Differenciate between input types

        /**
         * Generate a fingerprint for a file which will be used the store the endpoint
         *
         * @param {File} file
         * @param {Object} options
         * @param {Function} callback
         */


        function fingerprint_fingerprint(file, options) {
          if (browser_isReactNative()) {
            return Promise.resolve(reactNativeFingerprint(file, options));
          }

          return Promise.resolve(['tus-br', file.name, file.type, file.size, file.lastModified, options.endpoint].join('-'));
        }

        function reactNativeFingerprint(file, options) {
          var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : 'noexif';
          return ['tus-rn', file.name || 'noname', file.size || 'nosize', exifHash, options.endpoint].join('/');
        }

        function hashCode(str) {
          // from https://stackoverflow.com/a/8831937/151666
          var hash = 0;

          if (str.length === 0) {
            return hash;
          }

          for (var i = 0; i < str.length; i++) {
            var _char = str.charCodeAt(i);

            hash = (hash << 5) - hash + _char;
            hash &= hash; // Convert to 32bit integer
          }

          return hash;
        } // CONCATENATED MODULE: ./node_modules/tus-js-client/lib.esm/browser/index.js


        function browser_typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            browser_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            browser_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return browser_typeof(obj);
        }

        function browser_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function browser_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function browser_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) browser_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) browser_defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function browser_inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) browser_setPrototypeOf(subClass, superClass);
        }

        function browser_setPrototypeOf(o, p) {
          browser_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return browser_setPrototypeOf(o, p);
        }

        function browser_createSuper(Derived) {
          return function () {
            var Super = browser_getPrototypeOf(Derived),
                result;

            if (browser_isNativeReflectConstruct()) {
              var NewTarget = browser_getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return browser_possibleConstructorReturn(this, result);
          };
        }

        function browser_possibleConstructorReturn(self, call) {
          if (call && (browser_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return browser_assertThisInitialized(self);
        }

        function browser_assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function browser_isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function browser_getPrototypeOf(o) {
          browser_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return browser_getPrototypeOf(o);
        }

        function browser_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function browser_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              browser_ownKeys(Object(source), true).forEach(function (key) {
                browser_defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              browser_ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function browser_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }
        /* global window */


        var browser_defaultOptions = browser_objectSpread({}, upload.defaultOptions, {
          httpStack: new XHRHttpStack(),
          fileReader: new fileReader_FileReader(),
          urlStorage: canStoreURLs ? new WebStorageUrlStorage() : new NoopUrlStorage(),
          fingerprint: fingerprint_fingerprint
        });

        var browser_Upload = /*#__PURE__*/function (_BaseUpload) {
          browser_inherits(Upload, _BaseUpload);

          var _super = browser_createSuper(Upload);

          function Upload() {
            var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            browser_classCallCheck(this, Upload);
            options = browser_objectSpread({}, browser_defaultOptions, {}, options);
            return _super.call(this, file, options);
          }

          browser_createClass(Upload, null, [{
            key: "terminate",
            value: function terminate(url, options, cb) {
              options = browser_objectSpread({}, browser_defaultOptions, {}, options);
              return upload.terminate(url, options, cb);
            }
          }]);
          return Upload;
        }(upload);

        var _window = window,
            browser_XMLHttpRequest = _window.XMLHttpRequest,
            browser_Blob = _window.Blob;
        var isSupported = browser_XMLHttpRequest && browser_Blob && typeof browser_Blob.prototype.slice === 'function'; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/UploadDialog.vue?vue&type=template&id=54f3294e&

        var UploadDialogvue_type_template_id_54f3294e_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-fixed\n  opw-z-50\n  opw-overflow-auto\n  opw-flex\n  opw-shadow\n  opw-shadow-md\n  upload-dialog",
            on: {
              "click": function ($event) {
                if ($event.target !== $event.currentTarget) {
                  return null;
                }

                return _vm.$emit('close');
              }
            }
          }, [_c('div', {
            staticClass: "\n      opw-relative\n      opw-py-6\n      opw-px-4\n      opw-bg-white\n      opw-w-full\n      opw-max-w-md\n      opw-m-auto\n      opw-flex-col\n      opw-flex\n    "
          }, [_c('div', {
            staticClass: "opw-text-body-2"
          }, [_c('span', {
            staticClass: "headline"
          }, [_vm._v(_vm._s(_vm.$t('reviewForm.addVideoButton')))])]), _c('div', [_c('div', {}, [_c('label', {
            staticClass: "\n            opw-my-4\n            opw-align-middle\n            opw-text-center\n            opw-py-3\n            opw-px-6\n            opw-inline-block\n            opw-cursor-pointer\n            opw-rounded\n            opw-btn\n            opw-uppercase\n            opw-bg-grey\n            opw-text-white\n            opw-border-none\n            opw-font-sans\n            hover:opw-bg-grey\n            opw-text-body-1\n          ",
            attrs: {
              "for": "review-video",
              "disabled": _vm.disablePhoto
            }
          }, [_c('div', [_vm._v(_vm._s(_vm.$t('reviewForm.uploadVideo')))])]), _c('input', {
            ref: "image",
            staticClass: "opw-hidden",
            attrs: {
              "accept": "image/*;capture=camera",
              "id": "review-video",
              "type": "file"
            },
            on: {
              "change": _vm.onVideoFilePicked
            }
          })]), _c('hr', {
            staticClass: "opw-border-solid opw-border opw-border-grey-light"
          }), _c('div', {
            staticClass: "opw-text-body-2 opw-my-4"
          }, [_vm._v(" " + _vm._s(_vm.$t('reviewForm.useYoutube')) + " ")]), _c('label', {
            staticClass: "opw-block opw-text-xs opw-mb-2",
            style: _vm.formHeadingsStyle,
            attrs: {
              "for": "youtubeLink"
            }
          }, [_vm._v(_vm._s(_vm.$t('reviewForm.youtubeLink')))]), _vm.youtubeLinkErrors.length > 0 ? _c('div', {
            staticClass: "opw-text-red-dark opw-text-xs"
          }, _vm._l(_vm.youtubeLinkErrors, function (error) {
            return _c('div', {
              key: error
            }, [_vm._v(" " + _vm._s(error) + " ")]);
          }), 0) : _vm._e(), _c('div', {
            staticClass: "opw-flex opw-items-center"
          }, [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.youtubeLink,
              expression: "youtubeLink"
            }],
            staticClass: "\n            opw-border-grey-light\n            opw-border-double\n            opw-text-black\n            opw-rounded\n            opw-h-8\n            opw-w-full\n            opw-max-w-full\n            opw-py-1\n            opw-px-3\n          ",
            style: _vm.formInputStyle,
            attrs: {
              "type": "text",
              "id": "youtubeLink",
              "placeholder": _vm.$t('reviewForm.youtubePlaceholder')
            },
            domProps: {
              "value": _vm.youtubeLink
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.youtubeLink = $event.target.value;
              }
            }
          }), _c('button', {
            staticClass: "\n            opw-ml-2\n            opw-align-middle\n            opw-text-center\n            opw-py-3\n            opw-border-none\n            opw-px-4\n            opw-inline-block\n            opw-cursor-pointer\n            opw-rounded\n            opw-btn\n            opw-uppercase\n            opw-bg-grey\n            opw-text-white\n            opw-font-sans\n            opw-text-base\n            hover:opw-bg-grey\n          ",
            attrs: {
              "disabled": !_vm.youtubeLink || _vm.youtubeLinkErrors.length > 0
            },
            on: {
              "click": _vm.uploadYoutubeVideo
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('reviewForm.confirm')) + " ")])])]), _c('span', {
            staticClass: "opw-absolute opw-top-0 opw-right-0 opw-p-4",
            on: {
              "click": function ($event) {
                return _vm.$emit('close');
              }
            }
          }, [_c('close-icon')], 1)])]);
        };

        var UploadDialogvue_type_template_id_54f3294e_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/UploadDialog.vue?vue&type=template&id=54f3294e&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/CloseIcon.vue?vue&type=template&id=86dcec16&functional=true&

        var CloseIconvue_type_template_id_86dcec16_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('svg', {
            staticClass: "\n          opw-h-8 opw-w-8 opw-fill-current opw-text-grey\n          hover:opw-text-grey-dark opw-cursor-pointer\n        ",
            attrs: {
              "role": "img",
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 20 20"
            }
          }, [_c('title', [_vm._v(_vm._s(_vm.parent.$t('reviewForm.close')))]), _c('path', {
            attrs: {
              "d": "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            }
          })]);
        };

        var CloseIconvue_type_template_id_86dcec16_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/CloseIcon.vue?vue&type=template&id=86dcec16&functional=true&
        // CONCATENATED MODULE: ./src/components/functional/CloseIcon.vue

        var CloseIcon_script = {};
        /* normalize component */

        var CloseIcon_component = normalizeComponent(CloseIcon_script, CloseIconvue_type_template_id_86dcec16_functional_true_render, CloseIconvue_type_template_id_86dcec16_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var CloseIcon = CloseIcon_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/UploadDialog.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var UploadDialogvue_type_script_lang_js_ = {
          name: 'UploadDialog',
          components: {
            CloseIcon: CloseIcon
          },
          props: {
            formHeadingsStyle: {
              type: Object,
              default: () => ({})
            },
            formInputStyle: {
              type: Object,
              default: () => ({})
            },
            disablePhoto: {
              type: Boolean,
              default: false
            },
            youtubeLinkRegex: {
              type: RegExp,
              default: () => /./
            },
            onVideoFilePicked: {
              type: Function,
              default: () => {}
            }
          },

          data() {
            return {
              youtubeLink: null
            };
          },

          computed: {
            youtubeLinkErrors() {
              const errors = [];
              if (this.youtubeLink === null) return errors;

              if (!this.youtubeLinkRegex.test(this.youtubeLink)) {
                errors.push(this.$t('errorMessages.youtubeInvalid'));
              }

              return errors;
            }

          },
          methods: {
            uploadYoutubeVideo() {
              if (this.youtubeLinkRegex.test(this.youtubeLink)) {
                this.$emit('video:uploaded', this.youtubeLink);
                this.$emit('close');
              }
            }

          }
        }; // CONCATENATED MODULE: ./src/components/UploadDialog.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_UploadDialogvue_type_script_lang_js_ = UploadDialogvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/UploadDialog.vue?vue&type=style&index=0&lang=css&

        var UploadDialogvue_type_style_index_0_lang_css_ = __webpack_require__("c6bf"); // CONCATENATED MODULE: ./src/components/UploadDialog.vue

        /* normalize component */


        var UploadDialog_component = normalizeComponent(components_UploadDialogvue_type_script_lang_js_, UploadDialogvue_type_template_id_54f3294e_render, UploadDialogvue_type_template_id_54f3294e_staticRenderFns, false, null, null, null);
        /* harmony default export */

        var UploadDialog = UploadDialog_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/MediaUpload.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var MediaUploadvue_type_script_lang_js_ = {
          name: 'MediaUpload',
          components: {
            UploadDialog: UploadDialog,
            LdsSpinner: LdsSpinner,
            BinIcon: BinIcon
          },
          model: {
            prop: 'uploadedFiles',
            event: 'update:files'
          },
          props: {
            disabled: {
              type: Boolean,
              default: false
            },
            minimal: {
              type: Boolean,
              default: false
            },
            video: {
              type: Boolean,
              default: false
            },
            uploadedFilesLimit: {
              type: Number,
              default: 12
            },
            uploadedFiles: {
              type: Array,
              default: () => []
            },
            formHeadingsStyle: {
              type: Object,
              default: () => ({})
            },
            formInputStyle: {
              type: Object,
              default: () => ({})
            }
          },

          data() {
            return {
              loading: false,
              dialog: false,
              fileNameDict: {},
              uploadVideoError: null,
              uploadVideoStatus: null,
              youtubeLinkRegex: /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\-_]+)/
            };
          },

          computed: {
            fileLimit() {
              return this.video ? 1 : this.uploadedFilesLimit;
            }

          },
          methods: {
            embededLink(url) {
              if (url && typeof url === 'string') {
                if (this.youtubeLinkRegex.test(url)) {
                  const videoId = url.match(this.youtubeLinkRegex)[1];
                  return `https://www.youtube.com/embed/${videoId}`;
                } else {
                  const videoId = url.split('/')[3];
                  return `https://player.vimeo.com/video/${videoId}`;
                }
              }

              return '';
            },

            removeFile(url) {
              this.$emit('update:files', this.uploadedFiles.filter(file => file !== url));
            },

            addVideo(url) {
              this.$emit('update:files', [url]);
            },

            onFilePicked(e) {
              let filename = '';
              this.loading = true;
              this.$emit('loading', true);
              const files = e.target.files;

              if (files[0] !== undefined) {
                filename = files[0].name;

                if (!filename.includes('.')) {
                  return;
                }

                const data = new FormData();
                data.append('image', files[0]);
                data.append('async', 1);
                const fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener('load', () => {
                  if (this.uploadedFiles.length < this.fileLimit) {
                    service.sendPhoto(data).then(data => {
                      this.fileNameDict[data.imageUrl] = filename;
                      this.$emit('update:files', [...this.uploadedFiles, data.imageUrl]);
                      this.loading = false;
                      this.$emit('loading', false);
                    });
                  }
                });
              } else {
                this.$emit('loading', false);
                this.loading = false;
              }
            },

            onVideoFilePicked(e) {
              this.uploadVideoError = null;
              this.uploadVideoStatus = null;
              this.loading = true;
              this.$emit('loading', true);
              this.dialog = false;
              const files = e.target.files;

              if (files[0] !== undefined) {
                if (!files[0].name.includes('.')) {
                  return;
                }

                if (files[0].size > 500000000) {
                  this.uploadVideoError = this.$t('errorMessages.sizeTooLarge');
                  this.loading = false;
                  this.$emit('loading', false);
                  return;
                }

                if (!this.uploadedFiles[0]) {
                  const payload = {
                    fileSize: files[0].size,
                    fileName: files[0].name
                  };
                  service.startVideoUpload(payload).then(data => {
                    if (data && data.uploadLink) {
                      const upload = this.getUpload(files[0], data);
                      upload.start();
                    } else {
                      this.uploadVideoError = this.$t('errorMessages.videoFailed');
                      this.loading = false;
                      this.$emit('loading', false);
                    }
                  });
                }
              } else {
                this.$emit('loading', false);
                this.videoLoading = false;
              }
            },

            getUpload(file, {
              uploadLink,
              videoLink
            }) {
              return new browser_Upload(file, {
                uploadUrl: uploadLink,
                retryDelays: [0, 3000, 5000, 10000, 20000],
                chunkSize: 256000000,
                metadata: {
                  filetype: file.type
                },
                onError: () => {
                  this.uploadVideoError = this.$t('errorMessages.videoFailed');
                  this.loading = false;
                  this.$emit('loading', false);
                  this.$emit('update:files', []);
                },
                onProgress: (bytesUploaded, bytesTotal) => {
                  const percentage = (bytesUploaded / bytesTotal * 100).toFixed(0);
                  this.uploadVideoStatus = `${percentage}%`;
                },
                onSuccess: () => {
                  this.uploadVideoStatus = null;
                  this.loading = false;
                  this.$emit('loading', false);
                  this.$emit('update:files', [videoLink]);
                  this.fileNameDict[videoLink] = file.name;
                }
              });
            }

          }
        }; // CONCATENATED MODULE: ./src/components/MediaUpload.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_MediaUploadvue_type_script_lang_js_ = MediaUploadvue_type_script_lang_js_; // CONCATENATED MODULE: ./src/components/MediaUpload.vue

        /* normalize component */

        var MediaUpload_component = normalizeComponent(components_MediaUploadvue_type_script_lang_js_, MediaUploadvue_type_template_id_2e0ecfdd_render, MediaUploadvue_type_template_id_2e0ecfdd_staticRenderFns, false, null, null, null);
        /* harmony default export */

        var MediaUpload = MediaUpload_component.exports; // CONCATENATED MODULE: ./src/utils/constants.js

        /* harmony default export */

        var constants = {
          SERVER_URL: window.OPW_API_ENDPOINT || Object({
            "NODE_ENV": "production",
            "BASE_URL": "/"
          }).VUE_APP_API_ENDPOINT || 'http://localhost:5000',
          MAX_DISPLAYED_BODY_LENGTH: 300,
          STARS_RANGE: [1, 2, 3, 4, 5],
          EMPTY_STAR: 'empty',
          HALF_STAR: 'half',
          FULL_STAR: 'full',
          WIDGET_THEME_STYLE_CARD: 'card',
          WIDGET_THEME_STYLE_FLAT: 'flat',
          WIDGET_TOP_SECTION_STYLE_DEFAULT: 'default',
          WIDGET_TOP_SECTION_STYLE_CONDENSED: 'condensed',
          WIDGET_TOP_SECTION_STYLE_CLEAN: 'clean',
          WIDGET_TOP_SECTION_STYLE_MINIMAL: 'minimal',
          WIDGET_TOP_SECTION_STYLE_MODERN: 'modern',
          REQUEST_TYPES: {
            admin: 'admin',
            create: 'create',
            unverified: 'unverified',
            unverifiedCreate: 'unverifiedCreate',
            test: 'test'
          }
        }; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewForm.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewFormvue_type_script_lang_js_ = {
          name: 'ReviewForm',
          components: {
            MediaUpload: MediaUpload,
            Rating: Rating
          },
          props: {
            config: {
              type: Object,
              default: () => ({})
            },
            product: {
              type: Object,
              default: () => ({})
            },
            reviewer: {
              type: Object,
              default: () => ({})
            },
            isWidget: {
              type: Boolean,
              default: false
            },
            isUnverifiedCreateWidget: {
              type: Boolean,
              default: false
            },
            activeType: {
              type: String,
              default: ''
            },
            platformProductId: {
              type: String,
              default: null
            },
            admin: {
              type: Boolean,
              default: false
            },
            reviewRequest: {
              type: Boolean,
              default: false
            },
            shopId: {
              type: Number,
              default: null
            }
          },

          data() {
            return {
              reviewBody: '',
              formErrors: [],
              loading: false,
              author: { ...this.reviewer
              },
              review: {
                imageUrls: [],
                body: '',
                starRating: this.product.rating || null,
                ...(this.product.review || {})
              },
              showReviewForm: true,
              validEmailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
          },

          methods: {
            basicResponse() {
              const data = {
                name: this.author.name || this.reviewer.name,
                email: this.author.email || this.reviewer.email,
                starRating: this.review.starRating,
                body: this.review.body,
                imageUrls: this.review.imageUrls,
                videoUrl: this.videoUploads[0] || null,
                productId: this.product.id || null,
                platformProductId: this.platformProductId,
                reviewRequestId: null,
                ...Object.entries({
                  field1: {},
                  field2: {},
                  field3: {},
                  field4: {},
                  field5: {},
                  ...this.customFields
                }).reduce((dict, [key, val]) => {
                  dict[`customField${key.slice(-1)}StarRating`] = val.starRating || null;
                  return dict;
                }, {})
              };

              if (this.reviewRequest) {
                data.email = this.reviewer.email;
                data.platformProductId = this.platformProductId;
                data.reviewRequestId = this.product.reviewRequestId;
                data.reviewRequestToken = this.product.reviewRequestToken;
              } else if (this.isUnverifiedCreateWidget) {
                data.platformProductId = this.platformProductId;
                data.reviewRequestToken = null;
                data.reviewRequestId = null;
              }

              return data;
            },

            // eslint-disable-next-line max-lines-per-function
            checkForm() {
              this.formErrors = [];
              let validCustomFields = true;

              if (!this.review.starRating || this.review.starRating < 1 || this.review.starRating > 5) {
                this.formErrors.push(this.$t('errorMessages.starRatingRequired'));
              }

              if (!this.author.name) {
                this.formErrors.push(this.$t('errorMessages.nameRequired'));
              }

              if (this.isWidget) {
                if (!this.author.email) {
                  this.formErrors.push(this.$t('errorMessages.emailRequired'));
                } else if (!this.validEmailRegex.test(this.author.email)) {
                  this.formErrors.push(this.$t('errorMessages.mustBeValidEmail'));
                }
              }

              if (!this.reviewBody && this.reviewBody > 5000) {
                this.formErrors.push(this.$t('errorMessages.reviewTooLong'));
              }

              if (this.customFields) {
                Object.values(this.customFields).forEach(({
                  starRating
                }) => {
                  if (!starRating || starRating < 1 || starRating > 5) {
                    validCustomFields = false;
                  }
                });
              }

              !validCustomFields && this.formErrors.push(this.$t('errorMessages.starRatingRequired'));
              return !this.formErrors.length;
            },

            save() {
              if (this.checkForm()) {
                this.formErrors = [];
                this.sendReview(this.basicResponse());
              }
            },

            async sendReview(formData) {
              setTimeout(() => {
                this.$emit('hide');
              }, 3000);
              const {
                test,
                create,
                unverified,
                unverifiedCreate
              } = constants.REQUEST_TYPES;
              let resp;

              switch (this.activeType) {
                case test:
                  // test view when merchant sends a test email - don't POST anything, just redirect to test thank you page
                  this.redirectToThankYouPageTest();
                  return;
                // prevent running reloadData

                case create:
                  if (this.reviewId) {
                    resp = await service.postEditReview(formData, this.reviewId);
                  } else {
                    resp = await service.postCreateReview(formData);
                  }

                  break;

                case unverified:
                  resp = await service.postUnverifiedReview(formData);
                  break;

                case unverifiedCreate:
                  if (!this.admin) {
                    resp = await service.postUnverifiedReview(formData);
                  }

                  break;
              }

              this.reloadData(resp && resp.data);
            },

            redirectToThankYouPageTest() {
              window.location.href = `/shop/${this.shopId}/thanks-and-share-example`;
            },

            reloadData(data) {
              this.$emit('data-saved', this.product.id, data || {}); // this.showReviewForm = false;
            }

          },
          computed: {
            customFields() {
              return this.product.customFields;
            },

            formInputStyle() {
              return importantify({
                'font-size': this.config.fonts.formInputFontSize,
                resize: 'none'
              });
            },

            formHeadingsStyle() {
              return importantify({
                'font-size': this.config.fonts.formHeadingsFontSize
              });
            },

            formAddPhotoButtonStyle() {
              return importantify({
                'background-color': this.config.buttonsColor
              });
            },

            disablePhoto() {
              if (this.review.imageUrls.length < 5 && this.config.permissions.upTo5Photos) {
                return false;
              }

              if (this.review.imageUrls.length < 3 && this.config.permissions.upTo3Photos) {
                return false;
              }

              return this.review.imageUrls.length >= 1;
            },

            uploadedPhotosLimit() {
              if (this.config.permissions.upTo5Photos) return 5;
              if (this.config.permissions.upTo3Photos) return 3;
              return 1;
            },

            reviewId() {
              return this.product.review ? this.product.review.id : null;
            },

            photoUploads: {
              get() {
                return this.review.imageUrls.map(e => e.url);
              },

              set(val) {
                this.$set(this.review, 'imageUrls', val.map(img => ({
                  url: img
                })));
              }

            },
            videoUploads: {
              get() {
                return [this.review.videoUrl].filter(v => !!v);
              },

              set(val) {
                this.$set(this.review, 'videoUrl', val[0]);
              }

            }
          }
        }; // CONCATENATED MODULE: ./src/components/ReviewForm.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewFormvue_type_script_lang_js_ = ReviewFormvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/ReviewForm.vue?vue&type=style&index=0&id=328ee193&scoped=true&lang=css&

        var ReviewFormvue_type_style_index_0_id_328ee193_scoped_true_lang_css_ = __webpack_require__("a042"); // CONCATENATED MODULE: ./src/components/ReviewForm.vue

        /* normalize component */


        var ReviewForm_component = normalizeComponent(components_ReviewFormvue_type_script_lang_js_, ReviewFormvue_type_template_id_328ee193_scoped_true_render, ReviewFormvue_type_template_id_328ee193_scoped_true_staticRenderFns, false, null, "328ee193", null);
        /* harmony default export */

        var ReviewForm = ReviewForm_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewRequest.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewRequestvue_type_script_lang_js_ = {
          name: 'ReviewRequest',
          components: {
            ThankYouMessage: ThankYouMessage,
            ReviewForm: ReviewForm,
            ReviewProducts: ReviewProducts
          },
          mixins: [configMixin],
          props: {
            admin: {
              type: Boolean,
              default: false
            },
            review: {
              type: Object,
              required: false,
              default: () => ({})
            },
            platformProductId: {
              type: String,
              required: false,
              default: null
            },
            testData: {
              type: Object,
              default: null
            },
            configProps: {
              type: Object,
              default: () => ({})
            }
          },

          data() {
            return {
              stylesheet: null,
              showFinishButton: false,
              showThankYouMessage: false,
              showProductsToReview: false,
              productImageUrl: null,
              // products: [],
              reviewResponseBody: {
                reviewer: {
                  name: ''
                }
              },
              shopName: '',
              overallRating: null,
              reviewId: 0,
              TYPES: constants.REQUEST_TYPES,
              activeType: '',
              urlParams: {},
              reviewEditToken: '',
              loading: true,
              shopConfig: {
                /* eslint-disable vue/no-unused-properties */
                fonts: {
                  formInputFontSize: null,
                  formHeadingsFontSize: null,
                  formPostFontSize: null
                },
                buttonsColor: null,
                requestFormStarsColor: '#FFD700',
                permissions: {
                  upTo3Photos: false,
                  upTo5Photos: false,
                  videoReviews: false
                }
                /* eslint-enable vue/no-unused-properties */

              }
            };
          },

          methods: {
            async redirectIfOneProduct(prodId, {
              id
            }) {
              const isSingleRedirect = !this.isMulti && this.activeType !== this.TYPES.unverifiedCreate;

              if (id && isSingleRedirect) {
                window.location.href = `/reviews/${id}/thanks-and-share`;
                return;
              } else {
                this.showThankYouMessage = prodId;
                setTimeout(() => this.showThankYouMessage = false, 3000);
                await this.fetchData();
              }

              if (isSingleRedirect) {
                window.location.href = `/reviews/${this.revId}/thanks-and-share`;
              }
            },

            redirectToThankYouPage() {
              if (this.activeType === this.TYPES.unverifiedCreate) {
                this.$emit('hide');
              } else {
                window.location.href = `/reviews/${this.revId}/thanks-and-share`;
              }
            },

            redirectToShop(url) {
              if (!this.isMulti) {
                window.location.href = url;
              } else {
                this.fetchData();
              }
            },

            setEditing(index, val = false) {
              this.$set(this.reviewResponseBody.products[index], 'isEditing', val);
            },

            deleteReview(prod) {
              service.postDeleteReview({}, prod.review.id, this.urlParams.review_edit_token, prod.reviewRequestToken).then(res => {
                this.redirectToShop(res.data.shopDomain);
              });
            },

            getUrlParams() {
              const acceptedParams = ['rating', 'is_editing', 'shop_id', 'test', 'review_edit_token', 'review_request_token', 'review_id', 'review_request_id', 'product_id'];
              const params = Object.fromEntries(decodeURI(window.location.search).slice(1).split('&').map(p => p.split('=')).filter(p => p[0] && acceptedParams.includes(p[0])));

              if (params.is_editing === 'true') {
                params.is_editing = true;
              }

              if (this.testData) {
                Object.assign(params, { ...this.testData,
                  test: true
                });
              }

              return params;
            },

            isReviewRequest() {
              return !!(this.urlParams.review_request_id && this.urlParams.review_request_token);
            },

            isUnverifiedEditingReview() {
              return !!(this.urlParams.review_id && this.urlParams.review_edit_token && this.urlParams.is_editing);
            },

            isTest() {
              return !!(this.urlParams.shop_id && this.urlParams.test) || this.testData;
            },

            setInitialValues(review) {
              this.shopName = review.shopName;
              this.productImageUrl = review.products[0] ? review.products[0].productImageUrl : '';
              this.showProductsToReview = review.products.some(p => p.review);

              if (![this.TYPES.admin, this.TYPES.unverifiedCreate].includes(this.activeType)) {
                this.shopConfig = review.shopConfig;
                this.$i18n.locale = review.shopConfig.preferredLanguage;
              }
            },

            setReviewType() {
              if (this.admin) {
                return this.TYPES.admin;
              } else if (this.isReviewRequest()) {
                return this.TYPES.create;
              } else if (this.isUnverifiedEditingReview()) {
                return this.TYPES.unverified;
              } else if (this.isUnverifiedCreateWidget) {
                return this.TYPES.unverifiedCreate;
              } else if (this.isTest()) {
                return this.TYPES.test;
              }
            },

            setConfig(data) {
              this.reviewResponseBody = data || {
                reviewer: {
                  name: ''
                }
              };

              if (data) {
                if (this.urlParams.product_id && +this.urlParams.product_id > 0) {
                  // display specified product at the top of the list
                  data.products.sort((a, b) => {
                    if (+a.id === +this.urlParams.product_id) {
                      return -1;
                    } else if (+b.id === +this.urlParams.product_id) {
                      return 1;
                    }

                    return 0;
                  });
                }

                if (this.urlParams.rating && constants.STARS_RANGE.includes(+this.urlParams.rating)) {
                  // override default star rating value for review form
                  data.products[0].rating = +this.urlParams.rating;
                }

                data.products && data.products.sort((a, b) => !!a.review - !!b.review);
                this.setInitialValues(data);
              }
            },

            async fetchData() {
              let res = {};

              switch (this.activeType) {
                case this.TYPES.test:
                  if (this.urlParams.shop_id) {
                    res = await service.getFirstReview({
                      test: true,
                      shop_id: this.urlParams.shop_id
                    });
                  }

                  break;

                case this.TYPES.create:
                  res = await service.getFirstReview({
                    review_request_id: this.urlParams.review_request_id,
                    review_request_token: this.urlParams.review_request_token,
                    is_editing: this.urlParams.is_editing || ''
                  });
                  break;

                case this.TYPES.unverified:
                  res = await service.getUnverifiedEditReview({
                    review_id: this.urlParams.review_id,
                    review_edit_token: this.urlParams.review_edit_token,
                    is_editing: this.urlParams.is_editing || ''
                  }, this.urlParams.review_id);
                  break;

                case this.TYPES.unverifiedCreate:
                  res = mapObjKeysRecursive(this.review, snakeToCamel);
                  break;
              }

              if (Object.keys(res).length) {
                this.setConfig(res);
              }
            },

            handleCss(css) {
              if (!this.stylesheet) {
                const sheet = document.querySelector('#opw-review-request-css');

                if (sheet) {
                  this.stylesheet = sheet;
                } else {
                  const sheet = document.createElement('style');
                  this.stylesheet = sheet;
                  document.head.appendChild(sheet);
                }
              }

              this.stylesheet.innerHTML = css;
            }

          },
          computed: {
            revId() {
              var _this$reviewList$find, _this$reviewList$find2;

              return !isNaN(this.reviewId) && this.reviewId > 0 ? +this.reviewId : (_this$reviewList$find = this.reviewList.find(item => {
                var _item$review;

                return item === null || item === void 0 ? void 0 : (_item$review = item.review) === null || _item$review === void 0 ? void 0 : _item$review.id;
              })) === null || _this$reviewList$find === void 0 ? void 0 : (_this$reviewList$find2 = _this$reviewList$find.review) === null || _this$reviewList$find2 === void 0 ? void 0 : _this$reviewList$find2.id;
            },

            products() {
              return this.reviewResponseBody.products;
            },

            isMulti() {
              return this.products && this.products.length > 1;
            },

            reviewList() {
              const prods = this.products && this.products.length ? this.products : [{}];
              return prods.slice().sort((a, b) => !!a.review - !!b.review);
            },

            mainConfig() {
              return { ...this.shopConfig,
                ...this.configProps
              };
            },

            isWidget() {
              const {
                unverified,
                unverifiedCreate
              } = this.TYPES;
              return [unverified, unverifiedCreate].includes(this.activeType);
            },

            isUnverifiedCreateWidget() {
              return Object.keys(this.urlParams).length === 0 && !this.admin;
            },

            reviewsCardStarsStyle() {
              return {
                color: this.mainConfig.requestFormStarsColor
              };
            }

          },
          watch: {
            testData() {
              this.fetchData();
            },

            activeType() {
              this.fetchData();
            },

            'mainConfig.requestFormCustomCss': {
              handler(val) {
                this.handleCss(val);
              }

            }
          },

          mounted() {
            this.urlParams = this.getUrlParams();

            if (this.urlParams.rating && constants.STARS_RANGE.includes(+this.urlParams.rating)) {
              this.overallRating = +this.urlParams.rating;
            }

            if (this.urlParams.review_id) {
              this.reviewId = this.urlParams.review_id;
            }

            if (this.urlParams.review_edit_token) {
              this.reviewEditToken = this.urlParams.review_edit_token;
            }

            this.activeType = this.setReviewType();
            this.loading = false;
          }

        }; // CONCATENATED MODULE: ./src/components/ReviewRequest.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewRequestvue_type_script_lang_js_ = ReviewRequestvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=0be1356c&scoped=true&lang=css&

        var basevue_type_style_index_0_id_0be1356c_scoped_true_lang_css_ = __webpack_require__("6890"); // EXTERNAL MODULE: ./src/components/ReviewRequest.vue?vue&type=style&index=1&id=0be1356c&scoped=true&lang=scss&


        var ReviewRequestvue_type_style_index_1_id_0be1356c_scoped_true_lang_scss_ = __webpack_require__("024e"); // EXTERNAL MODULE: ./src/components/ReviewRequest.vue?vue&type=style&index=2&lang=scss&


        var ReviewRequestvue_type_style_index_2_lang_scss_ = __webpack_require__("2b0b"); // CONCATENATED MODULE: ./src/components/ReviewRequest.vue

        /* normalize component */


        var ReviewRequest_component = normalizeComponent(components_ReviewRequestvue_type_script_lang_js_, ReviewRequestvue_type_template_id_0be1356c_scoped_true_render, ReviewRequestvue_type_template_id_0be1356c_scoped_true_staticRenderFns, false, null, "0be1356c", null);
        /* harmony default export */

        var ReviewRequest = ReviewRequest_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/OpinewGallery.vue?vue&type=template&id=2a50e6e1&scoped=true&

        var OpinewGalleryvue_type_template_id_2a50e6e1_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('transition', {
            attrs: {
              "name": "fade"
            }
          }, [typeof _vm.index === 'number' ? _c('div', {
            staticClass: "opw-light-gallery",
            on: {
              "touchstart": _vm.touchstartHandler,
              "touchmove": _vm.touchmoveHandler,
              "touchend": _vm.touchendHandler
            }
          }, [_c('div', {
            staticClass: "opw-light-gallery__modal",
            style: "background: " + _vm.background,
            on: {
              "click": function ($event) {
                return _vm.close();
              }
            }
          }, [_c('div', {
            class: ['opw-light-gallery__spinner', !_vm.isImageLoaded || 'hide']
          }, [_c('div', {
            staticClass: "opw-light-gallery__dot",
            style: "border-color: " + _vm.interfaceColor
          }), _c('div', {
            staticClass: "opw-light-gallery__dot",
            style: "border-color: " + _vm.interfaceColor
          }), _c('div', {
            staticClass: "opw-light-gallery__dot",
            style: "border-color: " + _vm.interfaceColor
          })]), _c('div', {
            staticClass: "opw-light-gallery__container"
          }, [_c('ul', {
            staticClass: "opw-light-gallery__content"
          }, _vm._l(_vm.formattedImages, function (image, imageIndex) {
            return _c('li', {
              key: imageIndex,
              staticClass: "opw-light-gallery__image-container",
              style: "transform: translate3d(" + _vm.index * -100 + "%, 0px, 0px);"
            }, [_c('div', {
              staticClass: "opw-light-gallery__image opw-rounded opw-overflow-hidden",
              on: {
                "click": function ($event) {
                  $event.stopPropagation();
                }
              }
            }, [_c('div', {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: image.title && _vm.isImageLoaded,
                expression: "image.title && isImageLoaded"
              }],
              staticClass: "opw-light-gallery__text",
              style: "background: " + _vm.background + "; color: " + _vm.interfaceColor
            }, [_vm._v(" " + _vm._s(image.title) + " ")]), _c('div', {
              staticClass: "opw-flex-row opw-flex opw-justify-center opw-bg-white opw-flex opw-flex-column  opw-box-border"
            }, [/(vimeo|youtu\.?be)/i.test(image.url) ? _c('div', {
              staticClass: "opw-light-gallery__image video__container opw-p-2",
              on: {
                "click": function ($event) {
                  $event.stopPropagation();
                }
              }
            }, [_c('iframe', {
              ref: "lg-img-" + imageIndex,
              refInFor: true,
              staticClass: "video",
              attrs: {
                "src": _vm.videoSrc(image),
                "width": "640",
                "height": "360",
                "frameborder": "0",
                "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                "allowfullscreen": ""
              },
              on: {
                "load": function ($event) {
                  return _vm.imageLoaded($event, imageIndex);
                }
              }
            })]) : _c('div', {
              staticClass: "opw-flex-none opw-flex opw-justify-center opw-align-middle md:opw-w-1/2 opw-bg-grey-light"
            }, [_c('img', {
              ref: "lg-img-" + imageIndex,
              refInFor: true,
              attrs: {
                "src": _vm.shouldPreload(imageIndex) ? _vm.clearImgUrl(image.url) : false
              },
              on: {
                "load": function ($event) {
                  return _vm.imageLoaded($event, imageIndex);
                }
              }
            })]), _c('div', {
              staticClass: "opw-w-1/2 opw-flex-none opw-overflow-hidden opw-p-4 opw-box-border opw-hidden md:opw-block opw-bg-white "
            }, [_c('p', {
              staticClass: "opw-text-left opw-mb-2",
              style: _vm.authorStyle
            }, [_vm._v(" " + _vm._s(image.userName) + " ")]), _c('div', {
              staticClass: "opw-flex opw-flex-row"
            }, [_c('stars', {
              staticClass: "opw-w-1/2 opw-text-left",
              attrs: {
                "rating": image.starRating,
                "reviews-card-stars-style": _vm.reviewsStarsStyle
              }
            }), _c('span', {
              staticClass: "opw-text-right opw-w-1/2 "
            }, [image.verifiedReview ? _c('span', {
              staticClass: "opw-ml-2 opw-verified-badge opw-text-center opw-text-white opw-px-1 opw-font-normal opw-text-sm opw-whitespace-no-wrap",
              style: _vm.verifiedStyle
            }, [_vm._v(" " + _vm._s(_vm.$t('reviewsSection.verifiedPurchase')) + " ")]) : _vm._e()])], 1), _c('p', {
              staticClass: "opw-whitespace-pre-line opw-text-left"
            }, [_vm._v(" " + _vm._s(image.body) + " ")])])])])]);
          }), 0)]), _vm.index > 0 ? _c('button', {
            staticClass: "opw-light-gallery__prev",
            style: "background: " + _vm.background,
            on: {
              "click": function ($event) {
                $event.stopPropagation();
                return _vm.prev();
              }
            }
          }, [_c('svg', {
            attrs: {
              "width": "25",
              "height": "40",
              "viewBox": "0 0 25 40"
            }
          }, [_c('polyline', {
            attrs: {
              "points": "19 5 5 20 19 35",
              "stroke-width": "3",
              "stroke-linecap": "butt",
              "fill": "none",
              "stroke-linejoin": "round",
              "stroke": _vm.interfaceColor
            }
          })])]) : _vm._e(), _vm.index + 1 < _vm.images.length ? _c('button', {
            staticClass: "opw-light-gallery__next",
            style: "background: " + _vm.background,
            on: {
              "click": function ($event) {
                $event.stopPropagation();
                return _vm.next();
              }
            }
          }, [_c('svg', {
            attrs: {
              "width": "25",
              "height": "40",
              "viewBox": "0 0 25 40"
            }
          }, [_c('polyline', {
            attrs: {
              "points": "6 5 20 20 6 35",
              "stroke-width": "3",
              "stroke-linecap": "butt",
              "fill": "none",
              "stroke-linejoin": "round",
              "stroke": _vm.interfaceColor
            }
          })])]) : _vm._e(), _c('button', {
            staticClass: "opw-light-gallery__close",
            style: "background: " + _vm.background,
            on: {
              "click": function ($event) {
                $event.stopPropagation();
                return _vm.close();
              }
            }
          }, [_c('svg', {
            attrs: {
              "width": "30",
              "height": "30"
            }
          }, [_c('g', {
            attrs: {
              "stroke-width": "3",
              "stroke": _vm.interfaceColor
            }
          }, [_c('line', {
            attrs: {
              "x1": "5",
              "y1": "5",
              "x2": "25",
              "y2": "25"
            }
          }), _c('line', {
            attrs: {
              "x1": "5",
              "y1": "25",
              "x2": "25",
              "y2": "5"
            }
          })])])])])]) : _vm._e()]);
        };

        var OpinewGalleryvue_type_template_id_2a50e6e1_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/OpinewGallery.vue?vue&type=template&id=2a50e6e1&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/OpinewGallery.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        const keyMap = {
          LEFT: 37,
          RIGHT: 39,
          ESC: 27
        };
        /* harmony default export */

        var OpinewGalleryvue_type_script_lang_js_ = {
          name: 'OpinewGallery',
          components: {
            Stars: Stars
          },
          model: {
            event: 'update:value',
            prop: 'url'
          },
          props: {
            index: {
              type: Number,
              default: 0
            },
            images: {
              type: Array,
              default: () => []
            },
            disableScroll: {
              type: Boolean,
              default: false
            },
            background: {
              type: String,
              default: 'rgba(0, 0, 0, 0.8)'
            },
            interfaceColor: {
              type: String,
              default: 'rgba(255, 255, 255, 0.8)'
            },
            reviewsStarsStyle: {
              type: Object,
              default: () => {}
            },
            authorStyle: {
              type: Object,
              default: () => {}
            },
            verifiedStyle: {
              type: Object,
              default: () => {}
            }
          },

          data() {
            return {
              isImageLoaded: false,
              bodyOverflowStyle: '',
              touch: {
                count: 0,
                x: 0,
                y: 0,
                multitouch: false,
                flag: false
              }
            };
          },

          computed: {
            formattedImages() {
              return this.images.map(image => typeof image === 'string' ? {
                url: image
              } : { ...image[1],
                url: image[0]
              });
            }

          },
          watch: {
            index(val) {
              this.setImageLoaded(val);
              if (!document) return;

              if (this.disableScroll && typeof val === 'number') {
                document.body.style.overflow = 'hidden';
              } else if (this.disableScroll && !val) {
                document.body.style.overflow = this.bodyOverflowStyle;
              }

              val === null ? this.unbindEvents() : this.bindEvents();
            }

          },

          mounted() {
            if (!document) return;
            document.body.insertBefore(this.$el, document.body.firstChild);
            this.bodyOverflowStyle = document.body.style.overflow;
          },

          beforeDestroy() {
            if (!document) return;

            if (this.disableScroll) {
              document.body.style.overflow = this.bodyOverflowStyle;
            }

            this.unbindEvents();
          },

          methods: {
            close() {
              this.$emit('update:value', null);
            },

            prev() {
              if (this.index > 0) {
                this.$emit('update:value', this.images[this.index - 1][0]);
              }
            },

            next() {
              if (this.index < this.images.length - 1) {
                this.$emit('update:value', this.images[this.index + 1][0]);
              }
            },

            imageLoaded($event, imageIndex) {
              const {
                target
              } = $event;
              target.classList.add('loaded');

              if (imageIndex === this.index) {
                this.setImageLoaded(imageIndex);
              }
            },

            getImageElByIndex(index) {
              const elements = this.$refs[`lg-img-${index}`] || [];
              return elements[0];
            },

            setImageLoaded(index) {
              const el = this.getImageElByIndex(index);
              this.isImageLoaded = !el ? false : el.classList.contains('loaded');
            },

            shouldPreload(index) {
              const el = this.getImageElByIndex(index) || {};
              const {
                src
              } = el;
              return !!src || index === this.index || index === this.index - 1 || index === this.index + 1;
            },

            bindEvents() {
              document.addEventListener('keydown', this.keyDownHandler, false);
            },

            unbindEvents() {
              document.removeEventListener('keydown', this.keyDownHandler, false);
            },

            touchstartHandler(event) {
              this.touch.count += 1;

              if (this.touch.count > 1) {
                this.touch.multitouch = true;
              }

              this.touch.x = event.changedTouches[0].pageX;
              this.touch.y = event.changedTouches[0].pageY;
            },

            touchmoveHandler(event) {
              if (this.touch.flag || this.touch.multitouch) return;
              const touchEvent = event.touches[0] || event.changedTouches[0];

              if (touchEvent.pageX - this.touch.x > 40) {
                this.touch.flag = true;
                this.prev();
              } else if (touchEvent.pageX - this.touch.x < -40) {
                this.touch.flag = true;
                this.next();
              }
            },

            touchendHandler() {
              this.touch.count -= 1;

              if (this.touch.count <= 0) {
                this.touch.multitouch = false;
              }

              this.touch.flag = false;
            },

            keyDownHandler(event) {
              switch (event.keyCode) {
                case keyMap.LEFT:
                  this.prev();
                  break;

                case keyMap.RIGHT:
                  this.next();
                  break;

                case keyMap.ESC:
                  this.close();
                  break;
              }
            },

            clearImgUrl(url) {
              let u = url;

              if (u.includes('imgix.net')) {
                const urlObj = new URL(u);
                u = decodeURIComponent(urlObj.pathname.substring(1).replace(/\+/g, '%20'));
              }

              return u;
            },

            videoSrc(video) {
              if (video.youtube) {
                return `https://www.youtube.com/embed/${video.youtube.videoId}?modestbranding=1`;
              } else {
                return `https://player.vimeo.com/video/${video.vimeo.videoId}?byline=0&portrait=0&title=0`;
              }
            }

          }
        }; // CONCATENATED MODULE: ./src/components/OpinewGallery.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_OpinewGalleryvue_type_script_lang_js_ = OpinewGalleryvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/OpinewGallery.vue?vue&type=style&index=0&id=2a50e6e1&lang=scss&scoped=true&

        var OpinewGalleryvue_type_style_index_0_id_2a50e6e1_lang_scss_scoped_true_ = __webpack_require__("7fc4"); // CONCATENATED MODULE: ./src/components/OpinewGallery.vue

        /* normalize component */


        var OpinewGallery_component = normalizeComponent(components_OpinewGalleryvue_type_script_lang_js_, OpinewGalleryvue_type_template_id_2a50e6e1_scoped_true_render, OpinewGalleryvue_type_template_id_2a50e6e1_scoped_true_staticRenderFns, false, null, "2a50e6e1", null);
        /* harmony default export */

        var OpinewGallery = OpinewGallery_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCard.vue?vue&type=template&id=25d53e92&scoped=true&

        var ReviewCardvue_type_template_id_25d53e92_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-overflow-hidden",
            class: {
              'opw-shadow-md': _vm.widgetThemeStyle === _vm.constants.WIDGET_THEME_STYLE_CARD,
              'opw-clean-review': _vm.themeStyle === _vm.constants.WIDGET_TOP_SECTION_STYLE_CLEAN,
              'opw-rounded': !['clean', 'minimal', 'condensed'].includes(_vm.themeStyle)
            },
            style: Object.assign({}, _vm.reviewsBgBorderStyle, {
              border: _vm.themeStyle === 'minimal' ? 'none' : _vm.reviewsBgBorderStyle.border
            })
          }, [_vm.showReviewImages && _vm.permissions.videoReviews && _vm.showLargeReviewImage && _vm.review.video && _vm.numberReviewColumns !== 1 ? _c('div', {
            staticClass: "opw-review-image-container opw-cursor-pointer",
            on: {
              "click": function ($event) {
                return _vm.$emit('show-vid', _vm.review.video);
              }
            }
          }, [_c('div', {
            staticClass: "opw-play-btn"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]), _c('lazy-img', {
            attrs: {
              "lazy-src": _vm.videoThumbnails[_vm.review.video],
              "alt": _vm.review.productName
            }
          })], 1) : _vm.showReviewImages && _vm.showLargeReviewImage && +_vm.numberReviewColumns > 1 && _vm.themeStyle !== _vm.constants.WIDGET_TOP_SECTION_STYLE_MINIMAL ? _c('div', {
            staticClass: "opw-review-image-container"
          }, [_vm.reviewImages(_vm.review).length > 0 && _vm.review.showImage ? _c('lazy-img', {
            style: _vm.reviewsMainImgStyle,
            attrs: {
              "css-class": "opw-review-image opw-cursor-pointer opw-w-auto",
              "lazy-src": _vm.reviewImages(_vm.review)[0],
              "alt": _vm.review.productName
            },
            nativeOn: {
              "click": function ($event) {
                _vm.$emit('show-image', _vm.reviewImages(_vm.review)[0]);
              }
            }
          }) : _vm._e(), _vm.review.imageUrls == null && _vm.review.displayedImageUrl != null && _vm.review.displayedImageUrl.length > 0 ? _c('lazy-img', {
            attrs: {
              "css-class": "opw-review-image opw-cursor-pointer",
              "lazy-src": _vm.review.displayedImageUrl,
              "alt": ""
            },
            nativeOn: {
              "click": function ($event) {
                return _vm.$emit('show-image', _vm.review.displayedImageUrl);
              }
            }
          }) : _vm._e()], 1) : _vm._e(), _c('div', {
            staticClass: " opw-py-4",
            class: _vm.themeStyle === 'minimal' ? 'opw-px-2' : 'opw-px-4'
          }, [_c('div', {
            staticClass: "opw-font-bold opw-text-lg opw-flex opw-flex-wrap\n",
            class: _vm.themeStyle === _vm.constants.WIDGET_TOP_SECTION_STYLE_MINIMAL ? 'opw-mb-2' : 'opw-mb-1',
            style: _vm.reviewsCardSecondaryTextStyle
          }, [_vm.type === 'Shop' && _vm.review.productUrl != null ? _c('div', {
            staticClass: "opw-pb-2"
          }, [_c('a', {
            attrs: {
              "href": _vm.review.productUrl
            }
          }, [_vm._v(_vm._s(_vm.review.productName))])]) : _vm._e(), _c('stars', {
            staticClass: "opw-mr-2 opw-mb-1",
            attrs: {
              "rating": _vm.review.starRating,
              "reviews-card-stars-style": _vm.reviewsCardStarsStyle
            }
          }), _c('span', {
            staticClass: " opw-flex-grow opw-pr-2"
          }, [_vm.review.verifiedReview ? _c('span', {
            staticClass: "opw-verified-badge opw-text-center opw-text-white opw-px-1 opw-font-normal opw-text-sm opw-whitespace-no-wrap opw-inline-block opw-mr-2 opw-mb-1",
            style: _vm.verifiedStyle
          }, [_vm._v(_vm._s(_vm.$t('reviewsSection.verifiedPurchase')))]) : _vm._e()]), _vm.widgetShowDates && _vm.themeStyle !== 'minimal' ? _c('span', {
            staticClass: "opw-date-created opw-italic opw-font-normal opw-text-sm opw-self-end opw-mb-1",
            style: _vm.reviewsCardDateStyle
          }, [_vm._v(" " + _vm._s(_vm.createdDate(_vm.review.createdTs)))]) : _vm._e()], 1), _vm.themeStyle === _vm.constants.WIDGET_TOP_SECTION_STYLE_CLEAN && _vm.type === 'Shop' && _vm.review.productUrl != null ? _c('div', {
            staticClass: "opw-py-4  opw-font-bold opw-text-sm  opw-text-lg "
          }, [_c('a', {
            attrs: {
              "href": _vm.review.productUrl
            }
          }, [_vm._v(_vm._s(_vm.review.productName))])]) : _vm._e(), _c('div', {
            staticClass: "opinew-review-text-container"
          }, [_vm.review.showFullReview ? _c('p', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_vm._v(" " + _vm._s(_vm.review.body) + " ")]) : _c('p', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_c('span', [_vm._v(" " + _vm._s(_vm.review.body.substr(0, _vm.constants.MAX_DISPLAYED_BODY_LENGTH)) + " ")]), _c('a', {
            staticClass: "show-more",
            attrs: {
              "href": "#"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.showFullReview(_vm.review);
              }
            }
          }, [_vm._v(" (...) " + _vm._s(_vm.$t('reviewsSection.showMore')) + " ")])])]), _vm.showReviewImages ? _c('div', {
            staticClass: "opw-w-full opw-mt-1 opw-flex"
          }, [_vm.permissions.videoReviews && _vm.review.video ? _c('div', {
            staticClass: "opw-centered-video-gallery-container-small opw-cursor-pointer opw-mr-2",
            on: {
              "click": function ($event) {
                return _vm.$emit('show-vid', _vm.review.video);
              }
            }
          }, [_c('div', {
            staticClass: "opw-play-btn opw-play-btn-small"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]), _c('lazy-img', {
            attrs: {
              "lazy-src": _vm.videoThumbnails[_vm.review.video],
              "alt": _vm.review.productName
            }
          })], 1) : _vm._e(), _vm._l(_vm.reviewImages(_vm.review), function (imageUrl, index) {
            return _c('lazy-img', {
              key: index,
              attrs: {
                "css-class": 'opw-centered-img-gallery-container-small opw-cursor-pointer opw-mr-2',
                "lazy-src": imageUrl,
                "alt": _vm.review.productName
              },
              nativeOn: {
                "click": function ($event) {
                  return _vm.$emit('show-image', imageUrl);
                }
              }
            });
          })], 2) : _vm._e()]), _vm.review.comment ? _c('div', {
            staticClass: "opw-py-4"
          }, [_c('review-comment-clean', {
            attrs: {
              "name": _vm.shop.name,
              "comment": _vm.review.comment
            }
          })], 1) : _vm._e(), _c('div', {
            staticClass: "opw-flex opw-px-4",
            class: _vm.themeStyle === _vm.constants.WIDGET_TOP_SECTION_STYLE_MINIMAL ? 'opw-pt-1 opw-pb-4' : ' opw-py-4'
          }, [_c('div', {
            class: _vm.themeStyle !== 'minimal' && 'opw-ml-auto'
          }, [_c('span', {
            class: [_vm.numberReviewColumns !== 1 ? 'opw-ml-auto' : 'opw-mr-auto', 'opw-flex', 'opw-items-center']
          }, [_c('span', {
            staticClass: "review-author opw-text-sm opw-inline-flex opw-items-center",
            style: _vm.reviewsCardUserNameStyle
          }, [_vm.review.userName ? _c('span', {
            staticClass: "opw-align-top opw-order-last",
            style: {
              color: _vm.secondaryTextColor
            }
          }, [_vm._v(_vm._s(_vm.review.userName))]) : _c('span', {
            staticClass: "opw-align-top",
            style: {
              color: _vm.secondaryTextColor
            }
          }, [_vm._v(_vm._s(_vm.$t('reviewsSection.reviewer')))]), _vm.review.userImageUrl ? _c('lazy-img', {
            staticClass: "opw-mr-1",
            attrs: {
              "css-class": "person-img",
              "lazy-src": _vm.review.userImageUrl,
              "alt": _vm.review.userName
            }
          }) : _c('span', {
            staticClass: "opw-mr-1",
            staticStyle: {
              "font-size": "1.5em"
            }
          }, [_c('i', {
            staticClass: "opw-noci opw-noci-user-circle",
            style: {
              color: _vm.secondaryTextColor
            },
            attrs: {
              "aria-hidden": "true"
            }
          })])], 1), _vm.widgetShowDates && _vm.themeStyle === 'minimal' ? _c('span', {
            staticClass: "opw-date-created opw-float-right opw-text-sm",
            style: Object.assign({}, {
              color: _vm.secondaryTextColor
            }, _vm.reviewsCardUserNameStyle)
          }, [_vm._v(" (" + _vm._s(_vm.createdDate(_vm.review.createdTs)) + ")")]) : _vm._e()])])])]);
        };

        var ReviewCardvue_type_template_id_25d53e92_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewCard.vue?vue&type=template&id=25d53e92&scoped=true&
        // CONCATENATED MODULE: ./src/utils/date.js

        const formatDate = (date, format) => {
          date = date.replace(' ', 'T');
          const d = new Date(date);
          let month = '' + (d.getMonth() + 1);
          let day = '' + d.getDate();
          const year = d.getFullYear();

          if (month.length < 2) {
            month = '0' + month;
          }

          if (day.length < 2) {
            day = '0' + day;
          }

          switch (format) {
            case 'dd/MM/yyyy':
              return [day, month, year].join('/');

            case 'MM/dd/yyyy':
              return [month, day, year].join('/');

            case 'yyyy/MM/dd':
            default:
              return [year, month, day].join('/');
          }
        }; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/ReviewCommentClean.vue?vue&type=template&id=5297bb58&functional=true&


        var ReviewCommentCleanvue_type_template_id_5297bb58_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', {
            staticClass: "opw-px-4 opw-py-4 opinew-comment-text-container"
          }, [_c('div', {
            staticClass: "opw-text-sm opw-font-bold opw-mb-2"
          }, [_vm._v(_vm._s(_vm.props.name) + ":")]), _c('div', {
            staticClass: "opw-leading-normal"
          }, [_vm._v(_vm._s(_vm.props.comment))]), _c('span', {
            staticClass: "opw-clearfix"
          })]);
        };

        var ReviewCommentCleanvue_type_template_id_5297bb58_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/ReviewCommentClean.vue?vue&type=template&id=5297bb58&functional=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/ReviewCommentClean.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewCommentCleanvue_type_script_lang_js_ = {
          name: 'ReviewCommentClean'
        }; // CONCATENATED MODULE: ./src/components/functional/ReviewCommentClean.vue?vue&type=script&lang=js&

        /* harmony default export */

        var functional_ReviewCommentCleanvue_type_script_lang_js_ = ReviewCommentCleanvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/functional/ReviewCommentClean.vue?vue&type=style&index=0&lang=scss&

        var ReviewCommentCleanvue_type_style_index_0_lang_scss_ = __webpack_require__("1711"); // CONCATENATED MODULE: ./src/components/functional/ReviewCommentClean.vue

        /* normalize component */


        var ReviewCommentClean_component = normalizeComponent(functional_ReviewCommentCleanvue_type_script_lang_js_, ReviewCommentCleanvue_type_template_id_5297bb58_functional_true_render, ReviewCommentCleanvue_type_template_id_5297bb58_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var ReviewCommentClean = ReviewCommentClean_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCard.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewCardvue_type_script_lang_js_ = {
          name: 'ReviewCard',
          components: {
            ReviewCommentClean: ReviewCommentClean,
            LazyImg: LazyImg,
            Stars: Stars
          },
          props: {
            //  TODO: Reduce props count and simplify this
            review: {
              type: Object,
              default: () => {}
            },
            constants: {
              type: Object,
              default: () => ({})
            },
            reviewsBgBorderStyle: {
              type: Object,
              default: () => ({})
            },
            reviewsCardSecondaryTextStyle: {
              type: Object,
              default: () => ({})
            },
            showReviewImages: {
              type: Boolean,
              default: false
            },
            showLargeReviewImage: {
              type: Boolean,
              default: false
            },
            reviewsCardMainTextStyle: {
              type: Object,
              default: () => ({})
            },
            videoThumbnails: {
              type: Object,
              default: () => ({})
            },
            secondaryTextColor: {
              type: String,
              default: ''
            },
            widgetThemeStyle: {
              type: String,
              default: ''
            },
            permissions: {
              type: Object,
              default: () => ({})
            },
            numberReviewColumns: {
              type: Number,
              default: null
            },
            type: {
              type: String,
              default: ''
            },
            widgetShowDates: {
              type: Boolean,
              default: false
            },
            condensed: {
              type: Boolean,
              default: false
            },
            shop: {
              type: Object,
              default: () => ({})
            },
            fonts: {
              type: Object,
              default: () => ({})
            },
            reviewsCardStarsStyle: {
              type: Object,
              default: () => ({})
            },
            reviewsCardUserNameStyle: {
              type: Object,
              default: () => ({})
            },
            verifiedStyle: {
              type: Object,
              default: () => ({})
            },
            preferredDateFormat: {
              type: String,
              default: ''
            },
            themeStyle: {
              type: String,
              default: ''
            }
          },

          data() {
            return {};
          },

          computed: {
            // customFields() {
            //   return (
            //     this.review.customFields &&
            //     this.review.customFields.filter((f) => f.title && f.starRating)
            //   );
            // },
            reviewsMainImgStyle() {
              return importantify({
                'max-height': this.fonts.reviewImageMaxHeight
              });
            },

            reviewsCardDateStyle() {
              return importantify({
                color: this.secondaryTextColor,
                'font-size': this.fonts.reviewsCardDateFontSize
              });
            },

            createdDate() {
              return date => {
                return formatDate(date, this.preferredDateFormat || 'yyyy/MM/dd');
              };
            }

          },
          methods: {
            reviewImages(review) {
              const limit = this.permissions.upTo5Photos ? 5 : this.permissions.upTo3Photos ? 3 : 1;
              const images = this.permissions.optimisedImages && review.imageUrlsOptimised || review.imageUrls;
              if (images) return images.slice(0, limit);else return [];
            },

            showFullReview(review) {
              this.$forceUpdate();
              review.showFullReview = true;
            }

          }
        }; // CONCATENATED MODULE: ./src/components/ReviewCard.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewCardvue_type_script_lang_js_ = ReviewCardvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=25d53e92&scoped=true&lang=css&

        var basevue_type_style_index_0_id_25d53e92_scoped_true_lang_css_ = __webpack_require__("b408"); // EXTERNAL MODULE: ./src/components/ReviewCard.vue?vue&type=style&index=1&id=25d53e92&lang=scss&scoped=true&


        var ReviewCardvue_type_style_index_1_id_25d53e92_lang_scss_scoped_true_ = __webpack_require__("bf98"); // CONCATENATED MODULE: ./src/components/ReviewCard.vue

        /* normalize component */


        var ReviewCard_component = normalizeComponent(components_ReviewCardvue_type_script_lang_js_, ReviewCardvue_type_template_id_25d53e92_scoped_true_render, ReviewCardvue_type_template_id_25d53e92_scoped_true_staticRenderFns, false, null, "25d53e92", null);
        /* harmony default export */

        var ReviewCard = ReviewCard_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/PickPlan.vue?vue&type=template&id=7cc15083&functional=true&

        var PickPlanvue_type_template_id_7cc15083_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', [_c('div', {
            staticClass: "opw-bg-green-lightest opw-border-t-4 opw-border-green opw-rounded-b opw-text-grey-darkest opw-m-2 opw-px-4 opw-py-3 opw-shadow-md",
            attrs: {
              "role": "alert"
            }
          }, [_c('div', {
            staticClass: "opw-flex"
          }, [_c('div', {
            staticClass: "opw-py-1"
          }, [_c('svg', {
            staticClass: "opw-fill-current opw-h-8 opw-w-8 opw-text-grey-darkest opw-mr-4",
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 20 20"
            }
          }, [_c('path', {
            attrs: {
              "d": "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            }
          })])]), _vm._m(0)])])]);
        };

        var PickPlanvue_type_template_id_7cc15083_functional_true_staticRenderFns = [function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', [_c('p', {
            staticClass: "opw-text-2xl opw-font-bold"
          }, [_vm._v(" Opinew Product Reviews Trial Ended ")]), _c('p', {
            staticClass: "opw-text-xl"
          }, [_vm._v(" Go to Opinew Admin > Account to pick your plan ")])]);
        }]; // CONCATENATED MODULE: ./src/components/functional/PickPlan.vue?vue&type=template&id=7cc15083&functional=true&
        // CONCATENATED MODULE: ./src/components/functional/PickPlan.vue

        var PickPlan_script = {};
        /* normalize component */

        var PickPlan_component = normalizeComponent(PickPlan_script, PickPlanvue_type_template_id_7cc15083_functional_true_render, PickPlanvue_type_template_id_7cc15083_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var PickPlan = PickPlan_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedNavbar.vue?vue&type=template&id=8ae87a82&scoped=true&

        var SharedNavbarvue_type_template_id_8ae87a82_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('nav', {
            staticClass: "opinew-navbar opw-flex opw-items-center opw-justify-between opw-flex-wrap opw-py-4",
            class: _vm.themeStyle === 'modern' ? 'opw-px-0' : 'opw-px-4',
            style: {
              'background-color': _vm.navbarColor + ' !important'
            }
          }, [_c('div', {
            staticClass: "opinew-reviews-title opw-flex opw-items-center opw-flex-no-shrink opw-mr-6"
          }, [_c('span', {
            staticClass: "opw-font-semibold opw-text-xl opw-tracking-tight opw-leading-none opw-mb-2 md:opw-mb-0",
            style: _vm.titleStyle
          }, [_vm._v(_vm._s(_vm.$t('general.reviews')))])]), _c('div', {
            staticClass: "opw-flex opw-flex-row-reverse"
          }, [_vm.navbarButtons.review.show ? _c('span', {
            staticClass: "opw-navbar-button-write-review opinew-navbar-button opw-cursor-pointer opw-inline-flex opw-items-center opw-justify-center opw-px-4 opw-py-3 opw-leading-none opw-border opw-mt-0 opw-ml-2",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.$emit('show-form', [_vm.navbarButtons.review, _vm.navbarButtons.review.active]);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonReview')))]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('span', {
            staticClass: "opw-navbar-button-ask-question opinew-navbar-button opw-cursor-pointer opw-inline-flex opw-items-center opw-justify-center opw-px-4 opw-py-3 opw-leading-none opw-border opw-mt-0 opw-mr-2",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.$emit('show-form', [_vm.navbarButtons.question, _vm.navbarButtons.review.active]);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonQuestion')))]) : _vm._e()])]);
        };

        var SharedNavbarvue_type_template_id_8ae87a82_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/SharedNavbar.vue?vue&type=template&id=8ae87a82&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedNavbar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var SharedNavbarvue_type_script_lang_js_ = {
          name: 'SharedNavbar',
          props: {
            navbarButtons: {
              type: Object,
              default: () => ({})
            },
            navbarButtonsStyle: {
              type: Object,
              default: () => {}
            },
            titleStyle: {
              type: Object,
              default: () => {}
            },
            navbarColor: {
              type: String,
              default: ''
            },
            themeStyle: {
              type: String,
              default: ''
            },
            questionsAndAnswersActive: {
              type: Boolean,
              default: false
            }
          }
        }; // CONCATENATED MODULE: ./src/components/SharedNavbar.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_SharedNavbarvue_type_script_lang_js_ = SharedNavbarvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=8ae87a82&scoped=true&lang=css&

        var basevue_type_style_index_0_id_8ae87a82_scoped_true_lang_css_ = __webpack_require__("3f54"); // CONCATENATED MODULE: ./src/components/SharedNavbar.vue

        /* normalize component */


        var SharedNavbar_component = normalizeComponent(components_SharedNavbarvue_type_script_lang_js_, SharedNavbarvue_type_template_id_8ae87a82_scoped_true_render, SharedNavbarvue_type_template_id_8ae87a82_scoped_true_staticRenderFns, false, null, "8ae87a82", null);
        /* harmony default export */

        var SharedNavbar = SharedNavbar_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/QuestionsAnswers.vue?vue&type=template&id=28c59ee3&functional=true&

        var QuestionsAnswersvue_type_template_id_28c59ee3_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', {
            staticClass: "questions-container",
            class: [!['modern', 'carousel'].includes(_vm.props.theme) && 'opw-px-4', ['carousel'].includes(_vm.props.theme) && 'opw-px-2', ['default'].includes(_vm.props.theme) && 'opw-mt-4 opw-border opw-rounded'],
            style: ['carousel'].includes(_vm.props.theme) ? {
              width: '94%',
              marginLeft: '3%',
              marginRight: '3%'
            } : {}
          }, [_c('div', {
            staticClass: "opw-rounded opw-overflow-hidden ",
            class: [_vm.props.shadowed ? 'opw-shadow-md' : '']
          }, [!_vm.props.questionsExist ? _c('div', {
            staticClass: "opw-bethefirst-text opw-text-lg opw-text-center"
          }, [_c('div', [_vm._v(_vm._s(_vm.parent.$t('questionsSection.firstToAskQuestion')))]), _vm.props.navbarButtons.question.show ? _c('div', {
            staticClass: "opw-navbar-button-ask-question opinew-navbar-button opw-cursor-pointer opw-inline-block opw-mt-2 opw-px-4 opw-py-3 opw-leading-none opw-border opw-border-black opw-mt-0 opw-mx-2",
            style: _vm.props.getFontStyles('navbarButtonsFontSize'),
            attrs: {
              "href": "#"
            },
            on: {
              "click": function ($event) {
                return _vm.props.showForm();
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.parent.$t('navbar.buttonQuestion')) + " ")]) : _vm._e()]) : _vm._e(), _vm._l(_vm.props.questionsPaginated, function (question) {
            return _c('div', {
              key: question.id,
              staticClass: "question-card-container opw-text-lg opw-my-2 opw-pb-4",
              class: [['modern', 'carousel'].includes(_vm.props.theme) && 'opw-border opw-p-4 opw-my-4', ['modern'].includes(_vm.props.theme) && 'lg:opw-px-6', ['condensed'].includes(_vm.props.theme) && 'opw-px-4 opw-my-4'],
              style: ['default'].includes(_vm.props.theme) ? {} : _vm.props.reviewsBgBorderStyle
            }, [_c('div', {
              staticClass: "opw-py-4"
            }, [_c('div', {
              class: ['clean', 'condensed'].includes(_vm.props.theme) && 'opw-mb-4',
              style: _vm.props.getFontStyles('reviewsCardMainFontSize', 'textColor')
            }, [_c('span', {
              staticClass: "opw-font-bold",
              class: ['clean', 'condensed'].includes(_vm.props.theme) && 'opw-leading-8'
            }, [_vm._v(_vm._s(_vm.parent.$t('questionsSection.question'))), !['clean', 'condensed'].includes(_vm.props.theme) ? _c('span', [_vm._v(":")]) : _c('br')]), _c('span', [_vm._v(" " + _vm._s(question.question))])]), _c('div', {
              class: !['clean', 'condensed'].includes(_vm.props.theme) && 'opw-ml-4',
              style: _vm.props.getFontStyles('reviewsCardMainFontSize', 'textColor')
            }, [_c('span', {
              staticClass: "opw-font-bold opw-mb-2 opw-leading-8"
            }, [_vm._v(_vm._s(_vm.parent.$t('questionsSection.answer'))), !['clean', 'condensed'].includes(_vm.props.theme) ? _c('span', [_vm._v(":")]) : _c('br')]), _c('span', [_vm._v(" " + _vm._s(question.answer))])])])]);
          })], 2), _vm.props.questionsExist > _vm.props.questionsPerPage ? _c('div', {
            staticClass: "opw-pagination-container opw-flex opw-justify-center opw-my-6",
            style: Object.assign({}, _vm.props.getFontStyles('paginatorFontSize'), {
              '--link-color': _vm.props.linkColor || 'inherit'
            })
          }, [_vm.props.pageCountQuestions && _vm.props.pageCountQuestions > 1 ? _c('pagination', {
            attrs: {
              "page-count": _vm.props.pageCountQuestions
            },
            on: {
              "change": _vm.props.fetchPageQuestions
            }
          }) : _vm._e()], 1) : _vm._e()]);
        };

        var QuestionsAnswersvue_type_template_id_28c59ee3_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/QuestionsAnswers.vue?vue&type=template&id=28c59ee3&functional=true&
        // EXTERNAL MODULE: ./src/components/functional/QuestionsAnswers.vue?vue&type=style&index=0&lang=scss&

        var QuestionsAnswersvue_type_style_index_0_lang_scss_ = __webpack_require__("4cd1"); // CONCATENATED MODULE: ./src/components/functional/QuestionsAnswers.vue


        var QuestionsAnswers_script = {};
        /* normalize component */

        var QuestionsAnswers_component = normalizeComponent(QuestionsAnswers_script, QuestionsAnswersvue_type_template_id_28c59ee3_functional_true_render, QuestionsAnswersvue_type_template_id_28c59ee3_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var QuestionsAnswers = QuestionsAnswers_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/ReviewContainer.vue?vue&type=template&id=31ca2f40&functional=true&

        var ReviewContainervue_type_template_id_31ca2f40_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('div', {
            staticClass: "opw-reviews-container",
            class: [['default'].includes(_vm.props.themeStyle) && 'opw--mx-2', ['clean', 'condensed', 'default'].includes(_vm.props.themeStyle) ? 'opw-mt-2' : 'opw-mt-0']
          }, [(!_vm.props.reviews || !_vm.props.reviews.length) && _vm.props.navbarButtons.review.show ? _c('div', {
            staticClass: "opw-bethefirst-text opw-text-lg opw-text-center opw-py-8"
          }, [_c('div', [_vm._v(_vm._s(_vm.parent.$t('reviewsSection.firstToLeaveReview')))]), _c('button', {
            staticClass: "opw-navbar-button-write-review\n        opw-navbar-button\n        opw-cursor-pointer\n        opw-inline-block\n        opw-px-4\n        opw-py-3\n        opw-mx-2\n        opw-mt-4\n        opw-leading-none\n        opw-border\n        opw-border-black\n        hover:opw-border-grey-darkest\n        hover:opw-text-grey-darkest\n        hover:opw-bg-white\n",
            style: _vm.props.getFontStyles('navbarButtonsFontSize'),
            attrs: {
              "href": "#"
            },
            on: {
              "click": _vm.listeners['show-form']
            }
          }, [_vm._v(" " + _vm._s(_vm.parent.$t('navbar.buttonReview')) + " ")])]) : _vm._e(), _c('div', {
            staticClass: "opw-flex opw-flex-wrap ",
            class: ['condensed', 'clean'].includes(_vm.props.themeStyle) && 'lg:opw-px-2'
          }, [_vm.props.pageLoading ? _c('div', {
            staticClass: "opw-text-center opw-w-full opw-py-4"
          }, [_c('div', {
            staticClass: "opw-spinner"
          }, _vm._l(4, function (i) {
            return _c('div', {
              key: i,
              style: {
                'border-color': _vm.props.navbarColor + " transparent transparent transparent !important"
              }
            });
          }), 0)]) : _vm.props.tableView ? _c('div', {
            class: _vm.props.generateColumnNumberStyles
          }, [_c('table', {
            staticClass: "opw-table opw-bg-transparent opw-border-separate opw-w-full",
            staticStyle: {
              "border-spacing": "0 1rem"
            }
          }, [_vm._t("default")], 2)]) : _vm._l(_vm.props.numberReviewColumns, function (columnNo) {
            return _c('div', {
              key: columnNo,
              staticClass: "opw-px-2",
              class: _vm.props.generateColumnNumberStyles
            }, _vm._l(_vm.props.reviewColumnBuckets[columnNo - 1], function (review) {
              return _c('div', {
                key: review.id,
                staticClass: "review-card-container opw-py-2"
              }, [_vm._t("default", null, {
                "review": review
              })], 2);
            }), 0);
          })], 2), _vm.props.reviews && _vm.props.reviews.length > 0 ? _c('div', {
            staticClass: "opw-pagination-container opw-flex opw-justify-center opw-mb-4",
            class: _vm.props.tableView ? 'opw-mt-0' : 'opw-mt-2',
            style: Object.assign({}, _vm.props.getFontStyles('paginatorFontSize'), {
              '--link-color': _vm.props.linkColor
            })
          }, [_vm.props.pageCount && _vm.props.pageCount > 1 ? _c('pagination', {
            attrs: {
              "page-count": _vm.props.pageCount
            },
            on: {
              "change": _vm.props.changePage
            }
          }) : _vm._e()], 1) : _vm._e()]);
        };

        var ReviewContainervue_type_template_id_31ca2f40_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/ReviewContainer.vue?vue&type=template&id=31ca2f40&functional=true&
        // EXTERNAL MODULE: ./src/components/functional/ReviewContainer.vue?vue&type=style&index=0&lang=scss&

        var ReviewContainervue_type_style_index_0_lang_scss_ = __webpack_require__("0782"); // CONCATENATED MODULE: ./src/components/functional/ReviewContainer.vue


        var ReviewContainer_script = {};
        /* normalize component */

        var ReviewContainer_component = normalizeComponent(ReviewContainer_script, ReviewContainervue_type_template_id_31ca2f40_functional_true_render, ReviewContainervue_type_template_id_31ca2f40_functional_true_staticRenderFns, true, null, null, null);
        /* harmony default export */

        var ReviewContainer = ReviewContainer_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewContainerCarousel.vue?vue&type=template&id=14d3e208&scoped=true&

        var ReviewContainerCarouselvue_type_template_id_14d3e208_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', [_vm.renderNoReviews ? _c('div', {
            staticClass: "opw-bethefirst-text opw-text-lg opw-text-center opw-py-4"
          }, [_c('div', [_vm._v(_vm._s(_vm.$t('reviewsSection.firstToLeaveReview')))]), _c('button', {
            staticClass: "opw-navbar-button-write-review\n      opw-navbar-button\n      opw-cursor-pointer\n      opw-inline-block\n      opw-px-4\n      opw-py-3\n      opw-mt-4\n      opw-leading-none\n      opw-border\n      opw-border-black\n      hover:opw-border-grey-darkest\n      hover:opw-text-grey-darkest\n      hover:opw-bg-white\n      opw-mx-2",
            style: _vm.getFontStyles('navbarButtonsFontSize'),
            attrs: {
              "href": "#"
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('show-form');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonReview')) + " ")])]) : _vm._e(), _c('div', {
            staticClass: "opw-flex opw-flex-wrap opw-justify-center"
          }, [_vm.pageLoading ? _c('div', {
            staticClass: "opw-text-center opw-w-full opw-py-4"
          }, [_c('div', {
            staticClass: "opw-spinner"
          }, _vm._l(4, function (i) {
            return _c('div', {
              key: i,
              style: {
                'border-color': _vm.navbarColor + " transparent transparent transparent !important"
              }
            });
          }), 0)]) : _vm._e(), _c('div', {
            ref: "container",
            staticClass: "navigation-wrapper opw-carousel"
          }, [_vm.reviews.length > _vm.slideNum ? _c('button', {
            staticClass: "opw-carousel__control opw-carousel__control--backward",
            style: _vm.carouselControlStyle,
            attrs: {
              "aria-label": "Previous slide"
            },
            on: {
              "click": function ($event) {
                return _vm.slider.prev();
              }
            }
          }) : _vm._e(), _vm.reviews.length > _vm.slideNum ? _c('button', {
            staticClass: "opw-carousel__control opw-carousel__control--forward",
            style: _vm.carouselControlStyle,
            attrs: {
              "aria-label": "Next slide"
            },
            on: {
              "click": function ($event) {
                return _vm.slider.next();
              }
            }
          }) : _vm._e(), _c('div', {
            ref: "slider",
            staticClass: "keen-slider"
          }, _vm._l(_vm.reviews, function (review, index) {
            return _c('div', {
              key: index,
              staticClass: "keen-slider__slide opw-flex opw-flex-col opw-px-2",
              style: {
                width: _vm.slideWidth + 'px'
              }
            }, [_c('div', {
              staticClass: "opw-h-full"
            }, [_vm._t("default", null, {
              "review": review
            })], 2)]);
          }), 0), _vm.reviews.length > _vm.slideNum ? _c('div', {
            staticClass: "opw-carousel__indicators"
          }, _vm._l(_vm.reviews.length, function (index) {
            return _c('button', {
              key: index,
              staticClass: "opw-carousel__indicator test",
              class: index + 2 < _vm.current || index - 2 > _vm.current ? 'faraway' : 'someclass',
              style: _vm.carouselIndicatorStyle(index - 1),
              attrs: {
                "aria-label": "Go to slide " + (index - 1)
              },
              on: {
                "click": function ($event) {
                  return _vm.slider.moveToSlide(index - 1);
                }
              }
            });
          }), 0) : _vm._e()])])]);
        };

        var ReviewContainerCarouselvue_type_template_id_14d3e208_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewContainerCarousel.vue?vue&type=template&id=14d3e208&scoped=true&
        // CONCATENATED MODULE: ./node_modules/keen-slider/keen-slider.esm.js

        /**
         * keen-slider 5.5.1
         * The HTML touch slider carousel with the most native feeling you will get.
         * https://keen-slider.io
         * Copyright 2020-2021 Eric Beyer <contact@ericbeyer.de>
         * License: MIT
         * Released on: 2021-06-10
         */

        function t(t, n, e) {
          return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[n] = e, t;
        }

        function n(t, n) {
          var e = Object.keys(t);

          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n && (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })), e.push.apply(e, r);
          }

          return e;
        }

        function keen_slider_esm_e(e) {
          for (var r = 1; r < arguments.length; r++) {
            var i = null != arguments[r] ? arguments[r] : {};
            r % 2 ? n(Object(i), !0).forEach(function (n) {
              t(e, n, i[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }

          return e;
        }

        function keen_slider_esm_r(t) {
          return function (t) {
            if (Array.isArray(t)) return keen_slider_esm_i(t);
          }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
          }(t) || function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return keen_slider_esm_i(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return keen_slider_esm_i(t, n);
          }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function keen_slider_esm_i(t, n) {
          (null == n || n > t.length) && (n = t.length);

          for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];

          return r;
        }

        function keen_slider_esm_o(t) {
          var n,
              i,
              o,
              a,
              f,
              s,
              l,
              d,
              h,
              v,
              p,
              m,
              b,
              g,
              w,
              y,
              M,
              O,
              S,
              A,
              j,
              k,
              x,
              P,
              E,
              T,
              D,
              C,
              L,
              V,
              X,
              Y,
              z,
              H,
              I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              q = "data-keen-slider-moves",
              F = "data-keen-slider-v",
              W = [],
              _ = null,
              N = !1,
              R = !1,
              U = 0,
              $ = [];

          function B(t, n, e) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            t.addEventListener(n, e, r), W.push([t, n, e, r]);
          }

          function G(t) {
            if (O && S === Z(t) && ft()) {
              var e = nt(t).x;
              if (!rt(t) && P) return K(t);
              P && (Nt(), A = e, P = !1), t.cancelable && t.preventDefault();
              var r = A - e;
              E += Math.abs(r), !T && E > 5 && (T = !0, n.setAttribute(q, !0)), Yt(x(r, Jt) * (lt() ? -1 : 1), t.timeStamp), A = e;
            }
          }

          function J(t) {
            O || !ft() || et(t.target) || (O = !0, P = !0, S = Z(t), T = !1, E = 0, rt(t), pt(), M = v, A = nt(t).x, Yt(0, t.timeStamp), ut("dragStart"));
          }

          function K(t) {
            O && S === Z(t, !0) && ft() && (n.removeAttribute(q), O = !1, gt(), ut("dragEnd"));
          }

          function Q(t) {
            return t.changedTouches;
          }

          function Z(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = n ? Q(t) : tt(t);
            return e ? e[0] ? e[0].identifier : "error" : "default";
          }

          function tt(t) {
            return t.targetTouches;
          }

          function nt(t) {
            var n = tt(t);
            return {
              x: ht() ? n ? n[0].screenY : t.pageY : n ? n[0].screenX : t.pageX,
              timestamp: t.timeStamp
            };
          }

          function et(t) {
            return t.hasAttribute(y.preventEvent);
          }

          function rt(t) {
            var n = tt(t);
            if (!n) return !0;
            var e = n[0],
                r = ht() ? e.clientY : e.clientX,
                i = ht() ? e.clientX : e.clientY,
                o = void 0 !== j && void 0 !== k && Math.abs(k - i) <= Math.abs(j - r);
            return j = r, k = i, o;
          }

          function it(t) {
            ft() && O && t.preventDefault();
          }

          function ot() {
            B(window, "orientationchange", Dt), B(window, "resize", function () {
              return Tt();
            }), B(n, "dragstart", function (t) {
              ft() && t.preventDefault();
            }), B(n, "mousedown", J), B(y.cancelOnLeave ? n : window, "mousemove", G), y.cancelOnLeave && B(n, "mouseleave", K), B(window, "mouseup", K), B(n, "touchstart", J, {
              passive: !0
            }), B(n, "touchmove", G, {
              passive: !1
            }), B(n, "touchend", K, {
              passive: !0
            }), B(n, "touchcancel", K, {
              passive: !0
            }), B(window, "wheel", it, {
              passive: !1
            });
          }

          function at() {
            W.forEach(function (t) {
              t[0].removeEventListener(t[1], t[2], t[3]);
            }), W = [];
          }

          function ut(t) {
            y[t] && y[t](Jt);
          }

          function ct() {
            return y.centered;
          }

          function ft() {
            return void 0 !== i ? i : y.controls;
          }

          function st() {
            return y.loop && o > 1;
          }

          function lt() {
            return y.rtl;
          }

          function dt() {
            return !y.loop && y.rubberband;
          }

          function ht() {
            return !!y.vertical;
          }

          function vt() {
            D = window.requestAnimationFrame(mt);
          }

          function pt() {
            D && (window.cancelAnimationFrame(D), D = null), C = null;
          }

          function mt(t) {
            C || (C = t);
            var n = t - C,
                e = bt(n);
            if (n >= V) return Yt(L - Y, !1), H ? H() : void ut("afterChange");
            var r = zt(e);

            if (0 === r || st() || dt() || z) {
              if (0 !== r && dt() && !z) return St();
              Y += e, Yt(e, !1), vt();
            } else Yt(e - r, !1);
          }

          function bt(t) {
            return L * X(t / V) - Y;
          }

          function gt() {
            switch (ut("beforeChange"), y.mode) {
              case "free":
                Mt();
                break;

              case "free-snap":
                Ot();
                break;

              case "snap":
              default:
                wt();
            }
          }

          function wt() {
            yt((1 === l && 0 !== p ? M : v) + Math.sign(p));
          }

          function yt(t, n) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.duration,
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                o = function (t) {
              return 1 + --t * t * t * t * t;
            };

            At(Ft(t = qt(t, r, i)), e, o, n);
          }

          function Mt() {
            if (0 === b) return !(!zt(0) || st()) && yt(v);
            var t = y.friction / Math.pow(Math.abs(b), -.5);
            At(Math.pow(b, 2) / t * Math.sign(b), 6 * Math.abs(b / t), function (t) {
              return 1 - Math.pow(1 - t, 5);
            });
          }

          function Ot() {
            if (0 === b) return yt(v);
            var t = y.friction / Math.pow(Math.abs(b), -.5),
                n = Math.pow(b, 2) / t * Math.sign(b),
                e = 6 * Math.abs(b / t),
                r = (U + n) / (s / l);
            At((-1 === p ? Math.floor(r) : Math.ceil(r)) * (s / l) - U, e, function (t) {
              return 1 - Math.pow(1 - t, 5);
            });
          }

          function St() {
            if (pt(), 0 === b) return yt(v, !0);

            var t = .04 / Math.pow(Math.abs(b), -.5),
                n = Math.pow(b, 2) / t * Math.sign(b),
                e = function (t) {
              return --t * t * t + 1;
            },
                r = b;

            At(n, 3 * Math.abs(r / t), e, !0, function () {
              At(Ft(qt(v)), 500, e, !0);
            });
          }

          function At(t, n, e, r, i) {
            pt(), L = t, Y = 0, V = n, X = e, z = r, H = i, C = null, vt();
          }

          function jt(e) {
            var r = u(t);
            r.length && (n = r[0], Tt(e), ot(), ut("mounted"));
          }

          function kt() {
            var t,
                n = I.breakpoints || [];

            for (var r in n) window.matchMedia(r).matches && (t = r);

            if (t === _) return !0;
            var i = (_ = t) ? n[_] : I;
            i.breakpoints && _ && delete i.breakpoints, y = keen_slider_esm_e(keen_slider_esm_e(keen_slider_esm_e({}, Gt), I), i), N = !0, h = null, ut("optionsChanged"), Et();
          }

          function xt(t) {
            if ("function" == typeof t) return t();
            var n = y.autoAdjustSlidesPerView;
            n || (o = Math.max(t, o));
            var e = st() && n ? o - 1 : o;
            return c(t, 1, Math.max(e, 1));
          }

          function Pt() {
            kt(), R = !0, ut("created");
          }

          function Et(t, n) {
            t && (I = t), n && (_ = null), Ct(), jt(n);
          }

          function Tt(t) {
            var e = window.innerWidth;

            if (kt() && (e !== h || t)) {
              h = e;
              var r = y.slides;
              "number" == typeof r ? (f = null, o = r) : (f = u(r, n), o = f ? f.length : 0);
              var i = y.dragSpeed;
              x = "function" == typeof i ? i : function (t) {
                return t * i;
              }, s = ht() ? n.offsetHeight : n.offsetWidth, l = xt(y.slidesPerView), d = c(y.spacing, 0, s / (l - 1) - 1), s += d, a = ct() ? (s / 2 - s / l / 2) / s : 0, Vt();
              var p = !R || N && y.resetSlide ? y.initial : v;
              Bt(st() ? p : Ht(p)), ht() && n.setAttribute(F, !0), N = !1;
            }
          }

          function Dt(t) {
            Tt(), setTimeout(Tt, 500), setTimeout(Tt, 2e3);
          }

          function Ct() {
            at(), Xt(), n && n.hasAttribute(F) && n.removeAttribute(F), ut("destroyed");
          }

          function Lt() {
            f && f.forEach(function (t, n) {
              var e = g[n].distance * s - n * (s / l - d / l - d / l * (l - 1)),
                  r = ht() ? 0 : e,
                  i = ht() ? e : 0,
                  o = "translate3d(".concat(r, "px, ").concat(i, "px, 0)");
              t.style.transform = o, t.style["-webkit-transform"] = o;
            });
          }

          function Vt() {
            f && f.forEach(function (t) {
              var n = "calc(".concat(100 / l, "% - ").concat(d / l * (l - 1), "px)");
              ht() ? (t.style["min-height"] = n, t.style["max-height"] = n) : (t.style["min-width"] = n, t.style["max-width"] = n);
            });
          }

          function Xt() {
            if (f) {
              var t = ["transform", "-webkit-transform"];
              t = [].concat(keen_slider_esm_r(t), ht ? ["min-height", "max-height"] : ["min-width", "max-width"]), f.forEach(function (n) {
                t.forEach(function (t) {
                  n.style.removeProperty(t);
                });
              });
            }
          }

          function Yt(t) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
            _t(t, e), n && (t = Ut(t)), U += t, Rt();
          }

          function zt(t) {
            var n = s * (o - 1 * (ct() ? 1 : l)) / l,
                e = U + t;
            return e > n ? e - n : e < 0 ? e : 0;
          }

          function Ht(t) {
            return c(t, 0, o - 1 - (ct() ? 0 : l - 1));
          }

          function It() {
            var t = Math.abs(w),
                n = U < 0 ? 1 - t : t;
            return {
              direction: p,
              progressTrack: n,
              progressSlides: n * o / (o - 1),
              positions: g,
              position: U,
              speed: b,
              relativeSlide: (v % o + o) % o,
              absoluteSlide: v,
              size: o,
              slidesPerView: l,
              widthOrHeight: s
            };
          }

          function qt(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return st() ? n ? Wt(t, e) : t : Ht(t);
          }

          function Ft(t) {
            return -(-s / l * t + U);
          }

          function Wt(t, n) {
            var e = (v % o + o) % o,
                r = e < (t = (t % o + o) % o) ? -e - o + t : -(e - t),
                i = e > t ? o - e + t : t - e,
                a = n ? Math.abs(r) <= i ? r : i : t < e ? r : i;
            return v + a;
          }

          function _t(t, n) {
            clearTimeout(m);
            var e = Math.sign(t);
            if (e !== p && Nt(), p = e, $.push({
              distance: t,
              time: n
            }), m = setTimeout(function () {
              $ = [], b = 0;
            }, 50), ($ = $.slice(-6)).length <= 1 || 0 === p) return b = 0;
            var r = $.slice(0, -1).reduce(function (t, n) {
              return t + n.distance;
            }, 0),
                i = $[$.length - 1].time,
                o = $[0].time;
            b = c(r / (i - o), -10, 10);
          }

          function Nt() {
            $ = [];
          }

          function Rt() {
            w = st() ? U % (s * o / l) / (s * o / l) : U / (s * o / l), $t();

            for (var t = [], n = 0; n < o; n++) {
              var e = (1 / o * n - (w < 0 && st() ? w + 1 : w)) * o / l + a;
              st() && (e += e > (o - 1) / l ? -o / l : e < -o / l + 1 ? o / l : 0);
              var r = 1 / l,
                  i = e + r,
                  u = i < r ? i / r : i > 1 ? 1 - (i - 1) * l / 1 : 1;
              t.push({
                portion: u < 0 || u > 1 ? 0 : u,
                distance: lt() ? -1 * e + 1 - r : e
              });
            }

            g = t, Lt(), ut("move");
          }

          function Ut(t) {
            if (st()) return t;
            var n = zt(t);
            if (!dt()) return t - n;
            if (0 === n) return t;
            var e;
            return t * (e = n / s, (1 - Math.abs(e)) * (1 - Math.abs(e)));
          }

          function $t() {
            var t = Math.round(U / (s / l));
            t !== v && (!st() && (t < 0 || t > o - 1) || (v = t, ut("slideChanged")));
          }

          function Bt(t) {
            ut("beforeChange"), Yt(Ft(t), !1), ut("afterChange");
          }

          var Gt = {
            autoAdjustSlidesPerView: !0,
            centered: !1,
            breakpoints: null,
            controls: !0,
            dragSpeed: 1,
            friction: .0025,
            loop: !1,
            initial: 0,
            duration: 500,
            preventEvent: "data-keen-slider-pe",
            slides: ".keen-slider__slide",
            vertical: !1,
            resetSlide: !1,
            slidesPerView: 1,
            spacing: 0,
            mode: "snap",
            rtl: !1,
            rubberband: !0,
            cancelOnLeave: !0
          },
              Jt = {
            controls: function (t) {
              i = t;
            },
            destroy: Ct,
            refresh: function (t) {
              Et(t, !0);
            },
            next: function () {
              yt(v + 1, !0);
            },
            prev: function () {
              yt(v - 1, !0);
            },
            moveToSlide: function (t, n) {
              yt(t, !0, n);
            },
            moveToSlideRelative: function (t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  e = arguments.length > 2 ? arguments[2] : void 0;
              yt(t, !0, e, !0, n);
            },
            resize: function () {
              Tt(!0);
            },
            details: function () {
              return It();
            },
            options: function () {
              var t = keen_slider_esm_e({}, y);
              return delete t.breakpoints, t;
            }
          };
          return Pt(), Jt;
        }

        function a(t) {
          return Array.prototype.slice.call(t);
        }

        function u(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
          return "function" == typeof t ? a(t()) : "string" == typeof t ? a(n.querySelectorAll(t)) : t instanceof HTMLElement != !1 ? [t] : t instanceof NodeList != !1 ? t : [];
        }

        function c(t, n, e) {
          return Math.min(Math.max(t, n), e);
        }

        Math.sign || (Math.sign = function (t) {
          return (t > 0) - (t < 0) || +t;
        });
        /* harmony default export */

        var keen_slider_esm = keen_slider_esm_o; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewContainerCarousel.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewContainerCarouselvue_type_script_lang_js_ = {
          name: 'ReviewCarousel',
          props: {
            reviews: {
              type: Array,
              default: null
            },
            pageLoading: {
              type: Boolean,
              default: false
            },
            carouselControlStyle: {
              type: Object,
              default: null
            },
            carouselControlsColor: {
              type: String,
              default: ''
            },
            getFontStyles: {
              type: Function,
              default: () => {}
            },
            navbarButtons: {
              type: Object,
              default: () => ({})
            },
            navbarColor: {
              type: String,
              default: ''
            }
          },

          data() {
            return {
              slider: null,
              current: 0,
              carouselWidth: 1200
            };
          },

          mounted() {},

          computed: {
            renderNoReviews() {
              try {
                return !this.reviews.length && this.navbarButtons.review.show;
              } catch (_e) {
                return false;
              }
            },

            sliderProps() {
              return {
                slidesPerView: this.slideNum,
                centered: false,
                loop: this.reviews.length > this.slideNum,
                slideChanged: s => {
                  const {
                    relativeSlide,
                    size
                  } = s.details();
                  this.current = relativeSlide;

                  if (size > 3 && size - relativeSlide < 3) {
                    this.$emit('load-next');
                  }
                }
              };
            },

            slideNum() {
              const width = this.carouselWidth || window.innerWidth;
              return Math.floor(width / 500);
            },

            slideWidth() {
              return this.carouselWidth / this.slideNum;
            }

          },
          methods: {
            carouselIndicatorStyle(index) {
              return importantify({
                backgroundColor: this.carouselControlsColor,
                opacity: +(index === this.current) || null
              });
            },

            updateCarouselWidth() {
              var _this$$refs$container;

              this.carouselWidth = ((_this$$refs$container = this.$refs.container) === null || _this$$refs$container === void 0 ? void 0 : _this$$refs$container.clientWidth) || 0;
              this.$nextTick(() => {
                this.slider && this.slider.refresh(this.sliderProps);
              });
            }

          },
          watch: {
            reviews: {
              handler(val) {
                if (val && val.length) {
                  this.$nextTick(() => {
                    if (this.slider) {
                      this.slider.refresh(this.sliderProps);
                    } else {
                      this.slider = new keen_slider_esm(this.$refs.slider, this.sliderProps);
                      this.$nextTick(this.updateCarouselWidth);
                    }
                  });
                }
              },

              immediate: true
            }
          },

          created() {
            window.addEventListener('resize', this.updateCarouselWidth);
          },

          destroyed() {
            if (this.slider) {
              this.slider.destroy();
            }

            clearInterval(this.scrollInterval);
            window.removeEventListener('resize', this.updateCarouselWidth);
          }

        }; // CONCATENATED MODULE: ./src/components/ReviewContainerCarousel.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewContainerCarouselvue_type_script_lang_js_ = ReviewContainerCarouselvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=14d3e208&scoped=true&lang=css&

        var basevue_type_style_index_0_id_14d3e208_scoped_true_lang_css_ = __webpack_require__("b07c"); // EXTERNAL MODULE: ./src/components/ReviewContainerCarousel.vue?vue&type=style&index=1&id=14d3e208&scoped=true&lang=css&


        var ReviewContainerCarouselvue_type_style_index_1_id_14d3e208_scoped_true_lang_css_ = __webpack_require__("8117"); // EXTERNAL MODULE: ./src/components/ReviewContainerCarousel.vue?vue&type=style&index=2&id=14d3e208&scoped=true&lang=scss&


        var ReviewContainerCarouselvue_type_style_index_2_id_14d3e208_scoped_true_lang_scss_ = __webpack_require__("89d5"); // CONCATENATED MODULE: ./src/components/ReviewContainerCarousel.vue

        /* normalize component */


        var ReviewContainerCarousel_component = normalizeComponent(components_ReviewContainerCarouselvue_type_script_lang_js_, ReviewContainerCarouselvue_type_template_id_14d3e208_scoped_true_render, ReviewContainerCarouselvue_type_template_id_14d3e208_scoped_true_staticRenderFns, false, null, "14d3e208", null);
        /* harmony default export */

        var ReviewContainerCarousel = ReviewContainerCarousel_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/WriteQuestion.vue?vue&type=template&id=396c73aa&scoped=true&

        var WriteQuestionvue_type_template_id_396c73aa_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', [_vm.navbarButtons.question.thankyouScreen ? _c('div', {
            staticClass: "opw-question-form-container opw-py-6 opw-my-6 opw-mx-4"
          }, [_c('svg', {
            staticClass: "opw-svg opw-m-auto",
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 130.2 130.2"
            }
          }, [_c('circle', {
            staticClass: "path circle",
            attrs: {
              "fill": "none",
              "stroke": "#73AF55",
              "stroke-width": "6",
              "stroke-miterlimit": "10",
              "cx": "65.1",
              "cy": "65.1",
              "r": "62.1"
            }
          }), _c('polyline', {
            staticClass: "path check",
            attrs: {
              "fill": "none",
              "stroke": "#73AF55",
              "stroke-width": "6",
              "stroke-linecap": "round",
              "stroke-miterlimit": "10",
              "points": "100.2,40.2 51.5,88.8 29.8,67.5 "
            }
          })]), _c('div', {
            staticClass: "opw-text-center opw-my-3"
          }, [_vm._v(" " + _vm._s(_vm.$t('questionForm.thankForQuestion')) + " ")])]) : _vm.navbarButtons.question.active ? _c('div', {
            staticClass: "question-form-container opw-mx-4"
          }, [_c('div', {
            staticClass: "opw-text-2xl opw-mb-8"
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonQuestion')) + " ")]), _c('div', {
            staticClass: "opw-pb-4",
            attrs: {
              "id": "question-text-wrapper"
            }
          }, [_c('div', {}, [_c('label', {
            staticClass: "opw-block opw-text-sm opw-font-bold opw-mb-2",
            style: _vm.getFontStyles('formHeadingsFontSize'),
            attrs: {
              "for": "question-email"
            }
          }, [_vm._v(_vm._s(_vm.$t('generalForm.email')))]), _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email"
            }],
            staticClass: "\n            opw-rounded\n            opw-shadow\n            opw-appearance-none\n            opw-border\n            opw-border-solid\n            opw-border-grey-light\n            opw-text-black\n            opw-appearance-none\n            opw-h-8\n            opw-w-full\n            opw-max-w-full\n            opw-py-2\n            opw-px-3\n            opw-mb-6\n          ",
            style: _vm.getFontStyles('formInputFontSize'),
            attrs: {
              "type": "email",
              "placeholder": _vm.$t('generalForm.emailPlaceholder'),
              "id": "question-email"
            },
            domProps: {
              "value": _vm.email
            },
            on: {
              "input": [function ($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.email = $event.target.value;
              }, function ($event) {
                _vm.email = $event.target.value;
              }]
            }
          })]), _c('div', {
            staticClass: "mb-4"
          }, [_c('label', {
            staticClass: "opw-block opw-text-sm opw-font-bold opw-mb-2",
            style: _vm.getFontStyles('formHeadingsFontSize')
          }, [_vm._v(_vm._s(_vm.$t('questionForm.yourQuestionPlaceholder')))]), _c('textarea', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.questionText,
              expression: "questionText"
            }],
            staticClass: "\n          opw-rounded\n            opw-shadow\n            opw-appearance-none\n            opw-box-border\n            opw-border\n            opw-border-grey-light\n            opw-font-sans\n            opw-text-black\n            opw-appearance-none\n            opw-resize-none\n            opw-w-full\n            opw-max-w-full\n            opw-py-2\n            opw-px-3\n            opw-mb-6\n          ",
            style: _vm.getFontStyles('formInputFontSize'),
            attrs: {
              "placeholder": _vm.$t('questionForm.yourQuestion'),
              "rows": "5",
              "maxlength": "3000",
              "id": "question-text"
            },
            domProps: {
              "value": _vm.questionText
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.questionText = $event.target.value;
              }
            }
          })]), _c('div', {
            staticClass: "opw-text-right opw-my-4"
          }, [_c('button', {
            staticClass: "\n          opw-btn\n          opw-text-base\n          opw-text-white\n          opw-align-middle\n          opw-cursor-pointer\n          opw-rounded\n          opw-border\n          opw-border-solid\n          opw-bg-grey\n          opw-white--text\n          opw-flex-shrink-0\n          opw-py-2\n          opw-px-8\n          opw-uppercase\n          opw-font-medium\n          hover:opw-bg-grey\n        ",
            on: {
              "click": _vm.createQuestion
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('generalForm.postButton')) + " ")])]), _vm.formErrors.length > 0 ? _c('div', {
            staticClass: "opw-text-red-dark opw-text-sm opw-text-center"
          }, _vm._l(_vm.formErrors, function (error) {
            return _c('div', {
              key: error
            }, [_vm._v(" " + _vm._s(error) + " ")]);
          }), 0) : _vm._e()])]) : _vm._e()]);
        };

        var WriteQuestionvue_type_template_id_396c73aa_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/WriteQuestion.vue?vue&type=template&id=396c73aa&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/WriteQuestion.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var WriteQuestionvue_type_script_lang_js_ = {
          name: 'WriteQuestion',
          props: {
            getFontStyles: {
              type: Function,
              default: () => ({})
            },
            navbarButtons: {
              type: Object,
              default: () => ({})
            },
            formPostButtonStyle: {
              type: Object,
              default: () => ({})
            },
            reviewDetails: {
              type: Object,
              default: () => ({})
            }
          },

          data() {
            return {
              questionText: '',
              email: '',
              formErrors: [],
              validEmailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
          },

          methods: {
            checkForm() {
              this.formErrors = [];
              let valid = true;

              if (!this.questionText) {
                this.formErrors.push(this.$t('errorMessages.questionRequired'));
                valid = false;
              }

              if (!this.email) {
                this.formErrors.push(this.$t('errorMessages.emailRequired'));
                valid = false;
              } else if (!this.validEmailRegex.test(this.email)) {
                this.formErrors.push(this.$t('errorMessages.mustBeValidEmail'));
                valid = false;
              }

              return valid;
            },

            createQuestion() {
              if (!this.checkForm()) {
                return;
              } else {
                this.formErrors = [];
              }

              const questionUrl = this.emptyReviewMetafieldMode ? `/products-shopify/${this.shopifyProductId}/questions/create?v2=true` : `/products/${this.reviewDetails.id}/questions/create?v2=true`;
              const jsondata = {
                email: this.email,
                questionText: this.questionText
              };
              post(questionUrl, jsondata).then(() => {
                this.$emit('question-sent');
              }).catch(error => {
                this.$emit('question-sent');
                console.error(error);
              });
            }

          }
        }; // CONCATENATED MODULE: ./src/components/WriteQuestion.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_WriteQuestionvue_type_script_lang_js_ = WriteQuestionvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/WriteQuestion.vue?vue&type=style&index=0&id=396c73aa&lang=scss&scoped=true&

        var WriteQuestionvue_type_style_index_0_id_396c73aa_lang_scss_scoped_true_ = __webpack_require__("5a02"); // CONCATENATED MODULE: ./src/components/WriteQuestion.vue

        /* normalize component */


        var WriteQuestion_component = normalizeComponent(components_WriteQuestionvue_type_script_lang_js_, WriteQuestionvue_type_template_id_396c73aa_scoped_true_render, WriteQuestionvue_type_template_id_396c73aa_scoped_true_staticRenderFns, false, null, "396c73aa", null);
        /* harmony default export */

        var WriteQuestion = WriteQuestion_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSection.vue?vue&type=template&id=21f95ba4&scoped=true&

        var SharedTopSectionvue_type_template_id_21f95ba4_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "\n          opw-flex\n          opw-flex-no-shrink\n          opw-flex-wrap\n          opw-justify-between\n          opw-rounded-b\n          opw-leading-none\n          opw-overflow-hidden\n          opw-py-4\n          opw-pb-0\n          opw-px-4\n          opw-flex-col\n          md:opw-flex-row\n        ",
            class: [_vm.card ? 'opw-shadow-md' : ''],
            style: _vm.reviewsBgBorderStyle
          }, [_c('div', {
            staticClass: "opw-average-stars-container opw-mr-2 opw-flex-grow lg:opw-flex-grow-0"
          }, [_c('div', {
            staticClass: "opw-pb-2"
          }, [_c('stars', {
            staticClass: "opw-mr-2",
            attrs: {
              "reviews-card-stars-style": _vm.getFontStyles('starSummaryOverallScoreFontSize', 'starsColor'),
              "rating": _vm.reviewDetails.averageStars
            }
          }), _vm.reviewDetails.reviewNumber > 0 ? _c('span', {
            staticClass: "opw-text-2xl opw-from-reviews opw-hidden md:opw-inline-flex opw-mr-2",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize', 'navbarColor')
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.from')) + " " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')))]) : _vm._e()], 1), _vm.reviewDetails.reviewNumber > 0 ? _c('span', {
            staticClass: "opw-text-2xl opw-from-reviews md:opw-hidden",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize', 'navbarColor')
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.from')) + " " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')))]) : _vm._e(), _c('div', {
            staticClass: "opinew-star-distribution-container"
          }, [_vm.showStarBars ? _c('div', {
            staticClass: "opinew-star-progress-bars-container opw-w-full"
          }, [_vm.showStarBars ? _c('star-bars', {
            staticClass: "opw-w-full ",
            attrs: {
              "reversed-stars-range": _vm.reversedStarsRange,
              "review-details": _vm.reviewDetails,
              "stars-filtered": _vm.starsFiltered,
              "stars-color": _vm.starsColor,
              "color": "navbarColor"
            }
          }) : _vm._e(), _vm.starsFiltered ? _c('div', [_c('div', {
            staticClass: "opw-cursor-pointer hover:opw-text-grey-dark",
            on: {
              "click": function ($event) {
                return _vm.$emit('change-page', [{
                  refresh: true
                }, false]);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.allReviews')) + " ")])]) : _vm._e()], 1) : _vm._e(), _c('div')])]), _c('div', {
            staticClass: "opw-flex opw-flex-col opw-flex-grow lg:opw-flex-grow-0 opw-justify-center"
          }, [_vm.showGalleryThumbnails ? _c('shared-thumbnails', {
            staticClass: "opw-mb-4",
            attrs: {
              "video-thumbnails": _vm.videoThumbnails,
              "condensed": _vm.condensed,
              "num-featured-images": _vm.numFeaturedImages,
              "slides": _vm.slides
            }
          }) : _vm._e()], 1), _c('div', {
            staticClass: "opw-mt-6 opw-w-full"
          }, [_c('div', {
            staticClass: "opw-flex opw-w-full opw-justify-between "
          }, [_c('div', {
            staticClass: "opw-flex"
          }, [_c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-2 sm:opw-mr-4 lg:opw-mr-8 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'reviews' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'reviews');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " (" + _vm._s(_vm.reviewDetails.reviewNumber) + ") ")]), _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-4 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'questions' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'questions');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('questionsSection.QNASectionHeading')) + " (" + _vm._s(_vm.questions.length) + ") ")]) : _vm._e()]), _c('span', {
            staticClass: "opw-text-right opw-hidden md:opw-flex"
          }, [_c('span', {}, [_c('span', {
            staticClass: "opw-flex opw-items-center opw-w-full opw-h-full opw-border opw-filters-select opw-py-0",
            style: Object.assign({}, _vm.navbarButtonsStyle, {
              'border-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            })
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])])])])]), _c('div', {
            staticClass: "opw-filters opw-pb-2 opw-flex opw-justify-center md:opw-hidden opw-w-full opw-mt-2"
          }, [_c('span', {
            staticClass: "opw-flex opw-flex-grow opw-items-center opw-mb-2 opw-justify-center opw-border opw-filters-select  opw-py-1",
            style: Object.assign({}, _vm.navbarButtonsStyle, {
              'border-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            })
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-text-center\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n                  opw-flex-grow\n\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])])]);
        };

        var SharedTopSectionvue_type_template_id_21f95ba4_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/SharedTopSection.vue?vue&type=template&id=21f95ba4&scoped=true&
        // CONCATENATED MODULE: ./src/mixins/TopSectionMixin.js

        /* harmony default export */

        var TopSectionMixin = {
          // eslint-disable-next-line vue/no-unused-components
          components: {
            SharedThumbnails: SharedThumbnails,
            LazyImg: LazyImg,
            Stars: Stars
          },
          props: {
            getFontStyles: {
              type: Function,
              default: () => {}
            },
            showForm: {
              type: Function,
              default: () => {}
            },
            reviewsBgBorderStyle: {
              type: Object,
              default: () => {}
            },
            widgetThemeStyle: {
              type: String,
              default: ''
            },
            reviewDetails: {
              type: Object,
              default: () => ({})
            },
            navbarButtons: {
              type: Object,
              default: () => ({})
            },
            navbarButtonsStyle: {
              type: Object,
              default: () => ({})
            },
            slides: {
              type: Array,
              default: () => []
            },
            questions: {
              type: Array,
              default: () => []
            },
            videoThumbnails: {
              type: Object,
              default: () => ({})
            },
            condensed: {
              type: Boolean,
              default: false
            },
            clean: {
              type: Boolean,
              default: false
            },
            card: {
              type: Boolean,
              default: false
            },
            showStarBars: {
              type: Boolean,
              default: false
            },
            titleStyle: {
              type: Object,
              default: () => ({})
            },
            starsFiltered: {
              type: Boolean,
              default: false
            },
            showReviewImages: {
              type: Boolean,
              default: false
            },
            questionsAndAnswersActive: {
              type: Boolean,
              default: false
            },
            showCustomerImagesSection: {
              type: Boolean,
              default: false
            },
            starBarsWidthAuto: {
              type: Boolean,
              default: false
            },
            starBarsWidth: {
              type: String,
              default: null
            },
            themeStyle: {
              type: String,
              default: null
            },
            starsColor: {
              type: String,
              default: null
            },
            navbarColor: {
              type: String,
              default: null
            },
            activeTab: {
              type: String,
              default: null
            }
          },

          data() {
            return {
              constants: constants,
              hoveredAvgStarBar: null
            };
          },

          computed: {
            showGalleryThumbnails() {
              return this.showReviewImages && this.showCustomerImagesSection && this.slides && this.slides.length;
            },

            numFeaturedImages() {
              let num = 6;

              if ((this.permissions || {}).videoReviews && this.reviewDetails.reviewVideos) {
                if (this.reviewDetails.reviewVideos.length > 1) num -= 2;else if (this.reviewDetails.reviewVideos.length > 0) num -= 1;
              }

              return num;
            },

            averageStarsRender() {
              const result = [];

              for (let i = 0; i < this.constants.STARS_RANGE.length; i++) {
                result.push(this.decideWhichStar(this.constants.STARS_RANGE[i], parseFloat(this.reviewDetails.averageStars)));
              }

              return result;
            },

            reversedStarsRange() {
              return this.constants.STARS_RANGE.slice().reverse();
            },

            starSummaryProgressBarsWidthStyle() {
              return {
                width: this.starBarsWidthAuto ? 'calc(' + this.getFontSize('starSummaryOverallScoreFontSize') + ' * 6)' : this.starBarsWidth + '!important'
              };
            },

            showCustomFieldSummary() {
              return (Array.isArray(this.reviewDetails.customFields) ? this.reviewDetails.customFields : []).some(field => field.title && field.starRating);
            }

          },
          methods: {
            decideWhichStar(currentStar, starRating) {
              let result = this.constants.FULL_STAR;

              if (starRating + 0.5 >= currentStar) {
                result = this.constants.FULL_STAR;
              } else {
                if (starRating > currentStar - 1) {
                  result = this.constants.HALF_STAR;
                } else {
                  result = this.constants.EMPTY_STAR;
                }
              }

              return result;
            },

            getFontSize(font) {
              const fs = this.getFontStyles(font).fontSize;
              return fs ? fs.split('!')[0].trim() : null;
            }

          }
        }; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/functional/StarBars.vue?vue&type=template&id=829df81c&scoped=true&functional=true&

        var StarBarsvue_type_template_id_829df81c_scoped_true_functional_true_render = function (_h, _vm) {
          var _c = _vm._c;
          return _c('table', {
            staticClass: "opw-table opw-bg-transparent opinew-star-progress-bars-container opw-w-full opw-border-collapse opw-border-0 opw-table-auto opw-border-transparent opw-static opw-table",
            class: [_vm.data.class, _vm.data.staticClass]
          }, [_vm._l(_vm.props.reversedStarsRange, function (starNumber) {
            return _c('tr', {
              key: starNumber,
              staticClass: "opw-whitespace-no-wrap opw-bg-transparent opw-cursor-pointer opw-progress-row opw-border-collapse opw-border-0 opw-static",
              on: {
                "click": function ($event) {
                  return _vm.parent.$emit('change-page', [{
                    starFiltering: starNumber
                  }, true]);
                }
              }
            }, [_c('td', {
              staticClass: "opw-py-1 opw-w-px opw-text-right hover:opw-text-grey-dark opw-border-collapse opw-border-0 opw-px-0 opw-static opw-bg-transparent"
            }, [_c('span', {
              staticStyle: {
                "margin-top": "auto"
              },
              style: _vm.parent.getFontStyles('starSummaryProgressBarsFontSize', _vm.props.color || 'navbarTextColor')
            }, [_vm._v(" " + _vm._s(starNumber) + " ")]), _c('span', {
              style: _vm.parent.getFontStyles('starSummaryProgressBarsFontSize', _vm.props.color || 'navbarTextColor')
            }, [_vm.props.verbal ? _c('span', [_vm._v(" stars ")]) : _c('i', {
              staticClass: "opw-noci opw-noci-star-full",
              style: _vm.parent.getFontStyles('starSummaryProgressBarsFontSize', _vm.props.color || 'navbarTextColor'),
              attrs: {
                "aria-hidden": "true"
              }
            })])]), _c('td', {
              staticClass: "opw-py-1 opw-border-collapse opw-border-0 opw-px-0 opw-static opw-mx-0 opw-bg-transparent"
            }, [_c('div', {
              staticClass: "opw-progress opw-w-full hover:opw-bg-grey opw-bg-grey-light opw-overflow-hidden",
              staticStyle: {
                "display": "inline-block",
                "height": "1.125rem",
                "margin-left": "4px",
                "margin-right": "4px"
              },
              style: _vm.parent.getFontStyles('starSummaryProgressBarsFontSize')
            }, [_c('div', {
              staticClass: "opw-progress-meter opw-py-1 opw-h-full",
              style: {
                'background-color': _vm.props.starsColor,
                width: _vm.props.reviewDetails.reviewNumber === 0 ? '0' : String(100 * _vm.props.reviewDetails.starDistribution[starNumber].toFixed(2) / _vm.props.reviewDetails.reviewNumber.toFixed(2)) + '%'
              }
            })])]), _c('td', {
              staticClass: "opw-py-1 opw-w-px hover:opw-text-grey-dark opw-border-collapse opw-border-0 opw-px-0 opw-static opw-mx-0 opw-bg-transparent",
              style: _vm.parent.getFontStyles('starSummaryProgressBarsFontSize', _vm.props.color || 'navbarTextColor')
            }, [_c('div', {
              staticClass: "opw-pl-2"
            }, [_vm._v(" (" + _vm._s(_vm.props.reviewDetails.starDistribution[starNumber]) + ") ")])])]);
          }), _vm.props.starsFiltered ? _c('tr', {
            staticClass: "opw-bg-transparent opw-border-collapse opw-border-0 opw-static"
          }, [_c('td', {
            staticClass: "opw-cursor-pointer hover:opw-text-grey-dark opw-text-center opw-py-1",
            attrs: {
              "colspan": "3"
            },
            on: {
              "click": function ($event) {
                return _vm.parent.$emit('change-page', [{
                  refresh: true
                }, false]);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.parent.$t('summaryCard.allReviews')) + " ")])]) : _vm._e()], 2);
        };

        var StarBarsvue_type_template_id_829df81c_scoped_true_functional_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/functional/StarBars.vue?vue&type=template&id=829df81c&scoped=true&functional=true&
        // EXTERNAL MODULE: ./src/components/functional/StarBars.vue?vue&type=style&index=0&id=829df81c&lang=scss&scoped=true&

        var StarBarsvue_type_style_index_0_id_829df81c_lang_scss_scoped_true_ = __webpack_require__("71f0"); // CONCATENATED MODULE: ./src/components/functional/StarBars.vue


        var StarBars_script = {};
        /* normalize component */

        var StarBars_component = normalizeComponent(StarBars_script, StarBarsvue_type_template_id_829df81c_scoped_true_functional_true_render, StarBarsvue_type_template_id_829df81c_scoped_true_functional_true_staticRenderFns, true, null, "829df81c", null);
        /* harmony default export */

        var StarBars = StarBars_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSection.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var SharedTopSectionvue_type_script_lang_js_ = {
          name: 'SharedTopSection',
          components: {
            StarBars: StarBars
          },
          mixins: [TopSectionMixin]
        }; // CONCATENATED MODULE: ./src/components/SharedTopSection.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_SharedTopSectionvue_type_script_lang_js_ = SharedTopSectionvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=21f95ba4&scoped=true&lang=css&

        var basevue_type_style_index_0_id_21f95ba4_scoped_true_lang_css_ = __webpack_require__("e0b6"); // EXTERNAL MODULE: ./src/components/SharedTopSection.vue?vue&type=style&index=1&id=21f95ba4&lang=scss&scoped=true&


        var SharedTopSectionvue_type_style_index_1_id_21f95ba4_lang_scss_scoped_true_ = __webpack_require__("9c98"); // EXTERNAL MODULE: ./src/components/SharedTopSection.vue?vue&type=style&index=2&lang=scss&


        var SharedTopSectionvue_type_style_index_2_lang_scss_ = __webpack_require__("d485"); // CONCATENATED MODULE: ./src/components/SharedTopSection.vue

        /* normalize component */


        var SharedTopSection_component = normalizeComponent(components_SharedTopSectionvue_type_script_lang_js_, SharedTopSectionvue_type_template_id_21f95ba4_scoped_true_render, SharedTopSectionvue_type_template_id_21f95ba4_scoped_true_staticRenderFns, false, null, "21f95ba4", null);
        /* harmony default export */

        var SharedTopSection = SharedTopSection_component.exports; // CONCATENATED MODULE: ./src/utils/sharedViewConfig.js

        /* harmony default export */

        var sharedViewConfig = {
          shopConfig: {
            permissions: {
              noBranding: false,
              qAndA: false,
              videoReviews: false,
              optimisedImages: false,
              upTo3Photos: false,
              upTo5Photos: false
            },
            buttonsColor: null,
            starsColor: '#ffc617',
            backgroundColor: 'transparent',
            reviewsCardBorderColor: '#c5c5c5',
            reviewsCardBorderActive: false,
            starBarsWidth: '',
            starBarsWidthAuto: true,
            verifiedBadgeColor: '#38C172',
            paginationColor: null,
            widgetShowDates: true,
            showCustomerImagesSection: true,
            showReviewImages: true,
            reviewImageMaxHeight: '450px',
            showLargeReviewImage: true,
            showStarBars: true,
            textColor: '#3d4852',
            secondaryTextColor: {
              color: '#606f7b !important'
            },
            navbarTextColor: '#fff',
            widgetTopSectionStyle: 'default',
            widgetThemeStyle: 'card',
            navbarColor: '#000000',
            fonts: {
              navbarReviewsTitleFontSize: null,
              navbarButtonsFontSize: null,
              starSummaryOverallScoreFontSize: null,
              starSummaryReviewsnumFontSize: null,
              starSummaryProgressBarsFontSize: null,
              filtersFontSize: null,
              reviewsCardMainFontSize: null,
              reviewsCardSecondaryFontSize: null,
              reviewsCardStarsFontSize: null,
              reviewsCardVerifiedFontSize: null,
              reviewsCardDateFontSize: null,
              reviewsCardUserNameFontSize: null,
              formHeadingsFontSize: null,
              formPostFontSize: null,
              formInputFontSize: null,
              paginatorFontSize: null,
              qnaTitleFontSize: null
            },
            shop: {
              id: 0,
              name: ''
            },
            reviewPublishing: 'email',
            navbarButtons: {
              question: {
                active: false,
                thankyouScreen: false,
                show: true
              },
              review: {
                active: false,
                thankyouScreen: false,
                show: true
              }
            },
            questionsAndAnswersActive: true,
            numberReviewColumns: 2,
            numberReviewsPerPage: 8,
            preferredDateFormat: 'yyyy/MM/dd',
            defaultSorting: 'content'
          },
          reviewDetails: {
            id: '',
            name: '',
            variants: [],
            starDistribution: {
              5: 0,
              4: 0,
              3: 0,
              2: 0,
              1: 0
            },
            reviewImages: [],
            reviewVideos: [],
            reviewNumber: 0,
            averageStars: 0.0,
            reviewPageCount: 1,
            reviewUgc: []
          },
          validEmailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          youtubeLinkRegex: /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\-_]+)/,
          widgetVisibility: {
            visible: false,
            fullyVisible: false
          }
        }; // CONCATENATED MODULE: ./src/mixins/analyticsMixin.js

        /* harmony default export */

        var analyticsMixin = {
          data: function () {
            return {
              pluginAnalytics: {
                IS_LOADED: false,
                IS_GLIMPSED: false,
                IS_FULLY_SEEN: false,
                IS_MOUSE_HOVER: false,
                IS_MOUSE_SCROLL: false,
                IS_MOUSE_CLICK: false,
                SEEN_WIDGET_OR_STARS_WITH_REVIEWS: false
              }
            };
          },

          beforeCreate() {// if (!window.ga) {
            //   window['GoogleAnalyticsObject'] = 'ga';
            //   window.ga = () => (window.ga.q = window.ga.q || []).push(arguments);
            //   window.ga.l = new Date().getTime();
            //   const script = document.createElement('script');
            //   script.async = true;
            //   script.src = 'https://www.google-analytics.com/analytics.js';
            //   document.body.insertBefore(script, document.body.firstChild);
            // }
            // window.ga('create', 'UA-59714844-1', 'auto', 'OpinewTracker');
          },

          methods: {
            updateWidgetLoaded() {
              if (!this.pluginAnalytics.IS_LOADED) {
                this.sendGAUpdate('Loaded');
                this.pluginAnalytics.IS_LOADED = true;
              }
            },

            onMouseClickedEvent() {
              if (!this.pluginAnalytics.IS_MOUSE_CLICK) {
                // sendUpdate("Clicked");
                this.pluginAnalytics.IS_MOUSE_CLICK = true;
              }
            },

            onMouseHoveredEvent() {
              if (!this.pluginAnalytics.IS_MOUSE_HOVER) {
                // sendUpdate("Clicked");
                this.pluginAnalytics.IS_MOUSE_HOVER = true;
              }
            },

            onMouseScrolledEvent() {
              // console.log("scrolled");
              if (!this.pluginAnalytics.IS_MOUSE_SCROLL) {
                // sendUpdate("Clicked");
                this.pluginAnalytics.IS_MOUSE_SCROLL = true;
              }
            },

            onGlimpsedEvent() {
              if (!this.pluginAnalytics.IS_GLIMPSED) {
                this.sendGAUpdate('Glimpsed');
                this.pluginAnalytics.IS_GLIMPSED = true;
              }
            },

            onFullySeenEvent() {
              if (!this.pluginAnalytics.IS_FULLY_SEEN) {
                if (this.reviews.length > 0) {
                  this.markSeenWidgetOrStarsWithReviews();
                }

                this.sendGAUpdate('FullySeen');
                this.pluginAnalytics.IS_FULLY_SEEN = true;
              }
            },

            markSeenWidgetOrStarsWithReviews() {
              if (!this.pluginAnalytics.SEEN_WIDGET_OR_STARS_WITH_REVIEWS) {
                this.sendGAUpdate('SeenWidgetOrStarsWithReviews');
                this.sendActivityNotification('seen_reviews_or_stars');
                this.pluginAnalytics.SEEN_WIDGET_OR_STARS_WITH_REVIEWS = true;
              }
            },

            // eslint-disable-next-line no-unused-vars
            sendGAUpdate(eventAction) {// if (!this.noAnalytics) {
              //   window.ga('OpinewTracker.send', {
              //     hitType: 'event',
              //     eventCategory: 'ProductPageStats',
              //     eventAction: eventAction,
              //     dimension1: String(this.shopConfig.shop.id),
              //     dimension2: String(this.reviewDetails.id),
              //   });
              // }
            }

          }
        }; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCardModern.vue?vue&type=template&id=c3a95be4&scoped=true&

        var ReviewCardModernvue_type_template_id_c3a95be4_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('tr', {
            staticClass: "opw-overflow-hidden opw-bg-transparent opw-align-top opw-border-collapse opw-flex lg:opw-table-row opw-border lg:opw-border-none opw-flex-col opw-mb-4",
            style: _vm.reviewsBgBorderStyle
          }, [_c('td', {
            staticClass: "lg:opw-border opw-bg-transparent opw-border-collapse lg:opw-border-r-0 opw-w-px opw-inline-block lg:opw-table-cell opw-w-full lg:opw-w-auto opw-px-0"
          }, [_c('div', {
            staticClass: "opw-py-4 opw-px-4 lg:opw-px-6 opw-my-2 opw-h-full owp-flex opw-flex-col"
          }, [_c('div', {
            staticClass: "opw-flex lg:opw-border-b opw-items-center opw-pb-4"
          }, [_c('div', {
            staticClass: "opw-pr-4 opw-text-5xl"
          }, [_vm.review.userImageUrl ? _c('lazy-img', {
            attrs: {
              "css-class": "person-img",
              "lazy-src": _vm.review.userImageUrl,
              "alt": _vm.review.userName
            }
          }) : _c('span', {
            staticClass: "opw-align-middle"
          }, [_c('div', {
            staticClass: "opw-user-placeholder opw-text-base opw-font-normal",
            staticStyle: {}
          }, [_vm._v(" " + _vm._s(_vm.firstLetters(_vm.review.userName || _vm.$t('reviewsSection.reviewer'))) + " ")])])], 1), _c('div', {
            staticClass: " "
          }, [_c('div', {
            staticClass: "opw-text-xl opw-font-bold opw-mb-1"
          }, [_c('span', {
            style: Object.assign({}, {
              color: _vm.secondaryTextColor
            }, _vm.reviewsCardUserNameStyle)
          }, [_vm._v(_vm._s(_vm.review.userName || _vm.$t('reviewsSection.reviewer')))])]), _vm.review.verifiedReview ? _c('span', {
            staticClass: "opw-verified-badge opw-text-center opw-text-white opw-px-1 opw-font-normal opw-text-sm opw-whitespace-no-wrap",
            style: _vm.verifiedStyle
          }, [_vm._v(_vm._s(_vm.$t('reviewsSection.verifiedPurchase')))]) : _vm._e()])])])]), _c('td', {
            staticClass: "lg:opw-border opw-border-t opw-border-collapse opw-px-0"
          }, [_c('div', {
            staticClass: "opw-col-span-full opw-p-4 opw-my-2"
          }, [_c('div', {
            staticClass: "opw-flex opw-justify-between"
          }, [_c('stars', {
            attrs: {
              "rating": _vm.review.starRating,
              "reviews-card-stars-style": _vm.reviewsCardStarsStyle
            }
          }), _vm.widgetShowDates ? _c('span', {
            staticClass: "opw-date-created opw-italic opw-font-normal opw-text-sm",
            style: _vm.reviewsCardDateStyle
          }, [_vm._v(" " + _vm._s(_vm.createdDate(_vm.review.createdTs)))]) : _vm._e()], 1), _c('div', {
            staticClass: "opinew-review-text-container opw-my-4"
          }, [_vm.review.showFullReview ? _c('div', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_vm._v(" " + _vm._s(_vm.review.body) + " ")]) : _c('div', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_c('span', [_vm._v(" " + _vm._s(_vm.review.body.substr(0, _vm.constants.MAX_DISPLAYED_BODY_LENGTH)) + " ")]), _c('a', {
            staticClass: "show-more",
            attrs: {
              "href": "#"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.showFullReview(_vm.review);
              }
            }
          }, [_vm._v(" (...) " + _vm._s(_vm.$t('reviewsSection.showMore')) + " ")])])]), _vm.renderThumbs ? _c('div', {
            staticClass: "opw-w-full opw-mt-1 opw-flex"
          }, [_vm.permissions.videoReviews && _vm.review.video ? _c('div', {
            staticClass: "opw-centered-video-gallery-container-small opw-cursor-pointer opw-mr-2",
            on: {
              "click": function ($event) {
                return _vm.$emit('show-vid', _vm.review.video);
              }
            }
          }, [_c('div', {
            staticClass: "opw-play-btn opw-play-btn-small"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]), _c('lazy-img', {
            attrs: {
              "lazy-src": _vm.videoThumbnails[_vm.review.video],
              "alt": _vm.review.productName
            }
          })], 1) : _vm._e(), _vm._l(_vm.reviewImages(_vm.review), function (imageUrl, index) {
            return _c('lazy-img', {
              key: index,
              attrs: {
                "css-class": 'opw-centered-img-gallery-container-small opw-cursor-pointer opw-mr-2',
                "lazy-src": imageUrl,
                "alt": _vm.review.productName
              },
              nativeOn: {
                "click": function ($event) {
                  return _vm.$emit('show-image', imageUrl);
                }
              }
            });
          })], 2) : _vm._e(), _vm.review.comment ? _c('div', {
            staticClass: "opw-my-4"
          }, [_c('review-comment-clean', {
            attrs: {
              "name": _vm.shop.name,
              "comment": _vm.review.comment
            }
          })], 1) : _vm._e()])])]);
        };

        var ReviewCardModernvue_type_template_id_c3a95be4_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewCardModern.vue?vue&type=template&id=c3a95be4&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCardModern.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewCardModernvue_type_script_lang_js_ = {
          name: 'ReviewCardModern',
          components: {
            ReviewCommentClean: ReviewCommentClean,
            LazyImg: LazyImg,
            Stars: Stars
          },
          props: {
            //  TODO: Reduce props count and simplify this
            review: {
              type: Object,
              default: () => {}
            },
            constants: {
              type: Object,
              default: () => ({})
            },
            reviewsBgBorderStyle: {
              type: Object,
              default: () => ({})
            },
            showReviewImages: {
              type: Boolean,
              default: false
            },
            reviewsCardMainTextStyle: {
              type: Object,
              default: () => ({})
            },
            videoThumbnails: {
              type: Object,
              default: () => ({})
            },
            secondaryTextColor: {
              type: String,
              default: ''
            },
            permissions: {
              type: Object,
              default: () => ({})
            },
            widgetShowDates: {
              type: Boolean,
              default: false
            },
            fonts: {
              type: Object,
              default: () => ({})
            },
            reviewsCardStarsStyle: {
              type: Object,
              default: () => ({})
            },
            reviewsCardUserNameStyle: {
              type: Object,
              default: () => ({})
            },
            verifiedStyle: {
              type: Object,
              default: () => ({})
            },
            shop: {
              type: Object,
              default: () => ({})
            },
            preferredDateFormat: {
              type: String,
              default: ''
            }
          },

          data() {
            return {};
          },

          computed: {
            renderThumbs() {
              return this.showReviewImages && (this.permissions.videoReviews && this.review.video || this.reviewImages(this.review) && this.reviewImages(this.review).length);
            },

            // customFields() {
            //   return (
            //     this.review.customFields &&
            //     this.review.customFields.filter((f) => f.title && f.starRating)
            //   );
            // },
            reviewsCardDateStyle() {
              return importantify({
                color: this.secondaryTextColor,
                'font-size': this.fonts.reviewsCardDateFontSize
              });
            },

            createdDate() {
              return date => {
                return formatDate(date, this.preferredDateFormat || 'yyyy/MM/dd');
              };
            }

          },
          methods: {
            firstLetters(str) {
              return str.split(' ').map(e => e[0]).slice(0, 2).join('');
            },

            reviewImages(review) {
              const limit = this.permissions.upTo5Photos ? 5 : this.permissions.upTo3Photos ? 3 : 1;
              const images = this.permissions.optimisedImages && review.imageUrlsOptimised || review.imageUrls;
              if (images) return images.slice(0, limit);else return [];
            },

            showFullReview(review) {
              this.$forceUpdate();
              review.showFullReview = true;
            }

          }
        }; // CONCATENATED MODULE: ./src/components/ReviewCardModern.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewCardModernvue_type_script_lang_js_ = ReviewCardModernvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=c3a95be4&scoped=true&lang=css&

        var basevue_type_style_index_0_id_c3a95be4_scoped_true_lang_css_ = __webpack_require__("05ba"); // EXTERNAL MODULE: ./src/components/ReviewCardModern.vue?vue&type=style&index=1&id=c3a95be4&lang=scss&scoped=true&


        var ReviewCardModernvue_type_style_index_1_id_c3a95be4_lang_scss_scoped_true_ = __webpack_require__("786a"); // CONCATENATED MODULE: ./src/components/ReviewCardModern.vue

        /* normalize component */


        var ReviewCardModern_component = normalizeComponent(components_ReviewCardModernvue_type_script_lang_js_, ReviewCardModernvue_type_template_id_c3a95be4_scoped_true_render, ReviewCardModernvue_type_template_id_c3a95be4_scoped_true_staticRenderFns, false, null, "c3a95be4", null);
        /* harmony default export */

        var ReviewCardModern = ReviewCardModern_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCardCarousel.vue?vue&type=template&id=365070e5&scoped=true&

        var ReviewCardCarouselvue_type_template_id_365070e5_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-overflow-hidden opw-p-6",
            style: _vm.reviewsBgBorderStyle
          }, [_c('div', {
            staticClass: "opw-flex"
          }, [_c('div', [_vm.review.userImageUrl ? _c('lazy-img', {
            staticClass: "opw-mr-1",
            attrs: {
              "css-class": "person-img",
              "lazy-src": _vm.review.userImageUrl,
              "alt": _vm.review.userName
            }
          }) : _c('span', {
            staticClass: "opw-mr-1",
            staticStyle: {
              "font-size": "2.5em"
            }
          }, [_c('i', {
            staticClass: "opw-noci opw-noci-user-circle",
            style: {
              color: _vm.secondaryTextColor
            },
            attrs: {
              "aria-hidden": "true"
            }
          })])], 1), _c('div', {
            staticClass: "opw-pl-2"
          }, [_c('div', {
            staticClass: "review-author opw-text-sm opw-inline-flex opw-items-center",
            style: _vm.reviewsCardUserNameStyle
          }, [_vm.review.userName ? _c('span', {
            staticClass: "opw-align-top opw-order-last",
            style: {
              color: _vm.secondaryTextColor
            }
          }, [_vm._v(_vm._s(_vm.review.userName))]) : _c('span', {
            staticClass: "opw-align-top",
            style: {
              color: _vm.secondaryTextColor
            }
          }, [_vm._v(_vm._s(_vm.$t('reviewsSection.reviewer')))])]), _vm.review.verifiedReview ? _c('div', {
            staticClass: "opw-verified-badge\n        opw-text-center\n        opw-px-2\n        opw-text-white\n        opw-font-normal\n        opw-text-sm\n        opw-whitespace-no-wrap\n        opw-mt-1",
            style: _vm.verifiedStyle
          }, [_vm._v(" " + _vm._s(_vm.$t('reviewsSection.verifiedPurchase')) + " ")]) : _vm._e()])]), _c('div', {
            staticClass: "opw-flex opw-mt-6"
          }, [_c('stars', {
            attrs: {
              "rating": _vm.review.starRating,
              "reviews-card-stars-style": _vm.reviewsCardStarsStyle
            }
          }), _vm.widgetShowDates ? _c('span', {
            staticClass: "opw-date-created opw-ml-auto",
            style: _vm.reviewsCardDateStyle
          }, [_vm._v(" (" + _vm._s(_vm.createdDate(_vm.review.createdTs)) + ")")]) : _vm._e()], 1), _c('div', {
            staticClass: "opw-my-6 opinew-review-text-container"
          }, [!_vm.review.body || _vm.review.showFullReview || _vm.review.body.length < _vm.constants.MAX_DISPLAYED_BODY_LENGTH ? _c('div', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_vm._v(" " + _vm._s(_vm.review.body) + " ")]) : _c('div', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_c('span', [_vm._v(" " + _vm._s(_vm.review.body.substr(0, _vm.constants.MAX_DISPLAYED_BODY_LENGTH)) + "... ")]), _c('br'), _c('a', {
            staticClass: "show-more opw-mt-2 opw-font-bold opw-underline",
            attrs: {
              "href": "#"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.showFullReview(_vm.review);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('reviewsSection.showMore')) + " ")])])]), _vm.review.comment ? _c('review-comment-clean', {
            attrs: {
              "name": _vm.shop.name,
              "comment": _vm.review.comment
            }
          }) : _vm._e(), _vm.showReviewImages ? _c('div', {
            staticClass: "opw-w-full opw-mt-1 opw-flex"
          }, [_vm.permissions.videoReviews && _vm.review.video ? _c('div', {
            staticClass: "opw-centered-video-gallery-container-small opw-cursor-pointer opw-mr-2",
            on: {
              "click": function ($event) {
                return _vm.$emit('show-vid', _vm.review.video);
              }
            }
          }, [_c('div', {
            staticClass: "opw-play-btn opw-play-btn-small"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]), _c('lazy-img', {
            attrs: {
              "lazy-src": _vm.videoThumbnails[_vm.review.video],
              "alt": _vm.review.productName
            }
          })], 1) : _vm._e(), _vm._l(_vm.reviewImages(_vm.review), function (imageUrl, index) {
            return _c('lazy-img', {
              key: index,
              attrs: {
                "css-class": 'opw-centered-img-gallery-container-small opw-cursor-pointer opw-mr-2',
                "lazy-src": imageUrl,
                "alt": _vm.review.productName
              },
              nativeOn: {
                "click": function ($event) {
                  return _vm.$emit('show-image', imageUrl);
                }
              }
            });
          })], 2) : _vm._e()], 1);
        };

        var ReviewCardCarouselvue_type_template_id_365070e5_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewCardCarousel.vue?vue&type=template&id=365070e5&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCardCarousel.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewCardCarouselvue_type_script_lang_js_ = {
          name: 'ReviewCardModern',
          components: {
            LazyImg: LazyImg,
            Stars: Stars,
            ReviewCommentClean: ReviewCommentClean
          },
          props: {
            //  TODO: Reduce props count and simplify this
            review: {
              type: Object,
              default: () => {}
            },
            constants: {
              type: Object,
              default: () => ({})
            },
            reviewsBgBorderStyle: {
              type: Object,
              default: () => ({})
            },
            showReviewImages: {
              type: Boolean,
              default: false
            },
            reviewsCardMainTextStyle: {
              type: Object,
              default: () => ({})
            },
            videoThumbnails: {
              type: Object,
              default: () => ({})
            },
            secondaryTextColor: {
              type: String,
              default: ''
            },
            permissions: {
              type: Object,
              default: () => ({})
            },
            widgetShowDates: {
              type: Boolean,
              default: false
            },
            fonts: {
              type: Object,
              default: () => ({})
            },
            reviewsCardStarsStyle: {
              type: Object,
              default: () => ({})
            },
            // reviewsCardSecondaryTextStyle: {
            //   type: Object,
            //   default: () => ({}),
            // },
            reviewsCardUserNameStyle: {
              type: Object,
              default: () => ({})
            },
            verifiedStyle: {
              type: Object,
              default: () => ({})
            },
            preferredDateFormat: {
              type: String,
              default: ''
            },
            shop: {
              type: Object,
              default: () => ({})
            }
          },

          data() {
            return {};
          },

          computed: {
            reviewsCardDateStyle() {
              return importantify({
                color: this.secondaryTextColor,
                'font-size': this.fonts.reviewsCardDateFontSize
              });
            },

            createdDate() {
              return date => {
                return formatDate(date, this.preferredDateFormat || 'yyyy/MM/dd');
              };
            }

          },
          methods: {
            // customFields() {
            //   return (
            //     this.review.customFields &&
            //     this.review.customFields.filter((f) => f.title && f.starRating)
            //   );
            // },
            reviewImages(review) {
              const limit = this.permissions.upTo5Photos ? 5 : this.permissions.upTo3Photos ? 3 : 1;
              const images = this.permissions.optimisedImages && review.imageUrlsOptimised || review.imageUrls;
              if (images) return images.slice(0, limit);else return [];
            },

            showFullReview(review) {
              this.$forceUpdate();
              review.showFullReview = true;
            }

          }
        }; // CONCATENATED MODULE: ./src/components/ReviewCardCarousel.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewCardCarouselvue_type_script_lang_js_ = ReviewCardCarouselvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=365070e5&scoped=true&lang=css&

        var basevue_type_style_index_0_id_365070e5_scoped_true_lang_css_ = __webpack_require__("e63e"); // EXTERNAL MODULE: ./src/components/ReviewCardCarousel.vue?vue&type=style&index=1&id=365070e5&lang=scss&scoped=true&


        var ReviewCardCarouselvue_type_style_index_1_id_365070e5_lang_scss_scoped_true_ = __webpack_require__("d0c8"); // CONCATENATED MODULE: ./src/components/ReviewCardCarousel.vue

        /* normalize component */


        var ReviewCardCarousel_component = normalizeComponent(components_ReviewCardCarouselvue_type_script_lang_js_, ReviewCardCarouselvue_type_template_id_365070e5_scoped_true_render, ReviewCardCarouselvue_type_template_id_365070e5_scoped_true_staticRenderFns, false, null, "365070e5", null);
        /* harmony default export */

        var ReviewCardCarousel = ReviewCardCarousel_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionModern.vue?vue&type=template&id=bb84d6c2&scoped=true&

        var SharedTopSectionModernvue_type_template_id_bb84d6c2_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', [_c('div', {
            staticClass: "opw-mt-6 opw-mb-3 opw-w-full "
          }, [_c('div', {
            staticClass: "opw-flex opw-flex-wrap opw-w-full md:opw-justify-between md:opw-px-0"
          }, [_c('div', {
            staticClass: "opw-flex opw-flex-grow opw-my-1"
          }, [_c('span', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-2 sm:opw-mr-4 lg:opw-mr-8 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'reviews' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'reviews');
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('general.reviews')) + " (" + _vm._s(_vm.reviewDetails.reviewNumber) + ")")]), _vm.questionsAndAnswersActive ? _c('span', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-4 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'questions' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'questions');
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('questionsSection.QNASectionHeading')) + " (" + _vm._s(_vm.questions.length) + ")")]) : _vm._e()]), _c('span', {
            staticClass: "opw-flex opw-text-right opw-flex-grow md:opw-flex-grow-0 opw-my-1"
          }, [_vm.navbarButtons.review.show ? _c('span', {
            staticClass: "opw-uppercase\n          opw-text-center\n          opw-ml-auto\n          opw-navbar-button-write-review\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-ml-2\n          opw-px-4\n          opw-leading-none\n          opw-flex\n          opw-items-center\n          opw-justify-center\n          opw-py-3\n          opw-border\n          opw-mt-0\n          opw-flex-grow\n          ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonReview')))]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('span', {
            staticClass: "opw-uppercase\n          opw-text-center\n          opw-navbar-button-ask-question\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-ml-2\n          opw-px-4\n          opw-leading-none\n          opw-flex\n          opw-items-center\n          opw-justify-center\n          opw-py-3\n          opw-border\n          opw-mt-0\n          opw-flex-grow\n          ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonQuestion')))]) : _vm._e()])])]), _c('div', {
            staticClass: "\n          opw-leading-none\n          opw-overflow-hidden\n          opw-grid\n          opw-border-solid\n          opw-border\n          opw-border-grey-light\n          opw-grid-cols-1\n          md:opw-grid-cols-2\n          xl:opw-grid-cols-4\n        ",
            style: _vm.reviewsBgBorderStyle
          }, [_c('div', {
            staticClass: "xl:opw-col-span-1 md:opw-border-r opw-py-4 lg:opw-px-6 opw-px-4"
          }, [_vm.reviewDetails.reviewNumber > 0 ? _c('div', {}, [_c('div', {
            staticClass: "opw-text-4xl opw-mr-4 opw-rounded opw-p-1 opw-inline-block white--text opw-mb-2",
            style: Object.assign({}, _vm.getFontStyles('starSummaryOverallScoreFontSize'), {
              background: _vm.starsColor
            })
          }, [_vm._v(" " + _vm._s(_vm.reviewDetails.averageStars) + " ")]), _c('stars', {
            staticClass: "opw-mb-2",
            attrs: {
              "rating": _vm.reviewDetails.averageStars,
              "reviews-card-stars-style": _vm.getFontStyles('starSummaryOverallScoreFontSize', 'starsColor')
            }
          })], 1) : _vm._e(), _c('div', {
            staticClass: "opw-mb-2",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize')
          }, [_c('span', {
            staticClass: "opw-capitalize"
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.from')))]), _vm._v(" " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')) + " ")]), _vm.showStarBars ? _c('star-bars', {
            staticClass: " ",
            attrs: {
              "verbal": false,
              "reversed-stars-range": _vm.reversedStarsRange,
              "review-details": _vm.reviewDetails,
              "stars-filtered": _vm.starsFiltered,
              "stars-color": _vm.starsColor
            }
          }) : _vm._e()], 1), _c('div', {
            staticClass: "xl:opw-col-span-3 opw-p-4 opw-px-4 lg:opw-px-6 opw-border-t lg:opw-border-t-0"
          }, [_c('div', {
            staticClass: "opw-flex opw-justify-center md:opw-justify-start"
          }, [_vm.showGalleryThumbnails ? _c('shared-thumbnails', {
            attrs: {
              "video-thumbnails": _vm.videoThumbnails,
              "condensed": _vm.condensed,
              "num-featured-images": _vm.numFeaturedImages,
              "slides": _vm.slides
            }
          }) : _vm._e()], 1)])]), _c('div', {
            staticClass: "opw-filters md:opw-flex opw-items-center opw-justify-end opw-mt-4"
          }, [_c('div', {
            staticClass: "opw-mb-2 opw-text-right opw-flex opw-items-center opw-mr-4 opw-mt-2",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize')
          }, [_vm._v(" " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')) + " ")]), _c('span', {
            staticClass: "lg:opw-ml-1 opw-flex opw-items-center  opw-h-full opw-border opw-filters-select  opw-flex",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n                  opw-w-full\n                  opw-flex-grow\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])])]);
        };

        var SharedTopSectionModernvue_type_template_id_bb84d6c2_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/SharedTopSectionModern.vue?vue&type=template&id=bb84d6c2&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionModern.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var SharedTopSectionModernvue_type_script_lang_js_ = {
          name: 'SharedTopSectionModern',
          components: {
            StarBars: StarBars
          },
          mixins: [TopSectionMixin]
        }; // CONCATENATED MODULE: ./src/components/SharedTopSectionModern.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_SharedTopSectionModernvue_type_script_lang_js_ = SharedTopSectionModernvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/SharedTopSectionModern.vue?vue&type=style&index=0&lang=scss&

        var SharedTopSectionModernvue_type_style_index_0_lang_scss_ = __webpack_require__("afd6"); // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=1&id=bb84d6c2&scoped=true&lang=css&


        var basevue_type_style_index_1_id_bb84d6c2_scoped_true_lang_css_ = __webpack_require__("1864"); // EXTERNAL MODULE: ./src/components/SharedTopSectionModern.vue?vue&type=style&index=2&id=bb84d6c2&lang=scss&scoped=true&


        var SharedTopSectionModernvue_type_style_index_2_id_bb84d6c2_lang_scss_scoped_true_ = __webpack_require__("1848"); // EXTERNAL MODULE: ./src/components/SharedTopSectionModern.vue?vue&type=style&index=3&lang=scss&


        var SharedTopSectionModernvue_type_style_index_3_lang_scss_ = __webpack_require__("4d18"); // CONCATENATED MODULE: ./src/components/SharedTopSectionModern.vue

        /* normalize component */


        var SharedTopSectionModern_component = normalizeComponent(components_SharedTopSectionModernvue_type_script_lang_js_, SharedTopSectionModernvue_type_template_id_bb84d6c2_scoped_true_render, SharedTopSectionModernvue_type_template_id_bb84d6c2_scoped_true_staticRenderFns, false, null, "bb84d6c2", null);
        /* harmony default export */

        var SharedTopSectionModern = SharedTopSectionModern_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionCondensed.vue?vue&type=template&id=37925883&scoped=true&

        var SharedTopSectionCondensedvue_type_template_id_37925883_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', [_c('div', {
            staticClass: "opw-leading-none opw-overflow-hidden opw-py-4 opw-px-1 md:opw-px-4 opw-border-none",
            class: [_vm.card ? 'opw-shadow-md' : ''],
            style: Object.assign({}, _vm.reviewsBgBorderStyle, {
              border: 'none',
              background: 'none'
            })
          }, [_c('div', {
            staticClass: "opw-mb-2 opw-font-bold opw-mb-2 opw-text-center lg:opw-text-left ",
            style: _vm.getFontStyles('navbarButtonsFontSize', 'navbarTextColor')
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " ")]), _c('div', {
            staticClass: "opw-w-full opw-flex opw-flex-wrap opw-justify-center lg:opw-justify-start",
            staticStyle: {
              "min-height": "5rem"
            }
          }, [_c('div', {
            staticClass: "opw-pb-2 opw-text-center md:opw-ml-0 md:opw-pr-4 opw-flex opw-justify-center lg:opw-justify-start lg:opw-separator "
          }, [_c('div', {
            staticClass: "opw-text-center"
          }, [_vm.reviewDetails.reviewNumber > 0 ? _c('span', {
            staticClass: "opw-text-4xl",
            style: _vm.getFontStyles('starSummaryOverallScoreFontSize', 'navbarTextColor')
          }, [_vm._v(_vm._s(_vm.reviewDetails.averageStars) + " ")]) : _vm._e(), _c('stars', {
            attrs: {
              "reviews-card-stars-style": _vm.getFontStyles('starSummaryOverallScoreFontSize', 'starsColor'),
              "rating": _vm.reviewDetails.averageStars
            }
          }), _vm.reviewDetails.reviewNumber > 0 ? _c('div', {
            staticClass: "opw-text-2xl opw-from-reviews opw-leading-5",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize', 'navbarTextColor')
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.from')) + " " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')) + " ")]) : _vm._e()], 1)]), _vm.showStarBars ? _c('div', {
            staticClass: "opw-px-4 lg:opw-separator opw-flex-grow lg:opw-flex-grow-0 opw-w-full lg:opw-w-auto opw-pb-2 lg:opw-pb-0"
          }, [_c('star-bars', {
            staticClass: "opw-mw-400 opw-mx-auto",
            attrs: {
              "reversed-stars-range": _vm.reversedStarsRange,
              "review-details": _vm.reviewDetails,
              "stars-filtered": _vm.starsFiltered,
              "stars-color": _vm.starsColor
            }
          })], 1) : _vm._e(), _c('div', {
            staticClass: "opw-flex-grow opw-flex opw-flex-wrap lg:opw-flex-no-wrap lg:opw-justify-end opw-justify-center lg:opw-justify-between"
          }, [_vm.showGalleryThumbnails ? _c('div', {
            staticClass: "opw-mb-4 lg:opw-mb-0 lg:opw-pl-4 opw-w-full lg:opw-w-auto opw-flex opw-text-center opw-justify-center"
          }, [_c('shared-thumbnails', {
            staticClass: "opw-justify-center",
            attrs: {
              "video-thumbnails": _vm.videoThumbnails,
              "num-featured-images": _vm.numFeaturedImages,
              "slides": _vm.slides
            }
          })], 1) : _vm._e()])])]), _c('div', {
            staticClass: "opw-mt-6"
          }, [_c('div', {
            staticClass: "opw-px-2 lg:opw-px-4"
          }, [_c('div', {
            staticClass: "opw-flex opw-w-full opw-justify-between opw-widget-tabs "
          }, [_c('div', {
            staticClass: "opw-flex"
          }, [_c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-2 sm:opw-mr-4 lg:opw-mr-8 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'reviews' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'reviews');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " (" + _vm._s(_vm.reviewDetails.reviewNumber) + ") ")]), _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-4 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'questions' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'questions');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('questionsSection.QNASectionHeading')) + " (" + _vm._s(_vm.questions.length) + ") ")]) : _vm._e()]), _c('span', {
            staticClass: "opw-flex"
          }, [_vm.navbarButtons.review.show ? _c('span', {
            staticClass: "opw-uppercase\n\n            opw-whitespace-no-wrap\n            opw-hidden lg:opw-flex\n            opw-navbar-button-write-review\n            opinew-navbar-button\n            opw-cursor-pointer\n            opw-mx-1\n            opw-px-4\n            opw-flex\n            opw-items-center\n            opw-justify-center\n            opw-border\n            opw-mt-0\n            ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonReview')))]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('span', {
            staticClass: "opw-uppercase\n            opw-navbar-button-ask-question\n            opw-whitespace-no-wrap\n            opinew-navbar-button\n            opw-cursor-pointer\n            opw-hidden lg:opw-flex\n            opw-mx-1\n            opw-px-4\n            opw-flex\n            opw-items-center\n            opw-justify-center\n            opw-border\n            opw-mt-0\n            ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonQuestion')))]) : _vm._e(), _c('span', {
            staticClass: "opw-ml-1 opw-flex opw-items-center opw-w-full opw-h-full opw-border opw-filters-select opw-hidden md:opw-flex",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                    opw-uppercase\n                    opw-select\n                    opw-cursor-pointer\n                    opw-minimal-select\n                    opw-bg-transparent\n                    opw-appearance-none\n                    opw-border-transparent\n                    opw-border-0\n\n                  ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])])])]), _c('div', {
            staticClass: "opw-filters opw-flex opw-flex-wrap opw-justify-center lg:opw-hidden opw-w-full"
          }, [[_vm.navbarButtons.review.show ? _c('div', {
            staticClass: "opw-uppercase\n            opw-flex-grow\n            opw-navbar-button-write-review\n            opinew-navbar-button\n            opw-cursor-pointer\n            opw-px-4\n            opw-text-center\n            opw-py-3\n            opw-leading-none\n            opw-border\n            opw-mt-0\n            opw-mx-2\n            opw-mt-4\n\n",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_c('div', {
            staticClass: "opw-cta opw-mx-auto"
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonReview')) + " ")])]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase\n            opw-navbar-button-ask-question\n            opinew-navbar-button\n            opw-cursor-pointer\n            opw-px-4\n            opw-flex-grow\n            opw-py-3\n            opw-text-center\n            opw-leading-none\n            opw-border\n            opw-mx-2\n            opw-mt-0\n            opw-mt-4",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_c('div', {
            staticClass: "opw-cta opw-mx-auto"
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonQuestion')) + " ")])]) : _vm._e()], _c('span', {
            staticClass: "opw-flex opw-flex-grow opw-items-center opw-mt-4 opw-justify-center opw-border opw-filters-select opw-mx-2 opw-py-1 md:opw-hidden",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                    opw-uppercase\n                    opw-text-center\n                    opw-select\n                    opw-cursor-pointer\n                    opw-minimal-select\n                    opw-bg-transparent\n                    opw-appearance-none\n                    opw-border-transparent\n                    opw-border-0\n                    opw-flex-grow\n\n                  ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])], 2)])]);
        };

        var SharedTopSectionCondensedvue_type_template_id_37925883_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/SharedTopSectionCondensed.vue?vue&type=template&id=37925883&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionCondensed.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var SharedTopSectionCondensedvue_type_script_lang_js_ = {
          name: 'SharedTopSectionCondensed',
          components: {
            StarBars: StarBars
          },
          mixins: [TopSectionMixin]
        }; // CONCATENATED MODULE: ./src/components/SharedTopSectionCondensed.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_SharedTopSectionCondensedvue_type_script_lang_js_ = SharedTopSectionCondensedvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=37925883&scoped=true&lang=css&

        var basevue_type_style_index_0_id_37925883_scoped_true_lang_css_ = __webpack_require__("b19e"); // EXTERNAL MODULE: ./src/components/SharedTopSectionCondensed.vue?vue&type=style&index=1&id=37925883&lang=scss&scoped=true&


        var SharedTopSectionCondensedvue_type_style_index_1_id_37925883_lang_scss_scoped_true_ = __webpack_require__("c15e"); // EXTERNAL MODULE: ./src/components/SharedTopSectionCondensed.vue?vue&type=style&index=2&lang=scss&


        var SharedTopSectionCondensedvue_type_style_index_2_lang_scss_ = __webpack_require__("d49e"); // CONCATENATED MODULE: ./src/components/SharedTopSectionCondensed.vue

        /* normalize component */


        var SharedTopSectionCondensed_component = normalizeComponent(components_SharedTopSectionCondensedvue_type_script_lang_js_, SharedTopSectionCondensedvue_type_template_id_37925883_scoped_true_render, SharedTopSectionCondensedvue_type_template_id_37925883_scoped_true_staticRenderFns, false, null, "37925883", null);
        /* harmony default export */

        var SharedTopSectionCondensed = SharedTopSectionCondensed_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionCarousel.vue?vue&type=template&id=54005507&scoped=true&

        var SharedTopSectionCarouselvue_type_template_id_54005507_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-text-center"
          }, [_c('div', {
            staticClass: "opw-pt-2 opw-my-1 opw-font-bold",
            style: _vm.getFontStyles('starSummaryOverallScoreFontSize', 'textColor')
          }, [_vm._v(" " + _vm._s(_vm.reviewDetails.averageStars) + " ")]), _c('div', {
            staticClass: "opw-my-2"
          }, [_c('stars', {
            attrs: {
              "rating": _vm.reviewDetails.averageStars,
              "reviews-card-stars-style": _vm.getFontStyles('starSummaryOverallScoreFontSize', 'starsColor')
            }
          })], 1), _c('div', {
            staticClass: "opw-my-1",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize')
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.from')) + " " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')) + " ")]), _c('div', [_c('div', {
            staticClass: "\n    opw-all-photos-container\n    opw-w-full\n    opw-my-3\n    opw-flex\n    opw-justify-center\n    md:opw-flex-grow\n  "
          }, [_vm.showGalleryThumbnails ? _c('div', {
            staticClass: "opw-thumbnails-container-small md:opw-float-right opw-my-6"
          }, [_vm._l(_vm.slides.slice(0, _vm.numFeaturedImages), function (ref) {
            var img = ref[0];
            return [/(vimeo|youtu\.?be)/i.test(img) ? [_c('span', {
              key: img,
              staticClass: "\n            opw-centered-video-gallery-container-small\n            opw-cursor-pointer\n            opw-mr-2\n          ",
              on: {
                "click": function ($event) {
                  return _vm.$emit('change-slide', img);
                }
              }
            }, [_c('span', {
              staticClass: "opw-play-btn opw-play-btn-small"
            }, [_c('svg', {
              attrs: {
                "xmlns": "http://www.w3.org/2000/svg",
                "viewBox": "0 0 311.69 311.69"
              }
            }, [_c('path', {
              attrs: {
                "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
              }
            }), _c('polygon', {
              attrs: {
                "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
              }
            })])]), _c('lazy-img', {
              attrs: {
                "css-class": "opw-review-image-thumbnail",
                "lazy-src": _vm.videoThumbnails[img]
              }
            })], 1)] : [_c('span', {
              key: img,
              staticClass: "\n            opw-centered-img-gallery-container-condensed\n            opw-cursor-pointer\n            opw-mr-2\n          ",
              on: {
                "click": function ($event) {
                  return _vm.$emit('change-slide', img);
                }
              }
            }, [_c('lazy-img', {
              attrs: {
                "css-class": "opw-review-image-thumbnail",
                "lazy-src": img
              }
            })], 1)]];
          })], 2) : _vm._e()])]), _c('div', {
            staticClass: "opw-mt-6 opw-mb-2 opw-px-2 opw-my-8 opw-pb-6",
            staticStyle: {
              "width": "94%",
              "margin-left": "3%",
              "margin-right": "3%"
            }
          }, [_c('div', {
            staticClass: "opw-flex opw-flex-wrap opw-w-full opw-justify-between "
          }, [_c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-2 sm:opw-mr-4 lg:opw-mr-8 opw-mt-0 opw-leading-none opw-py-3 opw-my-1",
            class: _vm.activeTab === 'reviews' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'reviews');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " (" + _vm._s(_vm.reviewDetails.reviewNumber) + ") ")]), _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-4 opw-mt-0 opw-leading-none opw-py-3 opw-my-1",
            class: _vm.activeTab === 'questions' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'questions');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('questionsSection.QNASectionHeading')) + " (" + _vm._s(_vm.questions.length) + ") ")]) : _vm._e(), _c('div', {
            staticClass: "opw-flex-grow"
          }), _c('span', {
            staticClass: "opw-text-right opw-hidden lg:opw-flex lg:opw-flex-grow xl:opw-flex-grow-0 opw-my-1"
          }, [_vm.navbarButtons.review.show ? _c('span', {
            staticClass: "opw-uppercase\n          opw-navbar-button-write-review\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-mr-1\n          opw-px-4\n          opw-py-3\n          opw-flex\n          opw-items-center\n          opw-justify-center\n          opw-flex-grow\n          opw-border\n          opw-mt-0\n          ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonReview')))]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('span', {
            staticClass: "opw-uppercase\n          opw-navbar-button-ask-question\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-mx-1\n          opw-px-4\n          opw-py-3\n          opw-flex\n          opw-items-center\n          opw-justify-center\n          opw-flex-grow\n          opw-border\n          opw-mt-0\n          ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonQuestion')))]) : _vm._e(), _c('span', {
            staticClass: "opw-ml-1 opw-flex-grow"
          }, [_c('span', {
            staticClass: "opw-flex opw-items-center opw-w-full opw-h-full opw-border opw-filters-select",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n                  opw-flex-grow\n\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])])])])]), _c('div', {
            staticClass: "opw-filters opw-pb-2 md:opw-flex opw-justify-center lg:opw-hidden opw-my-8 opw-px-1 lg:opw-px-0",
            staticStyle: {
              "width": "94%",
              "margin-left": "3%",
              "margin-right": "3%"
            }
          }, [[_vm.navbarButtons.review.show ? _c('div', {
            staticClass: "opw-uppercase\n        opw-flex-grow\n          opw-navbar-button-write-review\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-px-4\n          opw-text-center\n          opw-py-3\n          opw-leading-none\n          opw-border\n          opw-mt-0\n          opw-mx-1\n          opw-mb-2",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonReview')) + " ")]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase\n          opw-navbar-button-ask-question\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-px-4\n          opw-flex-grow\n          opw-text-center\n          opw-py-3\n          opw-leading-none\n          opw-border\n          opw-mx-1\n          opw-mt-0\n          opw-mb-2",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonQuestion')) + " ")]) : _vm._e()], _c('span', {
            staticClass: "opw-flex opw-flex-grow opw-items-center opw-mb-2 opw-justify-center opw-border opw-filters-select opw-mx-1 opw-py-1",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-text-center\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n                  opw-flex-grow\n\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])], 2)]);
        };

        var SharedTopSectionCarouselvue_type_template_id_54005507_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/SharedTopSectionCarousel.vue?vue&type=template&id=54005507&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionCarousel.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var SharedTopSectionCarouselvue_type_script_lang_js_ = {
          name: 'SharedTopSectionCarousel',
          mixins: [TopSectionMixin]
        }; // CONCATENATED MODULE: ./src/components/SharedTopSectionCarousel.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_SharedTopSectionCarouselvue_type_script_lang_js_ = SharedTopSectionCarouselvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/SharedTopSectionCarousel.vue?vue&type=style&index=0&lang=scss&

        var SharedTopSectionCarouselvue_type_style_index_0_lang_scss_ = __webpack_require__("333d"); // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=1&id=54005507&scoped=true&lang=css&


        var basevue_type_style_index_1_id_54005507_scoped_true_lang_css_ = __webpack_require__("aca6"); // EXTERNAL MODULE: ./src/components/SharedTopSectionCarousel.vue?vue&type=style&index=2&id=54005507&lang=scss&scoped=true&


        var SharedTopSectionCarouselvue_type_style_index_2_id_54005507_lang_scss_scoped_true_ = __webpack_require__("8f39"); // EXTERNAL MODULE: ./src/components/SharedTopSectionCarousel.vue?vue&type=style&index=3&lang=scss&


        var SharedTopSectionCarouselvue_type_style_index_3_lang_scss_ = __webpack_require__("cca2"); // CONCATENATED MODULE: ./src/components/SharedTopSectionCarousel.vue

        /* normalize component */


        var SharedTopSectionCarousel_component = normalizeComponent(components_SharedTopSectionCarouselvue_type_script_lang_js_, SharedTopSectionCarouselvue_type_template_id_54005507_scoped_true_render, SharedTopSectionCarouselvue_type_template_id_54005507_scoped_true_staticRenderFns, false, null, "54005507", null);
        /* harmony default export */

        var SharedTopSectionCarousel = SharedTopSectionCarousel_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionMinimal.vue?vue&type=template&id=6383fd88&scoped=true&

        var SharedTopSectionMinimalvue_type_template_id_6383fd88_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', [_c('div', {
            staticClass: "opw-leading-none opw-overflow-hidden lg:opw-py-8 md:opw-px-4",
            class: [_vm.card ? 'opw-shadow-md' : ''],
            style: Object.assign({}, _vm.reviewsBgBorderStyle, {
              border: 'none'
            })
          }, [_c('div', {
            staticClass: "opw-min-w-full lg:opw-py-6 opw-pt-4"
          }, [_c('div', {
            staticClass: "opw-uppercase opw-text-center",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize', 'navbarColor')
          }, [_c('div', {
            staticClass: "opw-font-bold",
            style: _vm.titleStyle
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " ")]), _vm.reviewDetails.reviewNumber > 0 && _vm.themeStyle !== _vm.constants.WIDGET_TOP_SECTION_STYLE_CLEAN ? _c('div', {
            staticClass: "opw-text-2xl\n          opw-from-reviews\n          opw-mt-4\n          opw-flex\n          opw-flex-col\n          opw-justify-center\n          opw-flex-wrap\n          opw-items-center\n          lg:opw-pb-6\n          opw-py-2",
            style: _vm.getFontStyles('starSummaryReviewsnumFontSize', 'navbarColor')
          }, [_c('span', {
            staticClass: "opw-font-bold",
            style: _vm.getFontStyles('starSummaryOverallScoreFontSize')
          }, [_vm._v(" " + _vm._s(_vm.reviewDetails.averageStars) + " ")]), _c('stars', {
            staticClass: "opw-my-2",
            attrs: {
              "rating": _vm.reviewDetails.averageStars,
              "reviews-card-stars-style": _vm.getFontStyles('starSummaryOverallScoreFontSize', 'starsColor')
            }
          }), _c('span', {
            style: _vm.getFontStyles('summaryCardNoReviews')
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.from')) + " " + _vm._s(_vm.reviewDetails.reviewNumber) + " " + _vm._s(_vm.$t('summaryCard.reviews')) + " ")])], 1) : _vm._e()])])]), _c('div', {
            staticClass: "opw-mt-6 opw-mb-2 opw-px-4 opw-w-full "
          }, [_c('div', {
            staticClass: "opw-flex opw-w-full opw-justify-between opw-widget-tabs opw-pb-6 "
          }, [_c('div', {
            staticClass: "opw-flex"
          }, [_c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-2 sm:opw-mr-4 lg:opw-mr-8 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'reviews' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'reviews');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('general.reviews')) + " (" + _vm._s(_vm.reviewDetails.reviewNumber) + ") ")]), _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase opw-widget-tab opw-mr-4 opw-mt-0 opw-leading-none opw-py-3",
            class: _vm.activeTab === 'questions' ? 'opw-font-bold' : 'opw-border-transparent',
            style: {
              'border-bottom-color': _vm.navbarColor,
              color: _vm.navbarColor + ' !important'
            },
            on: {
              "click": function ($event) {
                return _vm.$emit('change-tab', 'questions');
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('questionsSection.QNASectionHeading')) + " (" + _vm._s(_vm.questions.length) + ") ")]) : _vm._e()]), _c('span', {
            staticClass: "opw-text-right opw-hidden lg:opw-flex"
          }, [_vm.navbarButtons.review.show ? _c('span', {
            staticClass: "opw-uppercase\n          opw-ml-auto\n          opw-navbar-button-write-review\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-mx-1\n          opw-px-4\n          opw-flex\n          opw-items-center\n          opw-justify-center\n          opw-border\n          opw-mt-0\n          ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonReview')))]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('span', {
            staticClass: "opw-uppercase\n          opw-navbar-button-ask-question\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-mx-1\n          opw-px-4\n          opw-flex\n          opw-items-center\n          opw-justify-center\n          opw-border\n          opw-mt-0\n          ",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('navbar.buttonQuestion')))]) : _vm._e(), _c('span', {
            staticClass: "opw-ml-1"
          }, [_c('span', {
            staticClass: "opw-flex opw-items-center opw-w-full opw-h-full opw-border opw-filters-select",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])])])])]), _c('div', {
            staticClass: "opw-filters opw-pb-2 md:opw-flex opw-justify-center lg:opw-hidden opw-w-full opw-px-3 opw-mt-6"
          }, [[_vm.navbarButtons.review.show ? _c('div', {
            staticClass: "opw-uppercase\n        opw-flex-grow\n          opw-navbar-button-write-review\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-px-4\n          opw-text-center\n          opw-py-3\n          opw-leading-none\n          opw-border\n          opw-mt-0\n          opw-mx-1\n          opw-mb-2",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.review, _vm.navbarButtons.review.active);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonReview')) + " ")]) : _vm._e(), _vm.navbarButtons.question.show && _vm.questionsAndAnswersActive ? _c('div', {
            staticClass: "opw-uppercase\n          opw-navbar-button-ask-question\n          opinew-navbar-button\n          opw-cursor-pointer\n          opw-px-4\n          opw-flex-grow\n          opw-py-3\n          opw-text-center\n          opw-leading-none\n          opw-border\n          opw-mx-1\n          opw-mt-0\n          opw-mb-2",
            style: _vm.navbarButtonsStyle,
            on: {
              "click": function ($event) {
                return _vm.showForm(_vm.navbarButtons.question, _vm.navbarButtons.question.active);
              }
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('navbar.buttonQuestion')) + " ")]) : _vm._e()], _c('span', {
            staticClass: "opw-flex opw-flex-grow opw-items-center opw-mb-2 opw-justify-center opw-border opw-filters-select opw-mx-1 opw-py-1",
            style: _vm.navbarButtonsStyle
          }, [_c('select', {
            staticClass: "\n                  opw-uppercase\n                  opw-text-center\n                  opw-select\n                  opw-cursor-pointer\n                  opw-minimal-select\n                  opw-bg-transparent\n                  opw-appearance-none\n                  opw-border-transparent\n                  opw-border-0\n                  opw-flex-grow\n\n                ",
            on: {
              "change": function ($event) {
                return _vm.$emit('filter-select', $event);
              }
            }
          }, [_c('option', {
            attrs: {
              "disabled": "",
              "selected": "",
              "hidden": ""
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.filterBy')) + " ")]), _c('option', {
            attrs: {
              "value": "recent"
            }
          }, [_vm._v(_vm._s(_vm.$t('summaryCard.recent')))]), _c('option', {
            attrs: {
              "value": "photos_videos"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('summaryCard.photosAndVideos')) + " ")])])])], 2)]);
        };

        var SharedTopSectionMinimalvue_type_template_id_6383fd88_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/SharedTopSectionMinimal.vue?vue&type=template&id=6383fd88&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/SharedTopSectionMinimal.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var SharedTopSectionMinimalvue_type_script_lang_js_ = {
          name: 'SharedTopSectionMinimal',
          mixins: [TopSectionMixin]
        }; // CONCATENATED MODULE: ./src/components/SharedTopSectionMinimal.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_SharedTopSectionMinimalvue_type_script_lang_js_ = SharedTopSectionMinimalvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=6383fd88&scoped=true&lang=css&

        var basevue_type_style_index_0_id_6383fd88_scoped_true_lang_css_ = __webpack_require__("f301"); // EXTERNAL MODULE: ./src/components/SharedTopSectionMinimal.vue?vue&type=style&index=1&id=6383fd88&lang=scss&scoped=true&


        var SharedTopSectionMinimalvue_type_style_index_1_id_6383fd88_lang_scss_scoped_true_ = __webpack_require__("fd72"); // EXTERNAL MODULE: ./src/components/SharedTopSectionMinimal.vue?vue&type=style&index=2&lang=scss&


        var SharedTopSectionMinimalvue_type_style_index_2_lang_scss_ = __webpack_require__("980c"); // CONCATENATED MODULE: ./src/components/SharedTopSectionMinimal.vue

        /* normalize component */


        var SharedTopSectionMinimal_component = normalizeComponent(components_SharedTopSectionMinimalvue_type_script_lang_js_, SharedTopSectionMinimalvue_type_template_id_6383fd88_scoped_true_render, SharedTopSectionMinimalvue_type_template_id_6383fd88_scoped_true_staticRenderFns, false, null, "6383fd88", null);
        /* harmony default export */

        var SharedTopSectionMinimal = SharedTopSectionMinimal_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181c2bb3-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCardClean.vue?vue&type=template&id=61e53698&scoped=true&

        var ReviewCardCleanvue_type_template_id_61e53698_scoped_true_render = function () {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "opw-overflow-hidden ",
            class: {
              'opw-shadow-md': _vm.widgetThemeStyle === _vm.constants.WIDGET_THEME_STYLE_CARD
            }
          }, [_c('div', [_c('div', {
            staticClass: " opw-py-4 opw-border-grey-light opw-px-4",
            class: _vm.numberReviewColumns > 1 ? 'opw-border' : 'opw-border-b'
          }, [_vm.showReviewImages && _vm.permissions.videoReviews && _vm.showLargeReviewImage && _vm.review.video && _vm.numberReviewColumns !== 1 ? _c('div', {
            staticClass: "opw-review-image-container opw-cursor-pointer opw-mb-4",
            on: {
              "click": function ($event) {
                return _vm.$emit('show-vid', _vm.review.video);
              }
            }
          }, [_c('div', {
            staticClass: "opw-play-btn"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]), _c('lazy-img', {
            attrs: {
              "lazy-src": _vm.videoThumbnails[_vm.review.video],
              "alt": _vm.review.productName
            }
          })], 1) : _vm.showReviewImages && _vm.showLargeReviewImage && +_vm.numberReviewColumns > 1 && (_vm.reviewImages(_vm.review).length > 0 && _vm.review.showImage || _vm.review.imageUrls == null && _vm.review.displayedImageUrl != null && _vm.review.displayedImageUrl.length > 0) ? _c('div', {
            staticClass: "opw-review-image-container opw-mb-4"
          }, [_vm.reviewImages(_vm.review).length > 0 && _vm.review.showImage ? _c('lazy-img', {
            style: _vm.reviewsMainImgStyle,
            attrs: {
              "css-class": "opw-review-image opw-cursor-pointer opw-w-auto",
              "lazy-src": _vm.reviewImages(_vm.review)[0],
              "alt": _vm.review.productName
            },
            nativeOn: {
              "click": function ($event) {
                _vm.$emit('show-image', _vm.reviewImages(_vm.review)[0]);
              }
            }
          }) : _vm._e(), _vm.review.imageUrls == null && _vm.review.displayedImageUrl != null && _vm.review.displayedImageUrl.length > 0 ? _c('lazy-img', {
            attrs: {
              "css-class": "opw-review-image opw-cursor-pointer",
              "lazy-src": _vm.review.displayedImageUrl,
              "alt": ""
            },
            nativeOn: {
              "click": function ($event) {
                return _vm.$emit('show-image', _vm.review.displayedImageUrl);
              }
            }
          }) : _vm._e()], 1) : _vm._e(), _c('div', {
            staticClass: "opw-flex opw-items-start"
          }, [_c('div', {
            staticClass: "opw-text-lg opw-mb-1 opw-flex",
            style: _vm.reviewsCardSecondaryTextStyle
          }, [_c('div', {
            staticClass: "opw-flex opw-items-center"
          }, [_vm.review.userImageUrl ? _c('lazy-img', {
            attrs: {
              "css-class": "person-img opw-text-4xl",
              "lazy-src": _vm.review.userImageUrl,
              "alt": _vm.review.userName
            }
          }) : _c('span', [_c('div', {
            staticClass: "opw-initial opw-text-lg opw-mr-2",
            style: _vm.reviewsCardUserNameStyle
          }, [_vm._v(" " + _vm._s(_vm.firstLetters(_vm.review.userName || _vm.$t('reviewsSection.reviewer'))) + " ")])])], 1)]), _c('div', {
            staticClass: "rev-content"
          }, [_c('div', [_c('div', {
            staticClass: "opw-flex opw-items-center"
          }, [_c('stars', {
            staticClass: "opw-mr-2",
            attrs: {
              "rating": _vm.review.starRating,
              "reviews-card-stars-style": _vm.reviewsCardStarsStyle
            }
          }), _vm.widgetShowDates ? _c('span', {
            staticClass: "opw-date-created opw-italic opw-font-normal opw-text-sm",
            style: _vm.reviewsCardDateStyle
          }, [_vm._v(" " + _vm._s(_vm.createdDate(_vm.review.createdTs)))]) : _vm._e()], 1), _c('div', {
            staticClass: "opw-my-2 opw-flex opw-flex-wrap"
          }, [_vm.review.verifiedReview ? _c('span', {
            staticClass: "opw-verified-badge opw-text-center opw-text-white opw-px-1 opw-font-normal opw-text-sm opw-whitespace-no-wrap opw-mb-1 opw-mr-1",
            style: _vm.verifiedStyle
          }, [_vm._v(_vm._s(_vm.$t('reviewsSection.verifiedPurchase')))]) : _vm._e(), _c('span', {
            staticClass: "review-author opw-text-lg opw-font-bold",
            style: _vm.reviewsCardUserNameStyle
          }, [_vm.review.userName ? _c('span', {
            staticClass: "opw-align-top",
            style: {
              color: _vm.secondaryTextColor
            }
          }, [_vm._v(_vm._s(_vm.review.userName))]) : _c('span', {
            staticClass: "opw-align-top",
            style: {
              color: _vm.secondaryTextColor
            }
          }, [_vm._v(_vm._s(_vm.$t('reviewsSection.reviewer')))])])])]), _vm.type === 'Shop' && _vm.review.productUrl != null ? _c('div', {
            staticClass: "opw-py-4 opw-font-bold opw-text-sm  opw-text-lg "
          }, [_c('a', {
            attrs: {
              "href": _vm.review.productUrl
            }
          }, [_vm._v(_vm._s(_vm.review.productName))])]) : _vm._e()])]), _vm.review.body ? _c('div', {
            staticClass: "opinew-review-text-container opw-pt-4 opw--mb-1"
          }, [_vm.review.showFullReview ? _c('p', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_vm._v(" " + _vm._s(_vm.review.body) + " ")]) : _c('p', {
            staticClass: "opw-leading-normal",
            style: _vm.reviewsCardMainTextStyle
          }, [_c('span', [_vm._v(" " + _vm._s(_vm.review.body.substr(0, _vm.constants.MAX_DISPLAYED_BODY_LENGTH)) + " ")]), _c('a', {
            staticClass: "show-more",
            attrs: {
              "href": "#"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.showFullReview(_vm.review);
              }
            }
          }, [_vm._v(" (...) " + _vm._s(_vm.$t('reviewsSection.showMore')) + " ")])])]) : _vm._e(), _vm.showReviewImages && (_vm.reviewImages(_vm.review).length || _vm.review.video) ? _c('div', {
            staticClass: "opw-w-full opw-mt-4 opw-flex"
          }, [_vm.permissions.videoReviews && _vm.review.video ? _c('div', {
            staticClass: "opw-centered-video-gallery-container-small opw-cursor-pointer opw-mr-2",
            on: {
              "click": function ($event) {
                return _vm.$emit('show-vid', _vm.review.video);
              }
            }
          }, [_c('div', {
            staticClass: "opw-play-btn opw-play-btn-small"
          }, [_c('svg', {
            attrs: {
              "xmlns": "http://www.w3.org/2000/svg",
              "viewBox": "0 0 311.69 311.69"
            }
          }, [_c('path', {
            attrs: {
              "d": "M155.84,0A155.85,155.85,0,1,0,311.69,155.84,155.84,155.84,0,0,0,155.84,0Zm0,296.42A140.58,140.58,0,1,1,296.42,155.84,140.58,140.58,0,0,1,155.84,296.42Z"
            }
          }), _c('polygon', {
            attrs: {
              "points": "218.79 155.84 119.22 94.34 119.22 217.34 218.79 155.84"
            }
          })])]), _c('lazy-img', {
            attrs: {
              "lazy-src": _vm.videoThumbnails[_vm.review.video],
              "alt": _vm.review.productName
            }
          })], 1) : _vm._e(), _vm._l(_vm.reviewImages(_vm.review), function (imageUrl, index) {
            return _c('lazy-img', {
              key: index,
              attrs: {
                "css-class": 'opw-centered-img-gallery-container-small opw-cursor-pointer opw-mr-2',
                "lazy-src": imageUrl,
                "alt": _vm.review.productName
              },
              nativeOn: {
                "click": function ($event) {
                  return _vm.$emit('show-image', imageUrl);
                }
              }
            });
          })], 2) : _vm._e(), _vm.review.comment ? _c('div', {
            staticClass: "opw-mt-4"
          }, [_c('div', {
            staticClass: "opw-bg-grey-light opw-p-4 opw-rounded"
          }, [_vm._v(" " + _vm._s(_vm.review.comment) + " ")])]) : _vm._e()])])]);
        };

        var ReviewCardCleanvue_type_template_id_61e53698_scoped_true_staticRenderFns = []; // CONCATENATED MODULE: ./src/components/ReviewCardClean.vue?vue&type=template&id=61e53698&scoped=true&
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/ReviewCardClean.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var ReviewCardCleanvue_type_script_lang_js_ = {
          name: 'ReviewCardClean',
          components: {
            LazyImg: LazyImg,
            Stars: Stars
          },
          props: {
            review: {
              type: Object,
              default: () => {}
            },
            constants: {
              type: Object,
              default: () => ({})
            },
            // eslint-disable-next-line vue/no-unused-properties
            reviewsBgBorderStyle: {
              type: Object,
              default: () => ({})
            },
            reviewsCardSecondaryTextStyle: {
              type: Object,
              default: () => ({})
            },
            showReviewImages: {
              type: Boolean,
              default: false
            },
            reviewsCardMainTextStyle: {
              type: Object,
              default: () => ({})
            },
            videoThumbnails: {
              type: Object,
              default: () => ({})
            },
            secondaryTextColor: {
              type: String,
              default: ''
            },
            widgetThemeStyle: {
              type: String,
              default: ''
            },
            permissions: {
              type: Object,
              default: () => ({})
            },
            type: {
              type: String,
              default: ''
            },
            widgetShowDates: {
              type: Boolean,
              default: false
            },
            showLargeReviewImage: {
              type: Boolean,
              default: false
            },
            // eslint-disable-next-line vue/no-unused-properties
            shop: {
              type: Object,
              default: () => ({})
            },
            fonts: {
              type: Object,
              default: () => ({})
            },
            reviewsCardStarsStyle: {
              type: Object,
              default: () => ({})
            },
            reviewsCardUserNameStyle: {
              type: Object,
              default: () => ({})
            },
            verifiedStyle: {
              type: Object,
              default: () => ({})
            },
            preferredDateFormat: {
              type: String,
              default: ''
            },
            numberReviewColumns: {
              type: Number,
              default: null
            }
          },

          data() {
            return {};
          },

          computed: {
            reviewsCardDateStyle() {
              return importantify({
                color: this.secondaryTextColor,
                'font-size': this.fonts.reviewsCardDateFontSize
              });
            },

            createdDate() {
              return date => {
                return formatDate(date, this.preferredDateFormat || 'yyyy/MM/dd');
              };
            }

          },
          methods: {
            firstLetters(str) {
              return str.split(' ').map(e => e[0]).slice(0, 2).join('');
            },

            reviewImages(review) {
              const limit = this.permissions.upTo5Photos ? 5 : this.permissions.upTo3Photos ? 3 : 1;
              const images = this.permissions.optimisedImages && review.imageUrlsOptimised || review.imageUrls;
              if (images) return images.slice(0, limit);else return [];
            },

            showFullReview(review) {
              this.$forceUpdate();
              review.showFullReview = true;
            }

          }
        }; // CONCATENATED MODULE: ./src/components/ReviewCardClean.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_ReviewCardCleanvue_type_script_lang_js_ = ReviewCardCleanvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=61e53698&scoped=true&lang=css&

        var basevue_type_style_index_0_id_61e53698_scoped_true_lang_css_ = __webpack_require__("8c43"); // EXTERNAL MODULE: ./src/components/ReviewCardClean.vue?vue&type=style&index=1&id=61e53698&lang=scss&scoped=true&


        var ReviewCardCleanvue_type_style_index_1_id_61e53698_lang_scss_scoped_true_ = __webpack_require__("3c8a"); // CONCATENATED MODULE: ./src/components/ReviewCardClean.vue

        /* normalize component */


        var ReviewCardClean_component = normalizeComponent(components_ReviewCardCleanvue_type_script_lang_js_, ReviewCardCleanvue_type_template_id_61e53698_scoped_true_render, ReviewCardCleanvue_type_template_id_61e53698_scoped_true_staticRenderFns, false, null, "61e53698", null);
        /* harmony default export */

        var ReviewCardClean = ReviewCardClean_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/sharedAppView.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        // import QuestionAnswersCarousel from '@/components/QuestionAnswersCarousel';

        /* harmony default export */

        var sharedAppViewvue_type_script_lang_js_ = {
          name: 'SharedAppView',
          mixins: [configMixin, analyticsMixin],
          props: {
            loadProducts: {
              type: Object,
              default: () => ({})
            },
            admin: {
              type: Boolean,
              default: false
            }
          },
          components: {
            ReviewCardClean: ReviewCardClean,
            // QuestionAnswersCarousel,
            CloseIcon: CloseIcon,
            SharedTopSectionMinimal: SharedTopSectionMinimal,
            ReviewContainer: ReviewContainer,
            ReviewContainerCarousel: ReviewContainerCarousel,
            SharedTopSectionCarousel: SharedTopSectionCarousel,
            SharedTopSectionModern: SharedTopSectionModern,
            SharedTopSectionCondensed: SharedTopSectionCondensed,
            ReviewCardModern: ReviewCardModern,
            ReviewCardCarousel: ReviewCardCarousel,
            SharedTopSection: SharedTopSection,
            WriteQuestion: WriteQuestion,
            QuestionsAnswers: QuestionsAnswers,
            SharedNavbar: SharedNavbar,
            PickPlan: PickPlan,
            ReviewCard: ReviewCard,
            OpinewGallery: OpinewGallery,
            ReviewRequest: ReviewRequest,
            // eslint-disable-next-line vue/no-unused-components
            Pagination: Pagination
          },

          data() {
            return { ...sharedViewConfig,
              constants: constants,
              shopNeedsToChoosePlan: false,
              showWidgetIfNoReviews: true,
              emptyReviewMetafieldMode: false,
              //used when there are no reviews yet - will use the shopify product ID to communicate in the api (in case somebody wants to leave a review or a question). Done because for speedup purposes during install we don't set up the data metafield and have no access to opinew product id
              starsFiltered: false,
              photosFiltered: false,
              sortedReviews: {},
              shopifyProductId: '',
              videoThumbnails: {},
              questions: [],
              questionsPerPage: 4,
              questionsPaginated: [],
              type: '',
              canProceedWithQuestion: true,
              pluginElement: null,
              activeTab: 'reviews',
              pageLoading: false,
              allRevs: [],
              currentPage: 1,
              currentImageUrl: null,
              afterRevs: {},
              beforeRevs: {},
              lastGraphicRevId: null,
              slides: [],
              pageCount: 1,
              widgetSeenTimestamp: null,
              maxWidgetScreenTime: 0,
              widgetSeenInterval: null
            };
          },

          mounted() {
            this.setPluginElement();
            this.setPlatformProductId();
            document.body.insertBefore(this.$refs.reviewModal, document.body.firstChild);
          },

          watch: {
            loadProducts: {
              handler(val) {
                var _val$product;

                this.showWidgetIfNoReviews = !(!val || ((_val$product = val.product) === null || _val$product === void 0 ? void 0 : _val$product.reviewNumber) === 0);

                if (val) {
                  this.loadPluginJSON();

                  if (this.reviews.length > 0) {
                    if (this.hasReviewsAndStarsOnPage()) {
                      this.markSeenWidgetOrStarsWithReviews();
                    }

                    this.checkSubscription();
                  }
                }

                window.addEventListener('scroll', this.updateWidgetSeen, false);
                window.addEventListener('resize', this.updateWidgetSeen, false);
                window.addEventListener('touchmove', this.updateWidgetSeen, false);
                window.setInterval(this.updateWidgetSeen, 1000);
              },

              immediate: true,
              deep: true
            },

            defaultSorting(val) {
              if (this.sortedReviews[val]) {
                this.$set(this.allRevs, this.currentPage - 1, this.sortedReviews[val].map(r => {
                  this.mapVideo(r);
                  return r;
                }));
              } else {
                this.changePage(1, {
                  refresh: true
                });
              }

              this.updateSlides();
            }

          },
          computed: {
            isCondensed() {
              const {
                WIDGET_TOP_SECTION_STYLE_CONDENSED: condensed,
                WIDGET_TOP_SECTION_STYLE_CLEAN: clean
              } = this.constants;
              return [condensed, clean].includes(this.shopConfig.widgetTopSectionStyle);
            },

            topBarProps() {
              return {
                condensed: this.isCondensed,
                themeStyle: this.shopConfig.widgetTopSectionStyle,
                card: this.shopConfig.widgetTopSectionStyle === this.constants.WIDGET_THEME_STYLE_CARD,
                clean: this.shopConfig.widgetTopSectionStyle === this.constants.WIDGET_TOP_SECTION_STYLE_CLEAN,
                reviewDetails: this.reviewDetails,
                showStarBars: this.shopConfig.showStarBars,
                starsFiltered: this.starsFiltered,
                slides: this.slides,
                questions: this.questions,
                titleStyle: this.getFontStyles('navbarReviewsTitleFontSize', 'navbarTextColor'),
                showForm: this.showForm,
                navbarButtons: this.shopConfig.navbarButtons,
                showReviewImages: this.shopConfig.showReviewImages,
                // progressFontSize: this.shopConfig.fonts.starSummaryProgressBarsFontSize,
                showCustomerImagesSection: this.shopConfig.showCustomerImagesSection,
                starsColor: this.shopConfig.starsColor,
                questionsAndAnswersActive: this.shopConfig.questionsAndAnswersActive,
                // navbarTextColor: this.shopConfig.navbarTextColor,
                navbarColor: this.shopConfig.navbarColor,
                textColor: this.shopConfig.textColor,
                navbarButtonsStyle: this.navbarButtonsStyle,
                widgetThemeStyle: this.shopConfig.widgetThemeStyle,
                activeTab: this.activeTab,
                videoThumbnails: this.videoThumbnails,
                getFontStyles: this.getFontStyles,
                reviewsBgBorderStyle: this.reviewsBgBorderStyle,
                starBarsWidthAuto: true,
                starBarsWidth: this.shopConfig.starBarsWidth
              };
            },

            reviewCardProps() {
              return {
                condensed: this.isCondensed,
                constants: this.constants,
                reviewsBgBorderStyle: this.reviewsBgBorderStyle,
                reviewsCardMainTextStyle: this.getFontStyles('reviewsCardMainFontSize', 'textColor'),
                themeStyle: this.shopConfig.widgetTopSectionStyle,
                showReviewImages: this.shopConfig.showReviewImages,
                secondaryTextColor: this.shopConfig.secondaryTextColor,
                showLargeReviewImage: this.shopConfig.showLargeReviewImage,
                numberReviewColumns: this.shopConfig.numberReviewColumns,
                videoThumbnails: this.videoThumbnails,
                permissions: this.shopConfig.permissions,
                widgetShowDates: this.shopConfig.widgetShowDates,
                preferredDateFormat: this.shopConfig.preferredDateFormat,
                reviewsCardStarsStyle: this.getFontStyles('reviewsCardSecondaryTextStyle', 'starsColor'),
                reviewsCardUserNameStyle: this.getFontStyles('reviewsCardUserNameFontSize'),
                verifiedStyle: this.reviewsCardVerifiedStyle,
                // type: this.type,
                shop: this.shopConfig.shop,
                fonts: this.shopConfig.fonts
              };
            },

            pageCountQuestions() {
              return Math.ceil(this.questions.length / this.questionsPerPage);
            },

            platformProductId() {
              return this.shopifyProductId;
            },

            reviewColumnBuckets() {
              return this.separateReviewsIntoBuckets(this.preprocessReviews(this.reviews));
            },

            generateColumnNumberStyles() {
              let result = '';

              if (this.shopConfig.numberReviewColumns === 5) {
                result += 'xl:opw-w-1/5 md:opw-w-1/3';
              } else if (this.shopConfig.numberReviewColumns === 4) {
                result += 'xl:opw-w-1/4 md:opw-w-1/3';
              } else if (this.shopConfig.numberReviewColumns === 3) {
                result += 'sm:opw-w-1/2 md:opw-w-1/3';
              } else if (this.shopConfig.numberReviewColumns === 2) {
                result += 'sm:opw-w-1/2';
              }

              result += ' opw-w-full';
              return result;
            },

            navbarButtonsStyle() {
              return importantify({
                color: this.shopConfig.navbarTextColor,
                'border-color': this.shopConfig.navbarTextColor,
                'font-size': this.shopConfig.fonts.navbarButtonsFontSize
              });
            },

            reviewsCardVerifiedStyle() {
              return importantify({
                'font-size': this.shopConfig.fonts.reviewsCardVerifiedFontSize,
                'background-color': this.shopConfig.verifiedBadgeColor,
                'padding-top': '0.2em',
                'padding-bottom': '0.2em'
              });
            },

            reviewsBgBorderStyle() {
              return importantify({
                'background-color': this.shopConfig.backgroundColor,
                border: this.shopConfig.reviewsCardBorderActive && this.shopConfig.widgetTopSectionStyle !== 'clean' ? '1px solid ' + this.shopConfig.reviewsCardBorderColor : undefined
              });
            },

            formPostButtonStyle() {
              return importantify({
                'background-color': this.shopConfig.buttonsColor,
                'font-size': this.shopConfig.fonts.formPostFontSize
              });
            },

            reviews() {
              return this.allRevs[this.currentPage - 1] || [];
            },

            getAllReviews() {
              return this.allRevs.flat();
            },

            slideIndex() {
              return this.findSlideIndex(this.currentImageUrl);
            }

          },
          methods: {
            closeModal() {
              this.shopConfig.navbarButtons.review.active = false;
              this.shopConfig.navbarButtons.question.active = false;
              this.shopConfig.navbarButtons.question.thankyouScreen = false;
            },

            updateSlides() {
              //Video first
              const slides = [];
              this.reviewDetails.reviewUgc.forEach(r => this.appendUniqueSlide(slides, r));
              this.allRevs.flat().filter(r => r).forEach(r => this.appendUniqueSlide(slides, r));
              Object.entries(this.afterRevs).forEach(([id, reviews]) => {
                const index = slides.slice().reverse().findIndex(s => s[1].id === +id);
                this.appendSlidesDict(index, reviews, slides);
              });
              Object.entries(this.beforeRevs).forEach(([id, reviews]) => {
                const index = slides.findIndex(s => s[1].id === +id);
                this.appendSlidesDict(index - 1, reviews, slides);
              });
              this.slides.forEach(s => {
                this.mapVideo(s[1]);
              });
              this.slides = slides;
            },

            appendSlidesDict(index, reviews, list) {
              if (index >= 0) {
                const beforeSlides = [];
                reviews.forEach(r => this.appendUniqueSlide(beforeSlides, r));
                list.splice(index - 1, 0, ...beforeSlides.filter(([url]) => !list.find(s => s[0] === url)));
              }
            },

            appendUniqueSlide(list, review) {
              if (review.video && !list.find(s => s[0] === review.video)) {
                list.push([review.video, review]);
              }

              const images = this.shopConfig.permissions.optimisedImages && review.imageUrlsOptimised || review.imageUrls;
              images.forEach(url => {
                if (!list.find(s => s[0] === url)) {
                  list.push([url, review]);
                }
              });
            },

            findSlideIndex(imageUrl = this.currentImageUrl) {
              if (!imageUrl) return null;
              const ind = this.slides.findIndex(([url]) => url === imageUrl);
              return ind < 0 ? null : ind;
            },

            hasReviewsAndStarsOnPage() {
              return this.reviews.length > 0 && document.querySelector('#opinew-stars-plugin-product');
            },

            onSelectFilter(event) {
              this.photosFiltered = event.target.value === 'photos_videos';

              if (['smart', 'recent', 'content'].includes(event.target.value)) {
                this.shopConfig.defaultSorting = event.target.value;
              }

              this.changePage(1, {
                refresh: true
              });
            },

            keysToCamel(o) {
              if (isObject(o)) {
                return mapObjKeysRecursive(o, snakeToCamel);
              } else if (Array.isArray(o) && o.every(e => this.isObject(e))) {
                return o.map(i => {
                  return mapObjKeysRecursive(i, snakeToCamel());
                });
              }

              return o;
            },

            mappedReview() {
              var _this$loadProducts;

              const data = ((_this$loadProducts = this.loadProducts) === null || _this$loadProducts === void 0 ? void 0 : _this$loadProducts.reviewFormData) || {
                products: [],
                reviewer: {
                  name: null,
                  email: null
                },
                shopName: null,
                shopId: null,
                shopConfig: this.shopConfig
              };
              return this.keysToCamel(data);
            },

            scrollToElementbyId(elementId) {
              const element = document.getElementById(elementId);
              element && element.scrollIntoView();
            },

            setPluginElement() {
              this.pluginElement = document.getElementById('opinew-plugin') || document.getElementById('opinew-app-container');
            },

            updateWidgetSeen() {
              const box = this.pluginElement.getBoundingClientRect();
              let seenRatio = (window.innerHeight - box.y) / box.height;
              seenRatio = Math.max(0, seenRatio);

              if (seenRatio > 0 && !this.widgetVisibility.visible) {
                this.widgetVisibility.visible = true;
                this.onGlimpsedEvent();
              }

              if (seenRatio > 0.5 && !this.widgetVisibility.fullyVisible) {
                this.widgetVisibility.fullyVisible = true;
                this.sendActivityNotification('review_widget_seen');
                this.onFullySeenEvent();
              } // log widget screen time


              if (seenRatio > 0.5 && !this.widgetSeenTimestamp) {
                this.widgetSeenTimestamp = new Date().getTime();
                this.widgetSeenInterval = setInterval(this.logWidgetScreenTime, 5000);
              }

              if (seenRatio < 0.3 && this.widgetSeenTimestamp) {
                this.logWidgetScreenTime();
                this.widgetSeenTimestamp = null;
                clearInterval(this.widgetSeenInterval);
              }
            },

            logWidgetScreenTime() {
              if (this.widgetSeenTimestamp) {
                const newScreenTime = new Date().getTime() - this.widgetSeenTimestamp;

                if (newScreenTime > this.maxWidgetScreenTime) {
                  this.maxWidgetScreenTime = newScreenTime;
                  this.sendActivityNotification('review_widget_seen');
                }
              }
            },

            sendActivityNotification(action) {
              if (this.reviews && this.reviews.length > 0 || this.questions && this.questions.length > 0) {
                get(`/shop/${this.shopConfig.shop.id}/notify-about-event?action=${action}&sorting=${this.shopConfig.defaultSorting}&screen_time=${this.maxWidgetScreenTime}`);
              }
            },

            setPlatformProductId() {
              let metafield = null;

              if (document.querySelector('[data-opw-prodreviews]')) {
                metafield = document.querySelector('[data-opw-prodreviews]').getAttribute('data-opw-prodreviews');
              }

              if (!metafield) {
                this.emptyReviewMetafieldMode = true;
              }

              if (document.getElementById('opinew-plugin')) {
                this.shopifyProductId = document.getElementById('opinew-plugin').getAttribute('data-platform-product-id');
              }
            },

            // eslint-disable-next-line max-lines-per-function
            loadPluginJSON() {
              const r = mapObjKeysRecursive(this.loadProducts, snakeToCamel);

              if (r !== null && r !== void 0 && r.product) {
                this.reviewDetails = r.product;

                if (r.product.videoReviews) {
                  r.product.videoReviews.forEach(e => this.mapVideo(e));
                }

                this.reviewDetails.reviewPageCount = r.reviewPageCount;

                if (r.reviews[this.shopConfig.defaultSorting]) {
                  this.$set(this.allRevs, this.currentPage - 1, this.adjustReviewsSizeToConfigured(r.reviews[this.shopConfig.defaultSorting].map(r => {
                    this.mapVideo(r);
                    return r;
                  })));
                  this.sortedReviews = r.reviews;
                } else {
                  this.$set(this.allRevs, 0, this.adjustReviewsSizeToConfigured(r.reviews.map(r => {
                    this.mapVideo(r);
                    return r;
                  })));
                }

                this.questions = r.questions;
                this.fetchPageQuestions(1);
                this.reviewFormData = r.reviewFormData || null;
                this.type = r.widgetType;

                if (this.type === 'Shop') {
                  this.shopConfig.navbarButtons.review.show = false;
                  this.shopConfig.navbarButtons.question.show = false;
                  this.shopConfig.questionsAndAnswersActive = false;
                }

                this.updateSlides();
                this.loadVideoThumbnails();
                this.pageCount = Math.ceil(r.product.reviewNumber / this.shopConfig.numberReviewsPerPage);
              }
            },

            preprocessReviews(reviews) {
              reviews = this.adjustReviewsSizeToConfigured(reviews);

              for (let i = 0; i < reviews.length; i++) {
                reviews[i]['showFullReview'] = !reviews[i].body || reviews[i].body.length <= this.constants.MAX_DISPLAYED_BODY_LENGTH;
              }

              return reviews;
            },

            adjustReviewsSizeToConfigured(reviews) {
              // console.log(this.num)
              return reviews.slice(0, this.shopConfig.numberReviewsPerPage);
            },

            separateReviewsIntoBuckets(reviews) {
              //create an array of buckets (which are arrays themself too)
              const buckets = [];

              for (let i = 0; i < this.shopConfig.numberReviewColumns; i++) {
                buckets.push([]);
              } // fill the buckets like this using modulo arithmetic
              // b1    b2    b3
              // 1     2     3
              // 4     5     6
              // 7
              //
              // this way we have the top reviews at the high positions in the columns


              for (let j = 0; j < reviews.length; j++) {
                buckets[j % this.shopConfig.numberReviewColumns].push(reviews[j]);
              }

              return buckets;
            },

            fetchPageQuestions(page) {
              // let nextPage = page ||
              const pageEnd = page * this.questionsPerPage;
              const pageStart = pageEnd - this.questionsPerPage;

              if (this.questions) {
                this.questionsPaginated = this.questions.slice(pageStart, pageEnd);
              }
            },

            async changePage(targetPage = 1, options = {}) {
              const {
                starFiltering,
                refresh
              } = options;
              this.scrollToElementbyId('opinew-app-container');

              if (!this.allRevs[targetPage - 1] || starFiltering || refresh) {
                try {
                  this.pageLoading = true;
                  await this.fetchPage(targetPage, starFiltering);
                } catch (e) {
                  console.error(e);
                } finally {
                  this.pageLoading = false;
                }
              }

              this.currentPage = targetPage;
            },

            async fetchPage(pageNum, starFiltering) {
              let filteringQueryString = '';

              if (this.photosFiltered) {
                filteringQueryString = '&filter_by=photos';
              }

              const r = await get(this.getBasePath(starFiltering) + `&js=1&page=${pageNum}` + filteringQueryString);
              this.$set(this.allRevs, pageNum - 1, r.reviews.map(r => {
                this.mapVideo(r);
                return r;
              }));
              this.updateSlides();
              this.pageCount = r.reviewPageCount;
            },

            getBasePath(starFiltering) {
              let starFilteringQueryString = '';
              const filteringQueryString = '';

              if (starFiltering) {
                starFilteringQueryString = '&star_filtering=' + String(starFiltering);
              }

              let ppId = this.platformProductId;

              if (false) {}

              const sortingQueryString = '&sort_by=' + this.shopConfig.defaultSorting;
              let url;

              if (this.type === 'Shop') {
                url = '/plugins/shop_api?shop_id=' + this.reviewDetails.id;
              } else {
                url = '/plugins/product_api?get_by=platform_product_id&platform_product_id=' + ppId;
              }

              return url + sortingQueryString + starFilteringQueryString + filteringQueryString;
            },

            async getNextSlides({
              id,
              starFiltering,
              direction = 'forward'
            }) {
              const {
                reviews
              } = await get(this.getBasePath(starFiltering) + '&js=1' + `&filter_by=photos&review_id=${id}&direction=${direction}`);
              return reviews;
            },

            checkSubscription() {
              const url = '/api/shops/' + this.shopConfig.shop.id + '/check-subscription?platform_product_id=' + this.shopifyProductId;
              get(url).then(r => {
                this.shopNeedsToChoosePlan = r.data.status;
              }).catch(error => {
                console.error(error);
              });
            },

            hideThankYouScreen(navbarOption) {
              const option = this.shopConfig.navbarButtons[navbarOption];
              setTimeout(() => {
                option && this.$set(option, 'thankyouScreen', false);
              }, 4000);
            },

            showForm(menu, active) {
              Object.keys(this.shopConfig.navbarButtons).forEach(tab => {
                this.shopConfig.navbarButtons[tab].active = !active && this.shopConfig.navbarButtons[tab] === menu;
              });
            },

            hideNavbar() {
              Object.values(this.shopConfig.navbarButtons).forEach(tab => {
                this.$set(tab, 'active', false);
              });
            },

            async loadVideoThumbnails() {
              const dict = {};

              for (const slide of this.slides.filter(s => s[1].video)) {
                if (this.youtubeLinkRegex.test(slide[1].video)) {
                  const videoId = slide[1].video.match(this.youtubeLinkRegex)[1];
                  dict[slide[1].video] = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                } else {
                  const videoId = slide[1].video.split('/')[3];
                  const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}&height=360`;
                  const {
                    thumbnailUrl
                  } = await get(url);
                  dict[slide[1].video] = thumbnailUrl;
                }
              }

              this.videoThumbnails = dict;
            },

            getFontStyles(sizeKey, colorKey) {
              return importantify({
                color: this.shopConfig[colorKey],
                fontSize: this.shopConfig.fonts[sizeKey]
              });
            },

            async prefetch(index) {
              var _this$slides$index;

              const rev = (_this$slides$index = this.slides[index]) === null || _this$slides$index === void 0 ? void 0 : _this$slides$index[1];

              if (!rev) {
                return;
              }

              if (index + 1 === this.slides.length && rev.id !== this.lastGraphicRevId && this.allRevs[this.allRevs.length - 1].length === 8) {
                const reviews = await this.fetchNextSlides(rev.id);

                if (reviews && reviews.length && reviews.length < 8) {
                  this.lastGraphicRevId = reviews[reviews.length - 1].id;
                }
              }

              const isFirstOnPage = !!this.allRevs.find(list => list && list[0].id === rev.id);
              const isLastOnBefore = !!Object.entries(this.beforeRevs).find(([_, list]) => list && list[0].id === rev.id);

              if (this.currentPage > 2 && (isFirstOnPage || isLastOnBefore) && !this.beforeRevs[rev.id]) {
                await this.fetchNextSlides(rev.id, 'backward');
              }

              this.updateSlides();
            },

            async fetchNextSlides(id, direction = 'forward') {
              const container = direction === 'forward' ? this.afterRevs : this.beforeRevs;
              const reviews = await this.getNextSlides({
                id,
                direction
              });
              this.reviews.forEach(r => this.mapVideo(r));
              reviews && this.$set(container, id, reviews);
              return reviews;
            },

            changeSlide(url) {
              this.currentImageUrl = url;
              this.prefetch(this.findSlideIndex(this.currentImageUrl));
            },

            mapVideo(rev) {
              const video = rev.video || rev.url || '';

              if (this.youtubeLinkRegex.test(video)) {
                const videoId = video.match(this.youtubeLinkRegex)[1];
                rev.youtube = {
                  url: video,
                  videoId: videoId
                };
              } else if (video) {
                const videoId = video.split('/')[3];
                rev.vimeo = {
                  url: video,
                  videoId: videoId
                };
              }
            },

            loadNext() {
              if (!this.allRevs[this.currentPage]) {
                this.fetchPage(this.currentPage + 1);
              }
            },

            showQAForm() {
              this.showForm(this.shopConfig.navbarButtons.question, this.shopConfig.navbarButtons.question.active);
              this.scrollToElementbyId('opinew-plugin');
            }

          }
        }; // CONCATENATED MODULE: ./src/components/sharedAppView.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_sharedAppViewvue_type_script_lang_js_ = sharedAppViewvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/tailwindcss/base.css?vue&type=style&index=0&id=2a07327c&scoped=true&lang=css&

        var basevue_type_style_index_0_id_2a07327c_scoped_true_lang_css_ = __webpack_require__("3410"); // EXTERNAL MODULE: ./src/components/sharedAppView.vue?vue&type=style&index=1&id=2a07327c&lang=scss&scoped=true&


        var sharedAppViewvue_type_style_index_1_id_2a07327c_lang_scss_scoped_true_ = __webpack_require__("9d57"); // EXTERNAL MODULE: ./src/components/sharedAppView.vue?vue&type=style&index=2&lang=scss&


        var sharedAppViewvue_type_style_index_2_lang_scss_ = __webpack_require__("dd77"); // CONCATENATED MODULE: ./src/components/sharedAppView.vue

        /* normalize component */


        var sharedAppView_component = normalizeComponent(components_sharedAppViewvue_type_script_lang_js_, sharedAppViewvue_type_template_id_2a07327c_scoped_true_render, sharedAppViewvue_type_template_id_2a07327c_scoped_true_staticRenderFns, false, null, "2a07327c", null);
        /* harmony default export */

        var sharedAppView = sharedAppView_component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/FloatingWidget.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var FloatingWidgetvue_type_script_lang_js_ = {
          name: 'FloatingWidget',
          mixins: [configMixin],
          props: {
            loadConfig: {
              type: Object,
              default: null
            },
            loadProducts: {
              type: Object,
              default: null
            }
          },

          data() {
            return {
              open: this.openedModal
            };
          },

          components: {
            sharedAppView: sharedAppView
          },

          mounted() {
            document.body.insertBefore(this.$refs.floatingModal, document.body.firstChild);
          },

          methods: {
            floatingButtonStyle() {
              return importantify({
                'background-color': this.shopConfig.floatingWidgetButtonBackgroundColor,
                'border-color': this.shopConfig.floatingWidgetButtonTextColor,
                'font-size': this.shopConfig.fonts.navbarButtonsFontSize,
                'z-index': '97',
                color: this.shopConfig.floatingWidgetButtonTextColor,
                position: 'fixed',
                transform: 'rotate(90deg)',
                '-webkit-transform': 'rotate(90deg)',
                'transform-origin': 'bottom left',
                '-webkit-transform-origin': 'bottom left',
                padding: '10px',
                top: '50%',
                left: '0%'
              });
            },

            changeModal() {
              this.open = !this.open;
            }

          }
        }; // CONCATENATED MODULE: ./src/components/FloatingWidget.vue?vue&type=script&lang=js&

        /* harmony default export */

        var components_FloatingWidgetvue_type_script_lang_js_ = FloatingWidgetvue_type_script_lang_js_; // EXTERNAL MODULE: ./src/components/FloatingWidget.vue?vue&type=style&index=0&lang=css&

        var FloatingWidgetvue_type_style_index_0_lang_css_ = __webpack_require__("3004"); // CONCATENATED MODULE: ./src/components/FloatingWidget.vue

        /* normalize component */


        var FloatingWidget_component = normalizeComponent(components_FloatingWidgetvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        /* harmony default export */

        var FloatingWidget = FloatingWidget_component.exports; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

        /* harmony default export */

        var entry_lib = __webpack_exports__["default"] = FloatingWidget;
        /***/
      },

      /***/
      "fbb9":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_751a6d08_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f067");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_751a6d08_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_751a6d08_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "fd72":
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionMinimal_vue_vue_type_style_index_1_id_6383fd88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("693b");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionMinimal_vue_vue_type_style_index_1_id_6383fd88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedTopSectionMinimal_vue_vue_type_style_index_1_id_6383fd88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /***/

      },

      /***/
      "fe9e":
      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      }
      /******/

    })["default"]
  );
});

/***/ }),

/***/ "992d":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("026b");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "9c52":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "9d1c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("fc61");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "a21b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("fc0c");
var DESCRIPTORS = __webpack_require__("9d1c");
var global = __webpack_require__("3da6");
var isCallable = __webpack_require__("b12f");
var isObject = __webpack_require__("e7cb");
var has = __webpack_require__("f07b");
var classof = __webpack_require__("6c24");
var tryToString = __webpack_require__("0e0a");
var createNonEnumerableProperty = __webpack_require__("f95d");
var redefine = __webpack_require__("ca33");
var defineProperty = __webpack_require__("814f").f;
var getPrototypeOf = __webpack_require__("dd5f");
var setPrototypeOf = __webpack_require__("76b8");
var wellKnownSymbol = __webpack_require__("8bcf");
var uid = __webpack_require__("ba61");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || has(TypedArrayConstructorsList, klass)
    || has(BigIntArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return has(TypedArrayConstructorsList, klass)
    || has(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf.call(TypedArray, C))) return C;
  throw TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) { /* empty */ }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "ab5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("be24");
} else {}


/***/ }),

/***/ "ac23":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("e7cb");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "acfc":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9d1c");
var fails = __webpack_require__("fc61");
var createElement = __webpack_require__("e0f8");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "af10":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var isCallable = __webpack_require__("b12f");
var inspectSource = __webpack_require__("de14");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "b12f":
/***/ (function(module, exports) {

// `isCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "b6c5":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("026b");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "b766":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "ba61":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "be24":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__("320c"),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ "c4ca":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c67b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("a21b");
var toLength = __webpack_require__("0d0b");
var toInteger = __webpack_require__("8088");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = toLength(O.length);
  var relativeIndex = toInteger(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca33":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var isCallable = __webpack_require__("b12f");
var has = __webpack_require__("f07b");
var createNonEnumerableProperty = __webpack_require__("f95d");
var setGlobal = __webpack_require__("cff6");
var inspectSource = __webpack_require__("de14");
var InternalStateModule = __webpack_require__("6c47");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("432f").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!has(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "cff6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "daaa":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("e7cb");
var isSymbol = __webpack_require__("f73e");
var getMethod = __webpack_require__("72b4");
var ordinaryToPrimitive = __webpack_require__("09ac");
var wellKnownSymbol = __webpack_require__("8bcf");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "dd53":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("eb16");
var uid = __webpack_require__("ba61");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "dd5f":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("f07b");
var isCallable = __webpack_require__("b12f");
var toObject = __webpack_require__("4930");
var sharedKey = __webpack_require__("dd53");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e411");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (has(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "de14":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("b12f");
var store = __webpack_require__("724c");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "e0f8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var isObject = __webpack_require__("e7cb");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "e411":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("fc61");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e529":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("7b89");
var fails = __webpack_require__("fc61");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "e6bc":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("e529");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "e7cb":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("b12f");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "eaf7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3da6");
var isCallable = __webpack_require__("b12f");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "eb16":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c4ca");
var store = __webpack_require__("724c");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "effe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("b12f");
var tryToString = __webpack_require__("0e0a");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "f07b":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("4930");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "f73e":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("b12f");
var getBuiltIn = __webpack_require__("eaf7");
var USE_SYMBOL_AS_UID = __webpack_require__("e6bc");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "f8b9":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("b12f");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "f95d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9d1c");
var definePropertyModule = __webpack_require__("814f");
var createPropertyDescriptor = __webpack_require__("9c52");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("ab5b");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7594eab5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/ifdef-loader/ifdef-loader.js?TARGET=app&version=3&ifdef-verbose=true&ifdef-triple-slash=true&ifdef-fill-with-blanks=true&PRODUCT=true&REQUEST=false&BADGE=false&CAROUSEL=false&FLOATING=false&LIB=true!./src/shogun/LibApp.vue?vue&type=template&id=5cd2744a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-platform-product-id":_vm.platformId}},[(_vm.request)?_c('review-request',{staticStyle:{"margin-left":"auto","margin-right":"auto","max-width":"1000px"},attrs:{"platform-product-id":_vm.platformId,"load-config":_vm.config}}):(_vm.badge)?_c('all-reviews-badge',{attrs:{"load-config":_vm.config,"load-badge-info":_vm.badgeData}}):(_vm.carousel)?_c('review-carousel',{attrs:{"load-config":_vm.config,"load-products":_vm.products}}):(_vm.floatingWidget)?_c('floating-widget',{attrs:{"load-config":_vm.config,"load-products":_vm.products}}):(_vm.products)?_c('shared-app-view',{attrs:{"load-config":_vm.config,"load-products":_vm.products}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/shogun/LibApp.vue?vue&type=template&id=5cd2744a&

// CONCATENATED MODULE: ./src/libs/Cache.js


class Cache_LocalCache {
  constructor() {
    this.requestPromises = {};
    this.dataPromises = {};
  }

  async getCachedResponse(url) {
    if (!this.dataPromises[url] && this.requestPromises[url]) {
      this.dataPromises[url] = this.requestPromises[url].then(resp => {
        if (!resp.ok) {
          throw new Error(`Invalid server resp: ${resp.statusText} (${resp.status})`);
        }

        return resp.json();
      }).then(d => mapObjKeysRecursive(d, snakeToCamel)).catch(e => {
        console.error(e);
      });
    }

    return this.dataPromises[url];
  }

  async get(url) {
    if (!(url in this.requestPromises)) {
      this.requestPromises[url] = fetch(url);
    }

    return this.getCachedResponse(url);
  }

}

/* harmony default export */ var Cache = (Cache_LocalCache);
// CONCATENATED MODULE: ./src/api/fetch.js


window._opinewRequestCache = window._opinewRequestCache || new Cache();
function getUrl(path) {
  const BASE_URL = window.OPW_API_ENDPOINT || "https://api.opinew.com" || "http://localhost:5000";
  return path.slice(0, 4) === "http" ? path : BASE_URL + path;
}

async function handleResponse(resp) {
  if (!resp.ok) {
    throw new Error(`Invalid server resp: ${resp.statusText} (${resp.status})`);
  }

  return mapObjKeysRecursive(await resp.json(), snakeToCamel);
}

async function get(path, params) {
  let query = "";

  if (params) {
    query = Object.entries(params).reduce((q, [key, val]) => q + `${key}=${val}&`, "?");
  }

  return await window._opinewRequestCache.get(getUrl(path + query));
}
async function post(path, data, headers) {
  const isFormData = data instanceof FormData;
  const ct = isFormData ? {} : {
    "Content-Type": "application/json"
  };
  const response = await fetch(getUrl(path), {
    headers: { ...ct,
      ...headers
    },
    method: "POST",
    body: isFormData ? data : JSON.stringify(mapObjKeysRecursive(data, camelToSnake))
  });
  return handleResponse(response);
}
// CONCATENATED MODULE: ./src/api/index.js



function parseQueryParams(params) {
  return Object.entries(mapObjKeys(params, camelToSnake)).map(([key, val]) => `${key}=${val}`).join("&");
}

function getRates(products = [], collection = []) {
  let query = "";

  if (products.length) {
    query += `product_stars_ids=${products}&`;
  }

  if (collection.length) {
    query += `collection_stars_ids=${collection}`;
  }

  return get(`/plugins/fetch-stars?${query}`);
}
function getExampleWidgets() {
  return get("/get-example-widgets");
}
function getProduct(params = {}) {
  return get("/plugins/product_api?" + parseQueryParams(params));
}
function getAllProductData(params = {}) {
  return get("/plugins/shop_api?" + parseQueryParams(params));
}
function getBadgeData(params = {}) {
  return get("/plugins/badge_api?" + parseQueryParams(params));
}
// CONCATENATED MODULE: ./src/utils/index.js

function snakeToCamel(str) {
  return str.replace(/_[a-z0-9]/g, l => l[1].toUpperCase());
}
function camelToSnake(str) {
  return str.replace(/([A-Z]+|[0-9]+)/g, "_$1").toLowerCase();
}
function mapObjKeys(obj, mapper) {
  return obj && Object.fromEntries(Object.entries(obj).map(([key, val]) => [mapper(key), val]));
}
const isObject = o => Object.prototype.toString.apply(o) === "[object Object]";
function mapObjKeysRecursive(obj, mapper) {
  return obj && Object.fromEntries(Object.entries(obj).map(([key, val]) => {
    const entry = [mapper(key)];

    if (Array.isArray(val) && val.every(isObject)) {
      entry.push(val.map(o => mapObjKeysRecursive(o, mapper)));
    } else if (isObject(val)) {
      entry.push(mapObjKeysRecursive(val, mapper));
    } else {
      entry.push(val);
    }

    return entry;
  }));
}
function getDevConfig() {
  return getExampleWidgets().then(res => mapObjKeysRecursive(JSON.parse(res.shopConfig), snakeToCamel));
}
// EXTERNAL MODULE: ../product-reviews/webapp/shop_widgets/umd/products.umd.js
var products_umd = __webpack_require__("913a");
var products_umd_default = /*#__PURE__*/__webpack_require__.n(products_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ifdef-loader/ifdef-loader.js?TARGET=app&version=3&ifdef-verbose=true&ifdef-triple-slash=true&ifdef-fill-with-blanks=true&PRODUCT=true&REQUEST=false&BADGE=false&CAROUSEL=false&FLOATING=false&LIB=true!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/shogun/LibApp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var LibAppvue_type_script_lang_js_ = ({
  name: "LibApp",
  components: {
    SharedAppView: products_umd_default.a.components.sharedAppView
  },
  props: {
    productId: {
      type: String,
      default: ""
    },
    PlatformProductId: {
      type: String,
      default: ""
    },
    request: Boolean,
    badge: Boolean,
    carousel: Boolean,
    floatingWidget: Boolean,
    all: Boolean
  },
  data: () => ({
    show: false,
    config: null,
    products: null,
    badgeData: null,
    ppId: ""
  }),
  computed: {
    urlParams() {
      return Object.fromEntries(decodeURI(window.location.search).slice(1).split("&").map(p => p.split("=")).filter(p => p[0]).map(([key, val]) => [snakeToCamel(key), val]));
    },

    platformId() {
      return this.PlatformProductId || this.productId || this.ppId;
    }

  },

  async mounted() {
    this.config = this.loadConfigJSON();

    if (getUrl("").includes("localhost:5000") ||  false && false) {
      await getExampleWidgets().then(res => {
        this.config = this.config || mapObjKeysRecursive(JSON.parse(res.shopConfig), snakeToCamel);
        this.badgeData = this.badgeData || mapObjKeysRecursive(JSON.parse(res.badgePlugin), snakeToCamel);
        this.ppId = mapObjKeysRecursive(JSON.parse(res.productPlugin), snakeToCamel).product.platformProductId;
        this.loadProducts();
      });

      if (this.badge) {
        this.loadBadgeJSON();
      }
    } else {
      this.loadProducts();
    }
  },

  methods: {
    loadConfigJSON() {
      const metafield = document.getElementById("opinew_config_container");

      if (metafield) {
        return metafield && mapObjKeysRecursive(JSON.parse(metafield.getAttribute("data-opwconfig")), snakeToCamel);
      }
    },

    async loadBadgeJSON() {
      const metafield = document.getElementById("badge_plugin_data");

      if (metafield) {
        const json = mapObjKeysRecursive(JSON.parse(metafield.textContent), snakeToCamel);
        this.badgeData = {
          widgetType: json.widgetType,
          averageStars: json.product.averageStars,
          totalReviews: json.product.reviewNumber
        };
      } else {
        const {
          product: {
            reviewNumber: totalReviews,
            averageStars
          },
          widgetType
        } = await getBadgeData({
          shopId: this.config.shop.id
        });
        this.badgeData = {
          widgetType,
          averageStars,
          totalReviews
        };
      }
    },

    loadProducts(page = 1) {
      if (!this.all) {
        getProduct({
          getBy: "platform_product_id",
          platformProductId: this.platformId,
          js: 1,
          page
        }).then(p => {
          this.products = p;
        });
      } else {
        getAllProductData({
          shopId: this.config.shop.id,
          sort_by: this.config.defaultSorting,
          page
        }).then(p => {
          this.products = p;
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./src/shogun/LibApp.vue?vue&type=script&lang=js&
 /* harmony default export */ var shogun_LibAppvue_type_script_lang_js_ = (LibAppvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/shogun/LibApp.vue





/* normalize component */

var component = normalizeComponent(
  shogun_LibAppvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LibApp = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
/*!
 * vue-i18n v8.26.7 
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'compactDisplay',
  'currency',
  'currencyDisplay',
  'currencySign',
  'localeMatcher',
  'notation',
  'numberingSystem',
  'signDisplay',
  'style',
  'unit',
  'unitDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits'
];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

var isArray = Array.isArray;

function vue_i18n_esm_isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isString (val) {
  return typeof val === 'string'
}

var vue_i18n_esm_toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return vue_i18n_esm_toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function isFunction (val) {
  return typeof val === 'function'
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (vue_i18n_esm_isObject(args[0]) || isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (vue_i18n_esm_isObject(args[1]) || isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.delete(item)) {
    return arr
  }
}

function arrayFrom (arr) {
  var ret = [];
  arr.forEach(function (a) { return ret.push(a); });
  return ret
}

function includes (arr, item) {
  return !!~arr.indexOf(item)
}

var vue_i18n_esm_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return vue_i18n_esm_hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (vue_i18n_esm_isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = vue_i18n_esm_isObject(a);
  var isObjectB = vue_i18n_esm_isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a);
      var isArrayB = isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Sanitizes html special characters from input strings. For mitigating risk of XSS attacks.
 * @param rawText The raw input from the user that should be escaped.
 */
function escapeHtml(rawText) {
  return rawText
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Escapes html tags and special symbols from all provided params which were returned from parseArgs().params.
 * This method performs an in-place operation on the params object.
 *
 * @param {any} params Parameters as provided from `parseArgs().params`.
 *                     May be either an array of strings or a string->any map.
 *
 * @returns The manipulated `params` object.
 */
function escapeParams(params) {
  if(params != null) {
    Object.keys(params).forEach(function (key) {
      if(typeof(params[key]) == 'string') {
        params[key] = escapeHtml(params[key]);
      }
    });
  }
  return params
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

/**
 * Mixin
 * 
 * If `bridge` mode, empty mixin is returned,
 * else regulary mixin implementation is returned.
 */
function defineMixin (bridge) {
  if ( bridge === void 0 ) bridge = false;

  function mounted () {
    if (this !== this.$root && this.$options.__INTLIFY_META__ && this.$el) {
      this.$el.setAttribute('data-intlify', this.$options.__INTLIFY_META__);
    }
  }

  return bridge
    ? { mounted: mounted } // delegate `vue-i18n-bridge` mixin implementation
    : { // regulary 
    beforeCreate: function beforeCreate () {
      var options = this.$options;
      options.i18n = options.i18n || ((options.__i18nBridge || options.__i18n) ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          if ((options.__i18nBridge || options.__i18n)) {
            try {
              var localeMessages = options.i18n && options.i18n.messages ? options.i18n.messages : {};
              var _i18n = options.__i18nBridge || options.__i18n;
              _i18n.forEach(function (resource) {
                localeMessages = merge(localeMessages, JSON.parse(resource));
              });
              Object.keys(localeMessages).forEach(function (locale) {
                options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
              });
            } catch (e) {
              if (false) {}
            }
          }
          this._i18n = options.i18n;
          this._i18nWatcher = this._i18n.watchI18nData();
        } else if (isPlainObject(options.i18n)) {
          var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n
            ? this.$root.$i18n
            : null;
          // component local i18n
          if (rootI18n) {
            options.i18n.root = this.$root;
            options.i18n.formatter = rootI18n.formatter;
            options.i18n.fallbackLocale = rootI18n.fallbackLocale;
            options.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
            options.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
            options.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
            options.i18n.pluralizationRules = rootI18n.pluralizationRules;
            options.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
          }

          // init locale messages via custom blocks
          if ((options.__i18nBridge || options.__i18n)) {
            try {
              var localeMessages$1 = options.i18n && options.i18n.messages ? options.i18n.messages : {};
              var _i18n$1 = options.__i18nBridge || options.__i18n;
              _i18n$1.forEach(function (resource) {
                localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
              });
              options.i18n.messages = localeMessages$1;
            } catch (e) {
              if (false) {}
            }
          }

          var ref = options.i18n;
          var sharedMessages = ref.sharedMessages;
          if (sharedMessages && isPlainObject(sharedMessages)) {
            options.i18n.messages = merge(options.i18n.messages, sharedMessages);
          }

          this._i18n = new VueI18n(options.i18n);
          this._i18nWatcher = this._i18n.watchI18nData();

          if (options.i18n.sync === undefined || !!options.i18n.sync) {
            this._localeWatcher = this.$i18n.watchLocale();
          }

          if (rootI18n) {
            rootI18n.onComponentInstanceCreated(this._i18n);
          }
        } else {
          if (false) {}
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        // root i18n
        this._i18n = this.$root.$i18n;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        // parent i18n
        this._i18n = options.parent.$i18n;
      }
    },

    beforeMount: function beforeMount () {
      var options = this.$options;
      options.i18n = options.i18n || ((options.__i18nBridge || options.__i18n) ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else if (isPlainObject(options.i18n)) {
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else {
          if (false) {}
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      }
    },

    mounted: mounted,

    beforeDestroy: function beforeDestroy () {
      if (!this._i18n) { return }

      var self = this;
      this.$nextTick(function () {
        if (self._subscribing) {
          self._i18n.unsubscribeDataChanging(self);
          delete self._subscribing;
        }

        if (self._i18nWatcher) {
          self._i18nWatcher();
          self._i18n.destroyVM();
          delete self._i18nWatcher;
        }

        if (self._localeWatcher) {
          self._localeWatcher();
          delete self._localeWatcher;
        }
      });
    }
  }
}

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (false) {}
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if (false) {}

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (false) {}

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (false) {}
      return null
    }

    var key = null;
    var options = null;

    if (isString(props.format)) {
      key = props.format;
    } else if (vue_i18n_esm_isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag
      ? h(tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass
      }, values)
      : values
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue, options) {
  if ( options === void 0 ) options = { bridge: false };

  /* istanbul ignore if */
  if (false) {}
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if (false) {}

  extend(Vue);
  Vue.mixin(defineMixin(options.bridge));
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : vue_i18n_esm_isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (false) {}
        }
        break
      case 'unknown':
        if (false) {}
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!vue_i18n_esm_isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined || value === null) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|./]+|\([\w\-_|./]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); },
  'capitalize': function (str) { return ("" + (str.charAt(0).toLocaleUpperCase()) + (str.substr(1))); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale === false
    ? false
    : options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || options.datetimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = new Set();
  this._componentInstanceCreatedListener = options.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;
  this._escapeParameterHtml = options.escapeParameterHtml || false;

  if ('__VUE_I18N_BRIDGE__' in options) {
    this.__VUE_I18N_BRIDGE__ = options.__VUE_I18N_BRIDGE__;
  }

  /**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index
  */
  this.getChoiceIndex = function (choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = (thisPrototype.getChoiceIndex);
      return (prototypeGetChoiceIndex).call(this$1, choice, choicesLength)
    }

    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function (_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice
          ? _choice > 1
            ? 1
            : 0
          : 1
      }

      return _choice ? Math.min(_choice, 2) : 0
    };

    if (this$1.locale in this$1.pluralizationRules) {
      return this$1.pluralizationRules[this$1.locale].apply(this$1, [choice, choicesLength])
    } else {
      return defaultImpl(choice, choicesLength)
    }
  };


  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true },postTranslation: { configurable: true },sync: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (isString(message)) {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data, __VUE18N__INSTANCE__: true });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.add(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
    var this$1 = this;
  return this._vm.$watch('$data', function () {
    var listeners = arrayFrom(this$1._dataListeners);
    var i = listeners.length;
    while(i--) {
      Vue.nextTick(function () {
        listeners[i] && listeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale (composer) {
  if (!composer) {
    /* istanbul ignore if */
    if (!this._sync || !this._root) { return null }
    var target = this._vm;
    return this._root.$i18n.vm.$watch('locale', function (val) {
      target.$set(target, 'locale', val);
      target.$forceUpdate();
    }, { immediate: true })
  } else {
    // deal with vue-i18n-bridge
    if (!this.__VUE_I18N_BRIDGE__) { return null }
    var self = this;
    var target$1 = this._vm;
    return this.vm.$watch('locale', function (val) {
      target$1.$set(target$1, 'locale', val);
      if (self.__VUE_I18N_BRIDGE__ && composer) {
        composer.locale.value = val;
      }
      target$1.$forceUpdate();
    }, { immediate: true })
  }
};

VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated (newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () { return this._postTranslation };
prototypeAccessors.postTranslation.set = function (handler) { this._postTranslation = handler; };

prototypeAccessors.sync.get = function () { return this._sync };
prototypeAccessors.sync.set = function (val) { this._sync = val; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet
    }
  } else {
    if (false) {}
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (!(isString(ret) || isFunction(ret))) {
        if (false) {}
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (isString(pathRet) || isFunction(pathRet)) {
      ret = pathRet;
    } else {
      if (false) {}
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (isString(ret) && (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0)) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
    
  // eslint-disable-next-line no-autofix/prefer-const
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (includes(visitedLinkStack, linkPlaceholder)) {
      if (false) {}
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if (false) {}
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._createMessageContext = function _createMessageContext (values, formatter, path, interpolateMode) {
    var this$1 = this;

  var _list = isArray(values) ? values : [];
  var _named = vue_i18n_esm_isObject(values) ? values : {};
  var list = function (index) { return _list[index]; };
  var named = function (key) { return _named[key]; };
  var messages = this._getMessages();
  var locale = this.locale;

  return {
    list: list,
    named: named,
    values: values,
    formatter: formatter,
    path: path,
    messages: messages,
    locale: locale,
    linked: function (linkedKey) { return this$1._interpolate(locale, messages[locale] || {}, linkedKey, null, interpolateMode, undefined, [linkedKey]); }
  }
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  if (isFunction(message)) {
    return message(
      this._createMessageContext(values, this._formatter || defaultFormatter, path, interpolateMode)
    )
  }

  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' && !isString(ret) ? ret.join('') : ret
};

VueI18n.prototype._appendItemToChain = function _appendItemToChain (chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== '!';
      item = item.replace(/!/g, '');
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow
};

VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain (chain, locale, blocks) {
  var follow;
  var tokens = locale.split('-');
  do {
    var item = tokens.join('-');
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && (follow === true))
  return follow
};

VueI18n.prototype._appendBlockToChain = function _appendBlockToChain (chain, block, blocks) {
  var follow = true;
  for (var i = 0; (i < block.length) && (isBoolean(follow)); i++) {
    var locale = block[i];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow
};

VueI18n.prototype._getLocaleChain = function _getLocaleChain (start, fallbackLocale) {
  if (start === '') { return [] }

  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }

  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];

    // first block defined by start
    var block = [start];

    // while any intervening block found
    while (isArray(block)) {
      block = this._appendBlockToChain(
        chain,
        block,
        fallbackLocale
      );
    }

    // last block defined by default
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (vue_i18n_esm_isObject(fallbackLocale)) {
      /* $FlowFixMe */
      if (fallbackLocale['default']) {
        defaults = fallbackLocale['default'];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }

    // convert defaults to array
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(
        chain,
        block,
        null
      );
    }
    this._localeChainCache[start] = chain;
  }
  return chain
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i = 0; i < chain.length; i++) {
    var step = chain[i];
    res =
      this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && "production" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to translate the keypath '" + key + "' with '" + step + "' locale."));
      }
      return res
    }
  }
  return null
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  if(this._escapeParameterHtml) {
    parsedArgs.params = escapeParams(parsedArgs.params);
  }

  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');
    if (this._postTranslation && ret !== null && ret !== undefined) {
      ret = this._postTranslation(ret, key);
    }
    return ret
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (!isString(locale)) {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message || !isString(message)) { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge(
    typeof this._vm.messages[locale] !== 'undefined' && Object.keys(this._vm.messages[locale]).length
      ? Object.assign({}, this._vm.messages[locale])
      : {},
    message
  ));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat (locale, format) {
  // eslint-disable-next-line no-autofix/prefer-const
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._dateTimeFormatters[id];
  }
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = dateTimeFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "production" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if (false) {}

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (vue_i18n_esm_isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat (locale, format) {
  // eslint-disable-next-line no-autofix/prefer-const
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = numberFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "production" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' number formats from '" + current + "' number formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (false) {}
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (vue_i18n_esm_isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (includes(numberFormatKeys, key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (false) {}
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.26.7';

/* harmony default export */ var vue_i18n_esm = (VueI18n);

// CONCATENATED MODULE: ./src/i18n/index.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_i18n_esm);
function getI18N(i18n, lang) {
  const metaField = document.querySelector("[data-opw-lang]");
  const msg = JSON.parse(metaField && metaField.dataset && metaField.dataset.opwLang || window.i18n || lang || i18n || "{}");
  return new vue_i18n_esm({
    locale: "en",
    // set locale
    messages: msg // set locale messages

  });
}
// EXTERNAL MODULE: ../product-reviews/webapp/shop_widgets/umd/opinew-widgets.css
var opinew_widgets = __webpack_require__("5ac7");

// CONCATENATED MODULE: ./src/shogun/libReact.js





const widget = "prod" || false;
class libReact_OpinewWidget extends react["Component"] {
  constructor(props) {
    super(props);
    this.myRef = Object(react["createRef"])();
  }

  inject() {
    const {
      productId
    } = this.props;
    new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
      i18n: getI18N(),
      render: h => h(LibApp, {
        props: {
          productId,
          platformProductId: productId,
          [widget]: true
        }
      })
    }).$mount(this.myRef.current);
  }

  componentDidMount() {
    this.inject();
  }

  render() {
    return Object(react["createElement"])("div", null, Object(react["createElement"])("div", {
      ref: this.myRef
    }));
  }

}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (libReact_OpinewWidget);



/***/ }),

/***/ "fc0c":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),

/***/ "fc61":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ })

/******/ });
});
//# sourceMappingURL=shogun-product.umd.js.map