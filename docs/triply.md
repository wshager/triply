<a name="Triply"></a>

## Triply
Tree interface for convenient method chaining

**Kind**: global class  

* [Triply](#Triply)
    * [new Triply([props])](#new_Triply_new)
    * [.insertAfter([props], [ref])](#Triply+insertAfter) ⇒ [<code>Triply</code>](#Triply)
    * [.appendChild([props], [ref])](#Triply+appendChild) ⇒ [<code>Triply</code>](#Triply)
    * [.push([props])](#Triply+push) ⇒ [<code>Triply</code>](#Triply)
    * [.pop()](#Triply+pop) ⇒ [<code>Triply</code>](#Triply)
    * [.insertBefore([props], [ref])](#Triply+insertBefore) ⇒ [<code>Triply</code>](#Triply)
    * [.open([props])](#Triply+open) ⇒ [<code>Triply</code>](#Triply)
    * [.close()](#Triply+close) ⇒ [<code>Triply</code>](#Triply)
    * [.movePrevious()](#Triply+movePrevious) ⇒ [<code>Triply</code>](#Triply)
    * [.moveNext()](#Triply+moveNext) ⇒ [<code>Triply</code>](#Triply)
    * [.traverse()](#Triply+traverse)
    * [.next()](#Triply+next) ⇒ <code>Object</code> \| <code>void</code>
    * [.previous()](#Triply+previous) ⇒ <code>Object</code> \| <code>void</code>
    * [.peek()](#Triply+peek) ⇒ <code>Object</code> \| <code>void</code>
    * [.firstChild()](#Triply+firstChild) ⇒ <code>Object</code> \| <code>void</code>
    * [.lastChild()](#Triply+lastChild) ⇒ <code>Object</code> \| <code>void</code>
    * [.nextSibling()](#Triply+nextSibling) ⇒ <code>Object</code> \| <code>void</code>
    * [.previousSibling()](#Triply+previousSibling) ⇒ <code>Object</code> \| <code>void</code>

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
add a (sibling) node

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | Object / node-formatted |

<a name="Triply+pop"></a>

### triply.pop() ⇒ [<code>Triply</code>](#Triply)
remove the last node

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
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
<a name="Triply+traverse"></a>

### triply.traverse()
Traverse

**Kind**: instance method of [<code>Triply</code>](#Triply)  
<a name="Triply+next"></a>

### triply.next() ⇒ <code>Object</code> \| <code>void</code>
Look at next node in traversal after insertion point

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  
<a name="Triply+previous"></a>

### triply.previous() ⇒ <code>Object</code> \| <code>void</code>
Look at previous node in traversal before insertion point

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
