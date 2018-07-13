"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.next = next;
exports.previous = previous;
exports.nextSibling = nextSibling;
exports.previousSibling = previousSibling;
exports.traverse = traverse;
exports.firstChild = firstChild;
exports.lastChild = lastChild;
exports.appendChild = appendChild;
exports.insertBefore = insertBefore;
exports.insertAfter = insertAfter;
exports.removeChild = removeChild;
exports.remove = remove;
exports.isFirstChild = exports.isLastChild = exports.CLOSE = exports.BRANCH = exports.LEAF = void 0;
const LEAF = 1;
exports.LEAF = LEAF;
const BRANCH = 2;
exports.BRANCH = BRANCH;
const CLOSE = 3;
/**
 * Create node: branch or leaf
 * Actually, a LEAF never has $3...
 * @param  {Object} [props={}]  initial object
 * @param  {Number} [type=LEAF] node type
 * @return {Object}             node-formatted object
 */

exports.CLOSE = CLOSE;

function create(props = {}, type = LEAF) {
  return Object.assign({
    $0: type,
    $1: void 0,
    $2: void 0,
    $3: void 0
  }, props);
}
/**
 * Get the node's next
 * @param  {[type]}   node [description]
 * @return {Function}      [description]
 */


function next(node) {
  return node.$1;
}

function previous(node) {
  return node.$2;
}

function nextSibling(node) {
  if (isLastChild(node)) return;
  return node.$0 === LEAF ? node.$1 : node.$3.$1;
}

function previousSibling(node) {
  if (isFirstChild(node)) return;
  const prev = node.$2;
  return prev.$0 === CLOSE ? prev.$3 : prev;
}

function* traverse(node) {
  while (node) {
    yield node;
    node = node.$1;
  }
}

function firstChild(node) {
  if (node.$0 === BRANCH) return node.$1;
}

function lastChild(node) {
  if (node.$0 === BRANCH) return node.$3.$2;
}

function _promote(node) {
  node.$0 = BRANCH; // add closer

  const closer = node.$3 = create({}, CLOSE); // point closer back to node

  closer.$3 = node; // re-attach sibling to closer

  closer.$1 = node.$1; // NOTE expect $1 to be overwritten
  // and $2 to stay the same

  return node;
}

function _demote(node) {
  node.$0 = LEAF; // re-attach sibling from closer

  node.$1 = node.$3.$1; // delete closer

  delete node.$3; // NOTE expect $2 to stay the same

  return node;
} // - when child inserted, upgrade to BRANCH


function appendChild(node, child) {
  if (node.$0 == LEAF) {
    // NOTE no last child
    node = _promote(node); // 1. attach child

    node.$1 = child; // 2. point child's $2 back to parent

    child.$2 = node; // 3. point child to node's closer

    child.$1 = node.$3; // 4. point node's closer to child

    node.$3.$2 = child;
  } else {
    insertAfter(child, lastChild(node));
  }

  return child;
}
/**
 * insert node before ref (sibling)
 * @param  {node} node [description]
 * @param  {node} ref  [description]
 * @return {node}      [description]
 */


function insertBefore(node, ref) {
  if (isFirstChild(ref)) {
    const parent = ref.$2; // replace parent's $1 with node

    parent.$1 = node; // point back to parent

    node.$2 = parent;
  } // update pointers


  if (node.$0 === BRANCH) {
    node.$3.$1 = ref;
  } else {
    node.$1 = ref;
  }

  ref.$2 = node;
  return node;
}

function insertAfter(node, ref) {
  const refIsBranch = ref.$0 === BRANCH; // get parent's closer

  const next = refIsBranch ? ref.$3.$1 : ref.$1; // point parent's closer to node

  if (next) {
    next.$2 = node; // point node's next to next

    if (node.$0 === BRANCH) {
      node.$3.$1 = next;
    } else {
      node.$1 = next;
    }
  }

  if (refIsBranch) {
    // point ref's next to node
    ref.$3.$1 = node; // point node back to ref

    node.$2 = ref.$3;
  } else {
    // point ref's next to node
    ref.$1 = node; // point node back to ref

    node.$2 = ref;
  }

  return node;
}

const isLastChild = node => node.$1.$0 === CLOSE;

exports.isLastChild = isLastChild;

const isFirstChild = node => node.$2.$0 === BRANCH;

exports.isFirstChild = isFirstChild;

const isEmptyBranch = node => node.$1 === node.$3;

function removeChild(node, child) {
  if (isLastChild(child)) {
    // last child
    const prev = child.$2;
    prev.$1 = node.$3;
  } else {
    const next = nextSibling(child);

    if (isFirstChild(child)) {
      // child is first, attach next to node
      next.$2 = node; // set new first child

      node.$1 = next;
    } else {
      const prev = child.$2;
      prev.$1 = next;
      next.$2 = prev;
    }
  }

  return isEmptyBranch(node) ? _demote(node) : node;
}

function remove(node) {
  let parent;

  if (isFirstChild(node)) {
    parent = node.$2;
  } else if (isLastChild(node)) {
    parent = node.$1.$3;
  } else {
    // splice out
    const prev = node.$2;
    prev.$1 = node;
    node.$2 = prev;
    return prev;
  }

  return lastChild(removeChild(parent, node));
}