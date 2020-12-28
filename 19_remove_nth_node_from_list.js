
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    newHead = new ListNode(0, head);
    deleteNode(newHead, n);
    return newHead.next;
};

function deleteNode(currentNode, n) {
    if(currentNode.next === null) {
        return 0;
    }

    let current = deleteNode(currentNode.next, n) + 1;
    console.log(currentNode);
    if(current == n) {
        currentNode.next = currentNode.next.next;
    }
    return current;
}

function printList(list) {
    let str = list.val;
    while(list.next != null) {
        list = list.next;
        str += '->' + list.val;
    }
    str += '->null';
    console.log(str);
}

function turnNumberIntoList(val) {
    let start = new ListNode(val[val.length - 1], undefined);
    for (let i = val.length - 2; i >= 0; i--) {
        start = new ListNode(val[i], start);
    }
    return start;
}

let a = turnNumberIntoList([1,2,3]);
printList(removeNthFromEnd(a, 2));