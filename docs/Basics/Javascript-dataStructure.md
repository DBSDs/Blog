---
sidebar_position: 4
---

# JavaScript数据结构与算法

## 1.数组
几乎所有的编程语言都原生支持数组类型，因为数组是最简单的内存数据结构。  
为什么需要数组？我们经常需要管理一组有关联的数据，比如一周的天气温度
```typescript
const Weather = [10.5,20,21,17,16,13,26]
```
同样地，Javascript提供了多种操作数组的方法，比如forEach、map、filter、reduce、some、every、concat、push、pop等

## 2.栈
栈，作为一种数据结构，遵循**后入现出**的原则，现实场景：一摞书或者一堆盘子  
栈被用在变编程语言中保存变量、方法调用等，也被用于浏览器历史记录。  
使用数组的形式，模拟栈数据结构相当方便
```typescript
class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}
```

我们也可以使用对象模拟栈数据结构，找到数据的时间复杂度是O(1)
```typescript
class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(element) {
    this.items[this.count] = element
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    } else {
      result = this.items[this.count]
      delete this.items[this.count]
      this.count--;
      return result
    }
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    } else {
      return this.items[this.count - 1]
    }
  }

  clear() {
    this.items = {}
    this.count = 0
  }
}
```

## 3.队列
队列，相当于是栈的相反原则，遵循先入先出的原则，现实例子：任务队列、排队。
```typescript
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    } else {
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      return result
    }
  }

  peek() {
    if (this.isEmpty) {
      return undefined
    } else {
      return this.items[this.lowestCount]
    }
  }

  isEmpty() {
    return this.count - this.lowestCount = 0
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
```
### 双端队列
双端队列，允许我们可以从前端和后端添加和移除元素的特殊队列，现实例子：VIP通道排队
双端队列同时遵循了先入先出和后入先出的原则，可以说是队列和栈的结合的一种数据结构
```typescript
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}
  }

  addFont(element) {
    if (this.isEmpty) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0;
      this.items[0] = element
    }

  }
}
```

## 4.链表
链表，比数组更加灵活。  
普通数组中添加一个元素需要将此位置后的所有元素都向下移一位，成本很大。  
链表是一种可以通过在其中添加一个数据引用的形式，成本很小，但是代价是寻找元素的情况下需要遍历整个链表,O(n)

```typescript
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push() {
    const node = new Node(element)
    let current;
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        // 获取最后一项
        current = current.next
      }
      // 将next赋值为新元素，建立连接
      current.next = node
    }
    this.count++;
  }

  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 移除第一项
      if (index === 0) {
        this.head = current.next
      } else {
        let previous = this.getElementAt(index - 1)
        current = previous.next
        // 将previous与current的下一项连接起来跳过current，从而移除它
        previous.next = current.next
      }
      this.count--;
      return current.element
    } else {
      return undefined
    }
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next
      }
      return node
    } else {
      return undefined
    }
  }

  insert(element, index) {
    if (index > 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current;
        previous.next = node
      }
      this.count++;
      return true
    } else {
      return false
    }
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (element === current.element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head === null) {
      return ''
    } else {
      let objString = `${this.head.element}`
      let current = this.head.next
      for (let i = 1; i < this.size() && current !== null; i++) {
        objString = `${objString}, ${current.element}`
        current = current.next
      }
      return objString
    }
  }
}
```

### 双向链表
双向链表，在普通链表的基础中在每个节点中加入了prev的引用，同时加入了tail尾部的引用，可以向前遍历，遍历效率更高。
```typescript
class DoubleNode {
  constructor(element, next, prev) {
    this.element = element
    this.prev = prev
    this.next = undefined
  }
}


class DoublyLinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(element)
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current;
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    } else {
      return false
    }

    removeAt(index) {
      if (index >= 0 && index < this.count) {
        let current = this.head
        if (index === 0) {
          this.head = current.next;
          // 如果只有一项，更新tail
          if (this.count === 1) {
            this.tail = undefined
          } else {
            this.head.prev = undefined
          }
        } else if (index === this.count - 1) {
          // 最后一项
          // 新增的current = this.tail
          this.tail = current.prev
          this.tail.next = undefined
        } else {
          current = this.getElementAt(index)
          const previous = current.prev
          // 将previous与current的下一项连接起来一一跳过current
          previous.next = current.prev
          current.next.prev = previous
        }
      }
    }
  }
}
```

