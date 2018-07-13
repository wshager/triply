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
exports.link = exports.isEmptyBranch = exports.isFirstChild = exports.isLastChild = exports.isClose = exports.isBranch = exports.isLeaf = exports.CLOSE = exports.BRANCH = exports.LEAF = void 0;
const LEAF = 1;
exports.LEAF = LEAF;
const BRANCH = 2;
exports.BRANCH = BRANCH;
const CLOSE = 3;
exports.CLOSE = CLOSE;

const isLeaf = node => node.$0 === LEAF;

exports.isLeaf = isLeaf;

const isBranch = node => node.$0 === BRANCH;

exports.isBranch = isBranch;

const isClose = node => node.$0 === CLOSE;
/**
 * Create node: branch or leaf
 * Actually, a LEAF never has $3...
 * @param  {Object} [props={}]  initial object
 * @param  {Number} [type=LEAF] node type
 * @return {Object}             node-formatted object
 */


exports.isClose = isClose;

function create(props = {}, type = LEAF) {
  return Object.assign({
    $0: type,
    $1: void 0,
    $2: void 0,
    $3: void 0
  }, props);
}
/**
 * Get the node's next node in depth-first traversal
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function next(node) {
  return node.$1;
}
/**
 * Get the node's previous node in depth-first traversal
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function previous(node) {
  return node.$2;
}
/**
 * Get the node's nextSibling
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function nextSibling(node) {
  if (isLastChild(node)) return;
  return node.$0 === LEAF ? node.$1 : node.$3.$1;
}
/**
 * Get the node's previousSibling
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function previousSibling(node) {
  if (isFirstChild(node)) return;
  const prev = node.$2;
  return prev.$0 === CLOSE ? prev.$3 : prev;
}
/**
 * Traverse node
 * @param  {Object}    node  Node-formatted object
 * @yields {Object}          Node-formatted object
 */


function* traverse(node) {
  if (isLeaf(node)) return yield node;
  const start = node;

  while (node) {
    yield node;
    if (node === start.$3) return;
    node = node.$1;
  }
}
/**
 * Get the node's firstChild
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function firstChild(node) {
  if (node.$0 === BRANCH) return node.$1;
}
/**
 * Get the node's lastChild
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function lastChild(node) {
  if (node.$0 === BRANCH) return node.$3.$2;
}
/**
 * Expand LEAF into BRANCH (private)
 * @param  {Object}   node      Node-formatted object
 * @return {Object}             Node-formatted object
 */


function _promote(node) {
  node.$0 = BRANCH; // add closer

  const closer = node.$3 = create({}, CLOSE); // point closer back to node

  closer.$3 = node; // re-attach sibling to closer

  closer.$1 = node.$1; // NOTE expect $1 to be overwritten
  // and $2 to stay the same

  return node;
}
/**
 * Collapse BRANCH into LEAF (private)
 * @param  {Object}   node      Node-formatted object
 * @return {Object}             Node-formatted object
 */


function _demote(node) {
  node.$0 = LEAF; // re-attach sibling from closer

  node.$1 = node.$3.$1; // delete closer

  delete node.$3; // NOTE expect $2 to stay the same

  return node;
}
/**
 * append child to node (promotes LEAF to BRANCH is needed)
 * @param  {Object} node Node-formatted object
 * @param  {Object} ref  Node-formatted object
 * @return {Object}      The appended child
 */


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
 * @param  {Object} node Node-formatted object
 * @param  {Object} ref  Node-formatted object
 * @return {Object}      The inserted node
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
/**
 * insert node after ref (sibling)
 * @param  {Object} node Node-formatted object
 * @param  {Object} ref  Node-formatted object
 * @return {Object}      The inserted node
 */


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
/**
 * Test if node is last child
 * @param  {Object} node Node-formatted object
 * @return {Boolean}      The inserted node
 */


const isLastChild = node => node.$1.$0 === CLOSE;
/**
 * Test if node is first child
 * @param  {Object} node Node-formatted object
 * @return {Boolean}      The inserted node
 */


exports.isLastChild = isLastChild;

const isFirstChild = node => node.$2.$0 === BRANCH;
/**
 * Test if node is empty branch
 * @param  {Object} node Node-formatted object
 * @return {Boolean}      The inserted node
 */


exports.isFirstChild = isFirstChild;

const isEmptyBranch = node => isBranch(node) && node.$1 === node.$3;
/**
 * Retrieve the branch's closer, or the closer's branch
 * @param  {Object} node Node-formatted object
 * @return {Object|void}      Node-formatted object (if any)
 */


exports.isEmptyBranch = isEmptyBranch;

const link = node => node.$3;
/**
 * remove child from node
 * @param  {Object} node Node-formatted object
 * @param  {Object} ref  Node-formatted object
 * @return {Object}      The provided branch node
 */


exports.link = link;

function removeChild(node, child) {
  // TODO guards!
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
/**
 * remove node from its parent
 * @param  {Object} node Node-formatted object
 * @return {Object}      The previous node in traversal (not closers)
 */


function remove(node) {
  // TODO guards!
  let parent;
  const prev = previous(node);

  if (isFirstChild(node)) {
    removeChild(node.$2, node);
  } else if (isLastChild(node)) {
    removeChild(node.$1.$3, node);
  } else {
    // splice out
    prev.$1 = node;
    node.$2 = prev;
    return prev;
  }

  return isClose(prev) ? link(prev) : prev;
}