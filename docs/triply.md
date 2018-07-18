<a name="Triply"></a>

## Triply
Tree interface for convenient method chaining

**Kind**: global class  

* [Triply](#Triply)
    * [new Triply([props])](#new_Triply_new)
    * [.insertAfter([props], [ref])](#Triply+insertAfter) ⇒ [<code>Triply</code>](#Triply)
    * [.appendChild([props], [ref])](#Triply+appendChild) ⇒ [<code>Triply</code>](#Triply)
    * [.push([props])](#Triply+push) ⇒ [<code>Triply</code>](#Triply)
    * [.remove()](#Triply+remove) ⇒ <code>Object</code>
    * [.pop()](#Triply+pop) ⇒ <code>Object</code>
    * [.insertBefore([props], [ref])](#Triply+insertBefore) ⇒ [<code>Triply</code>](#Triply)
    * [.open([props])](#Triply+open) ⇒ [<code>Triply</code>](#Triply)
    * [.close()](#Triply+close) ⇒ [<code>Triply</code>](#Triply)
    * [.movePrevious()](#Triply+movePrevious) ⇒ [<code>Triply</code>](#Triply)
    * [.moveNext()](#Triply+moveNext) ⇒ [<code>Triply</code>](#Triply)
    * [.movePreviousSibling()](#Triply+movePreviousSibling) ⇒ [<code>Triply</code>](#Triply)
    * [.moveNextSibling()](#Triply+moveNextSibling) ⇒ [<code>Triply</code>](#Triply)
    * [.moveFirstChild()](#Triply+moveFirstChild) ⇒ [<code>Triply</code>](#Triply)
    * [.moveLastChild()](#Triply+moveLastChild) ⇒ [<code>Triply</code>](#Triply)
    * [.mark(name)](#Triply+mark) ⇒ [<code>Triply</code>](#Triply)
    * [.unmark(name)](#Triply+unmark) ⇒ [<code>Triply</code>](#Triply)
    * [.traverse()](#Triply+traverse)
    * [.next()](#Triply+next) ⇒ <code>Object</code> \| <code>void</code>
    * [.previous()](#Triply+previous) ⇒ <code>Object</code> \| <code>void</code>
    * [.peek()](#Triply+peek) ⇒ <code>Object</code> \| <code>void</code>
    * [.firstChild()](#Triply+firstChild) ⇒ <code>Object</code> \| <code>void</code>
    * [.lastChild()](#Triply+lastChild) ⇒ <code>Object</code> \| <code>void</code>
    * [.nextSibling()](#Triply+nextSibling) ⇒ <code>Object</code> \| <code>void</code>
    * [.previousSibling()](#Triply+previousSibling) ⇒ <code>Object</code> \| <code>void</code>
    * [.openBefore(props, [lastSib])](#Triply+openBefore) ⇒ [<code>Triply</code>](#Triply)
    * [.moveRoot()](#Triply+moveRoot) ⇒ [<code>Triply</code>](#Triply)

<a name="new_Triply_new"></a>

### new Triply([props])
Create a new tree, using the provided object as the first node


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |

<a name="Triply+insertAfter"></a>

### triply.insertAfter([props], [ref]) ⇒ [<code>Triply</code>](#Triply)
append a sibling after the provided reference or the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |
| [ref] | <code>Object</code> |  | Reference node |

<a name="Triply+appendChild"></a>

### triply.appendChild([props], [ref]) ⇒ [<code>Triply</code>](#Triply)
append a child node to the provided reference or the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |
| [ref] | <code>Object</code> |  | Reference node |

<a name="Triply+push"></a>

### triply.push([props]) ⇒ [<code>Triply</code>](#Triply)
Alias for insertAfter

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |

<a name="Triply+remove"></a>

### triply.remove() ⇒ <code>Object</code>
Remove the node at the insertion pointreturns the removed node so it can be reused

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> - The removed node-formatted object  
<a name="Triply+pop"></a>

### triply.pop() ⇒ <code>Object</code>
Alias for remove

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> - The removed node-formatted object  
<a name="Triply+insertBefore"></a>

### triply.insertBefore([props], [ref]) ⇒ [<code>Triply</code>](#Triply)
insert (new) node before insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |
| [ref] | <code>Object</code> |  | Reference node |

<a name="Triply+open"></a>

### triply.open([props]) ⇒ [<code>Triply</code>](#Triply)
insert new child in current insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |

<a name="Triply+close"></a>

### triply.close() ⇒ [<code>Triply</code>](#Triply)
move insertion point down one level (if possible)

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+movePrevious"></a>

### triply.movePrevious() ⇒ [<code>Triply</code>](#Triply)
move insertion point back

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+moveNext"></a>

### triply.moveNext() ⇒ [<code>Triply</code>](#Triply)
move insertion point forward

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+movePreviousSibling"></a>

### triply.movePreviousSibling() ⇒ [<code>Triply</code>](#Triply)
move insertion point to previous sibling

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+moveNextSibling"></a>

### triply.moveNextSibling() ⇒ [<code>Triply</code>](#Triply)
move insertion point to next sibling

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+moveFirstChild"></a>

### triply.moveFirstChild() ⇒ [<code>Triply</code>](#Triply)
move insertion point to first child (if have)

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+moveLastChild"></a>

### triply.moveLastChild() ⇒ [<code>Triply</code>](#Triply)
move insertion point to last child (if have)

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+mark"></a>

### triply.mark(name) ⇒ [<code>Triply</code>](#Triply)
store the insertion point into a bookmark

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>Number</code> | The name of the bookmark |

<a name="Triply+unmark"></a>

### triply.unmark(name) ⇒ [<code>Triply</code>](#Triply)
Restore the insertion point to the set bookmark

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>Number</code> | The name of the bookmark |

<a name="Triply+traverse"></a>

### triply.traverse()
Traverse

**Kind**: instance method of [<code>Triply</code>](#Triply)  
<a name="Triply+next"></a>

### triply.next() ⇒ <code>Object</code> \| <code>void</code>
Look at next node in traversal after insertion point, skipping closes

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+previous"></a>

### triply.previous() ⇒ <code>Object</code> \| <code>void</code>
Look at previous node in traversal before insertion point, skipping closes

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+peek"></a>

### triply.peek() ⇒ <code>Object</code> \| <code>void</code>
Look at the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+firstChild"></a>

### triply.firstChild() ⇒ <code>Object</code> \| <code>void</code>
Look at the first child of the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+lastChild"></a>

### triply.lastChild() ⇒ <code>Object</code> \| <code>void</code>
Look at the last child of the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+nextSibling"></a>

### triply.nextSibling() ⇒ <code>Object</code> \| <code>void</code>
Look at the next sibling of the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+previousSibling"></a>

### triply.previousSibling() ⇒ <code>Object</code> \| <code>void</code>
Look at the previous sibling of the insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+openBefore"></a>

### triply.openBefore(props, [lastSib]) ⇒ [<code>Triply</code>](#Triply)
Create a new branch before the insertion pointand add all its siblings up to lastSibling

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Initial object |
| [lastSib] | <code>Object</code> | The last sibling to add to the branch |

<a name="Triply+moveRoot"></a>

### triply.moveRoot() ⇒ [<code>Triply</code>](#Triply)
Move insertion point to root

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