### 循环链表
循环链表，和链表一样只有单项引用，可以有双向引用。唯一的区别就在于循环链表最后一个元素指向第一个元素。  
同样地，双向循环链表的前一个元素指向最后一个元素
```typescript
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

class CircularLInkedList {
  constructor() {
    this.next = undefined
    this.count = 0
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          current = this.getElementAt(this.size())
          // 更新最后一个元素
          this.head = node;
          current.next = this.head
        } else {
          // 这种场景和普通链表一样
          const previous = this.getElementAt(index - 1)
          node.next = previous.next;
          previous.next = node
        }
        this.count++;
        return true
      }
      return false
    }
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size())
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
```
### 有序链表
有序列表是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到正确的位置的来保证链表的有序性
```typescript
class SortedLinkedList extends LinkedList {
  constructor() {
    super()
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos)
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === -1)
        return i
      current = current.next
    }
    return i
  }
}


const COMPARE = {
  LESS_THAN = -1;
  BINGGER_THAN = 1
}

function compareFn(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? COMPARE.LESS_THAN : COMPARE.BINGGER_THAN
}
```
### 栈链表
同时我们可以使用普通链表的其他数据结构变种来创建数据结构，例如栈、队列和双向队列。  
对于StackLinkedList类，我们使用DoublyLinkedList来存储数据，因为我们会向链表尾部添加元素，也会从链表尾部移除元素，DoublyLinkedList有指向最后一个元素的tail引用。   
下面写的是栈数据结构
```typescript
class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    } else {
      return this.items.removeAt(this.size() - 1)
    }
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.getElementAt(this.size() - 1).element
  }

  isEmpty() {
    return this.items.isEmpty()
  }

  size() {
    return this.items.size()
  }
  clear() {
    this.items.clear()
  }
}
```

## 5.集合
集合，是一种不允许值重复顺序数据结构。  
集合是数学中基础的概念，它在计算机科学中的主要应用之一是数据库，被用于查询的设计和处理。  
当我们创建一条从关系型数据库（oracle、sqlserver、mysql等）中获取一个数据集合的查询语句时，使用的就是集合运算，并且数据库也会返回一个数据集合。当我们创建一条数据查询语句时，可以指定从表中获取相应的数据子集，或者存在于两张表数据的联合，这
些查询实现的基础就是集合运算。  
总共有四种运算，并集，交集，差集，子集。  
拓展：多重集或者袋。在计算集合中元素出现次数很有用
```typescript 
class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    // in 运算符则返回表示对象在原型链上是否有特定属性的布尔值
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach()(value => unionSet.add(value))
    otherSet.values().forEach()(value => unionSet.add(value))
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    // 优化：可选择最小的集合进行迭代
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}
```

## 6.字典
Set存储的是[值，值]对，字典存储的是[键，值]对
```typescript
class Dictionary {
  constructor() {
    this.table = {}
  }

  hasKey(key) {
    return this.table[String(key)] != null
  }

  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = String(key)
      this.table[tableKey] new ValuePair(key, value)
      return true
    }
    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[String(key)]
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[String(key)]
    return valuePair === null ? undefined : valuePair.value
  }

  keyValues() {
    return Object.values(this.table)
  }

  forEach(callbackFn) {
    const valuePair = this.keyValues()
    for (let i = 0; i < valuePair.length; i++) {
      const result = callbackFn(valuePair[i].key, valuePair[i].value)
      if (result === index) {
        break
      }
    }
  }

  size() {
    retunr Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = {}
  }

  toString() {
    if(this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for(let i =1;i<valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`
    }
    return objString
  }
}

export class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}
```

### 散列表
散列算法的作用是尽可能快地在数据结构中找到一个值。
```typescript
class HashTable {
  constructor() {
    this.table = {}
  }

