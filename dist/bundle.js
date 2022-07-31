/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/heap-js/dist/heap-js.es5.js":
/*!**************************************************!*\
  !*** ./node_modules/heap-js/dist/heap-js.es5.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heap": () => (/* binding */ Heap),
/* harmony export */   "default": () => (/* binding */ Heap),
/* harmony export */   "toInt": () => (/* binding */ toInt)
/* harmony export */ });
var __generator = ( false) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = ( false) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = ( false) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var toInt = function (n) { return ~~n; };
/**
 * Heap
 * @type {Class}
 */
var Heap = /** @class */ (function () {
    /**
     * Heap instance constructor.
     * @param  {Function} compare Optional comparison function, defaults to Heap.minComparator<number>
     */
    function Heap(compare) {
        if (compare === void 0) { compare = Heap.minComparator; }
        var _this = this;
        this.compare = compare;
        this.heapArray = [];
        this._limit = 0;
        /**
         * Alias of add
         */
        this.offer = this.add;
        /**
         * Alias of peek
         */
        this.element = this.peek;
        /**
         * Alias of pop
         */
        this.poll = this.pop;
        /**
         * Returns the inverse to the comparison function.
         * @return {Function}
         */
        this._invertedCompare = function (a, b) {
            return -1 * _this.compare(a, b);
        };
    }
    /*
              Static methods
     */
    /**
     * Gets children indices for given index.
     * @param  {Number} idx     Parent index
     * @return {Array(Number)}  Array of children indices
     */
    Heap.getChildrenIndexOf = function (idx) {
        return [idx * 2 + 1, idx * 2 + 2];
    };
    /**
     * Gets parent index for given index.
     * @param  {Number} idx  Children index
     * @return {Number | undefined}      Parent index, -1 if idx is 0
     */
    Heap.getParentIndexOf = function (idx) {
        if (idx <= 0) {
            return -1;
        }
        var whichChildren = idx % 2 ? 1 : 2;
        return Math.floor((idx - whichChildren) / 2);
    };
    /**
     * Gets sibling index for given index.
     * @param  {Number} idx  Children index
     * @return {Number | undefined}      Sibling index, -1 if idx is 0
     */
    Heap.getSiblingIndexOf = function (idx) {
        if (idx <= 0) {
            return -1;
        }
        var whichChildren = idx % 2 ? 1 : -1;
        return idx + whichChildren;
    };
    /**
     * Min heap comparison function, default.
     * @param  {any} a     First element
     * @param  {any} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */
    Heap.minComparator = function (a, b) {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        else {
            return 0;
        }
    };
    /**
     * Max heap comparison function.
     * @param  {any} a     First element
     * @param  {any} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */
    Heap.maxComparator = function (a, b) {
        if (b > a) {
            return 1;
        }
        else if (b < a) {
            return -1;
        }
        else {
            return 0;
        }
    };
    /**
     * Min number heap comparison function, default.
     * @param  {Number} a     First element
     * @param  {Number} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */
    Heap.minComparatorNumber = function (a, b) {
        return a - b;
    };
    /**
     * Max number heap comparison function.
     * @param  {Number} a     First element
     * @param  {Number} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */
    Heap.maxComparatorNumber = function (a, b) {
        return b - a;
    };
    /**
     * Default equality function.
     * @param  {any} a    First element
     * @param  {any} b    Second element
     * @return {Boolean}  True if equal, false otherwise
     */
    Heap.defaultIsEqual = function (a, b) {
        return a === b;
    };
    /**
     * Prints a heap.
     * @param  {Heap} heap Heap to be printed
     * @returns {String}
     */
    Heap.print = function (heap) {
        function deep(i) {
            var pi = Heap.getParentIndexOf(i);
            return Math.floor(Math.log2(pi + 1));
        }
        function repeat(str, times) {
            var out = '';
            for (; times > 0; --times) {
                out += str;
            }
            return out;
        }
        var node = 0;
        var lines = [];
        var maxLines = deep(heap.length - 1) + 2;
        var maxLength = 0;
        while (node < heap.length) {
            var i = deep(node) + 1;
            if (node === 0) {
                i = 0;
            }
            // Text representation
            var nodeText = String(heap.get(node));
            if (nodeText.length > maxLength) {
                maxLength = nodeText.length;
            }
            // Add to line
            lines[i] = lines[i] || [];
            lines[i].push(nodeText);
            node += 1;
        }
        return lines
            .map(function (line, i) {
            var times = Math.pow(2, maxLines - i) - 1;
            return (repeat(' ', Math.floor(times / 2) * maxLength) +
                line
                    .map(function (el) {
                    // centered
                    var half = (maxLength - el.length) / 2;
                    return repeat(' ', Math.ceil(half)) + el + repeat(' ', Math.floor(half));
                })
                    .join(repeat(' ', times * maxLength)));
        })
            .join('\n');
    };
    /*
              Python style
     */
    /**
     * Converts an array into an array-heap, in place
     * @param  {Array}    arr      Array to be modified
     * @param  {Function} compare  Optional compare function
     * @return {Heap}              For convenience, it returns a Heap instance
     */
    Heap.heapify = function (arr, compare) {
        var heap = new Heap(compare);
        heap.heapArray = arr;
        heap.init();
        return heap;
    };
    /**
     * Extract the peek of an array-heap
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {Function} compare  Optional compare function
     * @return {any}               Returns the extracted peek
     */
    Heap.heappop = function (heapArr, compare) {
        var heap = new Heap(compare);
        heap.heapArray = heapArr;
        return heap.pop();
    };
    /**
     * Pushes a item into an array-heap
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {any}      item     Item to push
     * @param  {Function} compare  Optional compare function
     */
    Heap.heappush = function (heapArr, item, compare) {
        var heap = new Heap(compare);
        heap.heapArray = heapArr;
        heap.push(item);
    };
    /**
     * Push followed by pop, faster
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {any}      item     Item to push
     * @param  {Function} compare  Optional compare function
     * @return {any}               Returns the extracted peek
     */
    Heap.heappushpop = function (heapArr, item, compare) {
        var heap = new Heap(compare);
        heap.heapArray = heapArr;
        return heap.pushpop(item);
    };
    /**
     * Replace peek with item
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {any}      item     Item as replacement
     * @param  {Function} compare  Optional compare function
     * @return {any}               Returns the extracted peek
     */
    Heap.heapreplace = function (heapArr, item, compare) {
        var heap = new Heap(compare);
        heap.heapArray = heapArr;
        return heap.replace(item);
    };
    /**
     * Return the `n` most valuable elements of a heap-like Array
     * @param  {Array}    heapArr  Array, should be an array-heap
     * @param  {number}   n        Max number of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */
    Heap.heaptop = function (heapArr, n, compare) {
        if (n === void 0) { n = 1; }
        var heap = new Heap(compare);
        heap.heapArray = heapArr;
        return heap.top(n);
    };
    /**
     * Return the `n` least valuable elements of a heap-like Array
     * @param  {Array}    heapArr  Array, should be an array-heap
     * @param  {number}   n        Max number of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */
    Heap.heapbottom = function (heapArr, n, compare) {
        if (n === void 0) { n = 1; }
        var heap = new Heap(compare);
        heap.heapArray = heapArr;
        return heap.bottom(n);
    };
    /**
     * Return the `n` most valuable elements of an iterable
     * @param  {number}   n        Max number of elements
     * @param  {Iterable} Iterable Iterable list of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */
    Heap.nlargest = function (n, iterable, compare) {
        var heap = new Heap(compare);
        heap.heapArray = __spreadArray([], __read(iterable), false);
        heap.init();
        return heap.top(n);
    };
    /**
     * Return the `n` least valuable elements of an iterable
     * @param  {number}   n        Max number of elements
     * @param  {Iterable} Iterable Iterable list of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */
    Heap.nsmallest = function (n, iterable, compare) {
        var heap = new Heap(compare);
        heap.heapArray = __spreadArray([], __read(iterable), false);
        heap.init();
        return heap.bottom(n);
    };
    /*
              Instance methods
     */
    /**
     * Adds an element to the heap. Aliases: `offer`.
     * Same as: push(element)
     * @param {any} element Element to be added
     * @return {Boolean} true
     */
    Heap.prototype.add = function (element) {
        this._sortNodeUp(this.heapArray.push(element) - 1);
        this._applyLimit();
        return true;
    };
    /**
     * Adds an array of elements to the heap.
     * Similar as: push(element, element, ...).
     * @param {Array} elements Elements to be added
     * @return {Boolean} true
     */
    Heap.prototype.addAll = function (elements) {
        var _a;
        var i = this.length;
        (_a = this.heapArray).push.apply(_a, __spreadArray([], __read(elements), false));
        for (var l = this.length; i < l; ++i) {
            this._sortNodeUp(i);
        }
        this._applyLimit();
        return true;
    };
    /**
     * Return the bottom (lowest value) N elements of the heap.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */
    Heap.prototype.bottom = function (n) {
        if (n === void 0) { n = 1; }
        if (this.heapArray.length === 0 || n <= 0) {
            // Nothing to do
            return [];
        }
        else if (this.heapArray.length === 1) {
            // Just the peek
            return [this.heapArray[0]];
        }
        else if (n >= this.heapArray.length) {
            // The whole heap
            return __spreadArray([], __read(this.heapArray), false);
        }
        else {
            // Some elements
            var result = this._bottomN_push(~~n);
            return result;
        }
    };
    /**
     * Check if the heap is sorted, useful for testing purposes.
     * @return {Undefined | Element}  Returns an element if something wrong is found, otherwise it's undefined
     */
    Heap.prototype.check = function () {
        var _this = this;
        return this.heapArray.find(function (el, j) { return !!_this.getChildrenOf(j).find(function (ch) { return _this.compare(el, ch) > 0; }); });
    };
    /**
     * Remove all of the elements from this heap.
     */
    Heap.prototype.clear = function () {
        this.heapArray = [];
    };
    /**
     * Clone this heap
     * @return {Heap}
     */
    Heap.prototype.clone = function () {
        var cloned = new Heap(this.comparator());
        cloned.heapArray = this.toArray();
        cloned._limit = this._limit;
        return cloned;
    };
    /**
     * Returns the comparison function.
     * @return {Function}
     */
    Heap.prototype.comparator = function () {
        return this.compare;
    };
    /**
     * Returns true if this queue contains the specified element.
     * @param  {any}      o   Element to be found
     * @param  {Function} fn  Optional comparison function, receives (element, needle)
     * @return {Boolean}
     */
    Heap.prototype.contains = function (o, fn) {
        if (fn === void 0) { fn = Heap.defaultIsEqual; }
        return this.heapArray.findIndex(function (el) { return fn(el, o); }) >= 0;
    };
    /**
     * Initialise a heap, sorting nodes
     * @param  {Array} array Optional initial state array
     */
    Heap.prototype.init = function (array) {
        if (array) {
            this.heapArray = __spreadArray([], __read(array), false);
        }
        for (var i = Math.floor(this.heapArray.length); i >= 0; --i) {
            this._sortNodeDown(i);
        }
        this._applyLimit();
    };
    /**
     * Test if the heap has no elements.
     * @return {Boolean} True if no elements on the heap
     */
    Heap.prototype.isEmpty = function () {
        return this.length === 0;
    };
    /**
     * Get the leafs of the tree (no children nodes)
     */
    Heap.prototype.leafs = function () {
        if (this.heapArray.length === 0) {
            return [];
        }
        var pi = Heap.getParentIndexOf(this.heapArray.length - 1);
        return this.heapArray.slice(pi + 1);
    };
    Object.defineProperty(Heap.prototype, "length", {
        /**
         * Length of the heap.
         * @return {Number}
         */
        get: function () {
            return this.heapArray.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heap.prototype, "limit", {
        /**
         * Get length limit of the heap.
         * @return {Number}
         */
        get: function () {
            return this._limit;
        },
        /**
         * Set length limit of the heap.
         * @return {Number}
         */
        set: function (_l) {
            this._limit = ~~_l;
            this._applyLimit();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Top node. Aliases: `element`.
     * Same as: `top(1)[0]`
     * @return {any} Top node
     */
    Heap.prototype.peek = function () {
        return this.heapArray[0];
    };
    /**
     * Extract the top node (root). Aliases: `poll`.
     * @return {any} Extracted top node, undefined if empty
     */
    Heap.prototype.pop = function () {
        var last = this.heapArray.pop();
        if (this.length > 0 && last !== undefined) {
            return this.replace(last);
        }
        return last;
    };
    /**
     * Pushes element(s) to the heap.
     * @param  {...any} elements Elements to insert
     * @return {Boolean} True if elements are present
     */
    Heap.prototype.push = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        if (elements.length < 1) {
            return false;
        }
        else if (elements.length === 1) {
            return this.add(elements[0]);
        }
        else {
            return this.addAll(elements);
        }
    };
    /**
     * Same as push & pop in sequence, but faster
     * @param  {any} element Element to insert
     * @return {any}  Extracted top node
     */
    Heap.prototype.pushpop = function (element) {
        var _a;
        if (this.compare(this.heapArray[0], element) < 0) {
            _a = __read([this.heapArray[0], element], 2), element = _a[0], this.heapArray[0] = _a[1];
            this._sortNodeDown(0);
        }
        return element;
    };
    /**
     * Remove an element from the heap.
     * @param  {any}   o      Element to be found
     * @param  {Function} fn  Optional function to compare
     * @return {Boolean}      True if the heap was modified
     */
    Heap.prototype.remove = function (o, fn) {
        if (fn === void 0) { fn = Heap.defaultIsEqual; }
        if (this.length > 0) {
            if (o === undefined) {
                this.pop();
                return true;
            }
            else {
                var idx = this.heapArray.findIndex(function (el) { return fn(el, o); });
                if (idx >= 0) {
                    if (idx === 0) {
                        this.pop();
                    }
                    else if (idx === this.length - 1) {
                        this.heapArray.pop();
                    }
                    else {
                        this.heapArray.splice(idx, 1, this.heapArray.pop());
                        this._sortNodeUp(idx);
                        this._sortNodeDown(idx);
                    }
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Pop the current peek value, and add the new item.
     * @param  {any} element  Element to replace peek
     * @return {any}         Old peek
     */
    Heap.prototype.replace = function (element) {
        var peek = this.heapArray[0];
        this.heapArray[0] = element;
        this._sortNodeDown(0);
        return peek;
    };
    /**
     * Size of the heap
     * @return {Number}
     */
    Heap.prototype.size = function () {
        return this.length;
    };
    /**
     * Return the top (highest value) N elements of the heap.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}    Array of length <= N.
     */
    Heap.prototype.top = function (n) {
        if (n === void 0) { n = 1; }
        if (this.heapArray.length === 0 || n <= 0) {
            // Nothing to do
            return [];
        }
        else if (this.heapArray.length === 1 || n === 1) {
            // Just the peek
            return [this.heapArray[0]];
        }
        else if (n >= this.heapArray.length) {
            // The whole peek
            return __spreadArray([], __read(this.heapArray), false);
        }
        else {
            // Some elements
            var result = this._topN_push(~~n);
            return result;
        }
    };
    /**
     * Clone the heap's internal array
     * @return {Array}
     */
    Heap.prototype.toArray = function () {
        return __spreadArray([], __read(this.heapArray), false);
    };
    /**
     * String output, call to Array.prototype.toString()
     * @return {String}
     */
    Heap.prototype.toString = function () {
        return this.heapArray.toString();
    };
    /**
     * Get the element at the given index.
     * @param  {Number} i Index to get
     * @return {any}       Element at that index
     */
    Heap.prototype.get = function (i) {
        return this.heapArray[i];
    };
    /**
     * Get the elements of these node's children
     * @param  {Number} idx Node index
     * @return {Array(any)}  Children elements
     */
    Heap.prototype.getChildrenOf = function (idx) {
        var _this = this;
        return Heap.getChildrenIndexOf(idx)
            .map(function (i) { return _this.heapArray[i]; })
            .filter(function (e) { return e !== undefined; });
    };
    /**
     * Get the element of this node's parent
     * @param  {Number} idx Node index
     * @return {any}     Parent element
     */
    Heap.prototype.getParentOf = function (idx) {
        var pi = Heap.getParentIndexOf(idx);
        return this.heapArray[pi];
    };
    /**
     * Iterator interface
     */
    Heap.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.length) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.pop()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    };
    /**
     * Returns an iterator. To comply with Java interface.
     */
    Heap.prototype.iterator = function () {
        return this.toArray();
    };
    /**
     * Limit heap size if needed
     */
    Heap.prototype._applyLimit = function () {
        if (this._limit && this._limit < this.heapArray.length) {
            var rm = this.heapArray.length - this._limit;
            // It's much faster than splice
            while (rm) {
                this.heapArray.pop();
                --rm;
            }
        }
    };
    /**
     * Return the bottom (lowest value) N elements of the heap, without corner cases, unsorted
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */
    Heap.prototype._bottomN_push = function (n) {
        // Use an inverted heap
        var bottomHeap = new Heap(this.compare);
        bottomHeap.limit = n;
        bottomHeap.heapArray = this.heapArray.slice(-n);
        bottomHeap.init();
        var startAt = this.heapArray.length - 1 - n;
        var parentStartAt = Heap.getParentIndexOf(startAt);
        var indices = [];
        for (var i = startAt; i > parentStartAt; --i) {
            indices.push(i);
        }
        var arr = this.heapArray;
        while (indices.length) {
            var i = indices.shift();
            if (this.compare(arr[i], bottomHeap.peek()) > 0) {
                bottomHeap.replace(arr[i]);
                if (i % 2) {
                    indices.push(Heap.getParentIndexOf(i));
                }
            }
        }
        return bottomHeap.toArray();
    };
    /**
     * Move a node to a new index, switching places
     * @param  {Number} j First node index
     * @param  {Number} k Another node index
     */
    Heap.prototype._moveNode = function (j, k) {
        var _a;
        _a = __read([this.heapArray[k], this.heapArray[j]], 2), this.heapArray[j] = _a[0], this.heapArray[k] = _a[1];
    };
    /**
     * Move a node down the tree (to the leaves) to find a place where the heap is sorted.
     * @param  {Number} i Index of the node
     */
    Heap.prototype._sortNodeDown = function (i) {
        var _this = this;
        var moveIt = i < this.heapArray.length - 1;
        var self = this.heapArray[i];
        var getPotentialParent = function (best, j) {
            if (_this.heapArray.length > j && _this.compare(_this.heapArray[j], _this.heapArray[best]) < 0) {
                best = j;
            }
            return best;
        };
        while (moveIt) {
            var childrenIdx = Heap.getChildrenIndexOf(i);
            var bestChildIndex = childrenIdx.reduce(getPotentialParent, childrenIdx[0]);
            var bestChild = this.heapArray[bestChildIndex];
            if (typeof bestChild !== 'undefined' && this.compare(self, bestChild) > 0) {
                this._moveNode(i, bestChildIndex);
                i = bestChildIndex;
            }
            else {
                moveIt = false;
            }
        }
    };
    /**
     * Move a node up the tree (to the root) to find a place where the heap is sorted.
     * @param  {Number} i Index of the node
     */
    Heap.prototype._sortNodeUp = function (i) {
        var moveIt = i > 0;
        while (moveIt) {
            var pi = Heap.getParentIndexOf(i);
            if (pi >= 0 && this.compare(this.heapArray[pi], this.heapArray[i]) > 0) {
                this._moveNode(i, pi);
                i = pi;
            }
            else {
                moveIt = false;
            }
        }
    };
    /**
     * Return the top (highest value) N elements of the heap, without corner cases, unsorted
     * Implementation: push.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */
    Heap.prototype._topN_push = function (n) {
        // Use an inverted heap
        var topHeap = new Heap(this._invertedCompare);
        topHeap.limit = n;
        var indices = [0];
        var arr = this.heapArray;
        while (indices.length) {
            var i = indices.shift();
            if (i < arr.length) {
                if (topHeap.length < n) {
                    topHeap.push(arr[i]);
                    indices.push.apply(indices, __spreadArray([], __read(Heap.getChildrenIndexOf(i)), false));
                }
                else if (this.compare(arr[i], topHeap.peek()) < 0) {
                    topHeap.replace(arr[i]);
                    indices.push.apply(indices, __spreadArray([], __read(Heap.getChildrenIndexOf(i)), false));
                }
            }
        }
        return topHeap.toArray();
    };
    /**
     * Return the top (highest value) N elements of the heap, without corner cases, unsorted
     * Implementation: init + push.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */
    Heap.prototype._topN_fill = function (n) {
        // Use an inverted heap
        var heapArray = this.heapArray;
        var topHeap = new Heap(this._invertedCompare);
        topHeap.limit = n;
        topHeap.heapArray = heapArray.slice(0, n);
        topHeap.init();
        var branch = Heap.getParentIndexOf(n - 1) + 1;
        var indices = [];
        for (var i = branch; i < n; ++i) {
            indices.push.apply(indices, __spreadArray([], __read(Heap.getChildrenIndexOf(i).filter(function (l) { return l < heapArray.length; })), false));
        }
        if ((n - 1) % 2) {
            indices.push(n);
        }
        while (indices.length) {
            var i = indices.shift();
            if (i < heapArray.length) {
                if (this.compare(heapArray[i], topHeap.peek()) < 0) {
                    topHeap.replace(heapArray[i]);
                    indices.push.apply(indices, __spreadArray([], __read(Heap.getChildrenIndexOf(i)), false));
                }
            }
        }
        return topHeap.toArray();
    };
    /**
     * Return the top (highest value) N elements of the heap, without corner cases, unsorted
     * Implementation: heap.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */
    Heap.prototype._topN_heap = function (n) {
        var topHeap = this.clone();
        var result = [];
        for (var i = 0; i < n; ++i) {
            result.push(topHeap.pop());
        }
        return result;
    };
    /**
     * Return index of the top element
     * @param list
     */
    Heap.prototype._topIdxOf = function (list) {
        if (!list.length) {
            return -1;
        }
        var idx = 0;
        var top = list[idx];
        for (var i = 1; i < list.length; ++i) {
            var comp = this.compare(list[i], top);
            if (comp < 0) {
                idx = i;
                top = list[i];
            }
        }
        return idx;
    };
    /**
     * Return the top element
     * @param list
     */
    Heap.prototype._topOf = function () {
        var list = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            list[_i] = arguments[_i];
        }
        var heap = new Heap(this.compare);
        heap.init(list);
        return heap.peek();
    };
    return Heap;
}());




/***/ }),

/***/ "./src/combatsimulator/ability.js":
/*!****************************************!*\
  !*** ./src/combatsimulator/ability.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buff */ "./src/combatsimulator/buff.js");
/* harmony import */ var _data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/abilityDetailMap.json */ "./src/combatsimulator/data/abilityDetailMap.json");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger */ "./src/combatsimulator/trigger.js");




class Ability {
    constructor(hrid, level, triggers = null) {
        this.hrid = hrid;
        this.level = level;

        let gameAbility = _data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_1__[hrid];
        console.assert(gameAbility, "No ability found for hrid:" + this.hrid);

        this.manaCost = gameAbility.manaCost;
        this.cooldownDuration = gameAbility.cooldownDuration;

        this.abilityEffects = [];

        for (const effect of gameAbility.abilityEffects) {
            let abilityEffect = {
                targetType: effect.targetType,
                effectType: effect.effectType,
                combatStyleHrid: effect.combatStyleHrid.slice(effect.combatStyleHrid.lastIndexOf("/") + 1),
                damageFlat: effect.baseDamageFlat + (this.level - 1) * effect.baseDamageFlatLevelBonus,
                damageRatio: effect.baseDamageRatio + (this.level - 1) * effect.baseDamageRatioLevelBonus,
                bleedRatio: effect.bleedRatio,
                duration: effect.duration,
                buff: effect.buff.duration > 0 ? new _buff__WEBPACK_IMPORTED_MODULE_0__["default"](effect.buff, this.level) : null,
            };
            this.abilityEffects.push(abilityEffect);
        }

        if (triggers) {
            this.triggers = triggers;
        } else {
            this.triggers = [];
            for (const defaultTrigger of gameAbility.defaultCombatTriggers) {
                let trigger = new _trigger__WEBPACK_IMPORTED_MODULE_2__["default"](
                    defaultTrigger.dependencyHrid,
                    defaultTrigger.conditionHrid,
                    defaultTrigger.comparatorHrid,
                    defaultTrigger.value
                );
                this.triggers.push(trigger);
            }
        }

        this.lastUsed = Number.MIN_SAFE_INTEGER;
    }

    static createFromDTO(dto) {
        let triggers = dto.triggers.map((trigger) => _trigger__WEBPACK_IMPORTED_MODULE_2__["default"].createFromDTO(trigger));
        let ability = new Ability(dto.hrid, dto.level, triggers);

        return ability;
    }

    shouldTrigger(currentTime, source, target, friendlies, enemies) {
        if (this.lastUsed + this.cooldownDuration > currentTime) {
            return false;
        }

        if (this.triggers.length == 0) {
            return true;
        }

        let shouldTrigger = true;
        for (const trigger of this.triggers) {
            if (!trigger.isActive(source, target, friendlies, enemies)) {
                shouldTrigger = false;
            }
        }

        return shouldTrigger;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ability);


/***/ }),

/***/ "./src/combatsimulator/buff.js":
/*!*************************************!*\
  !*** ./src/combatsimulator/buff.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Buff {
    startTime;

    constructor(buff, level = 1) {
        this.sourceHrid = buff.sourceHrid;
        this.typeHrid = buff.typeHrid;
        this.ratioBoost = buff.ratioBoost + (level - 1) * buff.ratioBoostLevelBonus;
        this.flatBoost = buff.flatBoost + (level - 1) * buff.flatBoostLevelBonus;
        this.duration = buff.duration;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buff);


/***/ }),

/***/ "./src/combatsimulator/combatSimulator.js":
/*!************************************************!*\
  !*** ./src/combatsimulator/combatSimulator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatUtilities */ "./src/combatsimulator/combatUtilities.js");
/* harmony import */ var _events_autoAttackEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/autoAttackEvent */ "./src/combatsimulator/events/autoAttackEvent.js");
/* harmony import */ var _events_bleedTickEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/bleedTickEvent */ "./src/combatsimulator/events/bleedTickEvent.js");
/* harmony import */ var _events_checkBuffExpirationEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/checkBuffExpirationEvent */ "./src/combatsimulator/events/checkBuffExpirationEvent.js");
/* harmony import */ var _events_combatStartEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/combatStartEvent */ "./src/combatsimulator/events/combatStartEvent.js");
/* harmony import */ var _events_consumableTickEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/consumableTickEvent */ "./src/combatsimulator/events/consumableTickEvent.js");
/* harmony import */ var _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/cooldownReadyEvent */ "./src/combatsimulator/events/cooldownReadyEvent.js");
/* harmony import */ var _events_enemyRespawnEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/enemyRespawnEvent */ "./src/combatsimulator/events/enemyRespawnEvent.js");
/* harmony import */ var _events_eventQueue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/eventQueue */ "./src/combatsimulator/events/eventQueue.js");
/* harmony import */ var _events_playerRespawnEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/playerRespawnEvent */ "./src/combatsimulator/events/playerRespawnEvent.js");
/* harmony import */ var _events_regenTickEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/regenTickEvent */ "./src/combatsimulator/events/regenTickEvent.js");
/* harmony import */ var _simResult__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./simResult */ "./src/combatsimulator/simResult.js");













class CombatSimulator {
    constructor(player, zone) {
        this.players = [player];
        this.zone = zone;

        this.eventQueue = new _events_eventQueue__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.simResult = new _simResult__WEBPACK_IMPORTED_MODULE_11__["default"]();
    }

    simulate(simulationTimeLimit) {
        this.reset();

        let combatStartEvent = new _events_combatStartEvent__WEBPACK_IMPORTED_MODULE_4__["default"](0);
        this.eventQueue.addEvent(combatStartEvent);

        while (this.simulationTime < simulationTimeLimit) {
            let nextEvent = this.eventQueue.getNextEvent();
            this.processEvent(nextEvent);
        }

        this.simResult.simulatedTime = this.simulationTime;

        return this.simResult;
    }

    reset() {
        this.simulationTime = 0;
        this.eventQueue.clear();
        this.simResult = new _simResult__WEBPACK_IMPORTED_MODULE_11__["default"]();
    }

    processEvent(event) {
        this.simulationTime = event.time;

        // console.log(this.simulationTime / 1e9, event.type, event);

        switch (event.type) {
            case _events_combatStartEvent__WEBPACK_IMPORTED_MODULE_4__["default"].type:
                this.processCombatStartEvent(event);
                break;
            case _events_playerRespawnEvent__WEBPACK_IMPORTED_MODULE_9__["default"].type:
                this.processPlayerRespawnEvent(event);
                break;
            case _events_enemyRespawnEvent__WEBPACK_IMPORTED_MODULE_7__["default"].type:
                this.processEnemyRespawnEvent(event);
                break;
            case _events_autoAttackEvent__WEBPACK_IMPORTED_MODULE_1__["default"].type:
                this.processAutoAttackEvent(event);
                break;
            case _events_consumableTickEvent__WEBPACK_IMPORTED_MODULE_5__["default"].type:
                this.processConsumableTickEvent(event);
                break;
            case _events_bleedTickEvent__WEBPACK_IMPORTED_MODULE_2__["default"].type:
                this.processBleedTickEvent(event);
                break;
            case _events_checkBuffExpirationEvent__WEBPACK_IMPORTED_MODULE_3__["default"].type:
                this.processCheckBuffExpirationEvent(event);
                break;
            case _events_regenTickEvent__WEBPACK_IMPORTED_MODULE_10__["default"].type:
                this.processRegenTickEvent(event);
                break;
            case _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__["default"].type:
                // Only used to check triggers
                break;
        }

        this.checkTriggers();
    }

    processCombatStartEvent(event) {
        this.players[0].reset(this.simulationTime);

        this.players[0].abilities
            .filter((ability) => ability != null)
            .forEach((ability) => {
                let cooldownReadyEvent = new _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__["default"](ability.lastUsed + ability.cooldownDuration);
                this.eventQueue.addEvent(cooldownReadyEvent);
            });

        let regenTickEvent = new _events_regenTickEvent__WEBPACK_IMPORTED_MODULE_10__["default"](this.simulationTime + 10 * 1e9, this.players[0]);
        this.eventQueue.addEvent(regenTickEvent);

        this.startNewEncounter();
    }

    processPlayerRespawnEvent(event) {
        this.players[0].combatStats.currentHitpoints = this.players[0].combatStats.maxHitpoints / 2;
        this.players[0].clearBuffs();

        this.players[0].resetCooldowns(this.simulationTime);
        this.players[0].abilities
            .filter((ability) => ability != null)
            .forEach((ability) => {
                let cooldownReadyEvent = new _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__["default"](ability.lastUsed + ability.cooldownDuration);
                this.eventQueue.addEvent(cooldownReadyEvent);
            });

        let regenTickEvent = new _events_regenTickEvent__WEBPACK_IMPORTED_MODULE_10__["default"](this.simulationTime + 10 * 1e9, this.players[0]);
        this.eventQueue.addEvent(regenTickEvent);

        this.startNewEncounter();
    }

    processEnemyRespawnEvent(event) {
        this.startNewEncounter();
    }

    startNewEncounter() {
        this.enemies = this.zone.getRandomEncounter();

        this.enemies.forEach((enemy) => {
            enemy.reset(this.simulationTime);
            enemy.abilities
                .filter((ability) => ability != null)
                .forEach((ability) => {
                    let cooldownReadyEvent = new _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__["default"](ability.lastUsed + ability.cooldownDuration);
                    this.eventQueue.addEvent(cooldownReadyEvent);
                });
            // console.log(enemy.hrid, "spawned");
        });

        this.addNextAutoAttackEvent(this.players[0]);

        this.enemies.forEach((enemy) => this.addNextAutoAttackEvent(enemy));
    }

    processAutoAttackEvent(event) {
        // console.log("source:", event.source.hrid, "target:", event.target.hrid);

        let target;
        if (event.source.isPlayer) {
            target = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(this.enemies);
        } else {
            target = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(this.players);
        }

        let { damageDone, damagePrevented, maxDamage, didHit } = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].processAttack(event.source, target);
        // console.log("Hit for", damageDone);

        if (event.source.combatStats.lifeSteal > 0) {
            let lifeStealHeal = Math.floor(damageDone * event.source.combatStats.lifeSteal);
            let hitpointsAdded = event.source.addHitpoints(lifeStealHeal);
            this.simResult.addHitpointsGained(event.source, "lifesteal", hitpointsAdded);
            // console.log("Added hitpoints from life steal:", hitpointsAdded);
        }

        this.simResult.addAttack(event.source, target, "autoAttack", didHit ? damageDone : "miss");

        let targetStaminaExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateStaminaExperience(damagePrevented, damageDone);
        let targetDefenseExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateDefenseExperience(damagePrevented);
        let sourceAttackExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateAttackExperience(damageDone);
        let sourcePowerExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculatePowerExperience(maxDamage);

        this.simResult.addExperienceGain(target, "stamina", targetStaminaExperience);
        this.simResult.addExperienceGain(target, "defense", targetDefenseExperience);
        this.simResult.addExperienceGain(event.source, "attack", sourceAttackExperience);
        this.simResult.addExperienceGain(event.source, "power", sourcePowerExperience);

        if (target.combatStats.currentHitpoints == 0) {
            this.eventQueue.clearEventsForUnit(target);
            this.simResult.addDeath(target);
            // console.log(event.target.hrid, "died");
        }

        if (!this.checkEncounterEnd()) {
            this.addNextAutoAttackEvent(event.source);
        }
    }

    checkEncounterEnd() {
        if (this.enemies && !this.enemies.find((enemy) => enemy.combatStats.currentHitpoints > 0)) {
            this.eventQueue.clearEventsOfType(_events_autoAttackEvent__WEBPACK_IMPORTED_MODULE_1__["default"].type);
            let enemyRespawnEvent = new _events_enemyRespawnEvent__WEBPACK_IMPORTED_MODULE_7__["default"](this.simulationTime + 3 * 1e9);
            this.eventQueue.addEvent(enemyRespawnEvent);
            this.enemies = null;

            this.simResult.addEncounterEnd();
            // console.log("All enemies died");

            return true;
        } else if (!this.players.find((player) => player.combatStats.currentHitpoints > 0)) {
            this.eventQueue.clear();
            // 120 seconds respawn and 30 seconds traveling to battle
            let playerRespawnEvent = new _events_playerRespawnEvent__WEBPACK_IMPORTED_MODULE_9__["default"](this.simulationTime + 150 * 1e9);
            this.eventQueue.addEvent(playerRespawnEvent);
            this.enemies = null;

            this.simResult.addEncounterEnd();
            // console.log("Player died");

            return true;
        }

        return false;
    }

    addNextAutoAttackEvent(source) {
        let autoAttackEvent = new _events_autoAttackEvent__WEBPACK_IMPORTED_MODULE_1__["default"](this.simulationTime + source.combatStats.attackInterval, source);
        this.eventQueue.addEvent(autoAttackEvent);
    }

    processConsumableTickEvent(event) {
        if (event.consumable.hitpointRestore > 0) {
            let tickValue = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateTickValue(
                event.consumable.hitpointRestore,
                event.totalTicks,
                event.currentTick
            );
            let hitpointsAdded = event.source.addHitpoints(tickValue);
            this.simResult.addHitpointsGained(event.source, event.consumable.hrid, hitpointsAdded);
            // console.log("Added hitpoints:", hitpointsAdded);
        }

        if (event.consumable.manapointRestore > 0) {
            let tickValue = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateTickValue(
                event.consumable.manapointRestore,
                event.totalTicks,
                event.currentTick
            );
            let manapointsAdded = event.source.addManapoints(tickValue);
            this.simResult.addManapointsGained(event.source, event.consumable.hrid, manapointsAdded);
            // console.log("Added manapoints:", manapointsAdded);
        }

        if (event.currentTick < event.totalTicks) {
            let consumableTickEvent = new _events_consumableTickEvent__WEBPACK_IMPORTED_MODULE_5__["default"](
                this.simulationTime + 2 * 1e9,
                event.source,
                event.consumable,
                event.totalTicks,
                event.currentTick + 1
            );
            this.eventQueue.addEvent(consumableTickEvent);
        }
    }

    processBleedTickEvent(event) {
        let tickDamage = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateTickValue(event.damage, event.totalTicks, event.currentTick);
        let damage = Math.min(tickDamage, event.target.combatStats.currentHitpoints);

        event.target.combatStats.currentHitpoints -= damage;
        this.simResult.addAttack(event.sourceRef, event.target, "bleed", damage);

        let targetStaminaExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateStaminaExperience(0, damage);

        this.simResult.addExperienceGain(event.target, "stamina", targetStaminaExperience);
        // console.log(event.target.hrid, "bleed for", damage);

        if (event.currentTick < event.totalTicks) {
            let bleedTickEvent = new _events_bleedTickEvent__WEBPACK_IMPORTED_MODULE_2__["default"](
                this.simulationTime + 2 * 1e9,
                event.sourceRef,
                event.target,
                event.damage,
                event.totalTicks,
                event.currentTick + 1
            );
            this.eventQueue.addEvent(bleedTickEvent);
        }

        if (event.target.combatStats.currentHitpoints == 0) {
            this.eventQueue.clearEventsForUnit(event.target);
            this.simResult.addDeath(event.target);
        }

        this.checkEncounterEnd();
    }

    processRegenTickEvent(event) {
        let hitpointRegen = Math.floor(event.source.combatStats.maxHitpoints * event.source.combatStats.HPRegen);
        let hitpointsAdded = event.source.addHitpoints(hitpointRegen);
        this.simResult.addHitpointsGained(event.source, "regen", hitpointsAdded);
        // console.log("Added hitpoints:", hitpointsAdded);

        let manapointRegen = Math.floor(event.source.combatStats.maxManapoints * event.source.combatStats.MPRegen);
        let manapointsAdded = event.source.addManapoints(manapointRegen);
        this.simResult.addManapointsGained(event.source, "regen", manapointsAdded);
        // console.log("Added manapoints:", manapointsAdded);

        let regenTickEvent = new _events_regenTickEvent__WEBPACK_IMPORTED_MODULE_10__["default"](this.simulationTime + 10 * 1e9, event.source);
        this.eventQueue.addEvent(regenTickEvent);
    }

    processCheckBuffExpirationEvent(event) {
        event.source.removeExpiredBuffs(this.simulationTime);
    }

    checkTriggers() {
        let triggeredSomething;

        do {
            triggeredSomething = false;

            this.players
                .filter((player) => player.combatStats.currentHitpoints > 0)
                .forEach((player) => {
                    if (this.checkTriggersForUnit(player, this.players, this.enemies)) {
                        triggeredSomething = true;
                    }
                });

            if (this.enemies) {
                this.enemies
                    .filter((enemy) => enemy.combatStats.currentHitpoints > 0)
                    .forEach((enemy) => {
                        if (this.checkTriggersForUnit(enemy, this.enemies, this.players)) {
                            triggeredSomething = true;
                        }
                    });
            }
        } while (triggeredSomething);
    }

    checkTriggersForUnit(unit, friendlies, enemies) {
        console.assert(unit.combatStats.currentHitpoints > 0, "Checking triggers for a dead unit");

        let triggeredSomething = false;
        let target = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(enemies);

        for (const food of unit.food) {
            if (food && food.shouldTrigger(this.simulationTime, unit, target, friendlies, enemies)) {
                this.useConsumable(unit, food);
                triggeredSomething = true;
            }
        }

        for (const drink of unit.drinks) {
            if (drink && drink.shouldTrigger(this.simulationTime, unit, target, friendlies, enemies)) {
                this.useConsumable(unit, drink);
                triggeredSomething = true;
            }
        }

        for (const ability of unit.abilities) {
            if (ability && ability.shouldTrigger(this.simulationTime, unit, target, friendlies, enemies)) {
                triggeredSomething = this.tryUseAbility(unit, ability);
            }
        }

        return triggeredSomething;
    }

    useConsumable(source, consumable) {
        // console.log("Consuming:", consumable);

        console.assert(source.combatStats.currentHitpoints > 0, "Dead unit is trying to use a consumable");

        consumable.lastUsed = this.simulationTime;
        let cooldownReadyEvent = new _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__["default"](this.simulationTime + consumable.cooldownDuration);
        this.eventQueue.addEvent(cooldownReadyEvent);

        this.simResult.addConsumableUse(source, consumable);

        if (consumable.recoveryDuration == 0) {
            if (consumable.hitpointRestore > 0) {
                let hitpointsAdded = source.addHitpoints(consumable.hitpointRestore);
                this.simResult.addHitpointsGained(source, consumable.hrid, hitpointsAdded);
                // console.log("Added hitpoints:", hitpointsAdded);
            }

            if (consumable.manapointRestore > 0) {
                let manapointsAdded = source.addManapoints(consumable.manapointRestore);
                this.simResult.addManapointsGained(source, consumable.hrid, manapointsAdded);
                // console.log("Added manapoints:", manapointsAdded);
            }
        } else {
            let consumableTickEvent = new _events_consumableTickEvent__WEBPACK_IMPORTED_MODULE_5__["default"](
                this.simulationTime + 2 * 1e9,
                source,
                consumable,
                consumable.recoveryDuration / (2 * 1e9),
                1
            );
            this.eventQueue.addEvent(consumableTickEvent);
        }

        for (const buff of consumable.buffs) {
            source.addBuff(buff, this.simulationTime);
            // console.log("Added buff:", buff);
            let checkBuffExpirationEvent = new _events_checkBuffExpirationEvent__WEBPACK_IMPORTED_MODULE_3__["default"](this.simulationTime + buff.duration, source);
            this.eventQueue.addEvent(checkBuffExpirationEvent);
        }
    }

    tryUseAbility(source, ability) {
        console.assert(source.combatStats.currentHitpoints > 0, "Dead unit is trying to cast an ability");

        if (source.combatStats.currentManapoints < ability.manaCost) {
            if (source.isPlayer) {
                this.simResult.playerRanOutOfMana = true;
            }
            return false;
        }

        // console.log("Casting:", ability);

        source.combatStats.currentManapoints -= ability.manaCost;

        let sourceIntelligenceExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateIntelligenceExperience(ability.manaCost);
        this.simResult.addExperienceGain(source, "intelligence", sourceIntelligenceExperience);

        ability.lastUsed = this.simulationTime;
        let cooldownReadyEvent = new _events_cooldownReadyEvent__WEBPACK_IMPORTED_MODULE_6__["default"](this.simulationTime + ability.cooldownDuration);
        this.eventQueue.addEvent(cooldownReadyEvent);

        for (const abilityEffect of ability.abilityEffects) {
            switch (abilityEffect.effectType) {
                case "/ability_effect_types/buff":
                    source.addBuff(abilityEffect.buff, this.simulationTime);
                    // console.log("Added buff:", abilityEffect.buff);
                    let checkBuffExpirationEvent = new _events_checkBuffExpirationEvent__WEBPACK_IMPORTED_MODULE_3__["default"](
                        this.simulationTime + abilityEffect.buff.duration,
                        source
                    );
                    this.eventQueue.addEvent(checkBuffExpirationEvent);
                    break;
                case "/ability_effect_types/damage":
                    let targets;
                    switch (abilityEffect.targetType) {
                        case "enemy":
                            targets = source.isPlayer
                                ? [_combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(this.enemies)]
                                : [_combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(this.players)];
                            break;
                        case "all enemies":
                            targets = source.isPlayer ? this.enemies : this.players;
                            break;
                    }

                    for (const target of targets.filter((unit) => unit.combatStats.currentHitpoints > 0)) {
                        let { damageDone, damagePrevented, maxDamage, didHit } = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].processAttack(
                            source,
                            target,
                            abilityEffect
                        );

                        if (abilityEffect.bleedRatio > 0 && damageDone > 0) {
                            let bleedTickEvent = new _events_bleedTickEvent__WEBPACK_IMPORTED_MODULE_2__["default"](
                                this.simulationTime + 2 * 1e9,
                                source,
                                target,
                                damageDone * abilityEffect.bleedRatio,
                                abilityEffect.duration / (2 * 1e9),
                                1
                            );
                            this.eventQueue.addEvent(bleedTickEvent);
                        }

                        // console.log("Ability hit", target.hrid, "for", damageDone);

                        this.simResult.addAttack(source, target, ability.hrid, didHit ? damageDone : "miss");

                        let targetStaminaExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateStaminaExperience(
                            damagePrevented,
                            damageDone
                        );
                        let targetDefenseExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateDefenseExperience(damagePrevented);
                        let sourceAttackExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculateAttackExperience(damageDone);
                        let sourcePowerExperience = _combatUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].calculatePowerExperience(maxDamage);

                        this.simResult.addExperienceGain(target, "stamina", targetStaminaExperience);
                        this.simResult.addExperienceGain(target, "defense", targetDefenseExperience);
                        this.simResult.addExperienceGain(source, "attack", sourceAttackExperience);
                        this.simResult.addExperienceGain(source, "power", sourcePowerExperience);

                        if (target.combatStats.currentHitpoints == 0) {
                            this.eventQueue.clearEventsForUnit(target);
                            this.simResult.addDeath(target);
                            // console.log(target.hrid, "died");
                        }
                    }
                    break;
            }
        }

        this.checkEncounterEnd();

        return true;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CombatSimulator);


/***/ }),

/***/ "./src/combatsimulator/combatUnit.js":
/*!*******************************************!*\
  !*** ./src/combatsimulator/combatUnit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CombatUnit {
    isPlayer;

    // Base levels which don't change after initialization
    staminaLevel = 1;
    intelligenceLevel = 1;
    attackLevel = 1;
    powerLevel = 1;
    defenseLevel = 1;

    abilities = [null, null, null, null];
    food = [null, null, null];
    drinks = [null, null, null];

    // Calculated combat stats including temporary buffs
    combatStats = {
        combatStyleHrid: "smash",
        attackInterval: 3000000000,
        stabAccuracy: 0,
        slashAccuracy: 0,
        smashAccuracy: 0,
        stabDamage: 0,
        slashDamage: 0,
        smashDamage: 0,
        stabEvasion: 0,
        slashEvasion: 0,
        smashEvasion: 0,
        armor: 0,
        lifeSteal: 0,
        HPRegen: 0.005,
        MPRegen: 0.01,
        dropRate: 0,
        foodSlots: 1,
        drinkSlots: 1,
        staminaLevel: 1,
        intelligenceLevel: 1,
        attackLevel: 1,
        powerLevel: 1,
        defenseLevel: 1,
        maxHitpoints: 110,
        currentHitpoints: 110,
        maxManapoints: 110,
        currentManapoints: 110,
        stabAccuracyRating: 11,
        slashAccuracyRating: 11,
        smashAccuracyRating: 11,
        stabMaxDamage: 11,
        slashMaxDamage: 11,
        smashMaxDamage: 11,
        stabEvasionRating: 11,
        slashEvasionRating: 11,
        smashEvasionRating: 11,
    };
    combatBuffs = {};

    constructor() {}

    updateCombatStats() {
        ["stamina", "intelligence", "attack", "power", "defense"].forEach((stat) => {
            this.combatStats[stat + "Level"] = this[stat + "Level"];
            let boosts = this.getBuffBoosts("/buff_types/" + stat + "_level");
            boosts.forEach((buff) => {
                this.combatStats[stat + "Level"] += Math.floor(this[stat + "Level"] * buff.ratioBoost);
                this.combatStats[stat + "Level"] += buff.flatBoost;
            });
        });

        this.combatStats.maxHitpoints = 10 * (10 + this.combatStats.staminaLevel);
        this.combatStats.maxManapoints = 10 * (10 + this.combatStats.intelligenceLevel);

        let accuracyBoosts = this.getBuffBoosts("/buff_types/accuracy");
        let accuracyRatioBoost = accuracyBoosts[0]?.ratioBoost ?? 0;
        console.assert(accuracyBoosts.length <= 1, "Multiple accuracy buffs active");

        let damageBoosts = this.getBuffBoosts("/buff_types/damage");
        let damageRatioBoost = damageBoosts[0]?.ratioBoost ?? 0;
        console.assert(damageBoosts.length <= 1, "Multiple damage buffs active");

        ["stab", "slash", "smash"].forEach((style) => {
            this.combatStats[style + "AccuracyRating"] =
                (10 + this.combatStats.attackLevel) *
                (1 + this.combatStats[style + "Accuracy"]) *
                (1 + accuracyRatioBoost);
            this.combatStats[style + "MaxDamage"] =
                (10 + this.combatStats.powerLevel) * (1 + this.combatStats[style + "Damage"]) * (1 + damageRatioBoost);
            this.combatStats[style + "EvasionRating"] =
                (10 + this.combatStats.defenseLevel) * (1 + this.combatStats[style + "Evasion"]);
        });

        // TODO: Test how frenzy and swiftness coffee stack
        let attackIntervalBoosts = this.getBuffBoosts("/buff_types/attack_speed");
        let attackIntervalRatioBoost = attackIntervalBoosts
            .map((boost) => boost.ratioBoost)
            .reduce((prev, cur) => prev + cur, 0);
        this.combatStats.attackInterval = this.combatStats.attackInterval * (1 / (1 + attackIntervalRatioBoost));

        let armorBoosts = this.getBuffBoosts("/buff_types/armor");
        let armorFlatBoost = armorBoosts[0]?.flatBoost ?? 0;
        this.combatStats.armor += armorFlatBoost;
        console.assert(armorBoosts.length <= 1, "Multiple armor buffs active");

        let lifeStealBoosts = this.getBuffBoosts("/buff_types/life_steal");
        let lifeStealFlatBoost = lifeStealBoosts[0]?.flatBoost ?? 0;
        this.combatStats.lifeSteal += lifeStealFlatBoost;
        console.assert(lifeStealBoosts.length <= 1, "Multiple life steal buffs active");

        let HPRegenBoosts = this.getBuffBoosts("/buff_types/hp_regen");
        let HPRegenFlatBoost = HPRegenBoosts[0]?.flatBoost ?? 0;
        this.combatStats.HPRegen += HPRegenFlatBoost;
        console.assert(HPRegenBoosts.length <= 1, "Multiple hp regen buffs active");

        let MPRegenBoosts = this.getBuffBoosts("/buff_types/mp_regen");
        let MPRegenFlatBoost = MPRegenBoosts[0]?.flatBoost ?? 0;
        this.combatStats.MPRegen += MPRegenFlatBoost;
        console.assert(MPRegenBoosts.length <= 1, "Multiple mp regen buffs active");

        let dropRateBoosts = this.getBuffBoosts("/buff_types/combat_drop_rate");
        let dropRateRatioBoost = dropRateBoosts[0]?.ratioBoost ?? 0;
        this.combatStats.dropRate += dropRateRatioBoost;
        console.assert(dropRateBoosts.length <= 1, "Multiple drop rate buffs active");
    }

    addBuff(buff, currentTime) {
        buff.startTime = currentTime;
        this.combatBuffs[buff.sourceHrid] = buff;

        this.updateCombatStats();
    }

    removeExpiredBuffs(currentTime) {
        let expiredBuffs = Object.values(this.combatBuffs).filter(
            (buff) => buff.startTime + buff.duration <= currentTime
        );
        expiredBuffs.forEach((buff) => {
            delete this.combatBuffs[buff.sourceHrid];
        });

        this.updateCombatStats();
    }

    clearBuffs() {
        this.combatBuffs = {};
    }

    getBuffBoosts(type) {
        let boosts = [];
        Object.values(this.combatBuffs)
            .filter((buff) => buff.typeHrid == type)
            .forEach((buff) => {
                boosts.push({ ratioBoost: buff.ratioBoost, flatBoost: buff.flatBoost });
            });

        return boosts;
    }

    reset(currentTime = 0) {
        this.clearBuffs();
        this.updateCombatStats();
        this.resetCooldowns(currentTime);

        this.combatStats.currentHitpoints = this.combatStats.maxHitpoints;
        this.combatStats.currentManapoints = this.combatStats.maxManapoints;
    }

    resetCooldowns(currentTime = 0) {
        this.food.filter((food) => food != null).forEach((food) => food.lastUsed = Number.MIN_SAFE_INTEGER);
        this.drinks.filter((drink) => drink != null).forEach((drink) => drink.lastUsed = Number.MIN_SAFE_INTEGER);

        this.abilities.filter((ability) => ability != null).forEach((ability) => {
            if (this.isPlayer) {
                ability.lastUsed = currentTime;
            } else {
                ability.lastUsed = currentTime - Math.floor(Math.random() * ability.cooldownDuration);
            }
        })
    }

    addHitpoints(hitpoints) {
        let hitpointsAdded = 0;

        if (this.combatStats.currentHitpoints >= this.combatStats.maxHitpoints) {
            return hitpointsAdded;
        }

        let newHitpoints = Math.min(this.combatStats.currentHitpoints + hitpoints, this.combatStats.maxHitpoints);
        hitpointsAdded = newHitpoints - this.combatStats.currentHitpoints;
        this.combatStats.currentHitpoints = newHitpoints;

        return hitpointsAdded;
    }

    addManapoints(manapoints) {
        let manapointsAdded = 0;

        if (this.combatStats.currentManapoints >= this.combatStats.maxManapoints) {
            return manapointsAdded;
        }

        let newManapoints = Math.min(this.combatStats.currentManapoints + manapoints, this.combatStats.maxManapoints);
        manapointsAdded = newManapoints - this.combatStats.currentManapoints;
        this.combatStats.currentManapoints = newManapoints;

        return manapointsAdded;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CombatUnit);


/***/ }),

/***/ "./src/combatsimulator/combatUtilities.js":
/*!************************************************!*\
  !*** ./src/combatsimulator/combatUtilities.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CombatUtilities {
    static getTarget(enemies) {
        if (!enemies) {
            return null;
        }
        let target = enemies.find((enemy) => enemy.combatStats.currentHitpoints > 0);

        return target ?? null;
    }

    static randomInt(min, max) {
        if (max < min) {
            let temp = min;
            min = max;
            max = temp;
        }

        let minCeil = Math.ceil(min);
        let maxFloor = Math.floor(max);

        if (Math.floor(min) == maxFloor) {
            return Math.floor((min + max) / 2 + Math.random());
        }

        let minTail = -1 * (min - minCeil);
        let maxTail = max - maxFloor;

        let balancedWeight = 2 * minTail + (maxFloor - minCeil);
        let balancedAverage = (maxFloor + minCeil) / 2;
        let average = (max + min) / 2;
        let extraTailWeight = (balancedWeight * (average - balancedAverage)) / (maxFloor + 1 - average);
        let extraTailChance = Math.abs(extraTailWeight / (extraTailWeight + balancedWeight));

        if (Math.random() < extraTailChance) {
            if (maxTail > minTail) {
                return Math.floor(maxFloor + 1);
            } else {
                return Math.floor(minCeil - 1);
            }
        }

        if (maxTail > minTail) {
            return Math.floor(min + Math.random() * (maxFloor + minTail - min + 1));
        } else {
            return Math.floor(minCeil - maxTail + Math.random() * (max - (minCeil - maxTail) + 1));
        }
    }

    static calculateHitChance(source, target, combatStyle) {
        let sourceAccuracy = source.combatStats[combatStyle + "AccuracyRating"];
        let targetEvasion = target.combatStats[combatStyle + "EvasionRating"];

        let hitChance = Math.pow(sourceAccuracy, 1.4) / (Math.pow(sourceAccuracy, 1.4) + Math.pow(targetEvasion, 1.4));

        return hitChance;
    }

    static processAttack(source, target, abilityEffect) {
        let combatStyle = abilityEffect ? abilityEffect.combatStyleHrid : source.combatStats.combatStyleHrid;
        let minDamage = 1;
        let maxDamage = source.combatStats[combatStyle + "MaxDamage"];

        if (abilityEffect) {
            minDamage += abilityEffect.damageFlat;
            maxDamage *= abilityEffect.damageRatio;
            maxDamage += abilityEffect.damageFlat;
        }

        let damageRoll = CombatUtilities.randomInt(minDamage, maxDamage);
        let premitigatedDamage = Math.min(damageRoll, target.combatStats.currentHitpoints);

        let damageDone = 0;
        let hitChance = CombatUtilities.calculateHitChance(source, target, combatStyle);

        let didHit = false;
        if (Math.random() < hitChance) {
            didHit = true;
            let damageTakenRatio = 100 / (100 + target.combatStats.armor);
            let mitigatedDamage = damageTakenRatio * premitigatedDamage;
            damageDone = CombatUtilities.randomInt(mitigatedDamage, mitigatedDamage);
            target.combatStats.currentHitpoints -= damageDone;
        }

        let damagePrevented = premitigatedDamage - damageDone;

        return { damageDone, damagePrevented, maxDamage, didHit };
    }

    static calculateTickValue(totalValue, totalTicks, currentTick) {
        let currentSum = Math.floor((currentTick * totalValue) / totalTicks);
        let previousSum = Math.floor(((currentTick - 1) * totalValue) / totalTicks);

        return currentSum - previousSum;
    }

    static calculateStaminaExperience(damagePrevented, damageTaken) {
        return 0.05 * damagePrevented + 0.5 * damageTaken;
    }

    static calculateIntelligenceExperience(manaUsed) {
        return 0.5 * manaUsed;
    }

    static calculateAttackExperience(damageDone) {
        return 0.45 + 0.125 * damageDone;
    }

    static calculatePowerExperience(maxDamage) {
        return 0.3 + 0.04 * maxDamage;
    }

    static calculateDefenseExperience(damagePrevented) {
        return 0.4 + 0.15 * damagePrevented;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CombatUtilities);


/***/ }),

/***/ "./src/combatsimulator/consumable.js":
/*!*******************************************!*\
  !*** ./src/combatsimulator/consumable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buff */ "./src/combatsimulator/buff.js");
/* harmony import */ var _data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/itemDetailMap.json */ "./src/combatsimulator/data/itemDetailMap.json");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger */ "./src/combatsimulator/trigger.js");




class Consumable {
    constructor(hrid, triggers = null) {
        this.hrid = hrid;

        let gameConsumable = _data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_1__[this.hrid];
        console.assert(gameConsumable, "No consumable found for hrid:" + this.hrid);

        this.cooldownDuration = gameConsumable.consumableDetail.cooldownDuration;
        this.hitpointRestore = gameConsumable.consumableDetail.hitpointRestore;
        this.manapointRestore = gameConsumable.consumableDetail.manapointRestore;
        this.recoveryDuration = gameConsumable.consumableDetail.recoveryDuration;

        this.buffs = [];
        if (gameConsumable.consumableDetail.buffs) {
            for (const consumableBuff of gameConsumable.consumableDetail.buffs) {
                let buff = new _buff__WEBPACK_IMPORTED_MODULE_0__["default"](consumableBuff);
                this.buffs.push(buff);
            }
        }

        if (triggers) {
            this.triggers = triggers;
        } else {
            this.triggers = [];
            for (const defaultTrigger of gameConsumable.consumableDetail.defaultCombatTriggers) {
                let trigger = new _trigger__WEBPACK_IMPORTED_MODULE_2__["default"](
                    defaultTrigger.dependencyHrid,
                    defaultTrigger.conditionHrid,
                    defaultTrigger.comparatorHrid,
                    defaultTrigger.value
                );
                this.triggers.push(trigger);
            }
        }

        this.lastUsed = Number.MIN_SAFE_INTEGER;
    }

    static createFromDTO(dto) {
        let triggers = dto.triggers.map(trigger => _trigger__WEBPACK_IMPORTED_MODULE_2__["default"].createFromDTO(trigger));
        let consumable = new Consumable(dto.hrid, triggers);

        return consumable;
    }

    shouldTrigger(currentTime, source, target, friendlies, enemies) {
        if (this.lastUsed + this.cooldownDuration > currentTime) {
            return false;
        }

        if (this.triggers.length == 0) {
            return true;
        }

        let shouldTrigger = true;
        for (const trigger of this.triggers) {
            if (!trigger.isActive(source, target, friendlies, enemies)) {
                shouldTrigger = false;
            }
        }

        return shouldTrigger;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Consumable);


/***/ }),

/***/ "./src/combatsimulator/equipment.js":
/*!******************************************!*\
  !*** ./src/combatsimulator/equipment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/itemDetailMap.json */ "./src/combatsimulator/data/itemDetailMap.json");
/* harmony import */ var _data_enhancementLevelTotalMultiplierTable_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/enhancementLevelTotalMultiplierTable.json */ "./src/combatsimulator/data/enhancementLevelTotalMultiplierTable.json");



class Equipment {
    constructor(hrid, enhancementLevel) {
        this.hrid = hrid;
        this.enhancementLevel = enhancementLevel;
    }

    static createFromDTO(dto) {
        let equipment = new Equipment(dto.hrid, dto.enhancementLevel);

        return equipment;
    }

    getCombatStat(combatStat) {
        let gameItem = _data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_0__[this.hrid];
        console.assert(gameItem, "No equipment found for hrid:" + this.hrid);

        let multiplier = _data_enhancementLevelTotalMultiplierTable_json__WEBPACK_IMPORTED_MODULE_1__[this.enhancementLevel];

        let stat =
            gameItem.equipmentDetail.combatStats[combatStat] +
            multiplier * gameItem.equipmentDetail.combatEnhancementBonuses[combatStat];

        return stat;
    }

    getCombatStyle() {
        let gameItem = _data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_0__[this.hrid];
        console.assert(gameItem, "No equipment found for hrid:" + this.hrid);

        let gameCombatStyle = gameItem.equipmentDetail.combatStyleHrids[0];
        let combatStyle = gameCombatStyle.slice(gameCombatStyle.lastIndexOf("/") + 1);

        return combatStyle;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equipment);


/***/ }),

/***/ "./src/combatsimulator/events/autoAttackEvent.js":
/*!*******************************************************!*\
  !*** ./src/combatsimulator/events/autoAttackEvent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class AutoAttackEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "autoAttack";

    constructor(time, source) {
        super(AutoAttackEvent.type, time);

        this.source = source;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoAttackEvent);


/***/ }),

/***/ "./src/combatsimulator/events/bleedTickEvent.js":
/*!******************************************************!*\
  !*** ./src/combatsimulator/events/bleedTickEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class BleedTickEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "bleedTick";

    constructor(time, sourceRef, target, damage, totalTicks, currentTick) {
        super(BleedTickEvent.type, time);

        // Calling it 'source' would wrongly clear bleeds when the source dies
        this.sourceRef = sourceRef;
        this.target = target;
        this.damage = damage;
        this.totalTicks = totalTicks;
        this.currentTick = currentTick;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BleedTickEvent);


/***/ }),

/***/ "./src/combatsimulator/events/checkBuffExpirationEvent.js":
/*!****************************************************************!*\
  !*** ./src/combatsimulator/events/checkBuffExpirationEvent.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class CheckBuffExpirationEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "checkBuffExpiration";

    constructor(time, source) {
        super(CheckBuffExpirationEvent.type, time);

        this.source = source;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBuffExpirationEvent);


/***/ }),

/***/ "./src/combatsimulator/events/combatEvent.js":
/*!***************************************************!*\
  !*** ./src/combatsimulator/events/combatEvent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CombatEvent {
    constructor(type, time) {
        this.type = type;
        this.time = time;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CombatEvent);


/***/ }),

/***/ "./src/combatsimulator/events/combatStartEvent.js":
/*!********************************************************!*\
  !*** ./src/combatsimulator/events/combatStartEvent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class CombatStartEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "combatStart";

    constructor(time) {
        super(CombatStartEvent.type, time);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CombatStartEvent);


/***/ }),

/***/ "./src/combatsimulator/events/consumableTickEvent.js":
/*!***********************************************************!*\
  !*** ./src/combatsimulator/events/consumableTickEvent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class ConsumableTickEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "consumableTick";

    constructor(time, source, consumable, totalTicks, currentTick) {
        super(ConsumableTickEvent.type, time);

        this.source = source;
        this.consumable = consumable;
        this.totalTicks = totalTicks;
        this.currentTick = currentTick;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConsumableTickEvent);


/***/ }),

/***/ "./src/combatsimulator/events/cooldownReadyEvent.js":
/*!**********************************************************!*\
  !*** ./src/combatsimulator/events/cooldownReadyEvent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class CooldownReadyEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "cooldownReady";

    constructor(time) {
        super(CooldownReadyEvent.type, time);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CooldownReadyEvent);


/***/ }),

/***/ "./src/combatsimulator/events/enemyRespawnEvent.js":
/*!*********************************************************!*\
  !*** ./src/combatsimulator/events/enemyRespawnEvent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class EnemyRespawnEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "enemyRespawn";

    constructor(time) {
        super(EnemyRespawnEvent.type, time);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemyRespawnEvent);


/***/ }),

/***/ "./src/combatsimulator/events/eventQueue.js":
/*!**************************************************!*\
  !*** ./src/combatsimulator/events/eventQueue.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var heap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! heap-js */ "./node_modules/heap-js/dist/heap-js.es5.js");


class EventQueue {
    constructor() {
        this.minHeap = new heap_js__WEBPACK_IMPORTED_MODULE_0__["default"]((a, b) => a.time - b.time);
    }

    addEvent(event) {
        this.minHeap.push(event);
    }

    getNextEvent() {
        return this.minHeap.pop();
    }

    clear() {
        this.minHeap = new heap_js__WEBPACK_IMPORTED_MODULE_0__["default"]((a, b) => a.time - b.time);
    }

    clearEventsForUnit(unit) {
        this.clearMatching((event) => event.source == unit || event.target == unit);
    }

    clearEventsOfType(type) {
        this.clearMatching((event) => event.type == type);
    }

    clearMatching(fn) {
        let heapEvents = this.minHeap.toArray();

        for (const event of heapEvents) {
            if (fn(event)) {
                this.minHeap.remove(event);
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventQueue);


/***/ }),

/***/ "./src/combatsimulator/events/playerRespawnEvent.js":
/*!**********************************************************!*\
  !*** ./src/combatsimulator/events/playerRespawnEvent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class PlayerRespawnEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "playerRespawn";

    constructor(time) {
        super(PlayerRespawnEvent.type, time);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerRespawnEvent);


/***/ }),

/***/ "./src/combatsimulator/events/regenTickEvent.js":
/*!******************************************************!*\
  !*** ./src/combatsimulator/events/regenTickEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _combatEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatEvent */ "./src/combatsimulator/events/combatEvent.js");


class RegenTickEvent extends _combatEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static type = "regenTick";

    constructor(time, source) {
        super(RegenTickEvent.type, time);

        this.source = source;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegenTickEvent);


/***/ }),

/***/ "./src/combatsimulator/monster.js":
/*!****************************************!*\
  !*** ./src/combatsimulator/monster.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ability */ "./src/combatsimulator/ability.js");
/* harmony import */ var _combatUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combatUnit */ "./src/combatsimulator/combatUnit.js");
/* harmony import */ var _data_combatMonsterDetailMap_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/combatMonsterDetailMap.json */ "./src/combatsimulator/data/combatMonsterDetailMap.json");




class Monster extends _combatUnit__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(hrid) {
        super();

        this.isPlayer = false;
        this.hrid = hrid;
    }

    updateCombatStats() {
        let gameMonster = _data_combatMonsterDetailMap_json__WEBPACK_IMPORTED_MODULE_2__[this.hrid];
        console.assert(gameMonster, "No monster found for hrid:" + this.hrid);

        this.staminaLevel = gameMonster.combatDetails.staminaLevel;
        this.intelligenceLevel = gameMonster.combatDetails.intelligenceLevel;
        this.attackLevel = gameMonster.combatDetails.attackLevel;
        this.powerLevel = gameMonster.combatDetails.powerLevel;
        this.defenseLevel = gameMonster.combatDetails.defenseLevel;

        let gameCombatStyle = gameMonster.combatDetails.combatStyleHrid;
        this.combatStats.combatStyleHrid = gameCombatStyle.slice(gameCombatStyle.lastIndexOf("/") + 1);

        for (const [key, value] of Object.entries(gameMonster.combatDetails.combatStats)) {
            this.combatStats[key] = value;
        }

        for (let i = 0; i < gameMonster.abilities.length; i++) {
            this.abilities[i] = new _ability__WEBPACK_IMPORTED_MODULE_0__["default"](gameMonster.abilities[i].abilityHrid, gameMonster.abilities[i].level);
        }

        super.updateCombatStats();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Monster);


/***/ }),

/***/ "./src/combatsimulator/player.js":
/*!***************************************!*\
  !*** ./src/combatsimulator/player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ability */ "./src/combatsimulator/ability.js");
/* harmony import */ var _combatUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combatUnit */ "./src/combatsimulator/combatUnit.js");
/* harmony import */ var _consumable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumable */ "./src/combatsimulator/consumable.js");
/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipment */ "./src/combatsimulator/equipment.js");





class Player extends _combatUnit__WEBPACK_IMPORTED_MODULE_1__["default"] {
    equipment = {
        "/equipment_types/head": null,
        "/equipment_types/body": null,
        "/equipment_types/legs": null,
        "/equipment_types/feet": null,
        "/equipment_types/hands": null,
        "/equipment_types/main_hand": null,
        "/equipment_types/two_hand": null,
        "/equipment_types/off_hand": null,
        "/equipment_types/pouch": null,
    };

    constructor() {
        super();

        this.isPlayer = true;
        this.hrid = "player";
    }

    static createFromDTO(dto) {
        let player = new Player();

        player.staminaLevel = dto.staminaLevel;
        player.intelligenceLevel = dto.intelligenceLevel;
        player.attackLevel = dto.attackLevel;
        player.powerLevel = dto.powerLevel;
        player.defenseLevel = dto.defenseLevel;

        for (const [key, value] of Object.entries(dto.equipment)) {
            player.equipment[key] = value ? _equipment__WEBPACK_IMPORTED_MODULE_3__["default"].createFromDTO(value) : null;
        }

        player.food = dto.food.map(food => food ? _consumable__WEBPACK_IMPORTED_MODULE_2__["default"].createFromDTO(food) : null);
        player.drinks = dto.drinks.map(drink => drink ? _consumable__WEBPACK_IMPORTED_MODULE_2__["default"].createFromDTO(drink) : null);
        player.abilities = dto.abilities.map(ability => ability ? _ability__WEBPACK_IMPORTED_MODULE_0__["default"].createFromDTO(ability) : null);

        return player;
    }

    updateCombatStats() {
        if (this.equipment["/equipment_types/main_hand"]) {
            this.combatStats.combatStyleHrid = this.equipment["/equipment_types/main_hand"].getCombatStyle();
            this.combatStats.attackInterval =
                this.equipment["/equipment_types/main_hand"].getCombatStat("attackInterval");
        } else if (this.equipment["/equipment_types/two_hand"]) {
            this.combatStats.combatStyleHrid = this.equipment["/equipment_types/two_hand"].getCombatStyle();
            this.combatStats.attackInterval =
                this.equipment["/equipment_types/two_hand"].getCombatStat("attackInterval");
        } else {
            this.combatStats.combatStyleHrid = "smash";
            this.combatStats.attackInterval = 3000000000;
        }

        [
            "stabAccuracy",
            "slashAccuracy",
            "smashAccuracy",
            "stabDamage",
            "slashDamage",
            "smashDamage",
            "stabEvasion",
            "slashEvasion",
            "smashEvasion",
            "armor",
            "lifeSteal",
        ].forEach((stat) => {
            this.combatStats[stat] = Object.values(this.equipment)
                .filter((equipment) => equipment != null)
                .map((equipment) => equipment.getCombatStat(stat))
                .reduce((prev, cur) => prev + cur, 0);
        });

        if (this.equipment["/equipment_types/pouch"]) {
            this.combatStats.foodSlots = 1 + this.equipment["/equipment_types/pouch"].getCombatStat("foodSlots");
            this.combatStats.drinkSlots = 1 + this.equipment["/equipment_types/pouch"].getCombatStat("drinkSlots");
        } else {
            this.combatStats.foodSlots = 1;
            this.combatStats.drinkSlots = 1;
        }

        this.combatStats.HPRegen = 0.005;
        this.combatStats.MPRegen = 0.01;
        this.combatStats.dropRate = 0;

        super.updateCombatStats();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/combatsimulator/simResult.js":
/*!******************************************!*\
  !*** ./src/combatsimulator/simResult.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SimResult {
    constructor() {
        this.deaths = {};
        this.experienceGained = {};
        this.encounters = 0;
        this.attacks = {};
        this.consumablesUsed = {};
        this.hitpointsGained = {};
        this.manapointsGained = {};
        this.playerRanOutOfMana = false;
    }

    addDeath(unit) {
        if (!this.deaths[unit.hrid]) {
            this.deaths[unit.hrid] = 0;
        }

        this.deaths[unit.hrid] += 1;
    }

    addExperienceGain(unit, type, experience) {
        if (!unit.isPlayer) {
            return;
        }

        if (!this.experienceGained[unit.hrid]) {
            this.experienceGained[unit.hrid] = {
                stamina: 0,
                intelligence: 0,
                attack: 0,
                power: 0,
                defense: 0,
            };
        }

        this.experienceGained[unit.hrid][type] += experience;
    }

    addEncounterEnd() {
        this.encounters++;
    }

    addAttack(source, target, ability, hit) {
        if (!this.attacks[source.hrid]) {
            this.attacks[source.hrid] = {};
        }
        if (!this.attacks[source.hrid][target.hrid]) {
            this.attacks[source.hrid][target.hrid] = {};
        }
        if (!this.attacks[source.hrid][target.hrid][ability]) {
            this.attacks[source.hrid][target.hrid][ability] = {};
        }

        if (!this.attacks[source.hrid][target.hrid][ability][hit]) {
            this.attacks[source.hrid][target.hrid][ability][hit] = 0;
        }

        this.attacks[source.hrid][target.hrid][ability][hit] += 1;
    }

    addConsumableUse(unit, consumable) {
        if (!this.consumablesUsed[unit.hrid]) {
            this.consumablesUsed[unit.hrid] = {};
        }
        if (!this.consumablesUsed[unit.hrid][consumable.hrid]) {
            this.consumablesUsed[unit.hrid][consumable.hrid] = 0;
        }

        this.consumablesUsed[unit.hrid][consumable.hrid] += 1;
    }

    addHitpointsGained(unit, source, amount) {
        if (!this.hitpointsGained[unit.hrid]) {
            this.hitpointsGained[unit.hrid] = {};
        }
        if (!this.hitpointsGained[unit.hrid][source]) {
            this.hitpointsGained[unit.hrid][source] = 0;
        }

        this.hitpointsGained[unit.hrid][source] += amount;
    }

    addManapointsGained(unit, source, amount) {
        if (!this.manapointsGained[unit.hrid]) {
            this.manapointsGained[unit.hrid] = {};
        }
        if (!this.manapointsGained[unit.hrid][source]) {
            this.manapointsGained[unit.hrid][source] = 0;
        }

        this.manapointsGained[unit.hrid][source] += amount;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimResult);


/***/ }),

/***/ "./src/combatsimulator/trigger.js":
/*!****************************************!*\
  !*** ./src/combatsimulator/trigger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_combatTriggerDependencyDetailMap_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/combatTriggerDependencyDetailMap.json */ "./src/combatsimulator/data/combatTriggerDependencyDetailMap.json");


class Trigger {
    constructor(dependencyHrid, conditionHrid, comparatorHrid, value = 0) {
        this.dependencyHrid = dependencyHrid;
        this.conditionHrid = conditionHrid;
        this.comparatorHrid = comparatorHrid;
        this.value = value;
    }

    static createFromDTO(dto) {
        let trigger = new Trigger(dto.dependencyHrid, dto.conditionHrid, dto.comparatorHrid, dto.value);

        return trigger;
    }

    isActive(source, target, friendlies, enemies) {
        if (_data_combatTriggerDependencyDetailMap_json__WEBPACK_IMPORTED_MODULE_0__[this.dependencyHrid].isSingleTarget) {
            return this.isActiveSingleTarget(source, target);
        } else {
            return this.isActiveMultiTarget(friendlies, enemies);
        }
    }

    isActiveSingleTarget(source, target) {
        let dependencyValue;
        switch (this.dependencyHrid) {
            case "/combat_trigger_dependencies/self":
                dependencyValue = this.getDependencyValue(source);
                break;
            case "/combat_trigger_dependencies/targeted_enemy":
                if (!target) {
                    return false;
                }
                dependencyValue = this.getDependencyValue(target);
                break;
            default:
                console.error("Unknown dependencyHrid:", this.dependencyHrid);
                break;
        }

        return this.compareValue(dependencyValue);
    }

    isActiveMultiTarget(friendlies, enemies) {
        let dependency;
        switch (this.dependencyHrid) {
            case "/combat_trigger_dependencies/all_allies":
                dependency = friendlies;
                break;
            case "/combat_trigger_dependencies/all_enemies":
                if (!enemies) {
                    return false;
                }
                dependency = enemies;
                break;
            default:
                console.error("Unknown dependencyHrid:", this.dependencyHrid);
                break;
        }

        let dependencyValue;
        switch (this.conditionHrid) {
            case "/combat_trigger_conditions/number_of_active_units":
                dependencyValue = dependency.filter((unit) => unit.combatStats.currentHitpoints > 0).length;
                break;
            default:
                dependencyValue = dependency
                    .map((unit) => this.getDependencyValue(unit))
                    .reduce((prev, cur) => prev + cur, 0);
                break;
        }

        return this.compareValue(dependencyValue);
    }

    getDependencyValue(source) {
        switch (this.conditionHrid) {
            case "/combat_trigger_conditions/attack_coffee":
            case "/combat_trigger_conditions/berserk":
            case "/combat_trigger_conditions/defense_coffee":
            case "/combat_trigger_conditions/frenzy":
            case "/combat_trigger_conditions/intelligence_coffee":
            case "/combat_trigger_conditions/lucky_coffee":
            case "/combat_trigger_conditions/power_coffee":
            case "/combat_trigger_conditions/precision":
            case "/combat_trigger_conditions/stamina_coffee":
            case "/combat_trigger_conditions/super_attack_coffee":
            case "/combat_trigger_conditions/super_defense_coffee":
            case "/combat_trigger_conditions/super_intelligence_coffee":
            case "/combat_trigger_conditions/super_power_coffee":
            case "/combat_trigger_conditions/super_stamina_coffee":
            case "/combat_trigger_conditions/swiftness_coffee":
            case "/combat_trigger_conditions/toughness":
            case "/combat_trigger_conditions/vampirism":
                let buffHrid = "/buff_sources";
                buffHrid += this.conditionHrid.slice(this.conditionHrid.lastIndexOf("/"));
                return source.combatBuffs[buffHrid];
            case "/combat_trigger_conditions/current_hp":
                return source.combatStats.currentHitpoints;
            case "/combat_trigger_conditions/current_mp":
                return source.combatStats.currentManapoints;
            case "/combat_trigger_conditions/missing_hp":
                return source.combatStats.maxHitpoints - source.combatStats.currentHitpoints;
            case "/combat_trigger_conditions/missing_mp":
                return source.combatStats.maxManapoints - source.combatStats.currentManapoints;
            default:
                console.error("Unknown conditionHrid:", this.conditionHrid);
                break;
        }
    }

    compareValue(dependencyValue) {
        switch (this.comparatorHrid) {
            case "/combat_trigger_comparators/greater_than_equal":
                return dependencyValue >= this.value;
            case "/combat_trigger_comparators/less_than_equal":
                return dependencyValue <= this.value;
            case "/combat_trigger_comparators/is_active":
                return !!dependencyValue;
            case "/combat_trigger_comparators/is_inactive":
                return !dependencyValue;
            default:
                console.error("Unknown comparatorHrid");
                break;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trigger);


/***/ }),

/***/ "./src/combatsimulator/zone.js":
/*!*************************************!*\
  !*** ./src/combatsimulator/zone.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_actionDetailMap_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/actionDetailMap.json */ "./src/combatsimulator/data/actionDetailMap.json");
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ "./src/combatsimulator/monster.js");



class Zone {
    constructor(hrid) {
        this.hrid = hrid;

        let gameZone = _data_actionDetailMap_json__WEBPACK_IMPORTED_MODULE_0__[this.hrid];
        this.monsterSpawnRates = gameZone.monsterSpawnRates;

        let totalProbability = this.monsterSpawnRates
            .map((encounter) => encounter.rate * 100) // Avoid floating point inaccuracies
            .reduce((prev, cur) => prev + cur, 0);
        console.assert(
            totalProbability / 100 == 1,
            "Encounter probabilities do not add up to 1. Zone: " + this.hrid + " Probability:" + totalProbability
        );
    }

    getRandomEncounter() {
        let encounter = null;
        let cumulativeProbability = 0;
        let randomNumber = Math.random();

        for (let i = 0; i < this.monsterSpawnRates.length; i++) {
            cumulativeProbability += this.monsterSpawnRates[i].rate;
            if (cumulativeProbability > randomNumber) {
                encounter = this.monsterSpawnRates[i];
                break;
            }
        }

        // This could happen very rarely due to floating point inaccuracies
        if (encounter == null) {
            encounter = this.monsterSpawnRates[this.monsterSpawnRates.length - 1];
        }

        return encounter.combatMonsterHrids.map((hrid) => new _monster__WEBPACK_IMPORTED_MODULE_1__["default"](hrid));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zone);


/***/ }),

/***/ "./src/combatsimulator/data/abilityDetailMap.json":
/*!********************************************************!*\
  !*** ./src/combatsimulator/data/abilityDetailMap.json ***!
  \********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/abilities/berserk":{"hrid":"/abilities/berserk","name":"Berserk","description":"Greatly increases damages for a short time","manaCost":60,"cooldownDuration":30000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"self","effectType":"/ability_effect_types/buff","combatStyleHrid":"","baseDamageFlat":0,"baseDamageFlatLevelBonus":0,"baseDamageRatio":0,"baseDamageRatioLevelBonus":0,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"/buff_sources/berserk","typeHrid":"/buff_types/damage","ratioBoost":0.25,"ratioBoostLevelBonus":0.0025,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":15000000000}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/berserk","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}],"sortIndex":10},"/abilities/cleave":{"hrid":"/abilities/cleave","name":"Cleave","description":"Cleaves all enemies","manaCost":30,"cooldownDuration":20000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"all enemies","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/slash","baseDamageFlat":20,"baseDamageFlatLevelBonus":0.2,"baseDamageRatio":0.3,"baseDamageRatioLevelBonus":0.003,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/all_enemies","conditionHrid":"/combat_trigger_conditions/number_of_active_units","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1},{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":5},"/abilities/frenzy":{"hrid":"/abilities/frenzy","name":"Frenzy","description":"Greatly increases attack speed for a short time","manaCost":60,"cooldownDuration":30000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"self","effectType":"/ability_effect_types/buff","combatStyleHrid":"","baseDamageFlat":0,"baseDamageFlatLevelBonus":0,"baseDamageRatio":0,"baseDamageRatioLevelBonus":0,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"/buff_sources/frenzy","typeHrid":"/buff_types/attack_speed","ratioBoost":0.25,"ratioBoostLevelBonus":0.0025,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":15000000000}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/frenzy","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}],"sortIndex":11},"/abilities/maim":{"hrid":"/abilities/maim","name":"Maim","description":"Maims the targeted enemy and causes bleeding","manaCost":60,"cooldownDuration":20000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"enemy","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/slash","baseDamageFlat":20,"baseDamageFlatLevelBonus":0.2,"baseDamageRatio":0.35,"baseDamageRatioLevelBonus":0.0035,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":2,"duration":12000000000,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":7},"/abilities/pierce":{"hrid":"/abilities/pierce","name":"Pierce","description":"Pierce the targeted enemy","manaCost":30,"cooldownDuration":20000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"enemy","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/stab","baseDamageFlat":20,"baseDamageFlatLevelBonus":0.2,"baseDamageRatio":0.7,"baseDamageRatioLevelBonus":0.007,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":4},"/abilities/poke":{"hrid":"/abilities/poke","name":"Poke","description":"Poke the targeted enemy","manaCost":20,"cooldownDuration":15000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"enemy","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/stab","baseDamageFlat":10,"baseDamageFlatLevelBonus":0.1,"baseDamageRatio":0.4,"baseDamageRatioLevelBonus":0.004,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":1},"/abilities/precision":{"hrid":"/abilities/precision","name":"Precision","description":"Greatly increases accuracy for a short time","manaCost":60,"cooldownDuration":30000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"self","effectType":"/ability_effect_types/buff","combatStyleHrid":"","baseDamageFlat":0,"baseDamageFlatLevelBonus":0,"baseDamageRatio":0,"baseDamageRatioLevelBonus":0,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"/buff_sources/precision","typeHrid":"/buff_types/accuracy","ratioBoost":0.25,"ratioBoostLevelBonus":0.0025,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":15000000000}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/precision","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}],"sortIndex":9},"/abilities/scratch":{"hrid":"/abilities/scratch","name":"Scratch","description":"Scratch the targeted enemy","manaCost":20,"cooldownDuration":15000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"enemy","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/slash","baseDamageFlat":10,"baseDamageFlatLevelBonus":0.1,"baseDamageRatio":0.4,"baseDamageRatioLevelBonus":0.004,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":2},"/abilities/smack":{"hrid":"/abilities/smack","name":"Smack","description":"Smack the targeted enemy","manaCost":20,"cooldownDuration":15000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"enemy","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/smash","baseDamageFlat":10,"baseDamageFlatLevelBonus":0.1,"baseDamageRatio":0.4,"baseDamageRatioLevelBonus":0.004,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":3},"/abilities/sweep":{"hrid":"/abilities/sweep","name":"Sweep","description":"Sweeping attack on all enemies","manaCost":30,"cooldownDuration":20000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"all enemies","effectType":"/ability_effect_types/damage","combatStyleHrid":"/combat_styles/smash","baseDamageFlat":20,"baseDamageFlatLevelBonus":0.2,"baseDamageRatio":0.3,"baseDamageRatioLevelBonus":0.003,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"","typeHrid":"","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":0}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/all_enemies","conditionHrid":"/combat_trigger_conditions/number_of_active_units","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1},{"dependencyHrid":"/combat_trigger_dependencies/targeted_enemy","conditionHrid":"/combat_trigger_conditions/current_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":1}],"sortIndex":6},"/abilities/toughness":{"hrid":"/abilities/toughness","name":"Toughness","description":"Greatly increases armor for a short time","manaCost":60,"cooldownDuration":30000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"self","effectType":"/ability_effect_types/buff","combatStyleHrid":"","baseDamageFlat":0,"baseDamageFlatLevelBonus":0,"baseDamageRatio":0,"baseDamageRatioLevelBonus":0,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"/buff_sources/toughness","typeHrid":"/buff_types/armor","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":30,"flatBoostLevelBonus":0.3,"startTime":"0001-01-01T00:00:00Z","duration":15000000000}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/toughness","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}],"sortIndex":8},"/abilities/vampirism":{"hrid":"/abilities/vampirism","name":"Vampirism","description":"Gains lifesteal for a short time","manaCost":60,"cooldownDuration":30000000000,"hasSpecialEffects":false,"abilityEffects":[{"targetType":"self","effectType":"/ability_effect_types/buff","combatStyleHrid":"","baseDamageFlat":0,"baseDamageFlatLevelBonus":0,"baseDamageRatio":0,"baseDamageRatioLevelBonus":0,"bonusAccuracyRatio":0,"bonusAccuracyRatioLevelBonus":0,"bleedRatio":0,"duration":0,"buff":{"sourceHrid":"/buff_sources/vampirism","typeHrid":"/buff_types/life_steal","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.1,"flatBoostLevelBonus":0.001,"startTime":"0001-01-01T00:00:00Z","duration":15000000000}}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/vampirism","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}],"sortIndex":12}}');

/***/ }),

/***/ "./src/combatsimulator/data/abilitySlotsLevelRequirementList.json":
/*!************************************************************************!*\
  !*** ./src/combatsimulator/data/abilitySlotsLevelRequirementList.json ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = [0,1,20,50,90];

/***/ }),

/***/ "./src/combatsimulator/data/actionDetailMap.json":
/*!*******************************************************!*\
  !*** ./src/combatsimulator/data/actionDetailMap.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/actions/brewing/artisan_tea":{"hrid":"/actions/brewing/artisan_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Artisan Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":78},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":53},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/emp_tea_leaf","count":2},{"itemHrid":"/items/mooberry","count":2},{"itemHrid":"/items/crimson_milk","count":1}],"outputItems":[{"itemHrid":"/items/artisan_tea","count":1}],"monsterSpawnRates":null,"sortIndex":30},"/actions/brewing/attack_coffee":{"hrid":"/actions/brewing/attack_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Attack Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":20},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":18},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/robusta_coffee_bean","count":1},{"itemHrid":"/items/blackberry","count":1}],"outputItems":[{"itemHrid":"/items/attack_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":8},"/actions/brewing/blessed_tea":{"hrid":"/actions/brewing/blessed_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Blessed Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":88},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":59},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/emp_tea_leaf","count":2},{"itemHrid":"/items/spaceberry","count":2},{"itemHrid":"/items/holy_milk","count":1}],"outputItems":[{"itemHrid":"/items/blessed_tea","count":1}],"monsterSpawnRates":null,"sortIndex":31},"/actions/brewing/brewing_tea":{"hrid":"/actions/brewing/brewing_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Brewing Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":20},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":18},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/black_tea_leaf","count":1},{"itemHrid":"/items/orange","count":1}],"outputItems":[{"itemHrid":"/items/brewing_tea","count":1}],"monsterSpawnRates":null,"sortIndex":9},"/actions/brewing/cheesesmithing_tea":{"hrid":"/actions/brewing/cheesesmithing_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Cheesesmithing Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":30},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/burble_tea_leaf","count":1},{"itemHrid":"/items/orange","count":1}],"outputItems":[{"itemHrid":"/items/cheesesmithing_tea","count":1}],"monsterSpawnRates":null,"sortIndex":13},"/actions/brewing/cooking_tea":{"hrid":"/actions/brewing/cooking_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Cooking Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":15},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":15},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/black_tea_leaf","count":1},{"itemHrid":"/items/apple","count":1}],"outputItems":[{"itemHrid":"/items/cooking_tea","count":1}],"monsterSpawnRates":null,"sortIndex":7},"/actions/brewing/defense_coffee":{"hrid":"/actions/brewing/defense_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Defense Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":15},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":15},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/robusta_coffee_bean","count":1},{"itemHrid":"/items/blueberry","count":1}],"outputItems":[{"itemHrid":"/items/defense_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":6},"/actions/brewing/efficiency_tea":{"hrid":"/actions/brewing/efficiency_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Efficiency Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":68},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":47},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/red_tea_leaf","count":2},{"itemHrid":"/items/marsberry","count":2},{"itemHrid":"/items/rainbow_milk","count":1}],"outputItems":[{"itemHrid":"/items/efficiency_tea","count":1}],"monsterSpawnRates":null,"sortIndex":26},"/actions/brewing/enhancing_tea":{"hrid":"/actions/brewing/enhancing_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Enhancing Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":25},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":21},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/black_tea_leaf","count":1},{"itemHrid":"/items/plum","count":1}],"outputItems":[{"itemHrid":"/items/enhancing_tea","count":1}],"monsterSpawnRates":null,"sortIndex":11},"/actions/brewing/fermenting_tea":{"hrid":"/actions/brewing/fermenting_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Fermenting Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":53},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":38},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/moolong_tea_leaf","count":2},{"itemHrid":"/items/mooberry","count":2},{"itemHrid":"/items/rainbow_cheese","count":1}],"outputItems":[{"itemHrid":"/items/fermenting_tea","count":1}],"monsterSpawnRates":null,"sortIndex":20},"/actions/brewing/foraging_tea":{"hrid":"/actions/brewing/foraging_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Foraging Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":5},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":9},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/green_tea_leaf","count":1},{"itemHrid":"/items/orange","count":1}],"outputItems":[{"itemHrid":"/items/foraging_tea","count":1}],"monsterSpawnRates":null,"sortIndex":4},"/actions/brewing/gathering_tea":{"hrid":"/actions/brewing/gathering_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Gathering Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":8},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":11},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/green_tea_leaf","count":2},{"itemHrid":"/items/blueberry","count":2},{"itemHrid":"/items/verdant_milk","count":1}],"outputItems":[{"itemHrid":"/items/gathering_tea","count":1}],"monsterSpawnRates":null,"sortIndex":5},"/actions/brewing/gourmet_tea":{"hrid":"/actions/brewing/gourmet_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Gourmet Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":23},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":20},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/black_tea_leaf","count":2},{"itemHrid":"/items/blackberry","count":2},{"itemHrid":"/items/azure_milk","count":1}],"outputItems":[{"itemHrid":"/items/gourmet_tea","count":1}],"monsterSpawnRates":null,"sortIndex":10},"/actions/brewing/intelligence_coffee":{"hrid":"/actions/brewing/intelligence_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Intelligence Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":5},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":9},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/arabica_coffee_bean","count":1},{"itemHrid":"/items/blackberry","count":1}],"outputItems":[{"itemHrid":"/items/intelligence_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":3},"/actions/brewing/lucky_coffee":{"hrid":"/actions/brewing/lucky_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Lucky Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":53},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":38},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/excelsa_coffee_bean","count":2},{"itemHrid":"/items/peach","count":1},{"itemHrid":"/items/crimson_milk","count":1}],"outputItems":[{"itemHrid":"/items/lucky_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":19},"/actions/brewing/milking_tea":{"hrid":"/actions/brewing/milking_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Milking Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":6},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/green_tea_leaf","count":1},{"itemHrid":"/items/apple","count":1}],"outputItems":[{"itemHrid":"/items/milking_tea","count":1}],"monsterSpawnRates":null,"sortIndex":2},"/actions/brewing/power_coffee":{"hrid":"/actions/brewing/power_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Power Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":30},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/liberica_coffee_bean","count":1},{"itemHrid":"/items/blackberry","count":1}],"outputItems":[{"itemHrid":"/items/power_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":12},"/actions/brewing/stamina_coffee":{"hrid":"/actions/brewing/stamina_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Stamina Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":6},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/arabica_coffee_bean","count":1},{"itemHrid":"/items/blueberry","count":1}],"outputItems":[{"itemHrid":"/items/stamina_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":1},"/actions/brewing/super_attack_coffee":{"hrid":"/actions/brewing/super_attack_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Super Attack Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":65},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":45},"dropTable":null,"upgradeItemHrid":"/items/attack_coffee","inputItems":[{"itemHrid":"/items/fieriosa_coffee_bean","count":1},{"itemHrid":"/items/marsberry","count":1}],"outputItems":[{"itemHrid":"/items/super_attack_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":23},"/actions/brewing/super_brewing_tea":{"hrid":"/actions/brewing/super_brewing_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Super Brewing Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":65},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":45},"dropTable":null,"upgradeItemHrid":"/items/brewing_tea","inputItems":[{"itemHrid":"/items/red_tea_leaf","count":1},{"itemHrid":"/items/dragon_fruit","count":1}],"outputItems":[{"itemHrid":"/items/super_brewing_tea","count":1}],"monsterSpawnRates":null,"sortIndex":24},"/actions/brewing/super_cheesesmithing_tea":{"hrid":"/actions/brewing/super_cheesesmithing_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Super Cheesesmithing Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":75},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":51},"dropTable":null,"upgradeItemHrid":"/items/cheesesmithing_tea","inputItems":[{"itemHrid":"/items/emp_tea_leaf","count":1},{"itemHrid":"/items/peach","count":1}],"outputItems":[{"itemHrid":"/items/super_cheesesmithing_tea","count":1}],"monsterSpawnRates":null,"sortIndex":29},"/actions/brewing/super_cooking_tea":{"hrid":"/actions/brewing/super_cooking_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Super Cooking Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":60},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":42},"dropTable":null,"upgradeItemHrid":"/items/cooking_tea","inputItems":[{"itemHrid":"/items/red_tea_leaf","count":1},{"itemHrid":"/items/peach","count":1}],"outputItems":[{"itemHrid":"/items/super_cooking_tea","count":1}],"monsterSpawnRates":null,"sortIndex":22},"/actions/brewing/super_defense_coffee":{"hrid":"/actions/brewing/super_defense_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Super Defense Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":60},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":42},"dropTable":null,"upgradeItemHrid":"/items/defense_coffee","inputItems":[{"itemHrid":"/items/fieriosa_coffee_bean","count":1},{"itemHrid":"/items/mooberry","count":1}],"outputItems":[{"itemHrid":"/items/super_defense_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":21},"/actions/brewing/super_enhancing_tea":{"hrid":"/actions/brewing/super_enhancing_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Super Enhancing Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":70},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":48},"dropTable":null,"upgradeItemHrid":"/items/enhancing_tea","inputItems":[{"itemHrid":"/items/red_tea_leaf","count":1},{"itemHrid":"/items/star_fruit","count":1}],"outputItems":[{"itemHrid":"/items/super_enhancing_tea","count":1}],"monsterSpawnRates":null,"sortIndex":27},"/actions/brewing/super_foraging_tea":{"hrid":"/actions/brewing/super_foraging_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Super Foraging Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":50},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":36},"dropTable":null,"upgradeItemHrid":"/items/foraging_tea","inputItems":[{"itemHrid":"/items/moolong_tea_leaf","count":1},{"itemHrid":"/items/peach","count":1}],"outputItems":[{"itemHrid":"/items/super_foraging_tea","count":1}],"monsterSpawnRates":null,"sortIndex":18},"/actions/brewing/super_intelligence_coffee":{"hrid":"/actions/brewing/super_intelligence_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Super Intelligence Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":50},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":36},"dropTable":null,"upgradeItemHrid":"/items/intelligence_coffee","inputItems":[{"itemHrid":"/items/excelsa_coffee_bean","count":1},{"itemHrid":"/items/mooberry","count":1}],"outputItems":[{"itemHrid":"/items/super_intelligence_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":17},"/actions/brewing/super_milking_tea":{"hrid":"/actions/brewing/super_milking_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Super Milking Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":45},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":33},"dropTable":null,"upgradeItemHrid":"/items/milking_tea","inputItems":[{"itemHrid":"/items/moolong_tea_leaf","count":1},{"itemHrid":"/items/plum","count":1}],"outputItems":[{"itemHrid":"/items/super_milking_tea","count":1}],"monsterSpawnRates":null,"sortIndex":16},"/actions/brewing/super_power_coffee":{"hrid":"/actions/brewing/super_power_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Super Power Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":75},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":51},"dropTable":null,"upgradeItemHrid":"/items/power_coffee","inputItems":[{"itemHrid":"/items/spacia_coffee_bean","count":1},{"itemHrid":"/items/mooberry","count":1}],"outputItems":[{"itemHrid":"/items/super_power_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":28},"/actions/brewing/super_stamina_coffee":{"hrid":"/actions/brewing/super_stamina_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Super Stamina Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":45},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":33},"dropTable":null,"upgradeItemHrid":"/items/stamina_coffee","inputItems":[{"itemHrid":"/items/excelsa_coffee_bean","count":1},{"itemHrid":"/items/strawberry","count":1}],"outputItems":[{"itemHrid":"/items/super_stamina_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":15},"/actions/brewing/swiftness_coffee":{"hrid":"/actions/brewing/swiftness_coffee","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/coffee","name":"Swiftness Coffee","levelRequirement":{"skillHrid":"/skills/brewing","level":68},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":48},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/fieriosa_coffee_bean","count":2},{"itemHrid":"/items/dragon_fruit","count":1},{"itemHrid":"/items/rainbow_milk","count":1}],"outputItems":[{"itemHrid":"/items/swiftness_coffee","count":1}],"monsterSpawnRates":null,"sortIndex":25},"/actions/brewing/wisdom_tea":{"hrid":"/actions/brewing/wisdom_tea","function":"/action_functions/production","type":"/action_types/brewing","category":"/action_categories/brewing/tea","name":"Wisdom Tea","levelRequirement":{"skillHrid":"/skills/brewing","level":36},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/brewing","value":29},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/burble_tea_leaf","count":2},{"itemHrid":"/items/strawberry","count":2},{"itemHrid":"/items/burble_milk","count":1}],"outputItems":[{"itemHrid":"/items/wisdom_tea","count":1}],"monsterSpawnRates":null,"sortIndex":14},"/actions/cheesesmithing/azure_boots":{"hrid":"/actions/cheesesmithing/azure_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":20},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":192},"dropTable":null,"upgradeItemHrid":"/items/verdant_boots","inputItems":[{"itemHrid":"/items/azure_cheese","count":16}],"outputItems":[{"itemHrid":"/items/azure_boots","count":1}],"monsterSpawnRates":null,"sortIndex":36},"/actions/cheesesmithing/azure_brush":{"hrid":"/actions/cheesesmithing/azure_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":25},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_brush","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_brush","count":1}],"monsterSpawnRates":null,"sortIndex":42},"/actions/cheesesmithing/azure_buckler":{"hrid":"/actions/cheesesmithing/azure_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":27},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":288},"dropTable":null,"upgradeItemHrid":"/items/verdant_buckler","inputItems":[{"itemHrid":"/items/azure_cheese","count":24}],"outputItems":[{"itemHrid":"/items/azure_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":50},"/actions/cheesesmithing/azure_bulwark":{"hrid":"/actions/cheesesmithing/azure_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":30},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":480},"dropTable":null,"upgradeItemHrid":"/items/verdant_bulwark","inputItems":[{"itemHrid":"/items/azure_cheese","count":40}],"outputItems":[{"itemHrid":"/items/azure_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":54},"/actions/cheesesmithing/azure_cheese":{"hrid":"/actions/cheesesmithing/azure_cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":20},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":12},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/azure_milk","count":2}],"outputItems":[{"itemHrid":"/items/azure_cheese","count":1}],"monsterSpawnRates":null,"sortIndex":35},"/actions/cheesesmithing/azure_enhancer":{"hrid":"/actions/cheesesmithing/azure_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":25},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_enhancer","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":47},"/actions/cheesesmithing/azure_gauntlets":{"hrid":"/actions/cheesesmithing/azure_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":21},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":192},"dropTable":null,"upgradeItemHrid":"/items/verdant_gauntlets","inputItems":[{"itemHrid":"/items/azure_cheese","count":16}],"outputItems":[{"itemHrid":"/items/azure_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":38},"/actions/cheesesmithing/azure_hammer":{"hrid":"/actions/cheesesmithing/azure_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":25},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_hammer","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":44},"/actions/cheesesmithing/azure_helmet":{"hrid":"/actions/cheesesmithing/azure_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":26},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_helmet","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":48},"/actions/cheesesmithing/azure_mace":{"hrid":"/actions/cheesesmithing/azure_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":24},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":288},"dropTable":null,"upgradeItemHrid":"/items/verdant_mace","inputItems":[{"itemHrid":"/items/azure_cheese","count":24}],"outputItems":[{"itemHrid":"/items/azure_mace","count":1}],"monsterSpawnRates":null,"sortIndex":41},"/actions/cheesesmithing/azure_plate_body":{"hrid":"/actions/cheesesmithing/azure_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":29},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":432},"dropTable":null,"upgradeItemHrid":"/items/verdant_plate_body","inputItems":[{"itemHrid":"/items/azure_cheese","count":36}],"outputItems":[{"itemHrid":"/items/azure_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":53},"/actions/cheesesmithing/azure_plate_legs":{"hrid":"/actions/cheesesmithing/azure_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":28},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":336},"dropTable":null,"upgradeItemHrid":"/items/verdant_plate_legs","inputItems":[{"itemHrid":"/items/azure_cheese","count":28}],"outputItems":[{"itemHrid":"/items/azure_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":51},"/actions/cheesesmithing/azure_pot":{"hrid":"/actions/cheesesmithing/azure_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":25},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_pot","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_pot","count":1}],"monsterSpawnRates":null,"sortIndex":46},"/actions/cheesesmithing/azure_shears":{"hrid":"/actions/cheesesmithing/azure_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":25},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_shears","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_shears","count":1}],"monsterSpawnRates":null,"sortIndex":43},"/actions/cheesesmithing/azure_spatula":{"hrid":"/actions/cheesesmithing/azure_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":25},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":240},"dropTable":null,"upgradeItemHrid":"/items/verdant_spatula","inputItems":[{"itemHrid":"/items/azure_cheese","count":20}],"outputItems":[{"itemHrid":"/items/azure_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":45},"/actions/cheesesmithing/azure_spear":{"hrid":"/actions/cheesesmithing/azure_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":22},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":288},"dropTable":null,"upgradeItemHrid":"/items/verdant_spear","inputItems":[{"itemHrid":"/items/azure_cheese","count":24}],"outputItems":[{"itemHrid":"/items/azure_spear","count":1}],"monsterSpawnRates":null,"sortIndex":39},"/actions/cheesesmithing/azure_sword":{"hrid":"/actions/cheesesmithing/azure_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/azure","name":"Azure Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":23},"baseTimeCost":20000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":288},"dropTable":null,"upgradeItemHrid":"/items/verdant_sword","inputItems":[{"itemHrid":"/items/azure_cheese","count":24}],"outputItems":[{"itemHrid":"/items/azure_sword","count":1}],"monsterSpawnRates":null,"sortIndex":40},"/actions/cheesesmithing/black_bear_gloves":{"hrid":"/actions/cheesesmithing/black_bear_gloves","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Black Bear Shoes","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":10000},"dropTable":null,"upgradeItemHrid":"/items/rainbow_boots","inputItems":[{"itemHrid":"/items/black_bear_fluff","count":10}],"outputItems":[{"itemHrid":"/items/black_bear_shoes","count":1}],"monsterSpawnRates":null,"sortIndex":106},"/actions/cheesesmithing/burble_boots":{"hrid":"/actions/cheesesmithing/burble_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":35},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":432},"dropTable":null,"upgradeItemHrid":"/items/azure_boots","inputItems":[{"itemHrid":"/items/burble_cheese","count":24}],"outputItems":[{"itemHrid":"/items/burble_boots","count":1}],"monsterSpawnRates":null,"sortIndex":58},"/actions/cheesesmithing/burble_brush":{"hrid":"/actions/cheesesmithing/burble_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":40},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_brush","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_brush","count":1}],"monsterSpawnRates":null,"sortIndex":63},"/actions/cheesesmithing/burble_buckler":{"hrid":"/actions/cheesesmithing/burble_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":42},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":648},"dropTable":null,"upgradeItemHrid":"/items/azure_buckler","inputItems":[{"itemHrid":"/items/burble_cheese","count":36}],"outputItems":[{"itemHrid":"/items/burble_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":70},"/actions/cheesesmithing/burble_bulwark":{"hrid":"/actions/cheesesmithing/burble_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":45},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/azure_bulwark","inputItems":[{"itemHrid":"/items/burble_cheese","count":60}],"outputItems":[{"itemHrid":"/items/burble_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":73},"/actions/cheesesmithing/burble_cheese":{"hrid":"/actions/cheesesmithing/burble_cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":35},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":18},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/burble_milk","count":2}],"outputItems":[{"itemHrid":"/items/burble_cheese","count":1}],"monsterSpawnRates":null,"sortIndex":57},"/actions/cheesesmithing/burble_enhancer":{"hrid":"/actions/cheesesmithing/burble_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":40},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_enhancer","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":68},"/actions/cheesesmithing/burble_gauntlets":{"hrid":"/actions/cheesesmithing/burble_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":36},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":432},"dropTable":null,"upgradeItemHrid":"/items/azure_gauntlets","inputItems":[{"itemHrid":"/items/burble_cheese","count":24}],"outputItems":[{"itemHrid":"/items/burble_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":59},"/actions/cheesesmithing/burble_hammer":{"hrid":"/actions/cheesesmithing/burble_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":40},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_hammer","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":65},"/actions/cheesesmithing/burble_helmet":{"hrid":"/actions/cheesesmithing/burble_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":41},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_helmet","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":69},"/actions/cheesesmithing/burble_mace":{"hrid":"/actions/cheesesmithing/burble_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":39},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":648},"dropTable":null,"upgradeItemHrid":"/items/azure_mace","inputItems":[{"itemHrid":"/items/burble_cheese","count":36}],"outputItems":[{"itemHrid":"/items/burble_mace","count":1}],"monsterSpawnRates":null,"sortIndex":62},"/actions/cheesesmithing/burble_plate_body":{"hrid":"/actions/cheesesmithing/burble_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":44},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":972},"dropTable":null,"upgradeItemHrid":"/items/azure_plate_body","inputItems":[{"itemHrid":"/items/burble_cheese","count":54}],"outputItems":[{"itemHrid":"/items/burble_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":72},"/actions/cheesesmithing/burble_plate_legs":{"hrid":"/actions/cheesesmithing/burble_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":43},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":756},"dropTable":null,"upgradeItemHrid":"/items/azure_plate_legs","inputItems":[{"itemHrid":"/items/burble_cheese","count":42}],"outputItems":[{"itemHrid":"/items/burble_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":71},"/actions/cheesesmithing/burble_pot":{"hrid":"/actions/cheesesmithing/burble_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":40},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_pot","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_pot","count":1}],"monsterSpawnRates":null,"sortIndex":67},"/actions/cheesesmithing/burble_shears":{"hrid":"/actions/cheesesmithing/burble_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":40},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_shears","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_shears","count":1}],"monsterSpawnRates":null,"sortIndex":64},"/actions/cheesesmithing/burble_spatula":{"hrid":"/actions/cheesesmithing/burble_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":40},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":540},"dropTable":null,"upgradeItemHrid":"/items/azure_spatula","inputItems":[{"itemHrid":"/items/burble_cheese","count":30}],"outputItems":[{"itemHrid":"/items/burble_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":66},"/actions/cheesesmithing/burble_spear":{"hrid":"/actions/cheesesmithing/burble_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":37},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":648},"dropTable":null,"upgradeItemHrid":"/items/azure_spear","inputItems":[{"itemHrid":"/items/burble_cheese","count":36}],"outputItems":[{"itemHrid":"/items/burble_spear","count":1}],"monsterSpawnRates":null,"sortIndex":60},"/actions/cheesesmithing/burble_sword":{"hrid":"/actions/cheesesmithing/burble_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/burble","name":"Burble Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":38},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":648},"dropTable":null,"upgradeItemHrid":"/items/azure_sword","inputItems":[{"itemHrid":"/items/burble_cheese","count":36}],"outputItems":[{"itemHrid":"/items/burble_sword","count":1}],"monsterSpawnRates":null,"sortIndex":61},"/actions/cheesesmithing/cheese":{"hrid":"/actions/cheesesmithing/cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/milk","count":2}],"outputItems":[{"itemHrid":"/items/cheese","count":1}],"monsterSpawnRates":null,"sortIndex":1},"/actions/cheesesmithing/cheese_boots":{"hrid":"/actions/cheesesmithing/cheese_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":1},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":8}],"outputItems":[{"itemHrid":"/items/cheese_boots","count":1}],"monsterSpawnRates":null,"sortIndex":2},"/actions/cheesesmithing/cheese_brush":{"hrid":"/actions/cheesesmithing/cheese_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":5},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_brush","count":1}],"monsterSpawnRates":null,"sortIndex":7},"/actions/cheesesmithing/cheese_buckler":{"hrid":"/actions/cheesesmithing/cheese_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":7},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":12}],"outputItems":[{"itemHrid":"/items/cheese_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":14},"/actions/cheesesmithing/cheese_bulwark":{"hrid":"/actions/cheesesmithing/cheese_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":10},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":60},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":20}],"outputItems":[{"itemHrid":"/items/cheese_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":19},"/actions/cheesesmithing/cheese_enhancer":{"hrid":"/actions/cheesesmithing/cheese_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":5},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":12},"/actions/cheesesmithing/cheese_gauntlets":{"hrid":"/actions/cheesesmithing/cheese_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":1},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":8}],"outputItems":[{"itemHrid":"/items/cheese_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":3},"/actions/cheesesmithing/cheese_hammer":{"hrid":"/actions/cheesesmithing/cheese_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":5},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":9},"/actions/cheesesmithing/cheese_helmet":{"hrid":"/actions/cheesesmithing/cheese_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":6},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":13},"/actions/cheesesmithing/cheese_mace":{"hrid":"/actions/cheesesmithing/cheese_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":4},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":12}],"outputItems":[{"itemHrid":"/items/cheese_mace","count":1}],"monsterSpawnRates":null,"sortIndex":6},"/actions/cheesesmithing/cheese_plate_body":{"hrid":"/actions/cheesesmithing/cheese_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":9},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":54},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":18}],"outputItems":[{"itemHrid":"/items/cheese_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":16},"/actions/cheesesmithing/cheese_plate_legs":{"hrid":"/actions/cheesesmithing/cheese_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":8},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":42},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":14}],"outputItems":[{"itemHrid":"/items/cheese_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":15},"/actions/cheesesmithing/cheese_pot":{"hrid":"/actions/cheesesmithing/cheese_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":5},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_pot","count":1}],"monsterSpawnRates":null,"sortIndex":11},"/actions/cheesesmithing/cheese_shears":{"hrid":"/actions/cheesesmithing/cheese_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":5},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_shears","count":1}],"monsterSpawnRates":null,"sortIndex":8},"/actions/cheesesmithing/cheese_spatula":{"hrid":"/actions/cheesesmithing/cheese_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":5},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":10}],"outputItems":[{"itemHrid":"/items/cheese_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":10},"/actions/cheesesmithing/cheese_spear":{"hrid":"/actions/cheesesmithing/cheese_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":2},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":12}],"outputItems":[{"itemHrid":"/items/cheese_spear","count":1}],"monsterSpawnRates":null,"sortIndex":4},"/actions/cheesesmithing/cheese_sword":{"hrid":"/actions/cheesesmithing/cheese_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/cheese","name":"Cheese Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":3},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/cheese","count":12}],"outputItems":[{"itemHrid":"/items/cheese_sword","count":1}],"monsterSpawnRates":null,"sortIndex":5},"/actions/cheesesmithing/crimson_boots":{"hrid":"/actions/cheesesmithing/crimson_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":50},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":864},"dropTable":null,"upgradeItemHrid":"/items/burble_boots","inputItems":[{"itemHrid":"/items/crimson_cheese","count":36}],"outputItems":[{"itemHrid":"/items/crimson_boots","count":1}],"monsterSpawnRates":null,"sortIndex":75},"/actions/cheesesmithing/crimson_brush":{"hrid":"/actions/cheesesmithing/crimson_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":55},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_brush","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_brush","count":1}],"monsterSpawnRates":null,"sortIndex":80},"/actions/cheesesmithing/crimson_buckler":{"hrid":"/actions/cheesesmithing/crimson_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":57},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1296},"dropTable":null,"upgradeItemHrid":"/items/burble_buckler","inputItems":[{"itemHrid":"/items/crimson_cheese","count":54}],"outputItems":[{"itemHrid":"/items/crimson_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":89},"/actions/cheesesmithing/crimson_bulwark":{"hrid":"/actions/cheesesmithing/crimson_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":60},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2160},"dropTable":null,"upgradeItemHrid":"/items/burble_bulwark","inputItems":[{"itemHrid":"/items/crimson_cheese","count":90}],"outputItems":[{"itemHrid":"/items/crimson_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":92},"/actions/cheesesmithing/crimson_cheese":{"hrid":"/actions/cheesesmithing/crimson_cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":50},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/crimson_milk","count":2}],"outputItems":[{"itemHrid":"/items/crimson_cheese","count":1}],"monsterSpawnRates":null,"sortIndex":74},"/actions/cheesesmithing/crimson_enhancer":{"hrid":"/actions/cheesesmithing/crimson_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":55},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_enhancer","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":85},"/actions/cheesesmithing/crimson_gauntlets":{"hrid":"/actions/cheesesmithing/crimson_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":51},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":864},"dropTable":null,"upgradeItemHrid":"/items/burble_gauntlets","inputItems":[{"itemHrid":"/items/crimson_cheese","count":36}],"outputItems":[{"itemHrid":"/items/crimson_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":76},"/actions/cheesesmithing/crimson_hammer":{"hrid":"/actions/cheesesmithing/crimson_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":55},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_hammer","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":82},"/actions/cheesesmithing/crimson_helmet":{"hrid":"/actions/cheesesmithing/crimson_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":56},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_helmet","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":86},"/actions/cheesesmithing/crimson_mace":{"hrid":"/actions/cheesesmithing/crimson_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":54},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1296},"dropTable":null,"upgradeItemHrid":"/items/burble_mace","inputItems":[{"itemHrid":"/items/crimson_cheese","count":54}],"outputItems":[{"itemHrid":"/items/crimson_mace","count":1}],"monsterSpawnRates":null,"sortIndex":79},"/actions/cheesesmithing/crimson_plate_body":{"hrid":"/actions/cheesesmithing/crimson_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":59},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1944},"dropTable":null,"upgradeItemHrid":"/items/burble_plate_body","inputItems":[{"itemHrid":"/items/crimson_cheese","count":81}],"outputItems":[{"itemHrid":"/items/crimson_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":91},"/actions/cheesesmithing/crimson_plate_legs":{"hrid":"/actions/cheesesmithing/crimson_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":58},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1512},"dropTable":null,"upgradeItemHrid":"/items/burble_plate_legs","inputItems":[{"itemHrid":"/items/crimson_cheese","count":63}],"outputItems":[{"itemHrid":"/items/crimson_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":90},"/actions/cheesesmithing/crimson_pot":{"hrid":"/actions/cheesesmithing/crimson_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":55},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_pot","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_pot","count":1}],"monsterSpawnRates":null,"sortIndex":84},"/actions/cheesesmithing/crimson_shears":{"hrid":"/actions/cheesesmithing/crimson_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":55},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_shears","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_shears","count":1}],"monsterSpawnRates":null,"sortIndex":81},"/actions/cheesesmithing/crimson_spatula":{"hrid":"/actions/cheesesmithing/crimson_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":55},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1080},"dropTable":null,"upgradeItemHrid":"/items/burble_spatula","inputItems":[{"itemHrid":"/items/crimson_cheese","count":45}],"outputItems":[{"itemHrid":"/items/crimson_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":83},"/actions/cheesesmithing/crimson_spear":{"hrid":"/actions/cheesesmithing/crimson_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":52},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1296},"dropTable":null,"upgradeItemHrid":"/items/burble_spear","inputItems":[{"itemHrid":"/items/crimson_cheese","count":54}],"outputItems":[{"itemHrid":"/items/crimson_spear","count":1}],"monsterSpawnRates":null,"sortIndex":77},"/actions/cheesesmithing/crimson_sword":{"hrid":"/actions/cheesesmithing/crimson_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/crimson","name":"Crimson Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":53},"baseTimeCost":28000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1296},"dropTable":null,"upgradeItemHrid":"/items/burble_sword","inputItems":[{"itemHrid":"/items/crimson_cheese","count":54}],"outputItems":[{"itemHrid":"/items/crimson_sword","count":1}],"monsterSpawnRates":null,"sortIndex":78},"/actions/cheesesmithing/grizzly_bear_gloves":{"hrid":"/actions/cheesesmithing/grizzly_bear_gloves","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Grizzly Bear Shoes","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":10000},"dropTable":null,"upgradeItemHrid":"/items/rainbow_boots","inputItems":[{"itemHrid":"/items/grizzly_bear_fluff","count":10}],"outputItems":[{"itemHrid":"/items/grizzly_bear_shoes","count":1}],"monsterSpawnRates":null,"sortIndex":107},"/actions/cheesesmithing/holy_boots":{"hrid":"/actions/cheesesmithing/holy_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":80},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2592},"dropTable":null,"upgradeItemHrid":"/items/rainbow_boots","inputItems":[{"itemHrid":"/items/holy_cheese","count":72}],"outputItems":[{"itemHrid":"/items/holy_boots","count":1}],"monsterSpawnRates":null,"sortIndex":115},"/actions/cheesesmithing/holy_brush":{"hrid":"/actions/cheesesmithing/holy_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_brush","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_brush","count":1}],"monsterSpawnRates":null,"sortIndex":120},"/actions/cheesesmithing/holy_buckler":{"hrid":"/actions/cheesesmithing/holy_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":87},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3888},"dropTable":null,"upgradeItemHrid":"/items/rainbow_buckler","inputItems":[{"itemHrid":"/items/holy_cheese","count":108}],"outputItems":[{"itemHrid":"/items/holy_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":129},"/actions/cheesesmithing/holy_bulwark":{"hrid":"/actions/cheesesmithing/holy_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":90},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":6480},"dropTable":null,"upgradeItemHrid":"/items/rainbow_bulwark","inputItems":[{"itemHrid":"/items/holy_cheese","count":180}],"outputItems":[{"itemHrid":"/items/holy_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":132},"/actions/cheesesmithing/holy_cheese":{"hrid":"/actions/cheesesmithing/holy_cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":80},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/holy_milk","count":2}],"outputItems":[{"itemHrid":"/items/holy_cheese","count":1}],"monsterSpawnRates":null,"sortIndex":114},"/actions/cheesesmithing/holy_enhancer":{"hrid":"/actions/cheesesmithing/holy_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_enhancer","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":125},"/actions/cheesesmithing/holy_gauntlets":{"hrid":"/actions/cheesesmithing/holy_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":81},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2592},"dropTable":null,"upgradeItemHrid":"/items/rainbow_gauntlets","inputItems":[{"itemHrid":"/items/holy_cheese","count":72}],"outputItems":[{"itemHrid":"/items/holy_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":116},"/actions/cheesesmithing/holy_hammer":{"hrid":"/actions/cheesesmithing/holy_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_hammer","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":122},"/actions/cheesesmithing/holy_helmet":{"hrid":"/actions/cheesesmithing/holy_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":86},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_helmet","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":128},"/actions/cheesesmithing/holy_mace":{"hrid":"/actions/cheesesmithing/holy_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":84},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3888},"dropTable":null,"upgradeItemHrid":"/items/rainbow_mace","inputItems":[{"itemHrid":"/items/holy_cheese","count":108}],"outputItems":[{"itemHrid":"/items/holy_mace","count":1}],"monsterSpawnRates":null,"sortIndex":119},"/actions/cheesesmithing/holy_plate_body":{"hrid":"/actions/cheesesmithing/holy_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":89},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":5832},"dropTable":null,"upgradeItemHrid":"/items/rainbow_plate_body","inputItems":[{"itemHrid":"/items/holy_cheese","count":162}],"outputItems":[{"itemHrid":"/items/holy_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":131},"/actions/cheesesmithing/holy_plate_legs":{"hrid":"/actions/cheesesmithing/holy_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":88},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":4536},"dropTable":null,"upgradeItemHrid":"/items/rainbow_plate_legs","inputItems":[{"itemHrid":"/items/holy_cheese","count":126}],"outputItems":[{"itemHrid":"/items/holy_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":130},"/actions/cheesesmithing/holy_pot":{"hrid":"/actions/cheesesmithing/holy_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_pot","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_pot","count":1}],"monsterSpawnRates":null,"sortIndex":124},"/actions/cheesesmithing/holy_shears":{"hrid":"/actions/cheesesmithing/holy_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_shears","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_shears","count":1}],"monsterSpawnRates":null,"sortIndex":121},"/actions/cheesesmithing/holy_spatula":{"hrid":"/actions/cheesesmithing/holy_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3240},"dropTable":null,"upgradeItemHrid":"/items/rainbow_spatula","inputItems":[{"itemHrid":"/items/holy_cheese","count":90}],"outputItems":[{"itemHrid":"/items/holy_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":123},"/actions/cheesesmithing/holy_spear":{"hrid":"/actions/cheesesmithing/holy_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":82},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3888},"dropTable":null,"upgradeItemHrid":"/items/rainbow_spear","inputItems":[{"itemHrid":"/items/holy_cheese","count":108}],"outputItems":[{"itemHrid":"/items/holy_spear","count":1}],"monsterSpawnRates":null,"sortIndex":117},"/actions/cheesesmithing/holy_sword":{"hrid":"/actions/cheesesmithing/holy_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/holy","name":"Holy Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":83},"baseTimeCost":48000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3888},"dropTable":null,"upgradeItemHrid":"/items/rainbow_sword","inputItems":[{"itemHrid":"/items/holy_cheese","count":108}],"outputItems":[{"itemHrid":"/items/holy_sword","count":1}],"monsterSpawnRates":null,"sortIndex":118},"/actions/cheesesmithing/panda_gloves":{"hrid":"/actions/cheesesmithing/panda_gloves","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Panda Gloves","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":10000},"dropTable":null,"upgradeItemHrid":"/items/rainbow_gauntlets","inputItems":[{"itemHrid":"/items/panda_fluff","count":10}],"outputItems":[{"itemHrid":"/items/panda_gloves","count":1}],"monsterSpawnRates":null,"sortIndex":105},"/actions/cheesesmithing/pincer_gloves":{"hrid":"/actions/cheesesmithing/pincer_gloves","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Pincer Gloves","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":28},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1600},"dropTable":null,"upgradeItemHrid":"/items/azure_gauntlets","inputItems":[{"itemHrid":"/items/crab_pincer","count":2}],"outputItems":[{"itemHrid":"/items/pincer_gloves","count":1}],"monsterSpawnRates":null,"sortIndex":52},"/actions/cheesesmithing/polar_bear_gloves":{"hrid":"/actions/cheesesmithing/polar_bear_gloves","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Polar Bear Shoes","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":10000},"dropTable":null,"upgradeItemHrid":"/items/rainbow_boots","inputItems":[{"itemHrid":"/items/polar_bear_fluff","count":10}],"outputItems":[{"itemHrid":"/items/polar_bear_shoes","count":1}],"monsterSpawnRates":null,"sortIndex":108},"/actions/cheesesmithing/rainbow_boots":{"hrid":"/actions/cheesesmithing/rainbow_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":65},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1560},"dropTable":null,"upgradeItemHrid":"/items/crimson_boots","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":52}],"outputItems":[{"itemHrid":"/items/rainbow_boots","count":1}],"monsterSpawnRates":null,"sortIndex":94},"/actions/cheesesmithing/rainbow_brush":{"hrid":"/actions/cheesesmithing/rainbow_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_brush","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_brush","count":1}],"monsterSpawnRates":null,"sortIndex":99},"/actions/cheesesmithing/rainbow_buckler":{"hrid":"/actions/cheesesmithing/rainbow_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":72},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2340},"dropTable":null,"upgradeItemHrid":"/items/crimson_buckler","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":78}],"outputItems":[{"itemHrid":"/items/rainbow_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":110},"/actions/cheesesmithing/rainbow_bulwark":{"hrid":"/actions/cheesesmithing/rainbow_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":75},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3900},"dropTable":null,"upgradeItemHrid":"/items/crimson_bulwark","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":130}],"outputItems":[{"itemHrid":"/items/rainbow_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":113},"/actions/cheesesmithing/rainbow_cheese":{"hrid":"/actions/cheesesmithing/rainbow_cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":65},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/rainbow_milk","count":2}],"outputItems":[{"itemHrid":"/items/rainbow_cheese","count":1}],"monsterSpawnRates":null,"sortIndex":93},"/actions/cheesesmithing/rainbow_enhancer":{"hrid":"/actions/cheesesmithing/rainbow_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_enhancer","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":104},"/actions/cheesesmithing/rainbow_gauntlets":{"hrid":"/actions/cheesesmithing/rainbow_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":66},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1560},"dropTable":null,"upgradeItemHrid":"/items/crimson_gauntlets","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":52}],"outputItems":[{"itemHrid":"/items/rainbow_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":95},"/actions/cheesesmithing/rainbow_hammer":{"hrid":"/actions/cheesesmithing/rainbow_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_hammer","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":101},"/actions/cheesesmithing/rainbow_helmet":{"hrid":"/actions/cheesesmithing/rainbow_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":71},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_helmet","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":109},"/actions/cheesesmithing/rainbow_mace":{"hrid":"/actions/cheesesmithing/rainbow_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":69},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2340},"dropTable":null,"upgradeItemHrid":"/items/crimson_mace","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":78}],"outputItems":[{"itemHrid":"/items/rainbow_mace","count":1}],"monsterSpawnRates":null,"sortIndex":98},"/actions/cheesesmithing/rainbow_plate_body":{"hrid":"/actions/cheesesmithing/rainbow_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":74},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3510},"dropTable":null,"upgradeItemHrid":"/items/crimson_plate_body","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":117}],"outputItems":[{"itemHrid":"/items/rainbow_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":112},"/actions/cheesesmithing/rainbow_plate_legs":{"hrid":"/actions/cheesesmithing/rainbow_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":73},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2730},"dropTable":null,"upgradeItemHrid":"/items/crimson_plate_legs","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":91}],"outputItems":[{"itemHrid":"/items/rainbow_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":111},"/actions/cheesesmithing/rainbow_pot":{"hrid":"/actions/cheesesmithing/rainbow_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_pot","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_pot","count":1}],"monsterSpawnRates":null,"sortIndex":103},"/actions/cheesesmithing/rainbow_shears":{"hrid":"/actions/cheesesmithing/rainbow_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_shears","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_shears","count":1}],"monsterSpawnRates":null,"sortIndex":100},"/actions/cheesesmithing/rainbow_spatula":{"hrid":"/actions/cheesesmithing/rainbow_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":70},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1950},"dropTable":null,"upgradeItemHrid":"/items/crimson_spatula","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":65}],"outputItems":[{"itemHrid":"/items/rainbow_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":102},"/actions/cheesesmithing/rainbow_spear":{"hrid":"/actions/cheesesmithing/rainbow_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":67},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2340},"dropTable":null,"upgradeItemHrid":"/items/crimson_spear","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":78}],"outputItems":[{"itemHrid":"/items/rainbow_spear","count":1}],"monsterSpawnRates":null,"sortIndex":96},"/actions/cheesesmithing/rainbow_sword":{"hrid":"/actions/cheesesmithing/rainbow_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/rainbow","name":"Rainbow Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":68},"baseTimeCost":32000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2340},"dropTable":null,"upgradeItemHrid":"/items/crimson_sword","inputItems":[{"itemHrid":"/items/rainbow_cheese","count":78}],"outputItems":[{"itemHrid":"/items/rainbow_sword","count":1}],"monsterSpawnRates":null,"sortIndex":97},"/actions/cheesesmithing/snail_shell_helmet":{"hrid":"/actions/cheesesmithing/snail_shell_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Snail Shell Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":26},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":1600},"dropTable":null,"upgradeItemHrid":"/items/azure_helmet","inputItems":[{"itemHrid":"/items/snail_shell","count":2}],"outputItems":[{"itemHrid":"/items/snail_shell_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":49},"/actions/cheesesmithing/snake_fang_dirk":{"hrid":"/actions/cheesesmithing/snake_fang_dirk","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Snake Fang Dirk","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":600},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/verdant_cheese","count":30},{"itemHrid":"/items/snake_fang","count":10}],"outputItems":[{"itemHrid":"/items/snake_fang_dirk","count":1}],"monsterSpawnRates":null,"sortIndex":30},"/actions/cheesesmithing/turtle_shell_body":{"hrid":"/actions/cheesesmithing/turtle_shell_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Turtle Shell Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":32},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":3000},"dropTable":null,"upgradeItemHrid":"/items/azure_plate_body","inputItems":[{"itemHrid":"/items/turtle_shell","count":3}],"outputItems":[{"itemHrid":"/items/turtle_shell_body","count":1}],"monsterSpawnRates":null,"sortIndex":56},"/actions/cheesesmithing/turtle_shell_legs":{"hrid":"/actions/cheesesmithing/turtle_shell_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Turtle Shell Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":32},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":2000},"dropTable":null,"upgradeItemHrid":"/items/azure_plate_legs","inputItems":[{"itemHrid":"/items/turtle_shell","count":2}],"outputItems":[{"itemHrid":"/items/turtle_shell_legs","count":1}],"monsterSpawnRates":null,"sortIndex":55},"/actions/cheesesmithing/vampire_fang_dirk":{"hrid":"/actions/cheesesmithing/vampire_fang_dirk","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Vampire Fang Dirk","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":48000},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/holy_cheese","count":400},{"itemHrid":"/items/vampire_fang","count":20}],"outputItems":[{"itemHrid":"/items/vampire_fang_dirk","count":1}],"monsterSpawnRates":null,"sortIndex":126},"/actions/cheesesmithing/verdant_boots":{"hrid":"/actions/cheesesmithing/verdant_boots","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Boots","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":10},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":72},"dropTable":null,"upgradeItemHrid":"/items/cheese_boots","inputItems":[{"itemHrid":"/items/verdant_cheese","count":12}],"outputItems":[{"itemHrid":"/items/verdant_boots","count":1}],"monsterSpawnRates":null,"sortIndex":18},"/actions/cheesesmithing/verdant_brush":{"hrid":"/actions/cheesesmithing/verdant_brush","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Brush","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_brush","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_brush","count":1}],"monsterSpawnRates":null,"sortIndex":24},"/actions/cheesesmithing/verdant_buckler":{"hrid":"/actions/cheesesmithing/verdant_buckler","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Buckler","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":17},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":108},"dropTable":null,"upgradeItemHrid":"/items/cheese_buckler","inputItems":[{"itemHrid":"/items/verdant_cheese","count":18}],"outputItems":[{"itemHrid":"/items/verdant_buckler","count":1}],"monsterSpawnRates":null,"sortIndex":32},"/actions/cheesesmithing/verdant_bulwark":{"hrid":"/actions/cheesesmithing/verdant_bulwark","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Bulwark","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":20},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":180},"dropTable":null,"upgradeItemHrid":"/items/cheese_bulwark","inputItems":[{"itemHrid":"/items/verdant_cheese","count":30}],"outputItems":[{"itemHrid":"/items/verdant_bulwark","count":1}],"monsterSpawnRates":null,"sortIndex":37},"/actions/cheesesmithing/verdant_cheese":{"hrid":"/actions/cheesesmithing/verdant_cheese","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Cheese","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":10},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":6},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/verdant_milk","count":2}],"outputItems":[{"itemHrid":"/items/verdant_cheese","count":1}],"monsterSpawnRates":null,"sortIndex":17},"/actions/cheesesmithing/verdant_enhancer":{"hrid":"/actions/cheesesmithing/verdant_enhancer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Enhancer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_enhancer","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_enhancer","count":1}],"monsterSpawnRates":null,"sortIndex":29},"/actions/cheesesmithing/verdant_gauntlets":{"hrid":"/actions/cheesesmithing/verdant_gauntlets","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Gauntlets","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":11},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":72},"dropTable":null,"upgradeItemHrid":"/items/cheese_gauntlets","inputItems":[{"itemHrid":"/items/verdant_cheese","count":12}],"outputItems":[{"itemHrid":"/items/verdant_gauntlets","count":1}],"monsterSpawnRates":null,"sortIndex":20},"/actions/cheesesmithing/verdant_hammer":{"hrid":"/actions/cheesesmithing/verdant_hammer","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Hammer","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_hammer","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_hammer","count":1}],"monsterSpawnRates":null,"sortIndex":26},"/actions/cheesesmithing/verdant_helmet":{"hrid":"/actions/cheesesmithing/verdant_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":16},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_helmet","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":31},"/actions/cheesesmithing/verdant_mace":{"hrid":"/actions/cheesesmithing/verdant_mace","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Mace","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":14},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":108},"dropTable":null,"upgradeItemHrid":"/items/cheese_mace","inputItems":[{"itemHrid":"/items/verdant_cheese","count":18}],"outputItems":[{"itemHrid":"/items/verdant_mace","count":1}],"monsterSpawnRates":null,"sortIndex":23},"/actions/cheesesmithing/verdant_plate_body":{"hrid":"/actions/cheesesmithing/verdant_plate_body","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Plate Body","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":19},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":162},"dropTable":null,"upgradeItemHrid":"/items/cheese_plate_body","inputItems":[{"itemHrid":"/items/verdant_cheese","count":27}],"outputItems":[{"itemHrid":"/items/verdant_plate_body","count":1}],"monsterSpawnRates":null,"sortIndex":34},"/actions/cheesesmithing/verdant_plate_legs":{"hrid":"/actions/cheesesmithing/verdant_plate_legs","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Plate Legs","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":18},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":126},"dropTable":null,"upgradeItemHrid":"/items/cheese_plate_legs","inputItems":[{"itemHrid":"/items/verdant_cheese","count":21}],"outputItems":[{"itemHrid":"/items/verdant_plate_legs","count":1}],"monsterSpawnRates":null,"sortIndex":33},"/actions/cheesesmithing/verdant_pot":{"hrid":"/actions/cheesesmithing/verdant_pot","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Pot","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_pot","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_pot","count":1}],"monsterSpawnRates":null,"sortIndex":28},"/actions/cheesesmithing/verdant_shears":{"hrid":"/actions/cheesesmithing/verdant_shears","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Shears","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_shears","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_shears","count":1}],"monsterSpawnRates":null,"sortIndex":25},"/actions/cheesesmithing/verdant_spatula":{"hrid":"/actions/cheesesmithing/verdant_spatula","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Spatula","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":15},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":90},"dropTable":null,"upgradeItemHrid":"/items/cheese_spatula","inputItems":[{"itemHrid":"/items/verdant_cheese","count":15}],"outputItems":[{"itemHrid":"/items/verdant_spatula","count":1}],"monsterSpawnRates":null,"sortIndex":27},"/actions/cheesesmithing/verdant_spear":{"hrid":"/actions/cheesesmithing/verdant_spear","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Spear","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":12},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":108},"dropTable":null,"upgradeItemHrid":"/items/cheese_spear","inputItems":[{"itemHrid":"/items/verdant_cheese","count":18}],"outputItems":[{"itemHrid":"/items/verdant_spear","count":1}],"monsterSpawnRates":null,"sortIndex":21},"/actions/cheesesmithing/verdant_sword":{"hrid":"/actions/cheesesmithing/verdant_sword","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/verdant","name":"Verdant Sword","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":13},"baseTimeCost":18000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":108},"dropTable":null,"upgradeItemHrid":"/items/cheese_sword","inputItems":[{"itemHrid":"/items/verdant_cheese","count":18}],"outputItems":[{"itemHrid":"/items/verdant_sword","count":1}],"monsterSpawnRates":null,"sortIndex":22},"/actions/cheesesmithing/vision_helmet":{"hrid":"/actions/cheesesmithing/vision_helmet","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Vision Helmet","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":56},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":6000},"dropTable":null,"upgradeItemHrid":"/items/crimson_helmet","inputItems":[{"itemHrid":"/items/goggles","count":1}],"outputItems":[{"itemHrid":"/items/vision_helmet","count":1}],"monsterSpawnRates":null,"sortIndex":87},"/actions/cheesesmithing/vision_shield":{"hrid":"/actions/cheesesmithing/vision_shield","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Vision Shield","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":56},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":7200},"dropTable":null,"upgradeItemHrid":"/items/crimson_buckler","inputItems":[{"itemHrid":"/items/magnifying_glass","count":1}],"outputItems":[{"itemHrid":"/items/vision_shield","count":1}],"monsterSpawnRates":null,"sortIndex":88},"/actions/cheesesmithing/werewolf_slasher":{"hrid":"/actions/cheesesmithing/werewolf_slasher","function":"/action_functions/production","type":"/action_types/cheesesmithing","category":"/action_categories/cheesesmithing/special","name":"Werewolf Slasher","levelRequirement":{"skillHrid":"/skills/cheesesmithing","level":85},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"/skills/cheesesmithing","value":48000},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/holy_cheese","count":400},{"itemHrid":"/items/werewolf_claw","count":20}],"outputItems":[{"itemHrid":"/items/werewolf_slasher","count":1}],"monsterSpawnRates":null,"sortIndex":127},"/actions/combat/alligator":{"hrid":"/actions/combat/alligator","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/swamp_planet","name":"Sherlock","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/alligator"],"rate":1}],"sortIndex":9},"/actions/combat/aqua_planet":{"hrid":"/actions/combat/aqua_planet","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/aqua_planet","name":"Aqua Planet","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/sea_snail","/combat_monsters/sea_snail","/combat_monsters/sea_snail"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/sea_snail","/combat_monsters/sea_snail","/combat_monsters/crab"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/crab","/combat_monsters/crab"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/crab","/combat_monsters/crab","/combat_monsters/crab"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/sea_snail","/combat_monsters/crab","/combat_monsters/nom_nom"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/nom_nom","/combat_monsters/nom_nom"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/sea_snail","/combat_monsters/crab","/combat_monsters/turtle"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/nom_nom","/combat_monsters/turtle"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/turtle","/combat_monsters/turtle"],"rate":0.1}],"sortIndex":15},"/actions/combat/bear_with_it":{"hrid":"/actions/combat/bear_with_it","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/bear_with_it","name":"Bear With It","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/gummy_bear","/combat_monsters/gummy_bear","/combat_monsters/gummy_bear"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/panda","/combat_monsters/panda"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/black_bear","/combat_monsters/black_bear"],"rate":0.125},{"combatMonsterHrids":["/combat_monsters/black_bear","/combat_monsters/grizzly_bear"],"rate":0.125},{"combatMonsterHrids":["/combat_monsters/grizzly_bear","/combat_monsters/grizzly_bear"],"rate":0.125},{"combatMonsterHrids":["/combat_monsters/polar_bear","/combat_monsters/polar_bear"],"rate":0.125},{"combatMonsterHrids":["/combat_monsters/gummy_bear","/combat_monsters/polar_bear","/combat_monsters/gummy_bear"],"rate":0.1}],"sortIndex":29},"/actions/combat/black_bear":{"hrid":"/actions/combat/black_bear","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/bear_with_it","name":"Black Bear","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/black_bear"],"rate":1}],"sortIndex":26},"/actions/combat/crab":{"hrid":"/actions/combat/crab","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/aqua_planet","name":"I Pinch","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/crab"],"rate":1}],"sortIndex":12},"/actions/combat/eye":{"hrid":"/actions/combat/eye","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/planet_of_the_eyes","name":"Eye","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/eye"],"rate":1}],"sortIndex":20},"/actions/combat/eyes":{"hrid":"/actions/combat/eyes","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/planet_of_the_eyes","name":"Eyes","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/eyes"],"rate":1}],"sortIndex":21},"/actions/combat/fly":{"hrid":"/actions/combat/fly","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/smelly_planet","name":"Fly","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/fly"],"rate":1}],"sortIndex":1},"/actions/combat/frog":{"hrid":"/actions/combat/frog","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/swamp_planet","name":"Frogger","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/frog"],"rate":1}],"sortIndex":6},"/actions/combat/gobo_planet":{"hrid":"/actions/combat/gobo_planet","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/gobo_planet","name":"Gobo Planet","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/gobo_stabby","/combat_monsters/gobo_slashy"],"rate":0.3},{"combatMonsterHrids":["/combat_monsters/gobo_slashy","/combat_monsters/gobo_smashy"],"rate":0.3},{"combatMonsterHrids":["/combat_monsters/gobo_smashy","/combat_monsters/gobo_stabby"],"rate":0.3},{"combatMonsterHrids":["/combat_monsters/gobo_stabby","/combat_monsters/gobo_slashy","/combat_monsters/gobo_smashy"],"rate":0.1}],"sortIndex":19},"/actions/combat/gobo_slashy":{"hrid":"/actions/combat/gobo_slashy","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/gobo_planet","name":"Slashy","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/gobo_slashy"],"rate":1}],"sortIndex":17},"/actions/combat/gobo_smashy":{"hrid":"/actions/combat/gobo_smashy","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/gobo_planet","name":"Smashy","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/gobo_smashy"],"rate":1}],"sortIndex":18},"/actions/combat/gobo_stabby":{"hrid":"/actions/combat/gobo_stabby","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/gobo_planet","name":"Stabby","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/gobo_stabby"],"rate":1}],"sortIndex":16},"/actions/combat/grizzly_bear":{"hrid":"/actions/combat/grizzly_bear","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/bear_with_it","name":"Grizzly Bear","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/grizzly_bear"],"rate":1}],"sortIndex":27},"/actions/combat/gummy_bear":{"hrid":"/actions/combat/gummy_bear","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/bear_with_it","name":"Gummy Bear","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/gummy_bear"],"rate":1}],"sortIndex":24},"/actions/combat/nom_nom":{"hrid":"/actions/combat/nom_nom","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/aqua_planet","name":"Nom Nom","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/nom_nom"],"rate":1}],"sortIndex":13},"/actions/combat/panda":{"hrid":"/actions/combat/panda","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/bear_with_it","name":"Panda","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/panda"],"rate":1}],"sortIndex":25},"/actions/combat/planet_of_the_eyes":{"hrid":"/actions/combat/planet_of_the_eyes","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/planet_of_the_eyes","name":"Planet Of The Eyes","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/eye","/combat_monsters/eye","/combat_monsters/eye"],"rate":0.15},{"combatMonsterHrids":["/combat_monsters/eye","/combat_monsters/eyes"],"rate":0.15},{"combatMonsterHrids":["/combat_monsters/eyes","/combat_monsters/eyes"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/eye","/combat_monsters/veyes"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/eyes","/combat_monsters/veyes"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/eye","/combat_monsters/eyes","/combat_monsters/veyes"],"rate":0.1}],"sortIndex":23},"/actions/combat/polar_bear":{"hrid":"/actions/combat/polar_bear","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/bear_with_it","name":"Polar Bear","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/polar_bear"],"rate":1}],"sortIndex":28},"/actions/combat/rat":{"hrid":"/actions/combat/rat","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/smelly_planet","name":"Jerry","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/rat"],"rate":1}],"sortIndex":2},"/actions/combat/sea_snail":{"hrid":"/actions/combat/sea_snail","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/aqua_planet","name":"Gary","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/sea_snail"],"rate":1}],"sortIndex":11},"/actions/combat/skunk":{"hrid":"/actions/combat/skunk","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/smelly_planet","name":"Skunk","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/skunk"],"rate":1}],"sortIndex":3},"/actions/combat/slimy":{"hrid":"/actions/combat/slimy","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/smelly_planet","name":"Slimy","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/slimy"],"rate":1}],"sortIndex":4},"/actions/combat/smelly_planet":{"hrid":"/actions/combat/smelly_planet","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/smelly_planet","name":"Smelly Planet","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/fly","/combat_monsters/fly","/combat_monsters/fly"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/fly","/combat_monsters/rat","/combat_monsters/rat","/combat_monsters/fly"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/skunk","/combat_monsters/skunk"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/rat","/combat_monsters/rat","/combat_monsters/rat"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/skunk","/combat_monsters/skunk","/combat_monsters/skunk"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/fly","/combat_monsters/slimy","/combat_monsters/rat","/combat_monsters/fly"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/slimy","/combat_monsters/slimy"],"rate":0.1}],"sortIndex":5},"/actions/combat/snake":{"hrid":"/actions/combat/snake","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/swamp_planet","name":"Thnake","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/snake"],"rate":1}],"sortIndex":7},"/actions/combat/swamp_planet":{"hrid":"/actions/combat/swamp_planet","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/swamp_planet","name":"Swamp Planet","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/frog","/combat_monsters/frog","/combat_monsters/frog"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/snake","/combat_monsters/snake"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/frog","/combat_monsters/frog","/combat_monsters/snake"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/frog","/combat_monsters/snake","/combat_monsters/swampy"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/swampy","/combat_monsters/swampy"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/snake","/combat_monsters/alligator","/combat_monsters/snake"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/snake","/combat_monsters/swampy","/combat_monsters/alligator"],"rate":0.1},{"combatMonsterHrids":["/combat_monsters/frog","/combat_monsters/frog","/combat_monsters/frog","/combat_monsters/alligator"],"rate":0.1}],"sortIndex":10},"/actions/combat/swampy":{"hrid":"/actions/combat/swampy","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/swamp_planet","name":"Swampy","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/swampy"],"rate":1}],"sortIndex":8},"/actions/combat/turtle":{"hrid":"/actions/combat/turtle","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/aqua_planet","name":"Turuto","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/turtle"],"rate":1}],"sortIndex":14},"/actions/combat/twilight_zone":{"hrid":"/actions/combat/twilight_zone","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/twilight_zone","name":"Twilight Zone","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/zombie","/combat_monsters/zombie"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/zombie","/combat_monsters/zombie","/combat_monsters/zombie"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/vampire","/combat_monsters/vampire"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/vampire","/combat_monsters/werewolf"],"rate":0.2},{"combatMonsterHrids":["/combat_monsters/werewolf","/combat_monsters/werewolf"],"rate":0.2}],"sortIndex":33},"/actions/combat/vampire":{"hrid":"/actions/combat/vampire","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/twilight_zone","name":"Vampire","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/vampire"],"rate":1}],"sortIndex":31},"/actions/combat/veyes":{"hrid":"/actions/combat/veyes","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/planet_of_the_eyes","name":"Veyes","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/veyes"],"rate":1}],"sortIndex":22},"/actions/combat/werewolf":{"hrid":"/actions/combat/werewolf","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/twilight_zone","name":"Werewolf","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/werewolf"],"rate":1}],"sortIndex":32},"/actions/combat/zombie":{"hrid":"/actions/combat/zombie","function":"/action_functions/combat","type":"/action_types/combat","category":"/action_categories/combat/twilight_zone","name":"Zombie","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":30000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":[{"combatMonsterHrids":["/combat_monsters/zombie"],"rate":1}],"sortIndex":30},"/actions/cooking/apple_gummy":{"hrid":"/actions/cooking/apple_gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Apple Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":10},"baseTimeCost":6500000000,"experienceGain":{"skillHrid":"/skills/cooking","value":6},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6},{"itemHrid":"/items/apple","count":1}],"outputItems":[{"itemHrid":"/items/apple_gummy","count":1}],"monsterSpawnRates":null,"sortIndex":7},"/actions/cooking/apple_yogurt":{"hrid":"/actions/cooking/apple_yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Apple Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":10},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":10},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/verdant_milk","count":1},{"itemHrid":"/items/apple","count":1}],"outputItems":[{"itemHrid":"/items/apple_yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":8},"/actions/cooking/blackberry_cake":{"hrid":"/actions/cooking/blackberry_cake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Blackberry Cake","levelRequirement":{"skillHrid":"/skills/cooking","level":20},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":20},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/azure_milk","count":1},{"itemHrid":"/items/blackberry","count":2}],"outputItems":[{"itemHrid":"/items/blackberry_cake","count":1}],"monsterSpawnRates":null,"sortIndex":10},"/actions/cooking/blackberry_donut":{"hrid":"/actions/cooking/blackberry_donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Blackberry Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":20},"baseTimeCost":7000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":12},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4},{"itemHrid":"/items/blackberry","count":2}],"outputItems":[{"itemHrid":"/items/blackberry_donut","count":1}],"monsterSpawnRates":null,"sortIndex":9},"/actions/cooking/blueberry_cake":{"hrid":"/actions/cooking/blueberry_cake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Blueberry Cake","levelRequirement":{"skillHrid":"/skills/cooking","level":10},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":10},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/verdant_milk","count":1},{"itemHrid":"/items/blueberry","count":2}],"outputItems":[{"itemHrid":"/items/blueberry_cake","count":1}],"monsterSpawnRates":null,"sortIndex":6},"/actions/cooking/blueberry_donut":{"hrid":"/actions/cooking/blueberry_donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Blueberry Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":10},"baseTimeCost":6500000000,"experienceGain":{"skillHrid":"/skills/cooking","value":6},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4},{"itemHrid":"/items/blueberry","count":2}],"outputItems":[{"itemHrid":"/items/blueberry_donut","count":1}],"monsterSpawnRates":null,"sortIndex":5},"/actions/cooking/cupcake":{"hrid":"/actions/cooking/cupcake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Cupcake","levelRequirement":{"skillHrid":"/skills/cooking","level":1},"baseTimeCost":7000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":5},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/milk","count":1}],"outputItems":[{"itemHrid":"/items/cupcake","count":1}],"monsterSpawnRates":null,"sortIndex":2},"/actions/cooking/donut":{"hrid":"/actions/cooking/donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":1},"baseTimeCost":6000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":3},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4}],"outputItems":[{"itemHrid":"/items/donut","count":1}],"monsterSpawnRates":null,"sortIndex":1},"/actions/cooking/dragon_fruit_gummy":{"hrid":"/actions/cooking/dragon_fruit_gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Dragon Fruit Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":65},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6},{"itemHrid":"/items/dragon_fruit","count":1}],"outputItems":[{"itemHrid":"/items/dragon_fruit_gummy","count":1}],"monsterSpawnRates":null,"sortIndex":23},"/actions/cooking/dragon_fruit_yogurt":{"hrid":"/actions/cooking/dragon_fruit_yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Dragon Fruit Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":65},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":50},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/rainbow_milk","count":1},{"itemHrid":"/items/dragon_fruit","count":1}],"outputItems":[{"itemHrid":"/items/dragon_fruit_yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":24},"/actions/cooking/gummy":{"hrid":"/actions/cooking/gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":1},"baseTimeCost":6000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":3},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6}],"outputItems":[{"itemHrid":"/items/gummy","count":1}],"monsterSpawnRates":null,"sortIndex":3},"/actions/cooking/marsberry_cake":{"hrid":"/actions/cooking/marsberry_cake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Marsberry Cake","levelRequirement":{"skillHrid":"/skills/cooking","level":65},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":50},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/rainbow_milk","count":1},{"itemHrid":"/items/marsberry","count":2}],"outputItems":[{"itemHrid":"/items/marsberry_cake","count":1}],"monsterSpawnRates":null,"sortIndex":22},"/actions/cooking/marsberry_donut":{"hrid":"/actions/cooking/marsberry_donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Marsberry Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":65},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4},{"itemHrid":"/items/marsberry","count":2}],"outputItems":[{"itemHrid":"/items/marsberry_donut","count":1}],"monsterSpawnRates":null,"sortIndex":21},"/actions/cooking/mooberry_cake":{"hrid":"/actions/cooking/mooberry_cake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Mooberry Cake","levelRequirement":{"skillHrid":"/skills/cooking","level":50},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":40},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/crimson_milk","count":1},{"itemHrid":"/items/mooberry","count":2}],"outputItems":[{"itemHrid":"/items/mooberry_cake","count":1}],"monsterSpawnRates":null,"sortIndex":18},"/actions/cooking/mooberry_donut":{"hrid":"/actions/cooking/mooberry_donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Mooberry Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":50},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4},{"itemHrid":"/items/mooberry","count":2}],"outputItems":[{"itemHrid":"/items/mooberry_donut","count":1}],"monsterSpawnRates":null,"sortIndex":17},"/actions/cooking/orange_gummy":{"hrid":"/actions/cooking/orange_gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Orange Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":20},"baseTimeCost":7000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":12},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6},{"itemHrid":"/items/orange","count":1}],"outputItems":[{"itemHrid":"/items/orange_gummy","count":1}],"monsterSpawnRates":null,"sortIndex":11},"/actions/cooking/orange_yogurt":{"hrid":"/actions/cooking/orange_yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Orange Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":20},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":20},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/azure_milk","count":1},{"itemHrid":"/items/orange","count":1}],"outputItems":[{"itemHrid":"/items/orange_yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":12},"/actions/cooking/peach_gummy":{"hrid":"/actions/cooking/peach_gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Peach Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":50},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":24},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6},{"itemHrid":"/items/peach","count":1}],"outputItems":[{"itemHrid":"/items/peach_gummy","count":1}],"monsterSpawnRates":null,"sortIndex":19},"/actions/cooking/peach_yogurt":{"hrid":"/actions/cooking/peach_yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Peach Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":50},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":40},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/crimson_milk","count":1},{"itemHrid":"/items/peach","count":1}],"outputItems":[{"itemHrid":"/items/peach_yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":20},"/actions/cooking/plum_gummy":{"hrid":"/actions/cooking/plum_gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Plum Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":35},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":18},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6},{"itemHrid":"/items/plum","count":1}],"outputItems":[{"itemHrid":"/items/plum_gummy","count":1}],"monsterSpawnRates":null,"sortIndex":15},"/actions/cooking/plum_yogurt":{"hrid":"/actions/cooking/plum_yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Plum Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":35},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/burble_milk","count":1},{"itemHrid":"/items/plum","count":1}],"outputItems":[{"itemHrid":"/items/plum_yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":16},"/actions/cooking/spaceberry_cake":{"hrid":"/actions/cooking/spaceberry_cake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Spaceberry Cake","levelRequirement":{"skillHrid":"/skills/cooking","level":80},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":60},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/holy_milk","count":1},{"itemHrid":"/items/spaceberry","count":2}],"outputItems":[{"itemHrid":"/items/spaceberry_cake","count":1}],"monsterSpawnRates":null,"sortIndex":26},"/actions/cooking/spaceberry_donut":{"hrid":"/actions/cooking/spaceberry_donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Spaceberry Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":80},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4},{"itemHrid":"/items/spaceberry","count":2}],"outputItems":[{"itemHrid":"/items/spaceberry_donut","count":1}],"monsterSpawnRates":null,"sortIndex":25},"/actions/cooking/star_fruit_gummy":{"hrid":"/actions/cooking/star_fruit_gummy","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_mana","name":"Star Fruit Gummy","levelRequirement":{"skillHrid":"/skills/cooking","level":80},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":36},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":6},{"itemHrid":"/items/star_fruit","count":1}],"outputItems":[{"itemHrid":"/items/star_fruit_gummy","count":1}],"monsterSpawnRates":null,"sortIndex":27},"/actions/cooking/star_fruit_yogurt":{"hrid":"/actions/cooking/star_fruit_yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Star Fruit Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":80},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":60},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/holy_milk","count":1},{"itemHrid":"/items/star_fruit","count":1}],"outputItems":[{"itemHrid":"/items/star_fruit_yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":28},"/actions/cooking/strawberry_cake":{"hrid":"/actions/cooking/strawberry_cake","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/heal_over_time","name":"Strawberry Cake","levelRequirement":{"skillHrid":"/skills/cooking","level":35},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":30},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":2},{"itemHrid":"/items/burble_milk","count":1},{"itemHrid":"/items/strawberry","count":2}],"outputItems":[{"itemHrid":"/items/strawberry_cake","count":1}],"monsterSpawnRates":null,"sortIndex":14},"/actions/cooking/strawberry_donut":{"hrid":"/actions/cooking/strawberry_donut","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/instant_heal","name":"Strawberry Donut","levelRequirement":{"skillHrid":"/skills/cooking","level":35},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":18},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/egg","count":1},{"itemHrid":"/items/wheat","count":1},{"itemHrid":"/items/sugar","count":4},{"itemHrid":"/items/strawberry","count":2}],"outputItems":[{"itemHrid":"/items/strawberry_donut","count":1}],"monsterSpawnRates":null,"sortIndex":13},"/actions/cooking/yogurt":{"hrid":"/actions/cooking/yogurt","function":"/action_functions/production","type":"/action_types/cooking","category":"/action_categories/cooking/mana_over_time","name":"Yogurt","levelRequirement":{"skillHrid":"/skills/cooking","level":1},"baseTimeCost":7000000000,"experienceGain":{"skillHrid":"/skills/cooking","value":5},"dropTable":null,"upgradeItemHrid":"","inputItems":[{"itemHrid":"/items/sugar","count":3},{"itemHrid":"/items/milk","count":1}],"outputItems":[{"itemHrid":"/items/yogurt","count":1}],"monsterSpawnRates":null,"sortIndex":4},"/actions/enhancing/enhance":{"hrid":"/actions/enhancing/enhance","function":"/action_functions/enhancing","type":"/action_types/enhancing","category":"","name":"Enhance","levelRequirement":{"skillHrid":"/skills/enhancing","level":1},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":0},"/actions/foraging/apple":{"hrid":"/actions/foraging/apple","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/shimmering_lake","name":"Apple","levelRequirement":{"skillHrid":"/skills/foraging","level":10},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":10},"dropTable":[{"itemHrid":"/items/apple","dropRate":1,"minCount":1,"maxCount":4}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":6},"/actions/foraging/arabica_coffee_bean":{"hrid":"/actions/foraging/arabica_coffee_bean","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/shimmering_lake","name":"Arabica Coffee Bean","levelRequirement":{"skillHrid":"/skills/foraging","level":10},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":10},"dropTable":[{"itemHrid":"/items/arabica_coffee_bean","dropRate":1,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":7},"/actions/foraging/asteroid_belt":{"hrid":"/actions/foraging/asteroid_belt","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/asteroid_belt","name":"Asteroid Belt","levelRequirement":{"skillHrid":"/skills/foraging","level":80},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":60},"dropTable":[{"itemHrid":"/items/spaceberry","dropRate":0.4,"minCount":1,"maxCount":8},{"itemHrid":"/items/star_fruit","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/spacia_coffee_bean","dropRate":0.4,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":28},"/actions/foraging/blackberry":{"hrid":"/actions/foraging/blackberry","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/misty_forest","name":"Blackberry","levelRequirement":{"skillHrid":"/skills/foraging","level":20},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":20},"dropTable":[{"itemHrid":"/items/blackberry","dropRate":1,"minCount":1,"maxCount":8}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":9},"/actions/foraging/blueberry":{"hrid":"/actions/foraging/blueberry","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/shimmering_lake","name":"Blueberry","levelRequirement":{"skillHrid":"/skills/foraging","level":10},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":10},"dropTable":[{"itemHrid":"/items/blueberry","dropRate":1,"minCount":1,"maxCount":8}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":5},"/actions/foraging/burble_beach":{"hrid":"/actions/foraging/burble_beach","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/burble_beach","name":"Burble Beach","levelRequirement":{"skillHrid":"/skills/foraging","level":35},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":30},"dropTable":[{"itemHrid":"/items/strawberry","dropRate":0.4,"minCount":1,"maxCount":8},{"itemHrid":"/items/plum","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/liberica_coffee_bean","dropRate":0.4,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":16},"/actions/foraging/dragon_fruit":{"hrid":"/actions/foraging/dragon_fruit","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/olympus_mons","name":"Dragon Fruit","levelRequirement":{"skillHrid":"/skills/foraging","level":65},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":50},"dropTable":[{"itemHrid":"/items/dragon_fruit","dropRate":1,"minCount":1,"maxCount":4}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":22},"/actions/foraging/egg":{"hrid":"/actions/foraging/egg","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/farmland","name":"Egg","levelRequirement":{"skillHrid":"/skills/foraging","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":5},"dropTable":[{"itemHrid":"/items/egg","dropRate":1,"minCount":1,"maxCount":6}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":1},"/actions/foraging/excelsa_coffee_bean":{"hrid":"/actions/foraging/excelsa_coffee_bean","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/silly_cow_valley","name":"Excelsa Coffee Bean","levelRequirement":{"skillHrid":"/skills/foraging","level":50},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":40},"dropTable":[{"itemHrid":"/items/excelsa_coffee_bean","dropRate":1,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":19},"/actions/foraging/farmland":{"hrid":"/actions/foraging/farmland","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/farmland","name":"Farmland","levelRequirement":{"skillHrid":"/skills/foraging","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":5},"dropTable":[{"itemHrid":"/items/egg","dropRate":0.4,"minCount":1,"maxCount":6},{"itemHrid":"/items/wheat","dropRate":0.4,"minCount":1,"maxCount":6},{"itemHrid":"/items/sugar","dropRate":0.4,"minCount":1,"maxCount":14}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":4},"/actions/foraging/fieriosa_coffee_bean":{"hrid":"/actions/foraging/fieriosa_coffee_bean","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/olympus_mons","name":"Fieriosa Coffee Bean","levelRequirement":{"skillHrid":"/skills/foraging","level":65},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":50},"dropTable":[{"itemHrid":"/items/fieriosa_coffee_bean","dropRate":1,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":23},"/actions/foraging/liberica_coffee_bean":{"hrid":"/actions/foraging/liberica_coffee_bean","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/burble_beach","name":"Liberica Coffee Bean","levelRequirement":{"skillHrid":"/skills/foraging","level":35},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":30},"dropTable":[{"itemHrid":"/items/liberica_coffee_bean","dropRate":1,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":15},"/actions/foraging/marsberry":{"hrid":"/actions/foraging/marsberry","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/olympus_mons","name":"Marsberry","levelRequirement":{"skillHrid":"/skills/foraging","level":65},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":50},"dropTable":[{"itemHrid":"/items/marsberry","dropRate":1,"minCount":1,"maxCount":8}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":21},"/actions/foraging/misty_forest":{"hrid":"/actions/foraging/misty_forest","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/misty_forest","name":"Misty Forest","levelRequirement":{"skillHrid":"/skills/foraging","level":20},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":20},"dropTable":[{"itemHrid":"/items/blackberry","dropRate":0.4,"minCount":1,"maxCount":8},{"itemHrid":"/items/orange","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/robusta_coffee_bean","dropRate":0.4,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":12},"/actions/foraging/mooberry":{"hrid":"/actions/foraging/mooberry","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/silly_cow_valley","name":"Mooberry","levelRequirement":{"skillHrid":"/skills/foraging","level":50},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":40},"dropTable":[{"itemHrid":"/items/mooberry","dropRate":1,"minCount":1,"maxCount":8}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":17},"/actions/foraging/olympus_mons":{"hrid":"/actions/foraging/olympus_mons","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/olympus_mons","name":"Olympus Mons","levelRequirement":{"skillHrid":"/skills/foraging","level":65},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":50},"dropTable":[{"itemHrid":"/items/marsberry","dropRate":0.4,"minCount":1,"maxCount":8},{"itemHrid":"/items/dragon_fruit","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/fieriosa_coffee_bean","dropRate":0.4,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":24},"/actions/foraging/orange":{"hrid":"/actions/foraging/orange","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/misty_forest","name":"Orange","levelRequirement":{"skillHrid":"/skills/foraging","level":20},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":20},"dropTable":[{"itemHrid":"/items/orange","dropRate":1,"minCount":1,"maxCount":4}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":10},"/actions/foraging/peach":{"hrid":"/actions/foraging/peach","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/silly_cow_valley","name":"Peach","levelRequirement":{"skillHrid":"/skills/foraging","level":50},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":40},"dropTable":[{"itemHrid":"/items/peach","dropRate":1,"minCount":1,"maxCount":4}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":18},"/actions/foraging/plum":{"hrid":"/actions/foraging/plum","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/burble_beach","name":"Plum","levelRequirement":{"skillHrid":"/skills/foraging","level":35},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":30},"dropTable":[{"itemHrid":"/items/plum","dropRate":1,"minCount":1,"maxCount":4}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":14},"/actions/foraging/robusta_coffee_bean":{"hrid":"/actions/foraging/robusta_coffee_bean","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/misty_forest","name":"Robusta Coffee Bean","levelRequirement":{"skillHrid":"/skills/foraging","level":20},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":20},"dropTable":[{"itemHrid":"/items/robusta_coffee_bean","dropRate":1,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":11},"/actions/foraging/shimmering_lake":{"hrid":"/actions/foraging/shimmering_lake","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/shimmering_lake","name":"Shimmering Lake","levelRequirement":{"skillHrid":"/skills/foraging","level":10},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":10},"dropTable":[{"itemHrid":"/items/blueberry","dropRate":0.4,"minCount":1,"maxCount":8},{"itemHrid":"/items/apple","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/arabica_coffee_bean","dropRate":0.4,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":8},"/actions/foraging/silly_cow_valley":{"hrid":"/actions/foraging/silly_cow_valley","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/silly_cow_valley","name":"Silly Cow Valley","levelRequirement":{"skillHrid":"/skills/foraging","level":50},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":40},"dropTable":[{"itemHrid":"/items/mooberry","dropRate":0.4,"minCount":1,"maxCount":8},{"itemHrid":"/items/peach","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/excelsa_coffee_bean","dropRate":0.4,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":20},"/actions/foraging/spaceberry":{"hrid":"/actions/foraging/spaceberry","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/asteroid_belt","name":"Spaceberry","levelRequirement":{"skillHrid":"/skills/foraging","level":80},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":60},"dropTable":[{"itemHrid":"/items/spaceberry","dropRate":1,"minCount":1,"maxCount":8}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":25},"/actions/foraging/spacia_coffee_bean":{"hrid":"/actions/foraging/spacia_coffee_bean","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/asteroid_belt","name":"Spacia Coffee Bean","levelRequirement":{"skillHrid":"/skills/foraging","level":80},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":60},"dropTable":[{"itemHrid":"/items/spacia_coffee_bean","dropRate":1,"minCount":1,"maxCount":1}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":27},"/actions/foraging/star_fruit":{"hrid":"/actions/foraging/star_fruit","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/asteroid_belt","name":"Star Fruit","levelRequirement":{"skillHrid":"/skills/foraging","level":80},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":60},"dropTable":[{"itemHrid":"/items/star_fruit","dropRate":1,"minCount":1,"maxCount":4}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":26},"/actions/foraging/strawberry":{"hrid":"/actions/foraging/strawberry","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/burble_beach","name":"Strawberry","levelRequirement":{"skillHrid":"/skills/foraging","level":35},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":30},"dropTable":[{"itemHrid":"/items/strawberry","dropRate":1,"minCount":1,"maxCount":8}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":13},"/actions/foraging/sugar":{"hrid":"/actions/foraging/sugar","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/farmland","name":"Sugar","levelRequirement":{"skillHrid":"/skills/foraging","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":5},"dropTable":[{"itemHrid":"/items/sugar","dropRate":1,"minCount":1,"maxCount":14}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":3},"/actions/foraging/wheat":{"hrid":"/actions/foraging/wheat","function":"/action_functions/gathering","type":"/action_types/foraging","category":"/action_categories/foraging/farmland","name":"Wheat","levelRequirement":{"skillHrid":"/skills/foraging","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/foraging","value":5},"dropTable":[{"itemHrid":"/items/wheat","dropRate":1,"minCount":1,"maxCount":6}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":2},"/actions/idle/idle":{"hrid":"/actions/idle/idle","function":"/action_functions/idle","type":"/action_types/idle","category":"","name":"Idle","levelRequirement":{"skillHrid":"","level":0},"baseTimeCost":0,"experienceGain":{"skillHrid":"","value":0},"dropTable":null,"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":0},"/actions/milking/azure_cow":{"hrid":"/actions/milking/azure_cow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Azure Cow","levelRequirement":{"skillHrid":"/skills/milking","level":20},"baseTimeCost":10000000000,"experienceGain":{"skillHrid":"/skills/milking","value":20},"dropTable":[{"itemHrid":"/items/azure_milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":3},"/actions/milking/burble_cow":{"hrid":"/actions/milking/burble_cow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Burble Cow","levelRequirement":{"skillHrid":"/skills/milking","level":35},"baseTimeCost":12000000000,"experienceGain":{"skillHrid":"/skills/milking","value":30},"dropTable":[{"itemHrid":"/items/burble_milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":4},"/actions/milking/cow":{"hrid":"/actions/milking/cow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Cow","levelRequirement":{"skillHrid":"/skills/milking","level":1},"baseTimeCost":8000000000,"experienceGain":{"skillHrid":"/skills/milking","value":5},"dropTable":[{"itemHrid":"/items/milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":1},"/actions/milking/crimson_cow":{"hrid":"/actions/milking/crimson_cow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Crimson Cow","levelRequirement":{"skillHrid":"/skills/milking","level":50},"baseTimeCost":14000000000,"experienceGain":{"skillHrid":"/skills/milking","value":40},"dropTable":[{"itemHrid":"/items/crimson_milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":5},"/actions/milking/holy_cow":{"hrid":"/actions/milking/holy_cow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Holy Cow","levelRequirement":{"skillHrid":"/skills/milking","level":80},"baseTimeCost":24000000000,"experienceGain":{"skillHrid":"/skills/milking","value":60},"dropTable":[{"itemHrid":"/items/holy_milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":7},"/actions/milking/unicow":{"hrid":"/actions/milking/unicow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Unicow","levelRequirement":{"skillHrid":"/skills/milking","level":65},"baseTimeCost":16000000000,"experienceGain":{"skillHrid":"/skills/milking","value":50},"dropTable":[{"itemHrid":"/items/rainbow_milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":6},"/actions/milking/verdant_cow":{"hrid":"/actions/milking/verdant_cow","function":"/action_functions/gathering","type":"/action_types/milking","category":"","name":"Verdant Cow","levelRequirement":{"skillHrid":"/skills/milking","level":10},"baseTimeCost":9000000000,"experienceGain":{"skillHrid":"/skills/milking","value":10},"dropTable":[{"itemHrid":"/items/verdant_milk","dropRate":1,"minCount":1,"maxCount":3}],"upgradeItemHrid":"","inputItems":null,"outputItems":null,"monsterSpawnRates":null,"sortIndex":2}}');

/***/ }),

/***/ "./src/combatsimulator/data/combatMonsterDetailMap.json":
/*!**************************************************************!*\
  !*** ./src/combatsimulator/data/combatMonsterDetailMap.json ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/combat_monsters/alligator":{"hrid":"/combat_monsters/alligator","name":"Sherlock","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":300,"maxHitpoints":300,"currentManapoints":300,"maxManapoints":300,"stabAccuracyRating":30,"slashAccuracyRating":30,"smashAccuracyRating":30,"stabMaxDamage":37.1,"slashMaxDamage":37.1,"smashMaxDamage":37.1,"stabEvasionRating":36.4,"slashEvasionRating":36.4,"smashEvasionRating":36.4,"staminaLevel":20,"intelligenceLevel":20,"attackLevel":20,"powerLevel":25,"defenseLevel":16,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.06,"slashDamage":0.06,"smashDamage":0.06,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/scratch","level":10}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":50,"maxCount":250},{"itemHrid":"/items/blueberry","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/blackberry","dropRate":0.05,"minCount":1,"maxCount":4},{"itemHrid":"/items/apple","dropRate":0.3,"minCount":1,"maxCount":5},{"itemHrid":"/items/orange","dropRate":0.15,"minCount":1,"maxCount":3},{"itemHrid":"/items/gator_vest","dropRate":0.003,"minCount":1,"maxCount":1},{"itemHrid":"/items/swamp_essence","dropRate":0.6,"minCount":4,"maxCount":12},{"itemHrid":"/items/scratch","dropRate":0.01,"minCount":1,"maxCount":1}]},"/combat_monsters/black_bear":{"hrid":"/combat_monsters/black_bear","name":"Black Bear","combatDetails":{"combatStyleHrid":"/combat_styles/stab","currentHitpoints":1300,"maxHitpoints":1300,"currentManapoints":1300,"maxManapoints":1300,"stabAccuracyRating":150,"slashAccuracyRating":150,"smashAccuracyRating":150,"stabMaxDamage":150,"slashMaxDamage":150,"smashMaxDamage":150,"stabEvasionRating":169,"slashEvasionRating":130,"smashEvasionRating":130,"staminaLevel":120,"intelligenceLevel":120,"attackLevel":140,"powerLevel":140,"defenseLevel":120,"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.3,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/frenzy","level":4}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":340,"maxCount":1700},{"itemHrid":"/items/mooberry","dropRate":0.1,"minCount":1,"maxCount":4},{"itemHrid":"/items/marsberry","dropRate":0.15,"minCount":1,"maxCount":4},{"itemHrid":"/items/spaceberry","dropRate":0.05,"minCount":1,"maxCount":4},{"itemHrid":"/items/black_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/red_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":2},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.15,"minCount":1,"maxCount":1},{"itemHrid":"/items/black_bear_fluff","dropRate":0.002,"minCount":1,"maxCount":1},{"itemHrid":"/items/bear_essence","dropRate":0.4,"minCount":2,"maxCount":6},{"itemHrid":"/items/frenzy","dropRate":0.0006,"minCount":1,"maxCount":1}]},"/combat_monsters/crab":{"hrid":"/combat_monsters/crab","name":"I Pinch","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":400,"maxHitpoints":400,"currentManapoints":400,"maxManapoints":400,"stabAccuracyRating":35,"slashAccuracyRating":35,"smashAccuracyRating":35,"stabMaxDamage":40,"slashMaxDamage":40,"smashMaxDamage":40,"stabEvasionRating":50,"slashEvasionRating":70,"smashEvasionRating":40,"staminaLevel":30,"intelligenceLevel":30,"attackLevel":25,"powerLevel":30,"defenseLevel":40,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0.4,"smashEvasion":-0.2,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/smack","level":5}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":60,"maxCount":300},{"itemHrid":"/items/orange","dropRate":0.15,"minCount":1,"maxCount":5},{"itemHrid":"/items/plum","dropRate":0.05,"minCount":1,"maxCount":3},{"itemHrid":"/items/crab_pincer","dropRate":0.005,"minCount":1,"maxCount":1},{"itemHrid":"/items/aqua_essence","dropRate":0.4,"minCount":2,"maxCount":6},{"itemHrid":"/items/smack","dropRate":0.01,"minCount":1,"maxCount":1}]},"/combat_monsters/eye":{"hrid":"/combat_monsters/eye","name":"Eye","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":990,"maxHitpoints":990,"currentManapoints":990,"maxManapoints":990,"stabAccuracyRating":99,"slashAccuracyRating":99,"smashAccuracyRating":99,"stabMaxDamage":99,"slashMaxDamage":99,"smashMaxDamage":99,"stabEvasionRating":74.25,"slashEvasionRating":99,"smashEvasionRating":99,"staminaLevel":89,"intelligenceLevel":89,"attackLevel":89,"powerLevel":89,"defenseLevel":89,"combatStats":{"attackInterval":2800000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":-0.25,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/precision","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":200,"maxCount":1000},{"itemHrid":"/items/azure_cheese","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/burble_cheese","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/crimson_cheese","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/strawberry","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/mooberry","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/marsberry","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/plum","dropRate":0.1,"minCount":1,"maxCount":5},{"itemHrid":"/items/peach","dropRate":0.15,"minCount":1,"maxCount":5},{"itemHrid":"/items/dragon_fruit","dropRate":0.05,"minCount":1,"maxCount":5},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.45,"minCount":1,"maxCount":3},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.6,"minCount":1,"maxCount":3},{"itemHrid":"/items/red_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/eyessence","dropRate":1,"minCount":1,"maxCount":1},{"itemHrid":"/items/precision","dropRate":0.001,"minCount":1,"maxCount":1}]},"/combat_monsters/eyes":{"hrid":"/combat_monsters/eyes","name":"Eyes","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":1110,"maxHitpoints":1110,"currentManapoints":1110,"maxManapoints":1110,"stabAccuracyRating":111,"slashAccuracyRating":111,"smashAccuracyRating":111,"stabMaxDamage":111,"slashMaxDamage":111,"smashMaxDamage":111,"stabEvasionRating":83.25,"slashEvasionRating":111,"smashEvasionRating":111,"staminaLevel":101,"intelligenceLevel":101,"attackLevel":101,"powerLevel":101,"defenseLevel":101,"combatStats":{"attackInterval":2800000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":-0.25,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/precision","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":240,"maxCount":1200},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.15,"minCount":1,"maxCount":1},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":1},{"itemHrid":"/items/red_tea_leaf","dropRate":0.1,"minCount":1,"maxCount":1},{"itemHrid":"/items/goggles","dropRate":0.0005,"minCount":1,"maxCount":1},{"itemHrid":"/items/eyessence","dropRate":1,"minCount":2,"maxCount":2},{"itemHrid":"/items/precision","dropRate":0.0015,"minCount":1,"maxCount":1}]},"/combat_monsters/fly":{"hrid":"/combat_monsters/fly","name":"Fly","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":30,"maxHitpoints":30,"currentManapoints":30,"maxManapoints":30,"stabAccuracyRating":11,"slashAccuracyRating":11,"smashAccuracyRating":7.699999999999999,"stabMaxDamage":11,"slashMaxDamage":11,"smashMaxDamage":7.699999999999999,"stabEvasionRating":11,"slashEvasionRating":11,"smashEvasionRating":11,"staminaLevel":-7,"intelligenceLevel":-7,"attackLevel":1,"powerLevel":1,"defenseLevel":1,"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":-0.3,"stabDamage":0,"slashDamage":0,"smashDamage":-0.3,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":8,"maxCount":40}]},"/combat_monsters/frog":{"hrid":"/combat_monsters/frog","name":"Frogger","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":150,"maxHitpoints":150,"currentManapoints":150,"maxManapoints":150,"stabAccuracyRating":25,"slashAccuracyRating":25,"smashAccuracyRating":25,"stabMaxDamage":20,"slashMaxDamage":20,"smashMaxDamage":20,"stabEvasionRating":25,"slashEvasionRating":25,"smashEvasionRating":25,"staminaLevel":5,"intelligenceLevel":5,"attackLevel":15,"powerLevel":10,"defenseLevel":15,"combatStats":{"attackInterval":3200000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/smack","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":24,"maxCount":120},{"itemHrid":"/items/egg","dropRate":0.3,"minCount":1,"maxCount":2},{"itemHrid":"/items/green_tea_leaf","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/black_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":3},{"itemHrid":"/items/swamp_essence","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/smack","dropRate":0.007,"minCount":1,"maxCount":1}]},"/combat_monsters/gobo_slashy":{"hrid":"/combat_monsters/gobo_slashy","name":"Slashy","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":800,"maxHitpoints":800,"currentManapoints":300,"maxManapoints":300,"stabAccuracyRating":50,"slashAccuracyRating":95,"smashAccuracyRating":50,"stabMaxDamage":50,"slashMaxDamage":95,"smashMaxDamage":50,"stabEvasionRating":70,"slashEvasionRating":70,"smashEvasionRating":70,"staminaLevel":70,"intelligenceLevel":20,"attackLevel":40,"powerLevel":40,"defenseLevel":60,"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0.9,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.9,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/cleave","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":160,"maxCount":800},{"itemHrid":"/items/blackberry","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/strawberry","dropRate":0.15,"minCount":1,"maxCount":6},{"itemHrid":"/items/mooberry","dropRate":0.05,"minCount":1,"maxCount":5},{"itemHrid":"/items/gobo_slasher","dropRate":0.001,"minCount":1,"maxCount":1},{"itemHrid":"/items/gobo_essence","dropRate":0.5,"minCount":3,"maxCount":9},{"itemHrid":"/items/black_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/cleave","dropRate":0.001,"minCount":1,"maxCount":1}]},"/combat_monsters/gobo_smashy":{"hrid":"/combat_monsters/gobo_smashy","name":"Smashy","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":800,"maxHitpoints":800,"currentManapoints":300,"maxManapoints":300,"stabAccuracyRating":50,"slashAccuracyRating":50,"smashAccuracyRating":55.00000000000001,"stabMaxDamage":55,"slashMaxDamage":55,"smashMaxDamage":145.75,"stabEvasionRating":70,"slashEvasionRating":70,"smashEvasionRating":70,"staminaLevel":70,"intelligenceLevel":20,"attackLevel":40,"powerLevel":45,"defenseLevel":60,"combatStats":{"attackInterval":3700000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.1,"stabDamage":0,"slashDamage":0,"smashDamage":1.65,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/berserk","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":160,"maxCount":800},{"itemHrid":"/items/orange","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/plum","dropRate":0.15,"minCount":1,"maxCount":6},{"itemHrid":"/items/peach","dropRate":0.05,"minCount":1,"maxCount":5},{"itemHrid":"/items/green_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/gobo_smasher","dropRate":0.001,"minCount":1,"maxCount":1},{"itemHrid":"/items/gobo_essence","dropRate":0.5,"minCount":3,"maxCount":9},{"itemHrid":"/items/berserk","dropRate":0.001,"minCount":1,"maxCount":1}]},"/combat_monsters/gobo_stabby":{"hrid":"/combat_monsters/gobo_stabby","name":"Stabby","combatDetails":{"combatStyleHrid":"/combat_styles/stab","currentHitpoints":800,"maxHitpoints":800,"currentManapoints":300,"maxManapoints":300,"stabAccuracyRating":150,"slashAccuracyRating":50,"smashAccuracyRating":50,"stabMaxDamage":44,"slashMaxDamage":40,"smashMaxDamage":40,"stabEvasionRating":70,"slashEvasionRating":70,"smashEvasionRating":70,"staminaLevel":70,"intelligenceLevel":20,"attackLevel":40,"powerLevel":30,"defenseLevel":60,"combatStats":{"attackInterval":2500000000,"stabAccuracy":2,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.1,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/pierce","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":160,"maxCount":800},{"itemHrid":"/items/burble_milk","dropRate":0.15,"minCount":2,"maxCount":10},{"itemHrid":"/items/crimson_milk","dropRate":0.05,"minCount":2,"maxCount":10},{"itemHrid":"/items/black_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/gobo_stabber","dropRate":0.001,"minCount":1,"maxCount":1},{"itemHrid":"/items/gobo_essence","dropRate":0.5,"minCount":3,"maxCount":9},{"itemHrid":"/items/pierce","dropRate":0.0015,"minCount":1,"maxCount":1}]},"/combat_monsters/grizzly_bear":{"hrid":"/combat_monsters/grizzly_bear","name":"Grizzly Bear","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":1400,"maxHitpoints":1400,"currentManapoints":1400,"maxManapoints":1400,"stabAccuracyRating":160,"slashAccuracyRating":160,"smashAccuracyRating":160,"stabMaxDamage":160,"slashMaxDamage":160,"smashMaxDamage":160,"stabEvasionRating":140,"slashEvasionRating":182,"smashEvasionRating":140,"staminaLevel":130,"intelligenceLevel":130,"attackLevel":150,"powerLevel":150,"defenseLevel":130,"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0.3,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/frenzy","level":7}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":380,"maxCount":1900},{"itemHrid":"/items/mooberry","dropRate":0.1,"minCount":1,"maxCount":6},{"itemHrid":"/items/marsberry","dropRate":0.15,"minCount":1,"maxCount":6},{"itemHrid":"/items/spaceberry","dropRate":0.05,"minCount":1,"maxCount":6},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/red_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":2},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.15,"minCount":1,"maxCount":1},{"itemHrid":"/items/grizzly_bear_fluff","dropRate":0.002,"minCount":1,"maxCount":1},{"itemHrid":"/items/bear_essence","dropRate":0.5,"minCount":3,"maxCount":9},{"itemHrid":"/items/frenzy","dropRate":0.0008,"minCount":1,"maxCount":1}]},"/combat_monsters/gummy_bear":{"hrid":"/combat_monsters/gummy_bear","name":"Gummy Bear","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":1200,"maxHitpoints":1200,"currentManapoints":1200,"maxManapoints":1200,"stabAccuracyRating":150,"slashAccuracyRating":150,"smashAccuracyRating":150,"stabMaxDamage":90,"slashMaxDamage":90,"smashMaxDamage":90,"stabEvasionRating":110,"slashEvasionRating":110,"smashEvasionRating":143,"staminaLevel":110,"intelligenceLevel":110,"attackLevel":140,"powerLevel":80,"defenseLevel":100,"combatStats":{"attackInterval":2600000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0.3,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/frenzy","level":1}],"dropTable":[{"itemHrid":"/items/sugar","dropRate":1,"minCount":50,"maxCount":250},{"itemHrid":"/items/apple_gummy","dropRate":0.5,"minCount":1,"maxCount":1},{"itemHrid":"/items/orange_gummy","dropRate":0.5,"minCount":1,"maxCount":1},{"itemHrid":"/items/plum_gummy","dropRate":0.5,"minCount":1,"maxCount":1},{"itemHrid":"/items/peach_gummy","dropRate":0.5,"minCount":1,"maxCount":1},{"itemHrid":"/items/dragon_fruit_gummy","dropRate":0.5,"minCount":1,"maxCount":1},{"itemHrid":"/items/bear_essence","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/frenzy","dropRate":0.0003,"minCount":1,"maxCount":1}]},"/combat_monsters/nom_nom":{"hrid":"/combat_monsters/nom_nom","name":"Nom Nom","combatDetails":{"combatStyleHrid":"/combat_styles/stab","currentHitpoints":480,"maxHitpoints":480,"currentManapoints":480,"maxManapoints":480,"stabAccuracyRating":44,"slashAccuracyRating":44,"smashAccuracyRating":55,"stabMaxDamage":55,"slashMaxDamage":55,"smashMaxDamage":55,"stabEvasionRating":55,"slashEvasionRating":55,"smashEvasionRating":55,"staminaLevel":38,"intelligenceLevel":38,"attackLevel":45,"powerLevel":45,"defenseLevel":45,"combatStats":{"attackInterval":3200000000,"stabAccuracy":-0.2,"slashAccuracy":-0.2,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/pierce","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":90,"maxCount":450},{"itemHrid":"/items/blackberry","dropRate":0.15,"minCount":1,"maxCount":12},{"itemHrid":"/items/strawberry","dropRate":0.05,"minCount":1,"maxCount":8},{"itemHrid":"/items/orange","dropRate":0.15,"minCount":1,"maxCount":10},{"itemHrid":"/items/plum","dropRate":0.05,"minCount":1,"maxCount":6},{"itemHrid":"/items/green_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/black_tea_leaf","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":3},{"itemHrid":"/items/aqua_essence","dropRate":0.6,"minCount":4,"maxCount":12},{"itemHrid":"/items/pierce","dropRate":0.001,"minCount":1,"maxCount":1}]},"/combat_monsters/panda":{"hrid":"/combat_monsters/panda","name":"Panda","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":1600,"maxHitpoints":1600,"currentManapoints":1600,"maxManapoints":1600,"stabAccuracyRating":140,"slashAccuracyRating":140,"smashAccuracyRating":140,"stabMaxDamage":140,"slashMaxDamage":140,"smashMaxDamage":140,"stabEvasionRating":160,"slashEvasionRating":160,"smashEvasionRating":208,"staminaLevel":150,"intelligenceLevel":150,"attackLevel":130,"powerLevel":130,"defenseLevel":150,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0.3,"armor":8,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/toughness","level":10}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":340,"maxCount":1700},{"itemHrid":"/items/wheat","dropRate":0.3,"minCount":1,"maxCount":15},{"itemHrid":"/items/egg","dropRate":0.3,"minCount":1,"maxCount":15},{"itemHrid":"/items/peach","dropRate":0.1,"minCount":1,"maxCount":5},{"itemHrid":"/items/dragon_fruit","dropRate":0.15,"minCount":1,"maxCount":5},{"itemHrid":"/items/star_fruit","dropRate":0.05,"minCount":1,"maxCount":5},{"itemHrid":"/items/green_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/red_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":2},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.15,"minCount":1,"maxCount":1},{"itemHrid":"/items/panda_fluff","dropRate":0.002,"minCount":1,"maxCount":1},{"itemHrid":"/items/bear_essence","dropRate":0.4,"minCount":2,"maxCount":6},{"itemHrid":"/items/toughness","dropRate":0.002,"minCount":1,"maxCount":1}]},"/combat_monsters/polar_bear":{"hrid":"/combat_monsters/polar_bear","name":"Polar Bear","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":1500,"maxHitpoints":1500,"currentManapoints":1500,"maxManapoints":1500,"stabAccuracyRating":170,"slashAccuracyRating":170,"smashAccuracyRating":170,"stabMaxDamage":170,"slashMaxDamage":170,"smashMaxDamage":170,"stabEvasionRating":150,"slashEvasionRating":150,"smashEvasionRating":195,"staminaLevel":140,"intelligenceLevel":140,"attackLevel":160,"powerLevel":160,"defenseLevel":140,"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0.3,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/frenzy","level":10}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":440,"maxCount":2200},{"itemHrid":"/items/crimson_milk","dropRate":0.1,"minCount":1,"maxCount":4},{"itemHrid":"/items/rainbow_milk","dropRate":0.15,"minCount":1,"maxCount":4},{"itemHrid":"/items/holy_milk","dropRate":0.05,"minCount":1,"maxCount":4},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/red_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":2},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.15,"minCount":1,"maxCount":1},{"itemHrid":"/items/polar_bear_fluff","dropRate":0.002,"minCount":1,"maxCount":1},{"itemHrid":"/items/bear_essence","dropRate":0.6,"minCount":4,"maxCount":12},{"itemHrid":"/items/frenzy","dropRate":0.001,"minCount":1,"maxCount":1}]},"/combat_monsters/rat":{"hrid":"/combat_monsters/rat","name":"Jerry","combatDetails":{"combatStyleHrid":"/combat_styles/stab","currentHitpoints":60,"maxHitpoints":60,"currentManapoints":100,"maxManapoints":100,"stabAccuracyRating":14,"slashAccuracyRating":14,"smashAccuracyRating":14,"stabMaxDamage":14,"slashMaxDamage":14,"smashMaxDamage":14,"stabEvasionRating":14,"slashEvasionRating":14,"smashEvasionRating":14,"staminaLevel":-4,"intelligenceLevel":0,"attackLevel":4,"powerLevel":4,"defenseLevel":4,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/poke","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":10,"maxCount":50},{"itemHrid":"/items/wheat","dropRate":0.3,"minCount":1,"maxCount":3},{"itemHrid":"/items/sugar","dropRate":0.3,"minCount":1,"maxCount":6},{"itemHrid":"/items/cheese","dropRate":0.2,"minCount":1,"maxCount":1},{"itemHrid":"/items/verdant_cheese","dropRate":0.1,"minCount":1,"maxCount":1},{"itemHrid":"/items/azure_cheese","dropRate":0.05,"minCount":1,"maxCount":1},{"itemHrid":"/items/poke","dropRate":0.005,"minCount":1,"maxCount":1}]},"/combat_monsters/sea_snail":{"hrid":"/combat_monsters/sea_snail","name":"Gary","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":350,"maxHitpoints":350,"currentManapoints":350,"maxManapoints":350,"stabAccuracyRating":32,"slashAccuracyRating":32,"smashAccuracyRating":32,"stabMaxDamage":32,"slashMaxDamage":32,"smashMaxDamage":32,"stabEvasionRating":38,"slashEvasionRating":53.199999999999996,"smashEvasionRating":30.400000000000002,"staminaLevel":25,"intelligenceLevel":25,"attackLevel":22,"powerLevel":22,"defenseLevel":28,"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0.4,"smashEvasion":-0.2,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/toughness","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":56,"maxCount":280},{"itemHrid":"/items/wheat","dropRate":0.3,"minCount":1,"maxCount":10},{"itemHrid":"/items/snail_shell","dropRate":0.006,"minCount":1,"maxCount":1},{"itemHrid":"/items/green_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":2},{"itemHrid":"/items/black_tea_leaf","dropRate":0.4,"minCount":1,"maxCount":2},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/aqua_essence","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/toughness","dropRate":0.001,"minCount":1,"maxCount":1}]},"/combat_monsters/skunk":{"hrid":"/combat_monsters/skunk","name":"Skunk","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":80,"maxHitpoints":80,"currentManapoints":100,"maxManapoints":100,"stabAccuracyRating":18,"slashAccuracyRating":18,"smashAccuracyRating":18,"stabMaxDamage":18,"slashMaxDamage":18,"smashMaxDamage":18,"stabEvasionRating":18,"slashEvasionRating":18,"smashEvasionRating":18,"staminaLevel":-2,"intelligenceLevel":0,"attackLevel":8,"powerLevel":8,"defenseLevel":8,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/scratch","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":14,"maxCount":70},{"itemHrid":"/items/blueberry","dropRate":0.2,"minCount":1,"maxCount":5},{"itemHrid":"/items/green_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":3},{"itemHrid":"/items/scratch","dropRate":0.005,"minCount":1,"maxCount":1}]},"/combat_monsters/slimy":{"hrid":"/combat_monsters/slimy","name":"Slimy","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":120,"maxHitpoints":120,"currentManapoints":120,"maxManapoints":120,"stabAccuracyRating":19,"slashAccuracyRating":19,"smashAccuracyRating":19,"stabMaxDamage":22,"slashMaxDamage":22,"smashMaxDamage":22,"stabEvasionRating":20,"slashEvasionRating":20,"smashEvasionRating":20,"staminaLevel":2,"intelligenceLevel":2,"attackLevel":9,"powerLevel":12,"defenseLevel":10,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/smack","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":20,"maxCount":100},{"itemHrid":"/items/apple","dropRate":0.2,"minCount":1,"maxCount":4},{"itemHrid":"/items/green_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":4},{"itemHrid":"/items/smack","dropRate":0.005,"minCount":1,"maxCount":1}]},"/combat_monsters/snake":{"hrid":"/combat_monsters/snake","name":"Thnake","combatDetails":{"combatStyleHrid":"/combat_styles/stab","currentHitpoints":200,"maxHitpoints":200,"currentManapoints":200,"maxManapoints":200,"stabAccuracyRating":24,"slashAccuracyRating":24,"smashAccuracyRating":24,"stabMaxDamage":26,"slashMaxDamage":26,"smashMaxDamage":26,"stabEvasionRating":28,"slashEvasionRating":19.599999999999998,"smashEvasionRating":28,"staminaLevel":10,"intelligenceLevel":10,"attackLevel":14,"powerLevel":16,"defenseLevel":18,"combatStats":{"attackInterval":3200000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":-0.3,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/poke","level":5}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":32,"maxCount":160},{"itemHrid":"/items/egg","dropRate":0.3,"minCount":1,"maxCount":4},{"itemHrid":"/items/snake_fang","dropRate":0.04,"minCount":1,"maxCount":1},{"itemHrid":"/items/swamp_essence","dropRate":0.4,"minCount":2,"maxCount":6},{"itemHrid":"/items/poke","dropRate":0.008,"minCount":1,"maxCount":1}]},"/combat_monsters/swampy":{"hrid":"/combat_monsters/swampy","name":"Swampy","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":260,"maxHitpoints":260,"currentManapoints":260,"maxManapoints":260,"stabAccuracyRating":28,"slashAccuracyRating":28,"smashAccuracyRating":28,"stabMaxDamage":26,"slashMaxDamage":26,"smashMaxDamage":26,"stabEvasionRating":32,"slashEvasionRating":32,"smashEvasionRating":22.4,"staminaLevel":16,"intelligenceLevel":16,"attackLevel":18,"powerLevel":16,"defenseLevel":22,"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":-0.3,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/sweep","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":44,"maxCount":220},{"itemHrid":"/items/blueberry","dropRate":0.3,"minCount":1,"maxCount":6},{"itemHrid":"/items/blackberry","dropRate":0.15,"minCount":1,"maxCount":4},{"itemHrid":"/items/apple","dropRate":0.1,"minCount":1,"maxCount":5},{"itemHrid":"/items/orange","dropRate":0.05,"minCount":1,"maxCount":3},{"itemHrid":"/items/green_tea_leaf","dropRate":0.4,"minCount":1,"maxCount":4},{"itemHrid":"/items/black_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":4},{"itemHrid":"/items/swamp_essence","dropRate":0.6,"minCount":3,"maxCount":9},{"itemHrid":"/items/sweep","dropRate":0.002,"minCount":1,"maxCount":1}]},"/combat_monsters/turtle":{"hrid":"/combat_monsters/turtle","name":"Turuto","combatDetails":{"combatStyleHrid":"/combat_styles/smash","currentHitpoints":700,"maxHitpoints":700,"currentManapoints":600,"maxManapoints":600,"stabAccuracyRating":50,"slashAccuracyRating":50,"smashAccuracyRating":50,"stabMaxDamage":65,"slashMaxDamage":65,"smashMaxDamage":65,"stabEvasionRating":65,"slashEvasionRating":91,"smashEvasionRating":52,"staminaLevel":60,"intelligenceLevel":50,"attackLevel":40,"powerLevel":55,"defenseLevel":55,"combatStats":{"attackInterval":3500000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0.4,"smashEvasion":-0.2,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/toughness","level":10}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":120,"maxCount":600},{"itemHrid":"/items/egg","dropRate":0.2,"minCount":1,"maxCount":10},{"itemHrid":"/items/orange","dropRate":0.1,"minCount":1,"maxCount":4},{"itemHrid":"/items/plum","dropRate":0.15,"minCount":1,"maxCount":5},{"itemHrid":"/items/peach","dropRate":0.05,"minCount":1,"maxCount":3},{"itemHrid":"/items/turtle_shell","dropRate":0.004,"minCount":1,"maxCount":1},{"itemHrid":"/items/aqua_essence","dropRate":0.6,"minCount":3,"maxCount":15},{"itemHrid":"/items/toughness","dropRate":0.0015,"minCount":1,"maxCount":1}]},"/combat_monsters/vampire":{"hrid":"/combat_monsters/vampire","name":"Vampire","combatDetails":{"combatStyleHrid":"/combat_styles/stab","currentHitpoints":2000,"maxHitpoints":2000,"currentManapoints":2000,"maxManapoints":2000,"stabAccuracyRating":260,"slashAccuracyRating":260,"smashAccuracyRating":260,"stabMaxDamage":200,"slashMaxDamage":200,"smashMaxDamage":200,"stabEvasionRating":260,"slashEvasionRating":260,"smashEvasionRating":260,"staminaLevel":190,"intelligenceLevel":190,"attackLevel":250,"powerLevel":190,"defenseLevel":250,"combatStats":{"attackInterval":2800000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0.02,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/vampirism","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":600,"maxCount":3000},{"itemHrid":"/items/red_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/twilight_essence","dropRate":0.5,"minCount":2,"maxCount":6},{"itemHrid":"/items/vampire_fang","dropRate":0.001,"minCount":1,"maxCount":1},{"itemHrid":"/items/vampirism","dropRate":0.0008,"minCount":1,"maxCount":1}]},"/combat_monsters/veyes":{"hrid":"/combat_monsters/veyes","name":"Veyes","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":1230,"maxHitpoints":1230,"currentManapoints":1230,"maxManapoints":1230,"stabAccuracyRating":123,"slashAccuracyRating":123,"smashAccuracyRating":123,"stabMaxDamage":123,"slashMaxDamage":123,"smashMaxDamage":123,"stabEvasionRating":92.25,"slashEvasionRating":123,"smashEvasionRating":123,"staminaLevel":113,"intelligenceLevel":113,"attackLevel":113,"powerLevel":113,"defenseLevel":113,"combatStats":{"attackInterval":2800000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":-0.25,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/precision","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":280,"maxCount":1400},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.15,"minCount":1,"maxCount":2},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/red_tea_leaf","dropRate":0.1,"minCount":1,"maxCount":2},{"itemHrid":"/items/magnifying_glass","dropRate":0.0005,"minCount":1,"maxCount":1},{"itemHrid":"/items/eyessence","dropRate":1,"minCount":5,"maxCount":5},{"itemHrid":"/items/precision","dropRate":0.002,"minCount":1,"maxCount":1}]},"/combat_monsters/werewolf":{"hrid":"/combat_monsters/werewolf","name":"Werewolf","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":2400,"maxHitpoints":2400,"currentManapoints":2400,"maxManapoints":2400,"stabAccuracyRating":230,"slashAccuracyRating":230,"smashAccuracyRating":230,"stabMaxDamage":230,"slashMaxDamage":230,"smashMaxDamage":230,"stabEvasionRating":210,"slashEvasionRating":210,"smashEvasionRating":210,"staminaLevel":230,"intelligenceLevel":230,"attackLevel":220,"powerLevel":220,"defenseLevel":200,"combatStats":{"attackInterval":2800000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/berserk","level":10},{"abilityHrid":"/abilities/maim","level":10}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":750,"maxCount":3750},{"itemHrid":"/items/red_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.2,"minCount":1,"maxCount":2},{"itemHrid":"/items/twilight_essence","dropRate":0.6,"minCount":3,"maxCount":9},{"itemHrid":"/items/werewolf_claw","dropRate":0.001,"minCount":1,"maxCount":1},{"itemHrid":"/items/berserk","dropRate":0.002,"minCount":1,"maxCount":1},{"itemHrid":"/items/maim","dropRate":0.0008,"minCount":1,"maxCount":1}]},"/combat_monsters/zombie":{"hrid":"/combat_monsters/zombie","name":"Zombie","combatDetails":{"combatStyleHrid":"/combat_styles/slash","currentHitpoints":1700,"maxHitpoints":1700,"currentManapoints":1700,"maxManapoints":1700,"stabAccuracyRating":190,"slashAccuracyRating":190,"smashAccuracyRating":190,"stabMaxDamage":200,"slashMaxDamage":200,"smashMaxDamage":200,"stabEvasionRating":200,"slashEvasionRating":200,"smashEvasionRating":200,"staminaLevel":160,"intelligenceLevel":160,"attackLevel":180,"powerLevel":190,"defenseLevel":190,"combatStats":{"attackInterval":3200000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0}},"abilities":[{"abilityHrid":"/abilities/toughness","level":10},{"abilityHrid":"/abilities/maim","level":1}],"dropTable":[{"itemHrid":"/items/coin","dropRate":1,"minCount":500,"maxCount":2500},{"itemHrid":"/items/green_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":5},{"itemHrid":"/items/black_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":5},{"itemHrid":"/items/burble_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":4},{"itemHrid":"/items/moolong_tea_leaf","dropRate":0.3,"minCount":1,"maxCount":4},{"itemHrid":"/items/red_tea_leaf","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/emp_tea_leaf","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/twilight_essence","dropRate":0.4,"minCount":1,"maxCount":3},{"itemHrid":"/items/toughness","dropRate":0.002,"minCount":1,"maxCount":1},{"itemHrid":"/items/maim","dropRate":0.0005,"minCount":1,"maxCount":1}]}}');

/***/ }),

/***/ "./src/combatsimulator/data/combatTriggerComparatorDetailMap.json":
/*!************************************************************************!*\
  !*** ./src/combatsimulator/data/combatTriggerComparatorDetailMap.json ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/combat_trigger_comparators/greater_than_equal":{"hrid":"/combat_trigger_comparators/greater_than_equal","name":">=","allowValue":true,"sortIndex":1},"/combat_trigger_comparators/is_active":{"hrid":"/combat_trigger_comparators/is_active","name":"Is Active","allowValue":false,"sortIndex":3},"/combat_trigger_comparators/is_inactive":{"hrid":"/combat_trigger_comparators/is_inactive","name":"Is Inactive","allowValue":false,"sortIndex":4},"/combat_trigger_comparators/less_than_equal":{"hrid":"/combat_trigger_comparators/less_than_equal","name":"<=","allowValue":true,"sortIndex":2}}');

/***/ }),

/***/ "./src/combatsimulator/data/combatTriggerConditionDetailMap.json":
/*!***********************************************************************!*\
  !*** ./src/combatsimulator/data/combatTriggerConditionDetailMap.json ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/combat_trigger_conditions/attack_coffee":{"hrid":"/combat_trigger_conditions/attack_coffee","name":"Attack Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":11},"/combat_trigger_conditions/berserk":{"hrid":"/combat_trigger_conditions/berserk","name":"Berserk","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":19},"/combat_trigger_conditions/current_hp":{"hrid":"/combat_trigger_conditions/current_hp","name":"Current Hp","isSingleTarget":true,"isMultiTarget":true,"allowedComparatorHrids":["/combat_trigger_comparators/greater_than_equal","/combat_trigger_comparators/less_than_equal"],"sortIndex":3},"/combat_trigger_conditions/current_mp":{"hrid":"/combat_trigger_conditions/current_mp","name":"Current Mp","isSingleTarget":true,"isMultiTarget":true,"allowedComparatorHrids":["/combat_trigger_comparators/greater_than_equal","/combat_trigger_comparators/less_than_equal"],"sortIndex":5},"/combat_trigger_conditions/defense_coffee":{"hrid":"/combat_trigger_conditions/defense_coffee","name":"Defense Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":10},"/combat_trigger_conditions/frenzy":{"hrid":"/combat_trigger_conditions/frenzy","name":"Frenzy","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":20},"/combat_trigger_conditions/intelligence_coffee_max_mp":{"hrid":"/combat_trigger_conditions/intelligence_coffee_max_mp","name":"Intelligence Coffee (Max MP)","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":8},"/combat_trigger_conditions/intelligence_coffee_mp_regen":{"hrid":"/combat_trigger_conditions/intelligence_coffee_mp_regen","name":"Intelligence Coffee (MP Regen)","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":9},"/combat_trigger_conditions/lucky_coffee":{"hrid":"/combat_trigger_conditions/lucky_coffee","name":"Lucky Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":15},"/combat_trigger_conditions/magic_coffee":{"hrid":"/combat_trigger_conditions/magic_coffee","name":"Magic Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":14},"/combat_trigger_conditions/missing_hp":{"hrid":"/combat_trigger_conditions/missing_hp","name":"Missing Hp","isSingleTarget":true,"isMultiTarget":true,"allowedComparatorHrids":["/combat_trigger_comparators/greater_than_equal","/combat_trigger_comparators/less_than_equal"],"sortIndex":2},"/combat_trigger_conditions/missing_mp":{"hrid":"/combat_trigger_conditions/missing_mp","name":"Missing Mp","isSingleTarget":true,"isMultiTarget":true,"allowedComparatorHrids":["/combat_trigger_comparators/greater_than_equal","/combat_trigger_comparators/less_than_equal"],"sortIndex":4},"/combat_trigger_conditions/number_of_active_units":{"hrid":"/combat_trigger_conditions/number_of_active_units","name":"# of Active Units","isSingleTarget":false,"isMultiTarget":true,"allowedComparatorHrids":["/combat_trigger_comparators/greater_than_equal","/combat_trigger_comparators/less_than_equal"],"sortIndex":1},"/combat_trigger_conditions/power_coffee":{"hrid":"/combat_trigger_conditions/power_coffee","name":"Power Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":12},"/combat_trigger_conditions/precision":{"hrid":"/combat_trigger_conditions/precision","name":"Precision","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":18},"/combat_trigger_conditions/ranged_coffee":{"hrid":"/combat_trigger_conditions/ranged_coffee","name":"Ranged Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":13},"/combat_trigger_conditions/stamina_coffee_hp_regen":{"hrid":"/combat_trigger_conditions/stamina_coffee_hp_regen","name":"Stamina Coffee (HP Regen)","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":7},"/combat_trigger_conditions/stamina_coffee_max_hp":{"hrid":"/combat_trigger_conditions/stamina_coffee_max_hp","name":"Stamina Coffee (Max HP)","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":6},"/combat_trigger_conditions/swiftness_coffee":{"hrid":"/combat_trigger_conditions/swiftness_coffee","name":"Swiftness Coffee","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":16},"/combat_trigger_conditions/toughness":{"hrid":"/combat_trigger_conditions/toughness","name":"Toughness","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":17},"/combat_trigger_conditions/vampirism":{"hrid":"/combat_trigger_conditions/vampirism","name":"Vampirism","isSingleTarget":true,"isMultiTarget":false,"allowedComparatorHrids":["/combat_trigger_comparators/is_active","/combat_trigger_comparators/is_inactive"],"sortIndex":21}}');

/***/ }),

/***/ "./src/combatsimulator/data/combatTriggerDependencyDetailMap.json":
/*!************************************************************************!*\
  !*** ./src/combatsimulator/data/combatTriggerDependencyDetailMap.json ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/combat_trigger_dependencies/all_allies":{"hrid":"/combat_trigger_dependencies/all_allies","name":"Allies\' Total","isSingleTarget":false,"isMultiTarget":true,"sortIndex":5},"/combat_trigger_dependencies/all_enemies":{"hrid":"/combat_trigger_dependencies/all_enemies","name":"Enemies\' Total","isSingleTarget":false,"isMultiTarget":true,"sortIndex":4},"/combat_trigger_dependencies/self":{"hrid":"/combat_trigger_dependencies/self","name":"My","isSingleTarget":true,"isMultiTarget":false,"sortIndex":1},"/combat_trigger_dependencies/targeted_ally":{"hrid":"/combat_trigger_dependencies/targeted_ally","name":"Target Ally\'s","isSingleTarget":true,"isMultiTarget":false,"sortIndex":3},"/combat_trigger_dependencies/targeted_enemy":{"hrid":"/combat_trigger_dependencies/targeted_enemy","name":"Target Enemy\'s","isSingleTarget":true,"isMultiTarget":false,"sortIndex":2}}');

/***/ }),

/***/ "./src/combatsimulator/data/enhancementLevelTotalMultiplierTable.json":
/*!****************************************************************************!*\
  !*** ./src/combatsimulator/data/enhancementLevelTotalMultiplierTable.json ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[0,1,2.1,3.3,4.6,6,7.5,9.1,10.8,12.600000000000001,14.500000000000002,16.5,18.6,20.8,23.1,25.5,28,30.6,33.300000000000004,36.1,39]');

/***/ }),

/***/ "./src/combatsimulator/data/itemDetailMap.json":
/*!*****************************************************!*\
  !*** ./src/combatsimulator/data/itemDetailMap.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/items/apple":{"hrid":"/items/apple","name":"Apple","categoryHrid":"/item_categories/resource","sellPrice":2,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":229},"/items/apple_gummy":{"hrid":"/items/apple_gummy","name":"Apple Gummy","categoryHrid":"/item_categories/food","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":80,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":80}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":17},"/items/apple_yogurt":{"hrid":"/items/apple_yogurt","name":"Apple Yogurt","categoryHrid":"/item_categories/food","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":100,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":100}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":24},"/items/aqua_essence":{"hrid":"/items/aqua_essence","name":"Aqua Essence","categoryHrid":"/item_categories/resource","sellPrice":16,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":260},"/items/arabica_coffee_bean":{"hrid":"/items/arabica_coffee_bean","name":"Arabica Coffee Bean","categoryHrid":"/item_categories/resource","sellPrice":4,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":235},"/items/artisan_tea":{"hrid":"/items/artisan_tea","name":"Artisan Tea","categoryHrid":"/item_categories/drink","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/cheesesmithing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/artisan_tea","typeHrid":"/buff_types/artisan","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000},{"sourceHrid":"/buff_sources/artisan_tea","typeHrid":"/buff_types/cheesesmithing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":-5,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":59},"/items/attack_coffee":{"hrid":"/items/attack_coffee","name":"Attack Coffee","categoryHrid":"/item_categories/drink","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/attack_coffee","typeHrid":"/buff_types/attack_level","ratioBoost":0.08,"ratioBoostLevelBonus":0,"flatBoost":1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/attack_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":33},"/items/azure_boots":{"hrid":"/items/azure_boots","name":"Azure Boots","categoryHrid":"/item_categories/equipment","sellPrice":864,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":3},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.16,"slashEvasion":0.16,"smashEvasion":0.16,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0032,"slashEvasion":0.0032,"smashEvasion":0.0032,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":152},"/items/azure_brush":{"hrid":"/items/azure_brush","name":"Azure Brush","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.3,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.006,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":166},"/items/azure_buckler":{"hrid":"/items/azure_buckler","name":"Azure Buckler","categoryHrid":"/item_categories/equipment","sellPrice":1296,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":4,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.08,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":108},"/items/azure_bulwark":{"hrid":"/items/azure_bulwark","name":"Azure Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":2160,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":7},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.12,"stabDamage":0,"slashDamage":0,"smashDamage":0.12,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":12,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0024,"stabDamage":0,"slashDamage":0,"smashDamage":0.0024,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.24,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":75},"/items/azure_cheese":{"hrid":"/items/azure_cheese","name":"Azure Cheese","categoryHrid":"/item_categories/resource","sellPrice":24,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":215},"/items/azure_enhancer":{"hrid":"/items/azure_enhancer","name":"Azure Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.012},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.00024}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":201},"/items/azure_gauntlets":{"hrid":"/items/azure_gauntlets","name":"Azure Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":864,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":3},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.16,"slashEvasion":0.16,"smashEvasion":0.16,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0032,"slashEvasion":0.0032,"smashEvasion":0.0032,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":143},"/items/azure_hammer":{"hrid":"/items/azure_hammer","name":"Azure Hammer","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.3,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.006,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":180},"/items/azure_helmet":{"hrid":"/items/azure_helmet","name":"Azure Helmet","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.2,"slashEvasion":0.2,"smashEvasion":0.2,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.004,"slashEvasion":0.004,"smashEvasion":0.004,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":117},"/items/azure_mace":{"hrid":"/items/azure_mace","name":"Azure Mace","categoryHrid":"/item_categories/equipment","sellPrice":1296,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":20}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.08,"stabDamage":0,"slashDamage":0,"smashDamage":0.52,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0016,"stabDamage":0,"slashDamage":0,"smashDamage":0.010400000000000001,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":92},"/items/azure_milk":{"hrid":"/items/azure_milk","name":"Azure Milk","categoryHrid":"/item_categories/resource","sellPrice":8,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":208},"/items/azure_plate_body":{"hrid":"/items/azure_plate_body","name":"Azure Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":1944,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":6},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.36,"slashEvasion":0.36,"smashEvasion":0.36,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0072,"slashEvasion":0.0072,"smashEvasion":0.0072,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":127},"/items/azure_plate_legs":{"hrid":"/items/azure_plate_legs","name":"Azure Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":1512,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":5},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.28,"slashEvasion":0.28,"smashEvasion":0.28,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.005600000000000001,"slashEvasion":0.005600000000000001,"smashEvasion":0.005600000000000001,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":135},"/items/azure_pot":{"hrid":"/items/azure_pot","name":"Azure Pot","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.3,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.006,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":194},"/items/azure_shears":{"hrid":"/items/azure_shears","name":"Azure Shears","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.3,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.006,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":173},"/items/azure_spatula":{"hrid":"/items/azure_spatula","name":"Azure Spatula","categoryHrid":"/item_categories/equipment","sellPrice":1080,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.3,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.006,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":187},"/items/azure_spear":{"hrid":"/items/azure_spear","name":"Azure Spear","categoryHrid":"/item_categories/equipment","sellPrice":1296,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":20}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":0.56,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.16,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.011200000000000002,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0032,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":90},"/items/azure_sword":{"hrid":"/items/azure_sword","name":"Azure Sword","categoryHrid":"/item_categories/equipment","sellPrice":1296,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/azure_cheese","count":4},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":20},{"skillHrid":"/skills/power","level":20}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.3,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.3,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.006,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.006,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":91},"/items/bear_essence":{"hrid":"/items/bear_essence","name":"Bear Essence","categoryHrid":"/item_categories/resource","sellPrice":54,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":263},"/items/berserk":{"hrid":"/items/berserk","name":"Berserk","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/berserk","levelRequirements":[{"skillHrid":"/skills/intelligence","level":30}],"experienceGain":500},"sortIndex":70},"/items/black_bear_fluff":{"hrid":"/items/black_bear_fluff","name":"Black Bear Fluff","categoryHrid":"/item_categories/resource","sellPrice":3000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":254},"/items/black_bear_shoes":{"hrid":"/items/black_bear_shoes","name":"Black Bear Shoes","categoryHrid":"/item_categories/equipment","sellPrice":60000,"isTradable":true,"itemLevel":70,"enhancementCosts":[{"itemHrid":"/items/bear_essence","count":8},{"itemHrid":"/items/rainbow_cheese","count":2},{"itemHrid":"/items/coin","count":405}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":70}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0.1,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.1,"slashDamage":0,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.002,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.002,"slashDamage":0,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":156},"/items/black_tea_leaf":{"hrid":"/items/black_tea_leaf","name":"Black Tea Leaf","categoryHrid":"/item_categories/resource","sellPrice":8,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":242},"/items/blackberry":{"hrid":"/items/blackberry","name":"Blackberry","categoryHrid":"/item_categories/resource","sellPrice":4,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":224},"/items/blackberry_cake":{"hrid":"/items/blackberry_cake","name":"Blackberry Cake","categoryHrid":"/item_categories/food","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":150,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":150}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":11},"/items/blackberry_donut":{"hrid":"/items/blackberry_donut","name":"Blackberry Donut","categoryHrid":"/item_categories/food","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":120,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":120}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":4},"/items/blessed_tea":{"hrid":"/items/blessed_tea","name":"Blessed Tea","categoryHrid":"/item_categories/drink","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/enhancing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/blessed_tea","typeHrid":"/buff_types/blessed","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.01,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":60},"/items/blueberry":{"hrid":"/items/blueberry","name":"Blueberry","categoryHrid":"/item_categories/resource","sellPrice":2,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":223},"/items/blueberry_cake":{"hrid":"/items/blueberry_cake","name":"Blueberry Cake","categoryHrid":"/item_categories/food","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":100,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":100}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":10},"/items/blueberry_donut":{"hrid":"/items/blueberry_donut","name":"Blueberry Donut","categoryHrid":"/item_categories/food","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":80,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":80}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":3},"/items/brewing_tea":{"hrid":"/items/brewing_tea","name":"Brewing Tea","categoryHrid":"/item_categories/drink","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/brewing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/brewing_tea","typeHrid":"/buff_types/brewing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":45},"/items/burble_boots":{"hrid":"/items/burble_boots","name":"Burble Boots","categoryHrid":"/item_categories/equipment","sellPrice":2160,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":3},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.24,"slashEvasion":0.24,"smashEvasion":0.24,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0048,"slashEvasion":0.0048,"smashEvasion":0.0048,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":153},"/items/burble_brush":{"hrid":"/items/burble_brush","name":"Burble Brush","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.45,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.009000000000000001,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":167},"/items/burble_buckler":{"hrid":"/items/burble_buckler","name":"Burble Buckler","categoryHrid":"/item_categories/equipment","sellPrice":3240,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":5},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":6,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.12,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":109},"/items/burble_bulwark":{"hrid":"/items/burble_bulwark","name":"Burble Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":5400,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":8},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.18,"stabDamage":0,"slashDamage":0,"smashDamage":0.18,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":18,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0036,"stabDamage":0,"slashDamage":0,"smashDamage":0.0036,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.36,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":76},"/items/burble_cheese":{"hrid":"/items/burble_cheese","name":"Burble Cheese","categoryHrid":"/item_categories/resource","sellPrice":36,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":216},"/items/burble_enhancer":{"hrid":"/items/burble_enhancer","name":"Burble Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.018},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.00035999999999999997}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":202},"/items/burble_gauntlets":{"hrid":"/items/burble_gauntlets","name":"Burble Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":2160,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":3},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.24,"slashEvasion":0.24,"smashEvasion":0.24,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0048,"slashEvasion":0.0048,"smashEvasion":0.0048,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":145},"/items/burble_hammer":{"hrid":"/items/burble_hammer","name":"Burble Hammer","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.45,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.009000000000000001,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":181},"/items/burble_helmet":{"hrid":"/items/burble_helmet","name":"Burble Helmet","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.3,"slashEvasion":0.3,"smashEvasion":0.3,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.006,"slashEvasion":0.006,"smashEvasion":0.006,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":119},"/items/burble_mace":{"hrid":"/items/burble_mace","name":"Burble Mace","categoryHrid":"/item_categories/equipment","sellPrice":3240,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":5},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":35}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.12,"stabDamage":0,"slashDamage":0,"smashDamage":0.78,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0024,"stabDamage":0,"slashDamage":0,"smashDamage":0.015600000000000001,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":95},"/items/burble_milk":{"hrid":"/items/burble_milk","name":"Burble Milk","categoryHrid":"/item_categories/resource","sellPrice":12,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":209},"/items/burble_plate_body":{"hrid":"/items/burble_plate_body","name":"Burble Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":4860,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":7},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.54,"slashEvasion":0.54,"smashEvasion":0.54,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0108,"slashEvasion":0.0108,"smashEvasion":0.0108,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":129},"/items/burble_plate_legs":{"hrid":"/items/burble_plate_legs","name":"Burble Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":3780,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":6},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.42,"slashEvasion":0.42,"smashEvasion":0.42,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0084,"slashEvasion":0.0084,"smashEvasion":0.0084,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":137},"/items/burble_pot":{"hrid":"/items/burble_pot","name":"Burble Pot","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.45,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.009000000000000001,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":195},"/items/burble_shears":{"hrid":"/items/burble_shears","name":"Burble Shears","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.45,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.009000000000000001,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":174},"/items/burble_spatula":{"hrid":"/items/burble_spatula","name":"Burble Spatula","categoryHrid":"/item_categories/equipment","sellPrice":2700,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":4},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":35}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.45,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.009000000000000001,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":188},"/items/burble_spear":{"hrid":"/items/burble_spear","name":"Burble Spear","categoryHrid":"/item_categories/equipment","sellPrice":3240,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":5},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":35}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":0.84,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.24,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.0168,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0048,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":93},"/items/burble_sword":{"hrid":"/items/burble_sword","name":"Burble Sword","categoryHrid":"/item_categories/equipment","sellPrice":3240,"isTradable":true,"itemLevel":35,"enhancementCosts":[{"itemHrid":"/items/burble_cheese","count":5},{"itemHrid":"/items/coin","count":151}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":35},{"skillHrid":"/skills/power","level":35}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.45,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.45,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.009000000000000001,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.009000000000000001,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":94},"/items/burble_tea_leaf":{"hrid":"/items/burble_tea_leaf","name":"Burble Tea Leaf","categoryHrid":"/item_categories/resource","sellPrice":12,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":243},"/items/cheese":{"hrid":"/items/cheese","name":"Cheese","categoryHrid":"/item_categories/resource","sellPrice":6,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":213},"/items/cheese_boots":{"hrid":"/items/cheese_boots","name":"Cheese Boots","categoryHrid":"/item_categories/equipment","sellPrice":48,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":2},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.08,"slashEvasion":0.08,"smashEvasion":0.08,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0016,"slashEvasion":0.0016,"smashEvasion":0.0016,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":150},"/items/cheese_brush":{"hrid":"/items/cheese_brush","name":"Cheese Brush","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.15,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.003,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":164},"/items/cheese_buckler":{"hrid":"/items/cheese_buckler","name":"Cheese Buckler","categoryHrid":"/item_categories/equipment","sellPrice":72,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":2,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.04,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":105},"/items/cheese_bulwark":{"hrid":"/items/cheese_bulwark","name":"Cheese Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":120,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":5},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.06,"stabDamage":0,"slashDamage":0,"smashDamage":0.06,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":6,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0012,"stabDamage":0,"slashDamage":0,"smashDamage":0.0012,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.12,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":73},"/items/cheese_enhancer":{"hrid":"/items/cheese_enhancer","name":"Cheese Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.006},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.00012}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":199},"/items/cheese_gauntlets":{"hrid":"/items/cheese_gauntlets","name":"Cheese Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":48,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":2},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.08,"slashEvasion":0.08,"smashEvasion":0.08,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0016,"slashEvasion":0.0016,"smashEvasion":0.0016,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":141},"/items/cheese_hammer":{"hrid":"/items/cheese_hammer","name":"Cheese Hammer","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.15,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.003,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":178},"/items/cheese_helmet":{"hrid":"/items/cheese_helmet","name":"Cheese Helmet","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.1,"slashEvasion":0.1,"smashEvasion":0.1,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.002,"slashEvasion":0.002,"smashEvasion":0.002,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":115},"/items/cheese_mace":{"hrid":"/items/cheese_mace","name":"Cheese Mace","categoryHrid":"/item_categories/equipment","sellPrice":72,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":1}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.04,"stabDamage":0,"slashDamage":0,"smashDamage":0.26,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0008,"stabDamage":0,"slashDamage":0,"smashDamage":0.005200000000000001,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":86},"/items/cheese_plate_body":{"hrid":"/items/cheese_plate_body","name":"Cheese Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":108,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":5},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.18,"slashEvasion":0.18,"smashEvasion":0.18,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0036,"slashEvasion":0.0036,"smashEvasion":0.0036,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":124},"/items/cheese_plate_legs":{"hrid":"/items/cheese_plate_legs","name":"Cheese Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":84,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":4},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.14,"slashEvasion":0.14,"smashEvasion":0.14,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0028000000000000004,"slashEvasion":0.0028000000000000004,"smashEvasion":0.0028000000000000004,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":133},"/items/cheese_pot":{"hrid":"/items/cheese_pot","name":"Cheese Pot","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.15,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.003,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":192},"/items/cheese_shears":{"hrid":"/items/cheese_shears","name":"Cheese Shears","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.15,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.003,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":171},"/items/cheese_spatula":{"hrid":"/items/cheese_spatula","name":"Cheese Spatula","categoryHrid":"/item_categories/equipment","sellPrice":60,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":1}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.15,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.003,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":185},"/items/cheese_spear":{"hrid":"/items/cheese_spear","name":"Cheese Spear","categoryHrid":"/item_categories/equipment","sellPrice":72,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":1}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":0.28,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.08,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.005600000000000001,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0016,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":84},"/items/cheese_sword":{"hrid":"/items/cheese_sword","name":"Cheese Sword","categoryHrid":"/item_categories/equipment","sellPrice":72,"isTradable":true,"itemLevel":1,"enhancementCosts":[{"itemHrid":"/items/cheese","count":3},{"itemHrid":"/items/coin","count":22}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":1},{"skillHrid":"/skills/power","level":1}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.15,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.15,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.003,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.003,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":85},"/items/cheesesmithing_tea":{"hrid":"/items/cheesesmithing_tea","name":"Cheesesmithing Tea","categoryHrid":"/item_categories/drink","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/cheesesmithing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/cheesesmithing_tea","typeHrid":"/buff_types/cheesesmithing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":47},"/items/cleave":{"hrid":"/items/cleave","name":"Cleave","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/cleave","levelRequirements":[{"skillHrid":"/skills/intelligence","level":15}],"experienceGain":500},"sortIndex":65},"/items/coin":{"hrid":"/items/coin","name":"Coin","categoryHrid":"/item_categories/currency","sellPrice":0,"isTradable":false,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":1},"/items/cooking_tea":{"hrid":"/items/cooking_tea","name":"Cooking Tea","categoryHrid":"/item_categories/drink","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/cooking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/cooking_tea","typeHrid":"/buff_types/cooking_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":44},"/items/crab_pincer":{"hrid":"/items/crab_pincer","name":"Crab Pincer","categoryHrid":"/item_categories/resource","sellPrice":1500,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":249},"/items/crimson_boots":{"hrid":"/items/crimson_boots","name":"Crimson Boots","categoryHrid":"/item_categories/equipment","sellPrice":5184,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":4},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.32,"slashEvasion":0.32,"smashEvasion":0.32,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0064,"slashEvasion":0.0064,"smashEvasion":0.0064,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":154},"/items/crimson_brush":{"hrid":"/items/crimson_brush","name":"Crimson Brush","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.6,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.012,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":168},"/items/crimson_buckler":{"hrid":"/items/crimson_buckler","name":"Crimson Buckler","categoryHrid":"/item_categories/equipment","sellPrice":7776,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":8,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.16,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":110},"/items/crimson_bulwark":{"hrid":"/items/crimson_bulwark","name":"Crimson Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":12960,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":9},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.24,"stabDamage":0,"slashDamage":0,"smashDamage":0.24,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":24,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0048,"stabDamage":0,"slashDamage":0,"smashDamage":0.0048,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.48,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":80},"/items/crimson_cheese":{"hrid":"/items/crimson_cheese","name":"Crimson Cheese","categoryHrid":"/item_categories/resource","sellPrice":54,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":217},"/items/crimson_enhancer":{"hrid":"/items/crimson_enhancer","name":"Crimson Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.024},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.00048}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":203},"/items/crimson_gauntlets":{"hrid":"/items/crimson_gauntlets","name":"Crimson Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":5184,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":4},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.32,"slashEvasion":0.32,"smashEvasion":0.32,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0064,"slashEvasion":0.0064,"smashEvasion":0.0064,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":146},"/items/crimson_hammer":{"hrid":"/items/crimson_hammer","name":"Crimson Hammer","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.6,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.012,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":182},"/items/crimson_helmet":{"hrid":"/items/crimson_helmet","name":"Crimson Helmet","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":120},"/items/crimson_mace":{"hrid":"/items/crimson_mace","name":"Crimson Mace","categoryHrid":"/item_categories/equipment","sellPrice":7776,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":50}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.16,"stabDamage":0,"slashDamage":0,"smashDamage":1.04,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0032,"stabDamage":0,"slashDamage":0,"smashDamage":0.020800000000000003,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":98},"/items/crimson_milk":{"hrid":"/items/crimson_milk","name":"Crimson Milk","categoryHrid":"/item_categories/resource","sellPrice":18,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":210},"/items/crimson_plate_body":{"hrid":"/items/crimson_plate_body","name":"Crimson Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":11664,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":8},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.72,"slashEvasion":0.72,"smashEvasion":0.72,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0144,"slashEvasion":0.0144,"smashEvasion":0.0144,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":130},"/items/crimson_plate_legs":{"hrid":"/items/crimson_plate_legs","name":"Crimson Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":9072,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":6},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.56,"slashEvasion":0.56,"smashEvasion":0.56,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.011200000000000002,"slashEvasion":0.011200000000000002,"smashEvasion":0.011200000000000002,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":138},"/items/crimson_pot":{"hrid":"/items/crimson_pot","name":"Crimson Pot","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.6,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.012,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":196},"/items/crimson_shears":{"hrid":"/items/crimson_shears","name":"Crimson Shears","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.6,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.012,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":175},"/items/crimson_spatula":{"hrid":"/items/crimson_spatula","name":"Crimson Spatula","categoryHrid":"/item_categories/equipment","sellPrice":6480,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":50}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.6,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.012,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":189},"/items/crimson_spear":{"hrid":"/items/crimson_spear","name":"Crimson Spear","categoryHrid":"/item_categories/equipment","sellPrice":7776,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":50}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":1.12,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.32,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.022400000000000003,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0064,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":96},"/items/crimson_sword":{"hrid":"/items/crimson_sword","name":"Crimson Sword","categoryHrid":"/item_categories/equipment","sellPrice":7776,"isTradable":true,"itemLevel":50,"enhancementCosts":[{"itemHrid":"/items/crimson_cheese","count":5},{"itemHrid":"/items/coin","count":245}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":50},{"skillHrid":"/skills/power","level":50}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.6,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.6,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.012,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.012,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":97},"/items/cupcake":{"hrid":"/items/cupcake","name":"Cupcake","categoryHrid":"/item_categories/food","sellPrice":5,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":50,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":50}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":9},"/items/defense_coffee":{"hrid":"/items/defense_coffee","name":"Defense Coffee","categoryHrid":"/item_categories/drink","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/defense_coffee","typeHrid":"/buff_types/defense_level","ratioBoost":0.08,"ratioBoostLevelBonus":0,"flatBoost":1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/defense_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":32},"/items/donut":{"hrid":"/items/donut","name":"Donut","categoryHrid":"/item_categories/food","sellPrice":5,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":40,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":40}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":2},"/items/dragon_fruit":{"hrid":"/items/dragon_fruit","name":"Dragon Fruit","categoryHrid":"/item_categories/resource","sellPrice":14,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":233},"/items/dragon_fruit_gummy":{"hrid":"/items/dragon_fruit_gummy","name":"Dragon Fruit Gummy","categoryHrid":"/item_categories/food","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":240,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":240}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":21},"/items/dragon_fruit_yogurt":{"hrid":"/items/dragon_fruit_yogurt","name":"Dragon Fruit Yogurt","categoryHrid":"/item_categories/food","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":300,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":300}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":28},"/items/efficiency_tea":{"hrid":"/items/efficiency_tea","name":"Efficiency Tea","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/brewing":true,"/action_types/cheesesmithing":true,"/action_types/cooking":true,"/action_types/foraging":true,"/action_types/milking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/efficiency_tea","typeHrid":"/buff_types/efficiency","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.08,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":58},"/items/egg":{"hrid":"/items/egg","name":"Egg","categoryHrid":"/item_categories/resource","sellPrice":1,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":222},"/items/emp_tea_leaf":{"hrid":"/items/emp_tea_leaf","name":"Emp Tea Leaf","categoryHrid":"/item_categories/resource","sellPrice":54,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":246},"/items/enhancing_tea":{"hrid":"/items/enhancing_tea","name":"Enhancing Tea","categoryHrid":"/item_categories/drink","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/enhancing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/enhancing_tea","typeHrid":"/buff_types/enhancing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":46},"/items/excelsa_coffee_bean":{"hrid":"/items/excelsa_coffee_bean","name":"Excelsa Coffee Bean","categoryHrid":"/item_categories/resource","sellPrice":18,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":238},"/items/eyessence":{"hrid":"/items/eyessence","name":"Eyessence","categoryHrid":"/item_categories/resource","sellPrice":36,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":262},"/items/fermenting_tea":{"hrid":"/items/fermenting_tea","name":"Fermenting Tea","categoryHrid":"/item_categories/drink","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/milking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/fermenting_tea","typeHrid":"/buff_types/fermenting","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":57},"/items/fieriosa_coffee_bean":{"hrid":"/items/fieriosa_coffee_bean","name":"Fieriosa Coffee Bean","categoryHrid":"/item_categories/resource","sellPrice":27,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":239},"/items/foraging_tea":{"hrid":"/items/foraging_tea","name":"Foraging Tea","categoryHrid":"/item_categories/drink","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/foraging":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/foraging_tea","typeHrid":"/buff_types/foraging_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":43},"/items/frenzy":{"hrid":"/items/frenzy","name":"Frenzy","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/frenzy","levelRequirements":[{"skillHrid":"/skills/intelligence","level":45}],"experienceGain":500},"sortIndex":71},"/items/gathering_tea":{"hrid":"/items/gathering_tea","name":"Gathering Tea","categoryHrid":"/item_categories/drink","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/foraging":true,"/action_types/milking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/gathering_tea","typeHrid":"/buff_types/gathering","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.12,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":54},"/items/gator_vest":{"hrid":"/items/gator_vest","name":"Gator Vest","categoryHrid":"/item_categories/equipment","sellPrice":5000,"isTradable":true,"itemLevel":20,"enhancementCosts":[{"itemHrid":"/items/swamp_essence","count":18},{"itemHrid":"/items/coin","count":80}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":20}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.06,"slashDamage":0.06,"smashDamage":0.06,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0012,"slashDamage":0.0012,"smashDamage":0.0012,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":126},"/items/giant_pouch":{"hrid":"/items/giant_pouch","name":"Giant Pouch","categoryHrid":"/item_categories/equipment","sellPrice":5000000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"/equipment_types/pouch","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":2,"drinkSlots":2},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":163},"/items/gobo_essence":{"hrid":"/items/gobo_essence","name":"Gobo Essence","categoryHrid":"/item_categories/resource","sellPrice":24,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":261},"/items/gobo_slasher":{"hrid":"/items/gobo_slasher","name":"Gobo Slasher","categoryHrid":"/item_categories/equipment","sellPrice":20000,"isTradable":true,"itemLevel":40,"enhancementCosts":[{"itemHrid":"/items/gobo_essence","count":20},{"itemHrid":"/items/coin","count":180}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":40},{"skillHrid":"/skills/power","level":40}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0.9,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.9,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.018000000000000002,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.018000000000000002,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":78},"/items/gobo_smasher":{"hrid":"/items/gobo_smasher","name":"Gobo Smasher","categoryHrid":"/item_categories/equipment","sellPrice":20000,"isTradable":true,"itemLevel":40,"enhancementCosts":[{"itemHrid":"/items/gobo_essence","count":20},{"itemHrid":"/items/coin","count":180}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/power","level":40}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3700000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.1,"stabDamage":0,"slashDamage":0,"smashDamage":1.65,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.002,"stabDamage":0,"slashDamage":0,"smashDamage":0.033,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":79},"/items/gobo_stabber":{"hrid":"/items/gobo_stabber","name":"Gobo Stabber","categoryHrid":"/item_categories/equipment","sellPrice":20000,"isTradable":true,"itemLevel":40,"enhancementCosts":[{"itemHrid":"/items/gobo_essence","count":20},{"itemHrid":"/items/coin","count":180}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":40}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2500000000,"stabAccuracy":2,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.1,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.04,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.002,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":77},"/items/goggles":{"hrid":"/items/goggles","name":"Goggles","categoryHrid":"/item_categories/resource","sellPrice":10000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":251},"/items/gourmet_tea":{"hrid":"/items/gourmet_tea","name":"Gourmet Tea","categoryHrid":"/item_categories/drink","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/brewing":true,"/action_types/cooking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/gourmet_tea","typeHrid":"/buff_types/gourmet","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":55},"/items/green_tea_leaf":{"hrid":"/items/green_tea_leaf","name":"Green Tea Leaf","categoryHrid":"/item_categories/resource","sellPrice":4,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":241},"/items/grizzly_bear_fluff":{"hrid":"/items/grizzly_bear_fluff","name":"Grizzly Bear Fluff","categoryHrid":"/item_categories/resource","sellPrice":3000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":255},"/items/grizzly_bear_shoes":{"hrid":"/items/grizzly_bear_shoes","name":"Grizzly Bear Shoes","categoryHrid":"/item_categories/equipment","sellPrice":60000,"isTradable":true,"itemLevel":70,"enhancementCosts":[{"itemHrid":"/items/bear_essence","count":8},{"itemHrid":"/items/rainbow_cheese","count":2},{"itemHrid":"/items/coin","count":405}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":70}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.1,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.1,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.002,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.002,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":157},"/items/gummy":{"hrid":"/items/gummy","name":"Gummy","categoryHrid":"/item_categories/food","sellPrice":5,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":40,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":40}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":16},"/items/holy_boots":{"hrid":"/items/holy_boots","name":"Holy Boots","categoryHrid":"/item_categories/equipment","sellPrice":35640,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":4},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.48,"slashEvasion":0.48,"smashEvasion":0.48,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0096,"slashEvasion":0.0096,"smashEvasion":0.0096,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":159},"/items/holy_brush":{"hrid":"/items/holy_brush","name":"Holy Brush","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.9,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.018000000000000002,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":170},"/items/holy_buckler":{"hrid":"/items/holy_buckler","name":"Holy Buckler","categoryHrid":"/item_categories/equipment","sellPrice":53460,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":6},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":12,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.24,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":113},"/items/holy_bulwark":{"hrid":"/items/holy_bulwark","name":"Holy Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":89100,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":10},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.36,"stabDamage":0,"slashDamage":0,"smashDamage":0.36,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":36,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0072,"stabDamage":0,"slashDamage":0,"smashDamage":0.0072,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.72,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":82},"/items/holy_cheese":{"hrid":"/items/holy_cheese","name":"Holy Cheese","categoryHrid":"/item_categories/resource","sellPrice":162,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":219},"/items/holy_enhancer":{"hrid":"/items/holy_enhancer","name":"Holy Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.036},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.0007199999999999999}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":205},"/items/holy_gauntlets":{"hrid":"/items/holy_gauntlets","name":"Holy Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":35640,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":4},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.48,"slashEvasion":0.48,"smashEvasion":0.48,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0096,"slashEvasion":0.0096,"smashEvasion":0.0096,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":149},"/items/holy_hammer":{"hrid":"/items/holy_hammer","name":"Holy Hammer","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.9,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.018000000000000002,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":184},"/items/holy_helmet":{"hrid":"/items/holy_helmet","name":"Holy Helmet","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.6,"slashEvasion":0.6,"smashEvasion":0.6,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.012,"slashEvasion":0.012,"smashEvasion":0.012,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":123},"/items/holy_mace":{"hrid":"/items/holy_mace","name":"Holy Mace","categoryHrid":"/item_categories/equipment","sellPrice":53460,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":6},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":80}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.24,"stabDamage":0,"slashDamage":0,"smashDamage":1.56,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0048,"stabDamage":0,"slashDamage":0,"smashDamage":0.031200000000000002,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":104},"/items/holy_milk":{"hrid":"/items/holy_milk","name":"Holy Milk","categoryHrid":"/item_categories/resource","sellPrice":54,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":212},"/items/holy_plate_body":{"hrid":"/items/holy_plate_body","name":"Holy Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":80190,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":9},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":1.08,"slashEvasion":1.08,"smashEvasion":1.08,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0216,"slashEvasion":0.0216,"smashEvasion":0.0216,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":132},"/items/holy_plate_legs":{"hrid":"/items/holy_plate_legs","name":"Holy Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":62370,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":7},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.84,"slashEvasion":0.84,"smashEvasion":0.84,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0168,"slashEvasion":0.0168,"smashEvasion":0.0168,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":140},"/items/holy_pot":{"hrid":"/items/holy_pot","name":"Holy Pot","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.9,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.018000000000000002,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":198},"/items/holy_shears":{"hrid":"/items/holy_shears","name":"Holy Shears","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.9,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.018000000000000002,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":177},"/items/holy_spatula":{"hrid":"/items/holy_spatula","name":"Holy Spatula","categoryHrid":"/item_categories/equipment","sellPrice":44550,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":80}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.9,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.018000000000000002,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":191},"/items/holy_spear":{"hrid":"/items/holy_spear","name":"Holy Spear","categoryHrid":"/item_categories/equipment","sellPrice":53460,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":6},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":80}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":1.68,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.48,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.0336,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0096,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":102},"/items/holy_sword":{"hrid":"/items/holy_sword","name":"Holy Sword","categoryHrid":"/item_categories/equipment","sellPrice":53460,"isTradable":true,"itemLevel":80,"enhancementCosts":[{"itemHrid":"/items/holy_cheese","count":6},{"itemHrid":"/items/coin","count":500}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":80},{"skillHrid":"/skills/power","level":80}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.9,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.9,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.018000000000000002,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.018000000000000002,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":103},"/items/intelligence_coffee":{"hrid":"/items/intelligence_coffee","name":"Intelligence Coffee","categoryHrid":"/item_categories/drink","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/intelligence_coffee_max_mp","typeHrid":"/buff_types/intelligence_level","ratioBoost":0.08,"ratioBoostLevelBonus":0,"flatBoost":1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000},{"sourceHrid":"/buff_sources/intelligence_coffee_mp_regen","typeHrid":"/buff_types/mp_regen","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.005,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/intelligence_coffee_max_mp","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":31},"/items/large_pouch":{"hrid":"/items/large_pouch","name":"Large Pouch","categoryHrid":"/item_categories/equipment","sellPrice":500000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"/equipment_types/pouch","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":2,"drinkSlots":1},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":162},"/items/liberica_coffee_bean":{"hrid":"/items/liberica_coffee_bean","name":"Liberica Coffee Bean","categoryHrid":"/item_categories/resource","sellPrice":12,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":237},"/items/lucky_coffee":{"hrid":"/items/lucky_coffee","name":"Lucky Coffee","categoryHrid":"/item_categories/drink","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/lucky_coffee","typeHrid":"/buff_types/combat_drop_rate","ratioBoost":0.15,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/lucky_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":41},"/items/magnifying_glass":{"hrid":"/items/magnifying_glass","name":"Magnifying Glass","categoryHrid":"/item_categories/resource","sellPrice":10000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":252},"/items/maim":{"hrid":"/items/maim","name":"Maim","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/maim","levelRequirements":[{"skillHrid":"/skills/intelligence","level":40}],"experienceGain":500},"sortIndex":67},"/items/marsberry":{"hrid":"/items/marsberry","name":"Marsberry","categoryHrid":"/item_categories/resource","sellPrice":14,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":227},"/items/marsberry_cake":{"hrid":"/items/marsberry_cake","name":"Marsberry Cake","categoryHrid":"/item_categories/food","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":300,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":300}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":14},"/items/marsberry_donut":{"hrid":"/items/marsberry_donut","name":"Marsberry Donut","categoryHrid":"/item_categories/food","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":240,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":240}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":7},"/items/medium_pouch":{"hrid":"/items/medium_pouch","name":"Medium Pouch","categoryHrid":"/item_categories/equipment","sellPrice":50000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"/equipment_types/pouch","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":1,"drinkSlots":1},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":161},"/items/milk":{"hrid":"/items/milk","name":"Milk","categoryHrid":"/item_categories/resource","sellPrice":2,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":206},"/items/milking_tea":{"hrid":"/items/milking_tea","name":"Milking Tea","categoryHrid":"/item_categories/drink","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/milking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/milking_tea","typeHrid":"/buff_types/milking_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":42},"/items/mooberry":{"hrid":"/items/mooberry","name":"Mooberry","categoryHrid":"/item_categories/resource","sellPrice":9,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":226},"/items/mooberry_cake":{"hrid":"/items/mooberry_cake","name":"Mooberry Cake","categoryHrid":"/item_categories/food","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":250,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":250}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":13},"/items/mooberry_donut":{"hrid":"/items/mooberry_donut","name":"Mooberry Donut","categoryHrid":"/item_categories/food","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":200,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":200}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":6},"/items/moolong_tea_leaf":{"hrid":"/items/moolong_tea_leaf","name":"Moolong Tea Leaf","categoryHrid":"/item_categories/resource","sellPrice":18,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":244},"/items/orange":{"hrid":"/items/orange","name":"Orange","categoryHrid":"/item_categories/resource","sellPrice":4,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":230},"/items/orange_gummy":{"hrid":"/items/orange_gummy","name":"Orange Gummy","categoryHrid":"/item_categories/food","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":120,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":120}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":18},"/items/orange_yogurt":{"hrid":"/items/orange_yogurt","name":"Orange Yogurt","categoryHrid":"/item_categories/food","sellPrice":20,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":150,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":150}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":25},"/items/panda_fluff":{"hrid":"/items/panda_fluff","name":"Panda Fluff","categoryHrid":"/item_categories/resource","sellPrice":3000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":253},"/items/panda_gloves":{"hrid":"/items/panda_gloves","name":"Panda Gloves","categoryHrid":"/item_categories/equipment","sellPrice":60000,"isTradable":true,"itemLevel":70,"enhancementCosts":[{"itemHrid":"/items/bear_essence","count":8},{"itemHrid":"/items/rainbow_cheese","count":2},{"itemHrid":"/items/coin","count":405}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":70}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":8,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0.16,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":148},"/items/peach":{"hrid":"/items/peach","name":"Peach","categoryHrid":"/item_categories/resource","sellPrice":9,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":232},"/items/peach_gummy":{"hrid":"/items/peach_gummy","name":"Peach Gummy","categoryHrid":"/item_categories/food","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":200,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":200}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":20},"/items/peach_yogurt":{"hrid":"/items/peach_yogurt","name":"Peach Yogurt","categoryHrid":"/item_categories/food","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":250,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":250}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":27},"/items/pierce":{"hrid":"/items/pierce","name":"Pierce","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/pierce","levelRequirements":[{"skillHrid":"/skills/intelligence","level":15}],"experienceGain":500},"sortIndex":64},"/items/pincer_gloves":{"hrid":"/items/pincer_gloves","name":"Pincer Gloves","categoryHrid":"/item_categories/equipment","sellPrice":6000,"isTradable":true,"itemLevel":25,"enhancementCosts":[{"itemHrid":"/items/aqua_essence","count":8},{"itemHrid":"/items/azure_cheese","count":2},{"itemHrid":"/items/coin","count":101}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":25}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0.04,"slashAccuracy":0.04,"smashAccuracy":0.04,"stabDamage":0.08,"slashDamage":0.08,"smashDamage":0.08,"stabEvasion":0.16,"slashEvasion":0.16,"smashEvasion":0.16,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.0008,"slashAccuracy":0.0008,"smashAccuracy":0.0008,"stabDamage":0.0016,"slashDamage":0.0016,"smashDamage":0.0016,"stabEvasion":0.0032,"slashEvasion":0.0032,"smashEvasion":0.0032,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":144},"/items/plum":{"hrid":"/items/plum","name":"Plum","categoryHrid":"/item_categories/resource","sellPrice":6,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":231},"/items/plum_gummy":{"hrid":"/items/plum_gummy","name":"Plum Gummy","categoryHrid":"/item_categories/food","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":160,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":160}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":19},"/items/plum_yogurt":{"hrid":"/items/plum_yogurt","name":"Plum Yogurt","categoryHrid":"/item_categories/food","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":200,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":200}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":26},"/items/poke":{"hrid":"/items/poke","name":"Poke","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/poke","levelRequirements":[{"skillHrid":"/skills/intelligence","level":1}],"experienceGain":50},"sortIndex":61},"/items/polar_bear_fluff":{"hrid":"/items/polar_bear_fluff","name":"Polar Bear Fluff","categoryHrid":"/item_categories/resource","sellPrice":3000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":256},"/items/polar_bear_shoes":{"hrid":"/items/polar_bear_shoes","name":"Polar Bear Shoes","categoryHrid":"/item_categories/equipment","sellPrice":60000,"isTradable":true,"itemLevel":70,"enhancementCosts":[{"itemHrid":"/items/bear_essence","count":8},{"itemHrid":"/items/rainbow_cheese","count":2},{"itemHrid":"/items/coin","count":405}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":70}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.1,"stabDamage":0,"slashDamage":0,"smashDamage":0.1,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.002,"stabDamage":0,"slashDamage":0,"smashDamage":0.002,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":158},"/items/power_coffee":{"hrid":"/items/power_coffee","name":"Power Coffee","categoryHrid":"/item_categories/drink","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/power_coffee","typeHrid":"/buff_types/power_level","ratioBoost":0.08,"ratioBoostLevelBonus":0,"flatBoost":1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/power_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":34},"/items/precision":{"hrid":"/items/precision","name":"Precision","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/precision","levelRequirements":[{"skillHrid":"/skills/intelligence","level":30}],"experienceGain":500},"sortIndex":69},"/items/rainbow_boots":{"hrid":"/items/rainbow_boots","name":"Rainbow Boots","categoryHrid":"/item_categories/equipment","sellPrice":11988,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":4},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":155},"/items/rainbow_brush":{"hrid":"/items/rainbow_brush","name":"Rainbow Brush","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.75,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.015,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":169},"/items/rainbow_buckler":{"hrid":"/items/rainbow_buckler","name":"Rainbow Buckler","categoryHrid":"/item_categories/equipment","sellPrice":17982,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":6},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":10,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.2,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":112},"/items/rainbow_bulwark":{"hrid":"/items/rainbow_bulwark","name":"Rainbow Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":29970,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":10},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.3,"stabDamage":0,"slashDamage":0,"smashDamage":0.3,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":30,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.006,"stabDamage":0,"slashDamage":0,"smashDamage":0.006,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.6,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":81},"/items/rainbow_cheese":{"hrid":"/items/rainbow_cheese","name":"Rainbow Cheese","categoryHrid":"/item_categories/resource","sellPrice":81,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":218},"/items/rainbow_enhancer":{"hrid":"/items/rainbow_enhancer","name":"Rainbow Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.03},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.0006}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":204},"/items/rainbow_gauntlets":{"hrid":"/items/rainbow_gauntlets","name":"Rainbow Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":11988,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":4},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":147},"/items/rainbow_hammer":{"hrid":"/items/rainbow_hammer","name":"Rainbow Hammer","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.75,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.015,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":183},"/items/rainbow_helmet":{"hrid":"/items/rainbow_helmet","name":"Rainbow Helmet","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.5,"slashEvasion":0.5,"smashEvasion":0.5,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.01,"slashEvasion":0.01,"smashEvasion":0.01,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":122},"/items/rainbow_mace":{"hrid":"/items/rainbow_mace","name":"Rainbow Mace","categoryHrid":"/item_categories/equipment","sellPrice":17982,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":6},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":65}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.2,"stabDamage":0,"slashDamage":0,"smashDamage":1.3,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.004,"stabDamage":0,"slashDamage":0,"smashDamage":0.026000000000000002,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":101},"/items/rainbow_milk":{"hrid":"/items/rainbow_milk","name":"Rainbow Milk","categoryHrid":"/item_categories/resource","sellPrice":27,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":211},"/items/rainbow_plate_body":{"hrid":"/items/rainbow_plate_body","name":"Rainbow Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":26973,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":9},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.9,"slashEvasion":0.9,"smashEvasion":0.9,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.018000000000000002,"slashEvasion":0.018000000000000002,"smashEvasion":0.018000000000000002,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":131},"/items/rainbow_plate_legs":{"hrid":"/items/rainbow_plate_legs","name":"Rainbow Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":20979,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":7},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.7,"slashEvasion":0.7,"smashEvasion":0.7,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.013999999999999999,"slashEvasion":0.013999999999999999,"smashEvasion":0.013999999999999999,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":139},"/items/rainbow_pot":{"hrid":"/items/rainbow_pot","name":"Rainbow Pot","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.75,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.015,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":197},"/items/rainbow_shears":{"hrid":"/items/rainbow_shears","name":"Rainbow Shears","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.75,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.015,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":176},"/items/rainbow_spatula":{"hrid":"/items/rainbow_spatula","name":"Rainbow Spatula","categoryHrid":"/item_categories/equipment","sellPrice":14985,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":5},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":65}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.75,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.015,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":190},"/items/rainbow_spear":{"hrid":"/items/rainbow_spear","name":"Rainbow Spear","categoryHrid":"/item_categories/equipment","sellPrice":17982,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":6},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":65}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":1.4,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.4,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.027999999999999997,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.008,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":99},"/items/rainbow_sword":{"hrid":"/items/rainbow_sword","name":"Rainbow Sword","categoryHrid":"/item_categories/equipment","sellPrice":17982,"isTradable":true,"itemLevel":65,"enhancementCosts":[{"itemHrid":"/items/rainbow_cheese","count":6},{"itemHrid":"/items/coin","count":361}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":65},{"skillHrid":"/skills/power","level":65}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.75,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.75,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.015,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.015,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":100},"/items/red_tea_leaf":{"hrid":"/items/red_tea_leaf","name":"Red Tea Leaf","categoryHrid":"/item_categories/resource","sellPrice":27,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":245},"/items/robusta_coffee_bean":{"hrid":"/items/robusta_coffee_bean","name":"Robusta Coffee Bean","categoryHrid":"/item_categories/resource","sellPrice":8,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":236},"/items/scratch":{"hrid":"/items/scratch","name":"Scratch","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/scratch","levelRequirements":[{"skillHrid":"/skills/intelligence","level":1}],"experienceGain":50},"sortIndex":62},"/items/smack":{"hrid":"/items/smack","name":"Smack","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/smack","levelRequirements":[{"skillHrid":"/skills/intelligence","level":1}],"experienceGain":50},"sortIndex":63},"/items/small_pouch":{"hrid":"/items/small_pouch","name":"Small Pouch","categoryHrid":"/item_categories/equipment","sellPrice":5000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"/equipment_types/pouch","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":1,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":160},"/items/snail_shell":{"hrid":"/items/snail_shell","name":"Snail Shell","categoryHrid":"/item_categories/resource","sellPrice":1500,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":248},"/items/snail_shell_helmet":{"hrid":"/items/snail_shell_helmet","name":"Snail Shell Helmet","categoryHrid":"/item_categories/equipment","sellPrice":6000,"isTradable":true,"itemLevel":25,"enhancementCosts":[{"itemHrid":"/items/aqua_essence","count":10},{"itemHrid":"/items/azure_cheese","count":2},{"itemHrid":"/items/coin","count":101}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":25}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.34,"slashEvasion":0.42,"smashEvasion":0.18,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0068000000000000005,"slashEvasion":0.0084,"smashEvasion":0.0036,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":118},"/items/snake_fang":{"hrid":"/items/snake_fang","name":"Snake Fang","categoryHrid":"/item_categories/resource","sellPrice":100,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":247},"/items/snake_fang_dirk":{"hrid":"/items/snake_fang_dirk","name":"Snake Fang Dirk","categoryHrid":"/item_categories/equipment","sellPrice":2000,"isTradable":true,"itemLevel":15,"enhancementCosts":[{"itemHrid":"/items/swamp_essence","count":12},{"itemHrid":"/items/verdant_cheese","count":2},{"itemHrid":"/items/coin","count":61}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":15},{"skillHrid":"/skills/defense","level":15}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0.08,"slashAccuracy":0.08,"smashAccuracy":0,"stabDamage":0.08,"slashDamage":0.08,"smashDamage":0,"stabEvasion":0.08,"slashEvasion":0.08,"smashEvasion":0.08,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.0016,"slashAccuracy":0.0016,"smashAccuracy":0,"stabDamage":0.0016,"slashDamage":0.0016,"smashDamage":0,"stabEvasion":0.0016,"slashEvasion":0.0016,"smashEvasion":0.0016,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":107},"/items/spaceberry":{"hrid":"/items/spaceberry","name":"Spaceberry","categoryHrid":"/item_categories/resource","sellPrice":27,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":228},"/items/spaceberry_cake":{"hrid":"/items/spaceberry_cake","name":"Spaceberry Cake","categoryHrid":"/item_categories/food","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":350,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":350}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":15},"/items/spaceberry_donut":{"hrid":"/items/spaceberry_donut","name":"Spaceberry Donut","categoryHrid":"/item_categories/food","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":280,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":280}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":8},"/items/spacia_coffee_bean":{"hrid":"/items/spacia_coffee_bean","name":"Spacia Coffee Bean","categoryHrid":"/item_categories/resource","sellPrice":54,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":240},"/items/stamina_coffee":{"hrid":"/items/stamina_coffee","name":"Stamina Coffee","categoryHrid":"/item_categories/drink","sellPrice":10,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/stamina_coffee_max_hp","typeHrid":"/buff_types/stamina_level","ratioBoost":0.08,"ratioBoostLevelBonus":0,"flatBoost":1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000},{"sourceHrid":"/buff_sources/stamina_coffee_hp_regen","typeHrid":"/buff_types/hp_regen","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.005,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/stamina_coffee_max_hp","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":30},"/items/star_fruit":{"hrid":"/items/star_fruit","name":"Star Fruit","categoryHrid":"/item_categories/resource","sellPrice":27,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":234},"/items/star_fruit_gummy":{"hrid":"/items/star_fruit_gummy","name":"Star Fruit Gummy","categoryHrid":"/item_categories/food","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":280,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":280}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":22},"/items/star_fruit_yogurt":{"hrid":"/items/star_fruit_yogurt","name":"Star Fruit Yogurt","categoryHrid":"/item_categories/food","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":350,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":350}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":29},"/items/strawberry":{"hrid":"/items/strawberry","name":"Strawberry","categoryHrid":"/item_categories/resource","sellPrice":6,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":225},"/items/strawberry_cake":{"hrid":"/items/strawberry_cake","name":"Strawberry Cake","categoryHrid":"/item_categories/food","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":200,"manapointRestore":0,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":200}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":12},"/items/strawberry_donut":{"hrid":"/items/strawberry_donut","name":"Strawberry Donut","categoryHrid":"/item_categories/food","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":160,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_hp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":160}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":5},"/items/sugar":{"hrid":"/items/sugar","name":"Sugar","categoryHrid":"/item_categories/resource","sellPrice":1,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":220},"/items/super_attack_coffee":{"hrid":"/items/super_attack_coffee","name":"Super Attack Coffee","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/attack_coffee","typeHrid":"/buff_types/attack_level","ratioBoost":0.15,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/attack_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":38},"/items/super_brewing_tea":{"hrid":"/items/super_brewing_tea","name":"Super Brewing Tea","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/brewing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/brewing_tea","typeHrid":"/buff_types/brewing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":4,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":51},"/items/super_cheesesmithing_tea":{"hrid":"/items/super_cheesesmithing_tea","name":"Super Cheesesmithing Tea","categoryHrid":"/item_categories/drink","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/cheesesmithing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/cheesesmithing_tea","typeHrid":"/buff_types/cheesesmithing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":4,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":53},"/items/super_cooking_tea":{"hrid":"/items/super_cooking_tea","name":"Super Cooking Tea","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/cooking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/cooking_tea","typeHrid":"/buff_types/cooking_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":4,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":50},"/items/super_defense_coffee":{"hrid":"/items/super_defense_coffee","name":"Super Defense Coffee","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/defense_coffee","typeHrid":"/buff_types/defense_level","ratioBoost":0.15,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/defense_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":37},"/items/super_enhancing_tea":{"hrid":"/items/super_enhancing_tea","name":"Super Enhancing Tea","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/enhancing":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/enhancing_tea","typeHrid":"/buff_types/enhancing_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":4,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":52},"/items/super_foraging_tea":{"hrid":"/items/super_foraging_tea","name":"Super Foraging Tea","categoryHrid":"/item_categories/drink","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/foraging":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/foraging_tea","typeHrid":"/buff_types/foraging_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":4,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":49},"/items/super_intelligence_coffee":{"hrid":"/items/super_intelligence_coffee","name":"Super Intelligence Coffee","categoryHrid":"/item_categories/drink","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/intelligence_coffee_max_mp","typeHrid":"/buff_types/intelligence_level","ratioBoost":0.15,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000},{"sourceHrid":"/buff_sources/intelligence_coffee_mp_regen","typeHrid":"/buff_types/mp_regen","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.01,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/intelligence_coffee_max_mp","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":36},"/items/super_milking_tea":{"hrid":"/items/super_milking_tea","name":"Super Milking Tea","categoryHrid":"/item_categories/drink","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/milking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/milking_tea","typeHrid":"/buff_types/milking_level","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":4,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":48},"/items/super_power_coffee":{"hrid":"/items/super_power_coffee","name":"Super Power Coffee","categoryHrid":"/item_categories/drink","sellPrice":75,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/power_coffee","typeHrid":"/buff_types/power_level","ratioBoost":0.15,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/power_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":39},"/items/super_stamina_coffee":{"hrid":"/items/super_stamina_coffee","name":"Super Stamina Coffee","categoryHrid":"/item_categories/drink","sellPrice":40,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/stamina_coffee_max_hp","typeHrid":"/buff_types/stamina_level","ratioBoost":0.15,"ratioBoostLevelBonus":0,"flatBoost":2,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000},{"sourceHrid":"/buff_sources/stamina_coffee_hp_regen","typeHrid":"/buff_types/hp_regen","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.01,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/stamina_coffee_max_hp","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":35},"/items/swamp_essence":{"hrid":"/items/swamp_essence","name":"Swamp Essence","categoryHrid":"/item_categories/resource","sellPrice":8,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":259},"/items/sweep":{"hrid":"/items/sweep","name":"Sweep","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/sweep","levelRequirements":[{"skillHrid":"/skills/intelligence","level":15}],"experienceGain":500},"sortIndex":66},"/items/swiftness_coffee":{"hrid":"/items/swiftness_coffee","name":"Swiftness Coffee","categoryHrid":"/item_categories/drink","sellPrice":50,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/swiftness_coffee","typeHrid":"/buff_types/attack_speed","ratioBoost":0.1,"ratioBoostLevelBonus":0,"flatBoost":0,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/swiftness_coffee","comparatorHrid":"/combat_trigger_comparators/is_inactive","value":0}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":40},"/items/toughness":{"hrid":"/items/toughness","name":"Toughness","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/toughness","levelRequirements":[{"skillHrid":"/skills/intelligence","level":30}],"experienceGain":500},"sortIndex":68},"/items/turtle_shell":{"hrid":"/items/turtle_shell","name":"Turtle Shell","categoryHrid":"/item_categories/resource","sellPrice":1500,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":250},"/items/turtle_shell_body":{"hrid":"/items/turtle_shell_body","name":"Turtle Shell Body","categoryHrid":"/item_categories/equipment","sellPrice":9000,"isTradable":true,"itemLevel":30,"enhancementCosts":[{"itemHrid":"/items/aqua_essence","count":18},{"itemHrid":"/items/azure_cheese","count":3},{"itemHrid":"/items/coin","count":125}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":30}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.84,"slashEvasion":0.96,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0168,"slashEvasion":0.0192,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":128},"/items/turtle_shell_legs":{"hrid":"/items/turtle_shell_legs","name":"Turtle Shell Legs","categoryHrid":"/item_categories/equipment","sellPrice":6000,"isTradable":true,"itemLevel":30,"enhancementCosts":[{"itemHrid":"/items/aqua_essence","count":14},{"itemHrid":"/items/azure_cheese","count":3},{"itemHrid":"/items/coin","count":125}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":30}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.67,"slashEvasion":0.78,"smashEvasion":0.32,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0134,"slashEvasion":0.015600000000000001,"smashEvasion":0.0064,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":136},"/items/twilight_essence":{"hrid":"/items/twilight_essence","name":"Twilight Essence","categoryHrid":"/item_categories/resource","sellPrice":108,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":264},"/items/vampire_fang":{"hrid":"/items/vampire_fang","name":"Vampire Fang","categoryHrid":"/item_categories/resource","sellPrice":10000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":257},"/items/vampire_fang_dirk":{"hrid":"/items/vampire_fang_dirk","name":"Vampire Fang Dirk","categoryHrid":"/item_categories/equipment","sellPrice":400000,"isTradable":true,"itemLevel":85,"enhancementCosts":[{"itemHrid":"/items/twilight_essence","count":12},{"itemHrid":"/items/holy_cheese","count":3},{"itemHrid":"/items/coin","count":551}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":85},{"skillHrid":"/skills/defense","level":85}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0.18,"slashAccuracy":0.18,"smashAccuracy":0,"stabDamage":0.18,"slashDamage":0.18,"smashDamage":0,"stabEvasion":0.18,"slashEvasion":0.18,"smashEvasion":0.18,"armor":0,"lifeSteal":0.02,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.0036,"slashAccuracy":0.0036,"smashAccuracy":0,"stabDamage":0.0036,"slashDamage":0.0036,"smashDamage":0,"stabEvasion":0.0036,"slashEvasion":0.0036,"smashEvasion":0.0036,"armor":0,"lifeSteal":0.0004,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":114},"/items/vampirism":{"hrid":"/items/vampirism","name":"Vampirism","categoryHrid":"/item_categories/ability_book","sellPrice":1000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"/abilities/vampirism","levelRequirements":[{"skillHrid":"/skills/intelligence","level":50}],"experienceGain":500},"sortIndex":72},"/items/verdant_boots":{"hrid":"/items/verdant_boots","name":"Verdant Boots","categoryHrid":"/item_categories/equipment","sellPrice":240,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/feet","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.12,"slashEvasion":0.12,"smashEvasion":0.12,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0024,"slashEvasion":0.0024,"smashEvasion":0.0024,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":151},"/items/verdant_brush":{"hrid":"/items/verdant_brush","name":"Verdant Brush","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/milking_tool","levelRequirements":[{"skillHrid":"/skills/milking","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0.225,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0.0045000000000000005,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":165},"/items/verdant_buckler":{"hrid":"/items/verdant_buckler","name":"Verdant Buckler","categoryHrid":"/item_categories/equipment","sellPrice":360,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":4},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":3,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.06,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":106},"/items/verdant_bulwark":{"hrid":"/items/verdant_bulwark","name":"Verdant Bulwark","categoryHrid":"/item_categories/equipment","sellPrice":600,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":6},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":4000000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.09,"stabDamage":0,"slashDamage":0,"smashDamage":0.09,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":9,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0018,"stabDamage":0,"slashDamage":0,"smashDamage":0.0018,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.18,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":74},"/items/verdant_cheese":{"hrid":"/items/verdant_cheese","name":"Verdant Cheese","categoryHrid":"/item_categories/resource","sellPrice":12,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":214},"/items/verdant_enhancer":{"hrid":"/items/verdant_enhancer","name":"Verdant Enhancer","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/enhancing_tool","levelRequirements":[{"skillHrid":"/skills/enhancing","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.009},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0.00017999999999999998}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":200},"/items/verdant_gauntlets":{"hrid":"/items/verdant_gauntlets","name":"Verdant Gauntlets","categoryHrid":"/item_categories/equipment","sellPrice":240,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/hands","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.12,"slashEvasion":0.12,"smashEvasion":0.12,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0024,"slashEvasion":0.0024,"smashEvasion":0.0024,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":142},"/items/verdant_hammer":{"hrid":"/items/verdant_hammer","name":"Verdant Hammer","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/cheesesmithing_tool","levelRequirements":[{"skillHrid":"/skills/cheesesmithing","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.225,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0.0045000000000000005,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":179},"/items/verdant_helmet":{"hrid":"/items/verdant_helmet","name":"Verdant Helmet","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.15,"slashEvasion":0.15,"smashEvasion":0.15,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.003,"slashEvasion":0.003,"smashEvasion":0.003,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":116},"/items/verdant_mace":{"hrid":"/items/verdant_mace","name":"Verdant Mace","categoryHrid":"/item_categories/equipment","sellPrice":360,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":4},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/power","level":10}],"combatStyleHrids":["/combat_styles/smash"],"combatStats":{"attackInterval":3300000000,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.06,"stabDamage":0,"slashDamage":0,"smashDamage":0.39,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0.0012,"stabDamage":0,"slashDamage":0,"smashDamage":0.0078000000000000005,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":89},"/items/verdant_milk":{"hrid":"/items/verdant_milk","name":"Verdant Milk","categoryHrid":"/item_categories/resource","sellPrice":4,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":207},"/items/verdant_plate_body":{"hrid":"/items/verdant_plate_body","name":"Verdant Plate Body","categoryHrid":"/item_categories/equipment","sellPrice":540,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":6},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/body","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.27,"slashEvasion":0.27,"smashEvasion":0.27,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0054,"slashEvasion":0.0054,"smashEvasion":0.0054,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":125},"/items/verdant_plate_legs":{"hrid":"/items/verdant_plate_legs","name":"Verdant Plate Legs","categoryHrid":"/item_categories/equipment","sellPrice":420,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":5},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/legs","levelRequirements":[{"skillHrid":"/skills/defense","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.21,"slashEvasion":0.21,"smashEvasion":0.21,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.0042,"slashEvasion":0.0042,"smashEvasion":0.0042,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":134},"/items/verdant_pot":{"hrid":"/items/verdant_pot","name":"Verdant Pot","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/brewing_tool","levelRequirements":[{"skillHrid":"/skills/brewing","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.225,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0.0045000000000000005,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":193},"/items/verdant_shears":{"hrid":"/items/verdant_shears","name":"Verdant Shears","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/foraging_tool","levelRequirements":[{"skillHrid":"/skills/foraging","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0.225,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0.0045000000000000005,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":172},"/items/verdant_spatula":{"hrid":"/items/verdant_spatula","name":"Verdant Spatula","categoryHrid":"/item_categories/equipment","sellPrice":300,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":3},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/cooking_tool","levelRequirements":[{"skillHrid":"/skills/cooking","level":10}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.225,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0.0045000000000000005,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":186},"/items/verdant_spear":{"hrid":"/items/verdant_spear","name":"Verdant Spear","categoryHrid":"/item_categories/equipment","sellPrice":360,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":4},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":10}],"combatStyleHrids":["/combat_styles/stab"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":0.42,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.12,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.0084,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0.0024,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":87},"/items/verdant_sword":{"hrid":"/items/verdant_sword","name":"Verdant Sword","categoryHrid":"/item_categories/equipment","sellPrice":360,"isTradable":true,"itemLevel":10,"enhancementCosts":[{"itemHrid":"/items/verdant_cheese","count":4},{"itemHrid":"/items/coin","count":45}],"equipmentDetail":{"type":"/equipment_types/main_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":10},{"skillHrid":"/skills/power","level":10}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":3000000000,"stabAccuracy":0,"slashAccuracy":0.225,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.225,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.0045000000000000005,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.0045000000000000005,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":88},"/items/vision_helmet":{"hrid":"/items/vision_helmet","name":"Vision Helmet","categoryHrid":"/item_categories/equipment","sellPrice":20000,"isTradable":true,"itemLevel":55,"enhancementCosts":[{"itemHrid":"/items/eyessence","count":10},{"itemHrid":"/items/crimson_cheese","count":3},{"itemHrid":"/items/coin","count":281}],"equipmentDetail":{"type":"/equipment_types/head","levelRequirements":[{"skillHrid":"/skills/defense","level":55}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0.15,"slashAccuracy":0.15,"smashAccuracy":0.15,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.4,"slashEvasion":0.4,"smashEvasion":0.4,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.003,"slashAccuracy":0.003,"smashAccuracy":0.003,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0.008,"slashEvasion":0.008,"smashEvasion":0.008,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":121},"/items/vision_shield":{"hrid":"/items/vision_shield","name":"Vision Shield","categoryHrid":"/item_categories/equipment","sellPrice":20000,"isTradable":true,"itemLevel":55,"enhancementCosts":[{"itemHrid":"/items/eyessence","count":12},{"itemHrid":"/items/crimson_cheese","count":3},{"itemHrid":"/items/coin","count":281}],"equipmentDetail":{"type":"/equipment_types/off_hand","levelRequirements":[{"skillHrid":"/skills/defense","level":55}],"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0.2,"slashAccuracy":0.2,"smashAccuracy":0.2,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":8,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0.004,"slashAccuracy":0.004,"smashAccuracy":0.004,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0.16,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":111},"/items/werewolf_claw":{"hrid":"/items/werewolf_claw","name":"Werewolf Claw","categoryHrid":"/item_categories/resource","sellPrice":10000,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":258},"/items/werewolf_slasher":{"hrid":"/items/werewolf_slasher","name":"Werewolf Slasher","categoryHrid":"/item_categories/equipment","sellPrice":400000,"isTradable":true,"itemLevel":85,"enhancementCosts":[{"itemHrid":"/items/twilight_essence","count":20},{"itemHrid":"/items/holy_cheese","count":5},{"itemHrid":"/items/coin","count":551}],"equipmentDetail":{"type":"/equipment_types/two_hand","levelRequirements":[{"skillHrid":"/skills/attack","level":85},{"skillHrid":"/skills/power","level":85}],"combatStyleHrids":["/combat_styles/slash"],"combatStats":{"attackInterval":2800000000,"stabAccuracy":0,"slashAccuracy":1.15,"smashAccuracy":0,"stabDamage":0,"slashDamage":1.15,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0.023,"smashAccuracy":0,"stabDamage":0,"slashDamage":0.023,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":83},"/items/wheat":{"hrid":"/items/wheat","name":"Wheat","categoryHrid":"/item_categories/resource","sellPrice":1,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":null,"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":null,"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":221},"/items/wisdom_tea":{"hrid":"/items/wisdom_tea","name":"Wisdom Tea","categoryHrid":"/item_categories/drink","sellPrice":30,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":0,"usableInActionTypeMap":{"/action_types/brewing":true,"/action_types/cheesesmithing":true,"/action_types/cooking":true,"/action_types/enhancing":true,"/action_types/foraging":true,"/action_types/milking":true},"canUseInInventory":false,"hitpointRestore":0,"manapointRestore":0,"recoveryDuration":0,"buffs":[{"sourceHrid":"/buff_sources/wisdom_tea","typeHrid":"/buff_types/wisdom","ratioBoost":0,"ratioBoostLevelBonus":0,"flatBoost":0.1,"flatBoostLevelBonus":0,"startTime":"0001-01-01T00:00:00Z","duration":300000000000}],"defaultCombatTriggers":null},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":56},"/items/yogurt":{"hrid":"/items/yogurt","name":"Yogurt","categoryHrid":"/item_categories/food","sellPrice":5,"isTradable":true,"itemLevel":0,"enhancementCosts":null,"equipmentDetail":{"type":"","levelRequirements":null,"combatStyleHrids":null,"combatStats":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatStats":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0},"combatEnhancementBonuses":{"attackInterval":0,"stabAccuracy":0,"slashAccuracy":0,"smashAccuracy":0,"stabDamage":0,"slashDamage":0,"smashDamage":0,"stabEvasion":0,"slashEvasion":0,"smashEvasion":0,"armor":0,"lifeSteal":0,"HPRegen":0,"MPRegen":0,"dropRate":0,"foodSlots":0,"drinkSlots":0},"noncombatEnhancementBonuses":{"milkingSpeed":0,"foragingSpeed":0,"cheesesmithingSpeed":0,"cookingSpeed":0,"brewingSpeed":0,"enhancingSuccess":0}},"consumableDetail":{"cooldownDuration":60000000000,"usableInActionTypeMap":{"/action_types/combat":true},"canUseInInventory":true,"hitpointRestore":0,"manapointRestore":50,"recoveryDuration":30000000000,"buffs":null,"defaultCombatTriggers":[{"dependencyHrid":"/combat_trigger_dependencies/self","conditionHrid":"/combat_trigger_conditions/missing_mp","comparatorHrid":"/combat_trigger_comparators/greater_than_equal","value":50}]},"abilityBookDetail":{"abilityHrid":"","levelRequirements":null,"experienceGain":0},"sortIndex":23}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combatsimulator_equipment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combatsimulator/equipment.js */ "./src/combatsimulator/equipment.js");
/* harmony import */ var _combatsimulator_monster_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combatsimulator/monster.js */ "./src/combatsimulator/monster.js");
/* harmony import */ var _combatsimulator_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combatsimulator/player.js */ "./src/combatsimulator/player.js");
/* harmony import */ var _combatsimulator_buff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combatsimulator/buff.js */ "./src/combatsimulator/buff.js");
/* harmony import */ var _combatsimulator_data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combatsimulator/data/abilityDetailMap.json */ "./src/combatsimulator/data/abilityDetailMap.json");
/* harmony import */ var _combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combatsimulator/data/itemDetailMap.json */ "./src/combatsimulator/data/itemDetailMap.json");
/* harmony import */ var _combatsimulator_trigger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combatsimulator/trigger.js */ "./src/combatsimulator/trigger.js");
/* harmony import */ var _combatsimulator_ability_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combatsimulator/ability.js */ "./src/combatsimulator/ability.js");
/* harmony import */ var _combatsimulator_consumable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combatsimulator/consumable.js */ "./src/combatsimulator/consumable.js");
/* harmony import */ var _combatsimulator_zone_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./combatsimulator/zone.js */ "./src/combatsimulator/zone.js");
/* harmony import */ var _combatsimulator_combatSimulator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./combatsimulator/combatSimulator.js */ "./src/combatsimulator/combatSimulator.js");
/* harmony import */ var _combatsimulator_data_combatTriggerDependencyDetailMap_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./combatsimulator/data/combatTriggerDependencyDetailMap.json */ "./src/combatsimulator/data/combatTriggerDependencyDetailMap.json");
/* harmony import */ var _combatsimulator_data_combatTriggerConditionDetailMap_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./combatsimulator/data/combatTriggerConditionDetailMap.json */ "./src/combatsimulator/data/combatTriggerConditionDetailMap.json");
/* harmony import */ var _combatsimulator_data_combatTriggerComparatorDetailMap_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./combatsimulator/data/combatTriggerComparatorDetailMap.json */ "./src/combatsimulator/data/combatTriggerComparatorDetailMap.json");
/* harmony import */ var _combatsimulator_data_abilitySlotsLevelRequirementList_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./combatsimulator/data/abilitySlotsLevelRequirementList.json */ "./src/combatsimulator/data/abilitySlotsLevelRequirementList.json");
/* harmony import */ var _combatsimulator_data_actionDetailMap_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./combatsimulator/data/actionDetailMap.json */ "./src/combatsimulator/data/actionDetailMap.json");
/* harmony import */ var _combatsimulator_data_combatMonsterDetailMap_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./combatsimulator/data/combatMonsterDetailMap.json */ "./src/combatsimulator/data/combatMonsterDetailMap.json");


















const ONE_SECOND = 1e9;
const ONE_HOUR = 60 * 60 * ONE_SECOND;

let buttonStartSimulation = document.getElementById("buttonStartSimulation");

let worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_worker_js"), __webpack_require__.b));

let player = new _combatsimulator_player_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
let food = [null, null, null];
let drinks = [null, null, null];
let abilities = [null, null, null, null];
let triggerMap = {};
let modalTriggers = [];

buttonStartSimulation.onclick = function () {
    let invalidElements = document.querySelectorAll(":invalid");
    if (invalidElements.length > 0) {
        invalidElements.forEach((element) => element.reportValidity());
        return;
    }
    startSimulation();
};

worker.onmessage = function (event) {
    switch (event.data.type) {
        case "simulation_result":
            showSimulationResult(event.data.simResult);
            printSimResult(event.data.simResult);
            break;
    }
};

// #region Equipment

function initEquipmentSection() {
    ["head", "body", "legs", "feet", "hands", "main_hand", "two_hand", "off_hand", "pouch"].forEach((type) => {
        initEquipmentSelect(type);
        initEnhancementLevelInput(type);
    });
}

function initEquipmentSelect(equipmentType) {
    let selectId = "selectEquipment_";
    if (equipmentType == "main_hand" || equipmentType == "two_hand") {
        selectId += "weapon";
    } else {
        selectId += equipmentType;
    }
    let selectElement = document.getElementById(selectId);

    let gameEquipment = Object.values(_combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__)
        .filter((item) => item.categoryHrid == "/item_categories/equipment")
        .filter((item) => item.equipmentDetail.type == "/equipment_types/" + equipmentType)
        .sort((a, b) => a.sortIndex - b.sortIndex);

    for (const equipment of Object.values(gameEquipment)) {
        selectElement.add(new Option(equipment.name, equipment.hrid));
    }

    selectElement.addEventListener("change", (event) => {
        equipmentSelectHandler(event, equipmentType);
    });
}

function initEnhancementLevelInput(equipmentType) {
    let inputId = "inputEquipmentEnhancementLevel_";
    if (equipmentType == "main_hand" || equipmentType == "two_hand") {
        inputId += "weapon";
    } else {
        inputId += equipmentType;
    }

    let inputElement = document.getElementById(inputId);
    inputElement.addEventListener("change", (event) => {
        enhancementLevelInputHandler(event, equipmentType);
    });
}

function equipmentSelectHandler(event, type) {
    let equipmentType = "/equipment_types/" + type;

    if (!event.target.value) {
        player.equipment[equipmentType] = null;
        updatePlayerStats();
        return;
    }

    let gameItem = _combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[event.target.value];

    // Weapon select has two handlers because of mainhand and twohand weapons. Ignore the handler with the wrong type
    if (gameItem.equipmentDetail.type != equipmentType) {
        return;
    }

    if (type == "two_hand") {
        player.equipment["/equipment_types/main_hand"] = null;
        player.equipment["/equipment_types/off_hand"] = null;
        document.getElementById("selectEquipment_off_hand").value = "";
        document.getElementById("inputEquipmentEnhancementLevel_off_hand").value = 0;
    }
    if (type == "off_hand" && player.equipment["/equipment_types/two_hand"]) {
        player.equipment["/equipment_types/two_hand"] = null;
        document.getElementById("selectEquipment_weapon").value = "";
        document.getElementById("inputEquipmentEnhancementLevel_weapon").value = 0;
    }

    let selectType = type;
    if (type == "main_hand" || type == "two_hand") {
        selectType = "weapon";
    }

    let enhancementLevel = document.getElementById("inputEquipmentEnhancementLevel_" + selectType).value;
    let equipment = new _combatsimulator_equipment_js__WEBPACK_IMPORTED_MODULE_0__["default"](gameItem.hrid, Number(enhancementLevel));
    player.equipment[equipmentType] = equipment;
    updatePlayerStats();
}

function enhancementLevelInputHandler(event, type) {
    let equipmentType = "/equipment_types/" + type;

    if (!player.equipment[equipmentType]) {
        return;
    }

    let equipment = new _combatsimulator_equipment_js__WEBPACK_IMPORTED_MODULE_0__["default"](player.equipment[equipmentType].hrid, Number(event.target.value));
    player.equipment[equipmentType] = equipment;
    updatePlayerStats();
}

// #endregion

// #region Level

function initLevelSection() {
    ["stamina", "intelligence", "attack", "power", "defense"].forEach((skill) => {
        let element = document.getElementById("inputLevel_" + skill);
        element.addEventListener("change", (event) => {
            levelInputHandler(event, skill);
        });
    });
}

function levelInputHandler(event, skill) {
    player[skill + "Level"] = Number(event.target.value);
    updatePlayerStats();
}

// #endregion

// #region Food

function initFoodSection() {
    for (let i = 0; i < 3; i++) {
        let element = document.getElementById("selectFood_" + i);

        let gameFoods = Object.values(_combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__)
            .filter((item) => item.categoryHrid == "/item_categories/food")
            .sort((a, b) => a.sortIndex - b.sortIndex);

        for (const food of Object.values(gameFoods)) {
            element.add(new Option(food.name, food.hrid));
        }

        element.addEventListener("change", (event) => foodSelectHandler(event, i));
    }

    updateAvailableFoodSlots();
}

function foodSelectHandler(event, index) {
    food[index] = event.target.value;

    let triggerButton = document.getElementById("buttonFoodTrigger_" + index);
    triggerButton.disabled = !food[index];

    if (food[index] && !triggerMap[food[index]]) {
        let gameItem = _combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[food[index]];
        triggerMap[food[index]] = structuredClone(gameItem.consumableDetail.defaultCombatTriggers);
    }
}

function updateAvailableFoodSlots() {
    for (let i = 0; i < 3; i++) {
        let selectElement = document.getElementById("selectFood_" + i);
        let triggerButton = document.getElementById("buttonFoodTrigger_" + i);

        selectElement.disabled = i >= player.combatStats.foodSlots;
        triggerButton.disabled = i >= player.combatStats.foodSlots || !food[i];
    }
}

// #endregion

// #region Drinks

function initDrinksSection() {
    for (let i = 0; i < 3; i++) {
        let element = document.getElementById("selectDrink_" + i);

        let gameDrinks = Object.values(_combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__)
            .filter((item) => item.categoryHrid == "/item_categories/drink")
            .filter((item) => item.consumableDetail.usableInActionTypeMap["/action_types/combat"])
            .sort((a, b) => a.sortIndex - b.sortIndex);

        for (const drink of Object.values(gameDrinks)) {
            element.add(new Option(drink.name, drink.hrid));
        }

        element.addEventListener("change", (event) => drinkSelectHandler(event, i));
    }

    updateAvailableDrinkSlots();
}

function drinkSelectHandler(event, index) {
    drinks[index] = event.target.value;

    let triggerButton = document.getElementById("buttonDrinkTrigger_" + index);
    triggerButton.disabled = !drinks[index];

    if (drinks[index] && !triggerMap[drinks[index]]) {
        let gameItem = _combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[drinks[index]];
        triggerMap[drinks[index]] = structuredClone(gameItem.consumableDetail.defaultCombatTriggers);
    }
}

function updateAvailableDrinkSlots() {
    for (let i = 0; i < 3; i++) {
        let selectElement = document.getElementById("selectDrink_" + i);
        let triggerButton = document.getElementById("buttonDrinkTrigger_" + i);

        selectElement.disabled = i >= player.combatStats.drinkSlots;
        triggerButton.disabled = i >= player.combatStats.drinkSlots || !drinks[i];
    }
}

// #endregion

// #region Abilities

function initAbilitiesSection() {
    for (let i = 0; i < 4; i++) {
        let selectElement = document.getElementById("selectAbility_" + i);

        let gameAbilities = Object.values(_combatsimulator_data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_4__).sort((a, b) => a.sortIndex - b.sortIndex);

        for (const ability of Object.values(gameAbilities)) {
            selectElement.add(new Option(ability.name, ability.hrid));
        }

        selectElement.addEventListener("change", (event) => abilitySelectHandler(event, i));
    }

    updateAvailableAbilitySlots();
}

function abilitySelectHandler(event, index) {
    abilities[index] = event.target.value;

    let triggerButton = document.getElementById("buttonAbilityTrigger_" + index);
    triggerButton.disabled = !abilities[index];

    if (abilities[index] && !triggerMap[abilities[index]]) {
        let gameAbility = _combatsimulator_data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_4__[abilities[index]];
        triggerMap[abilities[index]] = structuredClone(gameAbility.defaultCombatTriggers);
    }
}

function updateAvailableAbilitySlots() {
    for (let i = 0; i < 4; i++) {
        let selectElement = document.getElementById("selectAbility_" + i);
        let inputElement = document.getElementById("inputAbilityLevel_" + i);
        let triggerButton = document.getElementById("buttonAbilityTrigger_" + i);

        selectElement.disabled = player.intelligenceLevel < _combatsimulator_data_abilitySlotsLevelRequirementList_json__WEBPACK_IMPORTED_MODULE_14__[i + 1];
        inputElement.disabled = player.intelligenceLevel < _combatsimulator_data_abilitySlotsLevelRequirementList_json__WEBPACK_IMPORTED_MODULE_14__[i + 1];
        triggerButton.disabled = player.intelligenceLevel < _combatsimulator_data_abilitySlotsLevelRequirementList_json__WEBPACK_IMPORTED_MODULE_14__[i + 1] || !abilities[i];
    }
}

// #endregion

// #region Trigger

function initTriggerModal() {
    let modal = document.getElementById("triggerModal");
    modal.addEventListener("show.bs.modal", (event) => triggerModalShownHandler(event));

    let triggerSaveButton = document.getElementById("buttonTriggerModalSave");
    triggerSaveButton.addEventListener("click", (event) => triggerModalSaveHandler(event));

    let triggerAddButton = document.getElementById("buttonAddTrigger");
    triggerAddButton.addEventListener("click", (event) => triggerAddButtonHandler(event));

    let triggerDefaultButton = document.getElementById("buttonDefaultTrigger");
    triggerDefaultButton.addEventListener("click", (event) => triggerDefaultButtonHandler(event));

    for (let i = 0; i < 4; i++) {
        let triggerDependencySelect = document.getElementById("selectTriggerDependency_" + i);
        let triggerConditionSelect = document.getElementById("selectTriggerCondition_" + i);
        let triggerComparatorSelect = document.getElementById("selectTriggerComparator_" + i);
        let triggerValueInput = document.getElementById("inputTriggerValue_" + i);
        let triggerRemoveButton = document.getElementById("buttonRemoveTrigger_" + i);

        triggerDependencySelect.addEventListener("change", (event) => triggerDependencySelectHandler(event, i));
        triggerConditionSelect.addEventListener("change", (event) => triggerConditionSelectHandler(event, i));
        triggerComparatorSelect.addEventListener("change", (event) => triggerComparatorSelectHander(event, i));
        triggerValueInput.addEventListener("change", (event) => triggerValueInputHandler(event, i));
        triggerRemoveButton.addEventListener("click", (event) => triggerRemoveButtonHandler(event, i));
    }
}

function triggerModalShownHandler(event) {
    let triggerButton = event.relatedTarget;

    let triggerType = triggerButton.getAttribute("data-bs-triggertype");
    let triggerIndex = Number(triggerButton.getAttribute("data-bs-triggerindex"));

    let triggerTarget;
    switch (triggerType) {
        case "food":
            triggerTarget = food[triggerIndex];
            break;
        case "drink":
            triggerTarget = drinks[triggerIndex];
            break;
        case "ability":
            triggerTarget = abilities[triggerIndex];
            break;
    }

    let triggerTargetnput = document.getElementById("inputModalTriggerTarget");
    triggerTargetnput.value = triggerTarget;
    modalTriggers = triggerMap[triggerTarget];
    updateTriggerModal();
}

function triggerModalSaveHandler(event) {
    let triggerTargetnput = document.getElementById("inputModalTriggerTarget");
    let triggerTarget = triggerTargetnput.value;

    triggerMap[triggerTarget] = modalTriggers;
}

function triggerDependencySelectHandler(event, index) {
    modalTriggers[index].dependencyHrid = event.target.value;
    modalTriggers[index].conditionHrid = "";
    modalTriggers[index].comparatorHrid = "";
    modalTriggers[index].value = 0;

    updateTriggerModal();
}

function triggerConditionSelectHandler(event, index) {
    modalTriggers[index].conditionHrid = event.target.value;
    modalTriggers[index].comparatorHrid = "";
    modalTriggers[index].value = 0;

    updateTriggerModal();
}

function triggerComparatorSelectHander(event, index) {
    modalTriggers[index].comparatorHrid = event.target.value;

    updateTriggerModal();
}

function triggerValueInputHandler(event, index) {
    modalTriggers[index].value = Number(event.target.value);

    updateTriggerModal();
}

function triggerRemoveButtonHandler(event, index) {
    modalTriggers.splice(index, 1);

    updateTriggerModal();
}

function triggerAddButtonHandler(event) {
    if (modalTriggers.length == 4) {
        return;
    }

    modalTriggers.push({
        dependencyHrid: "",
        conditionHrid: "",
        comparatorHrid: "",
        value: 0,
    });

    updateTriggerModal();
}

function triggerDefaultButtonHandler(event) {
    let triggerTargetnput = document.getElementById("inputModalTriggerTarget");
    let triggerTarget = triggerTargetnput.value;

    if (triggerTarget.startsWith("/items/")) {
        modalTriggers = structuredClone(_combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[triggerTarget].consumableDetail.defaultCombatTriggers);
    } else {
        modalTriggers = structuredClone(_combatsimulator_data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_4__[triggerTarget].defaultCombatTriggers);
    }

    updateTriggerModal();
}

function updateTriggerModal() {
    let triggerStartTextElement = document.getElementById("triggerStartText");
    if (modalTriggers.length == 0) {
        triggerStartTextElement.innerHTML = "Activate as soon as it's off cooldown";
    } else {
        triggerStartTextElement.innerHTML = "Activate when:";
    }

    let triggerAddButton = document.getElementById("buttonAddTrigger");
    triggerAddButton.disabled = modalTriggers.length == 4;

    let triggersValid = true;

    for (let i = 0; i < 4; i++) {
        let triggerElement = document.getElementById("modalTrigger_" + i);

        if (!modalTriggers[i]) {
            hideElement(triggerElement);
            continue;
        }

        showElement(triggerElement);

        let triggerDependencySelect = document.getElementById("selectTriggerDependency_" + i);
        let triggerConditionSelect = document.getElementById("selectTriggerCondition_" + i);
        let triggerComparatorSelect = document.getElementById("selectTriggerComparator_" + i);
        let triggerValueInput = document.getElementById("inputTriggerValue_" + i);

        showElement(triggerDependencySelect);
        fillTriggerDependencySelect(triggerDependencySelect);

        if (modalTriggers[i].dependencyHrid == "") {
            hideElement(triggerConditionSelect);
            hideElement(triggerComparatorSelect);
            hideElement(triggerValueInput);
            triggersValid = false;
            continue;
        }

        triggerDependencySelect.value = modalTriggers[i].dependencyHrid;
        showElement(triggerConditionSelect);
        fillTriggerConditionSelect(triggerConditionSelect, modalTriggers[i].dependencyHrid);

        if (modalTriggers[i].conditionHrid == "") {
            hideElement(triggerComparatorSelect);
            hideElement(triggerValueInput);
            triggersValid = false;
            continue;
        }

        triggerConditionSelect.value = modalTriggers[i].conditionHrid;
        showElement(triggerComparatorSelect);
        fillTriggerComparatorSelect(triggerComparatorSelect, modalTriggers[i].conditionHrid);

        if (modalTriggers[i].comparatorHrid == "") {
            hideElement(triggerValueInput);
            triggersValid = false;
            continue;
        }

        triggerComparatorSelect.value = modalTriggers[i].comparatorHrid;

        if (_combatsimulator_data_combatTriggerComparatorDetailMap_json__WEBPACK_IMPORTED_MODULE_13__[modalTriggers[i].comparatorHrid].allowValue) {
            showElement(triggerValueInput);
            triggerValueInput.value = modalTriggers[i].value;
        } else {
            hideElement(triggerValueInput);
        }
    }

    let triggerSaveButton = document.getElementById("buttonTriggerModalSave");
    triggerSaveButton.disabled = !triggersValid;
}

function fillTriggerDependencySelect(element) {
    element.length = 0;
    element.add(new Option("", ""));

    for (const dependency of Object.values(_combatsimulator_data_combatTriggerDependencyDetailMap_json__WEBPACK_IMPORTED_MODULE_11__).sort(
        (a, b) => a.sortIndex - b.sortIndex
    )) {
        element.add(new Option(dependency.name, dependency.hrid));
    }
}

function fillTriggerConditionSelect(element, dependencyHrid) {
    let dependency = _combatsimulator_data_combatTriggerDependencyDetailMap_json__WEBPACK_IMPORTED_MODULE_11__[dependencyHrid];

    let conditions;
    if (dependency.isSingleTarget) {
        conditions = Object.values(_combatsimulator_data_combatTriggerConditionDetailMap_json__WEBPACK_IMPORTED_MODULE_12__).filter((condition) => condition.isSingleTarget);
    } else {
        conditions = Object.values(_combatsimulator_data_combatTriggerConditionDetailMap_json__WEBPACK_IMPORTED_MODULE_12__).filter((condition) => condition.isMultiTarget);
    }

    element.length = 0;
    element.add(new Option("", ""));

    for (const condition of Object.values(conditions).sort((a, b) => a.sortIndex - b.sortIndex)) {
        element.add(new Option(condition.name, condition.hrid));
    }
}

function fillTriggerComparatorSelect(element, conditionHrid) {
    let condition = _combatsimulator_data_combatTriggerConditionDetailMap_json__WEBPACK_IMPORTED_MODULE_12__[conditionHrid];

    let comparators = condition.allowedComparatorHrids.map((hrid) => _combatsimulator_data_combatTriggerComparatorDetailMap_json__WEBPACK_IMPORTED_MODULE_13__[hrid]);

    element.length = 0;
    element.add(new Option("", ""));

    for (const comparator of Object.values(comparators).sort((a, b) => a.sortIndex - b.sortIndex)) {
        element.add(new Option(comparator.name, comparator.hrid));
    }
}

function hideElement(element) {
    element.classList.remove("d-flex");
    element.classList.add("d-none");
}

function showElement(element) {
    element.classList.remove("d-none");
    element.classList.add("d-flex");
}

// #endregion

// #region Zones

function initZones() {
    let zoneSelect = document.getElementById("selectZone");

    let gameZones = Object.values(_combatsimulator_data_actionDetailMap_json__WEBPACK_IMPORTED_MODULE_15__)
        .filter((action) => action.type == "/action_types/combat")
        .sort((a, b) => a.sortIndex - b.sortIndex);

    for (const zone of Object.values(gameZones)) {
        zoneSelect.add(new Option(zone.name, zone.hrid));
    }
}

// #endregion

// #region Simulation Result

function showSimulationResult(simResult) {
    showKills(simResult);
    showDeaths(simResult);
    showExperienceGained(simResult);
    showConsumablesUsed(simResult);
    showHitpointsGained(simResult);
    showManapointsGained(simResult);
    showDamageDone(simResult);
    showDamageTaken(simResult);
}

function showKills(simResult) {
    let resultDiv = document.getElementById("simulationResultKills");
    let newChildren = [];

    let hoursSimulated = simResult.simulatedTime / ONE_HOUR;
    let playerDeaths = simResult.deaths["player"] ?? 0;
    let encountersPerHour = ((simResult.encounters - playerDeaths) / hoursSimulated).toFixed(1);

    let encountersRow = createRow(["col-md-6", "col-md-6 text-end"], ["Encounters", encountersPerHour]);
    newChildren.push(encountersRow);

    let monsters = Object.keys(simResult.deaths)
        .filter((enemy) => enemy != "player")
        .sort();

    for (const monster of monsters) {
        let killsPerHour = (simResult.deaths[monster] / hoursSimulated).toFixed(1);
        let monsterRow = createRow(
            ["col-md-6", "col-md-6 text-end"],
            [_combatsimulator_data_combatMonsterDetailMap_json__WEBPACK_IMPORTED_MODULE_16__[monster].name, killsPerHour]
        );
        newChildren.push(monsterRow);
    }

    resultDiv.replaceChildren(...newChildren);
}

function showDeaths(simResult) {
    let resultDiv = document.getElementById("simulationResultPlayerDeaths");

    let hoursSimulated = simResult.simulatedTime / ONE_HOUR;
    let playerDeaths = simResult.deaths["player"] ?? 0;
    let deathsPerHour = (playerDeaths / hoursSimulated).toFixed(2);

    let deathRow = createRow(["col-md-6", "col-md-6 text-end"], ["Player", deathsPerHour]);
    resultDiv.replaceChildren(deathRow);
}

function showExperienceGained(simResult) {
    let resultDiv = document.getElementById("simulationResultExperienceGain");
    let newChildren = [];

    let hoursSimulated = simResult.simulatedTime / ONE_HOUR;

    let totalExperience = Object.values(simResult.experienceGained["player"]).reduce((prev, cur) => prev + cur, 0);
    let totalExperiencePerHour = (totalExperience / hoursSimulated).toFixed(0);
    let totalRow = createRow(["col-md-6", "col-md-6 text-end"], ["Total", totalExperiencePerHour]);
    newChildren.push(totalRow);

    ["Stamina", "Intelligence", "Attack", "Power", "Defense"].forEach((skill) => {
        let experience = simResult.experienceGained["player"][skill.toLowerCase()] ?? 0;
        let experiencePerHour = (experience / hoursSimulated).toFixed(0);
        let experienceRow = createRow(["col-md-6", "col-md-6 text-end"], [skill, experiencePerHour]);
        newChildren.push(experienceRow);
    });

    resultDiv.replaceChildren(...newChildren);
}

function showConsumablesUsed(simResult) {
    let resultDiv = document.getElementById("simulationResultConsumablesUsed");
    let newChildren = [];

    let hoursSimulated = simResult.simulatedTime / ONE_HOUR;

    if (!simResult.consumablesUsed["player"]) {
        resultDiv.replaceChildren(...newChildren);
        return;
    }

    let consumablesUsed = Object.entries(simResult.consumablesUsed["player"]).sort((a, b) => b[1] - a[1]);

    for (const [consumable, amount] of consumablesUsed) {
        let consumablesPerHour = (amount / hoursSimulated).toFixed(0);
        let consumableRow = createRow(
            ["col-md-6", "col-md-6 text-end"],
            [_combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[consumable].name, consumablesPerHour]
        );
        newChildren.push(consumableRow);
    }

    resultDiv.replaceChildren(...newChildren);
}

function showHitpointsGained(simResult) {
    let resultDiv = document.getElementById("simulationResultHealthRestored");
    let newChildren = [];

    let secondsSimulated = simResult.simulatedTime / ONE_SECOND;

    if (!simResult.hitpointsGained["player"]) {
        resultDiv.replaceChildren(...newChildren);
        return;
    }

    let hitpointsGained = Object.entries(simResult.hitpointsGained["player"]).sort((a, b) => b[1] - a[1]);

    let totalHitpointsGained = hitpointsGained.reduce((prev, cur) => prev + cur[1], 0);
    let totalHitpointsPerSecond = (totalHitpointsGained / secondsSimulated).toFixed(2);
    let totalRow = createRow(
        ["col-md-6", "col-md-3 text-end", "col-md-3 text-end"],
        ["Total", totalHitpointsPerSecond, "100%"]
    );
    newChildren.push(totalRow);

    for (const [source, amount] of hitpointsGained) {
        if (amount == 0) {
            continue;
        }

        let sourceText;
        switch (source) {
            case "regen":
                sourceText = "Regen";
                break;
            case "lifesteal":
                sourceText = "Life Steal";
                break;
            default:
                sourceText = _combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[source].name;
                break;
        }
        let hitpointsPerSecond = (amount / secondsSimulated).toFixed(2);
        let percentage = ((100 * amount) / totalHitpointsGained).toFixed(0);

        let row = createRow(
            ["col-md-6", "col-md-3 text-end", "col-md-3 text-end"],
            [sourceText, hitpointsPerSecond, percentage + "%"]
        );
        newChildren.push(row);
    }

    resultDiv.replaceChildren(...newChildren);
}

function showManapointsGained(simResult) {
    let resultDiv = document.getElementById("simulationResultManaRestored");
    let newChildren = [];

    let secondsSimulated = simResult.simulatedTime / ONE_SECOND;

    if (!simResult.manapointsGained["player"]) {
        resultDiv.replaceChildren(...newChildren);
        return;
    }

    let manapointsGained = Object.entries(simResult.manapointsGained["player"]).sort((a, b) => b[1] - a[1]);

    let totalManapointsGained = manapointsGained.reduce((prev, cur) => prev + cur[1], 0);
    let totalManapointsPerSecond = (totalManapointsGained / secondsSimulated).toFixed(2);
    let totalRow = createRow(
        ["col-md-6", "col-md-3 text-end", "col-md-3 text-end"],
        ["Total", totalManapointsPerSecond, "100%"]
    );
    newChildren.push(totalRow);

    for (const [source, amount] of manapointsGained) {
        if (amount == 0) {
            continue;
        }

        let sourceText;
        switch (source) {
            case "regen":
                sourceText = "Regen";
                break;
            default:
                sourceText = _combatsimulator_data_itemDetailMap_json__WEBPACK_IMPORTED_MODULE_5__[source].name;
                break;
        }
        let manapointsPerSecond = (amount / secondsSimulated).toFixed(2);
        let percentage = ((100 * amount) / totalManapointsGained).toFixed(0);

        let row = createRow(
            ["col-md-6", "col-md-3 text-end", "col-md-3 text-end"],
            [sourceText, manapointsPerSecond, percentage + "%"]
        );
        newChildren.push(row);
    }

    let ranOutOfManaText = simResult.playerRanOutOfMana ? "Yes" : "No";
    let ranOutOfManaRow = createRow(["col-md-6", "col-md-6 text-end"], ["Ran out of mana", ranOutOfManaText]);
    newChildren.push(ranOutOfManaRow);

    resultDiv.replaceChildren(...newChildren);
}

function showDamageDone(simResult) {
    let totalDamageDone = {};
    let enemyIndex = 1;

    let secondsSimulated = simResult.simulatedTime / ONE_SECOND;

    for (let i = 1; i < 5; i++) {
        let accordion = document.getElementById("simulationResultDamageDoneAccordionEnemy" + i);
        hideElement(accordion);
    }

    for (const [target, abilities] of Object.entries(simResult.attacks["player"])) {
        let targetDamageDone = {};

        for (const [ability, abilityCasts] of Object.entries(abilities)) {
            let casts = Object.values(abilityCasts).reduce((prev, cur) => prev + cur, 0);
            let misses = abilityCasts["miss"] ?? 0;
            let damage = Object.entries(abilityCasts)
                .filter((entry) => entry[0] != "miss")
                .reduce((prev, cur) => prev + Number(cur[0]) * cur[1], 0);

            targetDamageDone[ability] = {
                casts,
                misses,
                damage,
            };
            if (totalDamageDone[ability]) {
                totalDamageDone[ability].casts += casts;
                totalDamageDone[ability].misses += misses;
                totalDamageDone[ability].damage += damage;
            } else {
                totalDamageDone[ability] = {
                    casts,
                    misses,
                    damage,
                };
            }
        }

        let resultDiv = document.getElementById("simulationResultDamageDoneEnemy" + enemyIndex);
        createDamageTable(resultDiv, targetDamageDone, secondsSimulated);

        let resultAccordion = document.getElementById("simulationResultDamageDoneAccordionEnemy" + enemyIndex);
        showElement(resultAccordion);

        let resultAccordionButton = document.getElementById(
            "buttonSimulationResultDamageDoneAccordionEnemy" + enemyIndex
        );
        let targetName = _combatsimulator_data_combatMonsterDetailMap_json__WEBPACK_IMPORTED_MODULE_16__[target].name;
        resultAccordionButton.innerHTML = "<b>Damage Done (" + targetName + ")</b>";

        enemyIndex++;
    }

    let totalResultDiv = document.getElementById("simulationResultTotalDamageDone");
    createDamageTable(totalResultDiv, totalDamageDone, secondsSimulated);
}

function showDamageTaken(simResult) {
    let totalDamageTaken = {};
    let enemyIndex = 1;

    let secondsSimulated = simResult.simulatedTime / ONE_SECOND;

    for (let i = 1; i < 5; i++) {
        let accordion = document.getElementById("simulationResultDamageTakenAccordionEnemy" + i);
        hideElement(accordion);
    }

    for (const [source, targets] of Object.entries(simResult.attacks)) {
        if (source == "player") {
            continue;
        }

        let sourceDamageTaken = {};

        for (const [ability, abilityCasts] of Object.entries(targets["player"])) {
            let casts = Object.values(abilityCasts).reduce((prev, cur) => prev + cur, 0);
            let misses = abilityCasts["miss"] ?? 0;
            let damage = Object.entries(abilityCasts)
                .filter((entry) => entry[0] != "miss")
                .reduce((prev, cur) => prev + Number(cur[0]) * cur[1], 0);

            sourceDamageTaken[ability] = {
                casts,
                misses,
                damage,
            };
            if (totalDamageTaken[ability]) {
                totalDamageTaken[ability].casts += casts;
                totalDamageTaken[ability].misses += misses;
                totalDamageTaken[ability].damage += damage;
            } else {
                totalDamageTaken[ability] = {
                    casts,
                    misses,
                    damage,
                };
            }
        }

        let resultDiv = document.getElementById("simulationResultDamageTakenEnemy" + enemyIndex);
        createDamageTable(resultDiv, sourceDamageTaken, secondsSimulated);

        let resultAccordion = document.getElementById("simulationResultDamageTakenAccordionEnemy" + enemyIndex);
        showElement(resultAccordion);

        let resultAccordionButton = document.getElementById(
            "buttonSimulationResultDamageTakenAccordionEnemy" + enemyIndex
        );
        let sourceName = _combatsimulator_data_combatMonsterDetailMap_json__WEBPACK_IMPORTED_MODULE_16__[source].name;
        resultAccordionButton.innerHTML = "<b>Damage Done (" + sourceName + ")</b>";

        enemyIndex++;
    }

    let totalResultDiv = document.getElementById("simulationResultTotalDamageTaken");
    createDamageTable(totalResultDiv, totalDamageTaken, secondsSimulated);
}

function createDamageTable(resultDiv, damageDone, secondsSimulated) {
    let newChildren = [];

    let sortedDamageDone = Object.entries(damageDone).sort((a, b) => b[1].damage - a[1].damage);

    let totalCasts = sortedDamageDone.reduce((prev, cur) => prev + cur[1].casts, 0);
    let totalMisses = sortedDamageDone.reduce((prev, cur) => prev + cur[1].misses, 0);
    let totalDamage = sortedDamageDone.reduce((prev, cur) => prev + cur[1].damage, 0);
    let totalHitChance = ((100 * (totalCasts - totalMisses)) / totalCasts).toFixed(1);
    let totalDamagePerSecond = (totalDamage / secondsSimulated).toFixed(2);

    let totalRow = createRow(
        ["col-md-5", "col-md-3 text-end", "col-md-2 text-end", "col-md-2 text-end"],
        ["Total", totalHitChance + "%", totalDamagePerSecond, "100%"]
    );
    newChildren.push(totalRow);

    for (const [ability, damageInfo] of sortedDamageDone) {
        let abilityText;
        switch (ability) {
            case "autoAttack":
                abilityText = "Auto Attack";
                break;
            case "bleed":
                abilityText = "Bleed";
                break;
            default:
                abilityText = _combatsimulator_data_abilityDetailMap_json__WEBPACK_IMPORTED_MODULE_4__[ability].name;
                break;
        }

        let hitChance = ((100 * (damageInfo.casts - damageInfo.misses)) / damageInfo.casts).toFixed(1);
        let damagePerSecond = (damageInfo.damage / secondsSimulated).toFixed(2);
        let percentage = ((100 * damageInfo.damage) / totalDamage).toFixed(0);

        let row = createRow(
            ["col-md-5", "col-md-3 text-end", "col-md-2 text-end", "col-md-2 text-end"],
            [abilityText, hitChance + "%", damagePerSecond, percentage + "%"]
        );
        newChildren.push(row);
    }

    resultDiv.replaceChildren(...newChildren);
}

function createRow(columnClassNames, columnValues) {
    let row = createElement("div", "row");

    for (let i = 0; i < columnClassNames.length; i++) {
        let column = createElement("div", columnClassNames[i], columnValues[i]);
        row.appendChild(column);
    }

    return row;
}

function createElement(tagName, className, innerHTML = "") {
    let element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = innerHTML;

    return element;
}

function printSimResult(simResult) {
    console.log(simResult);
    return;

    console.log("Simulated hours:", simResult.simulatedTime / (60 * 60 * 1e9));

    console.log("Encounters per hour:", simResult.encounters / (simResult.simulatedTime / (60 * 60 * 1e9)));

    console.log("Deaths per hour:");
    for (const [key, value] of Object.entries(simResult.deaths)) {
        console.log(key, value / (simResult.simulatedTime / (60 * 60 * 1e9)));
    }

    console.log("Experience per hour:");
    for (const [key, value] of Object.entries(simResult.experienceGained["player"])) {
        console.log(key, value / (simResult.simulatedTime / (60 * 60 * 1e9)));
    }

    for (const [source, targets] of Object.entries(simResult.attacks)) {
        console.log("Attack stats for", source);
        for (const [target, abilities] of Object.entries(targets)) {
            console.log("   Against", target);
            for (const [ability, attacks] of Object.entries(abilities)) {
                console.log("       ", ability);
                let misses = attacks["miss"] ?? 0;
                let attempts = Object.values(attacks).reduce((prev, cur) => prev + cur);
                console.log("           Casts:", attempts);
                console.log("           Hitchance:", 1 - misses / attempts);
                let totalDamage = Object.entries(attacks)
                    .filter(([key, value]) => key != "miss")
                    .map(([key, value]) => key * value)
                    .reduce((prev, cur) => prev + cur);
                console.log("           Average hit:", totalDamage / (attempts - misses));
            }
        }
    }
}

// #endregion

function startSimulation() {
    for (let i = 0; i < 3; i++) {
        if (food[i] && i < player.combatStats.foodSlots) {
            let consumable = new _combatsimulator_consumable_js__WEBPACK_IMPORTED_MODULE_8__["default"](food[i], triggerMap[food[i]]);
            player.food[i] = consumable;
        } else {
            player.food[i] = null;
        }

        if (drinks[i] && i < player.combatStats.drinkSlots) {
            let consumable = new _combatsimulator_consumable_js__WEBPACK_IMPORTED_MODULE_8__["default"](drinks[i], triggerMap[drinks[i]]);
            player.drinks[i] = consumable;
        } else {
            player.drinks[i] = null;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (abilities[i] && player.intelligenceLevel >= _combatsimulator_data_abilitySlotsLevelRequirementList_json__WEBPACK_IMPORTED_MODULE_14__[i + 1]) {
            let abilityLevelInput = document.getElementById("inputAbilityLevel_" + i);
            let ability = new _combatsimulator_ability_js__WEBPACK_IMPORTED_MODULE_7__["default"](abilities[i], Number(abilityLevelInput.value), triggerMap[abilities[i]]);
            player.abilities[i] = ability;
        } else {
            player.abilities[i] = null;
        }
    }

    let zoneSelect = document.getElementById("selectZone");
    let simulationTimeInput = document.getElementById("inputSimulationTime");

    let simulationTimeLimit = Number(simulationTimeInput.value) * ONE_HOUR;

    let workerMessage = {
        type: "start_simulation",
        player: player,
        zoneHrid: zoneSelect.value,
        simulationTimeLimit: simulationTimeLimit,
    };

    worker.postMessage(workerMessage);
}

function updatePlayerStats() {
    player.updateCombatStats();

    [
        "maxHitpoints",
        "maxManapoints",
        "stabAccuracyRating",
        "stabMaxDamage",
        "slashAccuracyRating",
        "slashMaxDamage",
        "smashAccuracyRating",
        "smashMaxDamage",
        "stabEvasionRating",
        "slashEvasionRating",
        "smashEvasionRating",
        "armor",
    ].forEach((stat) => {
        let element = document.getElementById("combatStat_" + stat);
        element.innerHTML = Math.floor(player.combatStats[stat]);
    });

    let combatStyleElement = document.getElementById("combatStat_combatStyleHrid");
    let combatStyle = player.combatStats.combatStyleHrid;
    combatStyleElement.innerHTML = combatStyle.charAt(0).toUpperCase() + combatStyle.slice(1);

    let attackIntervalElement = document.getElementById("combatStat_attackInterval");
    attackIntervalElement.innerHTML = (player.combatStats.attackInterval / 1e9).toLocaleString() + "s";

    ["lifeSteal", "HPRegen", "MPRegen"].forEach((stat) => {
        let element = document.getElementById("combatStat_" + stat);
        let value = (100 * player.combatStats[stat]).toLocaleString([], {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        });
        element.innerHTML = value + "%";
    });

    updateAvailableFoodSlots();
    updateAvailableDrinkSlots();
    updateAvailableAbilitySlots();
}

updatePlayerStats();

initEquipmentSection();
initLevelSection();
initFoodSection();
initDrinksSection();
initAbilitiesSection();
initZones();
initTriggerModal();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map