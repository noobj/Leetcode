import { ListNode, turnNumberIntoList, printList } from '../modules/linked_list.module';

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    let current: ListNode | null = l1;
    while (current != null) {
        const tmp: ListNode | null = current.next;
        current.next = null;
        l2 = insertNode(l2, current);
        current = tmp;
    }

    return l2;
}

function insertNode(list: ListNode | null, node: ListNode): ListNode | null {
    if (list == null || node.val <= list.val) {
        node.next = list;
        return node;
    }

    list.next = insertNode(list.next, node);

    return list;
}

function main() {
    const hrstart = process.hrtime();
    printList(
        mergeTwoLists(turnNumberIntoList([1, 2, 4]), turnNumberIntoList([1, 3, 5]))
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
