import { ListNode, turnNumberIntoList } from '../modules/linked_list.module';

function hasCycle(head: ListNode | null): boolean {
    if (head == null) return false;

    let fast = head.next;
    let slow = head;
    while (fast.next != null && fast.next.next != null) {
        if (fast == slow || fast.next == slow || fast.next.next == slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
}

function main() {
    const hrstart = process.hrtime();
    const list = turnNumberIntoList([3, 2, 0, -4]);
    let tmp1 = list;
    while (tmp1.next != null) tmp1 = tmp1.next;
    tmp1.next = list.next;

    console.log(hasCycle(list));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
