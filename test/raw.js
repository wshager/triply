const t = require("../lib/triply").Triply;

let node = t.create({$data:1});
const c = t.appendChild(t.create({$data:2}),node);
const cc = t.appendChild(t.create({$data:3}),c);
//t.insertBefore(t.create({$data:3}),t.firstChild(node));
//t.insertAfter(t.create({$data:4}),t.lastChild(node))
//t.removeChild(node,t.firstChild(node))
//for(let x of t.traverse(c)) console.log("x",x.$0 == 3 ? "closes: " + x.$3.$data : x.$data);
function* _children(node) {
	let first = t.firstChild(node);
	while(first) {
		yield first;
		first = t.nextSibling(first);
	}
}

const append = (l,v) => (l.push(v),l);


function map(iter,fn) {
	return reduce(iter,(z,x,i) => append(z,fn(x,i)),[]);
}

function reduce(iter,fn,z) {
	let i = 0;
	for(let x of iter) {
		z = fn(z,x,i++);
	}
	return z;
}
console.log(map(_children(c),x => x));
//console.log(t.nextSibling(t.firstChild(node)));
