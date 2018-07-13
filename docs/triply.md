<a name="Triply"></a>

## Triply
Tree interface for convient method chaining

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
    * [.previous()](#Triply+previous) ⇒ [<code>Triply</code>](#Triply)
    * [.next()](#Triply+next) ⇒ [<code>Triply</code>](#Triply)
    * [.traverse()](#Triply+traverse)

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
<a name="Triply+previous"></a>

### triply.previous() ⇒ [<code>Triply</code>](#Triply)
move insertion point back

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+next"></a>

### triply.next() ⇒ [<code>Triply</code>](#Triply)
move insertion point forward

**Kind**: instance method of [<code>Triply</code>](#Triply)  
**Returns**: [<code>Triply</code>](#Triply) - The updated object  
<a name="Triply+traverse"></a>

### triply.traverse()
Traverse

**Kind**: instance method of [<code>Triply</code>](#Triply)  
