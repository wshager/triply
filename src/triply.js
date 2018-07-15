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
	previous() {
		const prev = chimp.previous(this._insert);
		if(prev) this._insert = chimp.isClose(prev) ? chimp.link(prev) : prev;
		return this;
	}
	/**
     *  move insertion point forward
     * @return {Triply} The updated object
     */
	next() {
		const next = chimp.next(this._insert);
		if(next) this._insert = chimp.isClose(next) ? chimp.link(next) : next;
		return this;
	}
	/**
     * Traverse
     * @yields {Object} [Node-formatted object
     */
	traverse() {
		return chimp.traverse(this._root);
	}
}

const Monkey = Object.assign(Triply,chimp);

export { Monkey as Triply };

export default Monkey;
