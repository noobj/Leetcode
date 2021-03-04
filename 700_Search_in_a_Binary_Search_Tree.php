<?php

class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

/**
 * @param TreeNode $root
 * @param Integer $val
 * @return TreeNode
 */
function searchBST($root, $val) {
    if($root == null) return;
    if($root->val == $val) return $root;
    else if($root->val > $val) {
        return searchBST($root->left, $val);
    } else {
        return searchBST($root->right, $val);
    }
}

$t = new TreeNode(4, null, new TreeNode(7));
$t1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
$t->left = $t1;

var_dump(searchBST($t, 2));