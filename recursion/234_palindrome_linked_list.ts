import { ListNode, turnNumberIntoList } from '../modules/linked_list.module';

function isPalindrome(head: ListNode | null): boolean {
    let fast: ListNode | null | undefined = head,
        slow: ListNode | null | undefined = head;
    while (fast != undefined || fast != null) {
        fast = fast?.next?.next;
        slow = slow?.next;
    }

    slow = slow === undefined ? null : slow;

    slow = reverseList(slow);

    while (slow != null) {
        if (slow.val != head?.val) return false;

        slow = slow.next;
        head = head?.next;
    }

    return true;
}

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
    console.log(isPalindrome(turnNumberIntoList([3, 2, 3, 2, 3])));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
