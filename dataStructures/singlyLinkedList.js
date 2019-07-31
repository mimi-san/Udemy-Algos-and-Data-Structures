class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    let current = this.head;
    let previous = current;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;
    return temp;
  }
}