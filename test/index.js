const Triply = require("../lib/triply").Triply;

// NOTE only objects are valid entries
// which will be formatted using reserved keys.
// Here we use `data` to insert a number
const node = new Triply({data:1})
    .push({data:2}) // just append a sibling, the insertion point is moved to the new node
    .open({data:3}) // make the insertion point a branch and append a new child
    .close() // try to move the insertion point to the parent
    .push({data:4}) // append another sibling
    .previous() // try to move the insertion point back along the traversal path (the branch containing `data:2`)
    .open({data:5}) // append another child
    .push({data:6}); // append another sibling to that child
for(let x of node.traverse()) console.log("x",Triply.isClose(x) ? "closes: " + Triply.link(x).data : x.data)
