const t = require("../lib/triply").Triply;

let node = t.create({$data:1});
const c = t.appendChild(node,t.create({$data:2}));
const cc = t.appendChild(c,t.create({$data:3}))
//t.insertBefore(t.create({$data:3}),t.firstChild(node));
//t.insertAfter(t.create({$data:4}),t.lastChild(node))
//t.removeChild(node,t.firstChild(node))
for(let x of t.traverse(c)) console.log("x",x.$0 == 3 ? "closes: " + x.$3.$data : x.$data);
