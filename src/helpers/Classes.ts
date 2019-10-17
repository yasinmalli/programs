export class Node<T> {
    data: T;
    next: Node<T>;

    constructor(d: T) {
        this.data = d;
        this.next = null;
    }

    appendToTail(d: T): void {
        let currentNode: Node<T> = this;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node<T>(d);
    }

    deleteNode(head: Node<T>, d: T): Node<T> {
        let currentNode: Node<T> = head;

        if (currentNode.data == d) {
            return currentNode.next;
        }

        while (currentNode.next != null) {
            if (currentNode.next.data == d) {
                currentNode.next = currentNode.next.next;
                return head;
            }

            currentNode = currentNode.next;
        }

        return head;
    }
}

export class LinkedList<T> {
    head: Node<T>;
}   