  put(key, value) {

  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    } else {
      return false
    }
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair === null ? undefined : valuePair.value
  }

  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair !== null) {
      delete this.table[hash]
      return true
    }
    return false
  }
}


loseloseHashCode(key) {
  if (typeof key === 'number') {
    return key
  }
  const tableKey = String(key)
  let hash = 0
  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i)
  }
  return hash % 37
}

// 实现的loselose散列函数不是一个表现良好的散列函数，因为它会产生太多的冲突。
// 我们将hash变量赋值并和一个质数（幻数）相乘，并和当前迭代到的自负ASCII码想加。
// 下面的djb2HashCode是社区中使用最广泛的散列函数
djb2HashCode(key) {
  const tableKey = Stirng(key)
  let hash = 5381
  for (let i = 0; i < tableKey.length; i++) {
    hash = (hash * 33) + tableKey.charCodeAt(i)
  }
  return hash & 1013
}

hashCode(key) {
  return this.loseloseHashCode(key)
}
```

使用哈希表来存储数据，当哈希值也就是离散值相同的时候，最后一个被添加的值就会覆盖原先的值。我们使用一个数据结构来保存数据的目的显然不是丢失这些数据，而是通过某种方法将他们全部保存起来。因此，当这种情况发生的时候就要去解决。  
处理冲突的方法有三种：
1. 是分离链接
2. 是线性探查
3. 是双散列法
### 分离链接
分离链接法表现为每个散列表的每个位置创建一个链表
```typescript
class HashTableLinearProbingLazy {
  constructor() {
    this.table = {}
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key)
      if (this.table[position] === null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index] !== null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }

  get(key) {
    const position = hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table !== null && this.table[index].key === key) {
        index++
      }
      if (this.table !== null && this.table[index].key === key) {
        return this.table[position].value
      }
    }
    return undefined
  }

  remove(key) {
    const position = hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] !== null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] !== null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
  }

  verifyRemoveSideEffect(key, removePosition) {
    const hash = hashCode(key, removePosition)
    let index = removePosition + 1
    while (this.table[index] !== null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removePosition) {
        this.table[removePosition] = this.table[index]
        delete this.table[index]
        removePosition = index
      }
      index++
    }
  }
}
```

### 线性探查
```typescript
class HashTableLinearProbingLazy {
  constructor() {
    this.table = {}
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key)
      if (this.table[position] === null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index] !== null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }

  get(key) {
    const position = hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table !== null && this.table[index].key === key) {
        index++
      }
      if (this.table !== null && this.table[index].key === key) {
        return this.table[position].value
      }
    }
    return undefined
  }

  remove(key) {
    const position = hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] !== null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] !== null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
  }

  verifyRemoveSideEffect(key, removePosition) {
    const hash = hashCode(key, removePosition)
    let index = removePosition + 1
    while (this.table[index] !== null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removePosition) {
        this.table[removePosition] = this.table[index]
        delete this.table[index]
        removePosition = index
      }
      index++
    }
  }
}
```

## 7.递归
递归函数必须具备一个特征：每个递归函数都必须有基线条件，即一个不再递归调用的条件点（停止点），以防无限递归

递归调用栈  
当使用递归的时候，每个函数调用都会堆叠在调用栈的顶部，这是因为每个调用都可能依赖前一个调用的结果

调用栈大小限制，可以通过简单的代码测试  
```typescript
let i = 0;

