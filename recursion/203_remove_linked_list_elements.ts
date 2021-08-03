import { ListNode, turnNumberIntoList, printList } from '../modules/linked_list.module';

function removeElementsIterative(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return null;

    head = new ListNode(0, head);
    let current = head.next;
    let pre = head;
    while (current !== null) {
        if (current.val === val) {
            pre.next = current.next;
            current = current.next;
            continue;
        }

        if (pre.next != null) pre = pre.next;
        current = current.next;
    }

    return head.next;
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return null;

    head.next = removeElements(head.next, val);

    return head.val === val ? head.next : head;
}

function main() {
    const hrstart = process.hrtime();
    printList(removeElementsIterative(turnNumberIntoList([1, 6, 6, 5, 4, 3, 6, 6]), 6));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
