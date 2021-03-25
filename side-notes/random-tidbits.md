## Arrays and Linked Lists

Linked lists are similar to arrays but at the same time, very different. With arrays, we can access elements using indexes that are stored in memory. Linked lists however operate by creating links between elements rather than alowing for manipulation by indexes. Linked lists start with a head as the entry point which points to its first node. It should also point to any subsiquent nodes using a keyword such as next and hold a value (see example below).

### Example Array

```javascript
const myArray = [1, 2, 3, 4, 5]
```

### Example Linked List

```javascript
class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(6)

node1.next = node2
node2.next = node3

let list = new LinkedList(node1)
```
