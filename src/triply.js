import * as chimp from "./chimp";

/**
 * Tree interface for convenient method chaining
 */
class Triply {
	/**
     * Create a new tree, using the provided object as the first node
     * @param  {Object} [props={}] Object / node-formatted
     * @return {void}
     */
	constructor(props = {}){
		this._root = this._insert = chimp.create(props);
		this._marks = {};
	}
	/**
     * append a sibling after the provided reference or the insertion point
     * @param  {Object} [props={}] Object / node-formatted
     * @param  {Object=} ref       Reference node
     * @return {Triply}            The updated object
     */
	insertAfter(props = {},ref) {
		const ins = chimp.insertAfter(chimp.create(props),ref || this._insert);
		if(!ref) this._insert = ins;
		return this;
	}
	/**
     * append a child node to the provided reference or the insertion point
     * @param  {Object} [props={}] Object / node-formatted
     * @param  {Object=} ref       Reference node
     * @return {Triply}            The updated object
     */
	appendChild(props = {}, ref) {
		const ins = chimp.appendChild(chimp.create(props),ref || this._insert);
		if(!ref) this._insert = ins;
		return this;
	}
	/**
     * add a (sibling) node
     * @param  {Object} [props={}] Object / node-formatted
     * @return {Triply} The updated object
     */
	push(props = {}) {
		return this.insertAfter(props);
	}
	/**
     * remove the last node
     * @return {Triply}            The updated object
     */
	pop(){
		this._insert = chimp.remove(this._insert);
		return this;
	}
	/**
     * insert (new) node before insertion point
     * @param  {Object} [props={}] Object / node-formatted
     * @param  {Object=} ref       Reference node
     * @return {Triply}            The updated object
     */
	insertBefore(props = {}, ref) {
		const ins = chimp.insertBefore(chimp.create(props),ref || this._insert);
		if(!ref) this._insert = ins;
		return this;
	}
	/**
     * insert new child in current insertion point
     * @param  {Object} [props={}] Object / node-formatted
     * @return {Triply}            The updated object
     */
	open(props = {}) {
		// create new leaf and move to it
		return this.appendChild(props);
	}
	/**
     *  move insertion point down one level (if possible)
     * @return {Triply} The updated object
     */
	close() {
		const next = chimp.next(this._insert);
		if(next && chimp.isClose(next)) this._insert = chimp.link(next);
		return this;
	}
	/**
     *  move insertion point back
     * @return {Triply} The updated object
     */
	movePrevious() {
		const prev = this.previous();
		if(prev) this._insert = prev;
		return this;
	}
	/**
     *  move insertion point forward
     * @return {Triply} The updated object
     */
	moveNext() {
		const next = this.next();
		if(next) this._insert = next;
		return this;
	}
	/**
     *  move insertion point to previous sibling
     * @return {Triply} The updated object
     */
	movePreviousSibling() {
		const prev = this.previousSibling();
		if(prev) this._insert = prev;
		return this;
	}
	/**
     *  move insertion point to next sibling
     * @return {Triply} The updated object
     */
	moveNextSibling() {
		const next = this.nextSibling();
		if(next) this._insert = next;
		return this;
	}
	/**
	 * store the insertion point into a bookmark
	 * @param  {String|Number} name The name of the bookmark
	 * @return {Triply}      The updated object
	 */
	mark(name) {
		this._marks[name] = this._insert;
		return this;
	}
	/**
	 * Restore the insertion point to the set bookmark
	 * @param  {String|Number} name The name of the bookmark
	 * @return {Triply}      The updated object
	 */
	unmark(name) {
		if(name in this._marks) {
			this._insert = this._marks[name];
			delete this._marks[name];
		}
		return this;
	}
	/**
     * Traverse
     * @yields {Object} [Node-formatted object
     */
	traverse() {
		return chimp.traverse(this._root);
	}
	/**
     * Look at next node in traversal after insertion point, skipping closes
     * @return {Object|void} Node-formatted object (if any)
     */
	next() {
		const next = chimp.next(this._insert);
		return chimp.isClose(next) ? chimp.next(next) : next;
	}
	/**
     * Look at previous node in traversal before insertion point, skipping closes
     * @return {Object|void} Node-formatted object (if any)
     */
	previous() {
		const prev = chimp.previous(this._insert);
		return chimp.isClose(prev) ? chimp.previous(prev) : prev;
	}
	/**
     * Look at the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	peek() {
		return this._insert;
	}
	/**
     * Look at the first child of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	firstChild() {
		return chimp.firstChild(this._insert);
	}
	/**
     * Look at the last child of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	lastChild() {
		return chimp.lastChild(this._insert);
	}
	/**
     * Look at the next sibling of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	nextSibling() {
		return chimp.nextSibling(this._insert);
	}
	/**
     * Look at the previous sibling of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	previousSibling() {
		return chimp.previousSibling(this._insert);
	}
}

const Monkey = Object.assign(Triply,chimp);

export { Monkey as Triply };

export default Monkey;
