# Triply, a triply-linked list lib

Yet another data structure for creating trees.


## Install

`npm i triply`


## Usage

```javascript
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

// traverse the tree (lazy iterator)
// we have to keep track of branch 'closers' (compare for example with XML closing tags)
for(let x of node.traverse()) console.log("x",Triply.isClose(x) ? "closes: " + Triply.link(x).data : x.data);
```


## License

[License](./LICENSE)


## API documentation

* [Triply Class](./docs/triply.md)
* [Functional implementation](./docs/chimp.md)

## About

Triply is a way to create in-memory trees with some very peculiar performance characteristics:

* Fast traversal in 2 directions
* Fast appendChild, insertBefore, insertAfter, removeChild
* Fast access to siblings
* Fast access to the parent at the first or last child

Updates require writes to at most 4 pointers (5 when expanding or collapsing branches).

Use Triply to create trees that can be modified with some ease.


### Triply Pointer Rules

* 1 = depth-first traversal
* 2 = reversed traversal
* 3 = open/close link

Traversal directions (invert directions and arrows for reversed traversal):
* UP = BRANCH -> LEAF or BRANCH
* DOWN = BRANCH or LEAF -> CLOSE
* SAME = LEAF -> LEAF


### Tree Diagrams

```
           L
     1 // 2 1 \\ 2
      B 3-><-3 /B
  1 // 2      1 \\ 2
   B 3---> <---3 /B 1 --> <-- 2 B ~
```

Append a child at tier 1 (or a sibling at tier 2):

```
         L 1 --> <-- 2 L
     1 // 2          1 \\ 2
      B 3--->     <---3 /B
  1 // 2               1 \\ 2
   B 3--->          <---3 /B 1 --> <-- 2 B ~
```

Append a child at tier 0 (or a sibling at tier 1):

```
         L 1 --> <-- 2 L                   L
     1 // 2          1 \\ 2          1 // 2 1 \\ 2
      B 3--->     <---3 /B 1--> <-- 2 B 3-><-3 /B
  1 // 2                                      1 \\ 2
   B 3--->                                 <---3 /B 1 --> <-- 2 B ~
```


### Access logic

* firstChild: follow 1 from BRANCH
* lastChild: follow 3 to find CLOSE and then 2
* nextSibling: follow 1 from LEAF or 3 + 1 from BRANCH
* previousSibling: follow 2, if found CLOSE follow 3
* parent (O[no of siblings]): follow 2 from firstSibling or 1 + 3 from lastSibling
* firstChildTest: child -> 2 === BRANCH
* lastChildTest: child -> 1 === CLOSE

NOTE: Accessing the parent is only relevant for insertBefore when it's the first child.
