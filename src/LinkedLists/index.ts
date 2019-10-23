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

    removeDups(head: Node<T>): void {
        const dataSet = new Set();
        let prev : Node<T> = null;

        while (head != null) {
            if (dataSet.has(head.data)) {
                prev.next = head.next;
            } else {
                dataSet.add(head.data);
                prev = head;
            }

            head = head.next;
        }
    }

    removeDupsWithRunner(head: Node<T>): void {
        let current: Node<T> = head;
        while(current != null) {
            
            let runner: Node<T> = current;
            while(runner.next != null) {
                if (runner.next.data == current.data) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            
            current = current.next;
        }
    }

    printKthElementToLast(head: Node<T>, k: number): number {
        if (head == null) {
            return 0;
        }

        let index: number = this.printKthElementToLast(head.next, k) + 1;
        if (index == k) {
            console.log(`kth element is: ${head.data}`);
        }

        return index;
    }
    
}

export class LinkedList<T> {
    head: Node<T>;
} 


/********************************************************************** */

let node: Node<string> = new Node("test");
node.appendToTail("test2");
node.appendToTail("test3");
node.appendToTail("test3");
node.appendToTail("test4");

let newNode: Node<string> = node.deleteNode(node, "test2");
// newNode.removeDups(newNode);
newNode.removeDupsWithRunner(newNode);
newNode.printKthElementToLast(newNode, 5);

while(newNode != null) {
    console.log(newNode.data);
    newNode = newNode.next;
}
