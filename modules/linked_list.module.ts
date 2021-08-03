export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function turnNumberIntoList(val: number[]): ListNode {
    let start = new ListNode(val[val.length - 1], undefined);
    for (let i = val.length - 2; i >= 0; i--) {
        start = new ListNode(val[i], start);
    }
    return start;
}

export function printList(list: ListNode | null) {
    if (list == null) return;

    let str = list.val.toString();
    while (list.next != null) {
        list = list.next;
        str += '->' + list.val.toString();
    }
    str += '->null';
    console.log(str);
}

export function printListCircular(list: ListNode | null) {
    if (list == null) return;

    const head = list;
    let str = list.val.toString();
    while (list.next != null && list.next != head) {
        list = list.next;
        str += '->' + list.val.toString();
    }
    str += '->...';
    console.log(str);
}