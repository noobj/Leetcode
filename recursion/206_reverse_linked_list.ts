import { ListNode, turnNumberIntoList, printList } from '../modules/linked_list.module';

function reverseList(head: ListNode | null): ListNode | null {
    if (head == null) return null;

    const pre = new ListNode(undefined, null);
    helper(pre, head);
    return pre.next;
}

function helper(pre: ListNode, head: ListNode): ListNode {
    if (head.next == null) {
        pre.next = head;
        return head;
    }

    const nextNode = helper(pre, head.next);
    nextNode.next = head;
    head.next = null;
    return head;
}

function main() {
    const hrstart = process.hrtime();
    printList(reverseList(turnNumberIntoList([1, 2, 3, 4])));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