function recursiveFn() {
  i++;
  recursiveFn()
}
try {
  recursiveFn()
} catch (ex) {
  console.log('i =' + i + ' error:' + ex)
}
```
在Chorme v65中 15662次，在Firefox v59中，188641次

记忆化是保存前一个结果的值的优化技术，类似于缓存  
当我们分析普通的粉波那契数列调用是，我们发现fibonacci(3)被调用了两次，因此可以将它的结果存储下来。下面是记忆化斐波那契数列  
```typescript
function finbonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }
  return fibonacci(n);
}
```

## 8.树
二叉树最多只有两个子节点，一个左侧一个右侧。这个定义可以帮助我们高效地插入、查找、删除
### 二叉搜索树
二叉搜索树是二叉树的一种，但是它只允许你在左侧节点存储比父节点更小的值。左小右大
```typescript
export class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (compareFn(key, node.key) === COMPARE.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 访问树所有节点的方式有三种：中序、先序、后序。
  // 不同的是调用callback的时机不同，其实就是递归调用栈的调用顺序不一致，也就是遍历顺序不一样。

  // 中序遍历。其中callback用来定义我们对遍历到的每个节点进行的操作，又叫做访问者模式
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (this.root, callback) => {
      if (node !== null) {
        this.inOrderTraverse(node.left, callback)
        callback(node.key)
        this.inOrderTraverse(node.right, callback)
      }
    }
  }

  // 先序遍历
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (this.root, callback) => {
      if (node !== null) {
        callback(node.key)
        this.preOrderTraverseNode(node.left, callback)
        this.preOrderTraverseNode(node.right, callback)
      }
    }
  }

  // 后序遍历
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (this.root, callback) => {
      if (node !== null) {
        callback(node.key)
        this.postOrderTraverseNode(node.left, callback)
        this.postOrderTraverseNode(node.right, callback)
      }
    }
  }

  // 搜索最小值和最大值
  min() {
    const minNode = (node) => {
      let current = node
      while (current !== null && current.left !== null) {
        current = current.left
      }
      retrun current
    }
    return minNode(this.root)
  }

  max() {
    const maxNode = (node) => {
      let current = node
      while (current !== null && current.right !== null) {
        current = current.right
      }
      retrun current
    }
    return maxNode(this.root)
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node === null) {
        return false;
      }
      if (compareFn(key, node.key) === COMPARE.LESS_THAN) {
        return this.searchNode(node.left, key)
      } else if (compareFn(key, node.key) === COMPARE.BINGGER_THAN) {
        return this.searchNode(node.right, key)
      } else {
        return true
      }
    }
    return searchNode(this.root, key)
  }

  remove(key) {
    const removeNode = (node, key) => {
      if (node === null) {
        return null
      }
      if (compareFn(key, node.key) === COMPARE.LESS_THAN) {
        node.left = removeNode(node.left, key)
        return node
      } else if (compareFn(key, node.key) === COMPARE.BINGGER_THAN) {
        node.right = removeNode(node.right, key)
        return node
      } else {
        // 键等于node.key

        // 第一种情况
        if (node.left === null && node.right === null) {
          node = null
          return node
        }
        // 第二种情况
        if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        }

        // 第三种情况
        const aux = this.minNode(node.right)
        node.key = aux.key
        node.right = this.removeNode(node.right, aux.key)
        return node
      }
    }
    this.root = this.removeNode(this.root, key)
  }
}
```

### AVL树
二叉搜索树存在一个问题，就是添加的节点数很多的时候，树的一条边可能会非常的深，也就是说，树的一条分支会有很多层，而其他的分支却只有几层。  
AVL树是一种自平衡树。添加或删除节点时，AVL树会尝试保持自平衡。任意一个节点（不论深度）的左子树和右子树高度最多相差1。添加或移除节点时，AVL树会尽可能地尝试转换为完全树。
```typescript
export class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class AVLTree extends BinarySearchTree {
  constructor() {
    super()
    this.root = null
  }

  getNodeHight(node) {
    if (node === null) {
      return -1
    }
    return Math.max(getNodeHight(node.left), getNodeHight(node.right)) + 1
  }

