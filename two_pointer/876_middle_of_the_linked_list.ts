import { ListNode, turnNumberIntoList, printList } from '../modules/linked_list.module';

function middleNode(head: ListNode | null): ListNode | null {
    if (head == null) return null;

    let fast = head,
        slow = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function main() {
    const hrstart = process.hrtime();
    printList(middleNode(turnNumberIntoList([1, 2, 3, 5, 6])));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
