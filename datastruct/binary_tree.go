package datastruct

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pop(alist *[]TreeNode) TreeNode {
	f := len(*alist)
	rv := (*alist)[f-1]
	*alist = (*alist)[:f-1]
	return rv
}

func (root *TreeNode) InorderTraversaliterative() []int {
	stack := []TreeNode{}
	result := []int{}
	current := root
	fmt.Println(current.Left.Left.Left)
	for current != nil || len(stack) != 0 {
		if current != nil {
			stack = append(stack, *current)
			current = current.Left
		} else {
			tmp := pop(&stack)
			result = append(result, tmp.Val)
			current = tmp.Right
		}
	}

	return result
}

func TurnArrayIntoTree(nums []int, i int) *TreeNode {
	// Base case for recursion
	if i < len(nums) {
		var root TreeNode

		var temp = TreeNode{Val: nums[i]}
		root = temp

		// insert left child
		root.Left = TurnArrayIntoTree(nums, 2*i+1)

		// insert right child
		root.Right = TurnArrayIntoTree(nums, 2*i+2)

		return &root
	}

	return nil
}
