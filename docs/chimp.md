## Constants

<dl>
<dt><a href="#isLastChild">isLastChild</a> ⇒ <code>Boolean</code></dt>
<dd><p>Test if node is last child</p>
</dd>
<dt><a href="#isFirstChild">isFirstChild</a> ⇒ <code>Boolean</code></dt>
<dd><p>Test if node is first child</p>
</dd>
<dt><a href="#isEmptyBranch">isEmptyBranch</a> ⇒ <code>Boolean</code></dt>
<dd><p>Test if node is empty branch</p>
</dd>
<dt><a href="#link">link</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Retrieve the branch&#39;s closer, or the closer&#39;s branch</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#create">create([props], [type])</a> ⇒ <code>Object</code></dt>
<dd><p>Create node: branch or leaf
Actually, a LEAF never has $3...</p>
</dd>
<dt><a href="#next">next(node)</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Get the node&#39;s next node in depth-first traversal</p>
</dd>
<dt><a href="#previous">previous(node)</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Get the node&#39;s previous node in depth-first traversal</p>
</dd>
<dt><a href="#nextSibling">nextSibling(node)</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Get the node&#39;s nextSibling</p>
</dd>
<dt><a href="#previousSibling">previousSibling(node)</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Get the node&#39;s previousSibling</p>
</dd>
<dt><a href="#traverse">traverse(node)</a></dt>
<dd><p>Traverse node</p>
</dd>
<dt><a href="#firstChild">firstChild(node)</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Get the node&#39;s firstChild</p>
</dd>
<dt><a href="#lastChild">lastChild(node)</a> ⇒ <code>Object</code> | <code>void</code></dt>
<dd><p>Get the node&#39;s lastChild</p>
</dd>
<dt><a href="#_promote">_promote(node)</a> ⇒ <code>Object</code></dt>
<dd><p>Expand LEAF into BRANCH (private)</p>
</dd>
<dt><a href="#_demote">_demote(node)</a> ⇒ <code>Object</code></dt>
<dd><p>Collapse BRANCH into LEAF (private)</p>
</dd>
<dt><a href="#appendChild">appendChild(node, ref)</a> ⇒ <code>Object</code></dt>
<dd><p>append child to node (promotes LEAF to BRANCH is needed)</p>
</dd>
<dt><a href="#insertBefore">insertBefore(node, ref)</a> ⇒ <code>Object</code></dt>
<dd><p>insert node before ref (sibling)</p>
</dd>
<dt><a href="#insertAfter">insertAfter(node, ref)</a> ⇒ <code>Object</code></dt>
<dd><p>insert node after ref (sibling)</p>
</dd>
<dt><a href="#removeChild">removeChild(node, ref)</a> ⇒ <code>Object</code></dt>
<dd><p>remove child from node</p>
</dd>
<dt><a href="#remove">remove(node)</a> ⇒ <code>Object</code></dt>
<dd><p>remove node from its parent</p>
</dd>
</dl>

<a name="isLastChild"></a>

## isLastChild ⇒ <code>Boolean</code>
Test if node is last child

**Kind**: global constant  
**Returns**: <code>Boolean</code> - The inserted node  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="isFirstChild"></a>

## isFirstChild ⇒ <code>Boolean</code>
Test if node is first child

**Kind**: global constant  
**Returns**: <code>Boolean</code> - The inserted node  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="isEmptyBranch"></a>

## isEmptyBranch ⇒ <code>Boolean</code>
Test if node is empty branch

**Kind**: global constant  
**Returns**: <code>Boolean</code> - The inserted node  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="link"></a>

## link ⇒ <code>Object</code> \| <code>void</code>
Retrieve the branch's closer, or the closer's branch

**Kind**: global constant  
**Returns**: <code>Object</code> \| <code>void</code> - Node-formatted object (if any)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="create"></a>

## create([props], [type]) ⇒ <code>Object</code>
Create node: branch or leaf

**Kind**: global function  
**Returns**: <code>Object</code> - node-formatted object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | <code>Object</code> | <code>{}</code> | initial object |
| [type] | <code>Number</code> | <code>LEAF</code> | node type |

<a name="next"></a>

## next(node) ⇒ <code>Object</code> \| <code>void</code>
Get the node's next node in depth-first traversal

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>void</code> - Node (if have)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="previous"></a>

## previous(node) ⇒ <code>Object</code> \| <code>void</code>
Get the node's previous node in depth-first traversal

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>void</code> - Node (if have)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="nextSibling"></a>

## nextSibling(node) ⇒ <code>Object</code> \| <code>void</code>
Get the node's nextSibling

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>void</code> - Node (if have)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="previousSibling"></a>

## previousSibling(node) ⇒ <code>Object</code> \| <code>void</code>
Get the node's previousSibling

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>void</code> - Node (if have)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="traverse"></a>

## traverse(node)
Traverse node

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="firstChild"></a>

## firstChild(node) ⇒ <code>Object</code> \| <code>void</code>
Get the node's firstChild

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>void</code> - Node (if have)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="lastChild"></a>

## lastChild(node) ⇒ <code>Object</code> \| <code>void</code>
Get the node's lastChild

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>void</code> - Node (if have)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="_promote"></a>

## _promote(node) ⇒ <code>Object</code>
Expand LEAF into BRANCH (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Node-formatted object  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="_demote"></a>

## _demote(node) ⇒ <code>Object</code>
Collapse BRANCH into LEAF (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Node-formatted object  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |

<a name="appendChild"></a>

## appendChild(node, ref) ⇒ <code>Object</code>
append child to node (promotes LEAF to BRANCH is needed)

**Kind**: global function  
**Returns**: <code>Object</code> - The appended child  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |
| ref | <code>Object</code> | Node-formatted object |

<a name="insertBefore"></a>

## insertBefore(node, ref) ⇒ <code>Object</code>
insert node before ref (sibling)

**Kind**: global function  
**Returns**: <code>Object</code> - The inserted node  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |
| ref | <code>Object</code> | Node-formatted object |

<a name="insertAfter"></a>

## insertAfter(node, ref) ⇒ <code>Object</code>
insert node after ref (sibling)

**Kind**: global function  
**Returns**: <code>Object</code> - The inserted node  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |
| ref | <code>Object</code> | Node-formatted object |

<a name="removeChild"></a>

## removeChild(node, ref) ⇒ <code>Object</code>
remove child from node

**Kind**: global function  
**Returns**: <code>Object</code> - The provided branch node  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |
| ref | <code>Object</code> | Node-formatted object |

<a name="remove"></a>

## remove(node) ⇒ <code>Object</code>
remove node from its parent

**Kind**: global function  
**Returns**: <code>Object</code> - The previous node in traversal (not closers)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Node-formatted object |