  // 平衡因子就是计算右子树高度和左子树高度之间的差值（hr-hl)，该值应为0，1或-1。如果这个值不为这个三值之一，则需要平衡该AVL树。
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHight(node.left) - this.getNodeHight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }

  // 在执行插入的过程中，我们可以通过单旋转和双旋转两种平衡操作，分别对应四种场景
  // 左-左（LL）：向右的单旋转
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }
  // 右-右（RR）：向左的单旋转
  rotationRR(node) {
    const tmp = node.right
    node.left = tmp.left
    tmp.left = node
    return tmp
  }
  // 左-右（LR）：向右的双旋转
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }
  // 右-左（RL）：向左的双旋转
  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this, this.rotationRR(node)
  }

  insert(key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode(node, key) {
    // 像在BST树中一样插入节点
    if (node === null) {
      return new Node(key)
    } else if (compareFn(key, node.key) === COMPARE.LESS_THAN) {
      node.left = this.insertNode(node.left, key)
    } else if (compareFn(key, node.key) === COMPARE.BINGGER_THAN) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node
      // 重复的键
      // 如果需要，将树进行平衡操作
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
        if (compareFn(key, node.left.key) === COMPARE.LESS_THAN) {
          node = this.rotationLL(node)
        } else {
          return this.rotationLR(node)
        }
      }
      if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
        if (compareFn(key, node.right.key) === COMPARE.BINGGER_THAN) {
          node = this.rotationRR(node)
        } else {
          return this.rotationRL(node)
        }
      }
    }
    return node
  }

  removeNode(node, key) {
    node = super.removeNode(node, key)
    if (node === null) {
      return node // null，不需要进行平衡
    }
    // 检测是否平衡
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = BalanceFactor.BALANCED
      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHLY_UNBALANCED_LEFT) {
        return this.rotationLL(node)
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right)
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node)
      }
      if (balanceFactorRight === BalanceFactor.SLIGHLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right)
      }
    }
    return node
  }
}

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
}
```

### 红黑树
红黑树也是自平衡二叉搜索树。包含多次插入和删除的自平衡树，红黑树是比较好的。如果我们更需哟啊多次搜索操作，那么AVL树比红黑树更好。  
在红黑树中，每个节点遵循以下规则：
1. 每个节点不是红的就是黑的
2. 树的根节点是黑的
3. 所有叶节点都是黑的（用NULL引用表示的节点）
4. 如果一个节点是红的，那么它的两个字节点都是黑的
5. 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点
6. 从给定的节点到它的后代节点（NULL叶节点）的所有路径包含相同数量的黑色节点
```typescript
export class RedBlackNode extends Node {
  constructor(key) {
    super(key)
    this.key = key
    this.color = Colors.RED
    this.parent = null
  }

  isRed() {
    return this.color === Colors.RED
  }
}

class RedBlackTree extends BinarySearchTree {
  constructor() {
    super()
    this.root = null
  }

  insert(key: T) {
    if (this.root === null) {
      this.root = new RedBlackNode(key)
      this.root.color = Color.Black;
    } else {
      const newNode = this.insertNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }

  insertNode(node, key) {
    if (compareFn(key, node.key) === COMPARE.LESS_THAN) {
      if (node.left === null) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left
      } else {
        return this.insertNode(node.left, key)
      }
    } else if (node.right === null) {
      node.right = new RedBlackNode(key)
      node.right.parent = node;
      return node.right
    } else {
      return this.insertNode(node.right, key)
    }
  }

  fixTreeProperties(node) {
    while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent
      const grandParent = parent.parent
      // 情形A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right
        // 情形1A：叔节点也是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // 情形2A：节点是右侧子节点——左旋转
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent
          } else {
            // 情形3A：节点是左侧子节点——右旋转
            this.rotationLL(grandParent)
            parent.color = Colors.BLACK
            grandParent.color = Colors.RED
            node = parent
          }

        }

      } else {
        // 情形B：父节点是右侧子节点
        const uncle = grandParent.left
        // 情形1B：叔节点是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // 情形2B：节点是左侧子节点——右旋转
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          } else {
            // 情形3B：节点是右侧子节点——左旋转
            this.rotationRR(grandParent)
            parent.color = Colors.BLACK
            grandParent.color = Colors.RED
            node = parent
          }
        }
      }
    }
    this.root.color = Colors.Black
  }

  // 红黑树旋转，在红黑树算法中，我们只需要使用右-右旋转和左-左旋转
  // 但是由于我们保存了父节点的引用，需要将引用更新为旋转后的新父节点
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else if (node === node.parent.left) {
      node.parent.left = tmp
    } else {
      node.parent.right = tmp
    }
    tmp.right = node
    node.parent = tmp
  }

  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.left = node
    node.parent = tmp
  }
}

