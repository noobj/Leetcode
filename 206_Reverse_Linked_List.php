<?php

class ListNode
{
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null)
    {
        $this->val = $val;
        $this->next = $next;
    }
}

function printList($head)
{
    while ($head != null) {
        echo $head->val . "->";
        $head = $head->next;
    }
}

$node = new ListNode(1, null);
$node->next = new ListNode(2, null);
$node->next->next = new ListNode(3, null);
printList(reverseList($node));

/**
 * @param ListNode $head
 * @return ListNode
 */
function reverseList($head)
{
    $resultHead = new ListNode(0, null);
    $result = $resultHead;
    $pre = null;
    while ($head != null) {
        $next = new ListNode($head->val, $pre);
        $result->next = $next;
        $pre = $next;
        $head = $head->next;
        $result = $resultHead;
    }

    return $resultHead->next;
}
