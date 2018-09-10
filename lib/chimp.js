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
exports.openBefore = openBefore;
exports.link = exports.isEmptyBranch = exports.isFirstChild = exports.isLastChild = exports.view = exports.isClose = exports.isBranch = exports.isLeaf = exports.CLOSE = exports.BRANCH = exports.LEAF = void 0;

/**
 * Type LEAF = 1
 * @type {Number}
 */
const LEAF = 1;
/**
 * Type BRANCH = 2
 * @type {Number}
 */

exports.LEAF = LEAF;
const BRANCH = 2;
/**
 * Type CLOSE = 3
 * @type {Number}
 */

exports.BRANCH = BRANCH;
const CLOSE = 3;
/**
 * Test if node is LEAF
 * @param  {Object}  node Node-formatted object
 * @return {Boolean}
 */

exports.CLOSE = CLOSE;

const isLeaf = node => !!node && node.$0 === LEAF;
/**
 * Test if node is BRANCH
 * @param  {Object}  node Node-formatted object
 * @return {Boolean}
 */


exports.isLeaf = isLeaf;

const isBranch = node => !!node && node.$0 === BRANCH;
/**
 * Test if node is CLOSE
 * @param  {Object}  node Node-formatted object
 * @return {Boolean}
 */


exports.isBranch = isBranch;

const isClose = node => !!node && node.$0 === CLOSE;

exports.isClose = isClose;
const dollarRE = /^\$/;

const _strip = x => x && Object.entries(x).reduce((a, [k, v]) => dollarRE.test(k) ? a : (a[k] = v, a), {});

const view = (x, stripped) => stripped ? _strip(x) : x;
/**
 * Create a leaf node (branches and closes are created by the implementation).
 *
 * The following keys are reserved for formatting an object as a node:
 *
 * | Key  | Purpose                        |
 * | :--- | :----------------------------- |
 * | $0   | Type                           |
 * | $1   | Depth-first travsersal         |
 * | $2   | Reversed depth-first Traversal |
 * | $3   | BRANCH-to-CLOSE link           |
 *
 * @param  {Object} [props={}]  initial object
 * @param  {Number} [type=LEAF] node type
 * @return {Object}             node-formatted object
 */


exports.view = view;

function create(props = {}, type = LEAF) {
	// NOTE Actually, a LEAF never has $3...
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


function* traverse(node, stripped) {
	// siblings without parent may be traversed,
	// but when the start is a leaf
	// prevent yielding a close
	const start = node;

	while (node) {
		yield view(node, stripped);
		//if (node === start.$3) return;
		const old = node;
		node = node.$1; // FIXME can this be more efficient?

		if (node && isLeaf(start) && !node.$1 && node.$0 == 3 && node.$2 == old) return;
	}
}
/**
 * Get the node's firstChild
 * @param  {Object}   node      Node-formatted object
 * @return {Object|void}        Node (if have)
 */


function firstChild(node) {
	if (isBranch(node) && !isClose(node.$1)) return node.$1;
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
 * Expand LEAF into BRANCH
 * @private
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
 * Collapse BRANCH into LEAF
 * @private
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
 * append child to node (promotes LEAF to BRANCH if needed)
 * @param  {Object} node Node-formatted object
 * @param  {Object} ref  Node-formatted object
 * @return {Object}      The appended child
 */


function appendChild(node, ref) {
	if (ref.$0 == LEAF) {
		ref = _promote(ref); // 1. attach node

		ref.$1 = node; // 2. point node's $2 back to parent

		node.$2 = ref; // 3. point node to ref's closer

		if (isLeaf(node)) {
			node.$1 = ref.$3;
		} else {
			node.$3.$1 = ref.$3;
		} // 4. point ref's closer to node


		ref.$3.$2 = node;
	} else {
		insertAfter(node, lastChild(ref));
	}

	return node;
}
/**
 * insert node before ref (sibling)
 * @param  {Object} node Node-formatted object
 * @param  {Object} ref  Node-formatted object
 * @return {Object}      The inserted node
 */


function insertBefore(node, ref) {
	const prev = ref.$2;

	if (prev) {
		// replace prev's $1 with node
		if (isBranch(prev)) {
			prev.$3.$1 = node;
		} else {
			prev.$1 = node;
		} // point back to prev


		node.$2 = prev;
	} // update forward pointers


	if (node.$0 === BRANCH) {
		node.$3.$1 = ref;
	} else {
		node.$1 = ref;
	} // update ref's back pointer to node


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


const isLastChild = node => !!node && isClose(isLeaf(node) ? node.$1 : node.$3.$1);
/**
 * Test if node is first child
 * @param  {Object} node Node-formatted object
 * @return {Boolean}      The inserted node
 */


exports.isLastChild = isLastChild;

const isFirstChild = node => !!node && isBranch(node.$2);
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

const link = node => node && node.$3;
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
 * @return {Object}      The removed node-formatted object (for reuse)
 */


function remove(node) {
	// TODO guards!
	if (isFirstChild(node)) {
		removeChild(node.$2, node);
	} else if (isLastChild(node)) {
		removeChild(node.$1.$3, node);
	} else {
		// if it's a branch, remove it and
		// make all children siblings of previous
		const prv = previous(node);
		const nxt = next(node); // splice out

		if (isBranch(node)) {
			const nx = nextSibling(node);
			const last = lastChild(node);
			if (prv) prv.$1 = nxt;
			if (nxt) nxt.$2 = prv;
			if (last) last.$1 = nx;
		} else {
			if (prv) prv.$1 = nxt;
			if (nxt) nxt.$2 = prv;
		}
	}

	return node;
}
/**
 * Create a new branch before a node and add all its siblings up to lastSibling
 * @param  {Object} props Initial object
 * @param {Object} ref   Reference node
 * @param {Object=} lastSib The last sibling to add to the branch
 * @return {Object}      The new branch
 */


function openBefore(props = {}, ref, lastSib) {
	// wrap this level, from ref to it's last sibling (it may not have a parent yet)
	const close = create({}, CLOSE);
	const ins = create(props);
	ins.$0 = 2;
	close.$3 = ins;
	ins.$3 = close;

	if (!lastSib) {
		let nextSib = ref;

		while (nextSib) {
			lastSib = nextSib;
			nextSib = nextSibling(nextSib);
		}
	}

	const nxt = next(lastSib);

	if (nxt) {
		close.$1 = nxt;
		nxt.$2 = close;
	}

	if (isBranch(lastSib)) {
		// append a closer to the end of the ref
		lastSib.$3.$1 = close;
		close.$2 = lastSib.$3;
	} else {
		// append closer to the leaf
		lastSib.$1 = close;
		close.$2 = lastSib;
	}

	const prev = ref.$2;
	ins.$2 = prev;
	ref.$2 = ins;
	prev.$1 = ins;
	ins.$1 = ref;
	return ins;
}
