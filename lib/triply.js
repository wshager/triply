"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Triply = void 0;

var chimp = _interopRequireWildcard(require("./chimp"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Triply {
  constructor(props = {}) {
    this._root = this._insert = chimp.create(props);
  }

  insertAfter(props = {}, ref) {
    const ins = chimp.insertAfter(chimp.create(props), ref || this._insert);
    if (!ref) this._insert = ins;
    return this;
  }

  appendChild(props = {}, ref) {
    const ins = chimp.appendChild(ref || this._insert, chimp.create(props));
    if (!ref) this._insert = ins;
    return this;
  }

  push(props = {}) {
    return this.insertAfter(props);
  }

  pop() {
    this._insert = chimp.remove(this._insert);
    return this;
  }

  insertBefore(props = {}, ref) {
    const ins = chimp.insertBefore(chimp.create(props), ref || this._insert);
    if (!ref) this._insert = ins;
    return this;
  }

  open(props = {}) {
    // create new leaf and move to it
    return this.appendChild(props);
  }

  close() {
    // move insert down one level if possible
    const next = this._insert.$1;
    if (next && next.$0 === chimp.CLOSE) this._insert = next.$3;
    return this;
  }

  previous() {
    // move insert back
    const prev = this._insert.$2;
    if (prev) this._insert = prev.$0 === chimp.CLOSE ? prev.$3 : prev;
    return this;
  }

  next() {
    // move insert back
    const next = this._insert.$1;
    if (next) this._insert = next.$0 === chimp.CLOSE ? next.$3 : next;
    return this;
  }

  traverse() {
    return chimp.traverse(this._root);
  }

}

const Monkey = Object.assign(Triply, chimp);
exports.Triply = Monkey;
var _default = Monkey;
exports.default = _default;