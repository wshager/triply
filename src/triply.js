import * as chimp from "./chimp";

const view = chimp.view;

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
     * Alias for insertAfter
     * @param  {Object} [props={}] Object / node-formatted
     * @return {Triply} The updated object
     */
	push(props = {}) {
		return this.insertAfter(props);
	}
	/**
     * Remove the node at the insertion point
     * returns the removed node so it can be reused
     * @return {Object} The removed node-formatted object
     */
	remove(ref){
		if(!ref) ref = this._insert;
		this._insert = chimp.previous(ref);
		const rootChange = ref === this._root;
		if(rootChange) {
			this._root = chimp.next(ref);
		}
		chimp.remove(ref);
		return ref;
	}
	/**
	 * Alias for remove
	 * @return {Object} The removed node-formatted object
	 */
	pop(){
		return this.remove();
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
     *  move insertion point to first child (if have)
     * @return {Triply} The updated object
     */
	moveFirstChild() {
		const first = chimp.firstChild(this._insert);
		if(first) this._insert = first;
		return this;
	}
	/**
	 *  move insertion point to last child (if have)
	 * @return {Triply} The updated object
	 */
	moveLastChild() {
		const last = chimp.lastChild(this._insert);
		if(last) this._insert = last;
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
	traverse(stripped) {
		return chimp.traverse(this._root,stripped);
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
	peek(stripped) {
		return view(this._insert,stripped);
	}
	/**
     * Look at the first child of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	firstChild(stripped) {
		return view(chimp.firstChild(this._insert),stripped);
	}
	/**
     * Look at the last child of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	lastChild(stripped) {
		return view(chimp.lastChild(this._insert),stripped);
	}
	/**
     * Look at the next sibling of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	nextSibling(stripped) {
		return view(chimp.nextSibling(this._insert),stripped);
	}
	/**
     * Look at the previous sibling of the insertion point
     * @return {Object|void} Node-formatted object (if any)
     */
	previousSibling(stripped) {
		return view(chimp.previousSibling(this._insert),stripped);
	}
	/**
	 * Create a new branch before the insertion point
	 * and add all its siblings up to lastSibling
	 * @param  {Object} props Initial object
	 * @param {Object=} lastSib The last sibling to add to the branch
	 * @return {Triply}      The updated object
	 */
	openBefore(props = {},lastSib) {
		this._insert = chimp.openBefore(props,this._insert,lastSib);
		return this;
	}
	/**
	 * Move insertion point to root
	 * @return {Triply} The updated object
	 */
	moveRoot() {
		this._insert = this._root;
		return this;
	}
}

const Monkey = Object.assign(Triply,chimp);

export { Monkey as Triply };

export default Monkey;
