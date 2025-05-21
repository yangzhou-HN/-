function Node(value) {
    this.value;
    this.next = null;
    this.pre = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.pre = node1;
node2.next = node3;
node3.pre = node2;
node3.next = node4;
node4.pre = node3;
node4.next = node5;
node5.pre = node4;

console.log(+0 == -0);
console.log(+0 === -0);
let strings = "你好,{{ content }}";
let result = strings.replace("{{ content }}", 'templateValue'); 
console.log(result);
// 双向链表的优点， 无论给出哪个一个节点，都能对整个链表进行遍历。
// 缺点, 多耗费一个引用空间，而且构建双向链表比较复杂。