import { Node } from "./src/helpers/Classes";

let node: Node<string> = new Node("test");
node.appendToTail("test2");
node.appendToTail("test3");
let newNode: Node<string> = node.deleteNode(node, "test2");

while(newNode != null) {
    console.log(newNode.data);
    newNode = newNode.next;
}
