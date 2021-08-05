import { ListNode, turnNumberIntoList, printList } from '../modules/linked_list.module';

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let slow = head,
        fast = head;

    while (k > 1) {
        fast = fast.next;
        k--;
    }

    let i = fast;
    while (i.next != null) {
        slow = slow.next;
        i = i.next;
    }

    const tmp = fast.val;
    fast.val = slow.val;
    slow.val = tmp;

    return head;
}

function main() {
    const hrstart = process.hrtime();
    printList(
        swapNodes(
            turnNumberIntoList([47, 62, 39, 94, 90, 17, 74, 7, 83, 70, 12, 99, 29, 73]),
            12
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