const Colors = {
  RED,
  BLACK
}
```
## 9.堆
堆是一种特殊的二叉树。  
它能高效、快速地找出最大值和最小值，常被应用于优先队列。也被应用于著名的堆排序算法中
### 最大堆
```typescript
class MaxHeap extends MinHeap {
  constructor(compareFn = compareFn) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}

function swap(array, a, b) {
  const tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
}

function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}
```

### 最小树
```typescript
class MinHeap {
  constructor() {
    this.heap = []
  }

  getLeftIndex(index) {
    return 2 * index + 1
  }

  getRightIndex(index) {
    return 2 * index + 2
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value !== null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  siftUp(idnex) {
    let parent = this.getParentIndex(index)
    while (index > 0 && compareFn(this.heap[parent], this.heap[indx]) > COMPARE.BINGGER_THAN) {
      swap(this.heap, parent, index);
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size()
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  // 移除最小值或者最大值表示移除数组中第一个元素。移除后，我们将堆的最后一个元素移动至根部并执行siftDown函数，表示我们将交换元素直到堆的结构正常。这个下移也称作sink、down、percolete、down、bubble、down、heapify、down或cascade down
  extract() {
    if (this.isEmpty()) {
      return undefined
    }

    if (this.size() === 1) {
      return this.heap.shift()
    }

    const removedValue = this.heap.shift()
    this.siftDown(0)
    return removedValue
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (left < size && compareFn(this.heap[element], this.heap[left]) > COMPARE.BINGGER_THAN) {
      element = left
    }
    if (right < size && compareFn(this.heap[element], this.heap[right]) > COMPARE.BINGGER_THAN) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

function swap(array, a, b) {
  const tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
}
```
### 堆排序
二叉树数据有一个非常著名的排序算法：堆排序算法

1. 用数组创建一个最大堆用做数据源
2. 在创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个值，将堆的大小减少1
3. 最后，我们将堆的根节点下移并重复步骤2直至堆的大小为112
```typescript
function heapSort(array, compareFn = compareFn) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn)
  while (heapSize > 1) {
    swap(array, 0, --heapSize)
    heapify(array, 0, heapSize, compareFn)
  }
  return array
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn)
  }
  return array
}
```

## 10.图
图有三种表示方法
1. 邻接矩阵  
  A B C  
A 0 0 0  
B 0 0 0  
C 0 0 0  
2. 邻接表  
  A B C  
  B A  
  C A D  
3. 关联矩阵（行为端点，列为连接）  
    v1 v2 v3  
  A 0  0  0  
  B 0  0  0  
  C 0  0  0  
```typescript
class Graph {
  constructor(isDirected = false) {
    // 图是否有方向
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Dictionary()
  }

  // 添加一个相应的顶点
  addVertex(x) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }

  // 添加顶点之间的边
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w)
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }

  getVertices() {
    return this.vertices
  }

  getAdjList() {
    return this.adjList
  }

  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0 l i < neighbors.length; j++) {
        s += `${neighbors[j]}`
      }
      s += '\n'
    }
    return s
  }

  // 图的遍历，右两种算法可以进行遍历：
  // 1.广度优先搜索:数据结构————栈 将顶点存入栈，顶点时沿着路径被探索的，存在新的相邻顶点就去访问
  // 2.深度优先搜索:数据结构————队列 将顶点存入队列，最先入队列的顶点先被探索

}

const Colors = {
  // 白色：表示该顶点还没有被访问
  WHITE: 0,
  // 灰色：表示该顶点被访问过，但并未被探索过
  GREY: 1,
  // 黑色：表示该顶点被访问过且被完全探索过
  BLACK: 2
}

const initializeColor = vertices => {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const queue = new Queue()

  queue.enqueue(startVertex)

  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList(u)
    color[u] = Colors.GREY
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
    if (callback) {
      callback(u)
    }
  }

}

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor()
  const queue = new Queue()
  const distances = {}
  const predecessors = {}
  queue.enqueue(startVertex)

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get()
    color[u] = Colors.GREY
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        distances[w] = distances[u] + 1
        predecessors[w] = u
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
  }
  return {
    distances,
    predecessors
  }
}

