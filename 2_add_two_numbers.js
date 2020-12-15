/**
 * Solved at 15/12/2020
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function turnNumberIntoList(val) {
    var digits = ("" + val).split("").map(v => parseInt(v, 10));
    let start = new ListNode(digits[0], undefined);
    for( let i = 1; i < digits.length ; i++) {
        start = new ListNode(digits[i], start);
    }
    return start;
}

function turnListIntoNumber(list) {
    let numOrigin = [];
    let current = list;
    while(current !== null) {
        numOrigin.push(current.val);
        current = current.next;
    }

    return parseInt(numOrigin.reverse().join(""));
}




/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    let remainder, quotient = 0;
    /** Javascript object will be assigned-by-reference,
        so the dummy would stay at the start point, where the
        result will keep linking another nodes */
    let dummy = new ListNode();
    let result = dummy;
    while(l1 !== null || l2 != null) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        remainder = (x + y + quotient) % 10;
        quotient = Math.floor((x + y + quotient) / 10);
        result.next = new ListNode(remainder);
        result = result.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if(quotient == 1) {
        result.next = new ListNode(quotient);
    }

    return dummy.next;
};

let l1 = turnNumberIntoList(1411115);
let l2 = turnNumberIntoList(465);
console.log(turnListIntoNumber(addTwoNumbers(l1, l2)));