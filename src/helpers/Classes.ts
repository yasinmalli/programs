export class Node<T> {
    data: T;
    next: Node<T>;

    constructor(d: T) {
        this.data = d;
        this.next = null;
    }

    appendToTail(d: T): void {

    }
}

export class LinkedList<T> {
    head: Node<T>;
}