const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor()

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }

  const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY
    if (callback) {
      callback(u)
    }
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        depthFirstSearchVisit(w, color, adjList, callback)
      }
    }
    color[u] = Colors.BLACK
  }
}

export const DFS = graph => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const d = {}
  const f = {}
  const p = {}
  const time = {
    count: 0
  }
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList)
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p
  }
}

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY
  d[u] = ++time.count
  const neighbors = adjList.get(u)
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]
    if (color[w] === Colors.WHITE) {
      p[w] = u
      DFSVisit(w, color, d, f, p, time, adjList)
    }
  }
  color[u] = Colors.BLACK
  f[u] = ++time.count
}
```
### Dijkstra算法
Dijkstra算法是一种计算从单个源到所有其他源的最短路径的贪心算法，这意味着我们可以用它来计算从图的一个顶点到其余各顶点的最短路径
```typescript
const INF = Number.MAX_SAFE_INTEGER

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
]

const minDistance = (dist, visited) => {
  let min = INF
  let minIndex = -1
  for (let v = 0; v < dist.length; v++) {
    console.log('first', dist[v])

    if (visited[v] === false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}

const dijkstra = (graph, src) => {
  const dist = []
  const visited = []
  const {
    length
  } = graph
  for (let i = 0; i < length; i++) {
    dist[i] = INF
    visited[i] = false
  }
  dist[src] = 0
  for (let i = 0; i < length - 1; i++) {
    const u = minDistance(dist, visited)
    console.log(u, i, 'u')
    visited[i] = true
    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }
  return dist
}

console.log(dijkstra(graph, 0))
```

### Floyd-Warshall算法
Floyd-Warshall算法是一种计算图中所有最短路径的动态规划算法。通过该算法，我们可以找出所有源到所有顶端的最短路径
```typescript
const floydWarshall = graph => {
  const dist = []
  const {
    length
  } = graph

  for (let i = 0; i < length; i++) {
    dist[i] = []
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0
      } else if (graph[i][j] === 0) {
        dist[i][j] = Infinity
      } else {
        dist[i][j] = graph[i][j]
      }
    }
  }
  console.log(dist, 'dis')
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }
  return dist
}

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
]
```
### Prim算法
Prim算法是一种求解加权无向联通图的MST问题的贪心算法，它能找到一个边的子集，使得其构成的树包含图中所有的顶点，且边的权值之和最小
```typescript
const INF = Number.MAX_SAFE_INTEGER

const prim = praph => {
  const parent = []
  const key = []
  const visited = []
  const {
    length
  } = graph
  for (let i = 0; i < length; i++) {
    key[i] = INF
    visited[i] = false
  }
  key[0] = 0
  parent[0] = -1
  for (let i = 0; i < length; i++) {
    const u = minKey(graph, key, visited)
    visited[u] = true
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u
        key[v] = graph[u][v]
      }
    }
  }
  return parent
}
```

## 11.排序算法

### 冒泡排序
复杂度是O(n ^ 2)
```typescript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
}
```
### 选择排序
每次循环赋值起始位置，再进入一个循环，然后当此索引位置的值大于第二次循环中的比较索引值时，记录比较的索引。  
最后当赋值索引和循环初始值不一样时，交换两个索引的位置  
复杂度是O(n^2)
```typescript
function selectionSort(array) {
  let indexMin;
  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i
    for (let j = i; j < array.length; j++) {
      array[indexMin] > array[j]
      indexMin = j
    }
    if (i !== indexMin) {
      const tmp = array[i]
      array[i] = array[indexMin]
      array[indexMin] = tmp
    }
  }
}
```
### 插入排序
复杂度是O(n^2)
```typescript
function insertionSort(array) {
  let tmp;
  for (let i = 1; i < array.length; i++) {
    let j = i
    tmp = array[i]
    while (j > 0 && array[j - 1] > tmp) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = tmp
  }
  return array
}
```
### 并归排序
并归排序, Mozilla Firfox使用并归排序作为sort的实现，Chrome使用了一个快速排序的变体。  
复杂度是O(nlog(n))
```typescript
function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(0, middle))
    array = merge(left, right)
  }
  return array
}

function merge(left, right) {
  let i = 0;
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
```
### 快速排序
快速排序, 也采用分而治之的方法，将原始数组分为较小的数组。 
复杂度是O(nlog(n))  
1. 首先，从数组中选择一个值作为主元，也就是数组中间的那个值
2. 创建两个引用，左边一个指向数组第一个值，右边一个引用指向数组最后一个值。移动左指针直到找到一个比主元更大的值，接着移动右指针直到找到一个比主元小的值。然后交换他们。重复这个过程，直到左指针超过了右指针。这个过程将使得比左元小的排在主元之前，比主元大的排在主元之后。这一部分被称做划分（partition）
3. 接着，对划分后的小数组重复之前的两个步骤，直至数组已完全排序

```typescript
function quickSort(array) {
  return quick(array, 0, array.length - 1)
}

function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array
}


function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left;
  let j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[i] > pivot) {
      j--
    }
    if (i <= j) {
      const tmp = array[i]
      array[i] = array[j]
      array[j] = tmp
    }
  }
  return i
}
```
### 计数排序
计数排序, 是第一个分布式排序。分布式排序使用已组织好的辅助数据结构（称为桶）然后进行合并，得到排好序的数组。  
他是一个整数排序算法,复杂度是O(n + k) k是临时计数数组的大小
```typescript
function countingSort(array) {
  if (array.length < 2) {
    return array
  }

  const maxValue = findMaxValue(array)

  const counts = new Array(maxValue + 1)

  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })

  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex] = i;
      count--
    }
  })
  return array
}


function findMaxValue(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
```
### 桶排序
也是分布式算法，它将与元素分为不同的桶，再使用一个简单的排序算法，来对每个桶进行排序
```typescript
function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array
  }
  const buckets = createBuckets(array, bucketSize)
  return sortBuckets(buckets)
}

function createBuckets(array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}

function sortBuckets(buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}
```

### 基数排序
基数排序也是一个分布式的排序算法，它根据数字的有效位或技术将整数分布到桶中。
```typescript
function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array
  }
  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)

  let significantDigit = 1
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue)
    significantDigit *= radixBase
  }
  return array
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let bucketsIndex;
  const buckets = []
  const aux = []
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) * radixBase)
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1]
  }
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % significantDigit) % radixBase
    aux[--buckets[bucketsIndex]] = array[i]
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i]
  }
  return array
}
```

## 12.搜索算法

### 线性搜索
顺序或线性搜索是最基本的搜索算法。
```typescript
const DOES_NOT_EXIST = -1
function sequentialSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i
    }
  }
  return DOES_NOT_EXIST
}
```

### 二分搜索
二分搜索的原理和猜数字游戏类似。遵循以下步骤
1. 选择数组的中间值
2. 如果选中值是待搜索值，那么算法执行完毕
3. 如果待搜索值比选中的值要小，那么返回步骤一并在选中值的左边去寻找（较小）
4. 如果待搜索值比选中的值要大，那么返回步骤一并在选中值的右边去寻找（较大）
```typescript
function binarySearch(array, value) {
  const sortedArray = quickSort(array)
  let low = 0;
  let high = sortedArray.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    if (element < value) {
      low = mid + 1
    } else if (element > value) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return DOES_NOT_EXIST
}
```

### 内插搜索
内插搜索是改良版的二分搜索。二分搜索总
1. position公式选中一个值
2. 如果这个值待搜索，那么算法执行完毕（值找到了）
3. 如果待搜索值比选中的值要小，那么返回步骤一并在选中值的左边去寻找（较小）
4. 如果待搜索值比选中的值要大，那么返回步骤一并在选中值的右边去寻找（较大）
```typescript
function interpolationSearch(array, value) {
  let low = 0;
  let high = array.length
  let position = -1
  let delta = -1
  while (low <= high && value >= array[low] && value <= array[high]) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low])
    position = low + Math.floor((high - low) * delta)
    if (array[position] === value) {
      return position
    }
    if (array[position] < value) {
      low = position + 1
    } else {
      high = position - 1
    }
  }
  return DOES_NOT_EXIST
}
```